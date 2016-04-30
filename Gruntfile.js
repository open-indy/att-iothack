module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  var testingPaths = ['./spec/**/*.js'];
  var mochaCompilers = ['babel/register'];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env: {
      grunt: {
        NODE_ENV: 'grunt'
      }
    },
    mochaTest: {
      local: {
        options: {
          reporter: 'nyan',
          require: mochaCompilers
        },
        src: testingPaths
      }
    },
    eslint: {
      target: ['./src/**/*.js', '!./src/components/common/**/*.js'],
      // options: {
      //   configFile: './path/to/eslint.config.json'
      // }
    },
    clean: {
      package: {
        src: ['./package']
      }
    },
    copy: {
      all: {
        files: [
          { expand: true,  cwd: './public/',  src: ['**/*'], dest: './package/public/' },
          // { expand: true,  cwd: './server/',  src: ['**/*'], dest: './package/server/' },
          { expand: true,  cwd: './config/',  src: ['**/*'], dest: './package/config/' },
          { expand: true,  cwd: './views/',  src: ['**/*'], dest: './package/views/' },
          { expand: false, src: ['./app.js'], dest: './package/app.js' },
          { expand: false, src: ['./package.json'], dest: './package/package.json' }
        ]
      }
    },
    compress : {
      main : {
        options: {
          mode: 'zip',
          archive: function() {
            var pkgJson = grunt.config.get('pkg');
            return pkgJson.name + '-' + pkgJson.version + '.zip';
          }
        },
        files : [
          { expand: true, src : ['**'], cwd : './package/' }
        ]
      }
    },
    bump: {
      options: {
        commit: false,
        commitMessage: 'v%VERSION%',
        commitFiles: ['package.json', 'bower.json'],
        createTag: true,
        files: ['package.json', 'bower.json'],
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        push: false,
        pushTo: 'origin',
        tagMessage: 'v%VERSION%',
        tagName: 'v%VERSION%',
        updateConfigs: []
      }
    },
    critical: {
      test: {
        options: {
          base: './public/',
          width: 2880,
          height: 2880,
          minify: true
        },
        src: 'views/critical.html',
        dest: 'views/critical.css'
      }
    }
  });

  grunt.registerTask('webpack', 'Runs webpack', function (which) {
    var done = this.async();
    var webpack = require('webpack');
    var config = require('./buildconfigs/' + which + '.config');

    webpack(config, function (err, stats) {
      if (stats.compilation.errors.length) {
        var messages = ['\n'];
        stats.compilation.errors.forEach(function(error) {
          if (messages.indexOf(error.message) === -1) {
            messages.push(error.message);
          }
        });
        grunt.fail.warn(messages.join('\n'));
      } else {
        done();
      }
    });
  });

  grunt.registerTask('default', [
    'env:grunt',
    'webpack:dev'
  ]);

  grunt.registerTask('test', [
    'env:grunt'
  ]);

  grunt.registerTask('build', [
    'webpack:production',
    'copy:all',
    'compress:main',
    'clean:package'
  ]);
};
