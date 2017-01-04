// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__8137__auto__,writer__8138__auto__,opt__8139__auto__){
return cljs.core._write.call(null,writer__8138__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9738 = arguments.length;
var i__8702__auto___9739 = (0);
while(true){
if((i__8702__auto___9739 < len__8701__auto___9738)){
args__8708__auto__.push((arguments[i__8702__auto___9739]));

var G__9740 = (i__8702__auto___9739 + (1));
i__8702__auto___9739 = G__9740;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq9737){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9737));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9746 = arguments.length;
var i__8702__auto___9747 = (0);
while(true){
if((i__8702__auto___9747 < len__8701__auto___9746)){
args__8708__auto__.push((arguments[i__8702__auto___9747]));

var G__9748 = (i__8702__auto___9747 + (1));
i__8702__auto___9747 = G__9748;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq9743){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9743));
});

var g_QMARK__9751 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_9752 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__9751){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__9751))
,null));
var mkg_9753 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__9751,g_9752){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__9751,g_9752))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__9751,g_9752,mkg_9753){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__9751).call(null,x);
});})(g_QMARK__9751,g_9752,mkg_9753))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__9751,g_9752,mkg_9753){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_9753).call(null,gfn);
});})(g_QMARK__9751,g_9752,mkg_9753))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__9751,g_9752,mkg_9753){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_9752).call(null,generator);
});})(g_QMARK__9751,g_9752,mkg_9753))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9706__auto___9814 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__9706__auto___9814){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9816 = arguments.length;
var i__8702__auto___9817 = (0);
while(true){
if((i__8702__auto___9817 < len__8701__auto___9816)){
args__8708__auto__.push((arguments[i__8702__auto___9817]));

var G__9818 = (i__8702__auto___9817 + (1));
i__8702__auto___9817 = G__9818;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9814))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9814){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9814),args);
});})(g__9706__auto___9814))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__9706__auto___9814){
return (function (seq9761){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9761));
});})(g__9706__auto___9814))
;


var g__9706__auto___9819 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__9706__auto___9819){
return (function cljs$spec$impl$gen$list(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9820 = arguments.length;
var i__8702__auto___9821 = (0);
while(true){
if((i__8702__auto___9821 < len__8701__auto___9820)){
args__8708__auto__.push((arguments[i__8702__auto___9821]));

var G__9822 = (i__8702__auto___9821 + (1));
i__8702__auto___9821 = G__9822;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9819))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9819){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9819),args);
});})(g__9706__auto___9819))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__9706__auto___9819){
return (function (seq9764){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9764));
});})(g__9706__auto___9819))
;


var g__9706__auto___9823 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__9706__auto___9823){
return (function cljs$spec$impl$gen$map(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9824 = arguments.length;
var i__8702__auto___9825 = (0);
while(true){
if((i__8702__auto___9825 < len__8701__auto___9824)){
args__8708__auto__.push((arguments[i__8702__auto___9825]));

var G__9826 = (i__8702__auto___9825 + (1));
i__8702__auto___9825 = G__9826;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9823))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9823){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9823),args);
});})(g__9706__auto___9823))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__9706__auto___9823){
return (function (seq9765){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9765));
});})(g__9706__auto___9823))
;


var g__9706__auto___9827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__9706__auto___9827){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9828 = arguments.length;
var i__8702__auto___9829 = (0);
while(true){
if((i__8702__auto___9829 < len__8701__auto___9828)){
args__8708__auto__.push((arguments[i__8702__auto___9829]));

var G__9830 = (i__8702__auto___9829 + (1));
i__8702__auto___9829 = G__9830;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9827))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9827),args);
});})(g__9706__auto___9827))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__9706__auto___9827){
return (function (seq9767){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9767));
});})(g__9706__auto___9827))
;


var g__9706__auto___9833 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__9706__auto___9833){
return (function cljs$spec$impl$gen$set(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9834 = arguments.length;
var i__8702__auto___9836 = (0);
while(true){
if((i__8702__auto___9836 < len__8701__auto___9834)){
args__8708__auto__.push((arguments[i__8702__auto___9836]));

var G__9838 = (i__8702__auto___9836 + (1));
i__8702__auto___9836 = G__9838;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9833))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9833){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9833),args);
});})(g__9706__auto___9833))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__9706__auto___9833){
return (function (seq9771){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9771));
});})(g__9706__auto___9833))
;


