angular.module('stackWatch').directive('filters', ($rootScope, $timeout, Tech, Provider, FilterState) => {
    return {
        template: `
            <div>
                <button class="ui inverted button" 
                        ng-repeat="country in ::filters.countries" ng-click="filters.selectCountry(country.name)" 
                        ng-class="{'active': filters.filterState.country===country.name}" ng-disabled="country.disabled">
                    <i class="{{::country.flag}} flag"></i> {{::country.name}}
                </button> 
            </div>
    
            <div class="nga-default nga-squash-vertical" ng-if="!filters.filterState.country">
                <div class="ui divider"></div>
                Select a country to continue...
            </div>
            <div class="nga-default nga-stagger nga-rotate-down" ng-if="filters.filterState.country">
                <div class="ui divider"></div>
                <button class="ui inverted button"
                        ng-repeat="provider in ::filters.providers" ng-click="filters.selectProvider(provider)"
                        ng-class="{'active': filters.filterState.provider===provider}">
                    {{::provider}}
                </button>
                <button class="ui inverted basic button disabled">More coming soon...</button>
            </div>
    
            <div class="nga-default nga-squash-vertical" ng-if="filters.filterState.country && !filters.filterState.provider">
                <div class="ui divider"></div>
                Select a jobs site to continue...
            </div>
            <div class="nga-default nga-stagger nga-rotate-down" ng-if="filters.filterState.provider">
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
            this.countries   = Provider.getCountryList();
            this.providers   = Provider.getProviderList();
            this.techs       = Tech.getTechList();
            this.filterState = FilterState.getState();

            this.selectCountry = country => {
                FilterState.setCountry(country);
                $timeout(() => $rootScope.$broadcast('updateChart'));
            };
            this.selectProvider = provider => {
                FilterState.setProvider(provider);
                $timeout(() => $rootScope.$broadcast('updateChart'));
            };
            this.selectTech = tech => {
                FilterState.setTech(tech);
                $timeout(() => $rootScope.$broadcast('updateChart'));
            };

            this.canShowChart = () => FilterState.canShowChart();
        }
    }
});