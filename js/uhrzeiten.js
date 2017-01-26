/**
 * Created by v.geiger on 24.01.17.
 */
var chart = AmCharts.makeChart("uhrzeiten",
    {
        "type": "serial",
        "categoryField": "category",
        "startDuration": 1,
        "decimalSeparator": ",",
        "fontFamily": "lato",
        "fontSize": 14,
        "color": "#FFFFFF",
        "percentPrecision": 7,
        "precision": 0,
        "thousandsSeparator": ".",
        "categoryAxis": {
            "gridPosition": "start",
            "axisColor": "#FFFFFF",
            "axisThickness": 0,
            "gridCount": 1,
            "gridThickness": 0,
            "tickLength": 0
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonColor": "#EFD229",
                "balloonText": "[[value]] Einbrüche passieren durchschnittlich um [[category]]",
                "bullet": "round",
                "color": "#FFFFFF",
                "customMarker": "moon",
                "id": "AmGraph-1",
                "labelAnchor": "middle",
                "legendAlpha": 1,
                "legendValueText": "",
                "lineColor": "#EFD229",
                "title": "Tageseinbrüche",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[value]] Einbrüche passieren durchschnittlich um [[category]]",
                "bullet": "round",
                "customMarker": "sun",
                "id": "AmGraph-2",
                "labelAnchor": "middle",
                "lineColor": "#4AA6C0",
                "title": "Nachteinbrüche",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "axisFrequency": 2,
                "axisTitleOffset": 2,
                "id": "ValueAxis-1",
                "position": "bottom",
                "autoGridCount": false,
                "axisColor": "#FFFFFF",
                "axisThickness": 0,
                "gridColor": "#FFFFFF",
                "gridCount": 7,
                "showFirstLabel": false,
                "tickLength": -1,
                "title": "",
                "titleBold": false,
                "titleRotation": 0
            }
        ],
        "allLabels": [],
        "balloon": {
            "borderThickness": 0,
            "fillAlpha": 1,
            "maxWidth": 130
        },
        "legend": {
            "enabled": true,
            "align": "center",
            "color": "#FFFFFF",
            "fontSize": 14,
            "markerBorderThickness": 0,
            "markerDisabledColor": "#666666",
            "markerLabelGap": 7,
            "markerSize": 12,
            "switchColor": "#10AA47",
            "useGraphSettings": true,
            "useMarkerColorForLabels": true
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
                "category": "06 Uhr",
                "column-1": "900",
                "column-2": null
            },
            {
                "category": "07 Uhr",
                "column-1": "1200",
                "column-2": null
            },
            {
                "category": "08 Uhr",
                "column-1": "1850",
                "column-2": null
            },
            {
                "category": "09 Uhr",
                "column-1": "2050",
                "column-2": null
            },
            {
                "category": "10 Uhr",
                "column-1": "2600",
                "column-2": null
            },
            {
                "category": "11 Uhr",
                "column-1": "2900",
                "column-2": null
            },
            {
                "category": "12 Uhr",
                "column-1": "3250",
                "column-2": null
            },
            {
                "category": "13 Uhr",
                "column-1": "2950",
                "column-2": null
            },

            {
                "category": "14 Uhr",
                "column-1": "3050",
                "column-2": null
            },
            {
                "category": "15 Uhr",
                "column-1": "3200",
                "column-2": null
            },
            {
                "category": "16 Uhr",
                "column-1": "3500",
                "column-2": null
            },
            {
                "category": "17 Uhr",
                "column-1": "3970",
                "column-2": null
            },
            {
                "category": "18 Uhr",
                "column-1": "5700",
                "column-2": null
            },
            {
                "category": "19 Uhr",
                "column-1": "5850",
                "column-2": null
            },
            {
                "category": "20 Uhr",
                "column-1": "4900",
                "column-2": null
            },
            {
                "category": "21 Uhr",
                "column-1": null,
                "column-2": "3570"
            },
            {
                "category": "22 Uhr",
                "column-1": null,
                "column-2": "2980"
            },
            {
                "category": "23 Uhr",
                "column-1": null,
                "column-2": "2170"
            },
            {
                "category": "24 Uhr",
                "column-1": null,
                "column-2": "1250"
            },
            {
                "category": "1 Uhr",
                "column-1": null,
                "column-2": "1000"
            },
            {
                "category": "2 Uhr",
                "column-1": null,
                "column-2": "850"
            },
            {
                "category": "3 Uhr",
                "column-1": null,
                "column-2": "830"
            },
            {
                "category": "4 Uhr",
                "column-1": null,
                "column-2": "670"
            },
            {
                "category": "5 Uhr",
                "column-1": null,
                "column-2": "710"
            }
        ]
    }
);