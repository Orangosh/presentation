// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56962){
var map__56987 = p__56962;
var map__56987__$1 = ((((!((map__56987 == null)))?((((map__56987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56987):map__56987);
var m = map__56987__$1;
var n = cljs.core.get.call(null,map__56987__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__56987__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56989_57011 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56990_57012 = null;
var count__56991_57013 = (0);
var i__56992_57014 = (0);
while(true){
if((i__56992_57014 < count__56991_57013)){
var f_57015 = cljs.core._nth.call(null,chunk__56990_57012,i__56992_57014);
cljs.core.println.call(null,"  ",f_57015);

var G__57016 = seq__56989_57011;
var G__57017 = chunk__56990_57012;
var G__57018 = count__56991_57013;
var G__57019 = (i__56992_57014 + (1));
seq__56989_57011 = G__57016;
chunk__56990_57012 = G__57017;
count__56991_57013 = G__57018;
i__56992_57014 = G__57019;
continue;
} else {
var temp__6753__auto___57020 = cljs.core.seq.call(null,seq__56989_57011);
if(temp__6753__auto___57020){
var seq__56989_57021__$1 = temp__6753__auto___57020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56989_57021__$1)){
var c__48539__auto___57022 = cljs.core.chunk_first.call(null,seq__56989_57021__$1);
var G__57023 = cljs.core.chunk_rest.call(null,seq__56989_57021__$1);
var G__57024 = c__48539__auto___57022;
var G__57025 = cljs.core.count.call(null,c__48539__auto___57022);
var G__57026 = (0);
seq__56989_57011 = G__57023;
chunk__56990_57012 = G__57024;
count__56991_57013 = G__57025;
i__56992_57014 = G__57026;
continue;
} else {
var f_57027 = cljs.core.first.call(null,seq__56989_57021__$1);
cljs.core.println.call(null,"  ",f_57027);

var G__57028 = cljs.core.next.call(null,seq__56989_57021__$1);
var G__57029 = null;
var G__57030 = (0);
var G__57031 = (0);
seq__56989_57011 = G__57028;
chunk__56990_57012 = G__57029;
count__56991_57013 = G__57030;
i__56992_57014 = G__57031;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57032 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__47633__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__47633__auto__)){
return or__47633__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_57032);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_57032)))?cljs.core.second.call(null,arglists_57032):arglists_57032));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56993_57033 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56994_57034 = null;
var count__56995_57035 = (0);
var i__56996_57036 = (0);
while(true){
if((i__56996_57036 < count__56995_57035)){
var vec__56997_57037 = cljs.core._nth.call(null,chunk__56994_57034,i__56996_57036);
var name_57038 = cljs.core.nth.call(null,vec__56997_57037,(0),null);
var map__57000_57039 = cljs.core.nth.call(null,vec__56997_57037,(1),null);
var map__57000_57040__$1 = ((((!((map__57000_57039 == null)))?((((map__57000_57039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57000_57039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57000_57039):map__57000_57039);
var doc_57041 = cljs.core.get.call(null,map__57000_57040__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57042 = cljs.core.get.call(null,map__57000_57040__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_57038);

cljs.core.println.call(null," ",arglists_57042);

if(cljs.core.truth_(doc_57041)){
cljs.core.println.call(null," ",doc_57041);
} else {
}

var G__57043 = seq__56993_57033;
var G__57044 = chunk__56994_57034;
var G__57045 = count__56995_57035;
var G__57046 = (i__56996_57036 + (1));
seq__56993_57033 = G__57043;
chunk__56994_57034 = G__57044;
count__56995_57035 = G__57045;
i__56996_57036 = G__57046;
continue;
} else {
var temp__6753__auto___57047 = cljs.core.seq.call(null,seq__56993_57033);
if(temp__6753__auto___57047){
var seq__56993_57048__$1 = temp__6753__auto___57047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56993_57048__$1)){
var c__48539__auto___57049 = cljs.core.chunk_first.call(null,seq__56993_57048__$1);
var G__57050 = cljs.core.chunk_rest.call(null,seq__56993_57048__$1);
var G__57051 = c__48539__auto___57049;
var G__57052 = cljs.core.count.call(null,c__48539__auto___57049);
var G__57053 = (0);
seq__56993_57033 = G__57050;
chunk__56994_57034 = G__57051;
count__56995_57035 = G__57052;
i__56996_57036 = G__57053;
continue;
} else {
var vec__57002_57054 = cljs.core.first.call(null,seq__56993_57048__$1);
var name_57055 = cljs.core.nth.call(null,vec__57002_57054,(0),null);
var map__57005_57056 = cljs.core.nth.call(null,vec__57002_57054,(1),null);
var map__57005_57057__$1 = ((((!((map__57005_57056 == null)))?((((map__57005_57056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57005_57056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57005_57056):map__57005_57056);
var doc_57058 = cljs.core.get.call(null,map__57005_57057__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57059 = cljs.core.get.call(null,map__57005_57057__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_57055);

cljs.core.println.call(null," ",arglists_57059);

if(cljs.core.truth_(doc_57058)){
cljs.core.println.call(null," ",doc_57058);
} else {
}

var G__57060 = cljs.core.next.call(null,seq__56993_57048__$1);
var G__57061 = null;
var G__57062 = (0);
var G__57063 = (0);
seq__56993_57033 = G__57060;
chunk__56994_57034 = G__57061;
count__56995_57035 = G__57062;
i__56996_57036 = G__57063;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__57007 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__57008 = null;
var count__57009 = (0);
var i__57010 = (0);
while(true){
if((i__57010 < count__57009)){
var role = cljs.core._nth.call(null,chunk__57008,i__57010);
var temp__6753__auto___57064__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___57064__$1)){
var spec_57065 = temp__6753__auto___57064__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_57065));
} else {
}

var G__57066 = seq__57007;
var G__57067 = chunk__57008;
var G__57068 = count__57009;
var G__57069 = (i__57010 + (1));
seq__57007 = G__57066;
chunk__57008 = G__57067;
count__57009 = G__57068;
i__57010 = G__57069;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__57007);
if(temp__6753__auto____$1){
var seq__57007__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57007__$1)){
var c__48539__auto__ = cljs.core.chunk_first.call(null,seq__57007__$1);
var G__57070 = cljs.core.chunk_rest.call(null,seq__57007__$1);
var G__57071 = c__48539__auto__;
var G__57072 = cljs.core.count.call(null,c__48539__auto__);
var G__57073 = (0);
seq__57007 = G__57070;
chunk__57008 = G__57071;
count__57009 = G__57072;
i__57010 = G__57073;
continue;
} else {
var role = cljs.core.first.call(null,seq__57007__$1);
var temp__6753__auto___57074__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___57074__$2)){
var spec_57075 = temp__6753__auto___57074__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_57075));
} else {
}

var G__57076 = cljs.core.next.call(null,seq__57007__$1);
var G__57077 = null;
var G__57078 = (0);
var G__57079 = (0);
seq__57007 = G__57076;
chunk__57008 = G__57077;
count__57009 = G__57078;
i__57010 = G__57079;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1509481868736