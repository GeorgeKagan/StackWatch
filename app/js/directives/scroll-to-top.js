angular.module('stackWatch').directive('scrollToTop', ($window, $timeout, Dom) => {
    return {
        template: `<a class="sw-scroll-to-top ui blue nga-default nga-stagger nga-rotate-down" ng-show="stt.isShow" ng-click="stt.scrollToFilters()">
                       <i class="arrow circle up icon"></i> Scroll to top
                   </a>`,
        replace: true,
        restrict: 'E',
        scope: {},
        bindToController: true,
        controllerAs: 'stt',
        controller: function($scope) {
            this.isShow = false;

            this.scrollToFilters = () => {
                Dom.scrollToElem('filters', 500, 20);
                this.isShow = false;
            };

            $scope.$on('showScrollToTop', () => $timeout(() => this.isShow = true, 200));

            angular.element($window).bind('scroll', () => {
                this.isShow = false;
                $scope.$apply();
            });
        }
    }
});