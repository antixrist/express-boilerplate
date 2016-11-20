/**
 * ловит не пойманные promise-исключения.
 * если надо, чтобы процесс умирал,
 * то подключить `hard-rejection` вместо `loud-rejection`
 */
require('loud-rejection/register');

/**
 * подключаем поддержку sourcemap'ов
 */
require('source-map-support/register');
