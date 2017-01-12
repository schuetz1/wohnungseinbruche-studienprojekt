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
                id: 'kurve',
                type: 'image',
                rect: ['13px', '138px','594px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"kurve.svg",'0px','0px']
            },
            {
                id: 'jan2',
                type: 'rect',
                rect: ['12', '138','auto','auto','auto', 'auto']
            },
            {
                id: 'jun_info',
                type: 'rect',
                rect: ['231', '62','auto','auto','auto', 'auto']
            },
            {
                id: 'feb2',
                type: 'rect',
                rect: ['62', '187','auto','auto','auto', 'auto']
            },
            {
                id: 'mar2',
                type: 'rect',
                rect: ['118', '180','auto','auto','auto', 'auto']
            },
            {
                id: 'apr2',
                type: 'rect',
                rect: ['176', '216','auto','auto','auto', 'auto']
            },
            {
                id: 'mai2',
                type: 'rect',
                rect: ['227', '262','auto','auto','auto', 'auto']
            },
            {
                id: 'jun2',
                type: 'rect',
                rect: ['285', '242','auto','auto','auto', 'auto']
            },
            {
                id: 'jul2',
                type: 'rect',
                rect: ['335', '265','auto','auto','auto', 'auto']
            },
            {
                id: 'aug2',
                type: 'rect',
                rect: ['395', '252','auto','auto','auto', 'auto']
            },
            {
                id: 'sep2',
                type: 'rect',
                rect: ['449', '272','auto','auto','auto', 'auto']
            },
            {
                id: 'ok',
                type: 'rect',
                rect: ['494', '222','auto','auto','auto', 'auto']
            },
            {
                id: 'nov2',
                type: 'rect',
                rect: ['546', '184','auto','auto','auto', 'auto']
            },
            {
                id: 'dez2',
                type: 'rect',
                rect: ['597', '164','auto','auto','auto', 'auto']
            },
            {
                id: 'jan_t',
                type: 'rect',
                rect: ['8', '326','auto','auto','auto', 'auto']
            },
            {
                id: 'feb_t',
                type: 'rect',
                rect: ['58', '326','auto','auto','auto', 'auto']
            },
            {
                id: 'mar_t',
                type: 'rect',
                rect: ['110', '326','auto','auto','auto', 'auto']
            },
            {
                id: 'apr_t',
                type: 'rect',
                rect: ['167', '326','auto','auto','auto', 'auto']
            },
            {
                id: 'mai_t',
                type: 'rect',
                rect: ['223', '326','auto','auto','auto', 'auto']
            },
            {
                id: 'jun_t',
                type: 'rect',
                rect: ['278', '326','auto','auto','auto', 'auto']
            },
            {
                id: 'jul_t',
                type: 'rect',
                rect: ['335', '326','auto','auto','auto', 'auto']
            },
            {
                id: 'aug_t',
                type: 'rect',
                rect: ['391', '326','auto','auto','auto', 'auto']
            },
            {
                id: 'sept_t',
                type: 'rect',
                rect: ['445', '326','auto','auto','auto', 'auto']
            },
            {
                id: 'okt_t',
                type: 'rect',
                rect: ['494', '326','auto','auto','auto', 'auto']
            },
            {
                id: 'nov_t',
                type: 'rect',
                rect: ['546', '326','auto','auto','auto', 'auto']
            },
            {
                id: 'dez_t',
                type: 'rect',
                rect: ['597', '326','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'okt_t',
                symbolName: 'okt_t'
            },
            {
                id: 'apr2',
                symbolName: 'apr',
                autoPlay: {

                }
            },
            {
                id: 'aug2',
                symbolName: 'aug',
                autoPlay: {

                }
            },
            {
                id: 'jul2',
                symbolName: 'jul',
                autoPlay: {

                }
            },
            {
                id: 'jan_t',
                symbolName: 'jan_t'
            },
            {
                id: 'mar2',
                symbolName: 'mar',
                autoPlay: {

                }
            },
            {
                id: 'mai2',
                symbolName: 'mai',
                autoPlay: {

                }
            },
            {
                id: 'aug_t',
                symbolName: 'aug_t'
            },
            {
                id: 'sept_t',
                symbolName: 'sept_t'
            },
            {
                id: 'dez_t',
                symbolName: 'dez_t'
            },
            {
                id: 'jun_t',
                symbolName: 'jun_t'
            },
            {
                id: 'ok',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'mai_t',
                symbolName: 'mai_t'
            },
            {
                id: 'dez2',
                symbolName: 'dez',
                autoPlay: {

                }
            },
            {
                id: 'jun2',
                symbolName: 'jun',
                autoPlay: {

                }
            },
            {
                id: 'apr_t',
                symbolName: 'apr_t'
            },
            {
                id: 'sep2',
                symbolName: 'sep',
                autoPlay: {

                }
            },
            {
                id: 'jun_info',
                symbolName: 'jun_info'
            },
            {
                id: 'mar_t',
                symbolName: 'mar_t'
            },
            {
                id: 'nov2',
                symbolName: 'nov',
                autoPlay: {

                }
            },
            {
                id: 'feb_t',
                symbolName: 'feb_t'
            },
            {
                id: 'feb2',
                symbolName: 'feb',
                autoPlay: {

                }
            },
            {
                id: 'jul_t',
                symbolName: 'jul_t'
            },
            {
                id: 'nov_t',
                symbolName: 'nov_t'
            },
            {
                id: 'jan2',
                symbolName: 'jan',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse7Copy7}": [
                ["style", "left", '']
            ],
            "${_kurve}": [
                ["style", "top", '138px'],
                ["style", "left", '13px']
            ],
            "${_jan2}": [
                ["style", "left", '10px'],
                ["style", "top", '136px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(188,63,63,0.00)'],
                ["style", "width", '618px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
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
                { id: "eid169", tween: [ "style", "${_jan2}", "top", '136px', { fromValue: '136px'}], position: 0, duration: 0 },
                { id: "eid168", tween: [ "style", "${_jan2}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0 },
                { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_dez2}', [] ], ""], position: 0 },
                { id: "eid155", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_aug_t}', [] ], ""], position: 0 },
                { id: "eid159", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_jul_t}', [] ], ""], position: 0 },
                { id: "eid154", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_sept_t}', [] ], ""], position: 0 },
                { id: "eid156", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_okt_t}', [] ], ""], position: 0 },
                { id: "eid157", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_nov_t}', [] ], ""], position: 0 },
                { id: "eid161", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_jun_t}', [] ], ""], position: 0 },
                { id: "eid163", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_apr_t}', [] ], ""], position: 0 },
                { id: "eid160", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mai_t}', [] ], ""], position: 0 },
                { id: "eid164", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_feb_t}', [] ], ""], position: 0 },
                { id: "eid162", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mar_t}', [] ], ""], position: 0 },
                { id: "eid165", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_jan_t}', [] ], ""], position: 0 },
                { id: "eid158", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_dez_t}', [] ], ""], position: 0 },
                { id: "eid104", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_ok}', [] ], ""], position: 0 },
                { id: "eid97", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_apr2}', [] ], ""], position: 0 },
                { id: "eid98", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mar2}', [] ], ""], position: 0 },
                { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_jun2}', [] ], ""], position: 0 },
                { id: "eid95", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mai2}', [] ], ""], position: 0 },
                { id: "eid105", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_jan2}', [] ], ""], position: 0 },
                { id: "eid99", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_feb2}', [] ], ""], position: 0 },
                { id: "eid101", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_sep2}', [] ], ""], position: 0 },
                { id: "eid100", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_jul2}', [] ], ""], position: 0 },
                { id: "eid103", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_nov2}', [] ], ""], position: 0 },
                { id: "eid102", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_aug2}', [] ], ""], position: 0 },
                { id: "eid173", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_jun_info}', [] ], ""], position: 0 }            ]
        }
    }
},
"yellow_maerz": {
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
                    id: 'yellow',
                    type: 'image',
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/yellow.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_yellow}": [
                ["style", "top", '0px'],
                ["style", "height", '13px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
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
                { id: "eid21", tween: [ "style", "${_yellow}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 }            ]
        }
    }
},
"ym": {
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
                    id: 'yellow_maerz2',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'yellow_maerz2',
                symbolName: 'yellow_maerz',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
            ],
            "${_yellow_maerz2}": [
                ["style", "top", '-40px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
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
                { id: "eid27", tween: [ "style", "${_yellow_maerz2}", "top", '-40px', { fromValue: '-40px'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "transform", "${_yellow_maerz2}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_yellow_maerz2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_yellow_maerz2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid24", tween: [ "style", "${_yellow_maerz2}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
                { id: "eid14", tween: [ "transform", "${_yellow_maerz2}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 }            ]
        }
    }
},
"Symbol_1": {
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
                    rect: ['0px', '0px', '89px', '83px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '60px']
            ],
            "${_Ellipse3}": [
                ["style", "top", '146px'],
                ["color", "background-color", 'rgba(239,210,41,1.00)'],
                ["style", "height", '13px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '23px'],
                ["style", "width", '13px']
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
                { id: "eid40", tween: [ "style", "${_Ellipse3}", "height", '13px', { fromValue: '13px'}], position: 500, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Ellipse3}", "width", '13px', { fromValue: '13px'}], position: 500, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Ellipse3}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid30", tween: [ "style", "${_Ellipse3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
                { id: "eid34", tween: [ "color", "${_Ellipse3}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1.00)'}], position: 500, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Ellipse3}", "left", '23px', { fromValue: '23px'}], position: 500, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Ellipse3}", "top", '146px', { fromValue: '146px'}], position: 500, duration: 0 }            ]
        }
    }
},
"Symbol_2": {
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
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(239,210,41,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '30px'],
                ["style", "width", '30px']
            ],
            "${_Ellipse4}": [
                ["style", "top", '-40px'],
                ["style", "height", '13px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
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
                { id: "eid42", tween: [ "style", "${_Ellipse4}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid43", tween: [ "style", "${_Ellipse4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
                { id: "eid48", tween: [ "style", "${_Ellipse4}", "top", '-40px', { fromValue: '-40px'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Ellipse4}", "top", '-40px', { fromValue: '-40px'}], position: 500, duration: 0 }            ]
        }
    }
},
"Symbol_3": {
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
                    rect: ['0px', '0px', '37px', '36px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(239,210,41,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '37px']
            ],
            "${_Ellipse5}": [
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
                { id: "eid51", tween: [ "style", "${_Ellipse5}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid52", tween: [ "style", "${_Ellipse5}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 }            ]
        }
    }
},
"Symbol_4": {
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
                    rect: ['0px', '0px', '69px', '68px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse6}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '69px']
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
                { id: "eid55", tween: [ "color", "${_Ellipse6}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid56", tween: [ "color", "${_Ellipse6}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"jan": {
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
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'jan',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_jan}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
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
                { id: "eid76", tween: [ "color", "${_jan}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid88", tween: [ "color", "${_jan}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"feb": {
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
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'feb',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_feb}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
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
                { id: "eid71", tween: [ "color", "${_feb}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid83", tween: [ "color", "${_feb}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"mar": {
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
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'mar',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mar}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
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
                { id: "eid79", tween: [ "color", "${_mar}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid91", tween: [ "color", "${_mar}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"apr": {
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
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'apr',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_apr}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
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
                { id: "eid81", tween: [ "color", "${_apr}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid93", tween: [ "color", "${_apr}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"mai": {
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
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'mai',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mai}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
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
                { id: "eid75", tween: [ "color", "${_mai}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid87", tween: [ "color", "${_mai}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"jun": {
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
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'jun',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_jun}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
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
                { id: "eid74", tween: [ "color", "${_jun}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid86", tween: [ "color", "${_jun}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"jul": {
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
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'jul',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_jul}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
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
                { id: "eid78", tween: [ "color", "${_jul}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid90", tween: [ "color", "${_jul}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"aug": {
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
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'aug',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_aug}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
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
                { id: "eid72", tween: [ "color", "${_aug}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid84", tween: [ "color", "${_aug}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"sep": {
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
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'sep',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sep}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
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
                { id: "eid70", tween: [ "color", "${_sep}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid82", tween: [ "color", "${_sep}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"ok": {
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
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'okt',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_okt}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
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
                { id: "eid80", tween: [ "color", "${_okt}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid92", tween: [ "color", "${_okt}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"nov": {
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
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'nov',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_nov}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
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
                { id: "eid73", tween: [ "color", "${_nov}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid85", tween: [ "color", "${_nov}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"dez": {
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
                    rect: ['0px', '0px', '13px', '13px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'dez',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dez}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '0px'],
                ["style", "width", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '13px'],
                ["style", "width", '13px']
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
                { id: "eid77", tween: [ "color", "${_dez}", "background-color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid89", tween: [ "color", "${_dez}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"dez_t": {
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
                    rect: ['0px', '0px', '47px', '46px', 'auto', 'auto'],
                    id: 'dez',
                    text: 'Dez',
                    font: ['Verdana, Geneva, sans-serif', 10, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dez}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '47px']
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
                { id: "eid135", tween: [ "color", "${_dez}", "color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid147", tween: [ "color", "${_dez}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"nov_t": {
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
                    rect: ['0px', '0px', '47px', '46px', 'auto', 'auto'],
                    id: 'nov',
                    text: 'Nov',
                    font: ['Verdana, Geneva, sans-serif', 10, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_nov}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '47px']
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
                { id: "eid134", tween: [ "color", "${_nov}", "color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid146", tween: [ "color", "${_nov}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"okt_t": {
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
                    rect: ['0px', '0px', '47px', '46px', 'auto', 'auto'],
                    id: 'okt',
                    text: 'Okt',
                    font: ['Verdana, Geneva, sans-serif', 10, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_okt}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '47px']
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
                { id: "eid132", tween: [ "color", "${_okt}", "color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid144", tween: [ "color", "${_okt}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"sept_t": {
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
                    rect: ['0px', '0px', '47px', '46px', 'auto', 'auto'],
                    id: 'sept',
                    text: 'Sep',
                    font: ['Verdana, Geneva, sans-serif', 10, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '47px']
            ],
            "${_sept}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
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
                { id: "eid141", tween: [ "color", "${_sept}", "color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid153", tween: [ "color", "${_sept}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"aug_t": {
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
                    rect: ['0px', '0px', '47px', '46px', 'auto', 'auto'],
                    id: 'aug',
                    text: 'Aug',
                    font: ['Verdana, Geneva, sans-serif', 10, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '47px']
            ],
            "${_aug}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
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
                { id: "eid140", tween: [ "color", "${_aug}", "color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid152", tween: [ "color", "${_aug}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"jul_t": {
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
                    rect: ['0px', '0px', '47px', '46px', 'auto', 'auto'],
                    id: 'jul',
                    text: 'Jul',
                    font: ['Verdana, Geneva, sans-serif', 10, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '47px']
            ],
            "${_jul}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
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
                { id: "eid130", tween: [ "color", "${_jul}", "color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid142", tween: [ "color", "${_jul}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"jun_t": {
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
                    rect: ['0px', '0px', '47px', '46px', 'auto', 'auto'],
                    id: 'jun',
                    text: 'Jun',
                    font: ['Verdana, Geneva, sans-serif', 10, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_jun}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '47px']
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
                { id: "eid131", tween: [ "color", "${_jun}", "color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid143", tween: [ "color", "${_jun}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"mai_t": {
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
                    rect: ['0px', '0px', '47px', '46px', 'auto', 'auto'],
                    id: 'mai',
                    text: 'Mai',
                    font: ['Verdana, Geneva, sans-serif', 10, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mai}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '47px']
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
                { id: "eid139", tween: [ "color", "${_mai}", "color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid151", tween: [ "color", "${_mai}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"apr_t": {
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
                    rect: ['0px', '0px', '47px', '46px', 'auto', 'auto'],
                    id: 'apr',
                    text: 'Apr',
                    font: ['Verdana, Geneva, sans-serif', 10, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_apr}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '47px']
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
                { id: "eid133", tween: [ "color", "${_apr}", "color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid145", tween: [ "color", "${_apr}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"mar_t": {
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
                    rect: ['0px', '0px', '47px', '46px', 'auto', 'auto'],
                    id: 'mar',
                    text: 'Mar',
                    font: ['Verdana, Geneva, sans-serif', 10, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mar}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '47px']
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
                { id: "eid138", tween: [ "color", "${_mar}", "color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid150", tween: [ "color", "${_mar}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"feb_t": {
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
                    rect: ['0px', '0px', '47px', '46px', 'auto', 'auto'],
                    id: 'feb',
                    text: 'Feb',
                    font: ['Verdana, Geneva, sans-serif', 10, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_feb}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '47px']
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
                { id: "eid137", tween: [ "color", "${_feb}", "color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid149", tween: [ "color", "${_feb}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"jan_t": {
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
                    rect: ['0px', '0px', '47px', '46px', 'auto', 'auto'],
                    id: 'jan',
                    text: 'Jan',
                    font: ['Verdana, Geneva, sans-serif', 10, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_jan}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '47px']
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
                { id: "eid136", tween: [ "color", "${_jan}", "color", 'rgba(239,210,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
                { id: "eid148", tween: [ "color", "${_jan}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,210,41,1)'}], position: 500, duration: 500 }            ]
        }
    }
},
"jun_i": {
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
                    rect: ['11px', '91px', '181px', '30px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 18, 'rgba(239,210,41,1)', '300', 'none', 'normal'],
                    id: 'Text3',
                    text: 'Ein leichter Anstieg?',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['4px', '116px', '165px', '30px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 10, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    id: 'Text4',
                    text: 'Viele Wohnungen stehen in den Sommerferien leer!',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['0px', '0px', '281px', '95px', 'auto', 'auto'],
                    font: ['lato, sans-serif', 76, 'rgba(239,210,41,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: '4372<br>',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '146px'],
                ["style", "width", '281px']
            ],
            "${_Text3}": [
                ["style", "top", '91px'],
                ["style", "font-weight", '300'],
                ["style", "left", '11px'],
                ["style", "font-size", '18px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(239,210,41,1.00)'],
                ["style", "font-family", 'lato, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '76px']
            ],
            "${_Text4}": [
                ["style", "top", '116px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '4px'],
                ["style", "font-size", '10px']
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
},
"jun_info": {
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
                    id: 'jun_i',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'jun_i',
                symbolName: 'jun_i',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_jun_i}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '146px'],
                ["style", "width", '281px']
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
                { id: "eid171", tween: [ "style", "${_jun_i}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid172", tween: [ "style", "${_jun_i}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-53668602");
