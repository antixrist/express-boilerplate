import fs from 'fs';
import path from 'path';
import glob from 'glob';
import BannerPlugin from 'webpack/lib/BannerPlugin';
import HotModuleReplacementPlugin from 'webpack/lib/HotModuleReplacementPlugin';

const cwd = process.cwd();
const SCRIPTS_SOURCES = 'src';
const SCRIPTS_TARGET = process.env.NODE_ENV == 'production'
  ? 'dist'
  : 'build'
;

/** список npm-зависимостей */
const nodeModules = fs.readdirSync('node_modules').filter(x => !['.bin'].includes(x));
/**
 * Основной webpack-конфиг.
 * Настраивать можно любые опции - никаких побочных эффектов
 * на остальных этапах настройки сборки быть не должно
 */
const config = {
  context: cwd,
  target: 'node',
  recordsPath: path.join(cwd, SCRIPTS_TARGET, '_records'),
  /**
   * Ищем в директории-контексте вот такие файлы: `/\/[^_]{1}[^\\\\\/]*\.jsx?/`
   * (т.е. js/jsx и имена у которых не начинаются с нижнего подчёркивания)
   * и из полученного массива собираем формат для вебпака:
   * { 'entry1': './entry1.js', 'entry2': './entry2.jsx' }
   */
  entry: glob.sync(`${SCRIPTS_SOURCES}/!(_)*.js`).reduce((entries, file) => {
    const entryName    = path.basename(file, path.extname(file));
    entries[entryName] = [
      // 'webpack/hot/signal.js',
      'babel-polyfill',
      './'+ file
    ];
    
    return entries;
  }, {}),
  output: {
    filename: `[name].js`,
    chunkFilename: `[name].js`,
    hotUpdateChunkFilename: `[id].hot-update.js`,
    /** папка назначения */
    path: path.join(cwd, SCRIPTS_TARGET)
  },
  node: {
    __dirname: true,
    __filename: true
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.json', '.json5'],
    modules: ['node_modules'],
    alias: {}
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      // { test: /\.jsx?$/, loader: 'source-map-loader', enforce: 'pre' },
      { test: /\.(txt|html?)$/, loader: 'raw-loader' },
      { test: /\.json5?$/, loader: 'json5-loader' },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ],
    // noParse: [],
  },
  externals: [
    function (context, request, cb) {
      const pathStart = request.split('/')[0];
      if (nodeModules.indexOf(pathStart) >= 0 && request != 'webpack/hot/signal.js') {
        return cb(null, "commonjs " + request);
      }
      cb();
    }
  ],
  watchOptions: {
    aggregateTimeout: 200,
  },
  plugins: [
    new BannerPlugin({
      banner: `require('source-map-support').install({ environment: 'node' });`,
      raw: true,
      entryOnly: false
    }),
    // new HotModuleReplacementPlugin({ quiet: true })
  ],
  stats: {
    colors: true,
    chunks: false,
    modules: false,
    origins: false,
    entrypoints: true,
  }
};

export default config;
