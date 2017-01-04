// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__8332__auto__ = (((value == null))?null:value);
var m__8333__auto__ = (devtools.format._header[goog.typeOf(x__8332__auto__)]);
if(!((m__8333__auto__ == null))){
return m__8333__auto__.call(null,value);
} else {
var m__8333__auto____$1 = (devtools.format._header["_"]);
if(!((m__8333__auto____$1 == null))){
return m__8333__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__8332__auto__ = (((value == null))?null:value);
var m__8333__auto__ = (devtools.format._has_body[goog.typeOf(x__8332__auto__)]);
if(!((m__8333__auto__ == null))){
return m__8333__auto__.call(null,value);
} else {
var m__8333__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__8333__auto____$1 == null))){
return m__8333__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__8332__auto__ = (((value == null))?null:value);
var m__8333__auto__ = (devtools.format._body[goog.typeOf(x__8332__auto__)]);
if(!((m__8333__auto__ == null))){
return m__8333__auto__.call(null,value);
} else {
var m__8333__auto____$1 = (devtools.format._body["_"]);
if(!((m__8333__auto____$1 == null))){
return m__8333__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__6747__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6747__auto__)){
var o__12862__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12862__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12862__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12862__auto____$1,"templating");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12861__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12861__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__6747__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6747__auto__)){
var o__12862__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12862__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12862__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12862__auto____$1,"templating");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12861__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12861__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__6747__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6747__auto__)){
var o__12862__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12862__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12862__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12862__auto____$1,"templating");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12861__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12861__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__6747__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6747__auto__)){
var o__12862__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12862__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12862__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12862__auto____$1,"templating");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12861__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12861__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__6747__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6747__auto__)){
var o__12862__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12862__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12862__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12862__auto____$1,"templating");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12861__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12861__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__6747__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6747__auto__)){
var o__12862__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12862__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12862__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12862__auto____$1,"markup");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12861__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12861__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__6747__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6747__auto__)){
var o__12862__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12862__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12862__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12862__auto____$1,"markup");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12861__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12861__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__8842__auto__ = [];
var len__8835__auto___13384 = arguments.length;
var i__8836__auto___13387 = (0);
while(true){
if((i__8836__auto___13387 < len__8835__auto___13384)){
args__8842__auto__.push((arguments[i__8836__auto___13387]));

var G__13390 = (i__8836__auto___13387 + (1));
i__8836__auto___13387 = G__13390;
continue;
} else {
}
break;
}

