Ещё много не откаталогизированного [здесь](https://github.com/antixrist?utf8=%E2%9C%93&tab=repositories&q=&type=fork&language=)

## Запуск с babel'ем
[example-node-server](https://github.com/babel/example-node-server)
[примеры скриптов запуска в `package.json`](https://github.com/comerc/yobr)
[полное описание настроики и запуска node-приложения](https://github.com/UsulPro/js-stack-from-scratch)
[шаблон проекта от предыдущего туториала](https://github.com/verekia/js-stack-boilerplate/tree/master-no-services)
[backpack - сборщик бэкенда](https://github.com/jaredpalmer/backpack)

## Примеры приложений
- [hackathon-starter](https://github.com/sahat/hackathon-starter)
- [Koa.js REST, Jade, MongoDB, Passport, Mongoose, Redis, Websocket](https://github.com/OlegLustenko/Koa_Mongo_Redis_Socket_IO_Passport)
- [Koa APi RAML (с jsonschema-валидацией запроса-ответа), PostgresSQL с Sequelize'ом, JWT, Passport'ом, Nodemailer'ом, RabbitMQ, Redis'ом, Docker'ом, Vagrant'ом, Ansible'м](https://github.com/FredericHeem/starhackit)
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
- [Настройка проекта на Node.JS с нуля](https://github.com/xanf/javascript.ninja-node-boilerplate), [видео](https://www.youtube.com/watch?v=RW5JjiFg2uw)
- [Исходники по книге "Building apis with nodejs"](https://github.com/caio-ribeiro-pereira/building-apis-with-nodejs)
- [Куча примеров по взаимодействию express/koa с различными БД (neo4j, rethink, redis, etc)](https://github.com/caio-ribeiro-pereira/node-api-examples)
- [Пример с jwt-авторизацией](https://github.com/andrewda/jwt-server-base)
- [Создание бота для Steam по шагам](https://github.com/andrewda/node-steam-guide)
- [Пример с Koa, TypeORM, роутами и контроллерами](https://github.com/typeorm/typescript-koa-example)
- [Каркас api от команды Koa](https://github.com/koajs/api-boilerplate)
- [Boilerplate с Express, GraphQL, PG (с миграциями на knex'е), авторизацией (сессии в Redis'е), рассылкой (+шаблоны для email'ов) и всё это в Docker'е](https://github.com/kriasoft/nodejs-api-starter)
- [Полный фарш с Vue.js, passport, GraphQL, nodemailer'ом, http2, i18n, логированием, webpack'ом](https://github.com/icebob/vue-express-mongo-boilerplate)
- [Пример контроллера для endpoint'ов](https://github.com/keithwhor/nodal/blob/0aa44d078a01c9d6807f254c83cdebea67bfab91/README.md)
- [Koa, Knex, crud, аутентификация, пагинации](https://github.com/gothinkster/koa-knex-realworld-example)
- [^^^ Тоже самое ^^^, только на express'е](https://github.com/gothinkster/node-express-realworld-example-app)
- [Файловый шарилка на докере, с rest api и интерфейсом для разных хранилищ](https://github.com/rumkin/file-storage)
- [Honeypot-логгер tcp/udp пакетов](https://github.com/hololoev/honeypot_tcpdump_logger), [статья](https://habr.com/post/358214/)
- [пример с nginx и haproxy](https://github.com/schleyfox/example-node-ops), [статья](https://habr.com/company/ruvds/blog/418009/)

## Node.js
- `learnyounode` - интерактивная cli-обучалка
- `cote` - набор библиотек для построения микросервисного кластера ([статья](https://habrahabr.ru/company/ruvds/blog/329784/))
- `hotel` - управление и старт локальных dev-доменов для локальных проектов на всевозможных технологиях
- `cross-spawn` / `execa` / `respawn`/ `shell-exec`
- `puka` - экранирование shell-команд для `child_process.span/.exec`
- `mz` - промайзнутые системные библиотеки
- `caller` - выдаёт путь модуля, который про'require'ил текущий
- `app-module-path` - require хук, для маппинга кастомной рутовой директории
- `node-notifier`
- `nodejs-dashboard`
- `re2` - нативный биндинг к гугловскому движку регулярок `RE2`, которая обеспечивает безопасные от ReDoS регулярки.
- `reify` / `@std/esm` - врубает `import` без бабелей/вебпаков ([статья про `@std/esm`](https://blogs.windows.com/msedgedev/2017/08/10/es-modules-node-today/))
- `open` - открывает ссылку в дефолтовом браузере системы
- `toobusy-js` / `blocked` - определяет заблокирован ли event loop
- `js-meter` - замеры и форматирование потребляемой памяти/cpu/etc
- `node-memwatch` / `memwatch-next` - следит за утечками, можно зафорсить сборку мусора
- `memory-usage` - поток с мониторилкой потребления памяти / [кастомная мониторилка потребления памяти](https://gist.github.com/mistakster/d8844b15f852d9b4cd33cb3a9b2d6385)
- `light-cycle` - реализация hashringcycle (аналог round-robin) для выбора шардов на лету
- `hyper` - кроссплатформенный терминал на electron'е
- `mediacenterjs` - браузерный персональный медиацентр
- `detect-node` - запущен ли текущий код из под ноды
- `localtunnel` - шарит локальный адрес наружу
- `host-env` - определение серверной платформы, на которой запущена нода
- `snyk` / `nsp` / `npm audit` - автосканер кода и зависимостей на известные уязвимости
- `webworker-threads` / `workerpool` - webworker'ы для ноды
- `shm-typed-array` - shared memory для node'ы
- `v8-natives` - вызов нативных v8-методов, в т.ч. принудительный вызов gc
- `pkg` - упаковывает всё node.js-приложение в один исполняемый файл
- `cls-hooked`

### Запуск и сборка
- `np` - нормальная замена `npm publish`
- `pkg-ok` - некоторые автоматические проверки пакета перед публикацией 
- `webpack` (`bundle-buddy`, `electron-webpack-dashboard`)
- `watchpack` / `chokidar`
- `nodemon` / `supervisor` / `onchange` / `chokidar-cli` - вотчинг изменений и запуск таски/процесса
- `diarrhea` - уменьшает вес бэкенд сборки, выпиливая мусор из зависимостей, [статья](https://habr.com/post/354504/)
- `browser-sync`
- `bundlesize` / `sizelimit` - для контроля размеров сборки
- `parallelshell` / `npm-run-all` / `concurrently` - для запуска нескольких одновременных задач из `npm run`
- `better-npm-run`
- `cross-env` - для кроссплатформенной установки переменных окружения из `npm run`
- `shelljs` - bash-функции прямо в ноде
- `shx` - кроссплатформенные bash-функции в скриптах `package.json` (обёртка над `shelljs`) 
- `npm-which` - аналог консольного `which` для наждения бинарников установленных npm-пакетов 
- `precommit-hook` - тулза запускающая npm-скрипты на коммиты
- `husky` - не даёт коммитить/пушить, если выполнение чего-то подобного: `{ "scripts": { "precommit": "npm test", "prepush": "npm test" } }` прошло с ошибками
- `lint-staged` - запускает линтинг и форматирование только изменившихся в коммите файлов
- `commitizen` - интерактивка для сообщений к коммитам (fix/refactor/test/etc) + `cz-conventional-changelog` и `conventional-changelog-cli` - генератор ченжлогов на основе таких коммитов
- `validate-commit-msg` - валидатор сообщений к коммитам
- `standard-version` - автоматический changelog при обновлении версии на основе сообщений к коммитам
- `npm-check` - тулза для обновления зависимостей с консольным ui
- `is-ci` - проверяет, запущен ли код в ci-окружении
- `is-ci-cli` - позволяет для разных ci-окружений запускать разные npm-скрипты
- `in-publish` - обнаружение в npm-scripts факта запуска публикации пакета (во время локальной разработки), чтобы делать что-то, что не нужно делать во время dev-установки
- `spritesmith` / `sprity` (`sprity-gm`) / `directory-encoder` - генераторы спрайтов и css к ним
- `svg-mixer` - генератор svg-спрайтов
- `sqip` - делает из png svg'шку с градиентом основных цветов изображения

### Отладка
- [В консоли хрома встроенными стредствами](https://nodejs.org/dist/latest-v10.x/docs/api/debugger.html#debugger_v8_inspector_integration_for_node_js)
- `ndb` - в консоли хрома, но через puppeteer

#### Устаревшее
- `node-inspector`
- `devtool`
- `iron-node`

### Express.js
- `fastify` - более быстрая замена express'у
- `server` - обёртка над `express`, с блэкджеком, async/await'ами и нормально настроенными минимально необходимыми мидлварями из коробки
- `express-promise-router` - нормальная promise-обёртка для всех методов роутера
- `express-rate-limit`, `express-brute` - мидлваря для предотвращения брута, похож на rate-limit
- [pillarjs](https://github.com/pillarjs) - много low-level вкусняшек
- `express-generator`
- `compression`
- `vhost` - для поддоменов (например `api.domain.tld`)
- `body-parser`
- `multer` для `multipart/form-data`
- `express-fileupload`
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
- `securelogin` - [описание](https://github.com/sakurity/securelogin)
- `express-urlrewrite` - 301 редирект
- `clearsitedata` - устанавливает специальный заголовок, чтобы браузер почистил кэш, куки, стораджи (полезно при логауте)
- 
- `express-validator` - для валидации данных в теле запроса (надстройка над `validator`)
- `host-validation` - whitelist-хостов `Host` и `Referer` заголовках для защиты от `DNS Rebinding` атак
- `ratelimiter`, `async-ratelimiter` - rate limit запросов с хранилищем в редисе / `limiter` (но по-хорошему этим должен заниматься nginx)
- 
- `portastic` - нахождение свободных локальных портов (удобно для dev-запуска) / `portscanner` - тоже самое, но, возможно, работает и для внешних айпишников / `get-port` - берёт заданный порт либо рандомный, если занят
- `serve-static` - встроен в сам экспресс
- `http-server` - http сервер статики одной командой из консоли
- `http-proxy-middleware` - полезная гибкая штука для перенаправления запросов на другие сервера
- `express-request-language`
- `rest-sugar` - обёртка для rest. нормальный сахар для rest'а надо поискать
- `express-resource` (очень старый) / `restler` - rest
- `join-monster` - GraphQL -> SQL
- `method-override`
- `connect-rid` - генератор request-id
- `kraken-js` - мощный boilerplate и конфигуратор для express'а и всякие штуки в него входящие, типа `express-enrouten`
- `express-status-monitor`
- 
- `express-expose` / `express-state` - выдёргивание серверных методов и переменных на фронт в шаблонизатор (особо не нужен, но мало ли)
- `greenlock` - клиент для `let's encrypt` (вроде как). туда же: `greenlock-express`, `auto-sni`
- `apollo-server-express` - GraphQL
- `epilogue` - быстрое создание rest endpoint'ов
- `clipboardy` - кроссплатформенный доступ к системному буферу обмена

```javascript
app.set('strict routing', true);
app.set('x-powered-by', false);
```

### Koa
- `koa-router` (почти полностью повторяет экспрессовый роутер) / `koa-route` (облегчённая версия) / `koa-trie-router` (или `wayfarer`) - composable роуты, как в express'е / `koa-66`
- `koa-mount` - чтобы как в express'е - можно монтировать инстанс в роут другого инстанса
- `@koa/cors`
- `koa-bodyparser`
- `lusca` / `helmet` (`helmet` лучше), `csurf` - csrf (этот лучше), `cors`, `frameguard`
- `koa-helmet`
- `koa-jwt`, `jsonwebtoken`. [Видео Ильи Климова о JWT](https://www.youtube.com/watch?v=_BSag4ABBMY), [репозиторий](https://github.com/jsninja-demos/node-jwt-demo), [описание принципов JWT](https://gist.github.com/zmts/802dc9c3510d79fd40f9dc38a12bccfc)
- `koa-response-time`
- `koa-session` - на куках / `koa-generic-session` - на редисе/монге/mysql/pg/sequelize/etc
- `koa-redis`
- `koa-static` / `koa-send` / `koa-etag` / `koa-conditional-get` - для статики
- `koa-compress`
- `koa-views`
- `koa-logger`
- `apollo-server-koa` - GraphQL
- Много нужного есть [здесь](https://github.com/koajs)
Koa для получения списка ip просто парсит `X-Forwarded-For`, в то время как `express` использует более комплексный `proxy-addr`. Вот надо как-то подружить `koa` с `proxy-addr`.

### Прочие фреймворки
- `micro`
- `cote`
- `studio`
- `socketcluster`
- `primus`
- `seneca`

### Сокеты
- `socket.io` - стандарт дефакто, но давным-давно раздулся и уехал не в ту сторону.
- `sockjs` - проще, понятнее, предсказуемее.
- `uws` - прозрачная (почти) замена `ws` с лучшей производительностью
- `primus` - универсальная обёртка над всеми socket-realtime фреймворками
- `passport.socketio` / `express-socket.io-session` - шаринг сессии между экспрессом и socket.io
- `nats` - клиент для nats-сервера на go
- `nchan` - клиент для nginx-модуля `nchan`, [статья](https://habr.com/post/354990/)

### Конфигурация
- `cosmiconfig` - поиск конфига по `ключ`у в package.json, в `.ключrc`, в `ключ.config.js`
- `rc` (советует Илья Климов) - подход такой же, как и у `cosmiconfig`
- `nconf` / `config` / `confit`. `config` похож на `nconf`, но вроде поширше, `confit` выглядит самым вкусным (к тому же он от `kraken`'a).
- `dotenv` / `dotenv-safe` (отличается от `dotenv` тем, что проверяет - установлены ли все переменные, которые есть в файле `.env.example`), `env-cmd`
- `jsonfile`
- `electrode-confippet`
- `configstore` - удобно записывать пользовательские конфиги, например
[Подход к конфигурации для разных окружений и под docker](https://habrahabr.ru/company/southbridge/blog/334698/)

### Авторизация
- `passport` и его стратегии (в т.ч. `passport-local`, `passport-hash`, `passport-securelogin`)
- `grant-express` - замена `passport`-у. есть как для express'а, так и для koa
- `permit` - простой способ авторизации по Bearer токену
- `passwordless`
- `jsonwebtoken`
- `oauth` (провайдеры `hellojs`, `grant`)
- `svg-captcha`

### Обработка ошибок и завершения процесса
- [презентация, где рассказывается про debugging](https://www.youtube.com/watch?v=Ns8eOF0Qd1U&t=25620s)
- [Ещё про отладку. Хардкор!](https://habr.com/company/jugru/blog/358680/)
- `loud-rejection` / `hard-rejection` / `make-promises-safe` (лучше) / `uncaught` - ловля необработанных ошибок/реджектов для ноды и браузеров
- `http-errors` / `boom` - удобная обёртка для посыла http-ошибок / `micro-boom`
- `http-assert` - assert-обёртка над `http-errors`
- `create-error` / `es6-error` / `error3` / `super-error`, [ещё гист на тему](https://gist.github.com/antixrist/f930d527c4b370c59f779639710bac2e) / `node-exceptions` - враппер для создания собственных классов ошибок / `verror` - на стеройдах с printf для сообщений и вложенными цепочками ошибок
- `stacktrace-js` (асинхронный) / `stacktrace-parser` (синхронный, используется в ReactNative) / `tracekit` / `error-stack-parser` (похоже на правду) - парсер стектрейсов, унификация всего того, что выплёвывают браузеры
- `show-js-error`, [трекинг ajax-ошибок в метрику](https://github.com/hcodes/trackajax)
- `serialize-error` - объект ошибки в json
- `errorhandler` - для рендера ошибок на клиент (only dev)
- `api-error-handler` - http-ошибки (4xx-5xx) заворачивает в json
- `pretty-error` - приятный вывод ошибок в консоли
- [ещё пример создания http-ошибок](https://www.npmjs.com/package/micro#error-handling)
- `death` / `signal-exit` / [пример graceful shutdown](https://github.com/kriasoft/nodejs-api-starter/blob/462df553bed197dd64ba84de8a53eee1343084fe/tools/run.js#L19-L30)
- `http-shutdown` - правильно закрывает все сокеты и keep-alive соединения / `server-destroy` - из той же оперы
- `on-finished` - вызывает колбэк, когда `res` завершён, в т.ч. с ошибкой или он был прерван
- `tree-kill` - убить self-процесс и все дочерние форки
- `node-report` - human-readable diagnostic summary, written to file
- `trace` - максимально удлиняет стек вызовов в стектрейсах
- `clarify` - вырезает из стектрейсов строки с системными вызовами (`node --stack-trace-limit=1024 -r trace -r clarify wired.js`)
- `stack-chain` - кастомный парсер стектрейсов для маппинга/фильтрации/etc
- `stacktracey` - парсинг колстека с соурсмапами и читабельным выводом
- `stackman`
- `@ymatuhin/onerror`
- `youch` - генерация html-страницы с ошибкой, как в первом nuxt'е
- [пример с trace, clarify и stack-chain](https://gist.github.com/antixrist/88b3d77f803377944789f02357b83c89)
- [подходы к локальной обработке ошибок](https://learn.javascript.ru/exception) и их [логирования на сервер](https://habrahabr.ru/post/324366/)
- сервисы для отправки и анализа непойманных ошибок:
  - https://stacktracejs.com/
  - https://sentry.io/
  - https://errorception.com/
  - http://www.muscula.com/
  - http://rollbar.com/
  - Raven.js
  - airbrake.io
  - bugsnag.com
  - https://habrahabr.ru/post/324366/
  - https://habrahabr.ru/post/344802/
  - https://habrahabr.ru/company/ruvds/blog/344682/
  - newrelic.com / splunk.com - полнофункциональный saas для мониторинга и аналитики
  - Raygun
  - OverOps
  - StackHunter
  - VBATelemetry
  - Appenlight
  - [обзорная статья](https://habr.com/post/352680/)

### Кластеризация процессов
- `strong-cluster-control`

### ФС
- `fs-extra`, `graceful-fs` / `upath` - улучшают встроенный `path`
- `resolve` / `enhanced-resolve` (асинхронный) - нодовый алгоритм резолва путей
- `node-dir` - доп.плюшки для работы с директориями
- `path-exists`
- `is-absolute`, `is-relative`
- `normalize-path`
- `relative` - расширенный `path.relative()`
- `commondir` - находит общую родительскую папку для списка директорий (на уровне строк, а не фс)
- `path-is-inside` - проверяет находится ли директория внутри другой (на уровне строк, а не фс)
- `find-cache-dir` - возвращает путь к директории-кэшу внутри `node_modules` (чтобы была своя папка-помойка как у `babel-loader`-а или `eslint-loader`-а)
- `sanitize-filename` - очищает строку от спецсимволов и "папок", делая её валидным названием файла 
- `parse-filepath` - добавляет некоторые поля к стандартному выводу
- `chokidar` / `watchpack` - вотчеры фс
- `anymatch` - матчер по чему угодно (глоб, регэксп, етс)
- `glob` / `globby` / `glob-all` / `minimatch` / `multimatch`
- `ignore` / `glob-gitignore` - glob-фильтр файлов согласно правилам `.gitignore`
- `is-dotfile`
- `file-type` - определятор типа файла
- `klaw` - фс-walker на стримах
- `touch` - аналог консольного
- `mkdirp` / `make-dir` (лучше)
- `del`
- `filenamify`
- `unused-filename` - добавляет к строке ` (1)`, ` (2)` и т.п., если файл с таким именем существует
- `ncp` - асинхронное рекурсивное копирование файлов и папок
- `move-concurrently` - самое быстрое (на сколько вообще возможно) перемещение файлов
- `proper-lockfile` - `lock`-файл
- `steno` - помогает при конкурентной записи в файл - делает все вызовы на запись последовательно
- `tmp` / `os-tmpdir` / `tempy` / `temp-dir` - работа с временными файлами и директориями
- `os-homedir`
- `user-home`
- `cacache` - умное управление файловым кешем
- `ssri` - работа с Subresource Integrity

### Стримы
- `event-stream`
- `split2`
- `through2`
- `shaper` - ограничитель скорости потока
- `isstream`
- `lazypipe`
- `destroy`
- `fs-write-stream-atomic`
- `pump` - pipe'ит стримы и закрывает все, если хоть в одном из них произошла ошибка
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
- `zen-observable`

### DB
- `mysql2` / `mariasql`
- `pg` / `pg-native` / `pg-promise`, `pg-format` - расширенный prepare statements, [пример](https://github.com/brianc/node-postgres/issues/957#issuecomment-200000070)
- `knex` / `sql` / `squel` / `sqorn` (pg only) - query builder's
- `bookshelf` / `objection` (лучше) - эти orm поверх `knex`-а / `sequelize` (`sequelize-auto`, `sequelize-definer`, `sequelize-hierarchy`, `sequelize-values`) / `typeorm`
- `ioredis` / `redis` / `hiredis`, `redlock`
- `reds` - поиск в редисе
- `rethinkdb`
- `node-localstorage` (этот держит данные в памяти) / `dom-storage` (этот пишет данные в файл) - localStorage для NodeJS
- `lowdb` - файловая json-бд поверх lodash'а

### Права и acl
- `casl` - [статья](https://habrahabr.ru/post/334076/) [на хабре](https://habr.com/post/414951/)
- `acl`
- `cancan`

### Консоль
- `object-inspect`
- `chalk` / `ansicolors` - раскраска
- `better-console` - добавление console.table-методов
- `cllc` / `multispinner` / `observatory` / `ora` / `draftlog` / `listr` - вывод с лоадером
- `commander` / `vorpal` - настройка cli-аргументов для запуска приложения (с блекджеком и генератором справки)
- `liftoff` - bin'арник для своего пакета
- `eyes` - цветной вывод данных
- `inquirer` - cli-промптер
- `minimist` / `nanomist` / `yargs` / `nopt` / `optionator` / `meow` - парсеры и организаторы cli-аргументов
- `progress` / `gauge` - настраиваемый прогресс-бар
- `boxen` - оборачивание сообщения в настраиваемую рамку
- `dedent` - убирает общие ведущие пробелы/табы каждой строки в шаблонных строках, выравнивая текст по левому краю
- `table` / `text-table` (попроще) - таблицы в консоли
- `gtop` - консольный мониторинг системы
- `update-notifier` - уведомить в консоли о наличии новой версии своего пакета (как это делает сам npm)
- [форматирование `console.time`а](https://gist.github.com/antixrist/5dec38b757ead8adca186c067cf6f2f2)

### Логирование
- `abstract-logging` - заглушка для стандартных методов логирования (для подмены, если логгер не установлен)
- `ololog`
- `debug`
- `microlog`
- `intel` / `bunyan` / `log4js` / `tracer` / `winston` / `eazy-logger` / `glogg` / `lggr` - многоуровневое (danger/error/fatal) логирование куда угодно - консоль, файлы, stdout (`log4js` медленный, `winston` - популярный, `tracer` - интересный) / `loglevel` (`loglevel-plugin-prefix`) / `whiner` / `pino` ([сайт](http://getpino.io/#/ - `pino` [должен быть самым быстрым](https://habrahabr.ru/company/ruvds/blog/334806/) / `consola` - от команды nuxt'а
- `gelf-stream` / `gelf-pro` - https://habrahabr.ru/company/2gis/blog/329128/
- `mozlog`
- `streamroller` / `file-stream-rotator` - ротация файлов логов
- [пример обёртки для системы логирования](https://github.com/likeastore/jobber/blob/0ab763b5f1ad25e57774e6e7e73192db3b38430a/source/utils/logger.js)

### Данные
- `lodash` / `iterare` / `fast.js` / [just](https://github.com/angus-c/just) / `jsprim`
- `object-path` / `dottie` - продвинутый `_.get()`, `dot-object`, `undefsafe` / `to-object-path` / `dlv` - работа с json-объектами в виде dot-нотации, `generate-object-property`
- `only` - замена `_.pick()` от TJ
- `tableize` - схлопывает (сворачивает) json-структуру в объект вида `{'level1key': 'level1value', 'level1key.level2key': 'level2value'}` / `unbend` - то же самое, но через слэш (для построения урлов)
- `@sindresorhus/is`, `isemail`, `is-svg`, `isstream`, `is-glob`, `is-dotfile`, `is-absolute`, `is-relative` / `is-buffer` (в т.ч. для браузера) - проверка типов
- `kind-of` - замена typeof
- `JSONSchema` / `ajv` , `ajv-keywords` / `z-schema` - создание и валидация JSONScheme'ы, `cast-with-schema`, `json-schema-deref-sync` / `turbo-json-parse` (не поддерживает весь стандарт))
- `type-check` - можно строить целые схемы для проверки типов, `levn` - кастует типы на основе `type-check`-схемы / `fast-json-stringify` - сериализует объект на основе схемы, кастуя значения
- `parse-strings-in-object`- строковые значения в объекте автоматически преобразовывает в соответствующие типы (`'true' = > true`, `'3.14' => 3.14`, `'null' => null`)
- `joi` / `schema-inspector` / `validator` / `forms` / `superstruct` / `validate.it.js` / `yup` / `checkit` - санитизация/валидация
- `haye` - парсер строки с перечнем валидаторов как у Laravel'а
- `ow` - прикольная валидация аргументов функций
- `string` / `strman` - если лодашевских методов работы со строками будет не хватать
- `romanize`, `deromanize` - конвертация в римские цифры из арабских и обратно
- `numeral` - работа с числами
- `google-libphonenumber` - крутая штука для парсинга номеров телефонов
- `printable-characters` - набор функций для работы с невидимыми печатными символами (определение длины, etc)
- `to-regex-range` - генерация регулярки для матчинга диапазонов чисел (как бы глупо ни звучало, но штука полезная для валидации всяких индексов и т.п.)
- `safe-regex` - проверка регулярок на быстроту выполнения - Regular expression Denial of Service (ReDoS)
- `scmp` - безопасное от timing attacks сравнение буфферов (т.е. всегда за константное время), использует нодовый `crypto.timingSafeEqual()`, если доступен
- `moment` - это, понятное дело, дата/время (+ `helper-moment` для шаблонов) / `date-fns` - улучшенная (и при этом проще) библиотека для манипуляций с датами / `dayjs` - ещё одна маленькая либа для манипуляций с датами / `jstimezonedetect` - для браузера (в основном) / `spacetime` - для работы с датами и временными зонами
- `date.js` - парсер человекопонятных дат английском языке
- `accounting` - парсер чисел и валют (в основном валют)
- `currency-formatter` - форматтер валют
- `human-interval` - парсер человекопонятных интервалов на английском языке
- `filesize` - человекопятный размер файлов
- `pretty-hrtime` / `performance-now` - человекопятный `process.hrtime()`
- `humanize-number` - человекопонятные числа
- `expiry-js` / `ms` - парсер длительностей (1M, 1Y, 1h, 1m, 1s, 1ms, etc)
- `pretty-ms` - форматирование миллисекунд
- `normalizr`, `reselect` - для flux-архитектуры
- `normalize-object` - нормализует все ключи объекта (рекурсивно) в выбранной нотации - camelCase, kebabCase и т.п.
- `deep-diff` / `diff` / `jsondiffpatch` / `jiff` / `just-diff`, `just-diff-apply` / `arr-diff`, `fast-json-patch`
- `diff` - реализация алгоритма diff'а текста (шоб можно было сделать прям как на гитхабе) / `fast-diff`
- `deep-equal` / `fast-deep-equal`
- `fastest-clone` / `rfdc` - быстрое клонирование / `fclone` - быстрое клонирование с учётом циклических ссылок / `deepcopy` - гибко настраивается функцией `reviewer`-ом
- `deepmerge`
- `deep-freeze`
- `BitArray.js` ([git](https://github.com/brockwhittaker/BitArray.js)) Очень оптимизированный массив для хранения битовых флагов
- `pako` - zlib для js
- `yauzl` - unzip
- `lz-string` - мощное сжатие/декомпрессия строк для хранения, к примеру, в localStorage
- `quickselect`
- `bintrees` - самосортируемая структура с бинарным поиском
- `cuint` / `bignumber.js` / `long` / `bn.js` / `bigi` / `json-bigint` / `leemon` - big integer для js
- `flatstr` - ускоряет работу с большими конкатенированными строками (каким-то образом запускает внутреннюю оптимизацию v8)
- `media-typer` - парсер mime
- `mime` / `mime-db` / `mime-types` - полный набор по работе с mime / `whatwg-mimetype`
- `memored` - шаринг данных между форками процесса
- `theorem.js` - комбайн с вычислениями по алгебре, геометрии, статистики, работе с числами, единицами измерения и т.п.

### Тестирование
- `supertest`
- `mocha` (`chai`) / `jasmin` (`karma`) / `nodeunit` / `ava` / `tape` / `jest` (`jest` / `ava` [предпочтительнее](https://habrahabr.ru/company/zfort/blog/332736/#comment_10304680))
- `mocha-allure-reporter` - `allure` - это репортер со своим веб-интерфейсом, преферансом и графиками

### Рекваестеры и http-тулзы
- `request` (`request-promise`), `@request/interface`, `@request/api`, `requestretry` / `axios`, `axios-retry` / `ky`, `ky-universal` / `needle` / `node-fetch` / `@hapi/wreck` / `got` / `superagent` / `urllib`
- `dnscache`
- `caw` / `proxy-agent`
- `request-capture-har` - захват всего `request`-траффика для последующего анализа
- `download` / `getit`
- `is-retry-allowed` - на основании кода ошибки запроса определяет - можно ли делать запрос повторно
- `is-online` - есть ли коннект с интернетом
- `is-reachable` - есть ли коннект с конкретным ресурсом
- `tunnel`
- `follow-redirects`
- `type-is` - проверка типа содержимого запроса
- `http-status` / `statuses`
- `fresh` - проверяет по заголовкам - нужно отдать `304 Not Modified` или нет.
- `on-finished` - вызывает колбэк, когда `req` или `res` завершён, в т.ч. с ошибкой или он был прерван
- `request-stats` - выдирает из req/res только полезную для логов инфу 
- `form-data` - создаёт readable `multipart/form-data`-стримы. Для отправки данных формы и загрузки файлов в другие http-api
- `nock` / `light-my-request` (от `fastify`) - mock'и для http-запросов (удобно для тестирования и заглушки api)
- `slimbot` - бот для телеграмма
- `node-vk-bot-api` - бот для вк
- `instagram-private-api` - неофициальное api для инстаграмма с полной эмуляцией андройд-клиента ([на питоне](https://github.com/mgp25/Instagram-API/) популярнее и обновляется чаще)
- `socks5-https-client`
- `apiai` - распознавание голоса с помощью гугловского [api.ai](https://api.ai/)

### Парсинг dom'а, json'а, csv, markdown
- `browser-env`
- `jsdom` / `cheerio` / `whacko` / `parse5`
- `json5` - json с блекджеком и комментиками
- `strip-json-comments` - тут понятно
- `node-readability` / `read-art` - вычленение основного и главного из всей страницы
- `semantic-schema-parser` - парсер schema.org: microdata, RDFa-lite, JSON-LD
- `web-auto-extractor` - парсер schema.org: microdata, RDFa-lite, JSON-LD
- `page-metadata-parser` - парсинг метаданных страницы - мета-теги, opengraph
- `open-graph-scraper` - парсер opengraph
- `csv-stringify`, `fast-csv` / `csv-streamify` / `papaparse` / `csv` / `csvtojson`
- `xml-mapping` - json в xml и обратно
- `xmldoc`
- `js-yaml`
- `html-tokenize`
- `JSONStream` / `json-depth-stream` - потоковый парсер огромных json'ов
- `marked` / `markdown-it` - md2html, `turndown` - html2md, `showdown` - в обе стороны
- `html-to-text`
- `sanitize-html` / `escape-html` / `jsesc` / `he` / `xss` / `insane` (`jevix` для js)
- `feed-read` - парсер rss фидов
- `braces` / `brace-expansion` - парсит и разворачивает bash-like скобки: `a/{b,c}/d` => `['a/b/d', 'a/c/d']`, `{01..03}` => `['01', '02', '03']`, `{2..10..2}` => `['2', '4', '6', '8', '10']`
- `curly-braces` - проверяет валидность вложенных скобок. `(){}[]` и `([{}])` - валидно, а `[(])` - нет

### Офисные форматы
- `docxtemplater`
- `excelize` / `exceljs` / `excel4node`
- `xml2js` / `x2js` / `fast-xml2js`
- `js-xlsx` / `xlsx` - парсер и запись xls-форматов
- `pdfjs-dist` - парсер и рендер pdf от mozilla'ы
- `pdfkit`
- `pdf2json`
- `relaxedjs` - рендер pdf'а из html/pug шаблонов, с полным использованием css, клиентском js, markdown'а и LaTex'а.

### Headless-браузеры и тестирование
- `nightmare`
- `chromeless` / `puppeteer` - обёртка над безголовым хромом
- [парсинг с puppeteer](https://www.youtube.com/watch?v=Nn75sRAOlIY)
- `headless-cat-n-mouse` - обнаружение и обход обнаружения headless-браузеров, [репозиторий](https://github.com/paulirish/headless-cat-n-mouse)
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
- `auto-proxy`
- [прокси поверх tor'а](https://stackoverflow.com/questions/19221903/how-to-add-proxy-like-tor-when-scraping-using-node-io)
- `http-proxy` - свой прокси-сервер на ноде
- `http-mitm-proxy` - свой прокси-сервер на ноде
- `anyproxy` - свой прокси-сервер на ноде от alibaba'ы
- `proxy-addr` - определяет адрес проксированного запроса (из объекта `req`)

#### Юзер-агентики
- `useragent` - парсер/матчер/компаратор юзерагентов
- `random-useragent`
- `ua-parser-js` - клиентский парсер user-agent'а

#### Печеньки
- `js-cookie`
- `cookie`
- `tough-cookie`, `tough-cookie-filestore`
- `cookies.txt`
- `react-cookie`
- `cookies` - это для express'а/koa, и вряд ли нужен / `node-cookie` - тоже для создания/чтения/подписи кук из/в `req`/`res`

#### Скриншотилки
- `pageres` - под капотом `capture-website`
- `capture-website` - под капотом `puppeteer`
- `webshot`
- `html2canvas`
- [Скриншотилка на базе безголового хрома](https://medium.com/@dschnr/using-headless-chrome-as-an-automated-screenshot-tool-4b07dffba79a)
- [Скриншотилка в pdf as-a-service на базе безголового хрома](https://github.com/alvarcarto/url-to-pdf-api)

### Урлы и IP
- `parseurl`, `qs`
- `ip` / `ipaddr.js` / `ip-address`
- `is-ip`
- `ip-regex` - регулярка для ip
- `stun` - определение своего внешнего ip-адреса по stun-протоколу ([список доступных публичных серверов](https://gist.github.com/antixrist/b529e3b231cdf5c28c8d197543ad026f)) / `public-ip` - определение внешнего ip через dns-запрос / `internal-ip` - определение локального ip
- `geoip-lite` / `maxmind` (+ поискать для [sypexgeo](https://sypexgeo.net/ru/stats/)). Свой сервис - [freegeoip](https://github.com/fiorix/freegeoip) / `geoip-local`
- `fast-url-parser` и `querystringparser`
- `url-parse-lax` - расширенный url.parse - без протоколов и с ip
- `encodeurl`
- `cyrillic-to-translit-js`
- `filenamify-url`
- `valid-url`
- `humanize-url`
- `normalize-url`
- `prepend-http` - ну такое, особо бессмысленное
- `protocolify`
- `urijs`
- `url-pattern`
- `proxy-addr` - определяет адрес проксированного запроса (из объекта `req`), под капотом юзает `ipaddr.js` и `forwarded`
- `path-to-regexp` - превращает строки вида `/foo/:bar` в регекспы вида `/^\/foo\/([^\/]+?)\/?$/i` (полезно для написания роутера, используется во `vue-router`)
- `is-google` - по ip проверяет сделан ли запрос от гуглобота, или кто-то просто подделал user-agent, чтобы им притвориться
- `slug` - делает замену пробелов и unicode-символов (даже emoji) для пригодности в урл
Чекалки ip:
  - http://checkip.dyndns.com/
  - http://ipinfo.io/ip
  - https://yandex.ru/internet/

### Генераторы (чисел, строк, данных, uid'ов)
- `faker`
- `faker.js`
- `json-schema-faker`
- `hashids` / `identifier` - строки из чисел
- `node-uuid` / `uid-safe` / `nanoid` / `cuid` / `shortid` / `nuid` / `hyperid` (самый быстрый, с декодером)
- `sguid`
- `randexp` - генерация строки по регэкспу
- `stjs` - json-шаблонизатор для генерации json'а
- `chance`
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

### Хэширование и криптография
- `murmurhash-native` / `imurmurhash` - быстрое и (вроде как) наименее коллизионное хэширование
- `hash-sum` / `hasha` / `js-md5` / `object-hash`
- `xxhashjs`
- `json-stringify-safe` / `circular-json` / `stringify-object` - `JSON.stringify()` с обработкой циклических ссылок
- `@nuxt/devalue` - как `json-stringify-safe`, но ещё экранирует js-содержимое для предотвращения XSS (чтобы напрямую в html можно было записать `'window.state = '+ devalue(state)`), обрабатывает Map/Set/date/регулярки и т.п.
- `serialize-javascript` - от yahoo. как `@nuxt/devalue`, но `nuxt` вместо него написал свой `devalue` (возможно потому, что не обрабатывает циклические ссылки?)
- `json-stable-stringify` - от substack'а, детерминированный `JSON.stringify()` (даже если порядок ключей разнится от среды выполнения), с лицензией зависимости есть проблемы /  `json-stable-stringify-without-jsonify` - просто форк первого без проблем с лицензиями / `fast-json-stable-stringify` - допиленный форк первого, порядок с лицензиями, но сильно быстрее / `fast-stable-stringify` - самостоятельная реализация, не проверяет на циклические ссылки и вообще без опций, поэтому самый быстрый
- `@hapi/bourne` - `JSON.parse()` с защитой от инъекции `__proto__`
- `bcrypt` / `bcrypt-nodejs` / `pwd` / `pswd` / `bcryptjs` (чистый js - для браузера, использует Климов) - для паролей
- `keygrip` - подпись и валидация подписанных данных (module for signing and verifying data (such as cookies or URLs) through a rotating credential system)
- `simple-encryptor` - криптор/декриптор строк/объектов по ключу

### Полезности
- `bluebird` / `aigle` / `neo-async` - `async` для промисов
- `relike` / `universalify` (используется в `fs-extra`) / `awaiting` / `pify` - промисификация
- `awaity` - bluebird-lodash для промисов на async/await'ах
- `p-progress` - промисы с прогрессом ([много интересного для промисов](https://github.com/sindresorhus/promise-fun))
- `p-timeout` - таймаут для промисов 
- `thunkify` - callback'ифицирует callbacks, arrays, generators, generator functions, and promises
- `inflight` / `promise-inflight` - оборачивает функцию таким образом, что можно вызывать функцию-обёртку несколько раз с разными коллбеками, а когда вызов функции завершит выполнение, то все коллбеки будут выполненны последовательно и асинхронно
- `co`
- `inherits`
- `sliced`
- `d` - удобный описатель дескрипторов свойств
- `delegates` - делегация методов и пропертей прототипа к какому-либо свойству этого прототипа
- `function-done` / `always-done`
- `generate-function` - `new Function` на стеройдах
- `lru-cache` / `hashlru` / `node-cache` / `tiny-lru` / `p-cache` / `sacjs`
- `mem` / `fast-memoize` / `p-memoize` (для промисов)
- `wrappy` - оборачивает функцию, перенося все кастомные пропертя этой функции в обёртку. полезно (внезапно) для обёрток
- `shimmer` - типа Proxy через monkeypatching
- `ware` / `middleware-chain` - создание кастомной цепочки мидлварей (прям как в express'е)
- `internal` - созданице цепочки тасков, как у Nightmare
- `archiver` - архиватор
- `ffi` - работа с системными библиотеками без написания c++ обёрток
- `apiai` - распознавание голоса с помощью гугловского [api.ai](https://api.ai/)

### Очередя и таски
- `retry` (`async-retry`, `promise-retry`, `promise-poller`) / `tolerance` / `requestretry` / `axios-retry` / `p-retry`
- `is-retry-allowed` - на основании кода ошибки запроса определяет - можно ли делать запрос повторно
- `async-throttle`
- `async/queue` / `async/priorityQueue` 
- `raf-throttle` - throttle на requestAnimationFrame
- `semaphore` - ограничитель одновременного доступа к ресурсу
- `function-rate-limit` / `express-rate-limit` / `rate-limiter-flexible` (универсальный)
- `p-queue` - очередя на промисах
- `kue` (`kue-ui`) / `bull` / `bee-queue` - очередя на редисе
- `node-resque` - тоже очередя на редисе (порт с ruby, судя по всему)
- `agenda` - очередя на монге
- `axon` - zeromq на ноде
- `amqplib` / `tortoise` - клиент для rabbitmq
- `nats` - клиент для nats-сервера на go
- `queue3`
- `enqueue`
- `fastqueue`
- `argumentable-queue`
- `generic-pool`
- `denque`
- `@blakeembrey/deque` - двухсторонняя очередь
- `node-schedule` - flexible cron-like and not-cron-like job scheduler
- `cron`
- `cron-parser`
- `are-we-there-yet` - трекинг статусов выполнения у коллекции задач и стримов
- [пример на async-await'ах](https://gist.github.com/antixrist/d75c46692ed8a9035d05056449184e98)
- [wal-лог](https://habrahabr.ru/company/mailru/blog/341498/#comment_10503842)

### Кодировки
- `whatwg-encoding`
- `encoding`
- `iconv-lite`
- `iconv`
- `text-encoding`
- `jschardet` - определение кодировки

### AST-парсеры
- `aps-rql` - https://habrahabr.ru/company/odin_ingram_micro/blog/331774/
- `pegjs` - произвольные синтаксические конструкции
- `fastparse`
- `esprima` - парсер ECMAScript на ECMAScript
- `parser-base` - каркас для строкового парсера (подобие `json5`)
- `parsimmon` - parser combinator
- `unified`

### Email
- `nodemailer` / `postmark` / `emailjs`
- `mailgen` / `mailmason` / [bojler](https://github.com/Slicejack/bojler), `email-templates` - html-шаблоны для мыла
- `nonprofit-email-service`
- `mailit` - готовый микросервис для отправки email'ов через http-api
- `premailer` / `inlining` / `juice` - обработка html для email (inline'инг стилей, etc)
- `mjml` - годный шаблонизатор для email-писем
- `disposable-email` - база доменов, которые используют сервисы временных email'ов
- [Bulletproof email buttons](https://buttons.cm/)

## Изображения
- `sharp` / `jimp` - полнофункциональная обработка
- `gm` / `graphicsmagick2`
- `image-size`
- `image-type`
- `resemblejs` - сравнение изображений
- `pixelmatch` - создание diff'а изображений
- `tesseract.js` - распознавалка текста
- `node-openalpr` - распознавалка номерных знаков на нейронных сетях, tesseract'е и opencv
- `exif2` / `gm-exif` / `libexif` / `exif-parser`
- `gify` / `gifski` - делает гифку из видео (второй ещё и высококачественные)
- `pngjs`, `jpeg-js`
- `jsqr` - считывалка qr-кодов с изображений
- [image-compressor](https://github.com/xkeshi/image-compressor) - браузерная сжималка (использовать перед отправкой на сервер)
- [Генерация превьюшек на лету с помощью AWS Lambda, golang, nodejs и nginx](https://habr.com/post/354226/)

### Морфология и текст
- `phpmorphy`
- `natural` - огромный набор инструментов для работы с натуральным языком (токенайзер, дистанции, префиксные деревья, стеммеры, классификаторы, сравнение звучаний, n-граммы, tf-idf, спеллчекер для английского, части речи)
- `compromise` - под англ.язык и не только
- `az`
- `wordpos` - части речи для английского
- `leven` - самый быстрый левенштейн, `string-similarity` - алгоритм лучше левенштейна
- `diff`
- `fuzzyset.js` / `string_score` / `fuse.js` / `fuzzaldrin` / `fuzzysort` - матчинг строк
- `lunr-languages`
- `petrovich` / `name-case-lib-port` - склонение русских/украинских фио
- `stopword` - удаляет список бесполезные слова из текста (предлоги, союзы и т.п.) для многих языков, можно натренировать с помощью `stopword-trainer`.
- `word2vec` / `word2vec-native` / `word2vec.js`
- `wuzzy` - похожесть строк разными алгоритмами
- `convert-layout` - смена раскладки переданной строки
- `@google-cloud/speech` - разпознавание теста из аудио с помощью google cloud api (есть русский язык)
- `franc` / `guesslanguage` - определение языка
- `node-summary` - выдёргивает основную мысль из текста
- `yaspeller` - спеллчекер через яндексовое api
- `@google-cloud/language` - определение языка, тональности текста, сущностей, предложений, токенов, etc. Это обёртка для Google Cloud Api.
- [Классификация текста от facebook'а](https://github.com/facebookresearch/fastText)
- [Поисковый движок (или типа того) от facebook'а](https://github.com/facebookresearch/faiss)

### DI
- `bottlejs`
- `singular`
- `intakejs`
- `di.js` - от яндексойда + [статья на хабре](https://habrahabr.ru/company/yandex/blog/341710/)
- `inversify` - мощный, для typescript'а

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
- `polylabel` / `@mapbox/polylabel` / [mapsapi-polylabeler](https://github.com/yandex/mapsapi-polylabeler) - нахождение оптимальной точки для расположения лейбла внутри полигона + [статья от яндекса](https://habr.com/company/yandex/blog/353498/)
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
- `graphlib`

### Платёжные системы
- `yandex-checkout` - [статья](https://habr.com/company/yamoney/blog/348070/)

### Генерация документации
- swagger
- `apidoc`
- [slate](https://github.com/lord/slate)

### Деплой
- [pm2](https://github.com/Unitech/pm2) (+ `pmx`, `pm2-pager`, `pm2-logrotate`, [как юзать socket.io на кластеризованном приложении](https://github.com/Unitech/PM2/issues/637#issuecomment-215915328))
- [now](https://github.com/zeit/now)
- [pod](https://github.com/yyx990803/pod) - маленький аналог `pm2`
- [rsynced](https://github.com/rumkin/rsynced) - deploy-аналог pm2, но без гита
- [shipit](https://github.com/shipitjs/shipit) - gulp'ово/grunt'ово подобный деплойер
- [dokku](https://github.com/dokku/dokku) - heroku + docker

## Front
[ui-плагины без jquery](http://youmightnotneedjqueryplugins.com/)
[plainjs.com](https://plainjs.com/) - подборка ванильных ui-виджетов и ванильных jquery-заменителей
- `asap` / `next-tick` / `setimmediate` - как только, так сразу. Кроссбраузерный `process.nextTick`
- `simulant` - симуляция реальных браузерных событий
- [web-font-loading-recipes](https://github.com/zachleat/web-font-loading-recipes)
- `webfontloader` - загрузка шрифтов с Google Fonts, Typekit, Fonts.com и Fontdeck
- `fontfaceobserver` - promise-мониторилка загрузки веб-шрифтов, откуда бы они не загружались
- [font-style-matcher](https://meowni.ca/font-style-matcher/) - онлайн сервис для подбора и настройки наиболее похожего fallback'чного шрифта
- `system-font-css` - альтернатива стеку системных шрифтов
- [fontplop](https://github.com/matthewgonzalez/fontplop) - конвертёр web-шрифтов, но под мак
- `glyphhanger` - консольная тузла, которая пауком проходится по страничкам, смотрит какие глифы используются и сохраняет с ними файлы шрифтов (т.е. нужна для оптимизации используемых веб-шрифтов), от filament'а.
- `nerd-fonts` - компиляция всех популярных opensource-шрифтов в один
- `feather-icons` / `vue-feather-icon` / `material-design-icons` - svg-иконки
- `mousetrap` - работа с комбинациями hotkey'ев
- `tablesaw` - responsive-таблицы от filament'а (с кучей функционала)
- `fg-select-css` - стили для кроссбраузерной кастомизации select'а от filament'а
- [Как правильно](https://css-tricks.com/overriding-default-button-styles/) [сбрасывать стили](https://fvsch.com/code/styling-buttons/) button'ов
- `@flowjs/flow.js` - загрузка файлов с примером бекенда на ноде
- `file-saver`, `save-as`
- `filepond` - upload'илка файлов
- `smartcrop`
- `copy-to-clipboard`
- `vkey`
- `parsleyjs` - валидатор форм
- `pretty-checkbox` - чекбоксы на scss'е
- `drop-anywhere` - для d'n'd загрузки файлов где угодно на странице
- `dropzone`
- `noty` ([обёртка для vue](https://github.com/nikitamarcius/vue-notice)) - уведомлялка
- `criticalcss` / `critical` / `penthouse` - critical css
- `critters-webpack-plugin` - плагин для webpack'а для встраивания critical css
- `jquery-mask-plugin` / `inputmask` / `cleave.js` / `text-mask-all` / `text-mask` / `imask` - маски текстового ввода
- `simple-web-worker`
- `webworker-promise` - promise-обёртка над webworker'ами ([статья](https://habrahabr.ru/post/337492/))
- `webworkify-webpack` / `workly` - практически прозрачная webworker'ификация
- `scalable` - зачётный object-fit на scale'ах и translate'ах
- `fitty` - вписывает текст в родительский контейнер
- `ellipsed` - обрезка с многоточием многострочных текстов
- `trunc-text`
- `trunc-html`
- `shear.js` / `truncate-html` - truncate текста, с учётом html-тегов
- `wenk` / `balloon-css` / `hint.css`
- `popper.js` (`vue-popperjs`) / `tooltip.js` - замена `tether`у
- `equalizecss` - bootstrap-like flex-сетка на sass'е
- `jeet` - сетка на float'ах
- `floatthead` / `vue-floatthead` / [minicss](http://minicss.org/table#scrollable-tables) - плавающая шапка у таблиц (вроде самая нормальная из всех возможных), но на jquery
- `rader` - слайдер от 2gis'а
- `geoloc` - геолокация с фронта путём опроса свободных источников от 2gis'а
- `appmetrics.js` - обертка над User Timing API, с возможностью отправки всего намерянного в GA.
- `dom-serialize` - сериализация dom-нод в строку
- `common-tags` - годный html-шаблонизатор. как jsx, только правильный
- `zingtouch` / `hammerjs` / `slipjs` - touch-гестуры и события
- `blankshield` - безопасный `target="_blank"`
- `bowser` / `platform` / `mobile-detect`- определитель девайса по юзерагенту
- `evercookie` - [repo](https://github.com/samyk/evercookie)
- `fingerprintjs2`
- `history`
- `instantclick` / `turbolinks` - простой способ сделать классический сайт близким по скорости к spa / `quicklink` - prefetch'ит ссылки во вьюпорте 
- [JavaScript-autoComplete](https://github.com/Pixabay/JavaScript-autoComplete)
- `mediaplayer` / `video.js` / `mediaelement` - лёгкий, расширяемый, интернациональный, доступный, кроссбраузерный, легконастраиваемый медиаплеер на ванильном js
- `animejs` - норм такие анимашки
- `@simonwep/selection-js` - нормальная выделялка объектов курсором (как в проводнике или `brush` из `d3`)
- `jquery.payment` - форма для банковской карты [repo](https://github.com/stripe/jquery.payment)
- `card-info` - форма для банковской карты [repo](https://github.com/iserdmi/card-info)
- `card` - форма для банковской карты [repo](https://github.com/jessepollak/card)
- `payment` - форма для банковской карты [repo](https://github.com/jessepollak/payment)
- `banks-db` - определение банка по номеру карты
- `block-elements` - определяет, является ли тег блочным (по названию)
- `trial-js` - предсказание клика юзера по наблюдениям за передвижениями мыши
- `scrollbarwidth`
- `scrollparent` - нахождение ближайшего родителя со скроллом
- `simplebar` / `baron` (от 2gis'а) / `simplebar` (`simplebar-vue`) - кроссбраузерный кастомный скролл
- `scrollbooster` - drag-скроллер контента
- `smooth-scrollbar` / `smoothscroll-polyfill` (`scroll-behavior: smooth;`)
- `inobounce` - какой-то fix скролла на ios, связанный с `-webkit-overflow-scrolling`
- `waypoints` / `isInViewport` / `porthole` / `jquery-viewport` / `sticky-kit` / `scrollmonitor`- попадание элемента во вьюпорт, наблюдение за скроллом, липкий сайдбар, [hc-sticky](https://github.com/somewebmedia/hc-sticky) и [его](https://github.com/ferryvg/hc-sticky) [форки](https://github.com/CHEWX/hc-sticky) / `scrollama` - на IntersectionObserver'ах
- `lozad` / [ещё один lazyload на IntersectionObserver](https://github.com/deanhume/lazy-observer-load). [демка](https://deanhume.github.io/lazy-observer-load/) / `lazysizes` - на IntersectionObserver, его советует Addy Osmani
- `eqio` - Element css media-queries
- `image-promise` - промайзнутый `new Image` с кучей правильных проверок
- `lightbox2` / `photoswipe` (используется на vc.ru) - модалочка для картинок
- `focus` - нахождение центральной сущности на изображении для последующей фокусировки или кропа
- `@nishanths/zoom.js` / `medium-zoom` - zoom изображений как на medium'е
- `fg-enlarge` - zoom изображения вслед за курсором внутри контейнера, как на али 
- `flexslider`, `vue-awesome-swiper` / `swipejs` / `owl.carousel` / `responsive-carousel` / `flickity` / `swiper` / `siema` - каруселька
- `flatpickr` - календарь
- `pickr-widget` - color picker без привязки к фреймворку
- `handorgel` - аккордеон без зависимостей
- `@filamentgroup/tau` - 360° галерея
- `quill` / `medium-editor` / `pell` / `jodit` / `trix` / [Squire](https://github.com/neilj/Squire) / `woofmark` / `mavon-editor` (на чистом vue) - текстовый редактор
- `auto-textarea`
- `linkifyjs` - оборачивает текстовые ссылки в html-ссылки
- `sentinel-js` - отслеживает появление dom-элементов с заданным селектором
- `fg-loadcss` - асинхронная загрузка css от filament'а ([пример использования](https://gist.github.com/thedaviddias/c24763b82b9991e53928e66a0bafc9bf))
- `load-script`- асинхронная загрузка js
- `@shopify/draggable` - мощная новая drag-n-drop'алка
- `notifyjs` - браузерные нотификации
- `tabbable` - находит все dom-ноды, в которые возможна фокусировка tab'ом, внутри переданного контейнера
- `focus-trap` / `react-focus-lock` - при переключении фокуса tab'ом, не даёт ему выйти за границы модалки, [статья](https://habr.com/post/338130/)
- `@ymatuhin/onerror`
- `react-aria-modal` - правильная модалка, [статья](https://habrahabr.ru/post/338130/) /  `micromodal`- тоже норм aria-модалка / `a11y-dialog` - и ещё одна "доступная" модалка
- [break-on-access](https://github.com/paulirish/break-on-access) - полезная тулза, чтобы ставить брейкпоинты на любом объекте, который будет срабатывать в момент получения свойства этого объекта
- `devtools-detect` - кроссбраузерное определение открытого devtools'а
- [Красивые кнопочки](https://github.com/alexwolfe/Buttons/)
- `analytics.js` - аналитика от segment.io
- [обёртка над GA](https://github.com/philipwalton/analyticsjs-boilerplate)
- [получение ip через WebRTC](https://gist.github.com/antixrist/52e125476ee54f574046db963d522ab5)
- [залогинен ли юзер в соц.сетях](https://gist.github.com/antixrist/dbc4630fd4dab2d3bf3b0aa92a534363)
- [image-compressor](https://github.com/xkeshi/image-compressor) - браузерная сжималка (использовать перед upload'ом на сервер)
[Много ui-виджетов](https://github.com/dexteryy/spellbook-of-modern-webdev#ux-libraries)
[Норм scss-тема для bootstrap'а](https://github.com/tabler/tabler/tree/dev/src/assets/scss)

### Vue.js
- `vuex-shared-mutations` - запускает мутации на всех открытых табах
- `vuex-loading`
- `vuex-cache`
- `vuex-persistedstate` / `vuex-persist` (этот лучше) 
- `vue-functional-data-merge`
- [Как правильно публиковать](https://pablohpsilva.github.io/vuejs-component-style-guide/#/russian) [vue-компоненты](https://vuejsdevelopers.com/2017/07/31/vue-component-publish-npm/)
- `vuera` - React во Vue, Vue в React'е
[Описание настройки SSR](https://habrahabr.ru/post/334952/)

### ab-тесты
- `trafficcop` - ab-тестирование от mozilla'ы
- [segmentator - сегментирование траффика для ab от retail-rocket](https://github.com/RetailRocket/RetailRocket.Segmentator)

### Полифиллы:
- [polyfill-service](https://github.com/Financial-Times/polyfill-service) - смысл в том, чтобы использовать из этого сервиса только браузерное api. Для полифиллинга ECMAScript использовать `babel-polyfill`.
- [Здесь тоже много ссылок](https://github.com/dexteryy/spellbook-of-modern-webdev#cross-browser--polyfill-libraries)
- [и здесь](https://github.com/Modernizr/Modernizr/blob/master/lib/polyfills.json)
- `dom4`
- `store` - враппер над localStorage'м с fallback'ами на всё, что только возможно. можно сделать асинхронным для обёртки над редисом или типа того. В ноде хорошо работает в связке с `node-localstorage` / `dom-storage`.
- `localforage` - то же, что и `store`, только над `indexeddb`, `websql`, `localstorage`. Асинхронный.
- `dexie` - враппер над IndexedDB
- `fg-loadcss` - полифил для `rel=preload` от FG
- `custom-event`
- `sticky-state` / `fixed-sticky` - второй от filament'а и используется на mail.ru'ответах (не поддерживается) / `stickybits` - рабочий поддерживаемый
- `object-fit-images`
- `url-search-params`
- `resize-observer-polyfill`
- `matchmedia-polyfill`
- `bounding-client-rect`
- `mutation-observer`
- `intersection-observer` ([описание конфигурации](https://habrahabr.ru/post/348030/))
- `ric-shim` - requestIdleCallback
- `current-script-polyfill` - `document.currentScript` для ишаков
- `shim-keyboard-event-key` - `KeyboardEvent.key` для ишаков и Edge
- `element-closest` - `Element.closest()` для ишаков
- `window-location-origin` - `window.location.origin` для ишаков
- `blob`
- `on-full-screen`, `is-full-screen`, `request-full-screen`, `exit-full-screen` / `screenfull.js`
- `smoothscroll-polyfill`
- `events-polyfill`
- `abort-controller`
- `focus-visible` - [зачем он нужен](https://css-tricks.com/keyboard-only-focus-styles/)
- `css.escape`
- `scrollingelement`
- `buffer`
- `history.js`
- [detect_flex](https://github.com/ergcode/ergonomic.detect_flex) - определение поддержки flexbox'ов (нормально работает в мобильниках)
- [HTML5-Progress-polyfill](https://github.com/LeaVerou/HTML5-Progress-polyfill)
- [Полифиллы, которые использовал github](https://github.blog/2018-09-06-removing-jquery-from-github-frontend/#polyfills)
- [Список всех возможных WebApi](https://developer.mozilla.org/en-US/docs/Web/API)

### nginx
- [конфиг с настроенным кешем от h5bp](https://github.com/h5bp/server-configs-nginx)
- [конфиг для http2/https, ipv6, load balancing'ом, нормальные заголовки для GeoIP](https://github.com/certsimple/nginx-http2-load-balancing-config)


## Docker
- [`portainer`](https://github.com/portainer/portainer) - лёгкое ui для docker'а


## Etc
- `pencil` - [repo](https://github.com/evolus/pencil) d'n'd билдер дизайна и интерфейсов на электроне
