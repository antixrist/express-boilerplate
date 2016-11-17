module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [{
    name:            'express',
    script:          './dist/server.js',
    instances:       -1,
    exec_mode:       'cluster',
    watch:           ['./dist'],
    ignore_watch:    ['node_modules'],
    error_file:      'logs/err.log',
    out_file:        'logs/out.log',
    merge_logs:      true,
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    max_memory_restart : '100M',
    source_map_support: true,
    wait_ready: true,
    max_restarts: 50,
    // post_update: ['npm install', 'echo launching the app'],
    restart_delay: 3000,
    env:             {
      NODE_ENV: 'development',
      COMMON_VARIABLE: 'true'
    },
    env_production:  {
      NODE_ENV: 'production'
    }
  }],
  
  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  // deploy: {
  //   production: {
  //     user:          "node",
  //     host:          "212.83.163.1",
  //     ref:           "origin/master",
  //     repo:          "git@github.com:repo.git",
  //     path:          "/var/www/production",
  //     "post-deploy": "npm install && pm2 startOrRestart ecosystem.json --env production"
  //   },
  //   dev:        {
  //     user:          "node",
  //     host:          "212.83.163.1",
  //     ref:           "origin/master",
  //     repo:          "git@github.com:repo.git",
  //     path:          "/var/www/development",
  //     "post-deploy": "npm install && pm2 startOrRestart ecosystem.json --env dev",
  //     env:           {
  //       NODE_ENV: "dev"
  //     }
  //   }
  // }
};
