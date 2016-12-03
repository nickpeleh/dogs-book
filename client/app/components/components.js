import angular from 'angular';
import Home from './home/home';
import About from './about/about';

import DogProfile from './dog-profile/dog-profile';

let componentModule = angular.module('app.components', [
  Home,
  About,
  DogProfile
])

.name;

export default componentModule;
