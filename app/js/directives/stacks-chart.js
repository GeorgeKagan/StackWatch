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
                           alpha: 10,
                           beta: 25,
                           depth: 70
                       },
                       backgroundColor: null
                   },
                   tooltip: {
                       style: {
                           padding: 10,
                           fontWeight: 'bold'
                       },
                       formatter: function() {
                           return `${Highcharts.numberFormat(this.y, 0)} job listings`;
                       }
                   }
               },
               //The below properties are watched separately for changes.
               series: Tech.getTechData(),
               title: {
                   text: ''
               },
               xAxis: {
                   labels: {enabled: false}
               },
               yAxis: {
                   title: {text: 'Job Listings'}
               },
               plotOptions: {
                   column: {
                       depth: 25
                   }
               },
               func: chart => {

               }
           };
       }
   }
});

