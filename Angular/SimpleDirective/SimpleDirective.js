var app = angular.module('docsRestrictDirective', []);
app.directive('statictext', function () {
    return {
        restrict: 'E',
        templateUrl: 'staticText.html'
    };
});