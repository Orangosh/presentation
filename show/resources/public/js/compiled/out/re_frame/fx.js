// Compiled by ClojureScript 1.9.293 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__50044){
var vec__50045 = p__50044;
var k = cljs.core.nth.call(null,vec__50045,(0),null);
var value = cljs.core.nth.call(null,vec__50045,(1),null);
var temp__6751__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__6751__auto__)){
var effect_fn = temp__6751__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__50048 = cljs.core.seq.call(null,value);
var chunk__50049 = null;
var count__50050 = (0);
var i__50051 = (0);
while(true){
if((i__50051 < count__50050)){
var map__50052 = cljs.core._nth.call(null,chunk__50049,i__50051);
var map__50052__$1 = ((((!((map__50052 == null)))?((((map__50052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50052):map__50052);
var effect = map__50052__$1;
var ms = cljs.core.get.call(null,map__50052__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__50052__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__50048,chunk__50049,count__50050,i__50051,map__50052,map__50052__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__50048,chunk__50049,count__50050,i__50051,map__50052,map__50052__$1,effect,ms,dispatch))
,ms);
}

var G__50056 = seq__50048;
var G__50057 = chunk__50049;
var G__50058 = count__50050;
var G__50059 = (i__50051 + (1));
seq__50048 = G__50056;
chunk__50049 = G__50057;
count__50050 = G__50058;
i__50051 = G__50059;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__50048);
if(temp__6753__auto__){
var seq__50048__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50048__$1)){
var c__48539__auto__ = cljs.core.chunk_first.call(null,seq__50048__$1);
var G__50060 = cljs.core.chunk_rest.call(null,seq__50048__$1);
var G__50061 = c__48539__auto__;
var G__50062 = cljs.core.count.call(null,c__48539__auto__);
var G__50063 = (0);
seq__50048 = G__50060;
chunk__50049 = G__50061;
count__50050 = G__50062;
i__50051 = G__50063;
continue;
} else {
var map__50054 = cljs.core.first.call(null,seq__50048__$1);
var map__50054__$1 = ((((!((map__50054 == null)))?((((map__50054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50054):map__50054);
var effect = map__50054__$1;
var ms = cljs.core.get.call(null,map__50054__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__50054__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__50048,chunk__50049,count__50050,i__50051,map__50054,map__50054__$1,effect,ms,dispatch,seq__50048__$1,temp__6753__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__50048,chunk__50049,count__50050,i__50051,map__50054,map__50054__$1,effect,ms,dispatch,seq__50048__$1,temp__6753__auto__))
,ms);
}

var G__50064 = cljs.core.next.call(null,seq__50048__$1);
var G__50065 = null;
var G__50066 = (0);
var G__50067 = (0);
seq__50048 = G__50064;
chunk__50049 = G__50065;
count__50050 = G__50066;
i__50051 = G__50067;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__50068 = cljs.core.seq.call(null,value);
var chunk__50069 = null;
var count__50070 = (0);
var i__50071 = (0);
while(true){
if((i__50071 < count__50070)){
var event = cljs.core._nth.call(null,chunk__50069,i__50071);
re_frame.router.dispatch.call(null,event);

var G__50072 = seq__50068;
var G__50073 = chunk__50069;
var G__50074 = count__50070;
var G__50075 = (i__50071 + (1));
seq__50068 = G__50072;
chunk__50069 = G__50073;
count__50070 = G__50074;
i__50071 = G__50075;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__50068);
if(temp__6753__auto__){
var seq__50068__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50068__$1)){
var c__48539__auto__ = cljs.core.chunk_first.call(null,seq__50068__$1);
var G__50076 = cljs.core.chunk_rest.call(null,seq__50068__$1);
var G__50077 = c__48539__auto__;
var G__50078 = cljs.core.count.call(null,c__48539__auto__);
var G__50079 = (0);
seq__50068 = G__50076;
chunk__50069 = G__50077;
count__50070 = G__50078;
i__50071 = G__50079;
continue;
} else {
var event = cljs.core.first.call(null,seq__50068__$1);
re_frame.router.dispatch.call(null,event);

var G__50080 = cljs.core.next.call(null,seq__50068__$1);
var G__50081 = null;
var G__50082 = (0);
var G__50083 = (0);
seq__50068 = G__50080;
chunk__50069 = G__50081;
count__50070 = G__50082;
i__50071 = G__50083;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1509481863372