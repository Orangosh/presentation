goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('show.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__60203__delegate = function (x){
if(cljs.core.truth_(show.core.on_jsload)){
return cljs.core.apply.call(null,show.core.on_jsload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'show.core/on-jsload' is missing");
}
};
var G__60203 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__60204__i = 0, G__60204__a = new Array(arguments.length -  0);
while (G__60204__i < G__60204__a.length) {G__60204__a[G__60204__i] = arguments[G__60204__i + 0]; ++G__60204__i;}
  x = new cljs.core.IndexedSeq(G__60204__a,0);
} 
return G__60203__delegate.call(this,x);};
G__60203.cljs$lang$maxFixedArity = 0;
G__60203.cljs$lang$applyTo = (function (arglist__60205){
var x = cljs.core.seq(arglist__60205);
return G__60203__delegate(x);
});
G__60203.cljs$core$IFn$_invoke$arity$variadic = G__60203__delegate;
return G__60203;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3461/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3461/figwheel-ws"], null));
