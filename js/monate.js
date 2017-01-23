
var chart = AmCharts.makeChart("monate",
        {
            "type": "serial",
            "categoryField": "category",
            "columnSpacing": -1,
            "columnWidth": 0,
            "synchronizeGrid": true,
            "plotAreaFillColors": "#FF0000",
            "colors": [
                "#FFFFFF"
            ],
            "startDuration": 2,
            "startEffect": "easeOutSine",
            "urlTarget": "",
            "backgroundColor": "#763B3B",
            "color": "#FFFFFF",
            "fontFamily": "lato",
            "fontSize": 10,
            "handDrawScatter": 1,
            "categoryAxis": {
                "forceShowField": "",
                "gridPosition": "start",
                "axisAlpha": 0,
                "axisColor": "#FFFFFF",
                "axisThickness": 11,
                "gridAlpha": 0,
                "gridThickness": 0,
                "tickLength": 0
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[value]]",
                    "bullet": "round",
                    "id": "AmGraph-1",
                    "title": "graph 1",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "bullet": "square",
                    "id": "AmGraph-2",
                    "title": "graph 2",
                    "valueField": "column-2"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "axisAlpha": 0,
                    "axisColor": "#FFFFFF",
                    "gridColor": "#FFFFFF",
                    "title": ""
                }
            ],
            "allLabels": [],
            "balloon": {},
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": ""
                }
            ],
            "dataProvider": [
                {
                    "category": "Jan",
                    "column-1": 8188
                },
                {
                    "category": "Feb",
                    "column-1": 5890
                },
                {
                    "category": "Mar",
                    "column-1": 6310
                },
                {
                    "category": "Apr",
                    "column-1": 4902
                },
                {
                    "category": "Mai",
                    "column-1": 3880
                },
                {
                    "category": "Jun",
                    "column-1": 4372
                },
                {
                    "category": "Jul",
                    "column-1": 3758
                },
                {
                    "category": "Aug",
                    "column-1": 4141
                },
                {
                    "category": "Sep",
                    "column-1": 3630
                },
                {
                    "category": "Okt",
                    "column-1":  4438
                },
                {
                    "category": "Nov",
                    "column-1": 5952
                },
                {
                    "category": "Dez",
                    "column-1": 6901
                }
            ]
        }
    );