var g__9706__auto___9839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__9706__auto___9839){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9840 = arguments.length;
var i__8702__auto___9841 = (0);
while(true){
if((i__8702__auto___9841 < len__8701__auto___9840)){
args__8708__auto__.push((arguments[i__8702__auto___9841]));

var G__9842 = (i__8702__auto___9841 + (1));
i__8702__auto___9841 = G__9842;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9839))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9839),args);
});})(g__9706__auto___9839))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__9706__auto___9839){
return (function (seq9772){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9772));
});})(g__9706__auto___9839))
;


var g__9706__auto___9846 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__9706__auto___9846){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9847 = arguments.length;
var i__8702__auto___9849 = (0);
while(true){
if((i__8702__auto___9849 < len__8701__auto___9847)){
args__8708__auto__.push((arguments[i__8702__auto___9849]));

var G__9851 = (i__8702__auto___9849 + (1));
i__8702__auto___9849 = G__9851;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9846))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9846){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9846),args);
});})(g__9706__auto___9846))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__9706__auto___9846){
return (function (seq9773){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9773));
});})(g__9706__auto___9846))
;


var g__9706__auto___9854 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__9706__auto___9854){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9855 = arguments.length;
var i__8702__auto___9856 = (0);
while(true){
if((i__8702__auto___9856 < len__8701__auto___9855)){
args__8708__auto__.push((arguments[i__8702__auto___9856]));

var G__9857 = (i__8702__auto___9856 + (1));
i__8702__auto___9856 = G__9857;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9854))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9854){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9854),args);
});})(g__9706__auto___9854))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__9706__auto___9854){
return (function (seq9774){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9774));
});})(g__9706__auto___9854))
;


var g__9706__auto___9862 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__9706__auto___9862){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9863 = arguments.length;
var i__8702__auto___9864 = (0);
while(true){
if((i__8702__auto___9864 < len__8701__auto___9863)){
args__8708__auto__.push((arguments[i__8702__auto___9864]));

var G__9865 = (i__8702__auto___9864 + (1));
i__8702__auto___9864 = G__9865;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9862))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9862){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9862),args);
});})(g__9706__auto___9862))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__9706__auto___9862){
return (function (seq9777){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9777));
});})(g__9706__auto___9862))
;


var g__9706__auto___9868 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__9706__auto___9868){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9869 = arguments.length;
var i__8702__auto___9870 = (0);
while(true){
if((i__8702__auto___9870 < len__8701__auto___9869)){
args__8708__auto__.push((arguments[i__8702__auto___9870]));

var G__9872 = (i__8702__auto___9870 + (1));
i__8702__auto___9870 = G__9872;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9868))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9868){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9868),args);
});})(g__9706__auto___9868))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__9706__auto___9868){
return (function (seq9781){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9781));
});})(g__9706__auto___9868))
;


var g__9706__auto___9874 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__9706__auto___9874){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9875 = arguments.length;
var i__8702__auto___9876 = (0);
while(true){
if((i__8702__auto___9876 < len__8701__auto___9875)){
args__8708__auto__.push((arguments[i__8702__auto___9876]));

var G__9877 = (i__8702__auto___9876 + (1));
i__8702__auto___9876 = G__9877;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9874))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9874){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9874),args);
});})(g__9706__auto___9874))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__9706__auto___9874){
return (function (seq9785){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9785));
});})(g__9706__auto___9874))
;


var g__9706__auto___9878 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__9706__auto___9878){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9879 = arguments.length;
var i__8702__auto___9880 = (0);
while(true){
if((i__8702__auto___9880 < len__8701__auto___9879)){
args__8708__auto__.push((arguments[i__8702__auto___9880]));

var G__9881 = (i__8702__auto___9880 + (1));
i__8702__auto___9880 = G__9881;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9878))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9878){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9878),args);
});})(g__9706__auto___9878))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__9706__auto___9878){
return (function (seq9788){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9788));
});})(g__9706__auto___9878))
;


