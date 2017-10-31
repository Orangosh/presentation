// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__49037__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49038__i = 0, G__49038__a = new Array(arguments.length -  0);
while (G__49038__i < G__49038__a.length) {G__49038__a[G__49038__i] = arguments[G__49038__i + 0]; ++G__49038__i;}
  args = new cljs.core.IndexedSeq(G__49038__a,0);
} 
return G__49037__delegate.call(this,args);};
G__49037.cljs$lang$maxFixedArity = 0;
G__49037.cljs$lang$applyTo = (function (arglist__49039){
var args = cljs.core.seq(arglist__49039);
return G__49037__delegate(args);
});
G__49037.cljs$core$IFn$_invoke$arity$variadic = G__49037__delegate;
return G__49037;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__49040__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49041__i = 0, G__49041__a = new Array(arguments.length -  0);
while (G__49041__i < G__49041__a.length) {G__49041__a[G__49041__i] = arguments[G__49041__i + 0]; ++G__49041__i;}
  args = new cljs.core.IndexedSeq(G__49041__a,0);
} 
return G__49040__delegate.call(this,args);};
G__49040.cljs$lang$maxFixedArity = 0;
G__49040.cljs$lang$applyTo = (function (arglist__49042){
var args = cljs.core.seq(arglist__49042);
return G__49040__delegate(args);
});
G__49040.cljs$core$IFn$_invoke$arity$variadic = G__49040__delegate;
return G__49040;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1509481861065