/**
 * Created by luisaziegler on 11.01.17.
 */
var chart;

chart = AmCharts.makeChart( "fallzahlen", {
    "type": "serial",
    "addClassNames": true,
    "theme": "light",
    "autoMargins": false,
    "marginLeft": 60,
    "marginRight": 8,
    "marginTop": 10,
    "marginBottom": 26,
    "balloon": {
        "adjustBorderColor": false,
        "horizontalPadding": 10,
        "verticalPadding": 8,
        "color": "#ffffff"
    },

    "dataProvider": [ {
        "year": 2006,
        "fallzahl": 23696,
        "schaden": 101089,
        "color":"6a6a6a"
    },{
        "year": 2007,
        "fallzahl": 22977,
        "schaden": 103304
    },{
        "year": 2008,
        "fallzahl": 23151,
        "schaden": 109278
    },{
        "year": 2009,
        "fallzahl": 25029,
        "schaden": 123239
    }, {
        "year": 2010,
        "fallzahl": 27162,
        "schaden": 138482
    }, {
        "year": 2011,
        "fallzahl": 30579,
        "schaden": 153712
    }, {
        "year": 2012,
        "fallzahl": 32453,
        "schaden": 160171
    }, {
        "year": 2013,
        "fallzahl": 32231,
        "schaden": 166270
    }, {
        "year": 2014,
        "fallzahl": 30272,
        "schaden": 153600,
    },
        {
            "year": 2015,
            "fallzahl": 35128,
            "schaden": 180813,
        }],
    "valueAxes": [ {
        "axisAlpha": 1,
        "position": "left"
    } ],
    "graphs": [ {
        "alphaField": "alpha",
        "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
        "fillAlphas": 0.5,
        "colorField": "color",
        "fillColorsField": "fill",
        "lineAlpha": 0.1,
        "showHandOnHover": true,
        "title": "Anzahl der Fälle",
        "type": "column",
        "valueField": "fallzahl",
        "dashLengthField": "dashLengthColumn"
    }, {
        "id": "graph2",
        "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]] TEUR</span> [[additional]]</span>",
        "bullet": "round",
        "lineThickness": 3,
        "bulletSize": 7,
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "useLineColorForBulletBorder": true,
        "bulletBorderThickness": 3,
        "fillAlphas": 0,
        "lineAlpha": 1,
        "title": "Schadenshöhe",
        "valueField": "schaden",
        "dashLengthField": "dashLengthLine"
    } ],
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "gridCount":500
    },
    "chartCursor": {
        "categoryBalloonDateFormat": "DD",
        "cursorAlpha": 0.1,
        "cursorColor":"#000000",
        "fullWidth":true,
        "valueBalloonsEnabled": false,
        "zoomable": false}

} );

chart.addListener("clickGraphItem", function(event) {
    if(event.item.dataContext[event.graph.alphaField] == 0.5){
        event.item.dataContext[event.graph.alphaField] = 0.9;
        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.cursorColor = "#000";
        chartCursor.fullWidth= true;
        chart.addChartCursor(chartCursor);
        if (event.item.year = "2009"){document.getElementById("fallzahlen_text").innerHTML = "<p> Im Jahr 2009 wurden 25 029 Einbrüche begangen und einen Schadenssumme von 123239 TEUR angerichtet  </p>";}

    }
    else{
        event.item.dataContext[event.graph.alphaField] = 0.5;
    }
    event.chart.validateData();
});