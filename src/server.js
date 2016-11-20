#!/usr/bin/env node

const { onDeath } = require('./entries-head')();

import inspect from 'object-inspect';
import http  from 'http';
import Debug from 'debug';
import portastic from 'portastic';
import { findUnusedPort } from './utils';
import { app } from './app';

const debug = Debug('app:launcher');
const isProduction = app.get('env') == 'production';

(async function () {
  /** todo: установку/поиск порта перенести в app.js */
  let port = normalizePort(app.get('port'));
  if (isProduction) {
    if (!port) {
      console.error(`Port '${port}' is invalid`);
      process.exit(1);
    }

    let postIsOpen = await portastic.test(port);
    if (!postIsOpen) {
      console.error(`Port ${port} is already in use`);
      process.exit(1);
    }
  } else {
    if (!port) {
      console.warn(`Port '${port}' is invalid. Fallback to random port`);
      port = await findUnusedPort();
    }
    if (!port) {
      console.error(`Not found available port`);
      process.exit(1);
    }
  }

  app.set('port', port);

  /** Create HTTP server. */
  const server = http.createServer(app);

  /** Listen on provided port, on all network interfaces. */
  server.on('error', onError);
  app.listen(port, function (err) {
    if (err) {
      return onError(err);
    }
    
    if (isProduction) {
      console.log('Start listening on ' + port);
    } else {
      debug('Start listening on ' + port);
    }
    // шлём событие `ready` для `pm2`, если приложение запущено им
    process.send && process.send('ready');
  });

  /** Event listener for HTTP server "error" event. */
  function onError (error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    let bind = typeof port === 'string'
          ? 'Pipe ' + port
          : 'Port ' + port
      ;

    /** handle specific listen errors with friendly messages */
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
})();

/** Normalize a port into a number, string, or false. */
function normalizePort (val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const disableOnDeath = onDeath((signal, err) => {
  console.log('graceful shutdown', inspect(signal), inspect(err));
  // db.stop(function(err) {
  //   // если всё остановилось хорошо, то шлём 0.
  //   // если какая-то фигня, то показывем, что завершилось с ошибкой, посылая 1
  //   process.exit(err ? 1 : 0);
  // });
  setTimeout(() => process.exit(0), 2000);
});
