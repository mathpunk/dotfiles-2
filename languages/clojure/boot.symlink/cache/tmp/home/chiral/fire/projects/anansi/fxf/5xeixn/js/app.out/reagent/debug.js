// Compiled by ClojureScript 1.9.229 {}
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
var G__12499__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12500__i = 0, G__12500__a = new Array(arguments.length -  0);
while (G__12500__i < G__12500__a.length) {G__12500__a[G__12500__i] = arguments[G__12500__i + 0]; ++G__12500__i;}
  args = new cljs.core.IndexedSeq(G__12500__a,0);
} 
return G__12499__delegate.call(this,args);};
G__12499.cljs$lang$maxFixedArity = 0;
G__12499.cljs$lang$applyTo = (function (arglist__12501){
var args = cljs.core.seq(arglist__12501);
return G__12499__delegate(args);
});
G__12499.cljs$core$IFn$_invoke$arity$variadic = G__12499__delegate;
return G__12499;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12502__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12503__i = 0, G__12503__a = new Array(arguments.length -  0);
while (G__12503__i < G__12503__a.length) {G__12503__a[G__12503__i] = arguments[G__12503__i + 0]; ++G__12503__i;}
  args = new cljs.core.IndexedSeq(G__12503__a,0);
} 
return G__12502__delegate.call(this,args);};
G__12502.cljs$lang$maxFixedArity = 0;
G__12502.cljs$lang$applyTo = (function (arglist__12504){
var args = cljs.core.seq(arglist__12504);
return G__12502__delegate(args);
});
G__12502.cljs$core$IFn$_invoke$arity$variadic = G__12502__delegate;
return G__12502;
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