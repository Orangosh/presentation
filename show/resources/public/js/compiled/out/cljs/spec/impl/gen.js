// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50372 = arguments.length;
var i__48850__auto___50373 = (0);
while(true){
if((i__48850__auto___50373 < len__48849__auto___50372)){
args__48856__auto__.push((arguments[i__48850__auto___50373]));

var G__50374 = (i__48850__auto___50373 + (1));
i__48850__auto___50373 = G__50374;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq50371){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50371));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50376 = arguments.length;
var i__48850__auto___50377 = (0);
while(true){
if((i__48850__auto___50377 < len__48849__auto___50376)){
args__48856__auto__.push((arguments[i__48850__auto___50377]));

var G__50378 = (i__48850__auto___50377 + (1));
i__48850__auto___50377 = G__50378;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq50375){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50375));
});

var g_QMARK__50379 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_50380 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50379){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50379))
,null));
var mkg_50381 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50379,g_50380){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50379,g_50380))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__50379,g_50380,mkg_50381){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__50379).call(null,x);
});})(g_QMARK__50379,g_50380,mkg_50381))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__50379,g_50380,mkg_50381){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_50381).call(null,gfn);
});})(g_QMARK__50379,g_50380,mkg_50381))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__50379,g_50380,mkg_50381){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_50380).call(null,generator);
});})(g_QMARK__50379,g_50380,mkg_50381))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__50343__auto___50400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__50343__auto___50400){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50401 = arguments.length;
var i__48850__auto___50402 = (0);
while(true){
if((i__48850__auto___50402 < len__48849__auto___50401)){
args__48856__auto__.push((arguments[i__48850__auto___50402]));

var G__50403 = (i__48850__auto___50402 + (1));
i__48850__auto___50402 = G__50403;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50400))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50400){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50400),args);
});})(g__50343__auto___50400))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__50343__auto___50400){
return (function (seq50382){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50382));
});})(g__50343__auto___50400))
;


var g__50343__auto___50404 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__50343__auto___50404){
return (function cljs$spec$impl$gen$list(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50405 = arguments.length;
var i__48850__auto___50406 = (0);
while(true){
if((i__48850__auto___50406 < len__48849__auto___50405)){
args__48856__auto__.push((arguments[i__48850__auto___50406]));

var G__50407 = (i__48850__auto___50406 + (1));
i__48850__auto___50406 = G__50407;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50404))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50404){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50404),args);
});})(g__50343__auto___50404))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__50343__auto___50404){
return (function (seq50383){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50383));
});})(g__50343__auto___50404))
;


var g__50343__auto___50408 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__50343__auto___50408){
return (function cljs$spec$impl$gen$map(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50409 = arguments.length;
var i__48850__auto___50410 = (0);
while(true){
if((i__48850__auto___50410 < len__48849__auto___50409)){
args__48856__auto__.push((arguments[i__48850__auto___50410]));

var G__50411 = (i__48850__auto___50410 + (1));
i__48850__auto___50410 = G__50411;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50408))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50408){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50408),args);
});})(g__50343__auto___50408))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__50343__auto___50408){
return (function (seq50384){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50384));
});})(g__50343__auto___50408))
;


var g__50343__auto___50412 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__50343__auto___50412){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50413 = arguments.length;
var i__48850__auto___50414 = (0);
while(true){
if((i__48850__auto___50414 < len__48849__auto___50413)){
args__48856__auto__.push((arguments[i__48850__auto___50414]));

var G__50415 = (i__48850__auto___50414 + (1));
i__48850__auto___50414 = G__50415;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50412))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50412){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50412),args);
});})(g__50343__auto___50412))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__50343__auto___50412){
return (function (seq50385){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50385));
});})(g__50343__auto___50412))
;


var g__50343__auto___50416 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__50343__auto___50416){
return (function cljs$spec$impl$gen$set(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50417 = arguments.length;
var i__48850__auto___50418 = (0);
while(true){
if((i__48850__auto___50418 < len__48849__auto___50417)){
args__48856__auto__.push((arguments[i__48850__auto___50418]));

var G__50419 = (i__48850__auto___50418 + (1));
i__48850__auto___50418 = G__50419;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50416))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50416){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50416),args);
});})(g__50343__auto___50416))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__50343__auto___50416){
return (function (seq50386){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50386));
});})(g__50343__auto___50416))
;


