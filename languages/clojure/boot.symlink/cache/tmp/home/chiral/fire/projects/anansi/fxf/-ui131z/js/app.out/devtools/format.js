// Compiled by ClojureScript 1.9.229 {}
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
var x__7411__auto__ = (((value == null))?null:value);
var m__7412__auto__ = (devtools.format._header[goog.typeOf(x__7411__auto__)]);
if(!((m__7412__auto__ == null))){
return m__7412__auto__.call(null,value);
} else {
var m__7412__auto____$1 = (devtools.format._header["_"]);
if(!((m__7412__auto____$1 == null))){
return m__7412__auto____$1.call(null,value);
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
var x__7411__auto__ = (((value == null))?null:value);
var m__7412__auto__ = (devtools.format._has_body[goog.typeOf(x__7411__auto__)]);
if(!((m__7412__auto__ == null))){
return m__7412__auto__.call(null,value);
} else {
var m__7412__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__7412__auto____$1 == null))){
return m__7412__auto____$1.call(null,value);
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
var x__7411__auto__ = (((value == null))?null:value);
var m__7412__auto__ = (devtools.format._body[goog.typeOf(x__7411__auto__)]);
if(!((m__7412__auto__ == null))){
return m__7412__auto__.call(null,value);
} else {
var m__7412__auto____$1 = (devtools.format._body["_"]);
if(!((m__7412__auto____$1 == null))){
return m__7412__auto____$1.call(null,value);
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

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__16756__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16756__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16756__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16756__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16755__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16755__auto__,"make_template");
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

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__16756__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16756__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16756__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16756__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16755__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16755__auto__,"make_group");
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

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__16756__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16756__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16756__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16756__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16755__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16755__auto__,"make_reference");
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

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__16756__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16756__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16756__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16756__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16755__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16755__auto__,"make_surrogate");
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

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__16756__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16756__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16756__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16756__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16755__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16755__auto__,"render_markup");
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

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__16756__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16756__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16756__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16756__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16755__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16755__auto__,"_LT_header_GT_");
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

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__16756__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16756__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16756__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16756__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16755__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16755__auto__,"_LT_standard_body_GT_");
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
var args__7830__auto__ = [];
var len__7823__auto___16777 = arguments.length;
var i__7824__auto___16778 = (0);
while(true){
if((i__7824__auto___16778 < len__7823__auto___16777)){
args__7830__auto__.push((arguments[i__7824__auto___16778]));

var G__16779 = (i__7824__auto___16778 + (1));
i__7824__auto___16778 = G__16779;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq16776){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16776));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16781 = arguments.length;
var i__7824__auto___16782 = (0);
while(true){
if((i__7824__auto___16782 < len__7823__auto___16781)){
args__7830__auto__.push((arguments[i__7824__auto___16782]));

var G__16783 = (i__7824__auto___16782 + (1));
i__7824__auto___16782 = G__16783;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq16780){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16780));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16785 = arguments.length;
var i__7824__auto___16786 = (0);
while(true){
if((i__7824__auto___16786 < len__7823__auto___16785)){
args__7830__auto__.push((arguments[i__7824__auto___16786]));

var G__16787 = (i__7824__auto___16786 + (1));
i__7824__auto___16786 = G__16787;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq16784){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16784));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16789 = arguments.length;
var i__7824__auto___16790 = (0);
while(true){
if((i__7824__auto___16790 < len__7823__auto___16789)){
args__7830__auto__.push((arguments[i__7824__auto___16790]));

var G__16791 = (i__7824__auto___16790 + (1));
i__7824__auto___16790 = G__16791;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq16788){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16788));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16793 = arguments.length;
var i__7824__auto___16794 = (0);
while(true){
if((i__7824__auto___16794 < len__7823__auto___16793)){
args__7830__auto__.push((arguments[i__7824__auto___16794]));

var G__16795 = (i__7824__auto___16794 + (1));
i__7824__auto___16794 = G__16795;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq16792){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16792));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16797 = arguments.length;
var i__7824__auto___16798 = (0);
while(true){
if((i__7824__auto___16798 < len__7823__auto___16797)){
args__7830__auto__.push((arguments[i__7824__auto___16798]));

var G__16799 = (i__7824__auto___16798 + (1));
i__7824__auto___16798 = G__16799;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq16796){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16796));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16801 = arguments.length;
var i__7824__auto___16802 = (0);
while(true){
if((i__7824__auto___16802 < len__7823__auto___16801)){
args__7830__auto__.push((arguments[i__7824__auto___16802]));

var G__16803 = (i__7824__auto___16802 + (1));
i__7824__auto___16802 = G__16803;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq16800){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16800));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16811 = arguments.length;
var i__7824__auto___16812 = (0);
while(true){
if((i__7824__auto___16812 < len__7823__auto___16811)){
args__7830__auto__.push((arguments[i__7824__auto___16812]));

var G__16813 = (i__7824__auto___16812 + (1));
i__7824__auto___16812 = G__16813;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((1) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7831__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__16807){
var vec__16808 = p__16807;
var state_override = cljs.core.nth.call(null,vec__16808,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__16808,state_override){
return (function (p1__16804_SHARP_){
return cljs.core.merge.call(null,p1__16804_SHARP_,state_override);
});})(vec__16808,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq16805){
var G__16806 = cljs.core.first.call(null,seq16805);
var seq16805__$1 = cljs.core.next.call(null,seq16805);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__16806,seq16805__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16815 = arguments.length;
var i__7824__auto___16816 = (0);
while(true){
if((i__7824__auto___16816 < len__7823__auto___16815)){
args__7830__auto__.push((arguments[i__7824__auto___16816]));

var G__16817 = (i__7824__auto___16816 + (1));
i__7824__auto___16816 = G__16817;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq16814){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16814));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16820 = arguments.length;
var i__7824__auto___16821 = (0);
while(true){
if((i__7824__auto___16821 < len__7823__auto___16820)){
args__7830__auto__.push((arguments[i__7824__auto___16821]));

var G__16822 = (i__7824__auto___16821 + (1));
i__7824__auto___16821 = G__16822;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((1) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7831__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq16818){
var G__16819 = cljs.core.first.call(null,seq16818);
var seq16818__$1 = cljs.core.next.call(null,seq16818);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__16819,seq16818__$1);
});


//# sourceMappingURL=format.js.map