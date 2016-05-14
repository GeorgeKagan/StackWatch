angular.module('stackWatch').directive('stacksChart', () => {
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
               series: [{
                   name: 'PHP',
                   data: [5],
                   color: '#ddb641'
               }, {
                   name: 'JavaScript',
                   data: [3],
                   color: '#5a3e30'
               }, {
                   name: 'HTML5',
                   data: [2],
                   color: '#6aae87'
               }, {
                   name: 'CSS3',
                   data: [3],
                   color: '#da5e18'
               }],
               title: {
                   text: ''
               },
               xAxis: {
                   categories: ['PHP', 'JavaScript', 'HTML5', 'CSS3'],
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

