# angularstartup
create angular project from scratch
1. .npmrc

This file contains the path to the local server which contains npm dependencies, instead downloading npm dependencies from npm server. .npmrc file is as below. Put the file in user profile folder as well as project folder.

proxy = http://xx.xx.xx.xx:xxxx --proxy sever

https-proxy=http://xx.xx.xx.xx:xxxx --proxy sever

registry=https://registry.npmjs.org/ -- registry from where node modules will be pulled



2. Package.json

To create this file give npm init –y or npm init. Npm init-y gives you file with default settings or you can custom create package.json with npm init as below.

3. Installing lite-server

To install lite-server we can use npm install lite-server –save

4. Installing Typescript

To install typescript npm install typescript –save

5. Creating typescript config file

To create tsconfig file add compileroptions into that file as below:

{

"compilerOptions": {

"target": "es5",

"module": "commonjs",

"sourceMap": true,

"emitDecoratorMetadata":true,

"experimentalDecorators":true,

"lib" : ["es2015", "es2015.iterable", "dom"]

}

}

6. Adding angular dependency:

To include dependency into your projects, include the following packages as below

npm install @angular/common @angular/compiler @angular/core @angular/forms @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router @angular/upgrade core-js reflect-metadata

rxjs systemjs zone.js


7. Creating config file:
Create a new file named systemjs.config.js and Copy the following, paste it in systemjs.config.js file.


(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    // ng2-bootstrap
    'moment': 'node_modules/moment',
    'ng2-bootstrap':              'node_modules/ng2-bootstrap',
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    // ng2-bootstrap
    'ng2-bootstrap':              { format: 'cjs', main: 'bundles/ng2-bootstrap.umd.js', defaultExtension: 'js' },
    'moment':                     { main: 'moment.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);

9. Creating components:

Create an app folder and create appcomponent class and mention it as @component to denote the class as component as below.

import { Component } from '@angular/core';

@Component({

selector:"myapp",

template:"<h1>'hi'</h1>"})

export class Appcomponent

{

title="this is from appcomponent";

}

10. Creating module:

Create an app folder and create appmodule class and mention it as @NgModule to denote the class as module as below.

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { Appcomponent } from './app.component';

@NgModule({

imports: [ BrowserModule ],

declarations: [ Appcomponent ],

bootstrap: [ Appcomponent ]

})

export class AppModule { }

11. Creating main.ts file

This is the entry point which will bootstrap the component and module. Sample main.ts is as below

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);


