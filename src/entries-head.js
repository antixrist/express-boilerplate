/** Подключать этот файл во всех точках входа в приложение! */

let installed = false;

module.exports = ({
  rejectionLogFn = void 0,
  onDeathOpts = {
    uncaughtException: true,
    debug: true
  },
  sourceMapsOpts = {}
} = {}) => {
  if (installed) { return; }
  installed = true;
  
  /**
   * ловим не пойманные promise-исключения.
   * если надо, чтобы процесс умирал,
   * то подключить `hard-rejection` вместо `loud-rejection`
   */
  require('loud-rejection')(rejectionLogFn);
  
  /**
   * подключаем поддержку sourcemap'ов
   */
  require('source-map-support').install(sourceMapsOpts);
  
  /**
   * приблуда ловит все непойманные исключения и системные сигналы об остановке процесса.
   * здесь можно и нужно тушить и останавливать всё, что можно и нужно потушить и остановить
   * (например коннекты к базе данных)
   */
  const onDeath = require('death')(onDeathOpts);

  // юзать вот так:
  // const disableOnDeath = onDeath((signal, err) => {
  //
  // });
  
  return { onDeath };
};
