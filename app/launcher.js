#!/usr/bin/env node

import http  from 'http';
import Debug from 'debug';
import portastic from 'portastic';
import {findUnusedPort} from './utils';
import app   from './server';

const debug = Debug('app:launcher');

(async function () {
  /**
   * Get port and store in Express.
   */
  let port = normalizePort(app.get('port'));
  if (app.get('env') == 'production') {
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

  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.on('error', onError);
  app.listen(port, function () {
    debug('Start listening on ' + port);
  });

  /**
   * Event listener for HTTP server "error" event.
   */
  function onError (error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    let bind = typeof port === 'string'
          ? 'Pipe ' + port
          : 'Port ' + port
      ;

    // handle specific listen errors with friendly messages
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

/**
 * Normalize a port into a number, string, or false.
 */
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
