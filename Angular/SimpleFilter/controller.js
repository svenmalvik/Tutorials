'use strict';

var phonecatApp = angular.module('app', []);

phonecatApp.controller('Controller', function($scope) {
    $scope.payments = [
        {'desc': 'Amazon Kindle: Habits',
            'amount': 'USD 22.90'},
        {'desc': 'Amazon Kindle: Scala in Action',
            'amount': 'USD 30.00'},
        {'desc': 'Amazon Kindle: Java 8',
            'amount': 'USD 19.90'},
        {'desc': 'Vinmonopol',
            'amount': 'USD 109.00'},
        {'desc': 'Apple Store: iPhone 5s',
            'amount': 'USD 4390,00'},
        {'desc': 'Living: Stoler',
            'amount': 'USD 1300.00'},
        {'desc': 'Expert: Samsung 55" TV',
            'amount': 'USD 9990.00'}
    ];
});
