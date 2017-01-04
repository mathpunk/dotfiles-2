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
var x19433_19434 = value;
x19433_19434.devtools$protocols$IGroup$ = true;


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
var x19438_19439 = value;
x19438_19439.devtools$protocols$ITemplate$ = true;


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
var x19443_19444 = value;
x19443_19444.devtools$protocols$ISurrogate$ = true;


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
var len__7823__auto___19452 = arguments.length;
var i__7824__auto___19453 = (0);
while(true){
if((i__7824__auto___19453 < len__7823__auto___19452)){
args__7830__auto__.push((arguments[i__7824__auto___19453]));

var G__19454 = (i__7824__auto___19453 + (1));
i__7824__auto___19453 = G__19454;
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
var seq__19448_19455 = cljs.core.seq.call(null,items);
var chunk__19449_19456 = null;
var count__19450_19457 = (0);
var i__19451_19458 = (0);
while(true){
if((i__19451_19458 < count__19450_19457)){
var item_19459 = cljs.core._nth.call(null,chunk__19449_19456,i__19451_19458);
if(cljs.core.some_QMARK_.call(null,item_19459)){
if(cljs.core.coll_QMARK_.call(null,item_19459)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_19459)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_19459));
}
} else {
}

var G__19460 = seq__19448_19455;
var G__19461 = chunk__19449_19456;
var G__19462 = count__19450_19457;
var G__19463 = (i__19451_19458 + (1));
seq__19448_19455 = G__19460;
chunk__19449_19456 = G__19461;
count__19450_19457 = G__19462;
i__19451_19458 = G__19463;
continue;
} else {
var temp__4657__auto___19464 = cljs.core.seq.call(null,seq__19448_19455);
if(temp__4657__auto___19464){
var seq__19448_19465__$1 = temp__4657__auto___19464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19448_19465__$1)){
var c__7559__auto___19466 = cljs.core.chunk_first.call(null,seq__19448_19465__$1);
var G__19467 = cljs.core.chunk_rest.call(null,seq__19448_19465__$1);
var G__19468 = c__7559__auto___19466;
var G__19469 = cljs.core.count.call(null,c__7559__auto___19466);
var G__19470 = (0);
seq__19448_19455 = G__19467;
chunk__19449_19456 = G__19468;
count__19450_19457 = G__19469;
i__19451_19458 = G__19470;
continue;
} else {
var item_19471 = cljs.core.first.call(null,seq__19448_19465__$1);
if(cljs.core.some_QMARK_.call(null,item_19471)){
if(cljs.core.coll_QMARK_.call(null,item_19471)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_19471)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_19471));
}
} else {
}

var G__19472 = cljs.core.next.call(null,seq__19448_19465__$1);
var G__19473 = null;
var G__19474 = (0);
var G__19475 = (0);
seq__19448_19455 = G__19472;
chunk__19449_19456 = G__19473;
count__19450_19457 = G__19474;
i__19451_19458 = G__19475;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq19447){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19447));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__7830__auto__ = [];
var len__7823__auto___19483 = arguments.length;
var i__7824__auto___19484 = (0);
while(true){
if((i__7824__auto___19484 < len__7823__auto___19483)){
args__7830__auto__.push((arguments[i__7824__auto___19484]));

var G__19485 = (i__7824__auto___19484 + (1));
i__7824__auto___19484 = G__19485;
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
var seq__19479_19486 = cljs.core.seq.call(null,children);
var chunk__19480_19487 = null;
var count__19481_19488 = (0);
var i__19482_19489 = (0);
while(true){
if((i__19482_19489 < count__19481_19488)){
var child_19490 = cljs.core._nth.call(null,chunk__19480_19487,i__19482_19489);
if(cljs.core.some_QMARK_.call(null,child_19490)){
if(cljs.core.coll_QMARK_.call(null,child_19490)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_19490))));
} else {
var temp__4655__auto___19491 = devtools.formatters.helpers.pref.call(null,child_19490);
if(cljs.core.truth_(temp__4655__auto___19491)){
var child_value_19492 = temp__4655__auto___19491;
template.push(child_value_19492);
} else {
}
}
} else {
}