var g__50343__auto___50420 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__50343__auto___50420){
return (function cljs$spec$impl$gen$vector(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50421 = arguments.length;
var i__48850__auto___50422 = (0);
while(true){
if((i__48850__auto___50422 < len__48849__auto___50421)){
args__48856__auto__.push((arguments[i__48850__auto___50422]));

var G__50423 = (i__48850__auto___50422 + (1));
i__48850__auto___50422 = G__50423;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50420))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50420){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50420),args);
});})(g__50343__auto___50420))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__50343__auto___50420){
return (function (seq50387){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50387));
});})(g__50343__auto___50420))
;


var g__50343__auto___50424 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__50343__auto___50424){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50425 = arguments.length;
var i__48850__auto___50426 = (0);
while(true){
if((i__48850__auto___50426 < len__48849__auto___50425)){
args__48856__auto__.push((arguments[i__48850__auto___50426]));

var G__50427 = (i__48850__auto___50426 + (1));
i__48850__auto___50426 = G__50427;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50424))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50424){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50424),args);
});})(g__50343__auto___50424))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__50343__auto___50424){
return (function (seq50388){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50388));
});})(g__50343__auto___50424))
;


var g__50343__auto___50428 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__50343__auto___50428){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50429 = arguments.length;
var i__48850__auto___50430 = (0);
while(true){
if((i__48850__auto___50430 < len__48849__auto___50429)){
args__48856__auto__.push((arguments[i__48850__auto___50430]));

var G__50431 = (i__48850__auto___50430 + (1));
i__48850__auto___50430 = G__50431;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50428))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50428){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50428),args);
});})(g__50343__auto___50428))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__50343__auto___50428){
return (function (seq50389){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50389));
});})(g__50343__auto___50428))
;


var g__50343__auto___50432 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__50343__auto___50432){
return (function cljs$spec$impl$gen$elements(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50433 = arguments.length;
var i__48850__auto___50434 = (0);
while(true){
if((i__48850__auto___50434 < len__48849__auto___50433)){
args__48856__auto__.push((arguments[i__48850__auto___50434]));

var G__50435 = (i__48850__auto___50434 + (1));
i__48850__auto___50434 = G__50435;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50432))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50432){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50432),args);
});})(g__50343__auto___50432))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__50343__auto___50432){
return (function (seq50390){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50390));
});})(g__50343__auto___50432))
;


var g__50343__auto___50436 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__50343__auto___50436){
return (function cljs$spec$impl$gen$bind(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50437 = arguments.length;
var i__48850__auto___50438 = (0);
while(true){
if((i__48850__auto___50438 < len__48849__auto___50437)){
args__48856__auto__.push((arguments[i__48850__auto___50438]));

var G__50439 = (i__48850__auto___50438 + (1));
i__48850__auto___50438 = G__50439;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50436))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50436){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50436),args);
});})(g__50343__auto___50436))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__50343__auto___50436){
return (function (seq50391){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50391));
});})(g__50343__auto___50436))
;


var g__50343__auto___50440 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__50343__auto___50440){
return (function cljs$spec$impl$gen$choose(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50441 = arguments.length;
var i__48850__auto___50442 = (0);
while(true){
if((i__48850__auto___50442 < len__48849__auto___50441)){
args__48856__auto__.push((arguments[i__48850__auto___50442]));

var G__50443 = (i__48850__auto___50442 + (1));
i__48850__auto___50442 = G__50443;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50440))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50440){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50440),args);
});})(g__50343__auto___50440))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__50343__auto___50440){
return (function (seq50392){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50392));
});})(g__50343__auto___50440))
;


var g__50343__auto___50444 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__50343__auto___50444){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50445 = arguments.length;
var i__48850__auto___50446 = (0);
while(true){
if((i__48850__auto___50446 < len__48849__auto___50445)){
args__48856__auto__.push((arguments[i__48850__auto___50446]));

var G__50447 = (i__48850__auto___50446 + (1));
i__48850__auto___50446 = G__50447;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50444))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50444){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50444),args);
});})(g__50343__auto___50444))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__50343__auto___50444){
return (function (seq50393){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50393));
});})(g__50343__auto___50444))
;


