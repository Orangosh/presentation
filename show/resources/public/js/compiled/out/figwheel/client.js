// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args59119 = [];
var len__48849__auto___59122 = arguments.length;
var i__48850__auto___59123 = (0);
while(true){
if((i__48850__auto___59123 < len__48849__auto___59122)){
args59119.push((arguments[i__48850__auto___59123]));

var G__59124 = (i__48850__auto___59123 + (1));
i__48850__auto___59123 = G__59124;
continue;
} else {
}
break;
}

var G__59121 = args59119.length;
switch (G__59121) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59119.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__48856__auto__ = [];
var len__48849__auto___59127 = arguments.length;
var i__48850__auto___59128 = (0);
while(true){
if((i__48850__auto___59128 < len__48849__auto___59127)){
args__48856__auto__.push((arguments[i__48850__auto___59128]));

var G__59129 = (i__48850__auto___59128 + (1));
i__48850__auto___59128 = G__59129;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq59126){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59126));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__48856__auto__ = [];
var len__48849__auto___59131 = arguments.length;
var i__48850__auto___59132 = (0);
while(true){
if((i__48850__auto___59132 < len__48849__auto___59131)){
args__48856__auto__.push((arguments[i__48850__auto___59132]));

var G__59133 = (i__48850__auto___59132 + (1));
i__48850__auto___59132 = G__59133;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq59130){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59130));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__59134 = cljs.core._EQ_;
var expr__59135 = (function (){var or__47633__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e59138){if((e59138 instanceof Error)){
var e = e59138;
return false;
} else {
throw e59138;

}
}})();
if(cljs.core.truth_(or__47633__auto__)){
return or__47633__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__59134.call(null,"true",expr__59135))){
return true;
} else {
if(cljs.core.truth_(pred__59134.call(null,"false",expr__59135))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__59135)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e59140){if((e59140 instanceof Error)){
var e = e59140;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e59140;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__59141){
var map__59144 = p__59141;
var map__59144__$1 = ((((!((map__59144 == null)))?((((map__59144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59144):map__59144);
var message = cljs.core.get.call(null,map__59144__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__59144__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__47633__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__47633__auto__)){
return or__47633__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__47621__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__47621__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__47621__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__53002__auto___59306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___59306,ch){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___59306,ch){
return (function (state_59275){
var state_val_59276 = (state_59275[(1)]);
if((state_val_59276 === (7))){
var inst_59271 = (state_59275[(2)]);
var state_59275__$1 = state_59275;
var statearr_59277_59307 = state_59275__$1;
(statearr_59277_59307[(2)] = inst_59271);

(statearr_59277_59307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59276 === (1))){
var state_59275__$1 = state_59275;
var statearr_59278_59308 = state_59275__$1;
(statearr_59278_59308[(2)] = null);

(statearr_59278_59308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59276 === (4))){
var inst_59228 = (state_59275[(7)]);
var inst_59228__$1 = (state_59275[(2)]);
var state_59275__$1 = (function (){var statearr_59279 = state_59275;
(statearr_59279[(7)] = inst_59228__$1);

return statearr_59279;
})();
if(cljs.core.truth_(inst_59228__$1)){
var statearr_59280_59309 = state_59275__$1;
(statearr_59280_59309[(1)] = (5));

} else {
var statearr_59281_59310 = state_59275__$1;
(statearr_59281_59310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59276 === (15))){
var inst_59235 = (state_59275[(8)]);
var inst_59250 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_59235);
var inst_59251 = cljs.core.first.call(null,inst_59250);
var inst_59252 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_59251);
var inst_59253 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_59252)].join('');
var inst_59254 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_59253);
var state_59275__$1 = state_59275;
var statearr_59282_59311 = state_59275__$1;
(statearr_59282_59311[(2)] = inst_59254);

(statearr_59282_59311[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59276 === (13))){
var inst_59259 = (state_59275[(2)]);
var state_59275__$1 = state_59275;
var statearr_59283_59312 = state_59275__$1;
(statearr_59283_59312[(2)] = inst_59259);

(statearr_59283_59312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59276 === (6))){
var state_59275__$1 = state_59275;
var statearr_59284_59313 = state_59275__$1;
(statearr_59284_59313[(2)] = null);

(statearr_59284_59313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59276 === (17))){
var inst_59257 = (state_59275[(2)]);
var state_59275__$1 = state_59275;
var statearr_59285_59314 = state_59275__$1;
(statearr_59285_59314[(2)] = inst_59257);

(statearr_59285_59314[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59276 === (3))){
var inst_59273 = (state_59275[(2)]);
var state_59275__$1 = state_59275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59275__$1,inst_59273);
} else {
if((state_val_59276 === (12))){
var inst_59234 = (state_59275[(9)]);
var inst_59248 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_59234,opts);
var state_59275__$1 = state_59275;
if(cljs.core.truth_(inst_59248)){
var statearr_59286_59315 = state_59275__$1;
(statearr_59286_59315[(1)] = (15));

} else {
var statearr_59287_59316 = state_59275__$1;
(statearr_59287_59316[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59276 === (2))){
var state_59275__$1 = state_59275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59275__$1,(4),ch);
} else {
if((state_val_59276 === (11))){
var inst_59235 = (state_59275[(8)]);
var inst_59240 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59241 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_59235);
var inst_59242 = cljs.core.async.timeout.call(null,(1000));
var inst_59243 = [inst_59241,inst_59242];
var inst_59244 = (new cljs.core.PersistentVector(null,2,(5),inst_59240,inst_59243,null));
var state_59275__$1 = state_59275;
return cljs.core.async.ioc_alts_BANG_.call(null,state_59275__$1,(14),inst_59244);
} else {
if((state_val_59276 === (9))){
var inst_59235 = (state_59275[(8)]);
var inst_59261 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_59262 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_59235);
var inst_59263 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_59262);
var inst_59264 = [cljs.core.str("Not loading: "),cljs.core.str(inst_59263)].join('');
var inst_59265 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_59264);
var state_59275__$1 = (function (){var statearr_59288 = state_59275;
(statearr_59288[(10)] = inst_59261);

return statearr_59288;
})();
var statearr_59289_59317 = state_59275__$1;
(statearr_59289_59317[(2)] = inst_59265);

(statearr_59289_59317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59276 === (5))){
var inst_59228 = (state_59275[(7)]);
var inst_59230 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_59231 = (new cljs.core.PersistentArrayMap(null,2,inst_59230,null));
var inst_59232 = (new cljs.core.PersistentHashSet(null,inst_59231,null));
var inst_59233 = figwheel.client.focus_msgs.call(null,inst_59232,inst_59228);
var inst_59234 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_59233);
var inst_59235 = cljs.core.first.call(null,inst_59233);
var inst_59236 = figwheel.client.autoload_QMARK_.call(null);
var state_59275__$1 = (function (){var statearr_59290 = state_59275;
(statearr_59290[(9)] = inst_59234);

(statearr_59290[(8)] = inst_59235);

return statearr_59290;
})();
if(cljs.core.truth_(inst_59236)){
var statearr_59291_59318 = state_59275__$1;
(statearr_59291_59318[(1)] = (8));

} else {
var statearr_59292_59319 = state_59275__$1;
(statearr_59292_59319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59276 === (14))){
var inst_59246 = (state_59275[(2)]);
var state_59275__$1 = state_59275;
var statearr_59293_59320 = state_59275__$1;
(statearr_59293_59320[(2)] = inst_59246);

(statearr_59293_59320[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59276 === (16))){
var state_59275__$1 = state_59275;
var statearr_59294_59321 = state_59275__$1;
(statearr_59294_59321[(2)] = null);

(statearr_59294_59321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59276 === (10))){
var inst_59267 = (state_59275[(2)]);
var state_59275__$1 = (function (){var statearr_59295 = state_59275;
(statearr_59295[(11)] = inst_59267);

return statearr_59295;
})();
var statearr_59296_59322 = state_59275__$1;
(statearr_59296_59322[(2)] = null);

(statearr_59296_59322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59276 === (8))){
var inst_59234 = (state_59275[(9)]);
var inst_59238 = figwheel.client.reload_file_state_QMARK_.call(null,inst_59234,opts);
var state_59275__$1 = state_59275;
if(cljs.core.truth_(inst_59238)){
var statearr_59297_59323 = state_59275__$1;
(statearr_59297_59323[(1)] = (11));

} else {
var statearr_59298_59324 = state_59275__$1;
(statearr_59298_59324[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__53002__auto___59306,ch))
;
return ((function (switch__52888__auto__,c__53002__auto___59306,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__52889__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__52889__auto____0 = (function (){
var statearr_59302 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59302[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__52889__auto__);

(statearr_59302[(1)] = (1));

return statearr_59302;
});
var figwheel$client$file_reloader_plugin_$_state_machine__52889__auto____1 = (function (state_59275){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_59275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e59303){if((e59303 instanceof Object)){
var ex__52892__auto__ = e59303;
var statearr_59304_59325 = state_59275;
(statearr_59304_59325[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59326 = state_59275;
state_59275 = G__59326;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__52889__auto__ = function(state_59275){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__52889__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__52889__auto____1.call(this,state_59275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__52889__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__52889__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___59306,ch))
})();
var state__53004__auto__ = (function (){var statearr_59305 = f__53003__auto__.call(null);
(statearr_59305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___59306);

return statearr_59305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___59306,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__59327_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__59327_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_59330 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_59330){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e59329){if((e59329 instanceof Error)){
var e = e59329;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_59330], null));
} else {
var e = e59329;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_59330))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__59331){
var map__59340 = p__59331;
var map__59340__$1 = ((((!((map__59340 == null)))?((((map__59340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59340):map__59340);
var opts = map__59340__$1;
var build_id = cljs.core.get.call(null,map__59340__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__59340,map__59340__$1,opts,build_id){
return (function (p__59342){
var vec__59343 = p__59342;
var seq__59344 = cljs.core.seq.call(null,vec__59343);
var first__59345 = cljs.core.first.call(null,seq__59344);
var seq__59344__$1 = cljs.core.next.call(null,seq__59344);
var map__59346 = first__59345;
var map__59346__$1 = ((((!((map__59346 == null)))?((((map__59346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59346):map__59346);
var msg = map__59346__$1;
var msg_name = cljs.core.get.call(null,map__59346__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__59344__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__59343,seq__59344,first__59345,seq__59344__$1,map__59346,map__59346__$1,msg,msg_name,_,map__59340,map__59340__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__59343,seq__59344,first__59345,seq__59344__$1,map__59346,map__59346__$1,msg,msg_name,_,map__59340,map__59340__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__59340,map__59340__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__59354){
var vec__59355 = p__59354;
var seq__59356 = cljs.core.seq.call(null,vec__59355);
var first__59357 = cljs.core.first.call(null,seq__59356);
var seq__59356__$1 = cljs.core.next.call(null,seq__59356);
var map__59358 = first__59357;
var map__59358__$1 = ((((!((map__59358 == null)))?((((map__59358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59358):map__59358);
var msg = map__59358__$1;
var msg_name = cljs.core.get.call(null,map__59358__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__59356__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__59360){
var map__59372 = p__59360;
var map__59372__$1 = ((((!((map__59372 == null)))?((((map__59372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59372):map__59372);
var on_compile_warning = cljs.core.get.call(null,map__59372__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__59372__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__59372,map__59372__$1,on_compile_warning,on_compile_fail){
return (function (p__59374){
var vec__59375 = p__59374;
var seq__59376 = cljs.core.seq.call(null,vec__59375);
var first__59377 = cljs.core.first.call(null,seq__59376);
var seq__59376__$1 = cljs.core.next.call(null,seq__59376);
var map__59378 = first__59377;
var map__59378__$1 = ((((!((map__59378 == null)))?((((map__59378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59378):map__59378);
var msg = map__59378__$1;
var msg_name = cljs.core.get.call(null,map__59378__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__59376__$1;
var pred__59380 = cljs.core._EQ_;
var expr__59381 = msg_name;
if(cljs.core.truth_(pred__59380.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__59381))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__59380.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__59381))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__59372,map__59372__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__53002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto__,msg_hist,msg_names,msg){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto__,msg_hist,msg_names,msg){
return (function (state_59609){
var state_val_59610 = (state_59609[(1)]);
if((state_val_59610 === (7))){
var inst_59529 = (state_59609[(2)]);
var state_59609__$1 = state_59609;
if(cljs.core.truth_(inst_59529)){
var statearr_59611_59661 = state_59609__$1;
(statearr_59611_59661[(1)] = (8));

} else {
var statearr_59612_59662 = state_59609__$1;
(statearr_59612_59662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (20))){
var inst_59603 = (state_59609[(2)]);
var state_59609__$1 = state_59609;
var statearr_59613_59663 = state_59609__$1;
(statearr_59613_59663[(2)] = inst_59603);

(statearr_59613_59663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (27))){
var inst_59599 = (state_59609[(2)]);
var state_59609__$1 = state_59609;
var statearr_59614_59664 = state_59609__$1;
(statearr_59614_59664[(2)] = inst_59599);

(statearr_59614_59664[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (1))){
var inst_59522 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_59609__$1 = state_59609;
if(cljs.core.truth_(inst_59522)){
var statearr_59615_59665 = state_59609__$1;
(statearr_59615_59665[(1)] = (2));

} else {
var statearr_59616_59666 = state_59609__$1;
(statearr_59616_59666[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (24))){
var inst_59601 = (state_59609[(2)]);
var state_59609__$1 = state_59609;
var statearr_59617_59667 = state_59609__$1;
(statearr_59617_59667[(2)] = inst_59601);

(statearr_59617_59667[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (4))){
var inst_59607 = (state_59609[(2)]);
var state_59609__$1 = state_59609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59609__$1,inst_59607);
} else {
if((state_val_59610 === (15))){
var inst_59605 = (state_59609[(2)]);
var state_59609__$1 = state_59609;
var statearr_59618_59668 = state_59609__$1;
(statearr_59618_59668[(2)] = inst_59605);

(statearr_59618_59668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (21))){
var inst_59558 = (state_59609[(2)]);
var inst_59559 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59560 = figwheel.client.auto_jump_to_error.call(null,opts,inst_59559);
var state_59609__$1 = (function (){var statearr_59619 = state_59609;
(statearr_59619[(7)] = inst_59558);

return statearr_59619;
})();
var statearr_59620_59669 = state_59609__$1;
(statearr_59620_59669[(2)] = inst_59560);

(statearr_59620_59669[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (31))){
var inst_59588 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_59609__$1 = state_59609;
if(cljs.core.truth_(inst_59588)){
var statearr_59621_59670 = state_59609__$1;
(statearr_59621_59670[(1)] = (34));

} else {
var statearr_59622_59671 = state_59609__$1;
(statearr_59622_59671[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (32))){
var inst_59597 = (state_59609[(2)]);
var state_59609__$1 = state_59609;
var statearr_59623_59672 = state_59609__$1;
(statearr_59623_59672[(2)] = inst_59597);

(statearr_59623_59672[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (33))){
var inst_59584 = (state_59609[(2)]);
var inst_59585 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59586 = figwheel.client.auto_jump_to_error.call(null,opts,inst_59585);
var state_59609__$1 = (function (){var statearr_59624 = state_59609;
(statearr_59624[(8)] = inst_59584);

return statearr_59624;
})();
var statearr_59625_59673 = state_59609__$1;
(statearr_59625_59673[(2)] = inst_59586);

(statearr_59625_59673[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (13))){
var inst_59543 = figwheel.client.heads_up.clear.call(null);
var state_59609__$1 = state_59609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59609__$1,(16),inst_59543);
} else {
if((state_val_59610 === (22))){
var inst_59564 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59565 = figwheel.client.heads_up.append_warning_message.call(null,inst_59564);
var state_59609__$1 = state_59609;
var statearr_59626_59674 = state_59609__$1;
(statearr_59626_59674[(2)] = inst_59565);

(statearr_59626_59674[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (36))){
var inst_59595 = (state_59609[(2)]);
var state_59609__$1 = state_59609;
var statearr_59627_59675 = state_59609__$1;
(statearr_59627_59675[(2)] = inst_59595);

(statearr_59627_59675[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (29))){
var inst_59575 = (state_59609[(2)]);
var inst_59576 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59577 = figwheel.client.auto_jump_to_error.call(null,opts,inst_59576);
var state_59609__$1 = (function (){var statearr_59628 = state_59609;
(statearr_59628[(9)] = inst_59575);

return statearr_59628;
})();
var statearr_59629_59676 = state_59609__$1;
(statearr_59629_59676[(2)] = inst_59577);

(statearr_59629_59676[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (6))){
var inst_59524 = (state_59609[(10)]);
var state_59609__$1 = state_59609;
var statearr_59630_59677 = state_59609__$1;
(statearr_59630_59677[(2)] = inst_59524);

(statearr_59630_59677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (28))){
var inst_59571 = (state_59609[(2)]);
var inst_59572 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59573 = figwheel.client.heads_up.display_warning.call(null,inst_59572);
var state_59609__$1 = (function (){var statearr_59631 = state_59609;
(statearr_59631[(11)] = inst_59571);

return statearr_59631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59609__$1,(29),inst_59573);
} else {
if((state_val_59610 === (25))){
var inst_59569 = figwheel.client.heads_up.clear.call(null);
var state_59609__$1 = state_59609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59609__$1,(28),inst_59569);
} else {
if((state_val_59610 === (34))){
var inst_59590 = figwheel.client.heads_up.flash_loaded.call(null);
var state_59609__$1 = state_59609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59609__$1,(37),inst_59590);
} else {
if((state_val_59610 === (17))){
var inst_59549 = (state_59609[(2)]);
var inst_59550 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59551 = figwheel.client.auto_jump_to_error.call(null,opts,inst_59550);
var state_59609__$1 = (function (){var statearr_59632 = state_59609;
(statearr_59632[(12)] = inst_59549);

return statearr_59632;
})();
var statearr_59633_59678 = state_59609__$1;
(statearr_59633_59678[(2)] = inst_59551);

(statearr_59633_59678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (3))){
var inst_59541 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_59609__$1 = state_59609;
if(cljs.core.truth_(inst_59541)){
var statearr_59634_59679 = state_59609__$1;
(statearr_59634_59679[(1)] = (13));

} else {
var statearr_59635_59680 = state_59609__$1;
(statearr_59635_59680[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (12))){
var inst_59537 = (state_59609[(2)]);
var state_59609__$1 = state_59609;
var statearr_59636_59681 = state_59609__$1;
(statearr_59636_59681[(2)] = inst_59537);

(statearr_59636_59681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (2))){
var inst_59524 = (state_59609[(10)]);
var inst_59524__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_59609__$1 = (function (){var statearr_59637 = state_59609;
(statearr_59637[(10)] = inst_59524__$1);

return statearr_59637;
})();
if(cljs.core.truth_(inst_59524__$1)){
var statearr_59638_59682 = state_59609__$1;
(statearr_59638_59682[(1)] = (5));

} else {
var statearr_59639_59683 = state_59609__$1;
(statearr_59639_59683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (23))){
var inst_59567 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_59609__$1 = state_59609;
if(cljs.core.truth_(inst_59567)){
var statearr_59640_59684 = state_59609__$1;
(statearr_59640_59684[(1)] = (25));

} else {
var statearr_59641_59685 = state_59609__$1;
(statearr_59641_59685[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (35))){
var state_59609__$1 = state_59609;
var statearr_59642_59686 = state_59609__$1;
(statearr_59642_59686[(2)] = null);

(statearr_59642_59686[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (19))){
var inst_59562 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_59609__$1 = state_59609;
if(cljs.core.truth_(inst_59562)){
var statearr_59643_59687 = state_59609__$1;
(statearr_59643_59687[(1)] = (22));

} else {
var statearr_59644_59688 = state_59609__$1;
(statearr_59644_59688[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (11))){
var inst_59533 = (state_59609[(2)]);
var state_59609__$1 = state_59609;
var statearr_59645_59689 = state_59609__$1;
(statearr_59645_59689[(2)] = inst_59533);

(statearr_59645_59689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (9))){
var inst_59535 = figwheel.client.heads_up.clear.call(null);
var state_59609__$1 = state_59609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59609__$1,(12),inst_59535);
} else {
if((state_val_59610 === (5))){
var inst_59526 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_59609__$1 = state_59609;
var statearr_59646_59690 = state_59609__$1;
(statearr_59646_59690[(2)] = inst_59526);

(statearr_59646_59690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (14))){
var inst_59553 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_59609__$1 = state_59609;
if(cljs.core.truth_(inst_59553)){
var statearr_59647_59691 = state_59609__$1;
(statearr_59647_59691[(1)] = (18));

} else {
var statearr_59648_59692 = state_59609__$1;
(statearr_59648_59692[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (26))){
var inst_59579 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_59609__$1 = state_59609;
if(cljs.core.truth_(inst_59579)){
var statearr_59649_59693 = state_59609__$1;
(statearr_59649_59693[(1)] = (30));

} else {
var statearr_59650_59694 = state_59609__$1;
(statearr_59650_59694[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (16))){
var inst_59545 = (state_59609[(2)]);
var inst_59546 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59547 = figwheel.client.heads_up.display_exception.call(null,inst_59546);
var state_59609__$1 = (function (){var statearr_59651 = state_59609;
(statearr_59651[(13)] = inst_59545);

return statearr_59651;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59609__$1,(17),inst_59547);
} else {
if((state_val_59610 === (30))){
var inst_59581 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59582 = figwheel.client.heads_up.display_warning.call(null,inst_59581);
var state_59609__$1 = state_59609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59609__$1,(33),inst_59582);
} else {
if((state_val_59610 === (10))){
var inst_59539 = (state_59609[(2)]);
var state_59609__$1 = state_59609;
var statearr_59652_59695 = state_59609__$1;
(statearr_59652_59695[(2)] = inst_59539);

(statearr_59652_59695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (18))){
var inst_59555 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59556 = figwheel.client.heads_up.display_exception.call(null,inst_59555);
var state_59609__$1 = state_59609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59609__$1,(21),inst_59556);
} else {
if((state_val_59610 === (37))){
var inst_59592 = (state_59609[(2)]);
var state_59609__$1 = state_59609;
var statearr_59653_59696 = state_59609__$1;
(statearr_59653_59696[(2)] = inst_59592);

(statearr_59653_59696[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59610 === (8))){
var inst_59531 = figwheel.client.heads_up.flash_loaded.call(null);
var state_59609__$1 = state_59609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59609__$1,(11),inst_59531);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__53002__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__52888__auto__,c__53002__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__52889__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__52889__auto____0 = (function (){
var statearr_59657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59657[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__52889__auto__);

(statearr_59657[(1)] = (1));

return statearr_59657;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__52889__auto____1 = (function (state_59609){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_59609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e59658){if((e59658 instanceof Object)){
var ex__52892__auto__ = e59658;
var statearr_59659_59697 = state_59609;
(statearr_59659_59697[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59698 = state_59609;
state_59609 = G__59698;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__52889__auto__ = function(state_59609){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__52889__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__52889__auto____1.call(this,state_59609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__52889__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__52889__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto__,msg_hist,msg_names,msg))
})();
var state__53004__auto__ = (function (){var statearr_59660 = f__53003__auto__.call(null);
(statearr_59660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto__);

return statearr_59660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto__,msg_hist,msg_names,msg))
);

return c__53002__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__53002__auto___59761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___59761,ch){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___59761,ch){
return (function (state_59744){
var state_val_59745 = (state_59744[(1)]);
if((state_val_59745 === (1))){
var state_59744__$1 = state_59744;
var statearr_59746_59762 = state_59744__$1;
(statearr_59746_59762[(2)] = null);

(statearr_59746_59762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (2))){
var state_59744__$1 = state_59744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59744__$1,(4),ch);
} else {
if((state_val_59745 === (3))){
var inst_59742 = (state_59744[(2)]);
var state_59744__$1 = state_59744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59744__$1,inst_59742);
} else {
if((state_val_59745 === (4))){
var inst_59732 = (state_59744[(7)]);
var inst_59732__$1 = (state_59744[(2)]);
var state_59744__$1 = (function (){var statearr_59747 = state_59744;
(statearr_59747[(7)] = inst_59732__$1);

return statearr_59747;
})();
if(cljs.core.truth_(inst_59732__$1)){
var statearr_59748_59763 = state_59744__$1;
(statearr_59748_59763[(1)] = (5));

} else {
var statearr_59749_59764 = state_59744__$1;
(statearr_59749_59764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (5))){
var inst_59732 = (state_59744[(7)]);
var inst_59734 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_59732);
var state_59744__$1 = state_59744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59744__$1,(8),inst_59734);
} else {
if((state_val_59745 === (6))){
var state_59744__$1 = state_59744;
var statearr_59750_59765 = state_59744__$1;
(statearr_59750_59765[(2)] = null);

(statearr_59750_59765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (7))){
var inst_59740 = (state_59744[(2)]);
var state_59744__$1 = state_59744;
var statearr_59751_59766 = state_59744__$1;
(statearr_59751_59766[(2)] = inst_59740);

(statearr_59751_59766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (8))){
var inst_59736 = (state_59744[(2)]);
var state_59744__$1 = (function (){var statearr_59752 = state_59744;
(statearr_59752[(8)] = inst_59736);

return statearr_59752;
})();
var statearr_59753_59767 = state_59744__$1;
(statearr_59753_59767[(2)] = null);

(statearr_59753_59767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__53002__auto___59761,ch))
;
return ((function (switch__52888__auto__,c__53002__auto___59761,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__52889__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__52889__auto____0 = (function (){
var statearr_59757 = [null,null,null,null,null,null,null,null,null];
(statearr_59757[(0)] = figwheel$client$heads_up_plugin_$_state_machine__52889__auto__);

(statearr_59757[(1)] = (1));

return statearr_59757;
});
var figwheel$client$heads_up_plugin_$_state_machine__52889__auto____1 = (function (state_59744){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_59744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e59758){if((e59758 instanceof Object)){
var ex__52892__auto__ = e59758;
var statearr_59759_59768 = state_59744;
(statearr_59759_59768[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59769 = state_59744;
state_59744 = G__59769;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__52889__auto__ = function(state_59744){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__52889__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__52889__auto____1.call(this,state_59744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__52889__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__52889__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___59761,ch))
})();
var state__53004__auto__ = (function (){var statearr_59760 = f__53003__auto__.call(null);
(statearr_59760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___59761);

return statearr_59760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___59761,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__53002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto__){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto__){
return (function (state_59790){
var state_val_59791 = (state_59790[(1)]);
if((state_val_59791 === (1))){
var inst_59785 = cljs.core.async.timeout.call(null,(3000));
var state_59790__$1 = state_59790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59790__$1,(2),inst_59785);
} else {
if((state_val_59791 === (2))){
var inst_59787 = (state_59790[(2)]);
var inst_59788 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_59790__$1 = (function (){var statearr_59792 = state_59790;
(statearr_59792[(7)] = inst_59787);

return statearr_59792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59790__$1,inst_59788);
} else {
return null;
}
}
});})(c__53002__auto__))
;
return ((function (switch__52888__auto__,c__53002__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__52889__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__52889__auto____0 = (function (){
var statearr_59796 = [null,null,null,null,null,null,null,null];
(statearr_59796[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__52889__auto__);

(statearr_59796[(1)] = (1));

return statearr_59796;
});
var figwheel$client$enforce_project_plugin_$_state_machine__52889__auto____1 = (function (state_59790){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_59790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e59797){if((e59797 instanceof Object)){
var ex__52892__auto__ = e59797;
var statearr_59798_59800 = state_59790;
(statearr_59798_59800[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59801 = state_59790;
state_59790 = G__59801;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__52889__auto__ = function(state_59790){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__52889__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__52889__auto____1.call(this,state_59790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__52889__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__52889__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto__))
})();
var state__53004__auto__ = (function (){var statearr_59799 = f__53003__auto__.call(null);
(statearr_59799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto__);

return statearr_59799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto__))
);

return c__53002__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__53002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto__,figwheel_version,temp__6753__auto__){
return (function (state_59824){
var state_val_59825 = (state_59824[(1)]);
if((state_val_59825 === (1))){
var inst_59818 = cljs.core.async.timeout.call(null,(2000));
var state_59824__$1 = state_59824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59824__$1,(2),inst_59818);
} else {
if((state_val_59825 === (2))){
var inst_59820 = (state_59824[(2)]);
var inst_59821 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_59822 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_59821);
var state_59824__$1 = (function (){var statearr_59826 = state_59824;
(statearr_59826[(7)] = inst_59820);

return statearr_59826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59824__$1,inst_59822);
} else {
return null;
}
}
});})(c__53002__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__52888__auto__,c__53002__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__52889__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__52889__auto____0 = (function (){
var statearr_59830 = [null,null,null,null,null,null,null,null];
(statearr_59830[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__52889__auto__);

(statearr_59830[(1)] = (1));

return statearr_59830;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__52889__auto____1 = (function (state_59824){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_59824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e59831){if((e59831 instanceof Object)){
var ex__52892__auto__ = e59831;
var statearr_59832_59834 = state_59824;
(statearr_59832_59834[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59835 = state_59824;
state_59824 = G__59835;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__52889__auto__ = function(state_59824){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__52889__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__52889__auto____1.call(this,state_59824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__52889__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__52889__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto__,figwheel_version,temp__6753__auto__))
})();
var state__53004__auto__ = (function (){var statearr_59833 = f__53003__auto__.call(null);
(statearr_59833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto__);

return statearr_59833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto__,figwheel_version,temp__6753__auto__))
);

return c__53002__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__59836){
var map__59840 = p__59836;
var map__59840__$1 = ((((!((map__59840 == null)))?((((map__59840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59840):map__59840);
var file = cljs.core.get.call(null,map__59840__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__59840__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__59840__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__59842 = "";
var G__59842__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__59842),cljs.core.str("file "),cljs.core.str(file)].join(''):G__59842);
var G__59842__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__59842__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__59842__$1);
if(cljs.core.truth_((function (){var and__47621__auto__ = line;
if(cljs.core.truth_(and__47621__auto__)){
return column;
} else {
return and__47621__auto__;
}
})())){
return [cljs.core.str(G__59842__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__59842__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__59843){
var map__59850 = p__59843;
var map__59850__$1 = ((((!((map__59850 == null)))?((((map__59850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59850):map__59850);
var ed = map__59850__$1;
var formatted_exception = cljs.core.get.call(null,map__59850__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__59850__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__59850__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__59852_59856 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__59853_59857 = null;
var count__59854_59858 = (0);
var i__59855_59859 = (0);
while(true){
if((i__59855_59859 < count__59854_59858)){
var msg_59860 = cljs.core._nth.call(null,chunk__59853_59857,i__59855_59859);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_59860);

var G__59861 = seq__59852_59856;
var G__59862 = chunk__59853_59857;
var G__59863 = count__59854_59858;
var G__59864 = (i__59855_59859 + (1));
seq__59852_59856 = G__59861;
chunk__59853_59857 = G__59862;
count__59854_59858 = G__59863;
i__59855_59859 = G__59864;
continue;
} else {
var temp__6753__auto___59865 = cljs.core.seq.call(null,seq__59852_59856);
if(temp__6753__auto___59865){
var seq__59852_59866__$1 = temp__6753__auto___59865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59852_59866__$1)){
var c__48539__auto___59867 = cljs.core.chunk_first.call(null,seq__59852_59866__$1);
var G__59868 = cljs.core.chunk_rest.call(null,seq__59852_59866__$1);
var G__59869 = c__48539__auto___59867;
var G__59870 = cljs.core.count.call(null,c__48539__auto___59867);
var G__59871 = (0);
seq__59852_59856 = G__59868;
chunk__59853_59857 = G__59869;
count__59854_59858 = G__59870;
i__59855_59859 = G__59871;
continue;
} else {
var msg_59872 = cljs.core.first.call(null,seq__59852_59866__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_59872);

var G__59873 = cljs.core.next.call(null,seq__59852_59866__$1);
var G__59874 = null;
var G__59875 = (0);
var G__59876 = (0);
seq__59852_59856 = G__59873;
chunk__59853_59857 = G__59874;
count__59854_59858 = G__59875;
i__59855_59859 = G__59876;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__59877){
var map__59880 = p__59877;
var map__59880__$1 = ((((!((map__59880 == null)))?((((map__59880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59880):map__59880);
var w = map__59880__$1;
var message = cljs.core.get.call(null,map__59880__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__47621__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__47621__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__47621__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__59892 = cljs.core.seq.call(null,plugins);
var chunk__59893 = null;
var count__59894 = (0);
var i__59895 = (0);
while(true){
if((i__59895 < count__59894)){
var vec__59896 = cljs.core._nth.call(null,chunk__59893,i__59895);
var k = cljs.core.nth.call(null,vec__59896,(0),null);
var plugin = cljs.core.nth.call(null,vec__59896,(1),null);
if(cljs.core.truth_(plugin)){
var pl_59902 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__59892,chunk__59893,count__59894,i__59895,pl_59902,vec__59896,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_59902.call(null,msg_hist);
});})(seq__59892,chunk__59893,count__59894,i__59895,pl_59902,vec__59896,k,plugin))
);
} else {
}

var G__59903 = seq__59892;
var G__59904 = chunk__59893;
var G__59905 = count__59894;
var G__59906 = (i__59895 + (1));
seq__59892 = G__59903;
chunk__59893 = G__59904;
count__59894 = G__59905;
i__59895 = G__59906;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__59892);
if(temp__6753__auto__){
var seq__59892__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59892__$1)){
var c__48539__auto__ = cljs.core.chunk_first.call(null,seq__59892__$1);
var G__59907 = cljs.core.chunk_rest.call(null,seq__59892__$1);
var G__59908 = c__48539__auto__;
var G__59909 = cljs.core.count.call(null,c__48539__auto__);
var G__59910 = (0);
seq__59892 = G__59907;
chunk__59893 = G__59908;
count__59894 = G__59909;
i__59895 = G__59910;
continue;
} else {
var vec__59899 = cljs.core.first.call(null,seq__59892__$1);
var k = cljs.core.nth.call(null,vec__59899,(0),null);
var plugin = cljs.core.nth.call(null,vec__59899,(1),null);
if(cljs.core.truth_(plugin)){
var pl_59911 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__59892,chunk__59893,count__59894,i__59895,pl_59911,vec__59899,k,plugin,seq__59892__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_59911.call(null,msg_hist);
});})(seq__59892,chunk__59893,count__59894,i__59895,pl_59911,vec__59899,k,plugin,seq__59892__$1,temp__6753__auto__))
);
} else {
}

var G__59912 = cljs.core.next.call(null,seq__59892__$1);
var G__59913 = null;
var G__59914 = (0);
var G__59915 = (0);
seq__59892 = G__59912;
chunk__59893 = G__59913;
count__59894 = G__59914;
i__59895 = G__59915;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args59916 = [];
var len__48849__auto___59923 = arguments.length;
var i__48850__auto___59924 = (0);
while(true){
if((i__48850__auto___59924 < len__48849__auto___59923)){
args59916.push((arguments[i__48850__auto___59924]));

var G__59925 = (i__48850__auto___59924 + (1));
i__48850__auto___59924 = G__59925;
continue;
} else {
}
break;
}

var G__59918 = args59916.length;
switch (G__59918) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59916.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__59919_59927 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__59920_59928 = null;
var count__59921_59929 = (0);
var i__59922_59930 = (0);
while(true){
if((i__59922_59930 < count__59921_59929)){
var msg_59931 = cljs.core._nth.call(null,chunk__59920_59928,i__59922_59930);
figwheel.client.socket.handle_incoming_message.call(null,msg_59931);

var G__59932 = seq__59919_59927;
var G__59933 = chunk__59920_59928;
var G__59934 = count__59921_59929;
var G__59935 = (i__59922_59930 + (1));
seq__59919_59927 = G__59932;
chunk__59920_59928 = G__59933;
count__59921_59929 = G__59934;
i__59922_59930 = G__59935;
continue;
} else {
var temp__6753__auto___59936 = cljs.core.seq.call(null,seq__59919_59927);
if(temp__6753__auto___59936){
var seq__59919_59937__$1 = temp__6753__auto___59936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59919_59937__$1)){
var c__48539__auto___59938 = cljs.core.chunk_first.call(null,seq__59919_59937__$1);
var G__59939 = cljs.core.chunk_rest.call(null,seq__59919_59937__$1);
var G__59940 = c__48539__auto___59938;
var G__59941 = cljs.core.count.call(null,c__48539__auto___59938);
var G__59942 = (0);
seq__59919_59927 = G__59939;
chunk__59920_59928 = G__59940;
count__59921_59929 = G__59941;
i__59922_59930 = G__59942;
continue;
} else {
var msg_59943 = cljs.core.first.call(null,seq__59919_59937__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_59943);

var G__59944 = cljs.core.next.call(null,seq__59919_59937__$1);
var G__59945 = null;
var G__59946 = (0);
var G__59947 = (0);
seq__59919_59927 = G__59944;
chunk__59920_59928 = G__59945;
count__59921_59929 = G__59946;
i__59922_59930 = G__59947;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__48856__auto__ = [];
var len__48849__auto___59952 = arguments.length;
var i__48850__auto___59953 = (0);
while(true){
if((i__48850__auto___59953 < len__48849__auto___59952)){
args__48856__auto__.push((arguments[i__48850__auto___59953]));

var G__59954 = (i__48850__auto___59953 + (1));
i__48850__auto___59953 = G__59954;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__59949){
var map__59950 = p__59949;
var map__59950__$1 = ((((!((map__59950 == null)))?((((map__59950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59950):map__59950);
var opts = map__59950__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq59948){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59948));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e59956){if((e59956 instanceof Error)){
var e = e59956;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e59956;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__59960){
var map__59961 = p__59960;
var map__59961__$1 = ((((!((map__59961 == null)))?((((map__59961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59961):map__59961);
var msg_name = cljs.core.get.call(null,map__59961__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1509481872912