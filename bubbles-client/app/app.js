angular.module('myApp', ['model', 'lodash'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/homeMenu.html'});
  $routeProvider.when('/tools', {templateUrl: 'partials/toolsMenu.html'});
  $routeProvider.otherwise({redirectTo: '/homeMenu'});
}]);

