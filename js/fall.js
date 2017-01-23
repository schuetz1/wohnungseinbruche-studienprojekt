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
            crosshair: true,
            labels: {
                overflow: 'justify',
                style: {
                    color: '#fff'
                }
            }
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: '#fff'
                }
            },
            tickInterval:null,

            title: {
                text: 'Anzahl der Einbrüche',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Höhe des Schadens',
                style: {
                    color:'#666666'
                }
            },

            labels: {
                format: '{value}€',
                style: {
                    color:'#666666'
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
            name: 'Schaden',
            dataLabels:{
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y}€',
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }

            },
            type: 'column',
            borderWidth: 0,
            yAxis: 1,
            data: [101089, 103304, 109278, 123239, 138482, 153712, 160171, 166270, 153600, 180813],
            tooltip: {
                valueSuffix: ' €'
            }

        }, {
            name: 'Fallzahlen',
            type: 'line',
            data:[23696, 22977, 23151, 25029, 27162, 30579, 32453, 32231, 30272, 35128],

            tooltip: {
                valueSuffix: 'Fälle'
            }
        }
        ]
    });
});