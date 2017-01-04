// Compiled by ClojureScript 1.9.229 {}
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
var x19444_19445 = value;
x19444_19445.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
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
var x19449_19450 = value;
x19449_19450.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
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
var x19454_19455 = value;
x19454_19455.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
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
var and__6736__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__6736__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__6736__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__7830__auto__ = [];
var len__7823__auto___19463 = arguments.length;
var i__7824__auto___19464 = (0);
while(true){
if((i__7824__auto___19464 < len__7823__auto___19463)){
args__7830__auto__.push((arguments[i__7824__auto___19464]));

var G__19465 = (i__7824__auto___19464 + (1));
i__7824__auto___19464 = G__19465;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__19459_19466 = cljs.core.seq.call(null,items);
var chunk__19460_19467 = null;
var count__19461_19468 = (0);
var i__19462_19469 = (0);
while(true){
if((i__19462_19469 < count__19461_19468)){
var item_19470 = cljs.core._nth.call(null,chunk__19460_19467,i__19462_19469);
if(cljs.core.some_QMARK_.call(null,item_19470)){
if(cljs.core.coll_QMARK_.call(null,item_19470)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_19470)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_19470));
}
} else {
}

var G__19471 = seq__19459_19466;
var G__19472 = chunk__19460_19467;
var G__19473 = count__19461_19468;
var G__19474 = (i__19462_19469 + (1));
seq__19459_19466 = G__19471;
chunk__19460_19467 = G__19472;
count__19461_19468 = G__19473;
i__19462_19469 = G__19474;
continue;
} else {
var temp__4657__auto___19475 = cljs.core.seq.call(null,seq__19459_19466);
if(temp__4657__auto___19475){
var seq__19459_19476__$1 = temp__4657__auto___19475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19459_19476__$1)){
var c__7559__auto___19477 = cljs.core.chunk_first.call(null,seq__19459_19476__$1);
var G__19478 = cljs.core.chunk_rest.call(null,seq__19459_19476__$1);
var G__19479 = c__7559__auto___19477;
var G__19480 = cljs.core.count.call(null,c__7559__auto___19477);
var G__19481 = (0);
seq__19459_19466 = G__19478;
chunk__19460_19467 = G__19479;
count__19461_19468 = G__19480;
i__19462_19469 = G__19481;
continue;
} else {
var item_19482 = cljs.core.first.call(null,seq__19459_19476__$1);
if(cljs.core.some_QMARK_.call(null,item_19482)){
if(cljs.core.coll_QMARK_.call(null,item_19482)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_19482)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_19482));
}
} else {
}

var G__19483 = cljs.core.next.call(null,seq__19459_19476__$1);
var G__19484 = null;
var G__19485 = (0);
var G__19486 = (0);
seq__19459_19466 = G__19483;
chunk__19460_19467 = G__19484;
count__19461_19468 = G__19485;
i__19462_19469 = G__19486;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq19458){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19458));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__7830__auto__ = [];
var len__7823__auto___19494 = arguments.length;
var i__7824__auto___19495 = (0);
while(true){
if((i__7824__auto___19495 < len__7823__auto___19494)){
args__7830__auto__.push((arguments[i__7824__auto___19495]));

var G__19496 = (i__7824__auto___19495 + (1));
i__7824__auto___19495 = G__19496;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((2) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7831__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__19490_19497 = cljs.core.seq.call(null,children);
var chunk__19491_19498 = null;
var count__19492_19499 = (0);
var i__19493_19500 = (0);
while(true){
if((i__19493_19500 < count__19492_19499)){
var child_19501 = cljs.core._nth.call(null,chunk__19491_19498,i__19493_19500);
if(cljs.core.some_QMARK_.call(null,child_19501)){
if(cljs.core.coll_QMARK_.call(null,child_19501)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_19501))));
} else {
var temp__4655__auto___19502 = devtools.formatters.helpers.pref.call(null,child_19501);
if(cljs.core.truth_(temp__4655__auto___19502)){
var child_value_19503 = temp__4655__auto___19502;
template.push(child_value_19503);
} else {
}
}
} else {
}

var G__19504 = seq__19490_19497;
var G__19505 = chunk__19491_19498;
var G__19506 = count__19492_19499;
var G__19507 = (i__19493_19500 + (1));
seq__19490_19497 = G__19504;
chunk__19491_19498 = G__19505;
count__19492_19499 = G__19506;
i__19493_19500 = G__19507;
continue;
} else {
var temp__4657__auto___19508 = cljs.core.seq.call(null,seq__19490_19497);
if(temp__4657__auto___19508){
var seq__19490_19509__$1 = temp__4657__auto___19508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19490_19509__$1)){
var c__7559__auto___19510 = cljs.core.chunk_first.call(null,seq__19490_19509__$1);
var G__19511 = cljs.core.chunk_rest.call(null,seq__19490_19509__$1);
var G__19512 = c__7559__auto___19510;
var G__19513 = cljs.core.count.call(null,c__7559__auto___19510);
var G__19514 = (0);
seq__19490_19497 = G__19511;
chunk__19491_19498 = G__19512;
count__19492_19499 = G__19513;
i__19493_19500 = G__19514;
continue;
} else {
var child_19515 = cljs.core.first.call(null,seq__19490_19509__$1);
if(cljs.core.some_QMARK_.call(null,child_19515)){
if(cljs.core.coll_QMARK_.call(null,child_19515)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_19515))));
} else {
var temp__4655__auto___19516 = devtools.formatters.helpers.pref.call(null,child_19515);
if(cljs.core.truth_(temp__4655__auto___19516)){
var child_value_19517 = temp__4655__auto___19516;
template.push(child_value_19517);
} else {
}
}
} else {
}

