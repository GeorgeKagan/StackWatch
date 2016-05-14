angular.module('stackWatch').directive('stacksChart', Tech => {
   return {
       template: `<highchart config="sCharts.chartConfig"></highchart>`,
       restrict: 'E',
       scope: {},
       bindToController: true,
       controllerAs: 'sCharts',
       controller: function() {
           this.chartConfig = {
               options: {
                   chart: {
                       type: 'column',
                       options3d: {
                           enabled: true,
                           alpha: 15,
                           beta: 15,
                           viewDistance: 25,
                           depth: 40
                       },
                       backgroundColor: null
                   },
                   tooltip: {
                       style: {
                           padding: 10,
                           fontWeight: 'bold'
                       }
                   }
               },
               //The below properties are watched separately for changes.
               series: Tech.getTechData(),
               title: {
                   text: ''
               },
               xAxis: {
                   categories: Tech.getList(),
                   title: {text: 'Technologies'}
               },
               yAxis: {
                   title: {text: 'Demand'}
               },
               func: chart => {

               }
           };
       }
   }
});

