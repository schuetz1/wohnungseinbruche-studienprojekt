/**
 * Created by luisaziegler on 10.01.17.
 */
$(function () {
    Highcharts.chart('schaden', {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
        },
        style: {
            fontFamily: 'Lato',
            fontSize: '14px',
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
                text: 'Anzahl der Einbrüche',
                align: 'middle',
                style: {
                    color: '#fff'
                }
            },
            labels: {
                overflow: 'justify',
                style: {
                    color: '#fff'
                },
                formatter: function() {
                    if ( this.isFirst ) { return ''; }
                    if ( this.isLast ) { return ''; }
                    return this.value.toLocaleString();
                }
            }
        },
        tooltip: {
            backgroundColor:'#fff',
            borderWidth:0,
            formatter: function() {
                return '<b>'+ this.series.name + '</b>' + ' Schaden'+ '<br>' +
                '<b>' +this.y + '</b>' + ' Einbrüche';
            },
            valueSuffix: ' Einbrüche',

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
            fontFamily: 'Lato',
            fontSize: '14px',
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
        series: [ {
            name: '0-50 €',
            data:[1270,1234,1511,1515,1470,1762,1731,1937,1914,2264],
            color:'#fff'
        }, {
            name: '50-250 €',
            data:[3335,3099,3019,3006,3120,3414,3387,3292,3333,3731],
            color: "#b9c4c6",
            visible: false
        }, {
            name: '250-500 €',
            data:[2211,2088,1967,2016,2202,2452,2521,2457,2408,2860],
            color: "#b9e3ed",
            visible: false
        }, {
            name: '500-2.500 €',
            data:[7951,7953,8786,9655,10745,11553,11389,10737,12370],
            visible: false,
            color: '#66cccc'
        }, {
            name: '2.500- 5.000 €',
            data:[3489,3322,3097,3497,3933,4476,4978,4855,4319,5071],
            visible: false,
            color: '#68c3d8'
        }, {
            name: '5.000 -25.000 €',
            data:[4685,4556,4812,5260,5746,6550,7109,7039,6353,7497],
            visible: false,
            color:'#4aa6c0'
        }, {
            name: '25.000 - 50.000 €',
            data:[493,531,559,694,716,834,875,925,829,924],
            color:'#113841'
        }, {
            name: '50.000 €+',
            data: [197,196,233,255,320,346,299,337,379,393],
            color: '#000'
        }]
    });
});