var g__50343__auto___50448 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__50343__auto___50448){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50449 = arguments.length;
var i__48850__auto___50450 = (0);
while(true){
if((i__48850__auto___50450 < len__48849__auto___50449)){
args__48856__auto__.push((arguments[i__48850__auto___50450]));

var G__50451 = (i__48850__auto___50450 + (1));
i__48850__auto___50450 = G__50451;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50448))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50448){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50448),args);
});})(g__50343__auto___50448))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__50343__auto___50448){
return (function (seq50394){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50394));
});})(g__50343__auto___50448))
;


var g__50343__auto___50452 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__50343__auto___50452){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50453 = arguments.length;
var i__48850__auto___50454 = (0);
while(true){
if((i__48850__auto___50454 < len__48849__auto___50453)){
args__48856__auto__.push((arguments[i__48850__auto___50454]));

var G__50455 = (i__48850__auto___50454 + (1));
i__48850__auto___50454 = G__50455;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50452))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50452){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50452),args);
});})(g__50343__auto___50452))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__50343__auto___50452){
return (function (seq50395){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50395));
});})(g__50343__auto___50452))
;


var g__50343__auto___50456 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__50343__auto___50456){
return (function cljs$spec$impl$gen$sample(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50457 = arguments.length;
var i__48850__auto___50458 = (0);
while(true){
if((i__48850__auto___50458 < len__48849__auto___50457)){
args__48856__auto__.push((arguments[i__48850__auto___50458]));

var G__50459 = (i__48850__auto___50458 + (1));
i__48850__auto___50458 = G__50459;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50456))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50456){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50456),args);
});})(g__50343__auto___50456))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__50343__auto___50456){
return (function (seq50396){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50396));
});})(g__50343__auto___50456))
;


var g__50343__auto___50460 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__50343__auto___50460){
return (function cljs$spec$impl$gen$return(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50461 = arguments.length;
var i__48850__auto___50462 = (0);
while(true){
if((i__48850__auto___50462 < len__48849__auto___50461)){
args__48856__auto__.push((arguments[i__48850__auto___50462]));

var G__50463 = (i__48850__auto___50462 + (1));
i__48850__auto___50462 = G__50463;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50460))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50460){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50460),args);
});})(g__50343__auto___50460))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__50343__auto___50460){
return (function (seq50397){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50397));
});})(g__50343__auto___50460))
;


var g__50343__auto___50464 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__50343__auto___50464){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50465 = arguments.length;
var i__48850__auto___50466 = (0);
while(true){
if((i__48850__auto___50466 < len__48849__auto___50465)){
args__48856__auto__.push((arguments[i__48850__auto___50466]));

var G__50467 = (i__48850__auto___50466 + (1));
i__48850__auto___50466 = G__50467;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50464))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50464){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50464),args);
});})(g__50343__auto___50464))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__50343__auto___50464){
return (function (seq50398){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50398));
});})(g__50343__auto___50464))
;


var g__50343__auto___50468 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__50343__auto___50468){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50469 = arguments.length;
var i__48850__auto___50470 = (0);
while(true){
if((i__48850__auto___50470 < len__48849__auto___50469)){
args__48856__auto__.push((arguments[i__48850__auto___50470]));

var G__50471 = (i__48850__auto___50470 + (1));
i__48850__auto___50470 = G__50471;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50343__auto___50468))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50343__auto___50468){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50343__auto___50468),args);
});})(g__50343__auto___50468))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__50343__auto___50468){
return (function (seq50399){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50399));
});})(g__50343__auto___50468))
;

