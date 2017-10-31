// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x62728_62729 = value;
x62728_62729.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x62733_62734 = value;
x62733_62734.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x62738_62739 = value;
x62738_62739.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__47621__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__47621__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__47621__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__48856__auto__ = [];
var len__48849__auto___62747 = arguments.length;
var i__48850__auto___62748 = (0);
while(true){
if((i__48850__auto___62748 < len__48849__auto___62747)){
args__48856__auto__.push((arguments[i__48850__auto___62748]));

var G__62749 = (i__48850__auto___62748 + (1));
i__48850__auto___62748 = G__62749;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((0) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__48857__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__62743_62750 = cljs.core.seq.call(null,items);
var chunk__62744_62751 = null;
var count__62745_62752 = (0);
var i__62746_62753 = (0);
while(true){
if((i__62746_62753 < count__62745_62752)){
var item_62754 = cljs.core._nth.call(null,chunk__62744_62751,i__62746_62753);
if(cljs.core.some_QMARK_.call(null,item_62754)){
if(cljs.core.coll_QMARK_.call(null,item_62754)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_62754)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_62754));
}
} else {
}

var G__62755 = seq__62743_62750;
var G__62756 = chunk__62744_62751;
var G__62757 = count__62745_62752;
var G__62758 = (i__62746_62753 + (1));
seq__62743_62750 = G__62755;
chunk__62744_62751 = G__62756;
count__62745_62752 = G__62757;
i__62746_62753 = G__62758;
continue;
} else {
var temp__6753__auto___62759 = cljs.core.seq.call(null,seq__62743_62750);
if(temp__6753__auto___62759){
var seq__62743_62760__$1 = temp__6753__auto___62759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62743_62760__$1)){
var c__48539__auto___62761 = cljs.core.chunk_first.call(null,seq__62743_62760__$1);
var G__62762 = cljs.core.chunk_rest.call(null,seq__62743_62760__$1);
var G__62763 = c__48539__auto___62761;
var G__62764 = cljs.core.count.call(null,c__48539__auto___62761);
var G__62765 = (0);
seq__62743_62750 = G__62762;
chunk__62744_62751 = G__62763;
count__62745_62752 = G__62764;
i__62746_62753 = G__62765;
continue;
} else {
var item_62766 = cljs.core.first.call(null,seq__62743_62760__$1);
if(cljs.core.some_QMARK_.call(null,item_62766)){
if(cljs.core.coll_QMARK_.call(null,item_62766)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_62766)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_62766));
}
} else {
}

var G__62767 = cljs.core.next.call(null,seq__62743_62760__$1);
var G__62768 = null;
var G__62769 = (0);
var G__62770 = (0);
seq__62743_62750 = G__62767;
chunk__62744_62751 = G__62768;
count__62745_62752 = G__62769;
i__62746_62753 = G__62770;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq62742){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62742));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__48856__auto__ = [];
var len__48849__auto___62778 = arguments.length;
var i__48850__auto___62779 = (0);
while(true){
if((i__48850__auto___62779 < len__48849__auto___62778)){
args__48856__auto__.push((arguments[i__48850__auto___62779]));

var G__62780 = (i__48850__auto___62779 + (1));
i__48850__auto___62779 = G__62780;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((2) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48857__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__62774_62781 = cljs.core.seq.call(null,children);
var chunk__62775_62782 = null;
var count__62776_62783 = (0);
var i__62777_62784 = (0);
while(true){
if((i__62777_62784 < count__62776_62783)){
var child_62785 = cljs.core._nth.call(null,chunk__62775_62782,i__62777_62784);
if(cljs.core.some_QMARK_.call(null,child_62785)){
if(cljs.core.coll_QMARK_.call(null,child_62785)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_62785))));
} else {
var temp__6751__auto___62786 = devtools.formatters.helpers.pref.call(null,child_62785);
if(cljs.core.truth_(temp__6751__auto___62786)){
var child_value_62787 = temp__6751__auto___62786;
template.push(child_value_62787);
} else {
}
}
} else {
}

var G__62788 = seq__62774_62781;
var G__62789 = chunk__62775_62782;
var G__62790 = count__62776_62783;
var G__62791 = (i__62777_62784 + (1));
seq__62774_62781 = G__62788;
chunk__62775_62782 = G__62789;
count__62776_62783 = G__62790;
i__62777_62784 = G__62791;
continue;
} else {
var temp__6753__auto___62792 = cljs.core.seq.call(null,seq__62774_62781);
if(temp__6753__auto___62792){
var seq__62774_62793__$1 = temp__6753__auto___62792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62774_62793__$1)){
var c__48539__auto___62794 = cljs.core.chunk_first.call(null,seq__62774_62793__$1);
var G__62795 = cljs.core.chunk_rest.call(null,seq__62774_62793__$1);
var G__62796 = c__48539__auto___62794;
var G__62797 = cljs.core.count.call(null,c__48539__auto___62794);
var G__62798 = (0);
seq__62774_62781 = G__62795;
chunk__62775_62782 = G__62796;
count__62776_62783 = G__62797;
i__62777_62784 = G__62798;
continue;
} else {
var child_62799 = cljs.core.first.call(null,seq__62774_62793__$1);
if(cljs.core.some_QMARK_.call(null,child_62799)){
if(cljs.core.coll_QMARK_.call(null,child_62799)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_62799))));
} else {
var temp__6751__auto___62800 = devtools.formatters.helpers.pref.call(null,child_62799);
if(cljs.core.truth_(temp__6751__auto___62800)){
var child_value_62801 = temp__6751__auto___62800;
template.push(child_value_62801);
} else {
}
}
} else {
}

