angular.module('stackWatch').directive('filters', () => {
    return {
        template: `
            <div>
                <button class="ui inverted blue button active"><i class="united states flag"></i> USA</button>
                <button class="ui inverted basic button disabled">Israel (coming soon...)</button>
            </div>
    
            <div class="ui divider"></div>
    
            <div>
                <button class="ui inverted blue button active">Indeed</button>
                <button class="ui inverted basic button disabled">More job sites coming soon...</button>
            </div>
    
            <div class="ui divider"></div>
    
            <div>
                <button class="ui inverted blue button active">PHP</button>
                <button class="ui inverted blue button">JavaScript</button>
                <button class="ui inverted blue button">HTML5</button>
                <button class="ui inverted blue button">CSS3</button>
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