var g__50356__auto___50493 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__50356__auto___50493){
return (function cljs$spec$impl$gen$any(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50494 = arguments.length;
var i__48850__auto___50495 = (0);
while(true){
if((i__48850__auto___50495 < len__48849__auto___50494)){
args__48856__auto__.push((arguments[i__48850__auto___50495]));

var G__50496 = (i__48850__auto___50495 + (1));
i__48850__auto___50495 = G__50496;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50493))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50493){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50493);
});})(g__50356__auto___50493))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__50356__auto___50493){
return (function (seq50472){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50472));
});})(g__50356__auto___50493))
;


var g__50356__auto___50497 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__50356__auto___50497){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50498 = arguments.length;
var i__48850__auto___50499 = (0);
while(true){
if((i__48850__auto___50499 < len__48849__auto___50498)){
args__48856__auto__.push((arguments[i__48850__auto___50499]));

var G__50500 = (i__48850__auto___50499 + (1));
i__48850__auto___50499 = G__50500;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50497))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50497){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50497);
});})(g__50356__auto___50497))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__50356__auto___50497){
return (function (seq50473){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50473));
});})(g__50356__auto___50497))
;


var g__50356__auto___50501 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__50356__auto___50501){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50502 = arguments.length;
var i__48850__auto___50503 = (0);
while(true){
if((i__48850__auto___50503 < len__48849__auto___50502)){
args__48856__auto__.push((arguments[i__48850__auto___50503]));

var G__50504 = (i__48850__auto___50503 + (1));
i__48850__auto___50503 = G__50504;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50501))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50501){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50501);
});})(g__50356__auto___50501))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__50356__auto___50501){
return (function (seq50474){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50474));
});})(g__50356__auto___50501))
;


var g__50356__auto___50505 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__50356__auto___50505){
return (function cljs$spec$impl$gen$char(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50506 = arguments.length;
var i__48850__auto___50507 = (0);
while(true){
if((i__48850__auto___50507 < len__48849__auto___50506)){
args__48856__auto__.push((arguments[i__48850__auto___50507]));

var G__50508 = (i__48850__auto___50507 + (1));
i__48850__auto___50507 = G__50508;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50505))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50505){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50505);
});})(g__50356__auto___50505))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__50356__auto___50505){
return (function (seq50475){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50475));
});})(g__50356__auto___50505))
;


var g__50356__auto___50509 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__50356__auto___50509){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50510 = arguments.length;
var i__48850__auto___50511 = (0);
while(true){
if((i__48850__auto___50511 < len__48849__auto___50510)){
args__48856__auto__.push((arguments[i__48850__auto___50511]));

var G__50512 = (i__48850__auto___50511 + (1));
i__48850__auto___50511 = G__50512;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50509))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50509){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50509);
});})(g__50356__auto___50509))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__50356__auto___50509){
return (function (seq50476){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50476));
});})(g__50356__auto___50509))
;


var g__50356__auto___50513 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__50356__auto___50513){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50514 = arguments.length;
var i__48850__auto___50515 = (0);
while(true){
if((i__48850__auto___50515 < len__48849__auto___50514)){
args__48856__auto__.push((arguments[i__48850__auto___50515]));

var G__50516 = (i__48850__auto___50515 + (1));
i__48850__auto___50515 = G__50516;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50513))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50513){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50513);
});})(g__50356__auto___50513))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__50356__auto___50513){
return (function (seq50477){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50477));
});})(g__50356__auto___50513))
;


var g__50356__auto___50517 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__50356__auto___50517){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50518 = arguments.length;
var i__48850__auto___50519 = (0);
while(true){
if((i__48850__auto___50519 < len__48849__auto___50518)){
args__48856__auto__.push((arguments[i__48850__auto___50519]));

var G__50520 = (i__48850__auto___50519 + (1));
i__48850__auto___50519 = G__50520;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50517))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50517){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50517);
});})(g__50356__auto___50517))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__50356__auto___50517){
return (function (seq50478){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50478));
});})(g__50356__auto___50517))
;


var g__50356__auto___50521 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__50356__auto___50521){
return (function cljs$spec$impl$gen$double(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50522 = arguments.length;
var i__48850__auto___50523 = (0);
while(true){
if((i__48850__auto___50523 < len__48849__auto___50522)){
args__48856__auto__.push((arguments[i__48850__auto___50523]));

var G__50524 = (i__48850__auto___50523 + (1));
i__48850__auto___50523 = G__50524;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50521))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50521){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50521);
});})(g__50356__auto___50521))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__50356__auto___50521){
return (function (seq50479){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50479));
});})(g__50356__auto___50521))
;


