/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['lato, sans-serif']='<script src=\"http://use.edgefonts.net/lato:n9,i4,n1,i7,i9,n7,i1,i3,n4,n3:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'mo_t2',
                type: 'rect',
                rect: ['241', '325','auto','auto','auto', 'auto']
            },
            {
                id: 'di_t2',
                type: 'rect',
                rect: ['310', '325','auto','auto','auto', 'auto']
            },
            {
                id: 'mi_t',
                type: 'text',
                rect: ['378px', '325px','51px','23px','auto', 'auto'],
                text: "Mi",
                align: "center",
                font: ['lato, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'do_t',
                type: 'text',
                rect: ['446px', '325px','51px','23px','auto', 'auto'],
                text: "Do",
                align: "center",
                font: ['lato, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'fr_t',
                type: 'text',
                rect: ['514px', '325px','51px','23px','auto', 'auto'],
                text: "Fr",
                align: "center",
                font: ['lato, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'sa_t',
                type: 'text',
                rect: ['582px', '325px','51px','23px','auto', 'auto'],
                text: "Sa<br>",
                align: "center",
                font: ['lato, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'so_t',
                type: 'text',
                rect: ['650px', '325px','51px','23px','auto', 'auto'],
                text: "So",
                align: "center",
                font: ['lato, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Group_so',
                type: 'group',
                rect: ['635px', '103','79','219','auto', 'auto'],
                c: [
                {
                    id: 'Sonntag',
                    type: 'rect',
                    rect: ['12px', '0px','57px','219px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                }]
            },
            {
                id: 'Group_sa',
                type: 'group',
                rect: ['568px', '30','79','292','auto', 'auto'],
                c: [
                {
                    id: 'Samstag',
                    type: 'rect',
                    rect: ['11px', '0px','57px','292px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                }]
            },
            {
                id: 'Group_fr',
                type: 'group',
                rect: ['500px', '42','79','280','auto', 'auto'],
                c: [
                {
                    id: 'Freitag',
                    type: 'rect',
                    rect: ['11px', '0px','57px','280px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                }]
            },
            {
                id: 'Group_do',
                type: 'group',
                rect: ['432px', '51','79','271','auto', 'auto'],
                c: [
                {
                    id: 'Donnerstag',
                    type: 'rect',
                    rect: ['11px', '0px','57px','271px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                }]
            },
            {
                id: 'Group_mi',
                type: 'group',
                rect: ['367px', '77','79','245','auto', 'auto'],
                c: [
                {
                    id: 'Mittwoch',
                    type: 'rect',
                    rect: ['8px', '0px','57px','245px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                }]
            },
            {
                id: 'Group_di',
                type: 'group',
                rect: ['296px', '78','79','244','auto', 'auto'],
                c: [
                {
                    id: 'di',
                    type: 'rect',
                    rect: ['11px', '0','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Group_mo',
                type: 'group',
                rect: ['227px', '83','79','239','auto', 'auto'],
                c: [
                {
                    id: 'mo',
                    type: 'rect',
                    rect: ['12px', '0','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'mo_info',
                type: 'rect',
                rect: ['20px', '176','auto','auto','auto', 'auto']
            },
            {
                id: 'di_info',
                type: 'rect',
                rect: ['37px', '135','auto','auto','auto', 'auto']
            },
            {
                id: 'moon_black',
                display: 'block',
                type: 'image',
                rect: ['729px', '164px','15px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"moon_black.svg",'0px','0px']
            },
            {
                id: 'sun_black3',
                type: 'image',
                rect: ['721px', '220px','33px','33px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sun_black3.svg",'0px','0px']
            },
            {
                id: 'sun_yellow',
                display: 'none',
                type: 'image',
                rect: ['721px', '205px','33px','33px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sun_yellow.svg",'0px','0px']
            },
            {
                id: 'tag',
                display: 'none',
                type: 'image',
                rect: ['390px', '35px','324px','259px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tag.svg",'0px','0px']
            },
            {
                id: 'moon_tuerkis',
                display: 'none',
                type: 'image',
                rect: ['729px', '164px','16px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"moon_tuerkis.svg",'0px','0px']
            },
            {
                id: 'TAG-INFO',
                display: 'none',
                type: 'group',
                rect: ['767', '179','219','122','auto', 'auto'],
                c: [
                {
                    id: 'Text2',
                    type: 'text',
                    rect: ['0px', '4px','228px','83px','auto', 'auto'],
                    text: "Tagwohnungseinbrüche",
                    align: "left",
                    font: ['lato, sans-serif', 18, "rgba(233,205,41,1.00)", "bold", "none", "normal"]
                },
                {
                    id: 'Text3',
                    type: 'text',
                    rect: ['2px', '34px','217px','83px','auto', 'auto'],
                    text: "Anzahl der Einbrüche <br>zwischen 6 -20 Uhr<br><br><br>",
                    align: "left",
                    font: ['lato, sans-serif', 15, "rgba(255,255,255,1.00)", "300", "none", "normal"]
                }]
            },
            {
                id: 'NACHT-INFO',
                display: 'none',
                type: 'group',
                rect: ['767', '128','228','131','auto', 'auto'],
                c: [
                {
                    id: 'Text2Copy',
                    type: 'text',
                    rect: ['0px', '48px','228px','83px','auto', 'auto'],
                    text: "Nachtwohnungseinbrüche",
                    align: "left",
                    font: ['lato, sans-serif', 18, "rgba(74,166,192,1.00)", "bold", "none", "normal"]
                },
                {
                    id: 'Text3Copy',
                    type: 'text',
                    rect: ['2px', '0px','217px','51px','auto', 'auto'],
                    text: "Anzahl der Einbrüche <br>zwischen 21 -5 Uhr<br><br><br>",
                    align: "left",
                    font: ['lato, sans-serif', 15, "rgba(255,255,255,1.00)", "300", "none", "normal"]
                }]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['298px', '352px','369px','23px','auto', 'auto'],
                text: "Fahren Sie mit der Maus über die Elemente für mehr Informationen<br>",
                align: "left",
                font: ['lato, sans-serif', 12, "rgba(255,255,255,1)", "300", "none", "normal"]
            },
            {
                id: 'NACHTKURVE',
                display: 'none',
                type: 'image',
                rect: ['193px', '152px','191px','161px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"NACHTKURVE.svg",'0px','0px']
            },
            {
                id: 'Ellipse_dashed',
                display: 'none',
                type: 'ellipse',
                rect: ['250px', '259px','26px','24px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [1,"rgba(74,166,192,1.00)","dashed"]
            },
            {
                id: '_22',
                display: 'none',
                type: 'group',
                rect: ['215', '178','31','27','auto', 'auto'],
                c: [
                {
                    id: 'Ellipse2',
                    type: 'ellipse',
                    rect: ['0px', '0px','15px','15px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(74,166,192,1.00)"],
                    stroke: [1,"rgb(74, 166, 192)","none"]
                },
                {
                    id: 'Text5',
                    type: 'text',
                    rect: ['3px', '1px','28px','26px','auto', 'auto'],
                    text: "22",
                    align: "left",
                    font: ['lato, sans-serif', 9, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'info_22',
                display: 'none',
                type: 'group',
                rect: ['29', '274','189','83','auto', 'auto'],
                c: [
                {
                    id: 'Text4',
                    display: 'block',
                    type: 'text',
                    rect: ['42px', '58px','166px','33px','auto', 'auto'],
                    text: "Um ",
                    align: "left",
                    font: ['lato, sans-serif', 12, "rgba(255,255,255,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text4Copy',
                    display: 'block',
                    type: 'text',
                    rect: ['43px', '58px','166px','33px','auto', 'auto'],
                    text: "22 Uhr ",
                    align: "left",
                    font: ['lato, sans-serif', 12, "rgba(255,255,255,1.00)", "500", "none", "normal"]
                },
                {
                    id: 'Text6',
                    type: 'text',
                    rect: ['80px', '-15px','109px','83px','auto', 'auto'],
                    text: "passieren",
                    align: "left",
                    font: ['lato, sans-serif', 15, "rgba(255,255,255,1)", "300", "none", "normal"]
                },
                {
                    id: 'Text7',
                    type: 'text',
                    rect: ['1px', '8px','124px','51px','auto', 'auto'],
                    text: "durchschnittlich",
                    align: "left",
                    font: ['lato, sans-serif', 15, "rgba(255,255,255,1)", "300", "none", "normal"]
                },
                {
                    id: 'Text8',
                    type: 'text',
                    rect: ['106px', '10px','79px','24px','auto', 'auto'],
                    text: "2950",
                    align: "left",
                    font: ['lato, sans-serif', 15, "rgba(255,255,255,1)", "500", "none", "normal"]
                },
                {
                    id: 'Text9',
                    type: 'text',
                    rect: ['0px', '30px','51px','15px','auto', 'auto'],
                    text: "Einbrüche",
                    align: "left",
                    font: ['lato, sans-serif', 15, "rgba(255,255,255,1)", "300", "none", "normal"]
                }]
            }],
            symbolInstances: [
            {
                id: 'di_info',
                symbolName: 'di_info',
                autoPlay: {

                }
            },
            {
                id: 'mo_info',
                symbolName: 'mo_info',
                autoPlay: {

                }
            },
            {
                id: 'mo',
                symbolName: 'mo',
                autoPlay: {

                }
            },
            {
                id: 'di',
                symbolName: 'di',
                autoPlay: {

                }
            },
            {
                id: 'di_t2',
                symbolName: 'di_t',
                autoPlay: {

                }
            },
            {
                id: 'mo_t2',
                symbolName: 'mo_t',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse2}": [
                ["color", "background-color", 'rgba(74,166,192,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '15px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '15px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '48px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(74,166,192,1.00)'],
                ["style", "font-size", '18px'],
                ["style", "left", '0px'],
                ["style", "width", '228px']
            ],
            "${_so_t}": [
                ["style", "top", '325px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'lato, sans-serif'],
                ["style", "left", '650px'],
                ["style", "font-size", '14px']
            ],
            "${_Group_di}": [
                ["style", "left", '296px']
            ],
            "${_Text2}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(233,205,41,1.00)'],
                ["style", "width", '228px'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${_moon_tuerkis}": [
                ["style", "top", '176px'],
                ["style", "display", 'none'],
                ["style", "height", '24px'],
                ["style", "left", '729px'],
                ["style", "width", '16px']
            ],
            "${_Sonntag}": [
                ["style", "top", '0px'],
                ["style", "height", '219px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '12px'],
                ["style", "width", '57px']
            ],
            "${_moon_black}": [
                ["style", "top", '176px'],
                ["style", "display", 'block'],
                ["style", "height", '24px'],
                ["style", "left", '729px'],
                ["style", "width", '15px']
            ],
            "${_Group_sa}": [
                ["style", "left", '568px']
            ],
            "${_Text4}": [
                ["style", "top", '-14px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '1px'],
                ["style", "font-size", '15px']
            ],
            "${_Group_fr}": [
                ["style", "left", '500px']
            ],
            "${_sun_yellow}": [
                ["style", "top", '221px'],
                ["style", "display", 'none'],
                ["style", "height", '33px'],
                ["style", "left", '721px'],
                ["style", "width", '33px']
            ],
            "${_TAG-INFO}": [
                ["style", "display", 'none'],
                ["style", "top", '219px']
            ],
            "${_Freitag}": [
                ["style", "top", '0px'],
                ["style", "height", '280px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '11px'],
                ["style", "width", '57px']
            ],
            "${_tag}": [
                ["style", "top", '35px'],
                ["style", "left", '390px'],
                ["style", "display", 'none']
            ],
            "${_Samstag}": [
                ["style", "top", '0px'],
                ["style", "height", '292px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '11px'],
                ["style", "width", '57px']
            ],
            "${_Text7}": [
                ["style", "top", '8px'],
                ["style", "left", '1px'],
                ["style", "font-size", '15px']
            ],
            "${_Ellipse_dashed}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '209px'],
                ["style", "top", '172px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'dashed'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(74,166,192,1.00)']
            ],
            "${_Text3}": [
                ["style", "top", '34px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '2px'],
                ["style", "font-size", '15px']
            ],
            "${_Text5}": [
                ["style", "top", '1px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '3px'],
                ["style", "font-size", '9px']
            ],
            "${_sa_t}": [
                ["style", "top", '325px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'lato, sans-serif'],
                ["style", "left", '582px'],
                ["style", "font-size", '14px']
            ],
            "${_fr_t}": [
                ["style", "top", '325px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'lato, sans-serif'],
                ["style", "left", '514px'],
                ["style", "font-size", '14px']
            ],
            "${_Donnerstag}": [
                ["style", "top", '0px'],
                ["style", "height", '271px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '11px'],
                ["style", "width", '57px']
            ],
            "${__22}": [
                ["style", "display", 'none']
            ],
            "${_info_22}": [
                ["style", "display", 'none']
            ],
            "${_Text9}": [
                ["style", "top", '30px'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "font-size", '15px']
            ],
            "${_Text8}": [
                ["style", "top", '10px'],
                ["style", "font-weight", '500'],
                ["style", "left", '106px'],
                ["style", "font-size", '15px']
            ],
            "${_do_t}": [
                ["style", "top", '325px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'lato, sans-serif'],
                ["style", "left", '446px'],
                ["style", "font-size", '14px']
            ],
            "${_Text4Copy}": [
                ["style", "top", '-12px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(74,166,192,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '29px'],
                ["style", "font-size", '15px']
            ],
            "${_sun_black3}": [
                ["style", "height", '33px'],
                ["style", "top", '220px'],
                ["style", "left", '721px'],
                ["style", "width", '33px']
            ],
            "${_Group_mi}": [
                ["style", "left", '367px']
            ],
            "${_Group_do}": [
                ["style", "left", '432px']
            ],
            "${_Group_mo}": [
                ["style", "left", '227px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'left'],
                ["style", "height", '51px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '300'],
                ["style", "left", '2px'],
                ["style", "font-size", '15px']
            ],
            "${_Text6}": [
                ["style", "top", '-15px'],
                ["style", "left", '80px'],
                ["style", "font-size", '15px']
            ],
            "${_Group_so}": [
                ["style", "left", '635px']
            ],
            "${_Text}": [
                ["style", "top", '352px'],
                ["style", "left", '298px'],
                ["style", "font-size", '12px']
            ],
            "${_NACHT-INFO}": [
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(96,95,95,0.00)'],
                ["style", "width", '1000px'],
                ["style", "height", '380px'],
                ["style", "overflow", 'hidden']
            ],
            "${_NACHTKURVE}": [
                ["style", "top", '152px'],
                ["style", "left", '193px'],
                ["style", "display", 'none']
            ],
            "${_Mittwoch}": [
                ["style", "top", '0px'],
                ["style", "height", '245px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '8px'],
                ["style", "width", '57px']
            ],
            "${_mi_t}": [
                ["style", "top", '325px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'lato, sans-serif'],
                ["style", "left", '378px'],
                ["style", "font-size", '14px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid120", tween: [ "style", "${_Ellipse_dashed}", "left", '209px', { fromValue: '209px'}], position: 0, duration: 0 },
                { id: "eid160", tween: [ "style", "${_Text4}", "font-size", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
                { id: "eid172", tween: [ "style", "${_Text4Copy}", "top", '-12px', { fromValue: '-12px'}], position: 0, duration: 0 },
                { id: "eid105", tween: [ "style", "${_TAG-INFO}", "top", '219px', { fromValue: '219px'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_moon_black}", "top", '176px', { fromValue: '176px'}], position: 0, duration: 0 },
                { id: "eid169", tween: [ "style", "${_Text4Copy}", "left", '29px', { fromValue: '29px'}], position: 0, duration: 0 },
                { id: "eid127", tween: [ "color", "${_Text4Copy}", "color", 'rgba(74,166,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(74,166,192,1.00)'}], position: 0, duration: 0 },
                { id: "eid116", tween: [ "style", "${_Ellipse_dashed}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_tag}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_NACHTKURVE}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid158", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_moon_tuerkis}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid115", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid119", tween: [ "style", "${_Ellipse_dashed}", "top", '172px', { fromValue: '172px'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_TAG-INFO}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid157", tween: [ "style", "${_info_22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid173", tween: [ "style", "${_Text4}", "top", '-14px', { fromValue: '-14px'}], position: 0, duration: 0 },
                { id: "eid125", tween: [ "style", "${_Text4Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid151", tween: [ "style", "${_Text4}", "left", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_sun_yellow}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_moon_black}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid159", tween: [ "style", "${_Text4Copy}", "font-size", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
                { id: "eid112", tween: [ "style", "${_moon_tuerkis}", "top", '176px', { fromValue: '176px'}], position: 0, duration: 0 },
                { id: "eid109", tween: [ "style", "${_sun_yellow}", "top", '221px', { fromValue: '221px'}], position: 0, duration: 0 },
                { id: "eid113", tween: [ "style", "${_NACHT-INFO}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mo}', [] ], ""], position: 0 },
                { id: "eid66", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_di}', [] ], ""], position: 0 },
                { id: "eid65", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_di_t2}', [] ], ""], position: 0 },
                { id: "eid55", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mo_info}', [] ], ""], position: 0 },
                { id: "eid60", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mo_t2}', [] ], ""], position: 0 },
                { id: "eid74", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_di_info}', [] ], ""], position: 0 }            ]
        }
    }
},
"mo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Montag',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '57px', '239px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '239px'],
                ["style", "width", '57px']
            ],
            "${_Montag}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '57px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "color", "${_Montag}", "background-color", 'rgba(28,28,27,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 500 },
                { id: "eid21", tween: [ "color", "${_Montag}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,28,27,1.00)'}], position: 500, duration: 500 }            ]
        }
    }
},
"mo_i": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['0px', '0px', '79px', '66px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text3',
                    text: '15,7%<br>',
                    opacity: 1,
                    font: ['lato, sans-serif', 14, 'rgba(0,0,0,1)', '900', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '66px'],
                ["style", "width", '79px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid51", tween: [ "style", "${_Text3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid37", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 }            ]
        }
    }
},
"mo_info": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'mo_i',
                    type: 'group',
                    rect: ['0px', '0px', '192', '112', 'auto', 'auto'],
                    c: [
                    {
                        font: ['lato, sans-serif', 51, 'rgba(28,28,27,1.00)', '700', 'none', 'normal'],
                        type: 'text',
                        id: 'Text4',
                        text: '15,7 %',
                        align: 'center',
                        rect: ['-20px', '30px', '192px', '108px', 'auto', 'auto']
                    },
                    {
                        font: ['lato, sans-serif', 15, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                        type: 'text',
                        id: 'Text5',
                        text: 'der Einbrüche passieren an Montagen',
                        align: 'left',
                        rect: ['1px', '98px', '164px', '44px', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mo_i}": [
                ["style", "top", '-40px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '10px']
            ],
            "${_Text4}": [
                ["style", "top", '30px'],
                ["color", "color", 'rgba(28,28,27,1.00)'],
                ["style", "font-style", 'normal'],
                ["style", "font-weight", '700'],
                ["style", "left", '-20px'],
                ["style", "font-size", '51px']
            ],
            "${_Text5}": [
                ["style", "top", '98px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '1px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '112px'],
                ["style", "width", '192px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid53", tween: [ "style", "${_mo_i}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid54", tween: [ "style", "${_mo_i}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 }            ]
        }
    }
},
"mo_t": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['0px', '0px', '51px', '23px', 'auto', 'auto'],
                    id: 'mo_t',
                    text: 'Mo',
                    align: 'center',
                    font: ['lato, sans-serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mo_t}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-family", 'lato, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '51px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid57", tween: [ "color", "${_mo_t}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 500 },
                { id: "eid59", tween: [ "color", "${_mo_t}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"di_t": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['0px', '0px', '51px', '23px', 'auto', 'auto'],
                    id: 'di_t',
                    text: 'Di',
                    align: 'center',
                    font: ['lato, sans-serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_di_t}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-family", 'lato, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '51px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid62", tween: [ "color", "${_di_t}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 500 },
                { id: "eid63", tween: [ "color", "${_di_t}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"di": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Dienstag',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '57px', '244px', 'auto', 'auto'],
                    fill: ['rgba(194,191,191,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Dienstag}": [
                ["style", "top", '0px'],
                ["style", "height", '244px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '57px']
            ],
            "${symbolSelector}": [
                ["style", "height", '244px'],
                ["style", "width", '57px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "color", "${_Dienstag}", "background-color", 'rgba(28,28,27,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 500 },
                { id: "eid88", tween: [ "color", "${_Dienstag}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,28,27,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"di_info": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'di_I',
                    type: 'group',
                    rect: ['0px', '0px', '179', '124', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['15px', '97px', '164px', '56px', 'auto', 'auto'],
                        font: ['lato, sans-serif', 15, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                        id: 'Text7',
                        text: 'der Einbrüche passieren an Dienstagen',
                        align: 'left',
                        type: 'text'
                    },
                    {
                        rect: ['0px', '29px', '164px', '112px', 'auto', 'auto'],
                        font: ['lato, sans-serif', 51, 'rgba(28,28,27,1.00)', 'bold', 'none', 'normal'],
                        id: 'Text6',
                        text: '16,0%',
                        align: 'center',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text6}": [
                ["style", "top", '29px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(28,28,27,1.00)']
            ],
            "${_Text7}": [
                ["style", "top", '97px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '15px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '124px'],
                ["style", "width", '179px']
            ],
            "${_di_I}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid72", tween: [ "style", "${_di_I}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid73", tween: [ "style", "${_di_I}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 }            ]
        }
    }
},
"hover_tag": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'hover_tag',
                    type: 'image',
                    rect: ['0px', '0px', '17px', '17px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Pasted2.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hover_tag}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '17px'],
                ["style", "width", '17px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-29225239");
