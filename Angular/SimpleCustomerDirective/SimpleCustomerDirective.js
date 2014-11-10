var app = angular.module('docsRestrictDirective', []);
app.controller('Controller', function ($scope) {
    $scope.customer = {'name': 'Sven', 'address': 'Oslo'}
    ;
})
    .directive('customer', function () {
        return {
            restrict: 'E',
            templateUrl: 'customer.html'
        };
    });