// Compiled by ClojureScript 1.9.293 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__49795_49799 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__49796_49800 = null;
var count__49797_49801 = (0);
var i__49798_49802 = (0);
while(true){
if((i__49798_49802 < count__49797_49801)){
var k_49803 = cljs.core._nth.call(null,chunk__49796_49800,i__49798_49802);
var v_49804 = (b[k_49803]);
(a[k_49803] = v_49804);

var G__49805 = seq__49795_49799;
var G__49806 = chunk__49796_49800;
var G__49807 = count__49797_49801;
var G__49808 = (i__49798_49802 + (1));
seq__49795_49799 = G__49805;
chunk__49796_49800 = G__49806;
count__49797_49801 = G__49807;
i__49798_49802 = G__49808;
continue;
} else {
var temp__6753__auto___49809 = cljs.core.seq.call(null,seq__49795_49799);
if(temp__6753__auto___49809){
var seq__49795_49810__$1 = temp__6753__auto___49809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49795_49810__$1)){
var c__48539__auto___49811 = cljs.core.chunk_first.call(null,seq__49795_49810__$1);
var G__49812 = cljs.core.chunk_rest.call(null,seq__49795_49810__$1);
var G__49813 = c__48539__auto___49811;
var G__49814 = cljs.core.count.call(null,c__48539__auto___49811);
var G__49815 = (0);
seq__49795_49799 = G__49812;
chunk__49796_49800 = G__49813;
count__49797_49801 = G__49814;
i__49798_49802 = G__49815;
continue;
} else {
var k_49816 = cljs.core.first.call(null,seq__49795_49810__$1);
var v_49817 = (b[k_49816]);
(a[k_49816] = v_49817);

var G__49818 = cljs.core.next.call(null,seq__49795_49810__$1);
var G__49819 = null;
var G__49820 = (0);
var G__49821 = (0);
seq__49795_49799 = G__49818;
chunk__49796_49800 = G__49819;
count__49797_49801 = G__49820;
i__49798_49802 = G__49821;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args49822 = [];
var len__48849__auto___49825 = arguments.length;
var i__48850__auto___49826 = (0);
while(true){
if((i__48850__auto___49826 < len__48849__auto___49825)){
args49822.push((arguments[i__48850__auto___49826]));

var G__49827 = (i__48850__auto___49826 + (1));
i__48850__auto___49826 = G__49827;
continue;
} else {
}
break;
}

var G__49824 = args49822.length;
switch (G__49824) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49822.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__49829 = (i + (2));
var G__49830 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__49829;
ret = G__49830;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__49831_49835 = cljs.core.seq.call(null,v);
var chunk__49832_49836 = null;
var count__49833_49837 = (0);
var i__49834_49838 = (0);
while(true){
if((i__49834_49838 < count__49833_49837)){
var x_49839 = cljs.core._nth.call(null,chunk__49832_49836,i__49834_49838);
ret.push(x_49839);

var G__49840 = seq__49831_49835;
var G__49841 = chunk__49832_49836;
var G__49842 = count__49833_49837;
var G__49843 = (i__49834_49838 + (1));
seq__49831_49835 = G__49840;
chunk__49832_49836 = G__49841;
count__49833_49837 = G__49842;
i__49834_49838 = G__49843;
continue;
} else {
var temp__6753__auto___49844 = cljs.core.seq.call(null,seq__49831_49835);
if(temp__6753__auto___49844){
var seq__49831_49845__$1 = temp__6753__auto___49844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49831_49845__$1)){
var c__48539__auto___49846 = cljs.core.chunk_first.call(null,seq__49831_49845__$1);
var G__49847 = cljs.core.chunk_rest.call(null,seq__49831_49845__$1);
var G__49848 = c__48539__auto___49846;
var G__49849 = cljs.core.count.call(null,c__48539__auto___49846);
var G__49850 = (0);
seq__49831_49835 = G__49847;
chunk__49832_49836 = G__49848;
count__49833_49837 = G__49849;
i__49834_49838 = G__49850;
continue;
} else {
var x_49851 = cljs.core.first.call(null,seq__49831_49845__$1);
ret.push(x_49851);

var G__49852 = cljs.core.next.call(null,seq__49831_49845__$1);
var G__49853 = null;
var G__49854 = (0);
var G__49855 = (0);
seq__49831_49835 = G__49852;
chunk__49832_49836 = G__49853;
count__49833_49837 = G__49854;
i__49834_49838 = G__49855;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__49856_49860 = cljs.core.seq.call(null,v);
var chunk__49857_49861 = null;
var count__49858_49862 = (0);
var i__49859_49863 = (0);
while(true){
if((i__49859_49863 < count__49858_49862)){
var x_49864 = cljs.core._nth.call(null,chunk__49857_49861,i__49859_49863);
ret.push(x_49864);

var G__49865 = seq__49856_49860;
var G__49866 = chunk__49857_49861;
var G__49867 = count__49858_49862;
var G__49868 = (i__49859_49863 + (1));
seq__49856_49860 = G__49865;
chunk__49857_49861 = G__49866;
count__49858_49862 = G__49867;
i__49859_49863 = G__49868;
continue;
} else {
var temp__6753__auto___49869 = cljs.core.seq.call(null,seq__49856_49860);
if(temp__6753__auto___49869){
var seq__49856_49870__$1 = temp__6753__auto___49869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49856_49870__$1)){
var c__48539__auto___49871 = cljs.core.chunk_first.call(null,seq__49856_49870__$1);
var G__49872 = cljs.core.chunk_rest.call(null,seq__49856_49870__$1);
var G__49873 = c__48539__auto___49871;
var G__49874 = cljs.core.count.call(null,c__48539__auto___49871);
var G__49875 = (0);
seq__49856_49860 = G__49872;
chunk__49857_49861 = G__49873;
count__49858_49862 = G__49874;
i__49859_49863 = G__49875;
continue;
} else {
var x_49876 = cljs.core.first.call(null,seq__49856_49870__$1);
ret.push(x_49876);

var G__49877 = cljs.core.next.call(null,seq__49856_49870__$1);
var G__49878 = null;
var G__49879 = (0);
var G__49880 = (0);
seq__49856_49860 = G__49877;
chunk__49857_49861 = G__49878;
count__49858_49862 = G__49879;
i__49859_49863 = G__49880;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__49881_49885 = cljs.core.seq.call(null,v);
var chunk__49882_49886 = null;
var count__49883_49887 = (0);
var i__49884_49888 = (0);
while(true){
if((i__49884_49888 < count__49883_49887)){
var x_49889 = cljs.core._nth.call(null,chunk__49882_49886,i__49884_49888);
ret.push(x_49889);

var G__49890 = seq__49881_49885;
var G__49891 = chunk__49882_49886;
var G__49892 = count__49883_49887;
var G__49893 = (i__49884_49888 + (1));
seq__49881_49885 = G__49890;
chunk__49882_49886 = G__49891;
count__49883_49887 = G__49892;
i__49884_49888 = G__49893;
continue;
} else {
var temp__6753__auto___49894 = cljs.core.seq.call(null,seq__49881_49885);
if(temp__6753__auto___49894){
var seq__49881_49895__$1 = temp__6753__auto___49894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49881_49895__$1)){
var c__48539__auto___49896 = cljs.core.chunk_first.call(null,seq__49881_49895__$1);
var G__49897 = cljs.core.chunk_rest.call(null,seq__49881_49895__$1);
var G__49898 = c__48539__auto___49896;
var G__49899 = cljs.core.count.call(null,c__48539__auto___49896);
var G__49900 = (0);
seq__49881_49885 = G__49897;
chunk__49882_49886 = G__49898;
count__49883_49887 = G__49899;
i__49884_49888 = G__49900;
continue;
} else {
var x_49901 = cljs.core.first.call(null,seq__49881_49895__$1);
ret.push(x_49901);

var G__49902 = cljs.core.next.call(null,seq__49881_49895__$1);
var G__49903 = null;
var G__49904 = (0);
var G__49905 = (0);
seq__49881_49885 = G__49902;
chunk__49882_49886 = G__49903;
count__49883_49887 = G__49904;
i__49884_49888 = G__49905;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args49906 = [];
var len__48849__auto___49921 = arguments.length;
var i__48850__auto___49922 = (0);
while(true){
if((i__48850__auto___49922 < len__48849__auto___49921)){
args49906.push((arguments[i__48850__auto___49922]));

var G__49923 = (i__48850__auto___49922 + (1));
i__48850__auto___49922 = G__49923;
continue;
} else {
}
break;
}

var G__49908 = args49906.length;
switch (G__49908) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49906.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__49909 = obj;
G__49909.push(kfn.call(null,k),vfn.call(null,v));

return G__49909;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x49910 = cljs.core.clone.call(null,handlers);
x49910.forEach = ((function (x49910,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__49911 = cljs.core.seq.call(null,coll);
var chunk__49912 = null;
var count__49913 = (0);
var i__49914 = (0);
while(true){
if((i__49914 < count__49913)){
var vec__49915 = cljs.core._nth.call(null,chunk__49912,i__49914);
var k = cljs.core.nth.call(null,vec__49915,(0),null);
var v = cljs.core.nth.call(null,vec__49915,(1),null);
f.call(null,v,k);

var G__49925 = seq__49911;
var G__49926 = chunk__49912;
var G__49927 = count__49913;
var G__49928 = (i__49914 + (1));
seq__49911 = G__49925;
chunk__49912 = G__49926;
count__49913 = G__49927;
i__49914 = G__49928;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__49911);
if(temp__6753__auto__){
var seq__49911__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49911__$1)){
var c__48539__auto__ = cljs.core.chunk_first.call(null,seq__49911__$1);
var G__49929 = cljs.core.chunk_rest.call(null,seq__49911__$1);
var G__49930 = c__48539__auto__;
var G__49931 = cljs.core.count.call(null,c__48539__auto__);
var G__49932 = (0);
seq__49911 = G__49929;
chunk__49912 = G__49930;
count__49913 = G__49931;
i__49914 = G__49932;
continue;
} else {
var vec__49918 = cljs.core.first.call(null,seq__49911__$1);
var k = cljs.core.nth.call(null,vec__49918,(0),null);
var v = cljs.core.nth.call(null,vec__49918,(1),null);
f.call(null,v,k);

var G__49933 = cljs.core.next.call(null,seq__49911__$1);
var G__49934 = null;
var G__49935 = (0);
var G__49936 = (0);
seq__49911 = G__49933;
chunk__49912 = G__49934;
count__49913 = G__49935;
i__49914 = G__49936;
continue;
}
} else {
return null;
}
}
break;
}
});})(x49910,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x49910;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args49937 = [];
var len__48849__auto___49943 = arguments.length;
var i__48850__auto___49944 = (0);
while(true){
if((i__48850__auto___49944 < len__48849__auto___49943)){
args49937.push((arguments[i__48850__auto___49944]));

var G__49945 = (i__48850__auto___49944 + (1));
i__48850__auto___49944 = G__49945;
continue;
} else {
}
break;
}

var G__49939 = args49937.length;
switch (G__49939) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49937.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit49940 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit49940 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta49941){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta49941 = meta49941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit49940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49942,meta49941__$1){
var self__ = this;
var _49942__$1 = this;
return (new cognitect.transit.t_cognitect$transit49940(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta49941__$1));
});

cognitect.transit.t_cognitect$transit49940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49942){
var self__ = this;
var _49942__$1 = this;
return self__.meta49941;
});

cognitect.transit.t_cognitect$transit49940.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit49940.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit49940.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit49940.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit49940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta49941","meta49941",2024143742,null)], null);
});

cognitect.transit.t_cognitect$transit49940.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit49940.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit49940";

cognitect.transit.t_cognitect$transit49940.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cognitect.transit/t_cognitect$transit49940");
});

cognitect.transit.__GT_t_cognitect$transit49940 = (function cognitect$transit$__GT_t_cognitect$transit49940(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta49941){
return (new cognitect.transit.t_cognitect$transit49940(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta49941));
});

}

return (new cognitect.transit.t_cognitect$transit49940(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__47633__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__47633__auto__)){
return or__47633__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1509481863067