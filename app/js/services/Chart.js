angular.module('stackWatch').factory('Chart', Tech => {
    let chart = {};

    chart.getConfig = () => {
        return {
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
                type: 'category',
                labels: {
                    x: 0,
                    y: 25,
                    useHTML: true,
                    formatter: function () {
                        return `<img width="50" height="50" src="${Tech.getLogo(this.value)}">`;
                    }
                }
            },
            yAxis: {
                title: {text: 'Job Listings'}
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            credits: {
                enabled: false
            },
            func: chart => {

            }
        };
    };

    return chart;
});