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
                plotOptions: {
                    column: {
                        depth: 35,

                    }
                },
                tooltip: {
                    useHTML: true,
                    formatter: function() {
                        return `<div style="text-align:center">${this.key} <br> <strong>${Highcharts.numberFormat(this.y, 0, '.', ',')}</strong> job listings</div>`;
                    }
                },
                lang: {noData: "No data collected yet"}
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
                    y: 35,
                    useHTML: true,
                    formatter: function () {
                        return `<img width="35" height="35" src="${Tech.getLogo(this.value)}">`;
                    }
                }
            },
            yAxis: {
                title: {
                    text: '# of job listings',
                    rotation: -93
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