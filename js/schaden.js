/**
 * Created by luisaziegler on 10.01.17.
 */
var chart = AmCharts.makeChart("schaden", {
    "type": "serial",
    "theme": "light",
    "sortColumns": true,
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
        "useGraphSettings": true,
        "markerSize": 10
    },
    "dataProvider": [{
        "value": "0-15€",
        "2006": 802,
        "2007": 753,
        "2008": 997,
        "2009": 998,
        "2010": 941,
        "2011": 1238,
        "2012": 1202,
        "2013": 1375,
        "2014": 1353,
        "2015":  1642
    }, {
        "value": "15€-50€",
        "2006": 468,
        "2007":  481,
        "2008":  514,
        "2009": 517,
        "2010":  529,
        "2011":  524,
        "2012": 529,
        "2013":  562,
        "2014": 561,
        "2015": 622
    }, {
        "value": "50€-250€",
        "2006": 3335,
        "2007": 3099,
        "2008": 3019,
        "2009": 3006,
        "2010":  3120,
        "2011":  3414,
        "2012": 3387,
        "2013": 3292,
        "2014": 3333,
        "2015":  3731
    }, {
        "value": "250€-500€",
        "2006": 2211,
        "2007":  2088,
        "2008": 1967,
        "2009": 2016,
        "2010": 2202,
        "2011": 2452,
        "2012": 2521,
        "2013": 2457,
        "2014": 2408,
        "2015": 2860
    }, {
        "value": "500€-2500€",
        "2006": 8016,
        "2007": 7951,
        "2008": 7953,
        "2009": 8786,
        "2010": 9655,
        "2011": 10745,
        "2012": 11553,
        "2013": 11389,
        "2014": 10737,
        "2015": 12370
    }, {
        "value": "2500€-5000€",
        "2006": 3489,
        "2007": 3322,
        "2008": 3097,
        "2009": 3497,
        "2010":  3933,
        "2011": 4476,
        "2012": 4978,
        "2013": 4855,
        "2014": 4319,
        "2015": 5071
    }, {
        "value": "5000€-25000€",
        "2006": 4685,
        "2007": 4556,
        "2008": 4812,
        "2009": 5260,
        "2010": 5746,
        "2011": 6550,
        "2012": 7109,
        "2013": 7039,
        "2014": 6353,
        "2015": 7497
    }, {
        "value": "25000€-50000€",
        "2006": 493,
        "2007":  531,
        "2008": 559,
        "2009": 694,
        "2010": 716,
        "2011":  834,
        "2012": 875,
        "2013": 925,
        "2014": 829,
        "2015": 924
    }, {
        "value": "50000€+",
        "2006": 197,
        "2007":  196,
        "2008": 233,
        "2009": 255,
        "2010": 320,
        "2011": 346,
        "2012": 299,
        "2013": 337,
        "2014": 379,
        "2015": 393
    }],
    "valueAxes": [{
        "axisAlpha": 0.3,
        "gridAlpha": 0
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "2006",
        "type": "column",
        "hidden": true,
        "valueField": "2006"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "2007",
        "type": "column",
        "hidden": true,
        "valueField": "2007"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "2008",
        "type": "column",
        "hidden": true,
        "valueField": "2008"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "2009",
        "type": "column",
        "hidden": true,
        "valueField": "2009"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "2010",
        "type": "column",
        "hidden": true,
        "valueField": "2010"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "2011",
        "type": "column",
        "hidden": true,
        "valueField": "2011"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "2012",
        "type": "column",
        "hidden": true,
        "valueField": "2012"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "2013",
        "type": "column",
        "hidden": true,
        "valueField": "2013"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "2014",
        "type": "column",
        "valueField": "2014"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "2015",
        "type": "column",
        "valueField": "2015"
    }],
    "categoryField": "value",
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left",
        "gridThickness": 1,
        "labelRotation": 45
    },"valueAxes": [ {
        "axisAlpha": 0,
        "position": "left"
    } ],

});