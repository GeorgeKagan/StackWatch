angular.module('stackWatch', [
    'ngAnimate',
    'anim-in-out',
    'ui.router',
    'highcharts-ng'
]).config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'html/states/home.html',
            controller: 'HomeCtrl as home'
        })
        .state('learningPath', {
            url: '/learningPath',
            templateUrl: 'html/states/learningPath.html'
        })
    ;
});