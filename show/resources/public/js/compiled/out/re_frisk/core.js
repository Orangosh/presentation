// Compiled by ClojureScript 1.9.293 {}
goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('re_frisk.devtool');
goog.require('re_frisk.ui');
goog.require('reagent.core');
goog.require('re_frisk.data');
goog.require('re_frame.core');
goog.require('datafrisk.core');
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_events,cljs.core.conj,value);
});
re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.re_frisk_shell,re_frisk.data.re_frame_data,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),re_frisk.devtool.open_debugger_window], null),params)], null),div);
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50272 = arguments.length;
var i__48850__auto___50273 = (0);
while(true){
if((i__48850__auto___50273 < len__48849__auto___50272)){
args__48856__auto__.push((arguments[i__48850__auto___50273]));

var G__50274 = (i__48850__auto___50273 + (1));
i__48850__auto___50273 = G__50274;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});

re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709),(function (db,_){
return db;
}));

cljs.core.reset_BANG_.call(null,re_frisk.data.re_frame_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db","app-db",865606302),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709)], null))], null));

cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

re_frame.core.add_post_event_callback.call(null,re_frisk.core.post_event_callback);

return setTimeout(re_frisk.core.render_re_frisk,(100),cljs.core.first.call(null,params));
}
});

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq50271){
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50271));
});

re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50276 = arguments.length;
var i__48850__auto___50277 = (0);
while(true){
if((i__48850__auto___50277 < len__48849__auto___50276)){
args__48856__auto__.push((arguments[i__48850__auto___50277]));

var G__50278 = (i__48850__auto___50277 + (1));
i__48850__auto___50277 = G__50278;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});

re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

return setTimeout(re_frisk.core.render_re_frisk,(100),cljs.core.first.call(null,params));
}
});

re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq50275){
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50275));
});

re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
} else {
return null;
}
});
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
} else {
return null;
}
});
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"events","events",1792552201)], null),events);

cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"subs","subs",-186681991)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__50279_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__50279_SHARP_],[re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50279_SHARP_], null))]);
}),subs)));

var seq__50284 = cljs.core.seq.call(null,subs);
var chunk__50285 = null;
var count__50286 = (0);
var i__50287 = (0);
while(true){
if((i__50287 < count__50286)){
var s = cljs.core._nth.call(null,chunk__50285,i__50287);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__50288 = seq__50284;
var G__50289 = chunk__50285;
var G__50290 = count__50286;
var G__50291 = (i__50287 + (1));
seq__50284 = G__50288;
chunk__50285 = G__50289;
count__50286 = G__50290;
i__50287 = G__50291;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__50284);
if(temp__6753__auto__){
var seq__50284__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50284__$1)){
var c__48539__auto__ = cljs.core.chunk_first.call(null,seq__50284__$1);
var G__50292 = cljs.core.chunk_rest.call(null,seq__50284__$1);
var G__50293 = c__48539__auto__;
var G__50294 = cljs.core.count.call(null,c__48539__auto__);
var G__50295 = (0);
seq__50284 = G__50292;
chunk__50285 = G__50293;
count__50286 = G__50294;
i__50287 = G__50295;
continue;
} else {
var s = cljs.core.first.call(null,seq__50284__$1);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__50296 = cljs.core.next.call(null,seq__50284__$1);
var G__50297 = null;
var G__50298 = (0);
var G__50299 = (0);
seq__50284 = G__50296;
chunk__50285 = G__50297;
count__50286 = G__50298;
i__50287 = G__50299;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,view);
} else {
return null;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",-658524246),(function (db,p__50300){
var vec__50301 = p__50300;
var _ = cljs.core.nth.call(null,vec__50301,(0),null);
var value = cljs.core.nth.call(null,vec__50301,(1),null);
return value;
}));

//# sourceMappingURL=core.js.map?rel=1509481863761