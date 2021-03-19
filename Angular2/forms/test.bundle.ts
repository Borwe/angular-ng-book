/*
 * When testing with webpack and ES6, we have to do some extra
 * things get testing to work right. Because we are gonna write test
 * in ES6 to, we have to compile those as well. That's handled in
 * karma.conf.js with the karma-webpack plugin. This is the entry
 * file for webpack test. Just like webpack will create a bundle.js
 * file for our client, when we run test, it well compile and bundle them
 * all here! Crazy huh. So we need to do some setup
 * Thanks to @AngularClass for figuring this stuff out
*/
import 'core-js/es6';
import 'core-js/es7/reflect';
// import 'reflect-metadata';
// import 'phantomjs-polyfill';
// import 'ts-helpers';

import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/proxy';
import 'zone.js/dist/jasmine-patch';

// Error.stackTraceLimit = Infinity;

var appContext = (<{ context?: Function }>require).context('./app', true, /\.spec\.ts/);
appContext.keys().forEach(appContext);

// import '@angular/core/testing';
// import '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js';

// TestBed initialization
import { TestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

// var testing = require('@angular/core/testing');
// var browser = require('@angular/platform-browser-dynamic/testing');

// testing.TestBed.initTestEnvironment(
//     browser.BrowserDynamicTestingModule,
//     browser.platformBrowserDynamicTesting()
// );
