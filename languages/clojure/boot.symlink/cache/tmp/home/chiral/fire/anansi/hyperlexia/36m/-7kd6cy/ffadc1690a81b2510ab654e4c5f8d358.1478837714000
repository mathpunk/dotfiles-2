// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__7485__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__7485__auto__)){
return or__7485__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_9419 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_9419){
return (function (){
var _STAR_always_update_STAR_9421 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_9421;
}});})(_STAR_always_update_STAR_9419))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_9419;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args9425 = [];
var len__8701__auto___9432 = arguments.length;
var i__8702__auto___9433 = (0);
while(true){
if((i__8702__auto___9433 < len__8701__auto___9432)){
args9425.push((arguments[i__8702__auto___9433]));

var G__9434 = (i__8702__auto___9433 + (1));
i__8702__auto___9433 = G__9434;
continue;
} else {
}
break;
}

var G__9431 = args9425.length;
switch (G__9431) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9425.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__9440_9444 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__9441_9445 = null;
var count__9442_9446 = (0);
var i__9443_9447 = (0);
while(true){
if((i__9443_9447 < count__9442_9446)){
var v_9448 = cljs.core._nth.call(null,chunk__9441_9445,i__9443_9447);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_9448);

var G__9449 = seq__9440_9444;
var G__9450 = chunk__9441_9445;
var G__9451 = count__9442_9446;
var G__9452 = (i__9443_9447 + (1));
seq__9440_9444 = G__9449;
chunk__9441_9445 = G__9450;
count__9442_9446 = G__9451;
i__9443_9447 = G__9452;
continue;
} else {
var temp__6747__auto___9453 = cljs.core.seq.call(null,seq__9440_9444);
if(temp__6747__auto___9453){
var seq__9440_9454__$1 = temp__6747__auto___9453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9440_9454__$1)){
var c__8391__auto___9455 = cljs.core.chunk_first.call(null,seq__9440_9454__$1);
var G__9456 = cljs.core.chunk_rest.call(null,seq__9440_9454__$1);
var G__9457 = c__8391__auto___9455;
var G__9458 = cljs.core.count.call(null,c__8391__auto___9455);
var G__9459 = (0);
seq__9440_9444 = G__9456;
chunk__9441_9445 = G__9457;
count__9442_9446 = G__9458;
i__9443_9447 = G__9459;
continue;
} else {
var v_9460 = cljs.core.first.call(null,seq__9440_9454__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_9460);

var G__9463 = cljs.core.next.call(null,seq__9440_9454__$1);
var G__9464 = null;
var G__9465 = (0);
var G__9466 = (0);
seq__9440_9444 = G__9463;
chunk__9441_9445 = G__9464;
count__9442_9446 = G__9465;
i__9443_9447 = G__9466;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map