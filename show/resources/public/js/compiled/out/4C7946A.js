goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('show.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__59583__delegate = function (x){
if(cljs.core.truth_(show.core.on_jsload)){
return cljs.core.apply.call(null,show.core.on_jsload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'show.core/on-jsload' is missing");
}
};
var G__59583 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__59584__i = 0, G__59584__a = new Array(arguments.length -  0);
while (G__59584__i < G__59584__a.length) {G__59584__a[G__59584__i] = arguments[G__59584__i + 0]; ++G__59584__i;}
  x = new cljs.core.IndexedSeq(G__59584__a,0);
} 
return G__59583__delegate.call(this,x);};
G__59583.cljs$lang$maxFixedArity = 0;
G__59583.cljs$lang$applyTo = (function (arglist__59585){
var x = cljs.core.seq(arglist__59585);
return G__59583__delegate(x);
});
G__59583.cljs$core$IFn$_invoke$arity$variadic = G__59583__delegate;
return G__59583;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3461/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3461/figwheel-ws"], null));
