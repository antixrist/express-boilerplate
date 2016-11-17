const path = require('path');
const cwd = process.cwd();

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
    // watch:           true,
    ignore_watch:    ['node_modules'],
    error_file:      path.join(cwd, 'logs', 'err.log'),
    out_file:        path.join(cwd, 'logs', 'out.log'),
    merge_logs:      true,
    // log_date_format: 'YYYY-MM-DD HH:mm Z',
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
