angular.module('stackWatch').directive('topMenu', () => {
    return {
        template: `
            <div class="ui large secondary inverted pointing menu">
                <a class="toc item">
                    <i class="sidebar icon"></i>
                </a>
                <a class="active item">Home</a>
            </div>
        `,
        replace: true,
        restrict: 'E',
        scope: {},
        bindToController: true,
        controllerAs: 'topMenu',
        controller: function() {

        }
    }
});