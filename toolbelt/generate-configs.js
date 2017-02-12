/**
 * Generate tsconfig.json and package.json
 */

const fs = require( 'fs' );
const path = require( 'path' );

const packageList = require('./packages-list.js').packageList();

console.log('Generating package.json and tsconfig.json for:');

const packagesRootDir = path.resolve(__dirname, '..', 'packages');
const templatesRootDir = path.resolve(__dirname, 'templates');

const packageJsonTemplate = require( path.resolve(templatesRootDir, 'package.json') );
const tsconfigJsonTemplate = require( path.resolve(templatesRootDir, 'tsconfig.json') );

for (let packageName of packageList) {

  console.log(packageName);

  const packageRootDir = path.resolve(packagesRootDir, packageName);

  // Copy tsconfig.json template to each package folder
  fs.writeFileSync(path.resolve(packageRootDir, 'tsconfig.json'), JSON.stringify(tsconfigJsonTemplate, null, 2) + "\n")

  // Generate package.json file base on package package.json file and template
  const packagePackageJsonPath = path.resolve(packageRootDir, 'package.json');

  const originalPackageJson = (
    fs.existsSync( packagePackageJsonPath ) ? require( packagePackageJsonPath ) : {}
  );

  const packageJson = Object.assign({}, packageJsonTemplate, {
    name: originalPackageJson.name || `@blaze-elements/${packageName}`,
    version: originalPackageJson.version || '1.0.0',
    dependencies: originalPackageJson.dependencies || undefined
  });

  const packageJsonString = (JSON.stringify(packageJson, null, 2) + "\n").replace(/packageName/g, packageName);

  fs.writeFileSync( path.resolve(packageRootDir, 'package.json'), packageJsonString );
}

console.log('done');
