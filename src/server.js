require('source-map-support').install();

import './setup';
import Debug from 'debug';
import config from './config';
import { onShutdown, logger } from './utils';
import { app } from './app';

onShutdown((err, signal) => err && logger.error(err.stack));

const debug = Debug('app:server');
const port = app.get('port') || config.get('express:port');
port && app.set('port', port);
!port && logger.warn('Port is undefined. Random port will used');

/** Listen on provided port, on all network interfaces. */
const server = app.listen(port, () => {
  const address = server.address();
  debug(`Start listening on ${address.address}:${address.port}`);
  
  /** шлём событие `ready` для `pm2`, если приложение запущено им */
  process.send && process.send('ready');
});

/** Event listener for HTTP server "error" event. */
server.on('error', err => {
  if (err.syscall !== 'listen') {
    throw err;
  }
  
  let bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  
  /** handle specific listen errors with friendly messages */
  switch (err.code) {
    case 'EACCES':
      throw new Error (bind + ' requires elevated privileges');
      break;
    case 'EADDRINUSE':
      throw new Error (bind + ' is already in use');
      break;
    default:
      throw err;
  }
});

export default server;