var G__19493 = seq__19479_19486;
var G__19494 = chunk__19480_19487;
var G__19495 = count__19481_19488;
var G__19496 = (i__19482_19489 + (1));
seq__19479_19486 = G__19493;
chunk__19480_19487 = G__19494;
count__19481_19488 = G__19495;
i__19482_19489 = G__19496;
continue;
} else {
var temp__4657__auto___19497 = cljs.core.seq.call(null,seq__19479_19486);
if(temp__4657__auto___19497){
var seq__19479_19498__$1 = temp__4657__auto___19497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19479_19498__$1)){
var c__7559__auto___19499 = cljs.core.chunk_first.call(null,seq__19479_19498__$1);
var G__19500 = cljs.core.chunk_rest.call(null,seq__19479_19498__$1);
var G__19501 = c__7559__auto___19499;
var G__19502 = cljs.core.count.call(null,c__7559__auto___19499);
var G__19503 = (0);
seq__19479_19486 = G__19500;
chunk__19480_19487 = G__19501;
count__19481_19488 = G__19502;
i__19482_19489 = G__19503;
continue;
} else {
var child_19504 = cljs.core.first.call(null,seq__19479_19498__$1);
if(cljs.core.some_QMARK_.call(null,child_19504)){
if(cljs.core.coll_QMARK_.call(null,child_19504)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_19504))));
} else {
var temp__4655__auto___19505 = devtools.formatters.helpers.pref.call(null,child_19504);
if(cljs.core.truth_(temp__4655__auto___19505)){
var child_value_19506 = temp__4655__auto___19505;
template.push(child_value_19506);
} else {
}
}
} else {
}

var G__19507 = cljs.core.next.call(null,seq__19479_19498__$1);
var G__19508 = null;
var G__19509 = (0);
var G__19510 = (0);
seq__19479_19486 = G__19507;
chunk__19480_19487 = G__19508;
count__19481_19488 = G__19509;
i__19482_19489 = G__19510;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq19476){
var G__19477 = cljs.core.first.call(null,seq19476);
var seq19476__$1 = cljs.core.next.call(null,seq19476);
var G__19478 = cljs.core.first.call(null,seq19476__$1);
var seq19476__$2 = cljs.core.next.call(null,seq19476__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__19477,G__19478,seq19476__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__7830__auto__ = [];
var len__7823__auto___19513 = arguments.length;
var i__7824__auto___19514 = (0);
while(true){
if((i__7824__auto___19514 < len__7823__auto___19513)){
args__7830__auto__.push((arguments[i__7824__auto___19514]));

var G__19515 = (i__7824__auto___19514 + (1));
i__7824__auto___19514 = G__19515;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq19511){
var G__19512 = cljs.core.first.call(null,seq19511);
var seq19511__$1 = cljs.core.next.call(null,seq19511);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19512,seq19511__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__7830__auto__ = [];
var len__7823__auto___19518 = arguments.length;
var i__7824__auto___19519 = (0);
while(true){
if((i__7824__auto___19519 < len__7823__auto___19518)){
args__7830__auto__.push((arguments[i__7824__auto___19519]));

var G__19520 = (i__7824__auto___19519 + (1));
i__7824__auto___19519 = G__19520;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq19516){
var G__19517 = cljs.core.first.call(null,seq19516);
var seq19516__$1 = cljs.core.next.call(null,seq19516);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19517,seq19516__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args19521 = [];
var len__7823__auto___19526 = arguments.length;
var i__7824__auto___19527 = (0);
while(true){
if((i__7824__auto___19527 < len__7823__auto___19526)){
args19521.push((arguments[i__7824__auto___19527]));

var G__19528 = (i__7824__auto___19527 + (1));
i__7824__auto___19527 = G__19528;
continue;
} else {
}
break;
}

var G__19523 = args19521.length;
switch (G__19523) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19521.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj19525 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__6748__auto__ = start_index;
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
return (0);
}
})()};
return obj19525;
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
var len__7823__auto___19536 = arguments.length;
var i__7824__auto___19537 = (0);
while(true){
if((i__7824__auto___19537 < len__7823__auto___19536)){
args__7830__auto__.push((arguments[i__7824__auto___19537]));

var G__19538 = (i__7824__auto___19537 + (1));
i__7824__auto___19537 = G__19538;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((1) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7831__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__19532){
var vec__19533 = p__19532;
var state_override_fn = cljs.core.nth.call(null,vec__19533,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq19530){
var G__19531 = cljs.core.first.call(null,seq19530);
var seq19530__$1 = cljs.core.next.call(null,seq19530);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__19531,seq19530__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__7734__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19542_19545 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19543_19546 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19542_19545,_STAR_print_fn_STAR_19543_19546,sb__7734__auto__){
return (function (x__7735__auto__){
return sb__7734__auto__.append(x__7735__auto__);
});})(_STAR_print_newline_STAR_19542_19545,_STAR_print_fn_STAR_19543_19546,sb__7734__auto__))
;

try{var _STAR_print_level_STAR_19544_19547 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_19544_19547;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19543_19546;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19542_19545;
}
return [cljs.core.str(sb__7734__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_19549 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_19549;
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
var G__19551 = name;
switch (G__19551) {
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
var vec__19556 = tag;
var html_tag = cljs.core.nth.call(null,vec__19556,(0),null);
var style = cljs.core.nth.call(null,vec__19556,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_19560 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_19560;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_19563 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_19564 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_19564;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_19563;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__19565 = initial_value;
var G__19566 = value.call(null);
initial_value = G__19565;
value = G__19566;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__19567 = initial_value;
var G__19568 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__19567;
value = G__19568;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__19569 = initial_value;
var G__19570 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__19569;
value = G__19570;
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