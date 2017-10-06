Ещё много не откаталогизированного [здесь](https://github.com/antixrist?utf8=%E2%9C%93&tab=repositories&q=&type=fork&language=)

## Запуск с babel'ем
[example-node-server](https://github.com/babel/example-node-server)
[примеры скриптов запуска в `package.json`](https://github.com/comerc/yobr)
[полное описание настроики и запуска node-приложения](https://github.com/UsulPro/js-stack-from-scratch)
[шаблон проекта от предыдущего туториала](https://github.com/verekia/js-stack-boilerplate/tree/master-no-services)

## Примеры приложений
- [hackathon-starter](https://github.com/sahat/hackathon-starter)
- [Node.JS, Koa.js REST, Jade, MongoDB, Passport, Mongoose, Redis, Websocket](https://github.com/OlegLustenko/Koa_Mongo_Redis_Socket_IO_Passport)
- [holyjs](https://github.com/holyjs/holyjs)
- [node-daemons](https://github.com/pipll/node-daemons) - с демонами на node.js
- [multi-process-nodejs-example](https://github.com/RisingStack/multi-process-nodejs-example) - воркеры, rabbit, redis
- [koa-chat](https://github.com/iliakan/koa-chat) пример от Ильи Кантора
- [Task-Manager-API](https://github.com/GiperScriper/Task-Manager-API) Rest с авторизацией через jsonwebtoken
- [express-mongo-db](https://github.com/floatdrop/express-mongo-db)
- [node-express-realworld-example-app](https://github.com/gothinkster/node-express-realworld-example-app)
- [коротенький пример для api](https://gist.github.com/mistakster/1dd845b617fb3a3f7dbb)
- [пример multi-process приложения](https://github.com/HowProgrammingWorks/InterProcessCommunication)
- [примеры http-серверов - кластеризованных и нет, на фреймворках и нет](https://github.com/HowProgrammingWorks/NodeServer)
- [пример полноценного приложения парсера лайков](https://github.com/likeastore/collector)
- [пример полноценного приложения с тасками и задачами](https://github.com/likeastore/jobber)
- [actionhero - фреймворк с комплектом на все случаи жизни: кластер, таски, кеш, чат, логирование, файловый сервер, etc](https://github.com/actionhero/actionhero)
- [Настройка проекта на Node.JS с нуля](https://github.com/xanf/javascript.ninja-node-boilerplate), [видео](https://www.youtube.com/watch?v=RW5JjiFg2uw&index=7&list=WL)
- [Исходники по книге "Building apis with nodejs"](https://github.com/caio-ribeiro-pereira/building-apis-with-nodejs)
- [Куча примеров по взаимодействию express/koa с различными БД (neo4j, rethink, redis, etc)](https://github.com/caio-ribeiro-pereira/node-api-examples)
- [Пример с jwt-авторизацией](https://github.com/andrewda/jwt-server-base)
- [Создание бота для Steam по шагам](https://github.com/andrewda/node-steam-guide)
- [Пример с Koa, TypeORM, роутами и контроллерами](https://github.com/typeorm/typescript-koa-example)
- [Каркас api от команды Koa](https://github.com/koajs/api-boilerplate)
- [Boilerplate с Express, GraphQL, PG (с миграциями на knex'е), авторизацией (сессии в Redis'е), рассылкой (+шаблоны для email'ов) и всё это в Docker'е](https://github.com/kriasoft/nodejs-api-starter)

## Node.js
- `learnyounode` - интерактивная cli-обучалка
- `cote` - набор библиотек для построения микросервисного кластера ([статья](https://habrahabr.ru/company/ruvds/blog/329784/))
- `hotel` - управление и старт локальных dev-доменов для локальных проектов на всевозможных технологиях
- `cross-spawn` / `execa` / `respawn`
- `mz` - промайзнутые системные библиотеки
- `caller` - выдаёт путь модуля, который про'require'ил текущий
- `js-meter` - замеры и форматирование потребляемой памяти/cpu/etc
- `shelljs` - bash-функции прямо в ноде
- `precommit-hook` - тулза запускающая npm-скрипты на коммиты
- `husky` - не даёт коммитить/пушить, если выполнение чего-то подобного: `{ "scripts": { "precommit": "npm test", "prepush": "npm test" } }` прошло с ошибками
- `commitizen` - интерактивка для сообщений к коммитам (fix/refactor/test/etc)-
- `validate-commit-msg` - валидатор сообщений к коммитам
- `standard-version` - автоматический changelog при обновлении версии на основе сообщений к коммитам
- `app-module-path` - require хук, для маппинга кастомной рутовой директории
- `node-notifier`
- `nodejs-dashboard`
- `safe-regex` - проверка регулярок на быстроту выполнения - Regular expression Denial of Service (ReDoS)
- `reify` / `@std/esm` - врубает `import` без бабелей/вебпаков ([статья про `@std/esm`](https://blogs.windows.com/msedgedev/2017/08/10/es-modules-node-today/))
- `open` - открывает ссылку в дефолтовом браузере системы
- `toobusy-js`
- `memwatch-next` - следит за утечками, можно зафорсить сборку мусора
- `light-cycle` - реализация hashringcycle (аналог round-robin) для выбора шардов на лету
- `hyper` - кроссплатформенный терминал на electron'е
- `mediacenterjs` - браузерный персональный медиацентр
- `detect-node` - запущен ли текущий код из под ноды
- `localtunnel` - шарит локальный адрес наружу
- `node-inspector` / `devtool` / `iron-node` - отладка в консоли хрома
- `host-env` - определение серверной платформы, на которой запущена нода
- `snyk` - автосканер кода и зависимостей на известные уязвимости
- `webworker-threads` / `workerpool` - webworker'ы для ноды
- `in-publish` - обнаружение в npm-scripts факта запуска публикации пакета (во время локальной разработки), чтобы делать что-то, что не нужно делать во время dev-установки
- `shm-typed-array` - shared memory для node'ы
- `v8-natives` - вызов нативныз v8-методов, в т.ч. принудительный вызов gc
- [пример контроллера для endpoint'ов](https://github.com/keithwhor/nodal/blob/0aa44d078a01c9d6807f254c83cdebea67bfab91/README.md)

### Запуск и сборка
- `gulp`
- `webpack`, `webworkify-webpack` (`bundle-buddy`, `electron-webpack-dashboard`)
- `chokidar` / `watchpack` / `watchman`
- `browser-sync`
- `parallelshell`
- `better-npm-run`
- `npm-check` - тулза для обновления зависимостей с консольным ui
- `cross-env` - для кроссплатформенной установки переменных окружения из `npm run`
- `concurrently` - для запуска нескольких одновременных задач из `npm run`
- `is-ci` - проверяет, запущен ли код в ci-окружении
- `is-ci-cli` - позволяет для разных ci-окружений запускать разные npm-скрипты
- `spritesmith` / `sprity` (`sprity-gm`) / `directory-encoder` - генераторы спрайтов и css к ним
- `sqip` - делает из png svg'шку с градиентом основных цветов изображения

### Express.js
- [pillarjs](https://github.com/pillarjs) - много low-level вкусняшек
- `keygrip` - подпись и валидации подписанных данных (module for signing and verifying data (such as cookies or URLs) through a rotating credential system)
- `express-generator`
- `compression`
- `vhost` - для поддоменов (например `api.domain.tld`)
- `body-parser`
- `multer` для `multipart/form-data`
- `form-data` - создаёт readable `multipart/form-data`-стримы. Для отправки данных формы и загрузки файлов в другие http-api
- `formidable` - парсер `form-data` (специально для `multipart/form-data`-стримов)
- `morgan` для логов со стриммингом
- `response-time`
- `connect-timeout`
- `basic-auth-connect` (deprecated) / `basic-auth`
- `negotiator` / `accepts`
- `hall` - роутер. но нафига?
- 
- `express-redirect`
- `forcedomain`
- `express-uncapitalize` (todo: проверить - возможно `express` имеет встроенные средства для таких редиректов)
- `redirect-trailing-slash` / `express-slash` / `connect-slashes`
- `maintenance` - перевод приложения в режим "обслуживания" через post-запрос к определённому урлу с отдачей статичной страницы
- 
- `express-session`
- `sticky-session` - шаринг сессий между воркерами (например, с помощью `cluster`)
- `cookie-parser`
- `cookie-signature` - подпись кук
- `connect-redis` (сессии в редисе) / `express-mysql-session` (сессии в mysql)
- `passport` и его стратегии (в т.ч. `passport-local`, `passport-hash`, `passport-securelogin`)
- `securelogin` - [описание](https://github.com/sakurity/securelogin)
- `bcrypt` / `bcrypt-nodejs` / `bcryptjs` / `pwd` / `pswd` для паролей
- `express-urlrewrite` - 301 редирект
- `passport.socketio` / `express-socket.io-session` - шаринг сессии между экспрессом и socket.io
- `clearsitedata` - устанавливает специальный заголовок, чтобы браузер почистил кэш, куки, стораджи (полезно при логауте)
- 
- `express-validator` - для валидации данных в теле запроса (надстройка над `validator`)
- `lusca` / `helmet` (`helmet` лучше), `csurf` - csrf (этот лучше), `cors`, `frameguard`
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
- `express-status-monitor`
- 
- `express-expose` / `express-state` - выдёргивание серверных методов и переменных на фронт в шаблонизатор (особо не нужен, но мало ли)
- `greenlock` - клиент для `let's encrypt` (вроде как). туда же: `greenlock-express`, `auto-sni`
- `apollo-server-express` - GraphQL
- `epilogue` - быстрое создание rest endpoint'ов
- `type-is` - проверка типа содержимого запроса

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
- `apollo-server-koa` - GraphQL
- Много нужного есть [здесь](https://github.com/koajs)

### Прочие фреймворки
- `micro`
- `cote`
- `studio`
- `socketcluster`
- `primus`

### Сокеты
- `socket.io` - стандарт дефакто, но давным-давно раздулся и уехал не в ту сторону.
- `sockjs` - проще, понятнее, предсказуемее.
- `uws` - прозрачная (почти) замена `ws` с лучшей производительностью
- `primus` - универсальная обёртка над всеми socket-realtime фреймворками

### Конфигурация
- `nconf` / `config` / `confit`. `config` похож на `nconf`, но вроде поширше, `confit` выглядит самым вкусным (к тому же он от `kraken`'a).
- `dotenv`
- `electrode-confippet`
- `env-cmd`
- `rc`
- `configstore` - удобно записывать пользовательские конфиги, например
- `cosmiconfig` - для переиспользуемых пакетов
[Подход к конфигурации для разных окружений и под docker](https://habrahabr.ru/company/southbridge/blog/334698/)

### Обработка ошибок и завершения процесса
- `loud-rejection` / `uncaught` - ловля необработанных ошибок/реджектов для ноды и браузеров
- `http-errors` / `boom` - удобная обёртка для посыла http-ошибок / `micro-boom`
- `create-error` / `es6-error` / `super-error`, [ещё гист на тему](https://gist.github.com/antixrist/f930d527c4b370c59f779639710bac2e) - враппер для создания собственных классов ошибок
- `stacktrace-js` (асинхронный) / `stacktrace-parser` (синхронный, используется в ReactNative) / `tracekit` / `error-stack-parser` (похоже на правду) - парсер стектрейсов, унификация всего того, что выплёвывают браузеры
- `show-js-error`, [трекинг ajax-ошибок в метрику](https://github.com/hcodes/trackajax)
- `serialize-error` - объект ошибки в json
- `errorhandler` - для рендера ошибок на клиент (only dev)
- `api-error-handler` - http-ошибки (4xx-5xx) заворачивает в json
- `pretty-error` - приятный вывод ошибок в консоли
- [ещё пример создания http-ошибок](https://www.npmjs.com/package/micro#error-handling)
- `death` / `signal-exit`
- `tree-kill` - убить self-процесс и все дочерние форки
- `node-report`
- `trace` - максимально удлиняет стек вызовов в стектрейсах
- `clarify` - вырезает из стектрейсов строки с системными вызовами (`node --stack_trace_limit=100 -r trace -r clarify wired.js`)
- `stack-chain` - кастомный парсер стектрейсов для маппинга/фильтрации/etc
- `stacktracey` - парсинг колстека с соурсмапами и читабельным выводом
- `stackman`
- [пример с trace, clarify и stack-chain](https://gist.github.com/antixrist/88b3d77f803377944789f02357b83c89)
- [подходы к локальной обработке ошибок](https://learn.javascript.ru/exception) и их [логирования на сервер](https://habrahabr.ru/post/324366/)
- сервисы для отправки и анализа непойманных ошибок:
  - https://stacktracejs.com/
  - https://sentry.io/
  - https://errorception.com/
  - http://www.muscula.com/
  - http://rollbar.com/
  - https://habrahabr.ru/post/324366/

### Кластеризация процессов
- `strong-cluster-control`

### ФС
- `fs-extra`, `graceful-fs`
- `anymatch` - матчер по чему угодно (глоб, регэксп, етс)
- `chokidar` / `watchpack` / `watchman` - слушатель фс
- `is-glob` / `glob` / `globby` / `glob-all`
- `klaw` - фс-walker на стримах
- `path-exists`
- `mkdirp`
- `del`
- `ncp` - асинхронное рекурсивное копирование файлов и папок
- `move-concurrently` - самое быстрое (на сколько вообще возможно) перемещение файлов
- `parse-filepath` - добавляет некоторые поля к стандартному выводу
- `fs-write-stream-atomic`
- `proper-lockfile` - `lock`-файл
- `steno` - помогает при конкурентной записи в файл - делает все вызовы на запись последовательно
- `is-dotfile`
- `is-absolute`
- `is-relative`
- `relative` - расширенный `path.relative()`
- `sanitize-filename` - очищает строку от спецсимволов и "папок", делая её валидным названием файла 
- `tmp` - работа с временными файлами и директориями
- `os-tmpdir`
- `os-homedir`
- `user-home`
- `cacache` - умное управление файловым кешем

### Стримы
- `event-stream`
- `split2`
- `through2`
- `shaper` - ограничитель скорости потока
- `isstream`
- `lazypipe`
- `destroy`
- `pump`
- `end-of-stream` / `on-stream-end`
- `stream-throttle`
- `duplexify` (для `stream1` и `stream2`) / `duplexer2` (для `stream3`) - объединяет writable и readable стримы в один
- `get-stream` - Собирает стрим в кучу и промисом выдаёт результат в виде строки или массива
- `get-stdin` - То же, что и `get-stream`, но для stdin-процесса

#### Rx
- `highland`
- `xstream`
- `most`
- `rx`

### DB
- `mysql2` / `mariasql`
    - `knex`, `bookshelf`
    - `sequelize` (`sequelize-auto`, `sequelize-definer`, `sequelize-hierarchy`, `sequelize-values`)
    - `objection`
    - `typeorm`
- `pg` / `pg-bluebird` / `pg-native`
- `ioredis` / `redis` / `hiredis`, `redlock`
- `reds` - поиск в редисе
- `amqplib` / `tortoise` - клиент для rabbitmq
- `rethinkdb`
- `node-localstorage` (этот держит данные в памяти) / `dom-storage` (этот пишет данные в файл) - localStorage для NodeJS
- `lowdb` - файловая json-бд поверх lodash'а

### Права
- `casl` ([статья на хабре](https://habrahabr.ru/post/334076/))
- `acl`
- `cancan`

### Консоль
- `object-inspect`
- `chalk` / `ansicolors` - раскраска
- `better-console` - добавление console.table-методов
- `cllc` / `multispinner` / `observatory` / `ora` / `draftlog` - вывод с лоадером
- `commander` / `vorpal` - настройка cli-аргументов для запуска приложения (с блекджеком и генератором справки)
- `liftoff` - bin'арник для своего пакета
- `eyes` - цветной вывод данных
- `inquirer` - cli-промптер
- `minimist` / `nanomist` / `yargs` - парсер cli-аргументов
- `progress` / `gauge` - настраиваемый прогресс-бар
- `boxen` - оборачивание сообщения в настраиваемую рамку
- `dedent` - убирает ведущие и крайние пробелы и переводы строк в шаблонных строках (удобно для вывода многострочного текста)
- `gtop` - консольный мониторинг системы
- `circular-json` / `json-stringify-safe` - безопасная сериализация циклических объектов
- [форматирование `console.time`а](https://gist.github.com/antixrist/5dec38b757ead8adca186c067cf6f2f2)

### Логирование
- `ololog`
- `debug`
- `microlog`
- `intel` / `bunyan` / `log4js` / `tracer` / `winston` / `eazy-logger` / `glogg` / `lggr` - многоуровневое (danger/error/fatal) логирование куда угодно - консоль, файлы, stdout (`log4js` медленный, `winston` - популярный, `tracer` - интересный) / `loglevel` / `whiner` / `pino` ([сайт](http://getpino.io/#/)) - `pino` [должен быть самым быстрым](https://habrahabr.ru/company/ruvds/blog/334806/)
- `gelf-stream` / `gelf-pro` - https://habrahabr.ru/company/2gis/blog/329128/
- `mozlog`
- `streamroller` / `file-stream-rotator` - ротация файлов логов
- [пример обёртки для системы логирования](https://github.com/likeastore/jobber/blob/0ab763b5f1ad25e57774e6e7e73192db3b38430a/source/utils/logger.js)

### Данные
- `lodash` / `iterare` / `fast.js` / [just](https://github.com/angus-c/just)
- `object-path` / `dottie` - продвинутый `_.get()`
- `string` / `strman` - если лодашевских методов работы со строками будет не хватать
- `printable-characters` - набор функций для работы с невидимыми печатными символами (определение длины, etc)
- `numeral` - работа с числами
- `moment` - это, понятное дело, дата/время (+ `helper-moment` для шаблонов) / `date-fns` - улучшенная (и при этом проще) библиотека для манипуляций с датами / `jstimezonedetect` - для браузера (в основном) / `spacetime` - для работы с датами и временными зонами
- `date.js` - парсер человекопонятных дат английском языке
- `accounting` - парсер чисел и валют (в основном валют)
- `currency-formatter` - форматтер валют
- `human-interval` - парсер человекопонятных интервалов на английском языке
- `filesize` - человекопятный размер файлов
- `pretty-hrtime` - человекопятный `process.hrtime()`
- `humanize-number` - человекопонятные числа
- `expiry-js` / `ms` - парсер длительностей (1M, 1Y, 1h, 1m, 1s, 1ms, etc)
- `pretty-ms` - форматирование миллисекунд
- `JSONSchema` / `ajv` - создание и валидация JSONScheme'ы
- `joi` / `schema-inspector` / `validator` / `forms` - санитизация/валидация
- `isemail`
- `sanitize-html` / `escape-html` / `he`
- `checkit`
- `repository`
- `normalizr`, `reselect` - для flux-архитектуры
- `normalize-object`
- `serialize-javascript`
- `kind-of` - нормальная замена typeof
- `tableize` - схлопывает json-структуру в объект вида `{'level1key': 'level1value', 'level1key.level2key': 'level2value'}`
- `deep-diff` / `diff` / `jsondiffpatch` / `jiff` / `just-diff`, `just-diff-apply`
- `fastest-clone`
- `deepmerge`
- `deep-freeze`
- `jsesc` - шибко умное экранирование
- `insane` - `jevix` для js
- `BitArray.js` ([git](https://github.com/brockwhittaker/BitArray.js)) Очень оптимизированный массив для хранения битовых флагов
- `pako` - zlib для js
- `yauzl` - unzip
- `lz-string` - мощное сжатие/декомпрессия строк для хранения, к примеру, в localStorage
- `google-libphonenumber` - крутая штука для парсинга номеров телефонов
- `quickselect`
- `bintrees` - самосортируемая структура с бинарным поиском
- `cuint` / `bignumber.js` / `long` / `bn.js` / `bigi` - big integer для js
- `media-typer` - парсер mime
- `mime` / `mime-db`
- `mime-types` - полный набор по работе с mime
- `file-type` - определятор типа файла
- `ellipsed` - обрезка с многоточием многострочных текстов
- `html-to-text`
- `feed-read` - парсер rss фидов

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
- `download` / `getit`
- `is-online` - есть ли коннект с интернетом
- `is-reachable` - есть ли коннект с конкретным ресурсом
- `node-readability` - вычленение основного текста со страницы
- `follow-redirects`
- `http-status` / `statuses`
- `nock` - mock'и для http-запросов (удобно для тестирования и заглушки api)
- `slimbot` - бот для телеграмма

### Парсинг dom'а, json'а, csv
- `jsdom` / `browser-env`
- `cheerio` / `whacko`
- `json5` - json с блекджеком и комментиками
- `readability` - вычленение основного и главного из всей страницы
- `semantic-schema-parser` - парсер schema.org
- `juice` - полный инлайнинг стилей в html
- `page-metadata-parser` - парсинг метаданных страницы - мета-теги, opengraph
- `csv-stringify`, `fast-csv` / `csv-streamify` / `papaparse`
- `xml-mapping` - json в xml и обратно
- `xmldoc`
- `html-tokenize`
- `JSONStream` / `json-depth-stream` - потоковый парсер огромных json'ов

### Тестирование
- `supertest`
- `mocha` (`chai`) / `jasmin` (`karma`) / `nodeunit` / `ava` / `tape` / `jest` (`jest` / `ava` [предпочтительнее](https://habrahabr.ru/company/zfort/blog/332736/#comment_10304680))
- `mocha-allure-reporter` - `allure` - это репортер со своим веб-интерфейсом, преферансом и графиками

### Headless-браузеры и тестирование
- `nightmare`
- `chromeless` / `puppeteer` - обёртка над безголовым хромом
- `node-horseman` - promise-обёртка над фантомом с апи, как у nightmare 
- `uirecorder` - что-то вроде selenium от alibaba'ы
- `leadfoot` (кроссплатформенная) / `taxi-rank` / `webdriverio` - обёртки над Selenium
- `nightwatch` - тестировщик для работы с phantom/chromedriver напрямую, к тому же комбайн: инструмент для общения с браузером, фреймворк для тестов и библиотека ассертов.
- `codeceptjs-(webdriverio|nightmare|protractor)` - тест-фреймворк с обёртками над headless-браузерами
- `robotjs` - полная кроссплатформенная desktop-автоматизация
- [Chrome Headless](https://developers.google.com/web/updates/2017/04/headless-chrome)

[весь список](https://github.com/dhamaniasad/HeadlessBrowsers)
[сравнение](https://mo.github.io/2017/07/20/javascript-e2e-integration-testing.html)

### Кравлеры
- `simplecrawler`
- `crawler`
- `scrape-it`
- `x-ray-crawler`
- `recrawler`
- `node-simple-crawler`
- `osmosis` - интересный

#### Проксики
- `proxy-search`
- `proxylist`
- `http-proxy` - свой прокси-сервер на ноде
- `http-mitm-proxy` - свой прокси-сервер на ноде
- `anyproxy` - свой прокси-сервер на ноде от alibaba'ы

#### Юзер-агентики
- `useragent` - парсер/матчер/компаратор юзерагентов
- `random-useragent`

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
- `html2canvas`
- [Скриншотилка на базе безголового хрома](https://medium.com/@dschnr/using-headless-chrome-as-an-automated-screenshot-tool-4b07dffba79a)

### Урлы и IP
- `parseurl`, `qs`
- `ip` / `ipaddr.js`
- `stun` - определение своего внешнего ip-адреса по stun-протоколу ([список доступных публичных серверов](https://gist.github.com/antixrist/b529e3b231cdf5c28c8d197543ad026f)) 
- `geoip-lite` / `maxmind` (+ поискать для [sypexgeo](https://sypexgeo.net/ru/stats/)). Свой сервис - [freegeoip](https://github.com/fiorix/freegeoip)
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
- `slug` - делает замену пробелов и unicode-символов (даже emoji) для пригодности в урл

### Офисные форматы
- `docxtemplater`
- `excelize`
- `exceljs`
- `xml2js` / `x2js` / `fast-xml2js`
- `js-xlsx` / `xlsx` - парсер и запись xls-форматов
- `pdfjs-dist` - парсер и рендер pdf от mozilla'ы

### Генераторы (чисел, строк, данных, uid'ов)
- `faker`
- `faker.js`
- `hashids` / `identifier` - строки из чисел
- `node-uuid` / `uid-safe` / `nanoid` / `cuid` / `shortid`
- `sguid`
- `randexp` - генерация строки по регэкспу
- [gencc](https://github.com/grahamking/darkcoding-credit-card/blob/master/gencc.js) валидных номеров кредитных карт

#### Псевдорандом с посевом
- `seedrandom`
- `random-js` / `mersenne-twister`
- `random-seed`
- `brorand` - кросс-платформенный `crypto.getRandomValues`
- `chance`

### Комбинаторика (кейворды: `permute`, `permutation`, `combination`, `combinatorics`)
- `simple-statistics` - статистические функции (в т.ч. комбинаторика и перестановки)
- `cartesian`
- `js-combinatorics`
- `foreach-combination`
- `math-combination`
- `allcombinations` - на генераторах
- `lexicographer` - лексикографическая пермутация на генераторах
- `get-permutations`, `get-unique-permutations`
- `@aureooms/js-permutation`
- `generatorics` - есть и permutations, и combinations, и cartesian, и всё это на генераторах

### Хэширование
- `murmurhash-native` / `imurmurhash` - быстрое и (вроде как) наименее коллизионное хэширование
- `object-hash`
- `json-stable-stringify`
- `stringify-object`

### Полезности
- `bluebird` / `relike` / `awaiting` (для промисификации)
- `p-progress` - промисы с прогрессом ([много интересного для промисов](https://github.com/sindresorhus/promise-fun))
- `pify` - промисификатор
- `thunkify` - callback'ифицирует callbacks, arrays, generators, generator functions, and promises
- `inflight` / `promise-inflight` - оборачивает функцию таким образом, что можно вызывать функцию-обёртку несколько раз с разными коллбеками, а когда вызов функции завершит выполнение, то все коллбеки будут выполненны последовательно и асинхронно
- `co`
- `inherits`
- `sliced`
- `d` - удобный описатель дескрипторов свойств
- `delegates` - делегация методов и пропертей прототипа к какому-либо свойству этого прототипа
- `function-done` / `always-done`
- `mem` / `lru-cache` / `hashlru`
- `fast-memoize`
- `wrappy` - оборачивает функцию, перенося все кастомные пропертя этой функции в обёртку. полезно (внезапно) для обёрток
- `shimmer` - типа Proxy через monkeypatching
- `ware` - создание кастомной цепочки мидлварей (прям как в express'е)
- `internal` - созданице цепочки тасков, как у Nightmare
- `archiver` - архиватор
- `ffi` - работа с системными библиотеками без написания c++ обёрток
- `apiai` - распознавание голоса с помощью гугловского [api.ai](https://api.ai/)

### Очередя и таски
- `retry` (`async-retry`, `promise-retry`) / `tolerance`
- `async-throttle`
- `semaphore` - ограничитель одновременного доступа к ресурсу
- `function-rate-limit`
- `kue` (`kue-ui`) / `bull` / `bee-queue` - очередя на редисе
- `agenda` - очередя на монге
- `axon` - zeromq на ноде
- `queue3`
- `enqueue`
- `fastqueue`
- `argumentable-queue`
- `generic-pool`
- `denque`
- `node-schedule`
- `cron`
- `cron-parser`
- `are-we-there-yet` - трекинг статусов выполнения у коллекции задач и стримов
- [пример на async-await'ах](https://gist.github.com/antixrist/d75c46692ed8a9035d05056449184e98)

### Кодировки
- `encoding`
- `iconv-lite`
- `iconv`
- `jschardet` - определение кодировки

### AST-парсеры
- `aps-rql` - https://habrahabr.ru/company/odin_ingram_micro/blog/331774/
- `pegjs` - произвольные синтаксические конструкции
- `esprima` - парсер ECMAScript на ECMAScript
- `parser-base` - каркас для строкового парсера (подобие `json5`)

### Email
- `nodemailer` / `postmark`
- `mailgen` / `mailmason` / [bojler](https://github.com/Slicejack/bojler), `email-templates` - html-шаблоны для мыла
- `nonprofit-email-service`
- `mailit` - готовый микросервис для отправки email'ов через http-api
- [Bulletproof email buttons](https://buttons.cm/)

## Изображения
- `sharp` / `jimp` - полнофункциональная обработка
- `image-size`
- `image-type`
- `tesseract.js` - распознавалка текста
- `node-openalpr` - распознавалка номерных знаков на нейронных сетях, tesseract'е и opencv
- `exif2` / `gm-exif` / `libexif` / `exif-parser`
- `gify` - делает гифку из видео
- `gm` / `graphicsmagick2`
- `pixelmatch` - создание diff'а изображений
- `pngjs`, `jpeg-js`
- [image-compressor](https://github.com/xkeshi/image-compressor) - браузерная сжималка (использовать перед отправкой на сервер)

### Морфология и текст
- `phpmorphy`
- `natural` - огромный набор инструментов для работы с натуральным языком (токенайзер, дистанции, префиксные деревья, стеммеры, классификаторы, сравнение звучаний, n-граммы, tf-idf, спеллчекер для английского, части речи)
- `compromise` - под англ.язык и не только
- `az`
- `wordpos` - части речи для английского
- `leven` - самый быстрый левенштейн
- `fuzzyset.js` / `string_score` / `fuse.js` / `fuzzaldrin` / `fuzzysort` - матчинг строк
- `lunr-languages`
- `petrovich` / `name-case-lib-port` - склонение русских/украинских фио
- `word2vec` / `word2vec-native` / `word2vec.js`
- `wuzzy` - похожесть строк разными алгоритмами
- `convert-layout` - смена раскладки переданной строки
- `@google-cloud/speech` - разпознавание теста из аудио с помощью google cloud api (есть русский язык)
- `franc` / `guesslanguage` - определение языка
- `node-summary` - выдёргивает основную мысль из текста
- `yaspeller` - спеллчекер через яндексовое api
- `@google-cloud/language` - определение языка, тональности текста, сущностей, предложений, токенов, etc. Это обёртка для Google Cloud Api. 

### DI
- `bottlejs`
- `singular`
- `intakejs`

### Цвета
- `color`
- `tinycolor2`
- `tinygradient`
- `chromatism`
- `gpotter-gradient` - из заданного градиента выдёргивает цвет из любого места

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
- `delaunator` - быстрая триангуляция
- `bound-points` - вычисление bounds из набора точек

### SVG и геометрия
- `is-svg`
- `d3`
- `svg-intersections` - алгоритмы нахождения пересечений разных фигур
- [kevlindev](http://www.kevlindev.com/) - много разнообразной математики на js - [пересечения](http://www.kevlindev.com/geometry/2D/intersections/index.htm) [фигур](http://www.kevlindev.com/gui/math/intersection/index.htm), [геометрия фигур](http://www.kevlindev.com/gui/shapes/shape/index.htm) и [прочее](http://www.kevlindev.com/gui/)

### Графики
- `chartist`

### Графы
- `d3` (`d3-node` для node-environment)
- `d3-glyphedge`
- `greuler`
- `ngraph`, в т.ч. `ngraph.forcelayout`, `ngraph.remove-overlaps`, `ngraph.quadtreebh` и прочие от [@anvaka](https://github.com/anvaka)
- `toposort`

### Генерация документации
- swagger
- `apidoc`
- [slate](https://github.com/lord/slate)

### Etc
- `clipboardy` - кроссплатформенный доступ к системному буферу обмена

### Деплой
- [pm2](https://github.com/Unitech/pm2) (+ `pmx`, `pm2-pager`, `pm2-logrotate`, [как юзать socket.io на кластеризованном приложении](https://github.com/Unitech/PM2/issues/637#issuecomment-215915328))
- [now](https://github.com/zeit/now)
- [pod](https://github.com/yyx990803/pod) - маленький аналог `pm2`
- [rsynced](https://github.com/rumkin/rsynced) - deploy-аналог pm2, но без гита
- [shipit](https://github.com/shipitjs/shipit) - gulp'ово/grunt'ово подобный деплойер
- [dokku](https://github.com/dokku/dokku) - heroku + docker

## Front
- `asap` / `next-tick` / `setimmediate` - как только, так сразу. Кроссбраузерный `process.nextTick`
- `simulant` - симуляция реальных браузерных событий
- `webfontloader` - загрузка шрифтов с Google Fonts, Typekit, Fonts.com и Fontdeck
- `fontfaceobserver` - promise-мониторилка загрузки веб-шрифтов, откуда бы они не загружались
- [font-style-matcher](https://meowni.ca/font-style-matcher/) - онлайн сервис для подбора и настройки наиболее похожего fallback'чного шрифта
- `system-font-css` - альтернатива стеку системных шрифтов
- `glyphhanger` - консольная тузла, которая пауком проходится по страничкам, смотрит какие глифы используются и сохраняет с ними файлы шрифтов (т.е. нужна для оптимизации используемых веб-шрифтов)
- `nerd-fonts` - компиляция всех популярных opensource-шрифтов в один
- `feather-icons` / `vue-feather-icon` / `material-design-icons` - svg-иконки
- `mousetrap` - работа с комбинациями hotkey'ев
- `tablesaw` - responsive-таблицы от filament'а (с кучей функционала)
- `fg-select-css` - стили для кроссбраузерной кастомизации select'а от filament'а
- `@flowjs/flow.js` - загрузка файлов с примером бекенда на ноде
- `smartcrop`
- `copy-to-clipboard`
- `vkey`
- `drop-anywhere` - для d'n'd загрузки файлов где угодно на странице
- `dropzone`
- `focus` - нахождение центральной сущности на изображении для последующей фокусировки или кропа
- `noty` ([обёртка для vue](https://github.com/nikitamarcius/vue-notice)) - уведомлялка
- `criticalcss` / `critical` / `penthouse` - critical css
- `scrollbarwidth`
- `simplebar` - кроссбраузерный кастомный скролл
- `jquery-mask-plugin` / `inputmask`
- `simple-web-worker`
- `webworker-promise` - promise-обёртка над webworker'ами ([статья](https://habrahabr.ru/post/337492/))
- `scalable` - зачётный object-fit на scale'ах и translate'ах
- `fitty` - вписывает текст в родительский контейнер
- `trunc-text`
- `trunc-html`
- `file-saver`, `save-as`
- `popper.js` / `tooltip.js` - замена `tether`у
- `equalizecss` - bootstrap-like flex-сетка на sass'е
- `floatthead` / `vue-floatthead` / [minicss](http://minicss.org/table#scrollable-tables) - плавающая шапка у таблиц (вроде самая нормальная из всех возможных), но на jquery
- `rader` - слайдер от 2gis'а
- `geoloc` - геолокация с фронта путём опроса свободных источников от 2gis'а
- `appmetrics.js` - обертка над User Timing API, с возможностью отправки всего намерянного в GA.
- `dom-serialize` - сериализация dom-нод в строку
- `zingtouch` - touch-гестуры
- `blankshield` - безопасный `target="_blank"`
- `bowser` / `platform` / `mobile-detect`- определитель девайса по юзерагенту
- `evercookie` - [repo](https://github.com/samyk/evercookie)
- `fingerprintjs2`
- `history`
- `mediaplayer` / `video.js` - лёгкий, расширяемый, интернациональный, доступный, кроссбраузерный, легконастраиваемый медиаплеер на ванильном js
- `animejs` - норм такие анимашки
- `tabbable` - находит все dom-ноды, в которые возможна фокусировка tab'ом, внутри переданного контейнера
- `jquery.payment` - форма для банковской карты [repo](https://github.com/stripe/jquery.payment)
- `card-info` - форма для банковской карты [repo](https://github.com/iserdmi/card-info)
- `card` - форма для банковской карты [repo](https://github.com/jessepollak/card)
- `payment` - форма для банковской карты [repo](https://github.com/jessepollak/payment)
- `banks-db` - определение банка по номеру карты
- `block-elements` - определяет, является ли тег блочным (по названию)
- `trial-js` - предсказание клика юзера по наблюдениям за передвижениями мыши
- `isInViewport` / `porthole` / `jquery-viewport` / `sticky-kit` / `scrollmonitor`- попадание элемента во вьюпорт, наблюдение за скроллом, липкий сайдбар, [hc-sticky](https://github.com/somewebmedia/hc-sticky) и [его](https://github.com/ferryvg/hc-sticky) [форки](https://github.com/CHEWX/hc-sticky)
- `lightbox2` - модалочка для картинок на ваниле
- `@nishanths/zoom.js` - zoom изображений как на medium'е
- `fg-enlarge` - zoom изображения вслед за курсором внутри контейнера, как на али 
- `flexslider`, `vue-awesome-swiper` / `swipejs` / `owl.carousel` / `responsive-carousel` - каруселька
- `@filamentgroup/tau` - 360° галерея
- `lozad` / [ещё один lazyload на IntersectionObserver](https://github.com/deanhume/lazy-observer-load). демка: https://deanhume.github.io/lazy-observer-load/
- `image-promise` - промайзнутый `new Image` с кучей правильных проверок
- `nanoscroller` - скроллер на jquery
- `pell` - норм текстовый редактор
- `sentinel-js` - отслеживает появление dom-элементов с заданным селектором
- `cleave.js` / `text-mask-all` / `imaskjs` - маски текстового ввода
- `fg-loadcss` - асинхронная загрузка css от filament'а
- `load-script`- асинхронная загрузка js
- `@shopify/draggable` - мощная новая drag-n-drop'алка
- `notifyjs` - браузерные нотификации
- `react-aria-modal` - правильная модалка ([статья](https://habrahabr.ru/post/338130/))
- [`micromodal`](https://micromodal.now.sh/) - тоже норм aria-модалка
- [break-on-access](https://github.com/paulirish/break-on-access) - оочень полезная тулза, чтобы ставить брейкпоинты на любом объекте, который будет срабатывать в момент получения свойства этого объекта
- `analytics.js` - аналитика от segment.io
- [обёртка над GA](https://github.com/philipwalton/analyticsjs-boilerplate)
- [получение ip через WebRTC](https://gist.github.com/antixrist/52e125476ee54f574046db963d522ab5)
- [залогинен ли юзер в соц.сетях](https://gist.github.com/antixrist/dbc4630fd4dab2d3bf3b0aa92a534363)
- [image-compressor](https://github.com/xkeshi/image-compressor) - браузерная сжималка (использовать перед upload'ом на сервер)

### Vue.js
- `vuex-shared-mutations` - запускает мутации на всех открытых табах
- `vuex-loading`
- `vuex-cache`
- [Как правильно публиковать](https://pablohpsilva.github.io/vuejs-component-style-guide/#/russian) [vue-компоненты](https://vuejsdevelopers.com/2017/07/31/vue-component-publish-npm/)

### ab-тесты
- `trafficcop` - ab-тестирование от mozilla'ы
- [segmentator - сегментирование траффика для ab от retail-rocket](https://github.com/RetailRocket/RetailRocket.Segmentator)

### Полифиллы:
[polyfill-service](https://github.com/Financial-Times/polyfill-service) - смысл в том, чтобы использовать из этого сервиса только браузерное api. Для полифиллинга языковых средств используется `babel-polyfill`. Или наоборот? Включать отсюда всё, а из `babel-polyfill` добавлять всё остальное?
- `dom4`
- `store` - враппер над localStorage'м с fallback'ами на всё, что только возможно. можно сделать асинхронным для обёртки над редисом или типа того. В ноде хорошо работает в связке с `node-localstorage` / `dom-storage`.
- `localforage` - то же, что и `store`, только над `indexeddb`, `websql`, `localstorage`. Асинхронный.
- `dexie` - враппер над IndexedDB
- `custom-event`
- `sticky-state` / `fixed-sticky` - второй от filament'а и используется на mail.ru'ответах
- `object-fit-images`
- `url-search-params`
- `resize-observer-polyfill`
- `matchmedia-polyfill`
- `bounding-client-rect`
- `mutation-observer`
- `intersection-observer`
- `blob`
- `on-full-screen`, `is-full-screen`, `request-full-screen`, `exit-full-screen` / `screenfull.js`
- `smoothscroll-polyfill`
- `buffer`
- `history.js`
- [detect_flex](https://github.com/ergcode/ergonomic.detect_flex) - определение поддержки flexbox'ов (нормально работает в мобильниках)

### nginx
- [конфиг с настроенным кешем от h5bp](https://github.com/h5bp/server-configs-nginx)
- [конфиг для http2/https, ipv6, load balancing'ом, нормальные заголовки для GeoIP](https://github.com/certsimple/nginx-http2-load-balancing-config)


## Docker
- [`portainer`](https://github.com/portainer/portainer) - лёгкое ui для docker'а


## Etc
- `pencil` - [repo](https://github.com/evolus/pencil) d'n'd билдер дизайна и интерфейсов на электроне
