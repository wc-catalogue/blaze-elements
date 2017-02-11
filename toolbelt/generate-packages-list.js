const fs = require( 'fs' );
const packageJson = require( '../package.json' );

const packageList = require('./packages-list.js').packageList();

console.log(packageList);

packageJson.packages = packageList;

fs.writeFileSync( './package.json', JSON.stringify( packageJson, null, 2) + "\n" );

const indexFile = packageJson.packages.map( ( packageName ) => `import './${ packageName }/index';` ).join( "\n" );
const indexDemoFile = packageJson.packages.map( ( packageName ) => `import './${ packageName }/index.demo';` ).join( "\n" );
const indexTestFile = packageJson.packages.map( ( packageName ) => `import './${ packageName }/index.test';` ).join( "\n" );

fs.writeFileSync( './packages/index.ts', indexFile + "\n" );
fs.writeFileSync( './packages/index.demo.tsx', indexDemoFile + "\n" );
fs.writeFileSync( './packages/index.test.ts', indexTestFile + "\n" );