var g__9706__auto___9882 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__9706__auto___9882){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9883 = arguments.length;
var i__8702__auto___9884 = (0);
while(true){
if((i__8702__auto___9884 < len__8701__auto___9883)){
args__8708__auto__.push((arguments[i__8702__auto___9884]));

var G__9885 = (i__8702__auto___9884 + (1));
i__8702__auto___9884 = G__9885;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9882))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9882){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9882),args);
});})(g__9706__auto___9882))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__9706__auto___9882){
return (function (seq9789){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9789));
});})(g__9706__auto___9882))
;


var g__9706__auto___9886 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__9706__auto___9886){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9887 = arguments.length;
var i__8702__auto___9888 = (0);
while(true){
if((i__8702__auto___9888 < len__8701__auto___9887)){
args__8708__auto__.push((arguments[i__8702__auto___9888]));

var G__9891 = (i__8702__auto___9888 + (1));
i__8702__auto___9888 = G__9891;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9886))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9886){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9886),args);
});})(g__9706__auto___9886))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__9706__auto___9886){
return (function (seq9791){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9791));
});})(g__9706__auto___9886))
;


var g__9706__auto___9892 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__9706__auto___9892){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9893 = arguments.length;
var i__8702__auto___9894 = (0);
while(true){
if((i__8702__auto___9894 < len__8701__auto___9893)){
args__8708__auto__.push((arguments[i__8702__auto___9894]));

var G__9895 = (i__8702__auto___9894 + (1));
i__8702__auto___9894 = G__9895;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9892))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9892){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9892),args);
});})(g__9706__auto___9892))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__9706__auto___9892){
return (function (seq9794){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9794));
});})(g__9706__auto___9892))
;


var g__9706__auto___9896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__9706__auto___9896){
return (function cljs$spec$impl$gen$return(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9897 = arguments.length;
var i__8702__auto___9898 = (0);
while(true){
if((i__8702__auto___9898 < len__8701__auto___9897)){
args__8708__auto__.push((arguments[i__8702__auto___9898]));

var G__9899 = (i__8702__auto___9898 + (1));
i__8702__auto___9898 = G__9899;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9896))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9896){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9896),args);
});})(g__9706__auto___9896))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__9706__auto___9896){
return (function (seq9796){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9796));
});})(g__9706__auto___9896))
;


var g__9706__auto___9900 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__9706__auto___9900){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9903 = arguments.length;
var i__8702__auto___9904 = (0);
while(true){
if((i__8702__auto___9904 < len__8701__auto___9903)){
args__8708__auto__.push((arguments[i__8702__auto___9904]));

var G__9906 = (i__8702__auto___9904 + (1));
i__8702__auto___9904 = G__9906;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9900))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9900){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9900),args);
});})(g__9706__auto___9900))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9706__auto___9900){
return (function (seq9797){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9797));
});})(g__9706__auto___9900))
;


var g__9706__auto___9908 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__9706__auto___9908){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8708__auto__ = [];
var len__8701__auto___9909 = arguments.length;
var i__8702__auto___9910 = (0);
while(true){
if((i__8702__auto___9910 < len__8701__auto___9909)){
args__8708__auto__.push((arguments[i__8702__auto___9910]));

var G__9911 = (i__8702__auto___9910 + (1));
i__8702__auto___9910 = G__9911;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9706__auto___9908))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9706__auto___9908){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9706__auto___9908),args);
});})(g__9706__auto___9908))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__9706__auto___9908){
return (function (seq9811){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9811));
});})(g__9706__auto___9908))
;

var g__9722__auto___10000 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__9722__auto___10000){
return (function cljs$spec$impl$gen$any(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10004 = arguments.length;
var i__8702__auto___10006 = (0);
while(true){
if((i__8702__auto___10006 < len__8701__auto___10004)){
args__8708__auto__.push((arguments[i__8702__auto___10006]));

var G__10007 = (i__8702__auto___10006 + (1));
i__8702__auto___10006 = G__10007;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10000))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10000){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10000);
});})(g__9722__auto___10000))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__9722__auto___10000){
return (function (seq9914){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9914));
});})(g__9722__auto___10000))
;


