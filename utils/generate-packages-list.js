const fs = require( 'fs' );
const packageJson = require( '../package.json' );

packageJson.packages = fs.readdirSync( './packages' )
  .filter( ( node ) => node.indexOf( '.' ) === -1  );

console.log( packageJson.packages );

fs.writeFileSync( './package.json', JSON.stringify( packageJson, null, 2) + "\n" );
