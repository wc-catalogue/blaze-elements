const { resolve } = require( 'path' );
const capitalize = require( 'lodash.capitalize' );

const webpack = require( 'webpack' );

// plugins
/**
 * This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles.
 * This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
 * https://github.com/ampedandwired/html-webpack-plugin
 */
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// webpack config helpers
const { getIfUtils, removeEmpty } = require( 'webpack-config-utils' );


module.exports = ( env ) => {
  const { ifProd, ifNotProd, ifTest, ifNotTest } = getIfUtils( env );

  return {
    // The base directory, an absolute path, for resolving entry points and loaders from configuration.
    context: resolve( __dirname ),
    // The point or points to enter the application.
    entry: ifTest(
      {
        'test': (
          env.element ?
            `./packages/${env.element}/index.test.ts` :
            './packages/index.test.ts'
        ),
        'test-helpers': './test-helpers.ts'
      },
      (env.element ? {
        'main': `./packages/${ env.element }/index.ts`,
        'main.demo': `./packages/${ env.element }/index.demo.tsx`,
        'vendors': './vendors.ts',
        'polyfills': './polyfills.ts',
        'styles': './styles.ts'
      } : {
        'main': './packages/index.ts',
        'main.demo': './packages/index.demo.ts',
        'vendors': './vendors.ts',
        'polyfills': './polyfills.ts',
        'styles': './styles.ts'
      })
    ),
    output: {
      filename: '[name].js',
      path: env.element ? resolve( __dirname, 'packages', env.element, 'dist' ) : resolve( __dirname, 'dist' ),
      // Include comments with information about the modules.
      pathinfo: ifNotProd()
    },
    resolve: {
      extensions: [ '.js', '.ts', '.tsx' ]
    },


    /**
     * Developer tool to enhance debugging
     *
     * See: https://webpack.js.org/configuration/devtool/#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */
    devtool: ifProd( 'source-map', 'cheap-module-source-map' ),

    module: {
      rules: [

        {
          test: /\.tsx?$/,
          enforce: "pre",
          loader: 'tslint-loader'
        },

        // Typescript
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [ 'awesome-typescript-loader' ]
        },
        // CSS
        {
          // Do not transform vendor's CSS with CSS-modules
          // The point is that they remain in global scope.
          test: /\.css$/,
          include: /node_modules/,
          // @TODO replace with "use", we need to use legacy "loader" instead of "use" to make ExtractTextPlugin@2-beta.4 work
          loader:
            [
              'style-loader',
              {
                loader: 'css-loader',
                query: { sourceMap: true }
              }
            ]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [ 'to-string-loader', 'css-loader', 'sass-loader' ]
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.md$/,
          use: [
            'html-loader',
            'markdown-loader'
          ]
        },
        {
          test: /\.svg$/,
          use: [ 'file-loader' ]
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        }
      ]
    },

    /**
     * Since Loaders only execute transforms on a per-file basis,
     * Plugins are most commonly used (but not limited to) performing actions and custom functionality on "compilations"
     * or "chunks" of your bundled modules (and so much more).
     * In order to use a plugin, you just need to require() it and add it to the plugins array.
     * Since most plugins are customizable via options, you need to create an instance of it by calling it with new.
     */
    plugins: removeEmpty([


      new webpack.LoaderOptionsPlugin( {
        // The UglifyJsPlugin will no longer put loaders into minimize mode, and the debug option has been deprecated.
        // These options are simply moved into a new plugin, LoaderOptionsPlugin, for separation of concerns reasons.
        // Default webpack build options saves a couple of kBs
        minimize: ifProd( true ),
        debug: ifProd( false ),
        quiet: ifProd( true )

      }),

      // Uglify bundles
      ifProd( new webpack.optimize.UglifyJsPlugin( {
        compress: {
          screw_ie8: true,
          warnings: false
        },
        output: { comments: false }
      } ) ),

      ifProd( new FaviconsWebpackPlugin( './assets/blaze-elements-logo.svg' ) ),

      /**
       * Use the HtmlWebpackPlugin plugin to make index.html a template so css and js can dynamically be added to the page.
       * This will also take care of moving the index.html file to the build directory using the index.html in src as a template.
       * https://github.com/ampedandwired/html-webpack-plugin
       */
      ifNotTest(new HtmlWebpackPlugin({
          template: resolve( 'index.html' ),
          packages: env.element ? env.element : require('./package.json').packages,
          excludeChunks: [ 'main' ],
          inject: 'head'
      }))

    ]),
    performance: {
      hints: ifTest() ? false : 'warning'
    }
  }
};