var g__9722__auto___10008 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__9722__auto___10008){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10009 = arguments.length;
var i__8702__auto___10010 = (0);
while(true){
if((i__8702__auto___10010 < len__8701__auto___10009)){
args__8708__auto__.push((arguments[i__8702__auto___10010]));

var G__10011 = (i__8702__auto___10010 + (1));
i__8702__auto___10010 = G__10011;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10008))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10008){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10008);
});})(g__9722__auto___10008))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__9722__auto___10008){
return (function (seq9916){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9916));
});})(g__9722__auto___10008))
;


var g__9722__auto___10012 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__9722__auto___10012){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10013 = arguments.length;
var i__8702__auto___10014 = (0);
while(true){
if((i__8702__auto___10014 < len__8701__auto___10013)){
args__8708__auto__.push((arguments[i__8702__auto___10014]));

var G__10015 = (i__8702__auto___10014 + (1));
i__8702__auto___10014 = G__10015;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10012))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10012){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10012);
});})(g__9722__auto___10012))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__9722__auto___10012){
return (function (seq9920){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9920));
});})(g__9722__auto___10012))
;


var g__9722__auto___10016 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__9722__auto___10016){
return (function cljs$spec$impl$gen$char(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10017 = arguments.length;
var i__8702__auto___10018 = (0);
while(true){
if((i__8702__auto___10018 < len__8701__auto___10017)){
args__8708__auto__.push((arguments[i__8702__auto___10018]));

var G__10019 = (i__8702__auto___10018 + (1));
i__8702__auto___10018 = G__10019;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10016))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10016){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10016);
});})(g__9722__auto___10016))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__9722__auto___10016){
return (function (seq9922){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9922));
});})(g__9722__auto___10016))
;


var g__9722__auto___10020 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__9722__auto___10020){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10021 = arguments.length;
var i__8702__auto___10022 = (0);
while(true){
if((i__8702__auto___10022 < len__8701__auto___10021)){
args__8708__auto__.push((arguments[i__8702__auto___10022]));

var G__10023 = (i__8702__auto___10022 + (1));
i__8702__auto___10022 = G__10023;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10020))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10020){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10020);
});})(g__9722__auto___10020))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__9722__auto___10020){
return (function (seq9927){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9927));
});})(g__9722__auto___10020))
;


var g__9722__auto___10025 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__9722__auto___10025){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10032 = arguments.length;
var i__8702__auto___10033 = (0);
while(true){
if((i__8702__auto___10033 < len__8701__auto___10032)){
args__8708__auto__.push((arguments[i__8702__auto___10033]));

var G__10034 = (i__8702__auto___10033 + (1));
i__8702__auto___10033 = G__10034;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10025))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10025){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10025);
});})(g__9722__auto___10025))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__9722__auto___10025){
return (function (seq9932){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9932));
});})(g__9722__auto___10025))
;


var g__9722__auto___10035 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__9722__auto___10035){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10036 = arguments.length;
var i__8702__auto___10037 = (0);
while(true){
if((i__8702__auto___10037 < len__8701__auto___10036)){
args__8708__auto__.push((arguments[i__8702__auto___10037]));

var G__10038 = (i__8702__auto___10037 + (1));
i__8702__auto___10037 = G__10038;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10035))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10035){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10035);
});})(g__9722__auto___10035))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__9722__auto___10035){
return (function (seq9945){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9945));
});})(g__9722__auto___10035))
;


var g__9722__auto___10039 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__9722__auto___10039){
return (function cljs$spec$impl$gen$double(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10040 = arguments.length;
var i__8702__auto___10041 = (0);
while(true){
if((i__8702__auto___10041 < len__8701__auto___10040)){
args__8708__auto__.push((arguments[i__8702__auto___10041]));

var G__10042 = (i__8702__auto___10041 + (1));
i__8702__auto___10041 = G__10042;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10039))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10039){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10039);
});})(g__9722__auto___10039))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__9722__auto___10039){
return (function (seq9955){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9955));
});})(g__9722__auto___10039))
;


