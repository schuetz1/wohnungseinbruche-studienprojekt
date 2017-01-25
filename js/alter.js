$(document).ready(function () {
    Highcharts.chart('alter', {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
        },

        title: {
            text: 'Sortiert nach Deutsche und Nicht-Deutsche Täter',
            style: {
                color: '#fff'
            }
        },

        //16 Zahlen

        xAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: '#000'
                }
            },
            categories: [8, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
            tickInterval: null,

            title: {
                text: 'Alter',
                style: {
                    color: '#000'
                }
            }
        },],

        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: '#000'
                }
            },
            tickInterval: null,

            title: {
                text: 'Anzahl der Einbrüche',
                style: {
                    color: '#000'
                }
            }
        },],

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;

            },

        },

        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
            }
        },



        series: [
            {
                name: 'Deutsche',
                data: [3, 5, 75, 116, 120, 120, 73, 70, 60, 53, 25, 23, 23, 18, 10, 8, 6, 2, 1],
                stack: 'deutsch',
                color: '#113841'
            },
            {
                name: 'Nicht-Deutsche',
                data: [4, 18, 61, 90, 130, 129, 102, 89, 50, 57, 30, 21, 10, 9, 3, 1, 4, 2, 1],
                stack: 'nichtdeutsch',
                color: '#4aa6c0'
            }]
    });
});