var G__19518 = cljs.core.next.call(null,seq__19490_19509__$1);
var G__19519 = null;
var G__19520 = (0);
var G__19521 = (0);
seq__19490_19497 = G__19518;
chunk__19491_19498 = G__19519;
count__19492_19499 = G__19520;
i__19493_19500 = G__19521;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq19487){
var G__19488 = cljs.core.first.call(null,seq19487);
var seq19487__$1 = cljs.core.next.call(null,seq19487);
var G__19489 = cljs.core.first.call(null,seq19487__$1);
var seq19487__$2 = cljs.core.next.call(null,seq19487__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__19488,G__19489,seq19487__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__7830__auto__ = [];
var len__7823__auto___19524 = arguments.length;
var i__7824__auto___19525 = (0);
while(true){
if((i__7824__auto___19525 < len__7823__auto___19524)){
args__7830__auto__.push((arguments[i__7824__auto___19525]));

var G__19526 = (i__7824__auto___19525 + (1));
i__7824__auto___19525 = G__19526;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((1) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7831__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq19522){
var G__19523 = cljs.core.first.call(null,seq19522);
var seq19522__$1 = cljs.core.next.call(null,seq19522);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19523,seq19522__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__7830__auto__ = [];
var len__7823__auto___19529 = arguments.length;
var i__7824__auto___19530 = (0);
while(true){
if((i__7824__auto___19530 < len__7823__auto___19529)){
args__7830__auto__.push((arguments[i__7824__auto___19530]));

var G__19531 = (i__7824__auto___19530 + (1));
i__7824__auto___19530 = G__19531;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((1) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7831__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq19527){
var G__19528 = cljs.core.first.call(null,seq19527);
var seq19527__$1 = cljs.core.next.call(null,seq19527);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19528,seq19527__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args19532 = [];
var len__7823__auto___19537 = arguments.length;
var i__7824__auto___19538 = (0);
while(true){
if((i__7824__auto___19538 < len__7823__auto___19537)){
args19532.push((arguments[i__7824__auto___19538]));

var G__19539 = (i__7824__auto___19538 + (1));
i__7824__auto___19538 = G__19539;
continue;
} else {
}
break;
}

var G__19534 = args19532.length;
switch (G__19534) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19532.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj19536 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__6748__auto__ = start_index;
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
return (0);
}
})()};
return obj19536;
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
var args__7830__auto__ = [];
var len__7823__auto___19547 = arguments.length;
var i__7824__auto___19548 = (0);
while(true){
if((i__7824__auto___19548 < len__7823__auto___19547)){
args__7830__auto__.push((arguments[i__7824__auto___19548]));

var G__19549 = (i__7824__auto___19548 + (1));
i__7824__auto___19548 = G__19549;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((1) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7831__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__19543){
var vec__19544 = p__19543;
var state_override_fn = cljs.core.nth.call(null,vec__19544,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq19541){
var G__19542 = cljs.core.first.call(null,seq19541);
var seq19541__$1 = cljs.core.next.call(null,seq19541);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__19542,seq19541__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__7734__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19553_19556 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19554_19557 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19553_19556,_STAR_print_fn_STAR_19554_19557,sb__7734__auto__){
return (function (x__7735__auto__){
return sb__7734__auto__.append(x__7735__auto__);
});})(_STAR_print_newline_STAR_19553_19556,_STAR_print_fn_STAR_19554_19557,sb__7734__auto__))
;

try{var _STAR_print_level_STAR_19555_19558 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_19555_19558;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19554_19557;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19553_19556;
}
return [cljs.core.str(sb__7734__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_19560 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_19560;
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
var G__19562 = name;
switch (G__19562) {
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
var vec__19567 = tag;
var html_tag = cljs.core.nth.call(null,vec__19567,(0),null);
var style = cljs.core.nth.call(null,vec__19567,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_19571 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_19571;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_19574 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_19575 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_19575;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_19574;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__19576 = initial_value;
var G__19577 = value.call(null);
initial_value = G__19576;
value = G__19577;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__19578 = initial_value;
var G__19579 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__19578;
value = G__19579;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__19580 = initial_value;
var G__19581 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__19580;
value = G__19581;
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