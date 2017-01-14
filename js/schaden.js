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
            categories:['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
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
            borderWidth: 0,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || ''),
            shadow: false,

        },
        credits: {
            enabled: false
        },
        series: [{
            name: '0-15€',
            data:[802,753,997,998,941,1238,1202,1375,1353,1642],

        }, {
            name: '15-50€',
            data:[468,481,514,517,529,524,529,562,561,622],
        }, {
            name: '50-250€',
            data:[3335,3099,3019,3006,3120,3414,3387,3292,3333,3731],
        }, {
            name: '250-500€',
            data:[2211,2088,1967,2016,2202,2452,2521,2457,2408,2860],
            visible: false
        }, {
            name: '500-2500€',
            data:[7951,7953,8786,9655,10745,11553,11389,10737,12370],
            visible: false
        }, {
            name: '2500- 5000€',
            data:[3489,3322,3097,3497,3933,4476,4978,4855,4319,5071],
            visible: false
        }, {
            name: '5000 -25000€',
            data:[4685,4556,4812,5260,5746,6550,7109,7039,6353,7497],
            visible: false
        }, {
            name: '25000 - 50000€',
            data:[493,531,559,694,716,834,875,925,829,924],
            visible: false
        }, {
            name: '50000€+',
            data: [197,196,233,255,320,346,299,337,379,393],
            visible: false
        }]
    });
});