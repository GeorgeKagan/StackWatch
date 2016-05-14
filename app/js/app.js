angular.module('stackWatch', [
    'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: "",
            templateUrl: "html/states/home.html"
        })
    ;
});