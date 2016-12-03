import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerComponent from './footer.component.js';

let footerModule = angular.module('footer', [
  uiRouter
])

.component('footer', footerComponent)

.name;

export default footerModule;
