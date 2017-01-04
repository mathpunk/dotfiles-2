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
var G__9026__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9027__i = 0, G__9027__a = new Array(arguments.length -  0);
while (G__9027__i < G__9027__a.length) {G__9027__a[G__9027__i] = arguments[G__9027__i + 0]; ++G__9027__i;}
  args = new cljs.core.IndexedSeq(G__9027__a,0);
} 
return G__9026__delegate.call(this,args);};
G__9026.cljs$lang$maxFixedArity = 0;
G__9026.cljs$lang$applyTo = (function (arglist__9028){
var args = cljs.core.seq(arglist__9028);
return G__9026__delegate(args);
});
G__9026.cljs$core$IFn$_invoke$arity$variadic = G__9026__delegate;
return G__9026;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9029__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9030__i = 0, G__9030__a = new Array(arguments.length -  0);
while (G__9030__i < G__9030__a.length) {G__9030__a[G__9030__i] = arguments[G__9030__i + 0]; ++G__9030__i;}
  args = new cljs.core.IndexedSeq(G__9030__a,0);
} 
return G__9029__delegate.call(this,args);};
G__9029.cljs$lang$maxFixedArity = 0;
G__9029.cljs$lang$applyTo = (function (arglist__9031){
var args = cljs.core.seq(arglist__9031);
return G__9029__delegate(args);
});
G__9029.cljs$core$IFn$_invoke$arity$variadic = G__9029__delegate;
return G__9029;
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