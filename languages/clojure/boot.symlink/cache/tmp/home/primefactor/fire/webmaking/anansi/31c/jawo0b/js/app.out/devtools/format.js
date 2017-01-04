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
var o__16901__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16901__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16901__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16901__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16900__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16900__auto__,"make_template");
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
var o__16901__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16901__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16901__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16901__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16900__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16900__auto__,"make_group");
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
var o__16901__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16901__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16901__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16901__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16900__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16900__auto__,"make_reference");
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
var o__16901__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16901__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16901__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16901__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16900__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16900__auto__,"make_surrogate");
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
var o__16901__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16901__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16901__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16901__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16900__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16900__auto__,"render_markup");
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
var o__16901__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16901__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16901__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16901__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16900__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16900__auto__,"_LT_header_GT_");
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
var o__16901__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__16901__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__16901__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__16901__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__16900__auto__ = temp__4657__auto____$2;
return goog.object.get(o__16900__auto__,"_LT_standard_body_GT_");
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
var len__7823__auto___16922 = arguments.length;
var i__7824__auto___16923 = (0);
while(true){
if((i__7824__auto___16923 < len__7823__auto___16922)){
args__7830__auto__.push((arguments[i__7824__auto___16923]));

var G__16924 = (i__7824__auto___16923 + (1));
i__7824__auto___16923 = G__16924;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq16921){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16921));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16926 = arguments.length;
var i__7824__auto___16927 = (0);
while(true){
if((i__7824__auto___16927 < len__7823__auto___16926)){
args__7830__auto__.push((arguments[i__7824__auto___16927]));

var G__16928 = (i__7824__auto___16927 + (1));
i__7824__auto___16927 = G__16928;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq16925){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16925));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16930 = arguments.length;
var i__7824__auto___16931 = (0);
while(true){
if((i__7824__auto___16931 < len__7823__auto___16930)){
args__7830__auto__.push((arguments[i__7824__auto___16931]));

var G__16932 = (i__7824__auto___16931 + (1));
i__7824__auto___16931 = G__16932;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq16929){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16929));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16934 = arguments.length;
var i__7824__auto___16935 = (0);
while(true){
if((i__7824__auto___16935 < len__7823__auto___16934)){
args__7830__auto__.push((arguments[i__7824__auto___16935]));

var G__16936 = (i__7824__auto___16935 + (1));
i__7824__auto___16935 = G__16936;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq16933){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16933));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16938 = arguments.length;
var i__7824__auto___16939 = (0);
while(true){
if((i__7824__auto___16939 < len__7823__auto___16938)){
args__7830__auto__.push((arguments[i__7824__auto___16939]));

var G__16940 = (i__7824__auto___16939 + (1));
i__7824__auto___16939 = G__16940;
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

devtools.format.template.cljs$lang$applyTo = (function (seq16937){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16937));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16942 = arguments.length;
var i__7824__auto___16943 = (0);
while(true){
if((i__7824__auto___16943 < len__7823__auto___16942)){
args__7830__auto__.push((arguments[i__7824__auto___16943]));

var G__16944 = (i__7824__auto___16943 + (1));
i__7824__auto___16943 = G__16944;
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

devtools.format.group.cljs$lang$applyTo = (function (seq16941){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16941));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16946 = arguments.length;
var i__7824__auto___16947 = (0);
while(true){
if((i__7824__auto___16947 < len__7823__auto___16946)){
args__7830__auto__.push((arguments[i__7824__auto___16947]));

var G__16948 = (i__7824__auto___16947 + (1));
i__7824__auto___16947 = G__16948;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq16945){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16945));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16956 = arguments.length;
var i__7824__auto___16957 = (0);
while(true){
if((i__7824__auto___16957 < len__7823__auto___16956)){
args__7830__auto__.push((arguments[i__7824__auto___16957]));

var G__16958 = (i__7824__auto___16957 + (1));
i__7824__auto___16957 = G__16958;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((1) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7831__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__16952){
var vec__16953 = p__16952;
var state_override = cljs.core.nth.call(null,vec__16953,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__16953,state_override){
return (function (p1__16949_SHARP_){
return cljs.core.merge.call(null,p1__16949_SHARP_,state_override);
});})(vec__16953,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq16950){
var G__16951 = cljs.core.first.call(null,seq16950);
var seq16950__$1 = cljs.core.next.call(null,seq16950);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__16951,seq16950__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16960 = arguments.length;
var i__7824__auto___16961 = (0);
while(true){
if((i__7824__auto___16961 < len__7823__auto___16960)){
args__7830__auto__.push((arguments[i__7824__auto___16961]));

var G__16962 = (i__7824__auto___16961 + (1));
i__7824__auto___16961 = G__16962;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq16959){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16959));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16965 = arguments.length;
var i__7824__auto___16966 = (0);
while(true){
if((i__7824__auto___16966 < len__7823__auto___16965)){
args__7830__auto__.push((arguments[i__7824__auto___16966]));

var G__16967 = (i__7824__auto___16966 + (1));
i__7824__auto___16966 = G__16967;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq16963){
var G__16964 = cljs.core.first.call(null,seq16963);
var seq16963__$1 = cljs.core.next.call(null,seq16963);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__16964,seq16963__$1);
});


//# sourceMappingURL=format.js.map