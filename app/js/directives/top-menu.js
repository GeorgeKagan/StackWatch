angular.module('stackWatch').directive('topMenu', () => {
    return {
        template: `
            <div class="ui large secondary inverted pointing menu">
                <div class="logo"></div>    
                <a class="toc item">
                    <i class="sidebar icon large"></i>
                </a>
                <top-menu-items include-replace></top-menu-items>
            </div>
        `,
        replace: true,
        restrict: 'E',
        scope: {},
        bindToController: true,
        controllerAs: 'topMenu',
        controller: function() {

        },
        link: () => {
            angular.element('.ui.sidebar')
                .sidebar({
                    scrollLock: true,
                    returnScroll: false
                })
                .sidebar('attach events', '.toc.item')
            ;
        }
    }
});