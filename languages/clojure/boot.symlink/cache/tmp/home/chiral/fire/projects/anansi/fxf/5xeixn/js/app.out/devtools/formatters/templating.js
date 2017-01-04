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
var x19348_19349 = value;
x19348_19349.devtools$protocols$IGroup$ = true;


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
var x19353_19354 = value;
x19353_19354.devtools$protocols$ITemplate$ = true;


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
var x19358_19359 = value;
x19358_19359.devtools$protocols$ISurrogate$ = true;


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
var len__7823__auto___19367 = arguments.length;
var i__7824__auto___19368 = (0);
while(true){
if((i__7824__auto___19368 < len__7823__auto___19367)){
args__7830__auto__.push((arguments[i__7824__auto___19368]));

var G__19369 = (i__7824__auto___19368 + (1));
i__7824__auto___19368 = G__19369;
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
var seq__19363_19370 = cljs.core.seq.call(null,items);
var chunk__19364_19371 = null;
var count__19365_19372 = (0);
var i__19366_19373 = (0);
while(true){
if((i__19366_19373 < count__19365_19372)){
var item_19374 = cljs.core._nth.call(null,chunk__19364_19371,i__19366_19373);
if(cljs.core.some_QMARK_.call(null,item_19374)){
if(cljs.core.coll_QMARK_.call(null,item_19374)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_19374)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_19374));
}
} else {
}

var G__19375 = seq__19363_19370;
var G__19376 = chunk__19364_19371;
var G__19377 = count__19365_19372;
var G__19378 = (i__19366_19373 + (1));
seq__19363_19370 = G__19375;
chunk__19364_19371 = G__19376;
count__19365_19372 = G__19377;
i__19366_19373 = G__19378;
continue;
} else {
var temp__4657__auto___19379 = cljs.core.seq.call(null,seq__19363_19370);
if(temp__4657__auto___19379){
var seq__19363_19380__$1 = temp__4657__auto___19379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19363_19380__$1)){
var c__7559__auto___19381 = cljs.core.chunk_first.call(null,seq__19363_19380__$1);
var G__19382 = cljs.core.chunk_rest.call(null,seq__19363_19380__$1);
var G__19383 = c__7559__auto___19381;
var G__19384 = cljs.core.count.call(null,c__7559__auto___19381);
var G__19385 = (0);
seq__19363_19370 = G__19382;
chunk__19364_19371 = G__19383;
count__19365_19372 = G__19384;
i__19366_19373 = G__19385;
continue;
} else {
var item_19386 = cljs.core.first.call(null,seq__19363_19380__$1);
if(cljs.core.some_QMARK_.call(null,item_19386)){
if(cljs.core.coll_QMARK_.call(null,item_19386)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_19386)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_19386));
}
} else {
}

var G__19387 = cljs.core.next.call(null,seq__19363_19380__$1);
var G__19388 = null;
var G__19389 = (0);
var G__19390 = (0);
seq__19363_19370 = G__19387;
chunk__19364_19371 = G__19388;
count__19365_19372 = G__19389;
i__19366_19373 = G__19390;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq19362){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19362));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__7830__auto__ = [];
var len__7823__auto___19398 = arguments.length;
var i__7824__auto___19399 = (0);
while(true){
if((i__7824__auto___19399 < len__7823__auto___19398)){
args__7830__auto__.push((arguments[i__7824__auto___19399]));

var G__19400 = (i__7824__auto___19399 + (1));
i__7824__auto___19399 = G__19400;
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
var seq__19394_19401 = cljs.core.seq.call(null,children);
var chunk__19395_19402 = null;
var count__19396_19403 = (0);
var i__19397_19404 = (0);
while(true){
if((i__19397_19404 < count__19396_19403)){
var child_19405 = cljs.core._nth.call(null,chunk__19395_19402,i__19397_19404);
if(cljs.core.some_QMARK_.call(null,child_19405)){
if(cljs.core.coll_QMARK_.call(null,child_19405)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_19405))));
} else {
var temp__4655__auto___19406 = devtools.formatters.helpers.pref.call(null,child_19405);
if(cljs.core.truth_(temp__4655__auto___19406)){
var child_value_19407 = temp__4655__auto___19406;
template.push(child_value_19407);
} else {
}
}
} else {
}

