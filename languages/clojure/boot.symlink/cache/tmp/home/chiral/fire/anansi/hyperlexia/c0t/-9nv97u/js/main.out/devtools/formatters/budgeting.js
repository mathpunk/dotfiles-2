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
var o__12849__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__12849__auto__,"add").call(o__12849__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__12849__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__12849__auto__,"delete").call(o__12849__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__12849__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__12849__auto__,"has").call(o__12849__auto__,value);
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
var G__16107 = data;
var target__12871__auto__ = G__16107;
if(cljs.core.truth_(target__12871__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("unable to locate object path "),cljs.core.str(null),cljs.core.str(" in "),cljs.core.str(G__16107)].join('')),cljs.core.str("\n"),cljs.core.str("target__12871__auto__")].join('')));
}

goog.object.set(target__12871__auto__,cljs.core.last.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config"], null)),devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__16107;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_16116 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_16116);
} else {
var seq__16112_16117 = cljs.core.seq.call(null,json_ml);
var chunk__16113_16118 = null;
var count__16114_16119 = (0);
var i__16115_16120 = (0);
while(true){
if((i__16115_16120 < count__16114_16119)){
var item_16121 = cljs.core._nth.call(null,chunk__16113_16118,i__16115_16120);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_16121,new_depth_budget_16116);

var G__16122 = seq__16112_16117;
var G__16123 = chunk__16113_16118;
var G__16124 = count__16114_16119;
var G__16125 = (i__16115_16120 + (1));
seq__16112_16117 = G__16122;
chunk__16113_16118 = G__16123;
count__16114_16119 = G__16124;
i__16115_16120 = G__16125;
continue;
} else {
var temp__6747__auto___16126 = cljs.core.seq.call(null,seq__16112_16117);
if(temp__6747__auto___16126){
var seq__16112_16127__$1 = temp__6747__auto___16126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16112_16127__$1)){
var c__8525__auto___16128 = cljs.core.chunk_first.call(null,seq__16112_16127__$1);
var G__16129 = cljs.core.chunk_rest.call(null,seq__16112_16127__$1);
var G__16130 = c__8525__auto___16128;
var G__16131 = cljs.core.count.call(null,c__8525__auto___16128);
var G__16132 = (0);
seq__16112_16117 = G__16129;
chunk__16113_16118 = G__16130;
count__16114_16119 = G__16131;
i__16115_16120 = G__16132;
continue;
} else {
var item_16133 = cljs.core.first.call(null,seq__16112_16127__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_16133,new_depth_budget_16116);

var G__16134 = cljs.core.next.call(null,seq__16112_16127__$1);
var G__16135 = null;
var G__16136 = (0);
var G__16137 = (0);
seq__16112_16117 = G__16134;
chunk__16113_16118 = G__16135;
count__16114_16119 = G__16136;
i__16115_16120 = G__16137;
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
var temp__6745__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__6745__auto__)){
var initial_hierarchy_depth_budget = temp__6745__auto__;
var remaining_depth_budget = (function (){var or__7619__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__7619__auto__)){
return or__7619__auto__;
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

//# sourceMappingURL=budgeting.js.map