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
var x14618_14619 = value;
x14618_14619.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x14625_14627 = value;
x14625_14627.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x14631_14632 = value;
x14631_14632.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__7473__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__7473__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__7473__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__8708__auto__ = [];
var len__8701__auto___14640 = arguments.length;
var i__8702__auto___14641 = (0);
while(true){
if((i__8702__auto___14641 < len__8701__auto___14640)){
args__8708__auto__.push((arguments[i__8702__auto___14641]));

var G__14642 = (i__8702__auto___14641 + (1));
i__8702__auto___14641 = G__14642;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__14636_14643 = cljs.core.seq.call(null,items);
var chunk__14637_14644 = null;
var count__14638_14645 = (0);
var i__14639_14646 = (0);
while(true){
if((i__14639_14646 < count__14638_14645)){
var item_14647 = cljs.core._nth.call(null,chunk__14637_14644,i__14639_14646);
if(cljs.core.some_QMARK_.call(null,item_14647)){
if(cljs.core.coll_QMARK_.call(null,item_14647)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_14647)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_14647));
}
} else {
}

var G__14648 = seq__14636_14643;
var G__14649 = chunk__14637_14644;
var G__14650 = count__14638_14645;
var G__14651 = (i__14639_14646 + (1));
seq__14636_14643 = G__14648;
chunk__14637_14644 = G__14649;
count__14638_14645 = G__14650;
i__14639_14646 = G__14651;
continue;
} else {
var temp__6747__auto___14652 = cljs.core.seq.call(null,seq__14636_14643);
if(temp__6747__auto___14652){
var seq__14636_14653__$1 = temp__6747__auto___14652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14636_14653__$1)){
var c__8391__auto___14654 = cljs.core.chunk_first.call(null,seq__14636_14653__$1);
var G__14655 = cljs.core.chunk_rest.call(null,seq__14636_14653__$1);
var G__14656 = c__8391__auto___14654;
var G__14657 = cljs.core.count.call(null,c__8391__auto___14654);
var G__14658 = (0);
seq__14636_14643 = G__14655;
chunk__14637_14644 = G__14656;
count__14638_14645 = G__14657;
i__14639_14646 = G__14658;
continue;
} else {
var item_14659 = cljs.core.first.call(null,seq__14636_14653__$1);
if(cljs.core.some_QMARK_.call(null,item_14659)){
if(cljs.core.coll_QMARK_.call(null,item_14659)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_14659)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_14659));
}
} else {
}

var G__14660 = cljs.core.next.call(null,seq__14636_14653__$1);
var G__14661 = null;
var G__14662 = (0);
var G__14663 = (0);
seq__14636_14643 = G__14660;
chunk__14637_14644 = G__14661;
count__14638_14645 = G__14662;
i__14639_14646 = G__14663;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq14635){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14635));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__8708__auto__ = [];
var len__8701__auto___14672 = arguments.length;
var i__8702__auto___14673 = (0);
while(true){
if((i__8702__auto___14673 < len__8701__auto___14672)){
args__8708__auto__.push((arguments[i__8702__auto___14673]));

var G__14674 = (i__8702__auto___14673 + (1));
i__8702__auto___14673 = G__14674;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((2) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8709__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__14667_14675 = cljs.core.seq.call(null,children);
var chunk__14668_14676 = null;
var count__14669_14677 = (0);
var i__14670_14678 = (0);
while(true){
if((i__14670_14678 < count__14669_14677)){
var child_14679 = cljs.core._nth.call(null,chunk__14668_14676,i__14670_14678);
if(cljs.core.some_QMARK_.call(null,child_14679)){
if(cljs.core.coll_QMARK_.call(null,child_14679)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_14679))));
} else {
var temp__6745__auto___14680 = devtools.formatters.helpers.pref.call(null,child_14679);
if(cljs.core.truth_(temp__6745__auto___14680)){
var child_value_14681 = temp__6745__auto___14680;
template.push(child_value_14681);
} else {
}
}
} else {
}

var G__14682 = seq__14667_14675;
var G__14683 = chunk__14668_14676;
var G__14684 = count__14669_14677;
var G__14685 = (i__14670_14678 + (1));
seq__14667_14675 = G__14682;
chunk__14668_14676 = G__14683;
count__14669_14677 = G__14684;
i__14670_14678 = G__14685;
continue;
} else {
var temp__6747__auto___14686 = cljs.core.seq.call(null,seq__14667_14675);
if(temp__6747__auto___14686){
var seq__14667_14687__$1 = temp__6747__auto___14686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14667_14687__$1)){
var c__8391__auto___14688 = cljs.core.chunk_first.call(null,seq__14667_14687__$1);
var G__14689 = cljs.core.chunk_rest.call(null,seq__14667_14687__$1);
var G__14690 = c__8391__auto___14688;
var G__14691 = cljs.core.count.call(null,c__8391__auto___14688);
var G__14692 = (0);
seq__14667_14675 = G__14689;
chunk__14668_14676 = G__14690;
count__14669_14677 = G__14691;
i__14670_14678 = G__14692;
continue;
} else {
var child_14693 = cljs.core.first.call(null,seq__14667_14687__$1);
if(cljs.core.some_QMARK_.call(null,child_14693)){
if(cljs.core.coll_QMARK_.call(null,child_14693)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_14693))));
} else {
var temp__6745__auto___14694 = devtools.formatters.helpers.pref.call(null,child_14693);
if(cljs.core.truth_(temp__6745__auto___14694)){
var child_value_14695 = temp__6745__auto___14694;
template.push(child_value_14695);
} else {
}
}
} else {
}

