/**
 * Generate tsconfig.json and package.json
 */

const fs = require( 'fs' );
const packageJsonTemplate = require( './templates/package.json' );

const packageList = require('./packages-list.js').packageList();

console.log('Generating package.json and tsconfig.json for:');

for (let packageName of packageList) {

  console.log(packageName);

  fs.createReadStream('./toolbelt/templates/tsconfig.json').pipe(fs.createWriteStream(`./packages/${packageName}/tsconfig.json`));

  const originalPackageJson = require(`../packages/${packageName}/package.json`);

  const packageJson = Object.assign({}, packageJsonTemplate, {
    name: `@blaze-elements/${packageName}`,
    version: originalPackageJson.version || '1.0.0'
  });

  const packageJsonString = (JSON.stringify(packageJson, null, 2) + "\n").replace(/packageName/g, packageName);

  fs.writeFileSync( `./packages/${packageName}/package.json`, packageJsonString );

}

console.log('done');