var g__50356__auto___50525 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__50356__auto___50525){
return (function cljs$spec$impl$gen$int(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50526 = arguments.length;
var i__48850__auto___50527 = (0);
while(true){
if((i__48850__auto___50527 < len__48849__auto___50526)){
args__48856__auto__.push((arguments[i__48850__auto___50527]));

var G__50528 = (i__48850__auto___50527 + (1));
i__48850__auto___50527 = G__50528;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50525))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50525){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50525);
});})(g__50356__auto___50525))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__50356__auto___50525){
return (function (seq50480){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50480));
});})(g__50356__auto___50525))
;


var g__50356__auto___50529 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__50356__auto___50529){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50530 = arguments.length;
var i__48850__auto___50531 = (0);
while(true){
if((i__48850__auto___50531 < len__48849__auto___50530)){
args__48856__auto__.push((arguments[i__48850__auto___50531]));

var G__50532 = (i__48850__auto___50531 + (1));
i__48850__auto___50531 = G__50532;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50529))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50529){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50529);
});})(g__50356__auto___50529))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__50356__auto___50529){
return (function (seq50481){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50481));
});})(g__50356__auto___50529))
;


var g__50356__auto___50533 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__50356__auto___50533){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50534 = arguments.length;
var i__48850__auto___50535 = (0);
while(true){
if((i__48850__auto___50535 < len__48849__auto___50534)){
args__48856__auto__.push((arguments[i__48850__auto___50535]));

var G__50536 = (i__48850__auto___50535 + (1));
i__48850__auto___50535 = G__50536;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50533))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50533){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50533);
});})(g__50356__auto___50533))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__50356__auto___50533){
return (function (seq50482){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50482));
});})(g__50356__auto___50533))
;


var g__50356__auto___50537 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__50356__auto___50537){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50538 = arguments.length;
var i__48850__auto___50539 = (0);
while(true){
if((i__48850__auto___50539 < len__48849__auto___50538)){
args__48856__auto__.push((arguments[i__48850__auto___50539]));

var G__50540 = (i__48850__auto___50539 + (1));
i__48850__auto___50539 = G__50540;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50537))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50537){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50537);
});})(g__50356__auto___50537))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__50356__auto___50537){
return (function (seq50483){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50483));
});})(g__50356__auto___50537))
;


var g__50356__auto___50541 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__50356__auto___50541){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50542 = arguments.length;
var i__48850__auto___50543 = (0);
while(true){
if((i__48850__auto___50543 < len__48849__auto___50542)){
args__48856__auto__.push((arguments[i__48850__auto___50543]));

var G__50544 = (i__48850__auto___50543 + (1));
i__48850__auto___50543 = G__50544;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50541))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50541){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50541);
});})(g__50356__auto___50541))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__50356__auto___50541){
return (function (seq50484){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50484));
});})(g__50356__auto___50541))
;


var g__50356__auto___50545 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__50356__auto___50545){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50546 = arguments.length;
var i__48850__auto___50547 = (0);
while(true){
if((i__48850__auto___50547 < len__48849__auto___50546)){
args__48856__auto__.push((arguments[i__48850__auto___50547]));

var G__50548 = (i__48850__auto___50547 + (1));
i__48850__auto___50547 = G__50548;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50545))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50545){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50545);
});})(g__50356__auto___50545))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__50356__auto___50545){
return (function (seq50485){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50485));
});})(g__50356__auto___50545))
;


var g__50356__auto___50549 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__50356__auto___50549){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50550 = arguments.length;
var i__48850__auto___50551 = (0);
while(true){
if((i__48850__auto___50551 < len__48849__auto___50550)){
args__48856__auto__.push((arguments[i__48850__auto___50551]));

var G__50552 = (i__48850__auto___50551 + (1));
i__48850__auto___50551 = G__50552;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50549))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50549){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50549);
});})(g__50356__auto___50549))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__50356__auto___50549){
return (function (seq50486){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50486));
});})(g__50356__auto___50549))
;


