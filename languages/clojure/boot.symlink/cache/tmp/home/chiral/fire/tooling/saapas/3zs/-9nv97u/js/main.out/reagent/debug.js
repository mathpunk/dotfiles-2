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
var G__8897__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8904__i = 0, G__8904__a = new Array(arguments.length -  0);
while (G__8904__i < G__8904__a.length) {G__8904__a[G__8904__i] = arguments[G__8904__i + 0]; ++G__8904__i;}
  args = new cljs.core.IndexedSeq(G__8904__a,0);
} 
return G__8897__delegate.call(this,args);};
G__8897.cljs$lang$maxFixedArity = 0;
G__8897.cljs$lang$applyTo = (function (arglist__8905){
var args = cljs.core.seq(arglist__8905);
return G__8897__delegate(args);
});
G__8897.cljs$core$IFn$_invoke$arity$variadic = G__8897__delegate;
return G__8897;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8907__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8908__i = 0, G__8908__a = new Array(arguments.length -  0);
while (G__8908__i < G__8908__a.length) {G__8908__a[G__8908__i] = arguments[G__8908__i + 0]; ++G__8908__i;}
  args = new cljs.core.IndexedSeq(G__8908__a,0);
} 
return G__8907__delegate.call(this,args);};
G__8907.cljs$lang$maxFixedArity = 0;
G__8907.cljs$lang$applyTo = (function (arglist__8909){
var args = cljs.core.seq(arglist__8909);
return G__8907__delegate(args);
});
G__8907.cljs$core$IFn$_invoke$arity$variadic = G__8907__delegate;
return G__8907;
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