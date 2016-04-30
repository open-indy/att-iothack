module.exports = function( grunt ) {
  require( 'load-grunt-tasks' )( grunt );
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    env: {
      grunt: {
        NODE_ENV: 'grunt'
      }
    },
    eslint: {
      target: ['src/**/*.js'],
      options: {
        configFile: 'buildConfig/eslint.json'
      }
    },
    less: {
      production: {
        options: {
          compress: true,
          optimization: 2
        },
        files: {
          './public/css/style.css': [
            'styles/reactjstools.less'
          ]
        }
      }
    },
    watch: {
      js: {
        files: 'src/**/*.js',
        tasks: 'webpack:production'
      },
      less: {
        files: '**/*.less',
        tasks: 'less:production'
      }
    },
    clean: {
      package: {
        src: [ './package' ]
      }
    },
    copy: {
      all: {
        files: [
          {
            expand: true,
            cwd: './public/',
            src: [ '**/*' ],
            dest: './package/public/'
          },
          {
            expand: true,
            cwd: './server/',
            src: [ '**/*' ],
            dest: './package/server/'
          },
          {
            expand: true,
            cwd: './config/',
            src: [ '**/*' ],
            dest: './package/config/'
          },
          {
            expand: true,
            cwd: './views/',
            src: [ '**/*' ],
            dest: './package/views/'
          },
          {
            expand: false,
            src: './app.js',
            dest: './package/app.js'
          },
          {
            expand: false,
            src: './package.json',
            dest: './package/package.json'
          }
        ]
      }
    },
    compress: {
      main: {
        options: {
          mode: 'zip',
          archive: function() {
            var pkgJson = grunt.config.get( 'pkg' );
            return pkgJson.name + '-' + pkgJson.version + '.zip';
          }
        },
        files: [
          {
            expand: true,
            cwd: './package/',
            src: [ '**' ]
          }
        ]
      }
    },
    bump: {
      options: {
        files: [ 'package.json', 'bower.json' ],
        commit: false,
        commitMessage: '%VERSION%',
        commitFiles: [ 'package.json', 'bower.json' ],
        updateConfigs: [],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VErSION%'
      }
    },
    critical: {
      test: {
        options: {
          base: './public/',
          css: [
            'bower_components/boostrap/dist/css/boostrap.min.css'
          ],
          width: 2880,
          height: 2880,
          minify: true
        },
        src: 'views/critical.html',
        dest: 'views/critical.css'
      }
    }
  });

  grunt.registerTask( 'webpack', 'Runs webpack', function( which ) {
    var done = this.async();
    var webpack = require( 'webpack' );
    var webpackConfig = require( './buildConfig/webpack' );

    webpack( webpackConfig, function( err, stats ) {
      var messages = ['\n'];

      if( stats.compilation.errors.length ) {
        stats.compilation.errors.forEach( function( error ) {
          if( messages.indexOf( error.message ) === -1 ) {
            messages.push( error.message );
          }
        });

        grunt.fail.warn( messages.join( '\n' ) );
      } else {
        done();
      }
    });
  });

  grunt.registerTask( 'default', [
    'env:grunt',
    'eslint:target',
    'less:production',
    'webpack:build'
  ]);

  grunt.registerTask( 'build', [ 'default' ] );
};
