const fs = require( 'fs' );
const packageJson = require( '../package.json' );

packageJson.packages = fs.readdirSync( './packages' )
  .filter( ( node ) => node.indexOf( '.' ) === -1 && node.substr( 0, 1 ) !== '_' );

console.log( packageJson.packages );

fs.writeFileSync( './package.json', JSON.stringify( packageJson, null, 2) + "\n" );

const indexFile = packageJson.packages.map( ( packageName ) => `import './${ packageName }/index';` ).join( "\n" );
const indexDemoFile = packageJson.packages.map( ( packageName ) => `import './${ packageName }/index.demo';` ).join( "\n" );

fs.writeFileSync( './packages/index.ts', indexFile + "\n" );
fs.writeFileSync( './packages/index.demo.ts', indexDemoFile + "\n" );