var g__9722__auto___10043 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__9722__auto___10043){
return (function cljs$spec$impl$gen$int(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10044 = arguments.length;
var i__8702__auto___10045 = (0);
while(true){
if((i__8702__auto___10045 < len__8701__auto___10044)){
args__8708__auto__.push((arguments[i__8702__auto___10045]));

var G__10046 = (i__8702__auto___10045 + (1));
i__8702__auto___10045 = G__10046;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10043))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10043){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10043);
});})(g__9722__auto___10043))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__9722__auto___10043){
return (function (seq9956){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9956));
});})(g__9722__auto___10043))
;


var g__9722__auto___10051 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__9722__auto___10051){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10053 = arguments.length;
var i__8702__auto___10054 = (0);
while(true){
if((i__8702__auto___10054 < len__8701__auto___10053)){
args__8708__auto__.push((arguments[i__8702__auto___10054]));

var G__10055 = (i__8702__auto___10054 + (1));
i__8702__auto___10054 = G__10055;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10051))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10051){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10051);
});})(g__9722__auto___10051))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__9722__auto___10051){
return (function (seq9957){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9957));
});})(g__9722__auto___10051))
;


var g__9722__auto___10059 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__9722__auto___10059){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10061 = arguments.length;
var i__8702__auto___10062 = (0);
while(true){
if((i__8702__auto___10062 < len__8701__auto___10061)){
args__8708__auto__.push((arguments[i__8702__auto___10062]));

var G__10063 = (i__8702__auto___10062 + (1));
i__8702__auto___10062 = G__10063;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10059))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10059){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10059);
});})(g__9722__auto___10059))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__9722__auto___10059){
return (function (seq9958){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9958));
});})(g__9722__auto___10059))
;


var g__9722__auto___10066 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__9722__auto___10066){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10067 = arguments.length;
var i__8702__auto___10068 = (0);
while(true){
if((i__8702__auto___10068 < len__8701__auto___10067)){
args__8708__auto__.push((arguments[i__8702__auto___10068]));

var G__10069 = (i__8702__auto___10068 + (1));
i__8702__auto___10068 = G__10069;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10066))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10066){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10066);
});})(g__9722__auto___10066))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__9722__auto___10066){
return (function (seq9959){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9959));
});})(g__9722__auto___10066))
;


var g__9722__auto___10073 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__9722__auto___10073){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10074 = arguments.length;
var i__8702__auto___10075 = (0);
while(true){
if((i__8702__auto___10075 < len__8701__auto___10074)){
args__8708__auto__.push((arguments[i__8702__auto___10075]));

var G__10078 = (i__8702__auto___10075 + (1));
i__8702__auto___10075 = G__10078;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10073))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10073){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10073);
});})(g__9722__auto___10073))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__9722__auto___10073){
return (function (seq9962){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9962));
});})(g__9722__auto___10073))
;


var g__9722__auto___10079 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__9722__auto___10079){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10083 = arguments.length;
var i__8702__auto___10084 = (0);
while(true){
if((i__8702__auto___10084 < len__8701__auto___10083)){
args__8708__auto__.push((arguments[i__8702__auto___10084]));

var G__10085 = (i__8702__auto___10084 + (1));
i__8702__auto___10084 = G__10085;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10079))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10079){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10079);
});})(g__9722__auto___10079))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__9722__auto___10079){
return (function (seq9963){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9963));
});})(g__9722__auto___10079))
;


var g__9722__auto___10086 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__9722__auto___10086){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10087 = arguments.length;
var i__8702__auto___10088 = (0);
while(true){
if((i__8702__auto___10088 < len__8701__auto___10087)){
args__8708__auto__.push((arguments[i__8702__auto___10088]));

var G__10089 = (i__8702__auto___10088 + (1));
i__8702__auto___10088 = G__10089;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10086))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10086){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10086);
});})(g__9722__auto___10086))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__9722__auto___10086){
return (function (seq9967){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9967));
});})(g__9722__auto___10086))
;


