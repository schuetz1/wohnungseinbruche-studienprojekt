$(document).ready(function () {
    Highcharts.chart('alter', {

        chart: {
            type: 'column'
        },

        title: {
            text: 'Sortiert nach Männliche und Weibliche'
        },

        //16 Zahlen


        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Anzahl Tatverdächtige'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        xAxis: {
            categories: ['8-10', '10-12', '12-14', '14-16', '16-18', '18-21', '21-23', '23-25', '21-25', '25-30', '30-40', '40-50', '50-60', '60+'
            ]
        },
        series: [
            {
                name: 'Männlich',
                data: [4, 7, 39, 190, 315, 649, 416, 410, 826, 849, 1115, 512, 207, 65],
                stack: 'male'
            },
            {
                name: 'Weiblich',
                data: [2, 5, 34, 108, 95, 138, 62, 79, 141, 123, 187, 96, 59, 24],
                stack: 'male'
            },
            // {
            //     name: 'Nicht-Deutsche',
            //     data: [1, 4, 10, 50, 200, 300, 680, 400, 395, 817, 833, 1150, 520, 215, 74],
            //     stack: 'female'
            // },
        ]
    });
});