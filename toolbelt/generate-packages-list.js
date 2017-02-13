const fs = require( 'fs' );
const packageJson = require( '../package.json' );
const path = require( 'path' );

const packageList = require('./packages-list.js').packageList();

console.log(packageList);

const blazeElementPackagePath = path.resolve(__dirname, '..', 'packages', 'blaze-elements');

generatePackageList(packageJson, packageList);

generateIndex(
  path.resolve(blazeElementPackagePath, 'index.ts'),
  packageList,
  (packageName) => `import '@blaze-elements/${packageName}/index';`
);

generateIndex(
  path.resolve(blazeElementPackagePath, 'index.demo.tsx'),
  packageList,
  (packageName) => `import '@blaze-elements/${packageName}/index.demo';`
);

generateIndex(
  path.resolve(blazeElementPackagePath, 'index.test.ts'),
  packageList,
  (packageName) => `import '@blaze-elements/${packageName}/index.test';`
);

generateDependencies();

function generatePackageList( packageJson, packageList ) {
  packageJson.packages = packageList;

  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2) + "\n");
}

function generateIndex( filename, packageList, callback ) {
  fs.writeFileSync(
     filename,
    `${packageList.map(callback).join(`\n`)}\n`
  );
}

function generateDependencies() {

  const blazeElementPackageJson = require(path.resolve(blazeElementPackagePath, 'package.json'));
  blazeElementPackageJson.dependencies = packageList.reduce(
    (accumulator, packageName) => {

      const packageJson = require(
        path.resolve(__dirname, '..', 'packages', packageName, 'package.json')
      );

      if (packageJson.name === 'blaze-elements') {
        return accumulator;
      }

      accumulator[`@blaze-elements/${packageName}`] = packageJson.version;

      return accumulator;
    }, {}
  );

  fs.writeFileSync( path.resolve(blazeElementPackagePath, 'package.json'), JSON.stringify(blazeElementPackageJson, null, 2) + "\n" );
}

