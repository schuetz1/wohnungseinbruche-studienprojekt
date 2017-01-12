/**
 * Created by Armires on 12/01/2017.
 */

var chart = AmCharts.makeChart("einbrueche", {
    "type": "serial",
    "theme": "light",
    "top":0,
    "sortColumns": true,
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
        "useGraphSettings": true,
        "markerSize": 10
    },
    "dataProvider": [{
        "value": "2006",
        "Einbruchsfälle": 37686,
        "Versuchte Einbrüche": 13990,
        "Aufklärungsquote": 1,
    }, {
        "value": "2007",
        "Einbruchsfälle": 37393,
        "Versuchte Einbrüche": 14416,
        "Aufklärungsquote": 1,
    }, {
        "value": "2008",
        "Einbruchsfälle": 38002,
        "Versuchte Einbrüche": 14851,
        "Aufklärungsquote": 1,
    }, {
        "value": "2009",
        "Einbruchsfälle": 41115,
        "Versuchte Einbrüche": 16086,
        "Aufklärungsquote": 1,
    }, {
        "value": "2010",
        "Einbruchsfälle": 44769,
        "Versuchte Einbrüche": 17607,
        "Aufklärungsquote": 1,
    }, {
        "value": "2011",
        "Einbruchsfälle": 50368,
        "Versuchte Einbrüche": 19789,
        "Aufklärungsquote": 1,
    }, {
        "value": "2012",
        "Einbruchsfälle": 54167,
        "Versuchte Einbrüche": 21714,
        "Aufklärungsquote": 1,
    }, {
        "value": "2013",
        "Einbruchsfälle": 54953,
        "Versuchte Einbrüche": 22722,
        "Aufklärungsquote": 1,
    }, {
        "value": "2014",
        "Einbruchsfälle": 52794,
        "Versuchte Einbrüche": 22522,
        "Aufklärungsquote": 1,
    }, {
        "value": "2015",
        "Einbruchsfälle": 62362,
        "Versuchte Einbrüche": 27234,
        "Aufklärungsquote": 1,
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
        "title": "Einbruchsfälle",
        "type": "column",
        "valueField": "Einbruchsfälle"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "Versuchte Einbrüche",
        "type": "column",
        "clustered": false,
        "columnWidht": 0.5,
        "valueField": "Versuchte Einbrüche"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "Aufklärungsquote",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "useLineColorForBulletBorder": true,
        "fillAlphas": 0,
        "lineThickness": 2,
        "lineAlpha": 1,
        "bulletSize": 7,
        "valueField": "Aufklärungsquote"
    }],
    "categoryField": "value",
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left",
        "gridThickness": 1,
        "labelRotation": 0
    },"valueAxes": [ {
        "axisAlpha": 0,
        "position": "left"
    } ],

});