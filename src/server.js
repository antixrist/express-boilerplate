require('source-map-support').install();

import './setup';
import http  from 'http';
import Debug from 'debug';
import { onShutdown } from './utils';
import { app } from './app';

const debug = Debug('app:launcher');
const port = app.get('port');
// const server = http.createServer(app);

onShutdown((err, signal) => err && console.error(err.stack));

/** Listen on provided port, on all network interfaces. */
app.on('error', onError);
app.listen(port, function (err) {
  console.log('listen', err);
  if (err) {
    return onError(err);
  }
  
  debug('Start listening on ' + port);

  // шлём событие `ready` для `pm2`, если приложение запущено им
  process.send && process.send('ready');
});

/** Event listener for HTTP server "error" event. */
function onError (error) {
  console.log('onError', error);
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
      throw new Error (bind + ' requires elevated privileges');
      break;
    case 'EADDRINUSE':
      throw new Error (bind + ' is already in use');
      break;
    default:
      throw error;
  }
}
