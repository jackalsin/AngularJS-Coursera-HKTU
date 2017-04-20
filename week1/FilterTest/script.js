'use strict';

angular.module('myApp', [])
    .controller('myController', ['$scope', function($scope, menuFactory){
        $scope.ngBindTest = "";
        $scope.people = [{
            name: "John",
            emptyArray: [],
            fullArray: ['Hello', "Good", "Bye"]            
        }, {
            name: "Mark",
            emptyArray: [],
            fullArray: ['Hello', "Good", "Bye"]            
        }, {
            name: "Sauda",
            emptyArray: [],
            fullArray: ['Hello', "Good", "Bye"]
        }];
    }]);