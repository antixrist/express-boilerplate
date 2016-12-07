## Запуск с babel'ем
[example-node-server](https://github.com/babel/example-node-server)

## Node.js
- `pm2` (`pm2-logrotate`, [как юзать socket.io на кластеризованном приложении](https://github.com/Unitech/PM2/issues/637#issuecomment-215915328))
- `cross-spawn` / `execa`
- `mz` - промайзнутые системные библиотеки
- `create-error` - удобный враппер для создания собственных классов ошибок
- 
- `node-notifier`
- `nodejs-dashboard`
- `safe-regex` - проверка регулярок на быстроту выполнения - Regular expression Denial of Service (ReDoS)

### Express.js
- `express-generator`
- `compression`
- `vhost` - для поддоменов (например `api.domain.tld`)
- `body-parser`
- `multer` для `multipart/form-data`
- `morgan` для логов со стриммингом, `file-stream-rotator` для ротации
- `response-time`
- `connect-timeout`
- `basic-auth-connect` (deprecated) / `basic-auth`
- `http-errors` - удобная обёртка для посыла http-ошибок
- `negotiator` - пока не вкурил как и где юзать, но, видать, штука нужная
- 
- `express-redirect`
- `forcedomain`
- `express-uncapitalize` (todo: проверить - возможно `express` имеет встроенные средства для таких редиректов)
- `redirect-trailing-slash` / `express-slash`
- 
- `express-session`
- `cookie-parser`
- `cookie-signature` - подпись кук
- `connect-redis` (сессии в редисе) / `express-mysql-session` (сессии в mysql)
- `passport` и его стратегии (в т.ч. `passport-local`, `passport-hash`)
- `bcrypt-nodejs` / `pwd` / `pswd` для паролей
- `express-urlrewrite` - 301 редирект
- `passport.socketio` / `express-socket.io-session` - шаринг сессии между экспрессом и socket.io
- `clearsitedata` - устанавливает специальный заголовок, чтобы браузер почистил кэш, куки, стораджи (полезно при логауте)
- 
- `express-validator` - для валидации данных в теле запроса (надстройка над `validator`)
- `lusca` / `helmet` (`helmet` лучше)
- `csurf` - csrf (этот лучше)
- `cors`
- `ratelimiter` - rate limit запросов с хранилищем в редисе (но по-хорошему этим должен заниматься nginx)
- `on-finished`
- 
- `portastic` - нахождение свободных локальных портов (удобно для dev-запуска)
- `serve-static` (встроен в сам экспресс)
- `http-proxy-middleware`
- `express-request-language`
- `rest-sugar` - обёртка для rest. нормальный сахар для rest'а надо поискать
- `express-resource` (очень старый) / `restler` - rest
- `join-monster` - GraphQL -> SQL
- `method-override`
- `connect-rid` - генератор request-id
- 
- `node-inspector` / `devtool` - отладка в консоли хрома
- `errorhandler` - для рендера ошибок на клиент (only dev)
- `api-error-handler` - http-ошибки (4xx-5xx) заворачивает в json
- `express-status-monitor`
- 
- `express-expose` - выдёргивание серверных методов и переменных на фронт в шаблонизатор (особо не нужен, но мало ли)

```javascript
app.set('strict routing', true);
app.set('x-powered-by', false);
```

### Конфигурация
- `dotenv`
- `nconf`
- `electrode-confippet`
- `env-cmd`
- `rc`
- `configstore` - удобно записывать пользовательские конфиги, например

### Обработка ошибок
- `death`
- `loud-rejection`

### Кластеризация процессов
- `strong-cluster-control`

### ФС
- `anymatch` - матчер по чему угодно (глоб, регэксп, етс)
- `chokidar` - слушатель фс
- `fs-extra`
- `path-exists`
- `mkdirp`
- `del`
- `parse-filepath` - доабвляет некоторые поля к стандартному выводу
- `is-dotfile`
- `is-absolute`
- `is-relative`
- `relative` - расширенный `path.relative()`

### DB
- `mysql2`
    - `knex`, `bookshelf`
    - `sequelize` (`sequelize-auto`, `sequelize-definer`, `sequelize-hierarchy`, `sequelize-values`)
- `pg` / `pg-bluebird` / `pg-native`
- `ioredis` / `redis`, `redlock`
- `reds` - поиск в редисе
- `kue` - очередь с приоритетами в редисе (но для этих целей лучше брать `rabbitmq`)

### Права
- `acl`
- `cancan`

### Консоль
- `object-inspect`
- `debug`
- `intel` / `bunyan` / `log4js` / `tracer` / `winston` - многоуровневое (danger/error/fatal) логирование куда угодно - консоль, файлы, stdout (`log4js` медленный, `winston` - популярный, `tracer` - интересный)
- `microlog`
- `chalk` - раскраска
- `better-console` - добавление console.table-методов
- `cllc` / `multispinner` / `observatory` / `ora` - вывод с лоадером (вроде как)
- `commander` - настройка cli-аргументов для запуска приложения (с блекджеком и генератором справки)
- `liftoff` - bin'арник для своего пакета
- `eyes` - цветной вывод данных
- `inquirer` - cli-промптер
- `minimist` / `yargs` - парсер cli-аргументов
- `progress` - настраиваемый прогресс-бар

### Данные
- `json5` - json с блекджеком и комментиками
- `JSONSchema`: `ajv`
- `joi` / `schema-inspector` / `validator` - санитизация/валидация
- `checkit`
- `repository`
- `normalizr`, `reselect` - для flux-архитектуры
- `normalize-object`
- `kind-of` - нормальная замена typeof
- `deep-diff`
- `tableize` - схлопывает json-структуру в объект вида `{'level1key': 'level1value', 'level1key.level2key': 'level2value'}`
- `diff`
- `jiff`
- `fastest-clone`
- `yn` - parse yes/no like values

### Рекваестеры
- `proxy-agent`
- `caw`
- `got`
- `request` (`request-promise`), `@request/interface`, `@request/api`
- `needle`
- `node-fetch`
- `superagent`
- `download`
- `is-online` - есть ли коннект с интернетом
- `is-reachable` - есть ли коннект с конкретным ресурсом
- `node-readability` - вычленение основного текста со страницы

### Кравлеры
- `crawler`
- `scrape-it`
- `x-ray-crawler`

#### Headless-браузеры
- `node-horseman`
- `nightmare`
[весь список](https://github.com/dhamaniasad/HeadlessBrowsers)

#### Проксики
- `proxy-search`
- `proxylist`

#### Юзер-агентики
- `random-useragent`

#### Печеньки
- `cookie`
- `tough-cookie`
- `cookies.txt`
- `react-cookie`

#### Скриншотилки
- `pageres`
- `webshot`

### Урлы и IP
- `parseurl`, `qs`
- `ip`
- `geoip-lite` / `maxmind`
- `fast-url-parser` и `querystringparser`
- `url-parse-lax` - расширенный url.parse - без протоколов и с ip
- `encodeurl`
- `filenamify-url`
- `humanize-url`
- `normalize-url`
- `protocolify`
- `urijs`
- `url-pattern`

### Офисные форматы
- `docxtemplater`
- `excelize`
- `exceljs`
- `xml2js` / `fast-xml2js`

### Генераторы (чисел, строк, данных, uid'ов)
- `faker`
- `faker.js`
- `hashids` / `identifier` - строки из чисел
- `node-uuid` / `uid-safe`
- `shortid`

#### Псевдорандом с посевом
- `mersenne-twister`
- `random-seed`

#### Комбинаторика
- `js-combinatorics`
- `math-combination`

### Хэширование
- `murmurhash-native` - быстрое и (вроде как) наименее коллизионное хэширование
- `object-hash`
- `json-stable-stringify`

### Полезности
- `lodash`
- `bluebird`
- `mz` - promise-обёртка над системными функциями
- `pify` - промисификатор
- `thunkify` - callback'ифицирует callbacks, arrays, generators, generator functions, and promises
- `co`
- `socket.io`
- `inherits`
- `sliced`
- `d` - удобный описатель дескрипторов свойств
- `delegates` - делегация методов и пропертей прототипа к какому-либо свойству этого прототипа
- `escape-html`
- `function-done`
- `object-path` / `dottie` - продвинутый `_.get()`
- `numeral` - работа с числами
- `moment` - это, понятное дело, дата/время (+ `helper-moment` для шаблонов)
- `mem`
- `filesize` - человекопятный размер файлов
- `pretty-hrtime` - человекопятный `process.hrtime()`
- `humanize-number` - человекопонятные числа
- `iconv-lite`
- `jschardet` - определение кодировки
- `lru-cache`
- `cheerio`
- `shimmer` - типа Proxy через monkeypatching

### Очередя и таски
- `queue3`
- `enqueue`
- `argumentable-queue`
- `node-schedule`
- `cron`
- `cron-parser`
- `node-schedule`

### Стримы
- `event-stream`
- `through2`
- `isstream`
- `lazypipe`
- `destroy`

### Email
- `nodemailer`
- `mailgen` / `mailmason` - html-шаблон для мыла

## Изображения
- `sharp`
- `image-size`
- `image-type`
- `tesseract.js` - распознавалка текста
- `exif2` / `gm-exif` / `libexif`
- `gify` - делает гифку из видео
- `graphicsmagick2`

### Морфология и текст
- `leven` - самый быстрый левенштейн
- `az`
- `fuzzyset.js`
- `lunr-languages`
- `word2vec` / `word2vec-native` / `word2vec.js`
- `wuzzy`

### DI
- `bottlejs`

### Карты
- `proj4` - перевод из одной проекции в другую
- `wkx` - парсинг geojson (для браузера в том числе)

### Сборка
- `gulp`
- `webpack`
- `chokidar` / `watchpack`
- `browser-sync`

### Генерация документации
- `apidoc`

### Деплой
- [pod](https://github.com/yyx990803/pod)
- [dokku](https://github.com/dokku/dokku)
- [shipit](https://github.com/shipitjs/shipit)

## Примеры приложений
- [hackathon-starter](https://github.com/sahat/hackathon-starter)
- [holyjs](https://github.com/holyjs/holyjs)
- [node-daemons](https://github.com/pipll/node-daemons) - с демонами на node.js

## Front
- `asap` / `next-tick` / `setimmediate` - как только, так сразу. Кроссбраузерный `process.nextTick`
- `simulant` - симуляция реальных браузерных событий
- `smartcrop`
- `vkey`
- `drop-anywhere` - для d'n'd загрузки файлов где угодно на странице
- `focus` - нахождение цетральной сущности на изображении для последующей фокусировки или кропа