var argseq__8843__auto__ = ((((0) < args__8842__auto__.length))?(new cljs.core.IndexedSeq(args__8842__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__8843__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq13359){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13359));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__8842__auto__ = [];
var len__8835__auto___13401 = arguments.length;
var i__8836__auto___13402 = (0);
while(true){
if((i__8836__auto___13402 < len__8835__auto___13401)){
args__8842__auto__.push((arguments[i__8836__auto___13402]));

var G__13403 = (i__8836__auto___13402 + (1));
i__8836__auto___13402 = G__13403;
continue;
} else {
}
break;
}

var argseq__8843__auto__ = ((((0) < args__8842__auto__.length))?(new cljs.core.IndexedSeq(args__8842__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__8843__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq13398){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13398));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__8842__auto__ = [];
var len__8835__auto___13417 = arguments.length;
var i__8836__auto___13418 = (0);
while(true){
if((i__8836__auto___13418 < len__8835__auto___13417)){
args__8842__auto__.push((arguments[i__8836__auto___13418]));

var G__13494 = (i__8836__auto___13418 + (1));
i__8836__auto___13418 = G__13494;
continue;
} else {
}
break;
}

var argseq__8843__auto__ = ((((0) < args__8842__auto__.length))?(new cljs.core.IndexedSeq(args__8842__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8843__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq13404){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13404));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__8842__auto__ = [];
var len__8835__auto___13514 = arguments.length;
var i__8836__auto___13517 = (0);
while(true){
if((i__8836__auto___13517 < len__8835__auto___13514)){
args__8842__auto__.push((arguments[i__8836__auto___13517]));

var G__13518 = (i__8836__auto___13517 + (1));
i__8836__auto___13517 = G__13518;
continue;
} else {
}
break;
}

var argseq__8843__auto__ = ((((0) < args__8842__auto__.length))?(new cljs.core.IndexedSeq(args__8842__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8843__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq13511){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13511));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__8842__auto__ = [];
var len__8835__auto___13528 = arguments.length;
var i__8836__auto___13529 = (0);
while(true){
if((i__8836__auto___13529 < len__8835__auto___13528)){
args__8842__auto__.push((arguments[i__8836__auto___13529]));

var G__13531 = (i__8836__auto___13529 + (1));
i__8836__auto___13529 = G__13531;
continue;
} else {
}
break;
}

var argseq__8843__auto__ = ((((0) < args__8842__auto__.length))?(new cljs.core.IndexedSeq(args__8842__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__8843__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq13523){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13523));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__8842__auto__ = [];
var len__8835__auto___13543 = arguments.length;
var i__8836__auto___13544 = (0);
while(true){
if((i__8836__auto___13544 < len__8835__auto___13543)){
args__8842__auto__.push((arguments[i__8836__auto___13544]));

var G__13545 = (i__8836__auto___13544 + (1));
i__8836__auto___13544 = G__13545;
continue;
} else {
}
break;
}

var argseq__8843__auto__ = ((((0) < args__8842__auto__.length))?(new cljs.core.IndexedSeq(args__8842__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__8843__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq13538){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13538));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__8842__auto__ = [];
var len__8835__auto___13577 = arguments.length;
var i__8836__auto___13578 = (0);
while(true){
if((i__8836__auto___13578 < len__8835__auto___13577)){
args__8842__auto__.push((arguments[i__8836__auto___13578]));

var G__13579 = (i__8836__auto___13578 + (1));
i__8836__auto___13578 = G__13579;
continue;
} else {
}
break;
}

var argseq__8843__auto__ = ((((0) < args__8842__auto__.length))?(new cljs.core.IndexedSeq(args__8842__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8843__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq13574){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13574));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__8842__auto__ = [];
var len__8835__auto___13621 = arguments.length;
var i__8836__auto___13622 = (0);
while(true){
if((i__8836__auto___13622 < len__8835__auto___13621)){
args__8842__auto__.push((arguments[i__8836__auto___13622]));

var G__13623 = (i__8836__auto___13622 + (1));
i__8836__auto___13622 = G__13623;
continue;
} else {
}
break;
}

var argseq__8843__auto__ = ((((1) < args__8842__auto__.length))?(new cljs.core.IndexedSeq(args__8842__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8843__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__13617){
var vec__13618 = p__13617;
var state_override = cljs.core.nth.call(null,vec__13618,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__13618,state_override){
return (function (p1__13592_SHARP_){
return cljs.core.merge.call(null,p1__13592_SHARP_,state_override);
});})(vec__13618,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq13593){
var G__13594 = cljs.core.first.call(null,seq13593);
var seq13593__$1 = cljs.core.next.call(null,seq13593);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__13594,seq13593__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__8842__auto__ = [];
var len__8835__auto___13634 = arguments.length;
var i__8836__auto___13635 = (0);
while(true){
if((i__8836__auto___13635 < len__8835__auto___13634)){
args__8842__auto__.push((arguments[i__8836__auto___13635]));

var G__13636 = (i__8836__auto___13635 + (1));
i__8836__auto___13635 = G__13636;
continue;
} else {
}
break;
}

var argseq__8843__auto__ = ((((0) < args__8842__auto__.length))?(new cljs.core.IndexedSeq(args__8842__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__8843__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq13633){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13633));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__8842__auto__ = [];
var len__8835__auto___13653 = arguments.length;
var i__8836__auto___13654 = (0);
while(true){
if((i__8836__auto___13654 < len__8835__auto___13653)){
args__8842__auto__.push((arguments[i__8836__auto___13654]));

var G__13655 = (i__8836__auto___13654 + (1));
i__8836__auto___13654 = G__13655;
continue;
} else {
}
break;
}

var argseq__8843__auto__ = ((((1) < args__8842__auto__.length))?(new cljs.core.IndexedSeq(args__8842__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8843__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq13651){
var G__13652 = cljs.core.first.call(null,seq13651);
var seq13651__$1 = cljs.core.next.call(null,seq13651);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__13652,seq13651__$1);
});


//# sourceMappingURL=format.js.map