var G__19408 = seq__19394_19401;
var G__19409 = chunk__19395_19402;
var G__19410 = count__19396_19403;
var G__19411 = (i__19397_19404 + (1));
seq__19394_19401 = G__19408;
chunk__19395_19402 = G__19409;
count__19396_19403 = G__19410;
i__19397_19404 = G__19411;
continue;
} else {
var temp__4657__auto___19412 = cljs.core.seq.call(null,seq__19394_19401);
if(temp__4657__auto___19412){
var seq__19394_19413__$1 = temp__4657__auto___19412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19394_19413__$1)){
var c__7559__auto___19414 = cljs.core.chunk_first.call(null,seq__19394_19413__$1);
var G__19415 = cljs.core.chunk_rest.call(null,seq__19394_19413__$1);
var G__19416 = c__7559__auto___19414;
var G__19417 = cljs.core.count.call(null,c__7559__auto___19414);
var G__19418 = (0);
seq__19394_19401 = G__19415;
chunk__19395_19402 = G__19416;
count__19396_19403 = G__19417;
i__19397_19404 = G__19418;
continue;
} else {
var child_19419 = cljs.core.first.call(null,seq__19394_19413__$1);
if(cljs.core.some_QMARK_.call(null,child_19419)){
if(cljs.core.coll_QMARK_.call(null,child_19419)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_19419))));
} else {
var temp__4655__auto___19420 = devtools.formatters.helpers.pref.call(null,child_19419);
if(cljs.core.truth_(temp__4655__auto___19420)){
var child_value_19421 = temp__4655__auto___19420;
template.push(child_value_19421);
} else {
}
}
} else {
}

var G__19422 = cljs.core.next.call(null,seq__19394_19413__$1);
var G__19423 = null;
var G__19424 = (0);
var G__19425 = (0);
seq__19394_19401 = G__19422;
chunk__19395_19402 = G__19423;
count__19396_19403 = G__19424;
i__19397_19404 = G__19425;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq19391){
var G__19392 = cljs.core.first.call(null,seq19391);
var seq19391__$1 = cljs.core.next.call(null,seq19391);
var G__19393 = cljs.core.first.call(null,seq19391__$1);
var seq19391__$2 = cljs.core.next.call(null,seq19391__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__19392,G__19393,seq19391__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__7830__auto__ = [];
var len__7823__auto___19428 = arguments.length;
var i__7824__auto___19429 = (0);
while(true){
if((i__7824__auto___19429 < len__7823__auto___19428)){
args__7830__auto__.push((arguments[i__7824__auto___19429]));

var G__19430 = (i__7824__auto___19429 + (1));
i__7824__auto___19429 = G__19430;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq19426){
var G__19427 = cljs.core.first.call(null,seq19426);
var seq19426__$1 = cljs.core.next.call(null,seq19426);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19427,seq19426__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__7830__auto__ = [];
var len__7823__auto___19433 = arguments.length;
var i__7824__auto___19434 = (0);
while(true){
if((i__7824__auto___19434 < len__7823__auto___19433)){
args__7830__auto__.push((arguments[i__7824__auto___19434]));

var G__19435 = (i__7824__auto___19434 + (1));
i__7824__auto___19434 = G__19435;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq19431){
var G__19432 = cljs.core.first.call(null,seq19431);
var seq19431__$1 = cljs.core.next.call(null,seq19431);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19432,seq19431__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args19436 = [];
var len__7823__auto___19441 = arguments.length;
var i__7824__auto___19442 = (0);
while(true){
if((i__7824__auto___19442 < len__7823__auto___19441)){
args19436.push((arguments[i__7824__auto___19442]));

var G__19443 = (i__7824__auto___19442 + (1));
i__7824__auto___19442 = G__19443;
continue;
} else {
}
break;
}

var G__19438 = args19436.length;
switch (G__19438) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19436.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj19440 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__6748__auto__ = start_index;
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
return (0);
}
})()};
return obj19440;
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
var len__7823__auto___19451 = arguments.length;
var i__7824__auto___19452 = (0);
while(true){
if((i__7824__auto___19452 < len__7823__auto___19451)){
args__7830__auto__.push((arguments[i__7824__auto___19452]));

var G__19453 = (i__7824__auto___19452 + (1));
i__7824__auto___19452 = G__19453;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((1) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7831__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__19447){
var vec__19448 = p__19447;
var state_override_fn = cljs.core.nth.call(null,vec__19448,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq19445){
var G__19446 = cljs.core.first.call(null,seq19445);
var seq19445__$1 = cljs.core.next.call(null,seq19445);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__19446,seq19445__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__7734__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19457_19460 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19458_19461 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19457_19460,_STAR_print_fn_STAR_19458_19461,sb__7734__auto__){
return (function (x__7735__auto__){
return sb__7734__auto__.append(x__7735__auto__);
});})(_STAR_print_newline_STAR_19457_19460,_STAR_print_fn_STAR_19458_19461,sb__7734__auto__))
;

try{var _STAR_print_level_STAR_19459_19462 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_19459_19462;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19458_19461;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19457_19460;
}
return [cljs.core.str(sb__7734__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_19464 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_19464;
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
var G__19466 = name;
switch (G__19466) {
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
var vec__19471 = tag;
var html_tag = cljs.core.nth.call(null,vec__19471,(0),null);
var style = cljs.core.nth.call(null,vec__19471,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_19475 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_19475;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_19478 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_19479 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_19479;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_19478;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__19480 = initial_value;
var G__19481 = value.call(null);
initial_value = G__19480;
value = G__19481;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__19482 = initial_value;
var G__19483 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__19482;
value = G__19483;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__19484 = initial_value;
var G__19485 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__19484;
value = G__19485;
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