var G__14696 = cljs.core.next.call(null,seq__14667_14687__$1);
var G__14697 = null;
var G__14698 = (0);
var G__14699 = (0);
seq__14667_14675 = G__14696;
chunk__14668_14676 = G__14697;
count__14669_14677 = G__14698;
i__14670_14678 = G__14699;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq14664){
var G__14665 = cljs.core.first.call(null,seq14664);
var seq14664__$1 = cljs.core.next.call(null,seq14664);
var G__14666 = cljs.core.first.call(null,seq14664__$1);
var seq14664__$2 = cljs.core.next.call(null,seq14664__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__14665,G__14666,seq14664__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__8708__auto__ = [];
var len__8701__auto___14702 = arguments.length;
var i__8702__auto___14703 = (0);
while(true){
if((i__8702__auto___14703 < len__8701__auto___14702)){
args__8708__auto__.push((arguments[i__8702__auto___14703]));

var G__14704 = (i__8702__auto___14703 + (1));
i__8702__auto___14703 = G__14704;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((1) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8709__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq14700){
var G__14701 = cljs.core.first.call(null,seq14700);
var seq14700__$1 = cljs.core.next.call(null,seq14700);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14701,seq14700__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__8708__auto__ = [];
var len__8701__auto___14718 = arguments.length;
var i__8702__auto___14720 = (0);
while(true){
if((i__8702__auto___14720 < len__8701__auto___14718)){
args__8708__auto__.push((arguments[i__8702__auto___14720]));

var G__14722 = (i__8702__auto___14720 + (1));
i__8702__auto___14720 = G__14722;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((1) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8709__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq14709){
var G__14710 = cljs.core.first.call(null,seq14709);
var seq14709__$1 = cljs.core.next.call(null,seq14709);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14710,seq14709__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args14726 = [];
var len__8701__auto___14731 = arguments.length;
var i__8702__auto___14732 = (0);
while(true){
if((i__8702__auto___14732 < len__8701__auto___14731)){
args14726.push((arguments[i__8702__auto___14732]));

var G__14733 = (i__8702__auto___14732 + (1));
i__8702__auto___14732 = G__14733;
continue;
} else {
}
break;
}

var G__14728 = args14726.length;
switch (G__14728) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14726.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj14730 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__7485__auto__ = start_index;
if(cljs.core.truth_(or__7485__auto__)){
return or__7485__auto__;
} else {
return (0);
}
})()};
return obj14730;
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
var args__8708__auto__ = [];
var len__8701__auto___14753 = arguments.length;
var i__8702__auto___14754 = (0);
while(true){
if((i__8702__auto___14754 < len__8701__auto___14753)){
args__8708__auto__.push((arguments[i__8702__auto___14754]));

var G__14755 = (i__8702__auto___14754 + (1));
i__8702__auto___14754 = G__14755;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((1) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8709__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__14746){
var vec__14748 = p__14746;
var state_override_fn = cljs.core.nth.call(null,vec__14748,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq14744){
var G__14745 = cljs.core.first.call(null,seq14744);
var seq14744__$1 = cljs.core.next.call(null,seq14744);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__14745,seq14744__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__8572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14759_14762 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14760_14763 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14759_14762,_STAR_print_fn_STAR_14760_14763,sb__8572__auto__){
return (function (x__8573__auto__){
return sb__8572__auto__.append(x__8573__auto__);
});})(_STAR_print_newline_STAR_14759_14762,_STAR_print_fn_STAR_14760_14763,sb__8572__auto__))
;

try{var _STAR_print_level_STAR_14761_14764 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_14761_14764;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14760_14763;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14759_14762;
}
return [cljs.core.str(sb__8572__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_14766 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_14766;
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
var G__14770 = name;
switch (G__14770) {
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
var vec__14809 = tag;
var html_tag = cljs.core.nth.call(null,vec__14809,(0),null);
var style = cljs.core.nth.call(null,vec__14809,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_14813 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_14813;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_14826 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_14827 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_14827;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_14826;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__14828 = initial_value;
var G__14829 = value.call(null);
initial_value = G__14828;
value = G__14829;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__14830 = initial_value;
var G__14831 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__14830;
value = G__14831;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__14832 = initial_value;
var G__14833 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__14832;
value = G__14833;
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

//# sourceMappingURL=templating.js.map