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
            resolve: {
                techData: ($rootScope, Tech) => {
                    $rootScope.stateIsLoading = true;
                    Tech.fetchTechData().then(() => $rootScope.stateIsLoading = false);
                }
            }
        })
        .state('learningPath', {
            url: '/learningPath',
            templateUrl: 'html/states/learningPath.html'
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