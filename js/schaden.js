/**
 * Created by luisaziegler on 10.01.17.
 */
$(function () {
    Highcharts.chart('schaden', {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
        },
        title: {
            text: ''

        },
        xAxis: {
            categories: ['0-15€', '15-50€', '50-250€', '250€-500€', '500-2500€', '2500€-5000€', '5000-25000€','25000-50000€','50000€+'],
            title: {
                text: null
            },
            labels: {
                overflow: 'justify',
                style: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Anzahl der Fälle',
                align: 'middle',
                style: {
                    color: '#fff'
                }
            },
            labels: {
                overflow: 'justify',
                style: {
                    color: '#fff'
                }
            }
        },
        tooltip: {
            valueSuffix: ' Fälle'
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: false
                },
                borderWidth: 0,
            }
        },
        legend: {
            layout: 'horizontal',
            verticalAlign: 'bottom',
            x: 30,
            y: 0,
            floating: false,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: false,

        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Jahr 2006',
            data: [802, 468, 3335, 2211, 8016,3489,4685,493,197],
            visible: false
        }, {
            name: 'Jahr 2007',
            data: [753,481,3099,2088,7951,3322,4556,531,196],
            visible: false
        }, {
            name: 'Jahr 2008',
            data: [997, 514, 3019, 1967, 7953,3097,4812,559,233],
            visible: false
        }, {
            name: 'Jahr 2009',
            data: [998, 517, 3006, 2016, 8786,3497,5260,694,255],
            visible: false
        }, {
            name: 'Jahr 2010',
            data: [941, 529, 3120, 2202, 9655,3933,5746,716,320],
            visible: false
        }, {
            name: 'Jahr 2011',
            data: [1238, 524, 3414, 2452, 10745,4476,6550,834,346],
            visible: false
        }, {
            name: 'Jahr 2012',
            data: [1202, 529, 3387, 2521, 11553,4978,7109,875,299],
            visible: false
        }, {
            name: 'Jahr 2013',
            data: [1375, 562, 3292, 2457, 11389,4855,7039,925,337],
            visible: false
        }, {
            name: 'Jahr 2014',
            data: [1353, 561, 3333, 2408, 10737,4319,6353,829,379]
        }, {
            name: 'Jahr 2015',
            data: [1642, 622, 3731, 2860, 12370,5071,7497,924,393]
        }]
    });
});