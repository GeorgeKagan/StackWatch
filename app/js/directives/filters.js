angular.module('stackWatch').directive('filters', (Tech, Provider) => {
    return {
        template: `
            <div>
                <button class="ui inverted button" 
                        ng-repeat="country in ::filters.countries" ng-click="filters.selectCountry(country.name)" 
                        ng-class="{'active': filters.filterState.country===country.name}" ng-disabled="country.disabled">
                    <i class="{{::country.flag}} flag"></i> {{::country.name}}
                </button> 
            </div>
    
            <div ng-if="filters.filterState.country">
                <div class="ui divider"></div>
                <button class="ui inverted button"
                        ng-repeat="provider in ::filters.providers" ng-click="filters.selectProvider(provider)"
                        ng-class="{'active': filters.filterState.provider===provider}">
                    {{::provider}}
                </button>
                <button class="ui inverted basic button disabled">More job sites coming soon...</button>
            </div>
    
            <div ng-if="filters.filterState.provider">
                <div class="ui divider"></div>
                <button class="ui inverted button" 
                        ng-repeat="tech in ::filters.techs" ng-click="filters.selectTech(tech)"
                        ng-class="{'active': filters.filterState.tech===tech, 'blue': $index===0}">
                    {{::tech}}
                </button>
            </div>
        `,
        restrict: 'E',
        scope: {
            canShowChart: '='
        },
        bindToController: true,
        controllerAs: 'filters',
        controller: function() {
            this.countries = Provider.getCountryList();
            this.providers = Provider.getProviderList();
            this.techs = Tech.getTechList();
            this.filterState = {};

            this.selectCountry = country => {
                this.filterState.country = country;
            };

            this.selectProvider = provider => {
                this.filterState.provider = provider;
            };

            this.selectTech = tech => {
                this.filterState.tech = tech;
            };

            this.getFilterState = () => this.filterState;

            this.canShowChart = () => {
                return Object.keys(this.filterState).length === 3;
            };
        }
    }
});