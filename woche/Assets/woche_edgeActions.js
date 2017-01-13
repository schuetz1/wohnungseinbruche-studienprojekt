
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_mo}","mouseover",function(sym,e){sym.getSymbol("mo").play();sym.getSymbol("mo_info").play();sym.getSymbol("mo_t2").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_mo}","mouseout",function(sym,e){sym.getSymbol("mo").play();sym.getSymbol("mo_info").play();sym.getSymbol("mo_t2").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_di}","mouseover",function(sym,e){sym.getSymbol("di").play();sym.getSymbol("di_info").play();sym.getSymbol("di_t2").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_di}","mouseout",function(sym,e){sym.getSymbol("di").play();sym.getSymbol("di_info").play();sym.getSymbol("di_t2").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_moon_black}","click",function(sym,e){sym.$("NACHTKURVE").show();sym.$("_22").show();sym.$("moon_tuerkis").show();sym.$("moon_black").hide();sym.$("NACHT-INFO").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sun_black3}","click",function(sym,e){sym.$("sun_yellow").show();sym.$("tag").show();sym.$("TAG-INFO").show();sym.$("sun_black3").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sun_yellow}","click",function(sym,e){sym.$("sun_black3").show();sym.$("sun_yellow").hide();sym.$("tag").hide();sym.$("TAG-INFO").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_moon_tuerkis}","click",function(sym,e){sym.$("NACHT-INFO").hide();sym.$("moon_tuerkis").hide();sym.$("moon_black").show();sym.$("NACHTKURVE").hide();sym.$("_22").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__22}","mouseover",function(sym,e){sym.$("info_22").show();sym.$("Ellipse_dashed").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__22}","mouseout",function(sym,e){sym.$("info_22").hide();sym.$("Ellipse_dashed").hide();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'mo'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
})("mo");
//Edge symbol end:'mo'

//=========================================================

//Edge symbol: 'mo_i'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
})("mo_i");
//Edge symbol end:'mo_i'

//=========================================================

//Edge symbol: 'mo_info'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
})("mo_info");
//Edge symbol end:'mo_info'

//=========================================================

//Edge symbol: 'mo_t'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
})("mo_t");
//Edge symbol end:'mo_t'

//=========================================================

//Edge symbol: 'di_t'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
})("di_t");
//Edge symbol end:'di_t'

//=========================================================

//Edge symbol: 'di'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Dienstag}","mouseover",function(sym,e){sym.getSymbol("di_info").play();sym.getSymbol("di_t2").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Dienstag}","mouseout",function(sym,e){sym.getSymbol("di_t2").play();sym.getSymbol("di_info").play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
})("di");
//Edge symbol end:'di'

//=========================================================

//Edge symbol: 'di_info'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
})("di_info");
//Edge symbol end:'di_info'

//=========================================================

//Edge symbol: 'hover_tag'
(function(symbolName){})("hover_tag");
//Edge symbol end:'hover_tag'
})(jQuery,AdobeEdge,"EDGE-29225239");