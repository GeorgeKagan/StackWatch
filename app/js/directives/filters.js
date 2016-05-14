angular.module('stackWatch').directive('filters', () => {
    return {
        template: `
            <div>
                <button class="ui inverted button active"><i class="united states flag"></i> USA</button>
                <button class="ui inverted basic button disabled"><i class="israel flag"></i> Israel (coming soon...)</button>
            </div>
    
            <div class="ui divider"></div>
    
            <div>
                <button class="ui inverted button active">Indeed</button>
                <button class="ui inverted basic button disabled">More job sites coming soon...</button>
            </div>
    
            <div class="ui divider"></div>
    
            <div>
                <button class="ui inverted button active">PHP</button>
                <button class="ui inverted button">JavaScript</button>
                <button class="ui inverted button">HTML5</button>
                <button class="ui inverted button">CSS3</button>
            </div>
        `,
        restrict: 'E',
        scope: {},
        bindToController: true,
        controllerAs: 'filters',
        controller: function() {

        }
    }
});