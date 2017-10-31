// Compiled by ClojureScript 1.9.293 {}
goog.provide('show.slides.views');
goog.require('cljs.core');
show.slides.views.primary = "#2A3764";
show.slides.views.secondary = "#D36700";
show.slides.views.secondary_bgcolor = "#D7CFC3";
show.slides.views.line_width = (4);
show.slides.views.font_size = (32);
show.slides.views.h_line = (function show$slides$views$h_line(x1,x2,y,color,arrow_QMARK_){
if((x2 <= x1)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"fill","fill",883462889),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x1,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x2 + (2)),new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"y2","y2",-718691301),y,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),show.slides.views.line_width], null)], null),(cljs.core.truth_(arrow_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y,(x2 + (25)),(y - (10)),(x2 + (25)),(y + (10))], null)], null)], null):null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"fill","fill",883462889),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x1,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x2 - (2)),new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"y2","y2",-718691301),y,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),show.slides.views.line_width], null)], null),(cljs.core.truth_(arrow_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y,(x2 - (25)),(y - (10)),(x2 - (25)),(y + (10))], null)], null)], null):null)], null);
}
});
show.slides.views.v_line = (function show$slides$views$v_line(y1,y2,x,color,arrow_QMARK_){
if((y2 <= y1)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"fill","fill",883462889),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y1","y1",589123466),y1,new cljs.core.Keyword(null,"y2","y2",-718691301),(y2 + (2)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),show.slides.views.line_width], null)], null),(cljs.core.truth_(arrow_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y2,(x - (10)),(y2 + (25)),(x + (10)),(y2 + (25))], null)], null)], null):null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"fill","fill",883462889),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y1","y1",589123466),y1,new cljs.core.Keyword(null,"y2","y2",-718691301),(y2 - (2)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),show.slides.views.line_width], null)], null),(cljs.core.truth_(arrow_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y2,(x - (10)),(y2 - (25)),(x + (10)),(y2 - (25))], null)], null)], null):null)], null);
}
});
show.slides.views.rect_2 = (function show$slides$views$rect_2(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50314 = arguments.length;
var i__48850__auto___50315 = (0);
while(true){
if((i__48850__auto___50315 < len__48849__auto___50314)){
args__48856__auto__.push((arguments[i__48850__auto___50315]));

var G__50316 = (i__48850__auto___50315 + (1));
i__48850__auto___50315 = G__50316;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((7) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((7)),(0),null)):null);
return show.slides.views.rect_2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),argseq__48857__auto__);
});

show.slides.views.rect_2.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,width,height,text1,text2,text3,text4){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),show.slides.views.line_width,new cljs.core.Keyword(null,"stroke","stroke",1741823555),show.slides.views.primary,new cljs.core.Keyword(null,"fill","fill",883462889),show.slides.views.secondary_bgcolor], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + (width / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),((y + (height / (4))) + (show.slides.views.font_size / (2))),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"fill","fill",883462889),show.slides.views.primary], null),text1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + (width / (20))),new cljs.core.Keyword(null,"y","y",-1757859776),((y + ((2) * (height / (4)))) + (10)),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"left",new cljs.core.Keyword(null,"fill","fill",883462889),show.slides.views.primary], null),text2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + (width / (20))),new cljs.core.Keyword(null,"y","y",-1757859776),((y + ((2) * (height / (4)))) + (60)),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"left",new cljs.core.Keyword(null,"fill","fill",883462889),show.slides.views.primary], null),text3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + (width / (20))),new cljs.core.Keyword(null,"y","y",-1757859776),((y + ((2) * (height / (4)))) + (110)),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"left",new cljs.core.Keyword(null,"fill","fill",883462889),show.slides.views.primary], null),text4], null)], null);
});

show.slides.views.rect_2.cljs$lang$maxFixedArity = (7);

show.slides.views.rect_2.cljs$lang$applyTo = (function (seq50306){
var G__50307 = cljs.core.first.call(null,seq50306);
var seq50306__$1 = cljs.core.next.call(null,seq50306);
var G__50308 = cljs.core.first.call(null,seq50306__$1);
var seq50306__$2 = cljs.core.next.call(null,seq50306__$1);
var G__50309 = cljs.core.first.call(null,seq50306__$2);
var seq50306__$3 = cljs.core.next.call(null,seq50306__$2);
var G__50310 = cljs.core.first.call(null,seq50306__$3);
var seq50306__$4 = cljs.core.next.call(null,seq50306__$3);
var G__50311 = cljs.core.first.call(null,seq50306__$4);
var seq50306__$5 = cljs.core.next.call(null,seq50306__$4);
var G__50312 = cljs.core.first.call(null,seq50306__$5);
var seq50306__$6 = cljs.core.next.call(null,seq50306__$5);
var G__50313 = cljs.core.first.call(null,seq50306__$6);
var seq50306__$7 = cljs.core.next.call(null,seq50306__$6);
return show.slides.views.rect_2.cljs$core$IFn$_invoke$arity$variadic(G__50307,G__50308,G__50309,G__50310,G__50311,G__50312,G__50313,seq50306__$7);
});

show.slides.views.events_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"domino-1","domino-1",-875516382),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [show.slides.views.rect_2,(300),(200),(500),(350),"Transmission events","1. Contamination","2. Replication-> decay","3. Replication-> latency"], null),new cljs.core.Keyword(null,"domino-2","domino-2",716524626),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [show.slides.views.rect_2,(1100),(200),(500),(350),"Primay infection","1) Founder effect","2) Founder population","3) Complementation"], null),new cljs.core.Keyword(null,"1->2","1->2",-970688781),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [show.slides.views.h_line,(810),(1090),(375),"white",true], null)], null);
show.slides.views.domino_1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slide-body","div.slide-body",-1103311965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"40px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0)], null)], null),(function (){var width = (1920);
var height = (1056);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"view-box","view-box",-1792199155),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1920),(1056)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"domino-1","domino-1",-875516382).cljs$core$IFn$_invoke$arity$1(show.slides.views.events_map)], null)], null);
})()], null);
show.slides.views.domino_2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slide-body","div.slide-body",-1103311965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"40px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0)], null)], null),(function (){var width = (1920);
var height = (1056);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"view-box","view-box",-1792199155),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1920),(1056)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"domino-1","domino-1",-875516382).cljs$core$IFn$_invoke$arity$1(show.slides.views.events_map),new cljs.core.Keyword(null,"domino-2","domino-2",716524626).cljs$core$IFn$_invoke$arity$1(show.slides.views.events_map),new cljs.core.Keyword(null,"1->2","1->2",-970688781).cljs$core$IFn$_invoke$arity$1(show.slides.views.events_map)], null)], null);
})()], null);

//# sourceMappingURL=views.js.map?rel=1509481863805