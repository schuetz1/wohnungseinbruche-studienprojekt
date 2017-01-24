/**
 * Created by Andreas Hierath on 12/01/2017.
 */

var chart = AmCharts.makeChart("einbrueche", {
    "type": "serial",
    "theme": "light",
    "numberFormatter":{precision:-1, decimalSeparator:',', thousandsSeparator:'.'},
    "fontFamily": "lato",
    "top":0,
    "sortColumns": true,
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 3,
        "position": "bottom",
        "useGraphSettings": true,
        "markerSize": 10,
        "align": "center"
    },
    "dataProvider": [{
        "value": "2006",
        "Einbrüche": 37686,
        "Versuchte Einbrüche": 13990,
        "Aufklärungsquote": 12000,
    }, {
        "value": "2007",
        "Einbrüche": 37393,
        "Versuchte Einbrüche": 14416,
        "Aufklärungsquote": 11800,
    }, {
        "value": "2008",
        "Einbrüche": 38002,
        "Versuchte Einbrüche": 14851,
        "Aufklärungsquote": 10500,
    }, {
        "value": "2009",
        "Einbrüche": 41115,
        "Versuchte Einbrüche": 16086,
        "Aufklärungsquote": 10000,
    }, {
        "value": "2010",
        "Einbrüche": 44769,
        "Versuchte Einbrüche": 17607,
        "Aufklärungsquote": 9500,
    }, {
        "value": "2011",
        "Einbrüche": 50368,
        "Versuchte Einbrüche": 19789,
        "Aufklärungsquote": 9750,
    }, {
        "value": "2012",
        "Einbrüche": 54167,
        "Versuchte Einbrüche": 21714,
        "Aufklärungsquote": 9900,
    }, {
        "value": "2013",
        "Einbrüche": 54953,
        "Versuchte Einbrüche": 22722,
        "Aufklärungsquote": 9900,
    }, {
        "value": "2014",
        "Einbrüche": 52794,
        "Versuchte Einbrüche": 22522,
        "Aufklärungsquote": 10500,
    }, {
        "value": "2015",
        "Einbrüche": 62362,
        "Versuchte Einbrüche": 27234,
        "Aufklärungsquote": 10000,
    }, ],
    "valueAxes": [{
        "axisAlpha": 0.3,
        "gridAlpha": 0
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "Einbrüche",
        "type": "column",
        "valueField": "Einbrüche",
        "fixedColumnWidth": 40,
        "lineColor": "#4aa6c0"

    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "Versuchte Einbrüche",
        "type": "column",
        "clustered": false,
        "columnWidht": 0.5,
        "valueField": "Versuchte Einbrüche",
        "fixedColumnWidth": 40,
        "lineColor": "#113841"

    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0,
        "lineAlpha": 1,
        "title": "Aufklärungsquote",
        "bullet": "round",
        "bulletBorderAlpha": 0,
        "bulletColor": "#b9e3ed",
        "useLineColorForBulletBorder": true,
        "lineThickness": 2,
        "lineColor": "#b9e3ed",
        "bulletSize": 8,
        "valueField": "Aufklärungsquote"
    }],
    "categoryField": "value",
    "categoryAxis": {
        "tickLength": 0,
        "gridPosition": "start",
        "position": "left",
        "gridThickness": 0,
        "labelRotation": 0
    },"valueAxes": [ {
        "axisAlpha": 0,
        "position": "left",
        "showFirstLabel": false,
        "showLastLabel": false
    } ],

});
