angular.module('stackWatch').directive('topMenuItems', ($timeout, $state, NativeTransition) => {
    return {
        template: `
            <a class="item" 
                ng-class="{'active': topMenuItems.currState===mItem.path}" 
                ng-click="topMenuItems.goTo(mItem.path)" 
                ng-repeat="mItem in ::topMenuItems.items">{{::mItem.label}}</a>
        `,
        restrict: 'E',
        scope: {},
        bindToController: true,
        controllerAs: 'topMenuItems',
        controller: function() {
            this.items = [
                {label: 'Home', path: 'home'},
                {label: 'Learning Path', path: 'learningPath'}
            ];
            this.currState = $state.current.name;

            this.goTo = path => {
                angular.element('.ui.sidebar').sidebar('hide');
                $timeout(() => this.states[path](), isCordova() ? 500 : 0);
            };

            this.states = {
                home: () => NativeTransition.go('home'),
                learningPath: () => NativeTransition.go('learningPath')
            };
        }
    }
});