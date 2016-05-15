angular.module('stackWatch').directive('topMenu', () => {
    return {
        template: `
            <div class="ui large secondary inverted pointing menu">
                <a ui-sref="home">
                    <div class="logo"></div>    
                </a>
                <a class="item" ui-sref="home" ui-sref-active="active">Home</a>
                <a class="item" ui-sref="learningPath" ui-sref-active="active">Learning Path</a>
                <!--<a class="item" ui-sref="crawler" ui-sref-active="active">Crawler</a>-->
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