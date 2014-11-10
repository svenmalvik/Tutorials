var custApp = angular.module('app', []);
custApp.controller('Controller', function ($scope) {
    $scope.customer =
    {'name': 'Sven', 'address': 'Oslo'}
    ;
});