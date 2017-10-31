// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__62314__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__62314__auto__,"add").call(o__62314__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__62314__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__62314__auto__,"delete").call(o__62314__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__62314__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__62314__auto__,"has").call(o__62314__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = goog.object.get(data,"config");
var G__63093 = data;
var target__62333__auto__ = G__63093;
if(cljs.core.truth_(target__62333__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("unable to locate object path "),cljs.core.str(null),cljs.core.str(" in "),cljs.core.str(G__63093)].join('')),cljs.core.str("\n"),cljs.core.str("target__62333__auto__")].join('')));
}

goog.object.set(target__62333__auto__,cljs.core.last.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config"], null)),devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__63093;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_63102 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_63102);
} else {
var seq__63098_63103 = cljs.core.seq.call(null,json_ml);
var chunk__63099_63104 = null;
var count__63100_63105 = (0);
var i__63101_63106 = (0);
while(true){
if((i__63101_63106 < count__63100_63105)){
var item_63107 = cljs.core._nth.call(null,chunk__63099_63104,i__63101_63106);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_63107,new_depth_budget_63102);

var G__63108 = seq__63098_63103;
var G__63109 = chunk__63099_63104;
var G__63110 = count__63100_63105;
var G__63111 = (i__63101_63106 + (1));
seq__63098_63103 = G__63108;
chunk__63099_63104 = G__63109;
count__63100_63105 = G__63110;
i__63101_63106 = G__63111;
continue;
} else {
var temp__6753__auto___63112 = cljs.core.seq.call(null,seq__63098_63103);
if(temp__6753__auto___63112){
var seq__63098_63113__$1 = temp__6753__auto___63112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63098_63113__$1)){
var c__48539__auto___63114 = cljs.core.chunk_first.call(null,seq__63098_63113__$1);
var G__63115 = cljs.core.chunk_rest.call(null,seq__63098_63113__$1);
var G__63116 = c__48539__auto___63114;
var G__63117 = cljs.core.count.call(null,c__48539__auto___63114);
var G__63118 = (0);
seq__63098_63103 = G__63115;
chunk__63099_63104 = G__63116;
count__63100_63105 = G__63117;
i__63101_63106 = G__63118;
continue;
} else {
var item_63119 = cljs.core.first.call(null,seq__63098_63113__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_63119,new_depth_budget_63102);

var G__63120 = cljs.core.next.call(null,seq__63098_63113__$1);
var G__63121 = null;
var G__63122 = (0);
var G__63123 = (0);
seq__63098_63103 = G__63120;
chunk__63099_63104 = G__63121;
count__63100_63105 = G__63122;
i__63101_63106 = G__63123;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__6751__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__6751__auto__)){
var initial_hierarchy_depth_budget = temp__6751__auto__;
var remaining_depth_budget = (function (){var or__47633__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__47633__auto__)){
return or__47633__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1509481878979