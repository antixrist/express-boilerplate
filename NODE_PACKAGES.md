Ещё много не откаталогизированного [здесь](https://github.com/antixrist?utf8=%E2%9C%93&tab=repositories&q=&type=fork&language=)

## Запуск с babel'ем
[example-node-server](https://github.com/babel/example-node-server)
[примеры скриптов запуска в `package.json`](https://github.com/comerc/yobr)

## Примеры приложений
- [hackathon-starter](https://github.com/sahat/hackathon-starter)
- [holyjs](https://github.com/holyjs/holyjs)
- [node-daemons](https://github.com/pipll/node-daemons) - с демонами на node.js
- [multi-process-nodejs-example](https://github.com/RisingStack/multi-process-nodejs-example) - воркеры, rabbit, redis
- [koa-chat](https://github.com/iliakan/koa-chat) пример от Ильи Кантора
- [Task-Manager-API](https://github.com/GiperScriper/Task-Manager-API) Rest с авторизацией через jsonwebtoken
- [express-mongo-db](https://github.com/floatdrop/express-mongo-db)
- [node-express-realworld-example-app](https://github.com/gothinkster/node-express-realworld-example-app)

## Node.js
- `learnyounode` - интерактивная cli-обучалка
- `pm2` (`pm2-logrotate`, [как юзать socket.io на кластеризованном приложении](https://github.com/Unitech/PM2/issues/637#issuecomment-215915328))
- `cote` - набор библиотек для построения микросервисного кластера ([статья](https://habrahabr.ru/company/ruvds/blog/329784/))
- `axon` - zeromq на ноде
- `hotel` - управление и старт локальных dev-доменов для локальных проектов на всевозможных технологиях
- `cross-spawn` / `execa`
- `mz` - промайзнутые системные библиотеки
- `caller` - выдаёт путь модуля, который про'require'ил текущий
- `shelljs` - bash-функции прямо в ноде
- `precommit-hook` - тулза запускающая npm-скрипты на коммиты / `husky` - не даёт коммитить/пушить, если выполнение чего-то подобного: `{ "scripts": { "precommit": "npm test", "prepush": "npm test" } }` прошло с ошибками
- `app-module-path` - require хук, для маппинга кастомной рутовой директории
- `node-notifier`
- `nodejs-dashboard`
- `safe-regex` - проверка регулярок на быстроту выполнения - Regular expression Denial of Service (ReDoS)
- `reify` - врубает `import` без бабелей/вебпаков
- `open` - открывает ссылку в дефолтовом браузере системы
- `toobusy-js`
- `light-cycle` - реализация hashringcycle (аналог round-robin) для выбора шардов на лету
- `hyper` - кроссплатформенный терминал на electron'е
- `mediacenterjs` - браузерный персональный медиацентр
- `detect-node` - запущен ли текущий код из под ноды
- `localtunnel` - шарит локальный адрес наружу
- `npm-check` - тулза для обновления зависимостей с консольным ui

### Тесты
- `ava`
- `chai`
- `mocha`

### Express.js
- [pillarjs](https://github.com/pillarjs) - много low-level вкусняшек
- `keygrip` - подпись и валидации подписанных данных (module for signing and verifying data (such as cookies or URLs) through a rotating credential system)
- `express-generator`
- `compression`
- `vhost` - для поддоменов (например `api.domain.tld`)
- `body-parser`
- `multer` для `multipart/form-data`
- `morgan` для логов со стриммингом, `file-stream-rotator` для ротации
- `response-time`
- `connect-timeout`
- `basic-auth-connect` (deprecated) / `basic-auth`
- `negotiator` - пока не вкурил как и где юзать, но, видать, штука нужная
- `hall` - роутер. но нафига?
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
- `bcrypt` / `bcrypt-nodejs` / `bcryptjs` / `pwd` / `pswd` для паролей
- `express-urlrewrite` - 301 редирект
- `passport.socketio` / `express-socket.io-session` - шаринг сессии между экспрессом и socket.io
- `clearsitedata` - устанавливает специальный заголовок, чтобы браузер почистил кэш, куки, стораджи (полезно при логауте)
- 
- `express-validator` - для валидации данных в теле запроса (надстройка над `validator`)
- `lusca` / `helmet` (`helmet` лучше)
- `csurf` - csrf (этот лучше)
- `cors`
- `ratelimiter` - rate limit запросов с хранилищем в редисе / `limiter` (но по-хорошему этим должен заниматься nginx)
- `on-finished`
- 
- `portastic` - нахождение свободных локальных портов (удобно для dev-запуска) / `portscanner` - тоже самое, но, возможно, работает и для внешних айпишников / `get-port` - берёт заданный порт либо рандомный, если занят
- `serve-static` (встроен в сам экспресс)
- `http-proxy-middleware` - полезная гибкая штука для перенаправления запросов на другие сервера
- `express-request-language`
- `rest-sugar` - обёртка для rest. нормальный сахар для rest'а надо поискать
- `express-resource` (очень старый) / `restler` - rest
- `join-monster` - GraphQL -> SQL
- `method-override`
- `connect-rid` - генератор request-id
- 
- `kraken-js` - мощный boilerplate и конфигуратор для express'а и всякие штуки в него входящие, типа `express-enrouten`
- `node-inspector` / `devtool` / `iron-node` - отладка в консоли хрома
- `express-status-monitor`
- 
- `express-expose` - выдёргивание серверных методов и переменных на фронт в шаблонизатор (особо не нужен, но мало ли)
- `greenlock` - клиент для `let's encrypt` (вроде как)

```javascript
app.set('strict routing', true);
app.set('x-powered-by', false);
```

### Koa
- `koa-router` (почти полностью повторяет экспрессовый роутер) / `koa-route` (облегчённая версия) / `koa-trie-router` (или `wayfarer`) - composable роуты, как в express'е
- `koa-mount` - чтобы как в express'е - можно монтировать инстанс в роут другого инстанса
- `koa-session` - на куках / `koa-generic-session` - на редисе/монге/mysql/pg/sequelize/etc
- `koa-redis`
- `koa-static` / `koa-send` / `koa-etag` / `koa-conditional-get` - для статики
- `koa-compress`
- `koa-views`
- `koa-logger`

### Прочие фреймворки
- `cote`
- `micro`
- `studio`
- `socketcluster`

### Сокеты
- `socket.io` - стандарт дефакто, но давным-давно раздулся и уехал не в ту сторону.
- `sockjs` - проще, понятнее, предсказуемее.
- `sticky-session` - шаринг сессий между воркерами (например, с помощью `cluster`)

### Конфигурация
- `nconf` / `config` / `confit`. `config` похож на `nconf`, но вроде поширше, `confit` выглядит самым вкусным (к тому же он от `kraken`'a).
- `dotenv`
- `electrode-confippet`
- `env-cmd`
- `rc`
- `configstore` - удобно записывать пользовательские конфиги, например

### Обработка ошибок и завершения процесса
- `loud-rejection` / `uncaught` - ловля необработанных ошибок/реджектов для ноды и браузеров
- `http-errors` / `boom` - удобная обёртка для посыла http-ошибок / `micro-boom`
- `create-error` / `es6-error` / `super-error` - враппер для создания собственных классов ошибок
- `stacktrace-js` (асинхронный) / `stacktrace-parser` (синхронный, используется в ReactNative) - парсер стектрейсов, унификация всего того, что выплёвывают браузеры
- `errio` / `serialize-error` - объект ошибки в json
- `errorhandler` - для рендера ошибок на клиент (only dev)
- `api-error-handler` - http-ошибки (4xx-5xx) заворачивает в json
- [ещё пример создания http-ошибок](https://www.npmjs.com/package/micro#error-handling)
- `death` / `signal-exit`
- `tree-kill` - убить self-процесс и все дочерние форки
- `node-report`
- `trace` - максимально удлиняет стек вызовов в стектрейсах
- `clarify` - вырезает из стектрейсов строки с системными вызовами (`node --stack_trace_limit=100 -r trace -r clarify wired.js`)
- `stack-chain` - кастомный парсер стектрейсов для маппинга/фильтрации/etc
[пример с trace, clarify и stack-chain](https://gist.github.com/antixrist/88b3d77f803377944789f02357b83c89)
- [подходы к локальной обработке ошибок](https://learn.javascript.ru/exception)
- сервисы для отправки и анализа непойманных ошибок: https://errorception.com/ http://www.muscula.com/

### Кластеризация процессов
- `strong-cluster-control`

### ФС
- `anymatch` - матчер по чему угодно (глоб, регэксп, етс)
- `chokidar` - слушатель фс
- `fs-extra`, `graceful-fs`
- `glob` / `globby` / `glob-all`
- `klaw` - фс-walker на стримах
- `path-exists`
- `mkdirp`
- `del` / `ncp`
- `parse-filepath` - добавляет некоторые поля к стандартному выводу
- `is-dotfile`
- `is-absolute`
- `is-relative`
- `relative` - расширенный `path.relative()`
- `proper-lockfile` - `lock`-файл
- `steno` - помогает при конкурентной запси в файл - делает все вызовы на запись последовательно

### DB
- `mysql2`
    - `knex`, `bookshelf`
    - `sequelize` (`sequelize-auto`, `sequelize-definer`, `sequelize-hierarchy`, `sequelize-values`)
- `pg` / `pg-bluebird` / `pg-native`
- `ioredis` / `redis` / `hiredis`, `redlock`
- `reds` - поиск в редисе
- `kue` - очередь с приоритетами в редисе (но для этих целей лучше брать `rabbitmq`)
- `tortoise` - клиент для rabbitmq
- `store` - нормальная полная кроссбраузерная обёртка над localStorage. можно сделать асинхронным для обёртки над редисом или типа того. В ноде хорошо работает в связке с `node-localstorage`.
- `localforage` - то же, что и `store`, только над `indexeddb`, `websql`, `localstorage`. Асинхронный.
- `node-localstorage` - localStorage для NodeJS
- `lowdb` - файловая json-бд поверх lodash'а

### Права
- `acl`
- `cancan`

### Консоль
- `object-inspect`
- `chalk` / `ansicolors` - раскраска
- `better-console` - добавление console.table-методов
- `cllc` / `multispinner` / `observatory` / `ora` / `draftlog` - вывод с лоадером
- `commander` - настройка cli-аргументов для запуска приложения (с блекджеком и генератором справки)
- `liftoff` - bin'арник для своего пакета
- `eyes` - цветной вывод данных
- `inquirer` - cli-промптер
- `minimist` / `yargs` - парсер cli-аргументов
- `progress` / `gauge` - настраиваемый прогресс-бар

### Логирование
- `debug`
- `microlog`
- `intel` / `bunyan` / `log4js` / `tracer` / `winston` / `eazy-logger` / `glogg` - многоуровневое (danger/error/fatal) логирование куда угодно - консоль, файлы, stdout (`log4js` медленный, `winston` - популярный, `tracer` - интересный)
- `gelf-stream` / `gelf-pro` - https://habrahabr.ru/company/2gis/blog/329128/

### Данные
- `lodash` / `iterare`
- `object-path` / `dottie` - продвинутый `_.get()`
- `string` / `strman` - если лодашевских методов работы со строками будет не хватать
- `numeral` - работа с числами
- `moment` - это, понятное дело, дата/время (+ `helper-moment` для шаблонов) / `date-fns` - улучшенная (и при этом проще) библиотека для манипуляций с датами / `jstimezonedetect` - для браузера (в основном)
- `filesize` - человекопятный размер файлов
- `pretty-hrtime` - человекопятный `process.hrtime()`
- `humanize-number` - человекопонятные числа
- `expiry-js` - парсер длительностей (1M, 1Y, 1h, 1m, 1s, 1ms, etc)
- `json5` - json с блекджеком и комментиками
- `JSONSchema` / `ajv` - создание и валидация JSONScheme'ы
- `joi` / `schema-inspector` / `validator` / `forms` - санитизация/валидация
- `checkit`
- `repository`
- `normalizr`, `reselect` - для flux-архитектуры
- `normalize-object`
- `kind-of` - нормальная замена typeof
- `tableize` - схлопывает json-структуру в объект вида `{'level1key': 'level1value', 'level1key.level2key': 'level2value'}`
- `deep-diff` / `diff` / `jsondiffpatch` / `jiff`
- `fastest-clone`
- `deepmerge`
- `yn` - parse yes/no like values
- `jsesc` - шибко умное экранирование
- `insane` - `jevix` для js
- `BitArray.js` ([git](https://github.com/brockwhittaker/BitArray.js)) Очень оптимизированный массив для хранения битовых флагов
- `pako` - zlib для js
- `yauzl` - unzip
- `lz-string` - мощное сжатие/декомпрессия строк для хранения, к примеру, в localStorage
- `google-libphonenumber` - крутая штука для парсинга номеров телефонов
- `quickselect`
- `bintrees` - самосортируемая структура с бинарным поиском
- `simple-statistics` - статистические функции (в т.ч. комбинаторика и перестановки)
- `cartesian` - комбинаторика
- `js-combinatorics` - комбинаторика
- `math-combination` - комбинаторика
- `cuint` / `bignumber.js` / `long` / `bn.js`
- `json-depth-stream` - потоковый парсер огромных json'ов

### Рекваестеры и http-тулзы
- `dnscache`
- `proxy-agent`
- `caw`
- `got`
- `wreck`
- `request` (`request-promise`), `@request/interface`, `@request/api`
- `needle`
- `node-fetch`
- `superagent`
- `download`
- `is-online` - есть ли коннект с интернетом
- `is-reachable` - есть ли коннект с конкретным ресурсом
- `node-readability` - вычленение основного текста со страницы
- `follow-redirects`
- `nock` - mock'и для http-запросов (удобно для тестирования и заглушки api)

#### Парсинг dom'а
- `jsdom` / `browser-env`
- `cheerio` / `whacko`
- `semantic-schema-parser` - парсер schema.org

#### Headless-браузеры и парсинг dom'а
- `node-horseman`
- `nightmare`
- `uirecorder` - что-то вроде selenium от alibaba'ы
- `leadfoot` - кроссплатформенная обёртка над Selenium
- [Chrome Headless](https://developers.google.com/web/updates/2017/04/headless-chrome)

[весь список](https://github.com/dhamaniasad/HeadlessBrowsers)

### Кравлеры
- `simplecrawler`
- `crawler`
- `scrape-it`
- `x-ray-crawler`
- `recrawler`
- `node-simple-crawler`

#### Проксики
- `proxy-search`
- `proxylist`
- `anyproxy` - свой прокси-сервер на ноде от alibaba'ы

#### Юзер-агентики
- `random-useragent`
- `bowser` - определитель для фронта

#### Печеньки
- `js-cookie`
- `cookie`
- `tough-cookie`
- `cookies.txt`
- `react-cookie`
- `cookies` - это для express'а/koa, и вряд ли нужен

#### Скриншотилки
- `pageres`
- `webshot`
- [Скриншотилка на базе безголового хрома](https://medium.com/@dschnr/using-headless-chrome-as-an-automated-screenshot-tool-4b07dffba79a)

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
- `prepend-http` - ну такое, особо бессмысленное
- `protocolify`
- `urijs`
- `url-pattern`

### Офисные форматы
- `docxtemplater`
- `excelize`
- `exceljs`
- `xml2js` / `x2js` / `fast-xml2js`

### Стримы
- `csv-stringify`, `fast-csv` / `csv-streamify`
- `JSONStream` / `json-depth-stream` - потоковый парсер огромных json'ов
- `event-stream`
- `split2`
- `through2`
- `shaper` - ограничитель скорости потока
- `isstream`
- `lazypipe`
- `destroy`
- `end-of-stream` / `on-stream-end`
- `stream-throttle`
- `highland`

### Генераторы (чисел, строк, данных, uid'ов)
- `faker`
- `faker.js`
- `hashids` / `identifier` - строки из чисел
- `node-uuid` / `uid-safe`
- `shortid`
- `sguid`
- `randexp` - генерация строки по регэкспу

#### Псевдорандом с посевом
- `random-js` / `mersenne-twister`
- `random-seed`
- `brorand` - кросс-платформенный `crypto.getRandomValues`
- `chance`

### Хэширование
- `murmurhash-native` - быстрое и (вроде как) наименее коллизионное хэширование
- `object-hash`
- `json-stable-stringify`
- `stringify-object`

### Полезности
- `bluebird` / `relike` / `awaiting` (для промисификации)
- `mz` - promise-обёртка над системными функциями
- `pify` - промисификатор
- `thunkify` - callback'ифицирует callbacks, arrays, generators, generator functions, and promises
- `co`
- `inherits`
- `sliced`
- `d` - удобный описатель дескрипторов свойств
- `delegates` - делегация методов и пропертей прототипа к какому-либо свойству этого прототипа
- `escape-html`
- `function-done` / `always-done`
- `mem` / `lru-cache` / `hashlru`
- `fast-memoize`
- `shimmer` - типа Proxy через monkeypatching
- `ware` - создание кастомной чепочки мидлварей (прям как в express'е)
- `archiver` - архиватор

### Очередя и таски
- `retry` / `tolerance`
- `function-rate-limit`
- `kue` - очередя на редисе
- `queue3`
- `enqueue`
- `argumentable-queue`
- `generic-pool`
- `denque`
- `node-schedule`
- `cron`
- `cron-parser`
- `are-we-there-yet` - трекинг статусов выполнения у коллекции задач и стримов

### Кодировки
- `encoding`
- `iconv-lite`
- `iconv`
- `jschardet` - определение кодировки

### AST-парсеры
- `pegjs` - произвольные синтаксические конструкции
- `esprima` - парсер ECMAScript на ECMAScript
- `parser-base` - каркас для строкового парсера (подобие `json5`)

### Email
- `nodemailer` / `postmark`
- `mailgen` / `mailmason` - html-шаблон для мыла

## Изображения
- `is-svg`
- `sharp` / `jimp` - полнофункциональная манипуляция
- `image-size`
- `image-type`
- `tesseract.js` - распознавалка текста
- `exif2` / `gm-exif` / `libexif`
- `gify` - делает гифку из видео
- `gm` / `graphicsmagick2`

### Морфология и текст
- `phpmorphy`
- `leven` - самый быстрый левенштейн
- `az`
- `fuzzyset.js`
- `lunr-languages`
- `word2vec` / `word2vec-native` / `word2vec.js`
- `wuzzy`
- `@google-cloud/speech` - разпознавание теста из аудио с помощью google cloud api (есть русский язык)
- `franc` - определение языка
- `@google-cloud/language` - определение языка, тональности текста, сущностей, предложений, токенов, etc. Это обёртка для Google Cloud Api. 

### DI
- `bottlejs`

### Цвета
- `color`
- `tinycolor2`
- `tinygradient`
- `chromatism`

### Карты
[Здесь](https://www.npmjs.com/~mourner) [много](https://www.npmjs.com/~mapbox-admin) интересного

- `rbush`, `kdbush`, `geokdbush` - браузерный spatial индекс из двухмерных точек для быстрого поиска вхождений в радиус и прямоугольную область (в т.ч. с учётом земной проекции).
- `@turf/turf` - d3 для карт. быстрая гео-математика/геометрия (в т.ч. поиск вхождений, etc)
- `proj4` - перевод из одной проекции в другую
- `wkx` - парсинг geojson (для браузера в том числе)
- `simplify-js` - сглаживание polyline-кривой
- `earcut` / `libtess` - расчёт триангуляции для полигона и набора точек
- `geojsonvt` - нарезка geojson'а на векторные тайлы (для оптимизации рендеринга)
- `geojson-utils` - line intersections, point in polygon, radius filtering, distance between two points, etc
- `leaflet-pip` / `point-in-polygon`
- `leaflet-draw` - добавление мышкой линий/полигонов/кружочков на leaflet-карту
- `polylabel` / `@mapbox/polylabel` - нахождение оптимальной точки для расположения лейбла внутри полигона
- `delaunator` - самая быстрая триангуляция

### Сборка
- `gulp`
- `webpack`, `webworkify-webpack`
- `chokidar` / `watchpack`
- `browser-sync`
- `parallelshell`

### Тестирование
- `supertest`
- `mocha` (`chai`) / `jasmin` (`karma`) / `nodeunit` / `ava` / `tape` / `jest`

### Генерация документации
- `apidoc`

### Деплой
- [pm2](https://github.com/Unitech/pm2)
- [pod](https://github.com/yyx990803/pod) - маленький аналог `pm2`
- [rsynced](https://github.com/rumkin/rsynced) - deploy-аналог pm2, но без гита
- [shipit](https://github.com/shipitjs/shipit) - gulp'ово/grunt'ово подобный деплойер
- [dokku](https://github.com/dokku/dokku) - heroku + docker

## Front
- `asap` / `next-tick` / `setimmediate` - как только, так сразу. Кроссбраузерный `process.nextTick`
- `simulant` - симуляция реальных браузерных событий
- `smartcrop`
- `vkey`
- `drop-anywhere` - для d'n'd загрузки файлов где угодно на странице
- `focus` - нахождение цетральной сущности на изображении для последующей фокусировки или кропа
- `criticalcss` / `critical` / `penthouse` - critical css
- `trunc-text`
- `trunc-html`
- `resize-observer-polyfill`
- `file-saver`
- `appmetrics.js` - обертка над User Timing API, с возможностью отправки всего намерянного в GA.
- `dom-serialize` - сериализация dom-нод в строку
- `block-elements` - определяет, является ли тег блочным (по названию)

### Полифиллы:
- `custom-event`
- `Stickyfill`
- `bounding-client-rect`
- `mutation-observer`
- `blob`
- `on-full-screen`, `is-full-screen`, `request-full-screen`, `exit-full-screen`
