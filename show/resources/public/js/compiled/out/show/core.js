// Compiled by ClojureScript 1.9.293 {}
goog.provide('show.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('show.slides.views');
goog.require('show.slides.slides');
goog.require('re_frisk.core');
goog.require('cljs.spec');
goog.require('re_frame.core');
show.core.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("slideshow","current-slide","slideshow/current-slide",-155253795),(0),new cljs.core.Keyword("slideshow","broken-slide","slideshow/broken-slide",-1094374864),"x"], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("slideshow","initialize","slideshow/initialize",351030339),(function (p__63549){
var map__63550 = p__63549;
var map__63550__$1 = ((((!((map__63550 == null)))?((((map__63550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63550):map__63550);
var db = cljs.core.get.call(null,map__63550__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),show.core.initial_state], null);
}));
show.core.log_to_re_frisk = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"log-to-re-frisk","log-to-re-frisk",-389301413),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
re_frisk.core.add_in_data.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-log","event-log",-922826454),cljs.core.first.call(null,cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null))),new cljs.core.Keyword(null,"before","before",-1633692388)], null),context);

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
re_frisk.core.add_in_data.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-log","event-log",-922826454),cljs.core.first.call(null,cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null))),new cljs.core.Keyword(null,"before","before",-1633692388)], null),context);

return context;
}));
show.core.check_int_spec = (function show$core$check_int_spec(val){
return cljs.spec.valid_QMARK_.call(null,cljs.spec.spec_impl.call(null,new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_,null,null),val);
});
show.core.check_slide_specs = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"check-slides-specs","check-slides-specs",-642887255),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var current_slide = cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("slideshow","current-slide","slideshow/current-slide",-155253795)], null));
var spec_result = show.core.check_int_spec.call(null,current_slide);
cljs.core.println.call(null,"Current Slide: ",current_slide);

cljs.core.println.call(null,"Spec Result: ",spec_result);

if(cljs.core.truth_(spec_result)){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("spec","success","spec/success",1885793723)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first.call(null,cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null))),new cljs.core.Keyword(null,"message","message",-406056002),":slideshow/current-slide is an int!"], null));
} else {
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.PersistentVector.EMPTY);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("slideshow","next-slide","slideshow/next-slide",-1587607319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [show.core.log_to_re_frisk,show.core.check_slide_specs], null),(function (p__63552){
var map__63553 = p__63552;
var map__63553__$1 = ((((!((map__63553 == null)))?((((map__63553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63553):map__63553);
var db = cljs.core.get.call(null,map__63553__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("slideshow","current-slide","slideshow/current-slide",-155253795),(((new cljs.core.Keyword("slideshow","current-slide","slideshow/current-slide",-155253795).cljs$core$IFn$_invoke$arity$1(db) < cljs.core.count.call(null,show.slides.slides.slides_order)))?((1) + new cljs.core.Keyword("slideshow","current-slide","slideshow/current-slide",-155253795).cljs$core$IFn$_invoke$arity$1(db)):new cljs.core.Keyword("slideshow","current-slide","slideshow/current-slide",-155253795).cljs$core$IFn$_invoke$arity$1(db)))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("slideshow","prev-slide","slideshow/prev-slide",181598085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [show.core.log_to_re_frisk,show.core.check_slide_specs], null),(function (p__63555){
var map__63556 = p__63555;
var map__63556__$1 = ((((!((map__63556 == null)))?((((map__63556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63556):map__63556);
var db = cljs.core.get.call(null,map__63556__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _ = cljs.core.get.call(null,map__63556__$1,new cljs.core.Keyword(null,"_","_",1453416199));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("slideshow","current-slide","slideshow/current-slide",-155253795),(((new cljs.core.Keyword("slideshow","current-slide","slideshow/current-slide",-155253795).cljs$core$IFn$_invoke$arity$1(db) > (0)))?(new cljs.core.Keyword("slideshow","current-slide","slideshow/current-slide",-155253795).cljs$core$IFn$_invoke$arity$1(db) - (1)):new cljs.core.Keyword("slideshow","current-slide","slideshow/current-slide",-155253795).cljs$core$IFn$_invoke$arity$1(db)))], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("slideshow","current-slide","slideshow/current-slide",-155253795),(function (db,_){
return new cljs.core.Keyword("slideshow","current-slide","slideshow/current-slide",-155253795).cljs$core$IFn$_invoke$arity$1(db);
}));
show.core.slideshow = (function show$core$slideshow(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slideshow-half-width","div.slideshow-half-width",2096438132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slide","div.slide",1548966497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,show.slides.slides.slides_order,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("slideshow","current-slide","slideshow/current-slide",-155253795)], null))))], null)], null)], null);
});
show.core.mount_root = (function show$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [show.core.slideshow], null),document.getElementById("app"));
});
show.core.on_jsload = (function show$core$on_jsload(){
return show.core.mount_root.call(null);
});
show.core.run = (function show$core$run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("slideshow","initialize","slideshow/initialize",351030339)], null));

re_frisk.core.enable_re_frisk_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));

return show.core.mount_root.call(null);
});
goog.exportSymbol('show.core.run', show.core.run);

//# sourceMappingURL=core.js.map?rel=1509481946079