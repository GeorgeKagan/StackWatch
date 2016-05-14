angular.module('stackWatch').directive('topMenu', () => {
    return {
        template: `
            <div class="ui large secondary inverted pointing menu">
                <a ui-sref="home">
                    <div class="logo"></div>    
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