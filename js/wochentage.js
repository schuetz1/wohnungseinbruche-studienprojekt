/**
 * Created by v.geiger on 23.01.17.
 */
var chart =   AmCharts.makeChart("wochentage",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "backgroundColor": "#763B3B",
            "fontFamily": "lato",
            "fontSize": 14,
            "decimalSeparator": ",",
            "precision": 1,
            "categoryAxis": {
                "gridPosition": "start",
                "axisThickness": 0,
                "color": "#FFFFFF",
                "gridCount": 3,
                "gridThickness": 0,
                "titleBold": false
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[value]]%",
                    "color": "#FFFFFF",
                    "colorField": "color",
                    "columnWidth": 0.39,
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "lineColorField": "color",
                    "title": "graph 1",
                    "type": "column",
                    "valueField": "column-1",
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "axisFrequency": -25,
                    "axisTitleOffset": 8,
                    "id": "ValueAxis-1",
                    "maximum": 20,
                    "maximumDate": "",
                    "minimum": 14,
                    "axisThickness": 0,
                    "decimalSeparator": ",",
                    "color": "#FFFFFF",
                    "gridColor": "#FFFFFF",
                    "showFirstLabel": false,
                    "showLastLabel": false,
                    "tickLength": 0,
                    "title": ""
                }
            ],
            "allLabels": [],
            "balloon": {
                "adjustBorderColor": false,
                "borderThickness": 0,
                "disableMouseEvents": false,
                "fillAlpha": 1,
                "fontSize": 14,
                "pointerWidth": 7
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": ""
                }
            ],
            "dataProvider": [
                {
                    "category": "Mo",
                    "column-1": "15.7",
                    "color": "#FFFFFF"
                },
                {
                    "category": "Di",
                    "column-1": "16.0",
                    "color": "#FFFFFF"
                },
                {
                    "category": "Mi",
                    "column-1": "16.2",
                    "color": "#FFFFFF"
                },
                {
                    "category": "Do",
                    "column-1": "17.8",
                    "color": "#FFFFFF"
                },
                {
                    "category": "Fr",
                    "column-1": "18.4",
                    "color": "#FFFFFF"
                },
                {
                    "category": "Sa",
                    "column-1": "19.2",
                    "color": "#FFFFFF"
                },
                {
                    "category": "So",
                    "color": "#FFFFFF",
                    "column-1": "14.4"
                }
            ]
        }
    );