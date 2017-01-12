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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.getSymbol("aug_t").stop();
         
         sym.getSymbol("sept_t").stop();
         
         sym.getSymbol("okt_t").stop();
         
         sym.getSymbol("nov_t").stop();
         
         sym.getSymbol("dez_t").stop();
         
         sym.getSymbol("jan_t").stop();
         
         sym.getSymbol("feb_t").stop();
         
         sym.getSymbol("mar_t").stop();
         
         sym.getSymbol("apr_t").stop();
         
         sym.getSymbol("mai_t").stop();
         
         sym.getSymbol("jun_t").stop();
         
         sym.getSymbol("jul_t").stop();
         
         sym.getSymbol("jan2").stop();
         
         sym.getSymbol("feb2").stop();
         
         sym.getSymbol("mar2").stop();
         
         sym.getSymbol("apr2").stop();
         
         sym.getSymbol("jun2").stop();
         
         sym.getSymbol("jul2").stop();
         
         sym.getSymbol("aug2").stop();
         
         sym.getSymbol("sep2").stop();
         
         sym.getSymbol("ok").stop();
         
         sym.getSymbol("nov2").stop();
         
         sym.getSymbol("dez2").stop();
         
         sym.getSymbol("mai2").stop();
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_dez2}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("dez_t").play();
         
         sym.getSymbol("dez2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dez2}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("dez2").play();
         
         sym.getSymbol("dez_t").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nov2}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("nov_t").play();
         
         sym.getSymbol("nov2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nov2}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("nov_t").play();
         
         sym.getSymbol("nov2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ok}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("okt_t").play();
         
         sym.getSymbol("ok").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ok}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("okt_t").play();
         
         sym.getSymbol("ok").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sep2}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("sept_t").play();
         
         sym.getSymbol("sep2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sep2}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("sept_t").play();
         
         sym.getSymbol("sep2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_aug2}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("aug_t").play();
         
         sym.getSymbol("aug2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_aug2}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("aug_t").play();
         
         sym.getSymbol("aug2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jul2}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("jul_t").play();
         
         sym.getSymbol("jul2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jul2}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("jul_t").play();
         
         sym.getSymbol("jul2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jun2}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("jun2").play();
         
         sym.getSymbol("jun_t").play();
         
         sym.getSymbol("jun_info").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jun2}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("jun2").play();
         
         sym.getSymbol("jun_t").play();
         
         sym.getSymbol("jun_info").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mai2}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("mai2").play();
         
         sym.getSymbol("mai_t").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mai2}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("mai2").play();
         
         sym.getSymbol("mai_t").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_apr2}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("apr2").play();
         
         sym.getSymbol("apr_t").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_apr2}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("apr2").play();
         
         sym.getSymbol("apr_t").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mar2}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("mar2").play();
         
         sym.getSymbol("mar_t").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mar2}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("mar2").play();
         
         sym.getSymbol("mar_t").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_feb2}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("feb2").play();
         
         sym.getSymbol("feb_t").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_feb2}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("feb2").play();
         
         sym.getSymbol("feb_t").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jan2}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         sym.getSymbol("jan2").play();
         
         sym.getSymbol("jan_t").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jan2}", "mouseout", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn die Maus vom Objekt weg bewegt wird
         sym.getSymbol("jan2").play();
         
         sym.getSymbol("jan_t").play();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'yellow_maerz'
   (function(symbolName) {   
   
   })("yellow_maerz");
   //Edge symbol end:'yellow_maerz'

   //=========================================================
   
   //Edge symbol: 'ym'
   (function(symbolName) {   
   
   })("ym");
   //Edge symbol end:'ym'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse5}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         
      });
      //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Ellipse6}", "mouseover", function(sym, e) {
         // Hier Code einfügen, der ausgeführt werden soll, wenn sich die Maus über dem Objekt befindet
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

   //=========================================================
   
   //Edge symbol: 'jan'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("jan");
   //Edge symbol end:'jan'

   //=========================================================
   
   //Edge symbol: 'feb'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("feb");
   //Edge symbol end:'feb'

   //=========================================================
   
   //Edge symbol: 'mar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("mar");
   //Edge symbol end:'mar'

   //=========================================================
   
   //Edge symbol: 'apr'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("apr");
   //Edge symbol end:'apr'

   //=========================================================
   
   //Edge symbol: 'mai'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("mai");
   //Edge symbol end:'mai'

   //=========================================================
   
   //Edge symbol: 'jun'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("jun");
   //Edge symbol end:'jun'

   //=========================================================
   
   //Edge symbol: 'jul'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("jul");
   //Edge symbol end:'jul'

   //=========================================================
   
   //Edge symbol: 'aug'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop();

      });
      //Edge binding end

   })("aug");
   //Edge symbol end:'aug'

   //=========================================================
   
   //Edge symbol: 'sep'
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

   })("sep");
   //Edge symbol end:'sep'

   //=========================================================
   
   //Edge symbol: 'ok'
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

   })("ok");
   //Edge symbol end:'ok'

   //=========================================================
   
   //Edge symbol: 'nov'
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

   })("nov");
   //Edge symbol end:'nov'

   //=========================================================
   
   //Edge symbol: 'dez'
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

   })("dez");
   //Edge symbol end:'dez'

   //=========================================================
   
   //Edge symbol: 'dez_t'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // Hier Code einfügen
         sym.stop("dez_t");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Hier Code einfügen
         sym.stop("dez_t");
         

      });
      //Edge binding end

   })("dez_t");
   //Edge symbol end:'dez_t'

   //=========================================================
   
   //Edge symbol: 'nov_t'
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

   })("nov_t");
   //Edge symbol end:'nov_t'

   //=========================================================
   
   //Edge symbol: 'okt_t'
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

   })("okt_t");
   //Edge symbol end:'okt_t'

   //=========================================================
   
   //Edge symbol: 'sept_t'
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

   })("sept_t");
   //Edge symbol end:'sept_t'

   //=========================================================
   
   //Edge symbol: 'aug_t'
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

   })("aug_t");
   //Edge symbol end:'aug_t'

   //=========================================================
   
   //Edge symbol: 'jul_t'
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

   })("jul_t");
   //Edge symbol end:'jul_t'

   //=========================================================
   
   //Edge symbol: 'jun_t'
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

   })("jun_t");
   //Edge symbol end:'jun_t'

   //=========================================================
   
   //Edge symbol: 'mai_t'
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

   })("mai_t");
   //Edge symbol end:'mai_t'

   //=========================================================
   
   //Edge symbol: 'apr_t'
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

   })("apr_t");
   //Edge symbol end:'apr_t'

   //=========================================================
   
   //Edge symbol: 'mar_t'
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

   })("mar_t");
   //Edge symbol end:'mar_t'

   //=========================================================
   
   //Edge symbol: 'feb_t'
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

   })("feb_t");
   //Edge symbol end:'feb_t'

   //=========================================================
   
   //Edge symbol: 'jan_t'
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

   })("jan_t");
   //Edge symbol end:'jan_t'

   //=========================================================
   
   //Edge symbol: 'jun_i'
   (function(symbolName) {   
   
   })("jun_i");
   //Edge symbol end:'jun_i'

   //=========================================================
   
   //Edge symbol: 'jun_info'
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

   })("jun_info");
   //Edge symbol end:'jun_info'

})(jQuery, AdobeEdge, "EDGE-53668602");