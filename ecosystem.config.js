module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [{
    name:               'express',
    script:             './dist/server.js',
    instances:          0,
    exec_mode:          'cluster',
    watch:              ['./dist'],
    ignore_watch:       ['node_modules'],
    watch_options:      {
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: {
        pollInterval:       200,
        stabilityThreshold: 2000
      }
    },
    error_file:         'logs/err.log',
    out_file:           'logs/out.log',
    merge_logs:         true,
    log_date_format:    'YYYY-MM-DD HH:mm Z',
    max_memory_restart: '100M',
    source_map_support: true,
    wait_ready:         true,
    max_restarts:       50,
    // post_update: ['npm install', 'echo launching the app'],
    // restart_delay: 3000,
    /** todo: подгружать переменные окружения из конфигов */
    env:                {
      NODE_ENV: 'development'
    },
    env_production:     {
      NODE_ENV: 'production'
    }
  }],
  
  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user:          "host_username",
      host:          "host_address",
      ref:           "origin/production",
      repo:          "git@repo_address:path/to/project.git",
      path:          "/path/to/deploy",
      "post-deploy": "yarn install --production && npm rebuild && yarn run build && pm2 startOrGracefulReload ecosystem.config.js --env production"
    },
    // dev:        {
    //   user:          "node",
    //   host:          "212.83.163.1",
    //   ref:           "origin/master",
    //   repo:          "git@github.com:repo.git",
    //   path:          "/var/www/development",
    //   "post-deploy": "npm install && pm2 startOrRestart ecosystem.json --env dev",
    //   env:           {
    //     NODE_ENV: "dev"
    //   }
    // }
  }
};
