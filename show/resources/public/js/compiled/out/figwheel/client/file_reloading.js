// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__47633__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__47633__auto__){
return or__47633__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__47633__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__47633__auto__)){
return or__47633__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__55905_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__55905_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__55910 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__55911 = null;
var count__55912 = (0);
var i__55913 = (0);
while(true){
if((i__55913 < count__55912)){
var n = cljs.core._nth.call(null,chunk__55911,i__55913);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__55914 = seq__55910;
var G__55915 = chunk__55911;
var G__55916 = count__55912;
var G__55917 = (i__55913 + (1));
seq__55910 = G__55914;
chunk__55911 = G__55915;
count__55912 = G__55916;
i__55913 = G__55917;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__55910);
if(temp__6753__auto__){
var seq__55910__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55910__$1)){
var c__48539__auto__ = cljs.core.chunk_first.call(null,seq__55910__$1);
var G__55918 = cljs.core.chunk_rest.call(null,seq__55910__$1);
var G__55919 = c__48539__auto__;
var G__55920 = cljs.core.count.call(null,c__48539__auto__);
var G__55921 = (0);
seq__55910 = G__55918;
chunk__55911 = G__55919;
count__55912 = G__55920;
i__55913 = G__55921;
continue;
} else {
var n = cljs.core.first.call(null,seq__55910__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__55922 = cljs.core.next.call(null,seq__55910__$1);
var G__55923 = null;
var G__55924 = (0);
var G__55925 = (0);
seq__55910 = G__55922;
chunk__55911 = G__55923;
count__55912 = G__55924;
i__55913 = G__55925;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__55976_55987 = cljs.core.seq.call(null,deps);
var chunk__55977_55988 = null;
var count__55978_55989 = (0);
var i__55979_55990 = (0);
while(true){
if((i__55979_55990 < count__55978_55989)){
var dep_55991 = cljs.core._nth.call(null,chunk__55977_55988,i__55979_55990);
topo_sort_helper_STAR_.call(null,dep_55991,(depth + (1)),state);

var G__55992 = seq__55976_55987;
var G__55993 = chunk__55977_55988;
var G__55994 = count__55978_55989;
var G__55995 = (i__55979_55990 + (1));
seq__55976_55987 = G__55992;
chunk__55977_55988 = G__55993;
count__55978_55989 = G__55994;
i__55979_55990 = G__55995;
continue;
} else {
var temp__6753__auto___55996 = cljs.core.seq.call(null,seq__55976_55987);
if(temp__6753__auto___55996){
var seq__55976_55997__$1 = temp__6753__auto___55996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55976_55997__$1)){
var c__48539__auto___55998 = cljs.core.chunk_first.call(null,seq__55976_55997__$1);
var G__55999 = cljs.core.chunk_rest.call(null,seq__55976_55997__$1);
var G__56000 = c__48539__auto___55998;
var G__56001 = cljs.core.count.call(null,c__48539__auto___55998);
var G__56002 = (0);
seq__55976_55987 = G__55999;
chunk__55977_55988 = G__56000;
count__55978_55989 = G__56001;
i__55979_55990 = G__56002;
continue;
} else {
var dep_56003 = cljs.core.first.call(null,seq__55976_55997__$1);
topo_sort_helper_STAR_.call(null,dep_56003,(depth + (1)),state);

var G__56004 = cljs.core.next.call(null,seq__55976_55997__$1);
var G__56005 = null;
var G__56006 = (0);
var G__56007 = (0);
seq__55976_55987 = G__56004;
chunk__55977_55988 = G__56005;
count__55978_55989 = G__56006;
i__55979_55990 = G__56007;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__55980){
var vec__55984 = p__55980;
var seq__55985 = cljs.core.seq.call(null,vec__55984);
var first__55986 = cljs.core.first.call(null,seq__55985);
var seq__55985__$1 = cljs.core.next.call(null,seq__55985);
var x = first__55986;
var xs = seq__55985__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__55984,seq__55985,first__55986,seq__55985__$1,x,xs,get_deps__$1){
return (function (p1__55926_SHARP_){
return clojure.set.difference.call(null,p1__55926_SHARP_,x);
});})(vec__55984,seq__55985,first__55986,seq__55985__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__56020 = cljs.core.seq.call(null,provides);
var chunk__56021 = null;
var count__56022 = (0);
var i__56023 = (0);
while(true){
if((i__56023 < count__56022)){
var prov = cljs.core._nth.call(null,chunk__56021,i__56023);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__56024_56032 = cljs.core.seq.call(null,requires);
var chunk__56025_56033 = null;
var count__56026_56034 = (0);
var i__56027_56035 = (0);
while(true){
if((i__56027_56035 < count__56026_56034)){
var req_56036 = cljs.core._nth.call(null,chunk__56025_56033,i__56027_56035);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56036,prov);

var G__56037 = seq__56024_56032;
var G__56038 = chunk__56025_56033;
var G__56039 = count__56026_56034;
var G__56040 = (i__56027_56035 + (1));
seq__56024_56032 = G__56037;
chunk__56025_56033 = G__56038;
count__56026_56034 = G__56039;
i__56027_56035 = G__56040;
continue;
} else {
var temp__6753__auto___56041 = cljs.core.seq.call(null,seq__56024_56032);
if(temp__6753__auto___56041){
var seq__56024_56042__$1 = temp__6753__auto___56041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56024_56042__$1)){
var c__48539__auto___56043 = cljs.core.chunk_first.call(null,seq__56024_56042__$1);
var G__56044 = cljs.core.chunk_rest.call(null,seq__56024_56042__$1);
var G__56045 = c__48539__auto___56043;
var G__56046 = cljs.core.count.call(null,c__48539__auto___56043);
var G__56047 = (0);
seq__56024_56032 = G__56044;
chunk__56025_56033 = G__56045;
count__56026_56034 = G__56046;
i__56027_56035 = G__56047;
continue;
} else {
var req_56048 = cljs.core.first.call(null,seq__56024_56042__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56048,prov);

var G__56049 = cljs.core.next.call(null,seq__56024_56042__$1);
var G__56050 = null;
var G__56051 = (0);
var G__56052 = (0);
seq__56024_56032 = G__56049;
chunk__56025_56033 = G__56050;
count__56026_56034 = G__56051;
i__56027_56035 = G__56052;
continue;
}
} else {
}
}
break;
}

var G__56053 = seq__56020;
var G__56054 = chunk__56021;
var G__56055 = count__56022;
var G__56056 = (i__56023 + (1));
seq__56020 = G__56053;
chunk__56021 = G__56054;
count__56022 = G__56055;
i__56023 = G__56056;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__56020);
if(temp__6753__auto__){
var seq__56020__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56020__$1)){
var c__48539__auto__ = cljs.core.chunk_first.call(null,seq__56020__$1);
var G__56057 = cljs.core.chunk_rest.call(null,seq__56020__$1);
var G__56058 = c__48539__auto__;
var G__56059 = cljs.core.count.call(null,c__48539__auto__);
var G__56060 = (0);
seq__56020 = G__56057;
chunk__56021 = G__56058;
count__56022 = G__56059;
i__56023 = G__56060;
continue;
} else {
var prov = cljs.core.first.call(null,seq__56020__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__56028_56061 = cljs.core.seq.call(null,requires);
var chunk__56029_56062 = null;
var count__56030_56063 = (0);
var i__56031_56064 = (0);
while(true){
if((i__56031_56064 < count__56030_56063)){
var req_56065 = cljs.core._nth.call(null,chunk__56029_56062,i__56031_56064);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56065,prov);

var G__56066 = seq__56028_56061;
var G__56067 = chunk__56029_56062;
var G__56068 = count__56030_56063;
var G__56069 = (i__56031_56064 + (1));
seq__56028_56061 = G__56066;
chunk__56029_56062 = G__56067;
count__56030_56063 = G__56068;
i__56031_56064 = G__56069;
continue;
} else {
var temp__6753__auto___56070__$1 = cljs.core.seq.call(null,seq__56028_56061);
if(temp__6753__auto___56070__$1){
var seq__56028_56071__$1 = temp__6753__auto___56070__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56028_56071__$1)){
var c__48539__auto___56072 = cljs.core.chunk_first.call(null,seq__56028_56071__$1);
var G__56073 = cljs.core.chunk_rest.call(null,seq__56028_56071__$1);
var G__56074 = c__48539__auto___56072;
var G__56075 = cljs.core.count.call(null,c__48539__auto___56072);
var G__56076 = (0);
seq__56028_56061 = G__56073;
chunk__56029_56062 = G__56074;
count__56030_56063 = G__56075;
i__56031_56064 = G__56076;
continue;
} else {
var req_56077 = cljs.core.first.call(null,seq__56028_56071__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56077,prov);

var G__56078 = cljs.core.next.call(null,seq__56028_56071__$1);
var G__56079 = null;
var G__56080 = (0);
var G__56081 = (0);
seq__56028_56061 = G__56078;
chunk__56029_56062 = G__56079;
count__56030_56063 = G__56080;
i__56031_56064 = G__56081;
continue;
}
} else {
}
}
break;
}