var g__50356__auto___50553 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__50356__auto___50553){
return (function cljs$spec$impl$gen$string(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50554 = arguments.length;
var i__48850__auto___50555 = (0);
while(true){
if((i__48850__auto___50555 < len__48849__auto___50554)){
args__48856__auto__.push((arguments[i__48850__auto___50555]));

var G__50556 = (i__48850__auto___50555 + (1));
i__48850__auto___50555 = G__50556;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50553))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50553){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50553);
});})(g__50356__auto___50553))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__50356__auto___50553){
return (function (seq50487){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50487));
});})(g__50356__auto___50553))
;


var g__50356__auto___50557 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__50356__auto___50557){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50558 = arguments.length;
var i__48850__auto___50559 = (0);
while(true){
if((i__48850__auto___50559 < len__48849__auto___50558)){
args__48856__auto__.push((arguments[i__48850__auto___50559]));

var G__50560 = (i__48850__auto___50559 + (1));
i__48850__auto___50559 = G__50560;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50557))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50557){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50557);
});})(g__50356__auto___50557))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__50356__auto___50557){
return (function (seq50488){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50488));
});})(g__50356__auto___50557))
;


var g__50356__auto___50561 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__50356__auto___50561){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50562 = arguments.length;
var i__48850__auto___50563 = (0);
while(true){
if((i__48850__auto___50563 < len__48849__auto___50562)){
args__48856__auto__.push((arguments[i__48850__auto___50563]));

var G__50564 = (i__48850__auto___50563 + (1));
i__48850__auto___50563 = G__50564;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50561))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50561){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50561);
});})(g__50356__auto___50561))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__50356__auto___50561){
return (function (seq50489){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50489));
});})(g__50356__auto___50561))
;


var g__50356__auto___50565 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__50356__auto___50565){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50566 = arguments.length;
var i__48850__auto___50567 = (0);
while(true){
if((i__48850__auto___50567 < len__48849__auto___50566)){
args__48856__auto__.push((arguments[i__48850__auto___50567]));

var G__50568 = (i__48850__auto___50567 + (1));
i__48850__auto___50567 = G__50568;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50565))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50565){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50565);
});})(g__50356__auto___50565))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__50356__auto___50565){
return (function (seq50490){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50490));
});})(g__50356__auto___50565))
;


var g__50356__auto___50569 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__50356__auto___50569){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50570 = arguments.length;
var i__48850__auto___50571 = (0);
while(true){
if((i__48850__auto___50571 < len__48849__auto___50570)){
args__48856__auto__.push((arguments[i__48850__auto___50571]));

var G__50572 = (i__48850__auto___50571 + (1));
i__48850__auto___50571 = G__50572;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50569))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50569){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50569);
});})(g__50356__auto___50569))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__50356__auto___50569){
return (function (seq50491){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50491));
});})(g__50356__auto___50569))
;


var g__50356__auto___50573 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__50356__auto___50573){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50574 = arguments.length;
var i__48850__auto___50575 = (0);
while(true){
if((i__48850__auto___50575 < len__48849__auto___50574)){
args__48856__auto__.push((arguments[i__48850__auto___50575]));

var G__50576 = (i__48850__auto___50575 + (1));
i__48850__auto___50575 = G__50576;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});})(g__50356__auto___50573))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50356__auto___50573){
return (function (args){
return cljs.core.deref.call(null,g__50356__auto___50573);
});})(g__50356__auto___50573))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__50356__auto___50573){
return (function (seq50492){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50492));
});})(g__50356__auto___50573))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__48856__auto__ = [];
var len__48849__auto___50579 = arguments.length;
var i__48850__auto___50580 = (0);
while(true){
if((i__48850__auto___50580 < len__48849__auto___50579)){
args__48856__auto__.push((arguments[i__48850__auto___50580]));

var G__50581 = (i__48850__auto___50580 + (1));
i__48850__auto___50580 = G__50581;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__50577_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50577_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq50578){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50578));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__50582_SHARP_){
return (new Date(p1__50582_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1509481864154