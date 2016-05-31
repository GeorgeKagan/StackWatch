angular.module('stackWatch', [
    'ngAnimate',
    'anim-in-out',
    'ui.router',
    'highcharts-ng',
    'firebase'
]).config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'html/states/home.html',
            controller: 'HomeCtrl as home',
            resolve: {techData: Tech => Tech.getTechDataForState()}
        })
        .state('learningPath', {
            url: '/learningPath',
            templateUrl: 'html/states/learningPath.html',
            resolve: {techData: Tech => Tech.getTechDataForState()}
        })
        .state('crawler', {
            url: '/crawler',
            templateUrl: 'html/states/crawler.html',
            controller: 'CrawlerCtrl as crawler'
        })
    ;
}).run($rootScope => {
    $rootScope.isCordova = isCordova();
});