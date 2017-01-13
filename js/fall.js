/**
 * Created by luisaziegler on 12.01.17.
 */
$(function() {
    Highcharts.chart('fallzahlen', {
        chart: {
            backgroundColor: null,
            zoomType: 'xy'
        },
        title: {
            text: ''
        },
        xAxis: [{
            categories: ['2006', '2007', '2008', '2009', '2010', '2011',
                '2012', '2013', '2014', '2015'
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}€',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Höhe der Schadenssumme',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Anzahl der Einbrüche',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            x: 480,
            verticalAlign: 'bottom',
            y: 0,
            floating: false,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || ''
        },
        series: [{
            name: 'Fallzahlen',
            type: 'column',
            yAxis: 1,
            data: [23696, 22977, 23151, 25029, 27162, 30579, 32453, 32231, 30272, 35128],
            tooltip: {
                valueSuffix: ' Fälle'
            }

        }, {
            name: 'Schaden',
            type: 'spline',
            data: [101089, 103304, 109278, 123239, 138482, 153712, 160171, 166270, 153600, 180813],
            tooltip: {
                valueSuffix: '€'
            }
        }]
    });
});