var G__62802 = cljs.core.next.call(null,seq__62774_62793__$1);
var G__62803 = null;
var G__62804 = (0);
var G__62805 = (0);
seq__62774_62781 = G__62802;
chunk__62775_62782 = G__62803;
count__62776_62783 = G__62804;
i__62777_62784 = G__62805;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq62771){
var G__62772 = cljs.core.first.call(null,seq62771);
var seq62771__$1 = cljs.core.next.call(null,seq62771);
var G__62773 = cljs.core.first.call(null,seq62771__$1);
var seq62771__$2 = cljs.core.next.call(null,seq62771__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__62772,G__62773,seq62771__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__48856__auto__ = [];
var len__48849__auto___62808 = arguments.length;
var i__48850__auto___62809 = (0);
while(true){
if((i__48850__auto___62809 < len__48849__auto___62808)){
args__48856__auto__.push((arguments[i__48850__auto___62809]));

var G__62810 = (i__48850__auto___62809 + (1));
i__48850__auto___62809 = G__62810;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((1) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48857__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq62806){
var G__62807 = cljs.core.first.call(null,seq62806);
var seq62806__$1 = cljs.core.next.call(null,seq62806);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__62807,seq62806__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__48856__auto__ = [];
var len__48849__auto___62813 = arguments.length;
var i__48850__auto___62814 = (0);
while(true){
if((i__48850__auto___62814 < len__48849__auto___62813)){
args__48856__auto__.push((arguments[i__48850__auto___62814]));

var G__62815 = (i__48850__auto___62814 + (1));
i__48850__auto___62814 = G__62815;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((1) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48857__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq62811){
var G__62812 = cljs.core.first.call(null,seq62811);
var seq62811__$1 = cljs.core.next.call(null,seq62811);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__62812,seq62811__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args62816 = [];
var len__48849__auto___62821 = arguments.length;
var i__48850__auto___62822 = (0);
while(true){
if((i__48850__auto___62822 < len__48849__auto___62821)){
args62816.push((arguments[i__48850__auto___62822]));

var G__62823 = (i__48850__auto___62822 + (1));
i__48850__auto___62822 = G__62823;
continue;
} else {
}
break;
}

var G__62818 = args62816.length;
switch (G__62818) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62816.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj62820 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__47633__auto__ = start_index;
if(cljs.core.truth_(or__47633__auto__)){
return or__47633__auto__;
} else {
return (0);
}
})()};
return obj62820;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__48856__auto__ = [];
var len__48849__auto___62831 = arguments.length;
var i__48850__auto___62832 = (0);
while(true){
if((i__48850__auto___62832 < len__48849__auto___62831)){
args__48856__auto__.push((arguments[i__48850__auto___62832]));

var G__62833 = (i__48850__auto___62832 + (1));
i__48850__auto___62832 = G__62833;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((1) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48857__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__62827){
var vec__62828 = p__62827;
var state_override_fn = cljs.core.nth.call(null,vec__62828,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq62825){
var G__62826 = cljs.core.first.call(null,seq62825);
var seq62825__$1 = cljs.core.next.call(null,seq62825);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__62826,seq62825__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__48720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_62837_62840 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_62838_62841 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_62837_62840,_STAR_print_fn_STAR_62838_62841,sb__48720__auto__){
return (function (x__48721__auto__){
return sb__48720__auto__.append(x__48721__auto__);
});})(_STAR_print_newline_STAR_62837_62840,_STAR_print_fn_STAR_62838_62841,sb__48720__auto__))
;

try{var _STAR_print_level_STAR_62839_62842 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_62839_62842;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_62838_62841;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_62837_62840;
}
return [cljs.core.str(sb__48720__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_62844 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_62844;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__62846 = name;
switch (G__62846) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__62851 = tag;
var html_tag = cljs.core.nth.call(null,vec__62851,(0),null);
var style = cljs.core.nth.call(null,vec__62851,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_62855 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_62855;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_62858 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_62859 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_62859;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_62858;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__62860 = initial_value;
var G__62861 = value.call(null);
initial_value = G__62860;
value = G__62861;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__62862 = initial_value;
var G__62863 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__62862;
value = G__62863;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__62864 = initial_value;
var G__62865 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__62864;
value = G__62865;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1509481878389