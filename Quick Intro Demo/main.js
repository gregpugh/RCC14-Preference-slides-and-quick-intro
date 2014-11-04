var myApp = angular.module('introApp', []);

//2[

//function FirstCtrl($scope) {
//    //2a
//    $scope.data = { message: "panel" }
//}

//2]

//3[

//myApp.factory('Data', function () {
//    return { message: "I'm data from a service" }
//});

//function FirstCtrl($scope, Data) {
//    $scope.data = Data;
//}

//function SecondCtrl($scope, Data) {
//    $scope.data = Data;

//    $scope.reversedMessage = function () {
//        return $scope.data.message.split("").reverse().join("");
//    }
//}

//function ThirdCtrl($scope, Data) {
//    $scope.data = Data;

//    $scope.reversedMessage = function (message) {
//        //remove the dependency on passing along scope
//        return message.split("").reverse().join("");
//    }
//}

//3]

//4[

//myApp.factory('Data', function () {
//    return { message: "I'm data from a service" }
//});

//myApp.filter('reverse', function () {
//    return function (text) {
//        return text.split("").reverse().join("");
//    }
//});

//function FirstCtrl($scope, Data) {
//    $scope.data = Data;
//}
//function FilterCtrl($scope, Data) {
//    $scope.data = Data;
//}

//4]

//5,6,7[

myApp.factory('Resources', function () {
    var Resources = {};

    //json data
    Resources = [
                    { id: 1, title: '60ish Minutes', author: 'Dan Wahlin', url: 'http:www.blahblah.com', type: 'video', summary: 'The summary goes here...'  },
                    { id: 2, title: 'Angular', author: 'Lukas Ruebbelke', url: 'https://egghead.io/series/angularjs-app-from-scratch-getting-started', type: 'blog', summary: 'The summary goes here...' },
                    { id: 3, title: 'Repository Pattern', author: 'Rob', url: 'http:www.blahblah.com', type: 'website', summary: 'The summary goes here...' },
                    { id: 4, title: 'HTML5', author: 'Dan', url: 'http:www.blahblah.com', type: 'blog', summary: 'The summary goes here...' },
                    { id: 5, title: 'HTML5 Video Control', author: 'Larry', url: 'http:www.blahblah.com', type: 'github', summary: 'The summary goes here...' },
                    { id: 6, title: 'ASP.NET WebApi', author: 'Rob', url: 'http:www.blahblah.com', type: 'github', summary: 'The summary goes here...' },
                    { id: 7, title: 'Node.js and Express', author: 'Steve', url: 'http:www.blahblah.com', type: 'website', summary: 'The summary goes here...' },               
                    { id: 8, title: 'EF', author: 'Scott', url: 'http:www.blahblah.com', type: 'video', summary: 'The summary goes here...' },
                    { id: 9, title: 'Ninject', author: 'Nancy', url: 'http:www.blahblah.com', type: 'website', summary: 'The summary goes here...' }
                ];

    return Resources;
});

function ResourcesCtrl($scope, Resources) {
    $scope.resources = Resources;
}


//5,6,7]
