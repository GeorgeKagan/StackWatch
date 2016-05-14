angular.module('stackWatch').directive('stacksChart', Chart => {
   return {
       template: `<highchart config="sCharts.chartConfig"></highchart>`,
       restrict: 'E',
       scope: {},
       bindToController: true,
       controllerAs: 'sCharts',
       controller: function($scope) {
           $scope.$on('updateChart', () => this.chartConfig = Chart.getConfig());
       }
   }
});