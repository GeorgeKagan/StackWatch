angular.module('stackWatch', [
    'ngAnimate',
    'ui.router',
    'highcharts-ng'
]).config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'html/states/home.html'
        })
    ;
});