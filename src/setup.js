import util  from 'util';
import death from 'death';
import { onShutdown } from './utils';

let initialized = false;

setup();

function setup () {
  if (initialized) { return; }
  
  initialized = true;
  
  /** настраиваем util.inspect */
  util.inspect.defaultOptions.depth          = null;
  util.inspect.defaultOptions.colors         = true;
  util.inspect.defaultOptions.breakLength    = 9999;
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
   * ловим необработанные promise-исключения.
   * если не надо, чтобы процесс умирал,
   * то подключить `loud-rejection` вместо `hard-rejection`.
   * тогда коллбек будет вызываться для каждого непойманного
   * исключения поочерёдно _в момент остановки процесса_!
   * (а не в момент выброса жтого исключения)
   *
   * В версиях ноды >7.0 использование `process.on('unhandledRejection')` выбрасывает DeprecationWarning.
   * Так что, в принципе, этот обработчик можно удалить и просто следить за тем,
   * чтобы во всех используемых промисах был установлен catch-обработчик.
   */
  // require('hard-rejection')(onShutdownRunner);
}
