angular.module('stackWatch').directive('filters', (Tech, Provider) => {
    return {
        template: `
            <div>
                <button class="ui inverted button" ng-repeat="country in ::filters.countries" ng-disabled="country.disabled">
                    <i class="{{::country.flag}} flag"></i> {{::country.name}}
                </button>
            </div>
    
            <div class="ui divider"></div>
    
            <div>
                <button class="ui inverted button" ng-repeat="provider in ::filters.providers">{{::provider}}</button>
                <button class="ui inverted basic button disabled">More job sites coming soon...</button>
            </div>
    
            <div class="ui divider"></div>
    
            <div>
                <button class="ui inverted button" ng-repeat="tech in ::filters.techs">{{::tech}}</button>
            </div>
        `,
        restrict: 'E',
        scope: {},
        bindToController: true,
        controllerAs: 'filters',
        controller: function() {
            this.countries = Provider.getCountryList();
            this.providers = Provider.getProviderList();
            this.techs = Tech.getTechList();
        }
    }
});