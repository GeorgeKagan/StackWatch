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
                   name: 'John',
                   data: [5, 3, 4, 7, 2],
                   stack: 'male'
               }, {
                   name: 'Joe',
                   data: [3, 4, 4, 2, 5],
                   stack: 'male'
               }, {
                   name: 'Jane',
                   data: [2, 5, 6, 2, 1],
                   stack: 'female'
               }, {
                   name: 'Janet',
                   data: [3, 0, 4, 4, 3],
                   stack: 'female'
               }],
               title: {
                   text: ''
               },
               xAxis: {
                   // currentMin: 0,
                   // currentMax: 20,
                   categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
                   title: {text: 'Technologies'}
               },
               yAxis: {
                   title: {text: 'Demand'}
               },
               tooltip: {
                   headerFormat: '<b>{point.key}</b><br>',
                   pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
               },
               plotOptions: {
                   column: {
                       stacking: 'normal',
                       depth: 40
                   }
               },
               func: chart => {

               }
           };
       }
   }
});

