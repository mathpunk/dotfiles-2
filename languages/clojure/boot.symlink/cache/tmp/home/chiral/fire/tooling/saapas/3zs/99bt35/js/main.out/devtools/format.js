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
var x__8198__auto__ = (((value == null))?null:value);
var m__8199__auto__ = (devtools.format._header[goog.typeOf(x__8198__auto__)]);
if(!((m__8199__auto__ == null))){
return m__8199__auto__.call(null,value);
} else {
var m__8199__auto____$1 = (devtools.format._header["_"]);
if(!((m__8199__auto____$1 == null))){
return m__8199__auto____$1.call(null,value);
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
var x__8198__auto__ = (((value == null))?null:value);
var m__8199__auto__ = (devtools.format._has_body[goog.typeOf(x__8198__auto__)]);
if(!((m__8199__auto__ == null))){
return m__8199__auto__.call(null,value);
} else {
var m__8199__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__8199__auto____$1 == null))){
return m__8199__auto____$1.call(null,value);
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
var x__8198__auto__ = (((value == null))?null:value);
var m__8199__auto__ = (devtools.format._body[goog.typeOf(x__8198__auto__)]);
if(!((m__8199__auto__ == null))){
return m__8199__auto__.call(null,value);
} else {
var m__8199__auto____$1 = (devtools.format._body["_"]);
if(!((m__8199__auto____$1 == null))){
return m__8199__auto____$1.call(null,value);
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
var o__12273__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12273__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12273__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12273__auto____$1,"templating");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12272__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12272__auto__,"make_template");
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
var o__12273__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12273__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12273__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12273__auto____$1,"templating");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12272__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12272__auto__,"make_group");
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
var o__12273__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12273__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12273__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12273__auto____$1,"templating");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12272__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12272__auto__,"make_reference");
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
var o__12273__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12273__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12273__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12273__auto____$1,"templating");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12272__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12272__auto__,"make_surrogate");
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
var o__12273__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12273__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12273__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12273__auto____$1,"templating");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12272__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12272__auto__,"render_markup");
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
var o__12273__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12273__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12273__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12273__auto____$1,"markup");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12272__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12272__auto__,"_LT_header_GT_");
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
var o__12273__auto__ = temp__6747__auto__;
var temp__6747__auto____$1 = goog.object.get(o__12273__auto__,"formatters");
if(cljs.core.truth_(temp__6747__auto____$1)){
var o__12273__auto____$1 = temp__6747__auto____$1;
var temp__6747__auto____$2 = goog.object.get(o__12273__auto____$1,"markup");
if(cljs.core.truth_(temp__6747__auto____$2)){
var o__12272__auto__ = temp__6747__auto____$2;
return goog.object.get(o__12272__auto__,"_LT_standard_body_GT_");
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
var args__8708__auto__ = [];
var len__8701__auto___12657 = arguments.length;
var i__8702__auto___12658 = (0);
while(true){
if((i__8702__auto___12658 < len__8701__auto___12657)){
args__8708__auto__.push((arguments[i__8702__auto___12658]));

var G__12663 = (i__8702__auto___12658 + (1));
i__8702__auto___12658 = G__12663;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq12656){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12656));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__8708__auto__ = [];
var len__8701__auto___12693 = arguments.length;
var i__8702__auto___12694 = (0);
while(true){
if((i__8702__auto___12694 < len__8701__auto___12693)){
args__8708__auto__.push((arguments[i__8702__auto___12694]));

var G__12701 = (i__8702__auto___12694 + (1));
i__8702__auto___12694 = G__12701;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq12676){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12676));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__8708__auto__ = [];
var len__8701__auto___12713 = arguments.length;
var i__8702__auto___12714 = (0);
while(true){
if((i__8702__auto___12714 < len__8701__auto___12713)){
args__8708__auto__.push((arguments[i__8702__auto___12714]));

var G__12715 = (i__8702__auto___12714 + (1));
i__8702__auto___12714 = G__12715;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq12712){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12712));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__8708__auto__ = [];
var len__8701__auto___12717 = arguments.length;
var i__8702__auto___12718 = (0);
while(true){
if((i__8702__auto___12718 < len__8701__auto___12717)){
args__8708__auto__.push((arguments[i__8702__auto___12718]));

var G__12721 = (i__8702__auto___12718 + (1));
i__8702__auto___12718 = G__12721;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq12716){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12716));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__8708__auto__ = [];
var len__8701__auto___12731 = arguments.length;
var i__8702__auto___12732 = (0);
while(true){
if((i__8702__auto___12732 < len__8701__auto___12731)){
args__8708__auto__.push((arguments[i__8702__auto___12732]));

var G__12733 = (i__8702__auto___12732 + (1));
i__8702__auto___12732 = G__12733;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq12726){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12726));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__8708__auto__ = [];
var len__8701__auto___12737 = arguments.length;
var i__8702__auto___12738 = (0);
while(true){
if((i__8702__auto___12738 < len__8701__auto___12737)){
args__8708__auto__.push((arguments[i__8702__auto___12738]));

var G__12739 = (i__8702__auto___12738 + (1));
i__8702__auto___12738 = G__12739;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq12734){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12734));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__8708__auto__ = [];
var len__8701__auto___12778 = arguments.length;
var i__8702__auto___12779 = (0);
while(true){
if((i__8702__auto___12779 < len__8701__auto___12778)){
args__8708__auto__.push((arguments[i__8702__auto___12779]));

var G__12780 = (i__8702__auto___12779 + (1));
i__8702__auto___12779 = G__12780;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq12746){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12746));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__8708__auto__ = [];
var len__8701__auto___12790 = arguments.length;
var i__8702__auto___12791 = (0);
while(true){
if((i__8702__auto___12791 < len__8701__auto___12790)){
args__8708__auto__.push((arguments[i__8702__auto___12791]));

var G__12792 = (i__8702__auto___12791 + (1));
i__8702__auto___12791 = G__12792;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((1) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8709__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__12784){
var vec__12785 = p__12784;
var state_override = cljs.core.nth.call(null,vec__12785,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__12785,state_override){
return (function (p1__12781_SHARP_){
return cljs.core.merge.call(null,p1__12781_SHARP_,state_override);
});})(vec__12785,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq12782){
var G__12783 = cljs.core.first.call(null,seq12782);
var seq12782__$1 = cljs.core.next.call(null,seq12782);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__12783,seq12782__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__8708__auto__ = [];
var len__8701__auto___12810 = arguments.length;
var i__8702__auto___12811 = (0);
while(true){
if((i__8702__auto___12811 < len__8701__auto___12810)){
args__8708__auto__.push((arguments[i__8702__auto___12811]));

var G__12814 = (i__8702__auto___12811 + (1));
i__8702__auto___12811 = G__12814;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq12802){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12802));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__8708__auto__ = [];
var len__8701__auto___12826 = arguments.length;
var i__8702__auto___12827 = (0);
while(true){
if((i__8702__auto___12827 < len__8701__auto___12826)){
args__8708__auto__.push((arguments[i__8702__auto___12827]));

var G__12828 = (i__8702__auto___12827 + (1));
i__8702__auto___12827 = G__12828;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((1) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8709__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq12817){
var G__12818 = cljs.core.first.call(null,seq12817);
var seq12817__$1 = cljs.core.next.call(null,seq12817);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__12818,seq12817__$1);
});


//# sourceMappingURL=format.js.map