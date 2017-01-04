// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8859__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8860__i = 0, G__8860__a = new Array(arguments.length -  0);
while (G__8860__i < G__8860__a.length) {G__8860__a[G__8860__i] = arguments[G__8860__i + 0]; ++G__8860__i;}
  args = new cljs.core.IndexedSeq(G__8860__a,0);
} 
return G__8859__delegate.call(this,args);};
G__8859.cljs$lang$maxFixedArity = 0;
G__8859.cljs$lang$applyTo = (function (arglist__8861){
var args = cljs.core.seq(arglist__8861);
return G__8859__delegate(args);
});
G__8859.cljs$core$IFn$_invoke$arity$variadic = G__8859__delegate;
return G__8859;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8864__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8870__i = 0, G__8870__a = new Array(arguments.length -  0);
while (G__8870__i < G__8870__a.length) {G__8870__a[G__8870__i] = arguments[G__8870__i + 0]; ++G__8870__i;}
  args = new cljs.core.IndexedSeq(G__8870__a,0);
} 
return G__8864__delegate.call(this,args);};
G__8864.cljs$lang$maxFixedArity = 0;
G__8864.cljs$lang$applyTo = (function (arglist__8871){
var args = cljs.core.seq(arglist__8871);
return G__8864__delegate(args);
});
G__8864.cljs$core$IFn$_invoke$arity$variadic = G__8864__delegate;
return G__8864;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map