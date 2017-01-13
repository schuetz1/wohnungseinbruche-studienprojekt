/***********************
* Adobe Edge Animate-Aktionen für Composition
*
* Bearbeiten Sie diese Datei mit Vorsicht. Achten Sie darauf, dass 
* Funktionssignaturen und Kommentare, die mit „Edge“ anfangen, beibehalten werden, 
* damit Sie mit diesen Aktionen weiterhin in Adobe Edge Animate interagieren können.
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // Aliase für häufig verwendete Edge-Klassen

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_mo}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("mo").play();
         
         sym.getSymbol("mo_info").play();
         sym.getSymbol("mo_t2").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mo}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("mo").play();
         
         sym.getSymbol("mo_info").play();
         sym.getSymbol("mo_t2").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_di}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("di").play();
         
         sym.getSymbol("di_info").play();
         
         sym.getSymbol("di_t2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_di}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("di").play();
         
         sym.getSymbol("di_info").play();
         
         sym.getSymbol("di_t2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_moon_black}", "click", function(sym, e) {
         // Hier Code für Mausklick einfügen
         
         // Element einblenden 
         sym.$("NACHTKURVE").show();
         // Element einblenden 
         sym.$("_22").show();
         
         
         // Element einblenden 
         sym.$("moon_tuerkis").show();
         
         
         // Element ausblenden 
         sym.$("moon_black").hide();
         
         // Element einblenden 
         sym.$("NACHT-INFO").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sun_black3}", "click", function(sym, e) {
         // Hier Code für Mausklick einfügen
         // Element einblenden 
         sym.$("sun_yellow").show();
         
         
         // Element einblenden 
         
         
         // Element einblenden 
         sym.$("tag").show();
         // Element einblenden 
         sym.$("TAG-INFO").show();
         
         
         // Element ausblenden 
         sym.$("sun_black3").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sun_yellow}", "click", function(sym, e) {
         // Hier Code für Mausklick einfügen
         // Element einblenden 
         sym.$("sun_black3").show();
         
         // Element ausblenden 
         sym.$("sun_yellow").hide();
         
         // Element ausblenden 
         sym.$("tag").hide();
         // Element ausblenden 
         sym.$("TAG-INFO").hide();
         
         
         // Element ausblenden 
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_moon_tuerkis}", "click", function(sym, e) {
         // Hier Code für Mausklick einfügen
         // Element ausblenden 
         sym.$("NACHT-INFO").hide();
         
         // Element ausblenden 
         sym.$("moon_tuerkis").hide();
         
         // Element einblenden 
         sym.$("moon_black").show();
         
         // Element ausblenden 
         sym.$("NACHTKURVE").hide();
         // Element ausblenden 
         sym.$("_22").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__22}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         // Element einblenden 
         sym.$("info_22").show();
         
         // Element einblenden 
         sym.$("Ellipse_dashed").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__22}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         // Element ausblenden 
         sym.$("info_22").hide();
         
         // Element ausblenden 
         sym.$("Ellipse_dashed").hide();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'mo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("mo");
   //Edge symbol end:'mo'

   //=========================================================
   
   //Edge symbol: 'mo_i'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("mo_i");
   //Edge symbol end:'mo_i'

   //=========================================================
   
   //Edge symbol: 'mo_info'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("mo_info");
   //Edge symbol end:'mo_info'

   //=========================================================
   
   //Edge symbol: 'mo_t'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("mo_t");
   //Edge symbol end:'mo_t'

   //=========================================================
   
   //Edge symbol: 'di_t'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("di_t");
   //Edge symbol end:'di_t'

   //=========================================================
   
   //Edge symbol: 'di'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Dienstag}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("di_info").play();
         
         sym.getSymbol("di_t2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Dienstag}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("di_t2").play();
         
         sym.getSymbol("di_info").play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("di");
   //Edge symbol end:'di'

   //=========================================================
   
   //Edge symbol: 'di_info'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("di_info");
   //Edge symbol end:'di_info'

   //=========================================================
   
   //Edge symbol: 'hover_tag'
   (function(symbolName) {   
   
   })("hover_tag");
   //Edge symbol end:'hover_tag'

})(jQuery, AdobeEdge, "EDGE-29225239");