var G__56082 = cljs.core.next.call(null,seq__56020__$1);
var G__56083 = null;
var G__56084 = (0);
var G__56085 = (0);
seq__56020 = G__56082;
chunk__56021 = G__56083;
count__56022 = G__56084;
i__56023 = G__56085;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__56090_56094 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__56091_56095 = null;
var count__56092_56096 = (0);
var i__56093_56097 = (0);
while(true){
if((i__56093_56097 < count__56092_56096)){
var ns_56098 = cljs.core._nth.call(null,chunk__56091_56095,i__56093_56097);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_56098);

var G__56099 = seq__56090_56094;
var G__56100 = chunk__56091_56095;
var G__56101 = count__56092_56096;
var G__56102 = (i__56093_56097 + (1));
seq__56090_56094 = G__56099;
chunk__56091_56095 = G__56100;
count__56092_56096 = G__56101;
i__56093_56097 = G__56102;
continue;
} else {
var temp__6753__auto___56103 = cljs.core.seq.call(null,seq__56090_56094);
if(temp__6753__auto___56103){
var seq__56090_56104__$1 = temp__6753__auto___56103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56090_56104__$1)){
var c__48539__auto___56105 = cljs.core.chunk_first.call(null,seq__56090_56104__$1);
var G__56106 = cljs.core.chunk_rest.call(null,seq__56090_56104__$1);
var G__56107 = c__48539__auto___56105;
var G__56108 = cljs.core.count.call(null,c__48539__auto___56105);
var G__56109 = (0);
seq__56090_56094 = G__56106;
chunk__56091_56095 = G__56107;
count__56092_56096 = G__56108;
i__56093_56097 = G__56109;
continue;
} else {
var ns_56110 = cljs.core.first.call(null,seq__56090_56104__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_56110);

var G__56111 = cljs.core.next.call(null,seq__56090_56104__$1);
var G__56112 = null;
var G__56113 = (0);
var G__56114 = (0);
seq__56090_56094 = G__56111;
chunk__56091_56095 = G__56112;
count__56092_56096 = G__56113;
i__56093_56097 = G__56114;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__47633__auto__ = goog.require__;
if(cljs.core.truth_(or__47633__auto__)){
return or__47633__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__56115__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__56115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56116__i = 0, G__56116__a = new Array(arguments.length -  0);
while (G__56116__i < G__56116__a.length) {G__56116__a[G__56116__i] = arguments[G__56116__i + 0]; ++G__56116__i;}
  args = new cljs.core.IndexedSeq(G__56116__a,0);
} 
return G__56115__delegate.call(this,args);};
G__56115.cljs$lang$maxFixedArity = 0;
G__56115.cljs$lang$applyTo = (function (arglist__56117){
var args = cljs.core.seq(arglist__56117);
return G__56115__delegate(args);
});
G__56115.cljs$core$IFn$_invoke$arity$variadic = G__56115__delegate;
return G__56115;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__56119 = cljs.core._EQ_;
var expr__56120 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__56119.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__56120))){
var path_parts = ((function (pred__56119,expr__56120){
return (function (p1__56118_SHARP_){
return clojure.string.split.call(null,p1__56118_SHARP_,/[\/\\]/);
});})(pred__56119,expr__56120))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__56119,expr__56120){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e56122){if((e56122 instanceof Error)){
var e = e56122;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e56122;

}
}})());
});
;})(path_parts,sep,root,pred__56119,expr__56120))
} else {
if(cljs.core.truth_(pred__56119.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__56120))){
return ((function (pred__56119,expr__56120){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__56119,expr__56120){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__56119,expr__56120))
);

return deferred.addErrback(((function (deferred,pred__56119,expr__56120){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__56119,expr__56120))
);
});
;})(pred__56119,expr__56120))
} else {
return ((function (pred__56119,expr__56120){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__56119,expr__56120))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__56123,callback){
var map__56126 = p__56123;
var map__56126__$1 = ((((!((map__56126 == null)))?((((map__56126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56126):map__56126);
var file_msg = map__56126__$1;
var request_url = cljs.core.get.call(null,map__56126__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__56126,map__56126__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__56126,map__56126__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__53002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto__){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto__){
return (function (state_56150){
var state_val_56151 = (state_56150[(1)]);
if((state_val_56151 === (7))){
var inst_56146 = (state_56150[(2)]);
var state_56150__$1 = state_56150;
var statearr_56152_56172 = state_56150__$1;
(statearr_56152_56172[(2)] = inst_56146);

(statearr_56152_56172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56151 === (1))){
var state_56150__$1 = state_56150;
var statearr_56153_56173 = state_56150__$1;
(statearr_56153_56173[(2)] = null);

(statearr_56153_56173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56151 === (4))){
var inst_56130 = (state_56150[(7)]);
var inst_56130__$1 = (state_56150[(2)]);
var state_56150__$1 = (function (){var statearr_56154 = state_56150;
(statearr_56154[(7)] = inst_56130__$1);

return statearr_56154;
})();
if(cljs.core.truth_(inst_56130__$1)){
var statearr_56155_56174 = state_56150__$1;
(statearr_56155_56174[(1)] = (5));

} else {
var statearr_56156_56175 = state_56150__$1;
(statearr_56156_56175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56151 === (6))){
var state_56150__$1 = state_56150;
var statearr_56157_56176 = state_56150__$1;
(statearr_56157_56176[(2)] = null);

(statearr_56157_56176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56151 === (3))){
var inst_56148 = (state_56150[(2)]);
var state_56150__$1 = state_56150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56150__$1,inst_56148);
} else {
if((state_val_56151 === (2))){
var state_56150__$1 = state_56150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56150__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_56151 === (11))){
var inst_56142 = (state_56150[(2)]);
var state_56150__$1 = (function (){var statearr_56158 = state_56150;
(statearr_56158[(8)] = inst_56142);

return statearr_56158;
})();
var statearr_56159_56177 = state_56150__$1;
(statearr_56159_56177[(2)] = null);

(statearr_56159_56177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56151 === (9))){
var inst_56134 = (state_56150[(9)]);
var inst_56136 = (state_56150[(10)]);
var inst_56138 = inst_56136.call(null,inst_56134);
var state_56150__$1 = state_56150;
var statearr_56160_56178 = state_56150__$1;
(statearr_56160_56178[(2)] = inst_56138);

(statearr_56160_56178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56151 === (5))){
var inst_56130 = (state_56150[(7)]);
var inst_56132 = figwheel.client.file_reloading.blocking_load.call(null,inst_56130);
var state_56150__$1 = state_56150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56150__$1,(8),inst_56132);
} else {
if((state_val_56151 === (10))){
var inst_56134 = (state_56150[(9)]);
var inst_56140 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_56134);
var state_56150__$1 = state_56150;
var statearr_56161_56179 = state_56150__$1;
(statearr_56161_56179[(2)] = inst_56140);

(statearr_56161_56179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56151 === (8))){
var inst_56136 = (state_56150[(10)]);
var inst_56130 = (state_56150[(7)]);
var inst_56134 = (state_56150[(2)]);
var inst_56135 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_56136__$1 = cljs.core.get.call(null,inst_56135,inst_56130);
var state_56150__$1 = (function (){var statearr_56162 = state_56150;
(statearr_56162[(9)] = inst_56134);

(statearr_56162[(10)] = inst_56136__$1);

return statearr_56162;
})();
if(cljs.core.truth_(inst_56136__$1)){
var statearr_56163_56180 = state_56150__$1;
(statearr_56163_56180[(1)] = (9));

} else {
var statearr_56164_56181 = state_56150__$1;
(statearr_56164_56181[(1)] = (10));

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
});})(c__53002__auto__))
;
return ((function (switch__52888__auto__,c__53002__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__52889__auto__ = null;
var figwheel$client$file_reloading$state_machine__52889__auto____0 = (function (){
var statearr_56168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56168[(0)] = figwheel$client$file_reloading$state_machine__52889__auto__);

(statearr_56168[(1)] = (1));

return statearr_56168;
});
var figwheel$client$file_reloading$state_machine__52889__auto____1 = (function (state_56150){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_56150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e56169){if((e56169 instanceof Object)){
var ex__52892__auto__ = e56169;
var statearr_56170_56182 = state_56150;
(statearr_56170_56182[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56183 = state_56150;
state_56150 = G__56183;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__52889__auto__ = function(state_56150){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__52889__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__52889__auto____1.call(this,state_56150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__52889__auto____0;
figwheel$client$file_reloading$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__52889__auto____1;
return figwheel$client$file_reloading$state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto__))
})();
var state__53004__auto__ = (function (){var statearr_56171 = f__53003__auto__.call(null);
(statearr_56171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto__);

return statearr_56171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto__))
);

return c__53002__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__56184,callback){
var map__56187 = p__56184;
var map__56187__$1 = ((((!((map__56187 == null)))?((((map__56187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56187):map__56187);
var file_msg = map__56187__$1;
var namespace = cljs.core.get.call(null,map__56187__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__56187,map__56187__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__56187,map__56187__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__56189){
var map__56192 = p__56189;
var map__56192__$1 = ((((!((map__56192 == null)))?((((map__56192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56192):map__56192);
var file_msg = map__56192__$1;
var namespace = cljs.core.get.call(null,map__56192__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__47621__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__47621__auto__){
var or__47633__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__47633__auto__)){
return or__47633__auto__;
} else {
var or__47633__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__47633__auto____$1)){
return or__47633__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__47621__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__56194,callback){
var map__56197 = p__56194;
var map__56197__$1 = ((((!((map__56197 == null)))?((((map__56197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56197):map__56197);
var file_msg = map__56197__$1;
var request_url = cljs.core.get.call(null,map__56197__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__56197__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__53002__auto___56301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___56301,out){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___56301,out){
return (function (state_56283){
var state_val_56284 = (state_56283[(1)]);
if((state_val_56284 === (1))){
var inst_56257 = cljs.core.seq.call(null,files);
var inst_56258 = cljs.core.first.call(null,inst_56257);
var inst_56259 = cljs.core.next.call(null,inst_56257);
var inst_56260 = files;
var state_56283__$1 = (function (){var statearr_56285 = state_56283;
(statearr_56285[(7)] = inst_56259);

(statearr_56285[(8)] = inst_56258);

(statearr_56285[(9)] = inst_56260);

return statearr_56285;
})();
var statearr_56286_56302 = state_56283__$1;
(statearr_56286_56302[(2)] = null);

(statearr_56286_56302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56284 === (2))){
var inst_56266 = (state_56283[(10)]);
var inst_56260 = (state_56283[(9)]);
var inst_56265 = cljs.core.seq.call(null,inst_56260);
var inst_56266__$1 = cljs.core.first.call(null,inst_56265);
var inst_56267 = cljs.core.next.call(null,inst_56265);
var inst_56268 = (inst_56266__$1 == null);
var inst_56269 = cljs.core.not.call(null,inst_56268);
var state_56283__$1 = (function (){var statearr_56287 = state_56283;
(statearr_56287[(11)] = inst_56267);

(statearr_56287[(10)] = inst_56266__$1);

return statearr_56287;
})();
if(inst_56269){
var statearr_56288_56303 = state_56283__$1;
(statearr_56288_56303[(1)] = (4));

} else {
var statearr_56289_56304 = state_56283__$1;
(statearr_56289_56304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56284 === (3))){
var inst_56281 = (state_56283[(2)]);
var state_56283__$1 = state_56283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56283__$1,inst_56281);
} else {
if((state_val_56284 === (4))){
var inst_56266 = (state_56283[(10)]);
var inst_56271 = figwheel.client.file_reloading.reload_js_file.call(null,inst_56266);
var state_56283__$1 = state_56283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56283__$1,(7),inst_56271);
} else {
if((state_val_56284 === (5))){
var inst_56277 = cljs.core.async.close_BANG_.call(null,out);
var state_56283__$1 = state_56283;
var statearr_56290_56305 = state_56283__$1;
(statearr_56290_56305[(2)] = inst_56277);

(statearr_56290_56305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56284 === (6))){
var inst_56279 = (state_56283[(2)]);
var state_56283__$1 = state_56283;
var statearr_56291_56306 = state_56283__$1;
(statearr_56291_56306[(2)] = inst_56279);

(statearr_56291_56306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56284 === (7))){
var inst_56267 = (state_56283[(11)]);
var inst_56273 = (state_56283[(2)]);
var inst_56274 = cljs.core.async.put_BANG_.call(null,out,inst_56273);
var inst_56260 = inst_56267;
var state_56283__$1 = (function (){var statearr_56292 = state_56283;
(statearr_56292[(12)] = inst_56274);

(statearr_56292[(9)] = inst_56260);

return statearr_56292;
})();
var statearr_56293_56307 = state_56283__$1;
(statearr_56293_56307[(2)] = null);

(statearr_56293_56307[(1)] = (2));


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
});})(c__53002__auto___56301,out))
;
return ((function (switch__52888__auto__,c__53002__auto___56301,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__52889__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__52889__auto____0 = (function (){
var statearr_56297 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56297[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__52889__auto__);

(statearr_56297[(1)] = (1));

return statearr_56297;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__52889__auto____1 = (function (state_56283){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_56283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e56298){if((e56298 instanceof Object)){
var ex__52892__auto__ = e56298;
var statearr_56299_56308 = state_56283;
(statearr_56299_56308[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56309 = state_56283;
state_56283 = G__56309;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__52889__auto__ = function(state_56283){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__52889__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__52889__auto____1.call(this,state_56283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__52889__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__52889__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___56301,out))
})();
var state__53004__auto__ = (function (){var statearr_56300 = f__53003__auto__.call(null);
(statearr_56300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___56301);

return statearr_56300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___56301,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__56310,opts){
var map__56314 = p__56310;
var map__56314__$1 = ((((!((map__56314 == null)))?((((map__56314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56314):map__56314);
var eval_body = cljs.core.get.call(null,map__56314__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__56314__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__47621__auto__ = eval_body;
if(cljs.core.truth_(and__47621__auto__)){
return typeof eval_body === 'string';
} else {
return and__47621__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e56316){var e = e56316;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__56317_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__56317_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__56326){
var vec__56327 = p__56326;
var k = cljs.core.nth.call(null,vec__56327,(0),null);
var v = cljs.core.nth.call(null,vec__56327,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__56330){
var vec__56331 = p__56330;
var k = cljs.core.nth.call(null,vec__56331,(0),null);
var v = cljs.core.nth.call(null,vec__56331,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__56337,p__56338){
var map__56586 = p__56337;
var map__56586__$1 = ((((!((map__56586 == null)))?((((map__56586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56586):map__56586);
var opts = map__56586__$1;
var before_jsload = cljs.core.get.call(null,map__56586__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__56586__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__56586__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__56587 = p__56338;
var map__56587__$1 = ((((!((map__56587 == null)))?((((map__56587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56587):map__56587);
var msg = map__56587__$1;
var files = cljs.core.get.call(null,map__56587__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__56587__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__56587__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__53002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_56741){
var state_val_56742 = (state_56741[(1)]);
if((state_val_56742 === (7))){
var inst_56603 = (state_56741[(7)]);
var inst_56604 = (state_56741[(8)]);
var inst_56602 = (state_56741[(9)]);
var inst_56601 = (state_56741[(10)]);
var inst_56609 = cljs.core._nth.call(null,inst_56602,inst_56604);
var inst_56610 = figwheel.client.file_reloading.eval_body.call(null,inst_56609,opts);
var inst_56611 = (inst_56604 + (1));
var tmp56743 = inst_56603;
var tmp56744 = inst_56602;
var tmp56745 = inst_56601;
var inst_56601__$1 = tmp56745;
var inst_56602__$1 = tmp56744;
var inst_56603__$1 = tmp56743;
var inst_56604__$1 = inst_56611;
var state_56741__$1 = (function (){var statearr_56746 = state_56741;
(statearr_56746[(7)] = inst_56603__$1);

(statearr_56746[(8)] = inst_56604__$1);

(statearr_56746[(9)] = inst_56602__$1);

(statearr_56746[(11)] = inst_56610);

(statearr_56746[(10)] = inst_56601__$1);

return statearr_56746;
})();
var statearr_56747_56833 = state_56741__$1;
(statearr_56747_56833[(2)] = null);

(statearr_56747_56833[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (20))){
var inst_56644 = (state_56741[(12)]);
var inst_56652 = figwheel.client.file_reloading.sort_files.call(null,inst_56644);
var state_56741__$1 = state_56741;
var statearr_56748_56834 = state_56741__$1;
(statearr_56748_56834[(2)] = inst_56652);

(statearr_56748_56834[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (27))){
var state_56741__$1 = state_56741;
var statearr_56749_56835 = state_56741__$1;
(statearr_56749_56835[(2)] = null);

(statearr_56749_56835[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (1))){
var inst_56593 = (state_56741[(13)]);
var inst_56590 = before_jsload.call(null,files);
var inst_56591 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_56592 = (function (){return ((function (inst_56593,inst_56590,inst_56591,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__56334_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__56334_SHARP_);
});
;})(inst_56593,inst_56590,inst_56591,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56593__$1 = cljs.core.filter.call(null,inst_56592,files);
var inst_56594 = cljs.core.not_empty.call(null,inst_56593__$1);
var state_56741__$1 = (function (){var statearr_56750 = state_56741;
(statearr_56750[(14)] = inst_56590);

(statearr_56750[(13)] = inst_56593__$1);

(statearr_56750[(15)] = inst_56591);

return statearr_56750;
})();
if(cljs.core.truth_(inst_56594)){
var statearr_56751_56836 = state_56741__$1;
(statearr_56751_56836[(1)] = (2));

} else {
var statearr_56752_56837 = state_56741__$1;
(statearr_56752_56837[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (24))){
var state_56741__$1 = state_56741;
var statearr_56753_56838 = state_56741__$1;
(statearr_56753_56838[(2)] = null);

(statearr_56753_56838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (39))){
var inst_56694 = (state_56741[(16)]);
var state_56741__$1 = state_56741;
var statearr_56754_56839 = state_56741__$1;
(statearr_56754_56839[(2)] = inst_56694);

(statearr_56754_56839[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (46))){
var inst_56736 = (state_56741[(2)]);
var state_56741__$1 = state_56741;
var statearr_56755_56840 = state_56741__$1;
(statearr_56755_56840[(2)] = inst_56736);

(statearr_56755_56840[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (4))){
var inst_56638 = (state_56741[(2)]);
var inst_56639 = cljs.core.List.EMPTY;
var inst_56640 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_56639);
var inst_56641 = (function (){return ((function (inst_56638,inst_56639,inst_56640,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__56335_SHARP_){
var and__47621__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__56335_SHARP_);
if(cljs.core.truth_(and__47621__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__56335_SHARP_));
} else {
return and__47621__auto__;
}
});
;})(inst_56638,inst_56639,inst_56640,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56642 = cljs.core.filter.call(null,inst_56641,files);
var inst_56643 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_56644 = cljs.core.concat.call(null,inst_56642,inst_56643);
var state_56741__$1 = (function (){var statearr_56756 = state_56741;
(statearr_56756[(17)] = inst_56638);

(statearr_56756[(12)] = inst_56644);

(statearr_56756[(18)] = inst_56640);

return statearr_56756;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_56757_56841 = state_56741__$1;
(statearr_56757_56841[(1)] = (16));

} else {
var statearr_56758_56842 = state_56741__$1;
(statearr_56758_56842[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (15))){
var inst_56628 = (state_56741[(2)]);
var state_56741__$1 = state_56741;
var statearr_56759_56843 = state_56741__$1;
(statearr_56759_56843[(2)] = inst_56628);

(statearr_56759_56843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (21))){
var inst_56654 = (state_56741[(19)]);
var inst_56654__$1 = (state_56741[(2)]);
var inst_56655 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_56654__$1);
var state_56741__$1 = (function (){var statearr_56760 = state_56741;
(statearr_56760[(19)] = inst_56654__$1);

return statearr_56760;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56741__$1,(22),inst_56655);
} else {
if((state_val_56742 === (31))){
var inst_56739 = (state_56741[(2)]);
var state_56741__$1 = state_56741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56741__$1,inst_56739);
} else {
if((state_val_56742 === (32))){
var inst_56694 = (state_56741[(16)]);
var inst_56699 = inst_56694.cljs$lang$protocol_mask$partition0$;
var inst_56700 = (inst_56699 & (64));
var inst_56701 = inst_56694.cljs$core$ISeq$;
var inst_56702 = (cljs.core.PROTOCOL_SENTINEL === inst_56701);
var inst_56703 = (inst_56700) || (inst_56702);
var state_56741__$1 = state_56741;
if(cljs.core.truth_(inst_56703)){
var statearr_56761_56844 = state_56741__$1;
(statearr_56761_56844[(1)] = (35));

} else {
var statearr_56762_56845 = state_56741__$1;
(statearr_56762_56845[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (40))){
var inst_56716 = (state_56741[(20)]);
var inst_56715 = (state_56741[(2)]);
var inst_56716__$1 = cljs.core.get.call(null,inst_56715,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_56717 = cljs.core.get.call(null,inst_56715,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_56718 = cljs.core.not_empty.call(null,inst_56716__$1);
var state_56741__$1 = (function (){var statearr_56763 = state_56741;
(statearr_56763[(21)] = inst_56717);

(statearr_56763[(20)] = inst_56716__$1);

return statearr_56763;
})();
if(cljs.core.truth_(inst_56718)){
var statearr_56764_56846 = state_56741__$1;
(statearr_56764_56846[(1)] = (41));

} else {
var statearr_56765_56847 = state_56741__$1;
(statearr_56765_56847[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (33))){
var state_56741__$1 = state_56741;
var statearr_56766_56848 = state_56741__$1;
(statearr_56766_56848[(2)] = false);

(statearr_56766_56848[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (13))){
var inst_56614 = (state_56741[(22)]);
var inst_56618 = cljs.core.chunk_first.call(null,inst_56614);
var inst_56619 = cljs.core.chunk_rest.call(null,inst_56614);
var inst_56620 = cljs.core.count.call(null,inst_56618);
var inst_56601 = inst_56619;
var inst_56602 = inst_56618;
var inst_56603 = inst_56620;
var inst_56604 = (0);
var state_56741__$1 = (function (){var statearr_56767 = state_56741;
(statearr_56767[(7)] = inst_56603);

(statearr_56767[(8)] = inst_56604);

(statearr_56767[(9)] = inst_56602);

(statearr_56767[(10)] = inst_56601);

return statearr_56767;
})();
var statearr_56768_56849 = state_56741__$1;
(statearr_56768_56849[(2)] = null);

(statearr_56768_56849[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (22))){
var inst_56657 = (state_56741[(23)]);
var inst_56654 = (state_56741[(19)]);
var inst_56658 = (state_56741[(24)]);
var inst_56662 = (state_56741[(25)]);
var inst_56657__$1 = (state_56741[(2)]);
var inst_56658__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_56657__$1);
var inst_56659 = (function (){var all_files = inst_56654;
var res_SINGLEQUOTE_ = inst_56657__$1;
var res = inst_56658__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_56657,inst_56654,inst_56658,inst_56662,inst_56657__$1,inst_56658__$1,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__56336_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__56336_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_56657,inst_56654,inst_56658,inst_56662,inst_56657__$1,inst_56658__$1,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56660 = cljs.core.filter.call(null,inst_56659,inst_56657__$1);
var inst_56661 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_56662__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_56661);
var inst_56663 = cljs.core.not_empty.call(null,inst_56662__$1);
var state_56741__$1 = (function (){var statearr_56769 = state_56741;
(statearr_56769[(23)] = inst_56657__$1);

(statearr_56769[(26)] = inst_56660);

(statearr_56769[(24)] = inst_56658__$1);

(statearr_56769[(25)] = inst_56662__$1);

return statearr_56769;
})();
if(cljs.core.truth_(inst_56663)){
var statearr_56770_56850 = state_56741__$1;
(statearr_56770_56850[(1)] = (23));

} else {
var statearr_56771_56851 = state_56741__$1;
(statearr_56771_56851[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (36))){
var state_56741__$1 = state_56741;
var statearr_56772_56852 = state_56741__$1;
(statearr_56772_56852[(2)] = false);

(statearr_56772_56852[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (41))){
var inst_56716 = (state_56741[(20)]);
var inst_56720 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_56721 = cljs.core.map.call(null,inst_56720,inst_56716);
var inst_56722 = cljs.core.pr_str.call(null,inst_56721);
var inst_56723 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_56722)].join('');
var inst_56724 = figwheel.client.utils.log.call(null,inst_56723);
var state_56741__$1 = state_56741;
var statearr_56773_56853 = state_56741__$1;
(statearr_56773_56853[(2)] = inst_56724);

(statearr_56773_56853[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (43))){
var inst_56717 = (state_56741[(21)]);
var inst_56727 = (state_56741[(2)]);
var inst_56728 = cljs.core.not_empty.call(null,inst_56717);
var state_56741__$1 = (function (){var statearr_56774 = state_56741;
(statearr_56774[(27)] = inst_56727);

return statearr_56774;
})();
if(cljs.core.truth_(inst_56728)){
var statearr_56775_56854 = state_56741__$1;
(statearr_56775_56854[(1)] = (44));

} else {
var statearr_56776_56855 = state_56741__$1;
(statearr_56776_56855[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (29))){
var inst_56694 = (state_56741[(16)]);
var inst_56657 = (state_56741[(23)]);
var inst_56660 = (state_56741[(26)]);
var inst_56654 = (state_56741[(19)]);
var inst_56658 = (state_56741[(24)]);
var inst_56662 = (state_56741[(25)]);
var inst_56690 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_56693 = (function (){var all_files = inst_56654;
var res_SINGLEQUOTE_ = inst_56657;
var res = inst_56658;
var files_not_loaded = inst_56660;
var dependencies_that_loaded = inst_56662;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56694,inst_56657,inst_56660,inst_56654,inst_56658,inst_56662,inst_56690,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__56692){
var map__56777 = p__56692;
var map__56777__$1 = ((((!((map__56777 == null)))?((((map__56777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56777):map__56777);
var namespace = cljs.core.get.call(null,map__56777__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56694,inst_56657,inst_56660,inst_56654,inst_56658,inst_56662,inst_56690,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56694__$1 = cljs.core.group_by.call(null,inst_56693,inst_56660);
var inst_56696 = (inst_56694__$1 == null);
var inst_56697 = cljs.core.not.call(null,inst_56696);
var state_56741__$1 = (function (){var statearr_56779 = state_56741;
(statearr_56779[(16)] = inst_56694__$1);

(statearr_56779[(28)] = inst_56690);

return statearr_56779;
})();
if(inst_56697){
var statearr_56780_56856 = state_56741__$1;
(statearr_56780_56856[(1)] = (32));

} else {
var statearr_56781_56857 = state_56741__$1;
(statearr_56781_56857[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (44))){
var inst_56717 = (state_56741[(21)]);
var inst_56730 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56717);
var inst_56731 = cljs.core.pr_str.call(null,inst_56730);
var inst_56732 = [cljs.core.str("not required: "),cljs.core.str(inst_56731)].join('');
var inst_56733 = figwheel.client.utils.log.call(null,inst_56732);
var state_56741__$1 = state_56741;
var statearr_56782_56858 = state_56741__$1;
(statearr_56782_56858[(2)] = inst_56733);

(statearr_56782_56858[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (6))){
var inst_56635 = (state_56741[(2)]);
var state_56741__$1 = state_56741;
var statearr_56783_56859 = state_56741__$1;
(statearr_56783_56859[(2)] = inst_56635);

(statearr_56783_56859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (28))){
var inst_56660 = (state_56741[(26)]);
var inst_56687 = (state_56741[(2)]);
var inst_56688 = cljs.core.not_empty.call(null,inst_56660);
var state_56741__$1 = (function (){var statearr_56784 = state_56741;
(statearr_56784[(29)] = inst_56687);

return statearr_56784;
})();
if(cljs.core.truth_(inst_56688)){
var statearr_56785_56860 = state_56741__$1;
(statearr_56785_56860[(1)] = (29));

} else {
var statearr_56786_56861 = state_56741__$1;
(statearr_56786_56861[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (25))){
var inst_56658 = (state_56741[(24)]);
var inst_56674 = (state_56741[(2)]);
var inst_56675 = cljs.core.not_empty.call(null,inst_56658);
var state_56741__$1 = (function (){var statearr_56787 = state_56741;
(statearr_56787[(30)] = inst_56674);

return statearr_56787;
})();
if(cljs.core.truth_(inst_56675)){
var statearr_56788_56862 = state_56741__$1;
(statearr_56788_56862[(1)] = (26));

} else {
var statearr_56789_56863 = state_56741__$1;
(statearr_56789_56863[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (34))){
var inst_56710 = (state_56741[(2)]);
var state_56741__$1 = state_56741;
if(cljs.core.truth_(inst_56710)){
var statearr_56790_56864 = state_56741__$1;
(statearr_56790_56864[(1)] = (38));

} else {
var statearr_56791_56865 = state_56741__$1;
(statearr_56791_56865[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (17))){
var state_56741__$1 = state_56741;
var statearr_56792_56866 = state_56741__$1;
(statearr_56792_56866[(2)] = recompile_dependents);

(statearr_56792_56866[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (3))){
var state_56741__$1 = state_56741;
var statearr_56793_56867 = state_56741__$1;
(statearr_56793_56867[(2)] = null);

(statearr_56793_56867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (12))){
var inst_56631 = (state_56741[(2)]);
var state_56741__$1 = state_56741;
var statearr_56794_56868 = state_56741__$1;
(statearr_56794_56868[(2)] = inst_56631);

(statearr_56794_56868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (2))){
var inst_56593 = (state_56741[(13)]);
var inst_56600 = cljs.core.seq.call(null,inst_56593);
var inst_56601 = inst_56600;
var inst_56602 = null;
var inst_56603 = (0);
var inst_56604 = (0);
var state_56741__$1 = (function (){var statearr_56795 = state_56741;
(statearr_56795[(7)] = inst_56603);

(statearr_56795[(8)] = inst_56604);

(statearr_56795[(9)] = inst_56602);

(statearr_56795[(10)] = inst_56601);

return statearr_56795;
})();
var statearr_56796_56869 = state_56741__$1;
(statearr_56796_56869[(2)] = null);

(statearr_56796_56869[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (23))){
var inst_56657 = (state_56741[(23)]);
var inst_56660 = (state_56741[(26)]);
var inst_56654 = (state_56741[(19)]);
var inst_56658 = (state_56741[(24)]);
var inst_56662 = (state_56741[(25)]);
var inst_56665 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_56667 = (function (){var all_files = inst_56654;
var res_SINGLEQUOTE_ = inst_56657;
var res = inst_56658;
var files_not_loaded = inst_56660;
var dependencies_that_loaded = inst_56662;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56657,inst_56660,inst_56654,inst_56658,inst_56662,inst_56665,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__56666){
var map__56797 = p__56666;
var map__56797__$1 = ((((!((map__56797 == null)))?((((map__56797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56797):map__56797);
var request_url = cljs.core.get.call(null,map__56797__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56657,inst_56660,inst_56654,inst_56658,inst_56662,inst_56665,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56668 = cljs.core.reverse.call(null,inst_56662);
var inst_56669 = cljs.core.map.call(null,inst_56667,inst_56668);
var inst_56670 = cljs.core.pr_str.call(null,inst_56669);
var inst_56671 = figwheel.client.utils.log.call(null,inst_56670);
var state_56741__$1 = (function (){var statearr_56799 = state_56741;
(statearr_56799[(31)] = inst_56665);

return statearr_56799;
})();
var statearr_56800_56870 = state_56741__$1;
(statearr_56800_56870[(2)] = inst_56671);

(statearr_56800_56870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (35))){
var state_56741__$1 = state_56741;
var statearr_56801_56871 = state_56741__$1;
(statearr_56801_56871[(2)] = true);

(statearr_56801_56871[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (19))){
var inst_56644 = (state_56741[(12)]);
var inst_56650 = figwheel.client.file_reloading.expand_files.call(null,inst_56644);
var state_56741__$1 = state_56741;
var statearr_56802_56872 = state_56741__$1;
(statearr_56802_56872[(2)] = inst_56650);

(statearr_56802_56872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (11))){
var state_56741__$1 = state_56741;
var statearr_56803_56873 = state_56741__$1;
(statearr_56803_56873[(2)] = null);

(statearr_56803_56873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (9))){
var inst_56633 = (state_56741[(2)]);
var state_56741__$1 = state_56741;
var statearr_56804_56874 = state_56741__$1;
(statearr_56804_56874[(2)] = inst_56633);

(statearr_56804_56874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (5))){
var inst_56603 = (state_56741[(7)]);
var inst_56604 = (state_56741[(8)]);
var inst_56606 = (inst_56604 < inst_56603);
var inst_56607 = inst_56606;
var state_56741__$1 = state_56741;
if(cljs.core.truth_(inst_56607)){
var statearr_56805_56875 = state_56741__$1;
(statearr_56805_56875[(1)] = (7));

} else {
var statearr_56806_56876 = state_56741__$1;
(statearr_56806_56876[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (14))){
var inst_56614 = (state_56741[(22)]);
var inst_56623 = cljs.core.first.call(null,inst_56614);
var inst_56624 = figwheel.client.file_reloading.eval_body.call(null,inst_56623,opts);
var inst_56625 = cljs.core.next.call(null,inst_56614);
var inst_56601 = inst_56625;
var inst_56602 = null;
var inst_56603 = (0);
var inst_56604 = (0);
var state_56741__$1 = (function (){var statearr_56807 = state_56741;
(statearr_56807[(32)] = inst_56624);

(statearr_56807[(7)] = inst_56603);

(statearr_56807[(8)] = inst_56604);

(statearr_56807[(9)] = inst_56602);

(statearr_56807[(10)] = inst_56601);

return statearr_56807;
})();
var statearr_56808_56877 = state_56741__$1;
(statearr_56808_56877[(2)] = null);

(statearr_56808_56877[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (45))){
var state_56741__$1 = state_56741;
var statearr_56809_56878 = state_56741__$1;
(statearr_56809_56878[(2)] = null);

(statearr_56809_56878[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (26))){
var inst_56657 = (state_56741[(23)]);
var inst_56660 = (state_56741[(26)]);
var inst_56654 = (state_56741[(19)]);
var inst_56658 = (state_56741[(24)]);
var inst_56662 = (state_56741[(25)]);
var inst_56677 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_56679 = (function (){var all_files = inst_56654;
var res_SINGLEQUOTE_ = inst_56657;
var res = inst_56658;
var files_not_loaded = inst_56660;
var dependencies_that_loaded = inst_56662;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56657,inst_56660,inst_56654,inst_56658,inst_56662,inst_56677,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__56678){
var map__56810 = p__56678;
var map__56810__$1 = ((((!((map__56810 == null)))?((((map__56810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56810):map__56810);
var namespace = cljs.core.get.call(null,map__56810__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__56810__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56657,inst_56660,inst_56654,inst_56658,inst_56662,inst_56677,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56680 = cljs.core.map.call(null,inst_56679,inst_56658);
var inst_56681 = cljs.core.pr_str.call(null,inst_56680);
var inst_56682 = figwheel.client.utils.log.call(null,inst_56681);
var inst_56683 = (function (){var all_files = inst_56654;
var res_SINGLEQUOTE_ = inst_56657;
var res = inst_56658;
var files_not_loaded = inst_56660;
var dependencies_that_loaded = inst_56662;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56657,inst_56660,inst_56654,inst_56658,inst_56662,inst_56677,inst_56679,inst_56680,inst_56681,inst_56682,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56657,inst_56660,inst_56654,inst_56658,inst_56662,inst_56677,inst_56679,inst_56680,inst_56681,inst_56682,state_val_56742,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56684 = setTimeout(inst_56683,(10));
var state_56741__$1 = (function (){var statearr_56812 = state_56741;
(statearr_56812[(33)] = inst_56677);

(statearr_56812[(34)] = inst_56682);

return statearr_56812;
})();
var statearr_56813_56879 = state_56741__$1;
(statearr_56813_56879[(2)] = inst_56684);

(statearr_56813_56879[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (16))){
var state_56741__$1 = state_56741;
var statearr_56814_56880 = state_56741__$1;
(statearr_56814_56880[(2)] = reload_dependents);

(statearr_56814_56880[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (38))){
var inst_56694 = (state_56741[(16)]);
var inst_56712 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56694);
var state_56741__$1 = state_56741;
var statearr_56815_56881 = state_56741__$1;
(statearr_56815_56881[(2)] = inst_56712);

(statearr_56815_56881[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (30))){
var state_56741__$1 = state_56741;
var statearr_56816_56882 = state_56741__$1;
(statearr_56816_56882[(2)] = null);

(statearr_56816_56882[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (10))){
var inst_56614 = (state_56741[(22)]);
var inst_56616 = cljs.core.chunked_seq_QMARK_.call(null,inst_56614);
var state_56741__$1 = state_56741;
if(inst_56616){
var statearr_56817_56883 = state_56741__$1;
(statearr_56817_56883[(1)] = (13));

} else {
var statearr_56818_56884 = state_56741__$1;
(statearr_56818_56884[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (18))){
var inst_56648 = (state_56741[(2)]);
var state_56741__$1 = state_56741;
if(cljs.core.truth_(inst_56648)){
var statearr_56819_56885 = state_56741__$1;
(statearr_56819_56885[(1)] = (19));

} else {
var statearr_56820_56886 = state_56741__$1;
(statearr_56820_56886[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (42))){
var state_56741__$1 = state_56741;
var statearr_56821_56887 = state_56741__$1;
(statearr_56821_56887[(2)] = null);

(statearr_56821_56887[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (37))){
var inst_56707 = (state_56741[(2)]);
var state_56741__$1 = state_56741;
var statearr_56822_56888 = state_56741__$1;
(statearr_56822_56888[(2)] = inst_56707);

(statearr_56822_56888[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56742 === (8))){
var inst_56614 = (state_56741[(22)]);
var inst_56601 = (state_56741[(10)]);
var inst_56614__$1 = cljs.core.seq.call(null,inst_56601);
var state_56741__$1 = (function (){var statearr_56823 = state_56741;
(statearr_56823[(22)] = inst_56614__$1);

return statearr_56823;
})();
if(inst_56614__$1){
var statearr_56824_56889 = state_56741__$1;
(statearr_56824_56889[(1)] = (10));

} else {
var statearr_56825_56890 = state_56741__$1;
(statearr_56825_56890[(1)] = (11));

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
});})(c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__52888__auto__,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__52889__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__52889__auto____0 = (function (){
var statearr_56829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56829[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__52889__auto__);

(statearr_56829[(1)] = (1));

return statearr_56829;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__52889__auto____1 = (function (state_56741){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_56741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e56830){if((e56830 instanceof Object)){
var ex__52892__auto__ = e56830;
var statearr_56831_56891 = state_56741;
(statearr_56831_56891[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56892 = state_56741;
state_56741 = G__56892;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__52889__auto__ = function(state_56741){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__52889__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__52889__auto____1.call(this,state_56741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__52889__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__52889__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__53004__auto__ = (function (){var statearr_56832 = f__53003__auto__.call(null);
(statearr_56832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto__);

return statearr_56832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto__,map__56586,map__56586__$1,opts,before_jsload,on_jsload,reload_dependents,map__56587,map__56587__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__53002__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__56895,link){
var map__56898 = p__56895;
var map__56898__$1 = ((((!((map__56898 == null)))?((((map__56898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56898):map__56898);
var file = cljs.core.get.call(null,map__56898__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__56898,map__56898__$1,file){
return (function (p1__56893_SHARP_,p2__56894_SHARP_){
if(cljs.core._EQ_.call(null,p1__56893_SHARP_,p2__56894_SHARP_)){
return p1__56893_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__56898,map__56898__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__56904){
var map__56905 = p__56904;
var map__56905__$1 = ((((!((map__56905 == null)))?((((map__56905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56905):map__56905);
var match_length = cljs.core.get.call(null,map__56905__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__56905__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__56900_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__56900_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args56907 = [];
var len__48849__auto___56910 = arguments.length;
var i__48850__auto___56911 = (0);
while(true){
if((i__48850__auto___56911 < len__48849__auto___56910)){
args56907.push((arguments[i__48850__auto___56911]));

var G__56912 = (i__48850__auto___56911 + (1));
i__48850__auto___56911 = G__56912;
continue;
} else {
}
break;
}

var G__56909 = args56907.length;
switch (G__56909) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56907.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__56914_SHARP_,p2__56915_SHARP_){
return cljs.core.assoc.call(null,p1__56914_SHARP_,cljs.core.get.call(null,p2__56915_SHARP_,key),p2__56915_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__56916){
var map__56919 = p__56916;
var map__56919__$1 = ((((!((map__56919 == null)))?((((map__56919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56919):map__56919);
var f_data = map__56919__$1;
var file = cljs.core.get.call(null,map__56919__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6753__auto__)){
var link = temp__6753__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__56921,p__56922){
var map__56931 = p__56921;
var map__56931__$1 = ((((!((map__56931 == null)))?((((map__56931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56931):map__56931);
var opts = map__56931__$1;
var on_cssload = cljs.core.get.call(null,map__56931__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__56932 = p__56922;
var map__56932__$1 = ((((!((map__56932 == null)))?((((map__56932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56932):map__56932);
var files_msg = map__56932__$1;
var files = cljs.core.get.call(null,map__56932__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__56935_56939 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__56936_56940 = null;
var count__56937_56941 = (0);
var i__56938_56942 = (0);
while(true){
if((i__56938_56942 < count__56937_56941)){
var f_56943 = cljs.core._nth.call(null,chunk__56936_56940,i__56938_56942);
figwheel.client.file_reloading.reload_css_file.call(null,f_56943);

var G__56944 = seq__56935_56939;
var G__56945 = chunk__56936_56940;
var G__56946 = count__56937_56941;
var G__56947 = (i__56938_56942 + (1));
seq__56935_56939 = G__56944;
chunk__56936_56940 = G__56945;
count__56937_56941 = G__56946;
i__56938_56942 = G__56947;
continue;
} else {
var temp__6753__auto___56948 = cljs.core.seq.call(null,seq__56935_56939);
if(temp__6753__auto___56948){
var seq__56935_56949__$1 = temp__6753__auto___56948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56935_56949__$1)){
var c__48539__auto___56950 = cljs.core.chunk_first.call(null,seq__56935_56949__$1);
var G__56951 = cljs.core.chunk_rest.call(null,seq__56935_56949__$1);
var G__56952 = c__48539__auto___56950;
var G__56953 = cljs.core.count.call(null,c__48539__auto___56950);
var G__56954 = (0);
seq__56935_56939 = G__56951;
chunk__56936_56940 = G__56952;
count__56937_56941 = G__56953;
i__56938_56942 = G__56954;
continue;
} else {
var f_56955 = cljs.core.first.call(null,seq__56935_56949__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_56955);

var G__56956 = cljs.core.next.call(null,seq__56935_56949__$1);
var G__56957 = null;
var G__56958 = (0);
var G__56959 = (0);
seq__56935_56939 = G__56956;
chunk__56936_56940 = G__56957;
count__56937_56941 = G__56958;
i__56938_56942 = G__56959;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__56931,map__56931__$1,opts,on_cssload,map__56932,map__56932__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__56931,map__56931__$1,opts,on_cssload,map__56932,map__56932__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1509481868620