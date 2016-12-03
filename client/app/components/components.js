import angular from 'angular';
import Home from './home/home';
import About from './about/about';

import DogProfile from './dog-profile/dog-profile';
import Users from './users/users';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Users,
  DogProfile
])

.name;

export default componentModule;
