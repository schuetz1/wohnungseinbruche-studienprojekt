/**
 * Created by luisaziegler on 12.01.17.
 */
$(function() {
    Highcharts.setOptions({
        lang: {
            decimalPoint: ',',
            thousandsSep: '.'
        }
    });

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
        yAxis: [
            { // Secondary yAxis
                title: {
                    text: 'Anzahl Einbrüche',
                    style: {
                        color:'transparent'
                    }
                },
                labels: {
                    format: "{value}€",
                    style: {
                        color:'transparent'
                    }
                },
                opposite: true
            },{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: '#fff'
                },
                formatter: function() {
                    if ( this.isFirst ) { return ''; }
                    console.log(this);
                    this.chart.series[0].name
                        if ( this.isLast ) { return ''; }
                    return this.value.toLocaleString();
                }
            },
            tickInterval:null,

            title: {
                text: 'Höhe der Schadenssumme',
                fontFamily:'Lato',
                fontSize: '14px',
                style: {
                    color: '#fff'

                }
            }
        }],
        tooltip: {
            shared: false,
            backgroundColor:'#fff',
            borderWidth:0
        },

        legend: {
            fontSize: '14px',
            fontFamily: 'Lato',
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
                numberFormat:'decimal',
                enabled: false,
                rotation: -90,
                color: '#000',
                align: 'right',
                format: '{point.y:,.0f}€',
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '14px',
                    fontFamily: 'Lato'
                }

            },
            type: 'column',
            color:'#fff',
            borderWidth: 0,
            yAxis: 1,
            data: [101089137, 103304312, 109278423, 123239513, 138482599, 153712624, 160171173, 166270588, 153600612, 180813166],
            tooltip: {
                useHTML: true,
                shared: false,
                pointFormat:'<b>{point.y}</b>',
                headerFormat: '',
                valueSuffix: ' €',
                backgroundColor:'#fff',
                borderWidth:0,
            }

        }, {
            name: 'Fallzahlen',
            type: 'line',
            color:'#4aa6c0',
            data:[37686, 37393, 38002, 41115, 44769, 50368, 54167, 54953, 52794, 62362],

            tooltip: {
                useHTML: true,
                shared: false,
                pointFormat:'<b>{point.y}</b>',
                headerFormat: '',
                valueSuffix: ' Einbrüche',
                backgroundColor:'#fff',
                borderWidth:0,
            }
        }
        ]
    });
});