var g__9722__auto___10090 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__9722__auto___10090){
return (function cljs$spec$impl$gen$string(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10091 = arguments.length;
var i__8702__auto___10092 = (0);
while(true){
if((i__8702__auto___10092 < len__8701__auto___10091)){
args__8708__auto__.push((arguments[i__8702__auto___10092]));

var G__10093 = (i__8702__auto___10092 + (1));
i__8702__auto___10092 = G__10093;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10090))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10090){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10090);
});})(g__9722__auto___10090))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__9722__auto___10090){
return (function (seq9976){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9976));
});})(g__9722__auto___10090))
;


var g__9722__auto___10094 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__9722__auto___10094){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10095 = arguments.length;
var i__8702__auto___10096 = (0);
while(true){
if((i__8702__auto___10096 < len__8701__auto___10095)){
args__8708__auto__.push((arguments[i__8702__auto___10096]));

var G__10097 = (i__8702__auto___10096 + (1));
i__8702__auto___10096 = G__10097;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10094))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10094){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10094);
});})(g__9722__auto___10094))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__9722__auto___10094){
return (function (seq9986){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9986));
});})(g__9722__auto___10094))
;


var g__9722__auto___10098 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__9722__auto___10098){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10099 = arguments.length;
var i__8702__auto___10100 = (0);
while(true){
if((i__8702__auto___10100 < len__8701__auto___10099)){
args__8708__auto__.push((arguments[i__8702__auto___10100]));

var G__10101 = (i__8702__auto___10100 + (1));
i__8702__auto___10100 = G__10101;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10098))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10098){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10098);
});})(g__9722__auto___10098))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__9722__auto___10098){
return (function (seq9989){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9989));
});})(g__9722__auto___10098))
;


var g__9722__auto___10102 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__9722__auto___10102){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10103 = arguments.length;
var i__8702__auto___10104 = (0);
while(true){
if((i__8702__auto___10104 < len__8701__auto___10103)){
args__8708__auto__.push((arguments[i__8702__auto___10104]));

var G__10105 = (i__8702__auto___10104 + (1));
i__8702__auto___10104 = G__10105;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10102))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10102){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10102);
});})(g__9722__auto___10102))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__9722__auto___10102){
return (function (seq9994){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9994));
});})(g__9722__auto___10102))
;


var g__9722__auto___10109 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__9722__auto___10109){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10110 = arguments.length;
var i__8702__auto___10111 = (0);
while(true){
if((i__8702__auto___10111 < len__8701__auto___10110)){
args__8708__auto__.push((arguments[i__8702__auto___10111]));

var G__10114 = (i__8702__auto___10111 + (1));
i__8702__auto___10111 = G__10114;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10109))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10109){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10109);
});})(g__9722__auto___10109))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__9722__auto___10109){
return (function (seq9995){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9995));
});})(g__9722__auto___10109))
;


var g__9722__auto___10116 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__9722__auto___10116){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10121 = arguments.length;
var i__8702__auto___10122 = (0);
while(true){
if((i__8702__auto___10122 < len__8701__auto___10121)){
args__8708__auto__.push((arguments[i__8702__auto___10122]));

var G__10123 = (i__8702__auto___10122 + (1));
i__8702__auto___10122 = G__10123;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});})(g__9722__auto___10116))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9722__auto___10116){
return (function (args){
return cljs.core.deref.call(null,g__9722__auto___10116);
});})(g__9722__auto___10116))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__9722__auto___10116){
return (function (seq9996){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9996));
});})(g__9722__auto___10116))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8708__auto__ = [];
var len__8701__auto___10131 = arguments.length;
var i__8702__auto___10132 = (0);
while(true){
if((i__8702__auto___10132 < len__8701__auto___10131)){
args__8708__auto__.push((arguments[i__8702__auto___10132]));

var G__10133 = (i__8702__auto___10132 + (1));
i__8702__auto___10132 = G__10133;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__10125_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__10125_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq10126){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10126));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__10135_SHARP_){
return (new Date(p1__10135_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map