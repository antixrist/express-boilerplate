import util from 'util';
import death from 'death';
import { onShutdown } from './';

/**
 * вот когда `NODE_ENV` установлен в 'development' (из cli или напрямую),
 * то соурсмапы генерируются прям как надо. хз что за магия
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let initialized = false;

setup();

function setup () {
  if (initialized) { return; }
  
  initialized = true;
  
  /** настраиваем util.inspect */
  util.inspect.defaultOptions.depth          = null;
  util.inspect.defaultOptions.colors         = true;
  // util.inspect.defaultOptions.breakLength    = 9999;
  util.inspect.defaultOptions.maxArrayLength = null;
  
  /** вешаем обработчик на смерть процесса */
  death({
    uncaughtException: true,
    debug: false
  })((signal, err) => {
    /** если нет кастомных обработчиков */
    if (!onShutdown.handlers.length) {
      /** выплёвываем в stderr ошибку, если она есть */
      err && console.error(err.stack);
    }
    /** а если есть кастомные обработчики */
    else {
      /** поочереди синхронно их выполняем */
      onShutdown.handlers.forEach(cb => cb(err, signal));
    }
    
    /**
     * руками убиваем процесс.
     * если есть ошибка, то ставим код завершения == `1`.
     * так внешние демоны смогут понять, что приложение именно упало, а не успешно завершилось.
     */
    process.exit(err ? 1 : 0);
  });
  
  /**
   * 'SIGUSR2' - этот сигнал посылает `nodemon` во время перезапуска приложения
   */
  const nodemonSignal = 'SIGUSR2';
  process.once(nodemonSignal, function () {
    /** если есть кастомные обработчики */
    if (onShutdown.handlers.length) {
      /** поочереди синхронно их выполняем */
      onShutdown.handlers.forEach(cb => cb(null, nodemonSignal));
    }
    
    /** убиваем сами себя (кхе-кхе) */
    process.kill(process.pid, nodemonSignal);
  });
}
