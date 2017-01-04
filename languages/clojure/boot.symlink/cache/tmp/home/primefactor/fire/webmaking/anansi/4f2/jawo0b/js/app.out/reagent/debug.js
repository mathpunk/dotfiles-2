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
var G__10529__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10530__i = 0, G__10530__a = new Array(arguments.length -  0);
while (G__10530__i < G__10530__a.length) {G__10530__a[G__10530__i] = arguments[G__10530__i + 0]; ++G__10530__i;}
  args = new cljs.core.IndexedSeq(G__10530__a,0);
} 
return G__10529__delegate.call(this,args);};
G__10529.cljs$lang$maxFixedArity = 0;
G__10529.cljs$lang$applyTo = (function (arglist__10531){
var args = cljs.core.seq(arglist__10531);
return G__10529__delegate(args);
});
G__10529.cljs$core$IFn$_invoke$arity$variadic = G__10529__delegate;
return G__10529;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10532__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10533__i = 0, G__10533__a = new Array(arguments.length -  0);
while (G__10533__i < G__10533__a.length) {G__10533__a[G__10533__i] = arguments[G__10533__i + 0]; ++G__10533__i;}
  args = new cljs.core.IndexedSeq(G__10533__a,0);
} 
return G__10532__delegate.call(this,args);};
G__10532.cljs$lang$maxFixedArity = 0;
G__10532.cljs$lang$applyTo = (function (arglist__10534){
var args = cljs.core.seq(arglist__10534);
return G__10532__delegate(args);
});
G__10532.cljs$core$IFn$_invoke$arity$variadic = G__10532__delegate;
return G__10532;
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