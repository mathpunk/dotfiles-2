// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('devtools.defaults');
devtools.prefs._STAR_prefs_STAR_ = devtools.defaults.prefs;
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
return devtools.prefs._STAR_prefs_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return key.call(null,devtools.prefs._STAR_prefs_STAR_);
});
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return devtools.prefs._STAR_prefs_STAR_ = new_prefs;
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.assoc.call(null,devtools.prefs.get_prefs.call(null),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.merge.call(null,devtools.prefs.get_prefs.call(null),m));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__8842__auto__ = [];
var len__8835__auto___13884 = arguments.length;
var i__8836__auto___13885 = (0);
while(true){
if((i__8836__auto___13885 < len__8835__auto___13884)){
args__8842__auto__.push((arguments[i__8836__auto___13885]));

var G__13886 = (i__8836__auto___13885 + (1));
i__8836__auto___13885 = G__13886;
continue;
} else {
}
break;
}

var argseq__8843__auto__ = ((((2) < args__8842__auto__.length))?(new cljs.core.IndexedSeq(args__8842__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8843__auto__);
});

devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.call(null,f,devtools.prefs.pref.call(null,key),args);
return devtools.prefs.set_pref_BANG_.call(null,key,new_val);
});

devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq13878){
var G__13879 = cljs.core.first.call(null,seq13878);
var seq13878__$1 = cljs.core.next.call(null,seq13878);
var G__13880 = cljs.core.first.call(null,seq13878__$1);
var seq13878__$2 = cljs.core.next.call(null,seq13878__$1);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13879,G__13880,seq13878__$2);
});


//# sourceMappingURL=prefs.js.map