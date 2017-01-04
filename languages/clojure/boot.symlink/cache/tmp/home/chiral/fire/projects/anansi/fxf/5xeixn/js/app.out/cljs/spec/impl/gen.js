// Compiled by ClojureScript 1.9.229 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__7830__auto__ = [];
var len__7823__auto___19992 = arguments.length;
var i__7824__auto___19993 = (0);
while(true){
if((i__7824__auto___19993 < len__7823__auto___19992)){
args__7830__auto__.push((arguments[i__7824__auto___19993]));

var G__19994 = (i__7824__auto___19993 + (1));
i__7824__auto___19993 = G__19994;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq19991){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19991));
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
var args__7830__auto__ = [];
var len__7823__auto___19996 = arguments.length;
var i__7824__auto___19997 = (0);
while(true){
if((i__7824__auto___19997 < len__7823__auto___19996)){
args__7830__auto__.push((arguments[i__7824__auto___19997]));

var G__19998 = (i__7824__auto___19997 + (1));
i__7824__auto___19997 = G__19998;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq19995){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19995));
});

var g_QMARK__19999 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_20000 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__19999){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__19999))
,null));
var mkg_20001 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__19999,g_20000){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__19999,g_20000))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__19999,g_20000,mkg_20001){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__19999).call(null,x);
});})(g_QMARK__19999,g_20000,mkg_20001))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__19999,g_20000,mkg_20001){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_20001).call(null,gfn);
});})(g_QMARK__19999,g_20000,mkg_20001))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__19999,g_20000,mkg_20001){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_20000).call(null,generator);
});})(g_QMARK__19999,g_20000,mkg_20001))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__14350__auto___20020 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__14350__auto___20020){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20021 = arguments.length;
var i__7824__auto___20022 = (0);
while(true){
if((i__7824__auto___20022 < len__7823__auto___20021)){
args__7830__auto__.push((arguments[i__7824__auto___20022]));

var G__20023 = (i__7824__auto___20022 + (1));
i__7824__auto___20022 = G__20023;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20020))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20020){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20020),args);
});})(g__14350__auto___20020))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__14350__auto___20020){
return (function (seq20002){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20002));
});})(g__14350__auto___20020))
;


var g__14350__auto___20024 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__14350__auto___20024){
return (function cljs$spec$impl$gen$list(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20025 = arguments.length;
var i__7824__auto___20026 = (0);
while(true){
if((i__7824__auto___20026 < len__7823__auto___20025)){
args__7830__auto__.push((arguments[i__7824__auto___20026]));

var G__20027 = (i__7824__auto___20026 + (1));
i__7824__auto___20026 = G__20027;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20024))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20024){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20024),args);
});})(g__14350__auto___20024))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__14350__auto___20024){
return (function (seq20003){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20003));
});})(g__14350__auto___20024))
;


var g__14350__auto___20028 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__14350__auto___20028){
return (function cljs$spec$impl$gen$map(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20029 = arguments.length;
var i__7824__auto___20030 = (0);
while(true){
if((i__7824__auto___20030 < len__7823__auto___20029)){
args__7830__auto__.push((arguments[i__7824__auto___20030]));

var G__20031 = (i__7824__auto___20030 + (1));
i__7824__auto___20030 = G__20031;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20028))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20028){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20028),args);
});})(g__14350__auto___20028))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__14350__auto___20028){
return (function (seq20004){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20004));
});})(g__14350__auto___20028))
;


var g__14350__auto___20032 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__14350__auto___20032){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20033 = arguments.length;
var i__7824__auto___20034 = (0);
while(true){
if((i__7824__auto___20034 < len__7823__auto___20033)){
args__7830__auto__.push((arguments[i__7824__auto___20034]));

var G__20035 = (i__7824__auto___20034 + (1));
i__7824__auto___20034 = G__20035;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20032))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20032){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20032),args);
});})(g__14350__auto___20032))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__14350__auto___20032){
return (function (seq20005){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20005));
});})(g__14350__auto___20032))
;


var g__14350__auto___20036 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__14350__auto___20036){
return (function cljs$spec$impl$gen$set(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20037 = arguments.length;
var i__7824__auto___20038 = (0);
while(true){
if((i__7824__auto___20038 < len__7823__auto___20037)){
args__7830__auto__.push((arguments[i__7824__auto___20038]));

var G__20039 = (i__7824__auto___20038 + (1));
i__7824__auto___20038 = G__20039;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20036))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20036){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20036),args);
});})(g__14350__auto___20036))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__14350__auto___20036){
return (function (seq20006){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20006));
});})(g__14350__auto___20036))
;


var g__14350__auto___20040 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__14350__auto___20040){
return (function cljs$spec$impl$gen$vector(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20041 = arguments.length;
var i__7824__auto___20042 = (0);
while(true){
if((i__7824__auto___20042 < len__7823__auto___20041)){
args__7830__auto__.push((arguments[i__7824__auto___20042]));

var G__20043 = (i__7824__auto___20042 + (1));
i__7824__auto___20042 = G__20043;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20040))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20040){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20040),args);
});})(g__14350__auto___20040))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__14350__auto___20040){
return (function (seq20007){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20007));
});})(g__14350__auto___20040))
;


var g__14350__auto___20044 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__14350__auto___20044){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20045 = arguments.length;
var i__7824__auto___20046 = (0);
while(true){
if((i__7824__auto___20046 < len__7823__auto___20045)){
args__7830__auto__.push((arguments[i__7824__auto___20046]));

var G__20047 = (i__7824__auto___20046 + (1));
i__7824__auto___20046 = G__20047;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20044))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20044){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20044),args);
});})(g__14350__auto___20044))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__14350__auto___20044){
return (function (seq20008){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20008));
});})(g__14350__auto___20044))
;


var g__14350__auto___20048 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__14350__auto___20048){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20049 = arguments.length;
var i__7824__auto___20050 = (0);
while(true){
if((i__7824__auto___20050 < len__7823__auto___20049)){
args__7830__auto__.push((arguments[i__7824__auto___20050]));

var G__20051 = (i__7824__auto___20050 + (1));
i__7824__auto___20050 = G__20051;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20048))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20048){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20048),args);
});})(g__14350__auto___20048))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__14350__auto___20048){
return (function (seq20009){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20009));
});})(g__14350__auto___20048))
;


var g__14350__auto___20052 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__14350__auto___20052){
return (function cljs$spec$impl$gen$elements(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20053 = arguments.length;
var i__7824__auto___20054 = (0);
while(true){
if((i__7824__auto___20054 < len__7823__auto___20053)){
args__7830__auto__.push((arguments[i__7824__auto___20054]));

var G__20055 = (i__7824__auto___20054 + (1));
i__7824__auto___20054 = G__20055;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20052))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20052){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20052),args);
});})(g__14350__auto___20052))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__14350__auto___20052){
return (function (seq20010){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20010));
});})(g__14350__auto___20052))
;


var g__14350__auto___20056 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__14350__auto___20056){
return (function cljs$spec$impl$gen$bind(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20057 = arguments.length;
var i__7824__auto___20058 = (0);
while(true){
if((i__7824__auto___20058 < len__7823__auto___20057)){
args__7830__auto__.push((arguments[i__7824__auto___20058]));

var G__20059 = (i__7824__auto___20058 + (1));
i__7824__auto___20058 = G__20059;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20056))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20056){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20056),args);
});})(g__14350__auto___20056))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__14350__auto___20056){
return (function (seq20011){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20011));
});})(g__14350__auto___20056))
;


var g__14350__auto___20060 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__14350__auto___20060){
return (function cljs$spec$impl$gen$choose(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20061 = arguments.length;
var i__7824__auto___20062 = (0);
while(true){
if((i__7824__auto___20062 < len__7823__auto___20061)){
args__7830__auto__.push((arguments[i__7824__auto___20062]));

var G__20063 = (i__7824__auto___20062 + (1));
i__7824__auto___20062 = G__20063;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20060))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20060){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20060),args);
});})(g__14350__auto___20060))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__14350__auto___20060){
return (function (seq20012){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20012));
});})(g__14350__auto___20060))
;


var g__14350__auto___20064 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__14350__auto___20064){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20065 = arguments.length;
var i__7824__auto___20066 = (0);
while(true){
if((i__7824__auto___20066 < len__7823__auto___20065)){
args__7830__auto__.push((arguments[i__7824__auto___20066]));

var G__20067 = (i__7824__auto___20066 + (1));
i__7824__auto___20066 = G__20067;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20064))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20064){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20064),args);
});})(g__14350__auto___20064))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__14350__auto___20064){
return (function (seq20013){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20013));
});})(g__14350__auto___20064))
;


var g__14350__auto___20068 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__14350__auto___20068){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20069 = arguments.length;
var i__7824__auto___20070 = (0);
while(true){
if((i__7824__auto___20070 < len__7823__auto___20069)){
args__7830__auto__.push((arguments[i__7824__auto___20070]));

var G__20071 = (i__7824__auto___20070 + (1));
i__7824__auto___20070 = G__20071;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20068))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20068){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20068),args);
});})(g__14350__auto___20068))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__14350__auto___20068){
return (function (seq20014){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20014));
});})(g__14350__auto___20068))
;


var g__14350__auto___20072 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__14350__auto___20072){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20073 = arguments.length;
var i__7824__auto___20074 = (0);
while(true){
if((i__7824__auto___20074 < len__7823__auto___20073)){
args__7830__auto__.push((arguments[i__7824__auto___20074]));

var G__20075 = (i__7824__auto___20074 + (1));
i__7824__auto___20074 = G__20075;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20072))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20072){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20072),args);
});})(g__14350__auto___20072))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__14350__auto___20072){
return (function (seq20015){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20015));
});})(g__14350__auto___20072))
;


var g__14350__auto___20076 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__14350__auto___20076){
return (function cljs$spec$impl$gen$sample(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20077 = arguments.length;
var i__7824__auto___20078 = (0);
while(true){
if((i__7824__auto___20078 < len__7823__auto___20077)){
args__7830__auto__.push((arguments[i__7824__auto___20078]));

var G__20079 = (i__7824__auto___20078 + (1));
i__7824__auto___20078 = G__20079;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20076))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20076){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20076),args);
});})(g__14350__auto___20076))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__14350__auto___20076){
return (function (seq20016){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20016));
});})(g__14350__auto___20076))
;


var g__14350__auto___20080 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__14350__auto___20080){
return (function cljs$spec$impl$gen$return(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20081 = arguments.length;
var i__7824__auto___20082 = (0);
while(true){
if((i__7824__auto___20082 < len__7823__auto___20081)){
args__7830__auto__.push((arguments[i__7824__auto___20082]));

var G__20083 = (i__7824__auto___20082 + (1));
i__7824__auto___20082 = G__20083;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20080))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20080){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20080),args);
});})(g__14350__auto___20080))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__14350__auto___20080){
return (function (seq20017){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20017));
});})(g__14350__auto___20080))
;


var g__14350__auto___20084 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__14350__auto___20084){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20085 = arguments.length;
var i__7824__auto___20086 = (0);
while(true){
if((i__7824__auto___20086 < len__7823__auto___20085)){
args__7830__auto__.push((arguments[i__7824__auto___20086]));

var G__20087 = (i__7824__auto___20086 + (1));
i__7824__auto___20086 = G__20087;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20084))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20084){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20084),args);
});})(g__14350__auto___20084))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__14350__auto___20084){
return (function (seq20018){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20018));
});})(g__14350__auto___20084))
;


var g__14350__auto___20088 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__14350__auto___20088){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20089 = arguments.length;
var i__7824__auto___20090 = (0);
while(true){
if((i__7824__auto___20090 < len__7823__auto___20089)){
args__7830__auto__.push((arguments[i__7824__auto___20090]));

var G__20091 = (i__7824__auto___20090 + (1));
i__7824__auto___20090 = G__20091;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14350__auto___20088))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14350__auto___20088){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14350__auto___20088),args);
});})(g__14350__auto___20088))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__14350__auto___20088){
return (function (seq20019){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20019));
});})(g__14350__auto___20088))
;

var g__14363__auto___20113 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__14363__auto___20113){
return (function cljs$spec$impl$gen$any(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20114 = arguments.length;
var i__7824__auto___20115 = (0);
while(true){
if((i__7824__auto___20115 < len__7823__auto___20114)){
args__7830__auto__.push((arguments[i__7824__auto___20115]));

var G__20116 = (i__7824__auto___20115 + (1));
i__7824__auto___20115 = G__20116;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20113))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20113){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20113);
});})(g__14363__auto___20113))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__14363__auto___20113){
return (function (seq20092){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20092));
});})(g__14363__auto___20113))
;


var g__14363__auto___20117 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__14363__auto___20117){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20118 = arguments.length;
var i__7824__auto___20119 = (0);
while(true){
if((i__7824__auto___20119 < len__7823__auto___20118)){
args__7830__auto__.push((arguments[i__7824__auto___20119]));

var G__20120 = (i__7824__auto___20119 + (1));
i__7824__auto___20119 = G__20120;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20117))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20117){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20117);
});})(g__14363__auto___20117))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__14363__auto___20117){
return (function (seq20093){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20093));
});})(g__14363__auto___20117))
;


var g__14363__auto___20121 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__14363__auto___20121){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20122 = arguments.length;
var i__7824__auto___20123 = (0);
while(true){
if((i__7824__auto___20123 < len__7823__auto___20122)){
args__7830__auto__.push((arguments[i__7824__auto___20123]));

var G__20124 = (i__7824__auto___20123 + (1));
i__7824__auto___20123 = G__20124;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20121))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20121){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20121);
});})(g__14363__auto___20121))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__14363__auto___20121){
return (function (seq20094){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20094));
});})(g__14363__auto___20121))
;


var g__14363__auto___20125 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__14363__auto___20125){
return (function cljs$spec$impl$gen$char(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20126 = arguments.length;
var i__7824__auto___20127 = (0);
while(true){
if((i__7824__auto___20127 < len__7823__auto___20126)){
args__7830__auto__.push((arguments[i__7824__auto___20127]));

var G__20128 = (i__7824__auto___20127 + (1));
i__7824__auto___20127 = G__20128;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20125))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20125){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20125);
});})(g__14363__auto___20125))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__14363__auto___20125){
return (function (seq20095){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20095));
});})(g__14363__auto___20125))
;


var g__14363__auto___20129 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__14363__auto___20129){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20130 = arguments.length;
var i__7824__auto___20131 = (0);
while(true){
if((i__7824__auto___20131 < len__7823__auto___20130)){
args__7830__auto__.push((arguments[i__7824__auto___20131]));

var G__20132 = (i__7824__auto___20131 + (1));
i__7824__auto___20131 = G__20132;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20129))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20129){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20129);
});})(g__14363__auto___20129))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__14363__auto___20129){
return (function (seq20096){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20096));
});})(g__14363__auto___20129))
;


var g__14363__auto___20133 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__14363__auto___20133){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20134 = arguments.length;
var i__7824__auto___20135 = (0);
while(true){
if((i__7824__auto___20135 < len__7823__auto___20134)){
args__7830__auto__.push((arguments[i__7824__auto___20135]));

var G__20136 = (i__7824__auto___20135 + (1));
i__7824__auto___20135 = G__20136;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20133))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20133){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20133);
});})(g__14363__auto___20133))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__14363__auto___20133){
return (function (seq20097){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20097));
});})(g__14363__auto___20133))
;


var g__14363__auto___20137 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__14363__auto___20137){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20138 = arguments.length;
var i__7824__auto___20139 = (0);
while(true){
if((i__7824__auto___20139 < len__7823__auto___20138)){
args__7830__auto__.push((arguments[i__7824__auto___20139]));

var G__20140 = (i__7824__auto___20139 + (1));
i__7824__auto___20139 = G__20140;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20137))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20137){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20137);
});})(g__14363__auto___20137))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__14363__auto___20137){
return (function (seq20098){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20098));
});})(g__14363__auto___20137))
;


var g__14363__auto___20141 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__14363__auto___20141){
return (function cljs$spec$impl$gen$double(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20142 = arguments.length;
var i__7824__auto___20143 = (0);
while(true){
if((i__7824__auto___20143 < len__7823__auto___20142)){
args__7830__auto__.push((arguments[i__7824__auto___20143]));

var G__20144 = (i__7824__auto___20143 + (1));
i__7824__auto___20143 = G__20144;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20141))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20141){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20141);
});})(g__14363__auto___20141))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__14363__auto___20141){
return (function (seq20099){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20099));
});})(g__14363__auto___20141))
;


var g__14363__auto___20145 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__14363__auto___20145){
return (function cljs$spec$impl$gen$int(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20146 = arguments.length;
var i__7824__auto___20147 = (0);
while(true){
if((i__7824__auto___20147 < len__7823__auto___20146)){
args__7830__auto__.push((arguments[i__7824__auto___20147]));

var G__20148 = (i__7824__auto___20147 + (1));
i__7824__auto___20147 = G__20148;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20145))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20145){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20145);
});})(g__14363__auto___20145))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__14363__auto___20145){
return (function (seq20100){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20100));
});})(g__14363__auto___20145))
;


var g__14363__auto___20149 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__14363__auto___20149){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20150 = arguments.length;
var i__7824__auto___20151 = (0);
while(true){
if((i__7824__auto___20151 < len__7823__auto___20150)){
args__7830__auto__.push((arguments[i__7824__auto___20151]));

var G__20152 = (i__7824__auto___20151 + (1));
i__7824__auto___20151 = G__20152;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20149))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20149){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20149);
});})(g__14363__auto___20149))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__14363__auto___20149){
return (function (seq20101){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20101));
});})(g__14363__auto___20149))
;


var g__14363__auto___20153 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__14363__auto___20153){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20154 = arguments.length;
var i__7824__auto___20155 = (0);
while(true){
if((i__7824__auto___20155 < len__7823__auto___20154)){
args__7830__auto__.push((arguments[i__7824__auto___20155]));

var G__20156 = (i__7824__auto___20155 + (1));
i__7824__auto___20155 = G__20156;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20153))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20153){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20153);
});})(g__14363__auto___20153))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__14363__auto___20153){
return (function (seq20102){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20102));
});})(g__14363__auto___20153))
;


var g__14363__auto___20157 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__14363__auto___20157){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20158 = arguments.length;
var i__7824__auto___20159 = (0);
while(true){
if((i__7824__auto___20159 < len__7823__auto___20158)){
args__7830__auto__.push((arguments[i__7824__auto___20159]));

var G__20160 = (i__7824__auto___20159 + (1));
i__7824__auto___20159 = G__20160;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20157))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20157){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20157);
});})(g__14363__auto___20157))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__14363__auto___20157){
return (function (seq20103){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20103));
});})(g__14363__auto___20157))
;


var g__14363__auto___20161 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__14363__auto___20161){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20162 = arguments.length;
var i__7824__auto___20163 = (0);
while(true){
if((i__7824__auto___20163 < len__7823__auto___20162)){
args__7830__auto__.push((arguments[i__7824__auto___20163]));

var G__20164 = (i__7824__auto___20163 + (1));
i__7824__auto___20163 = G__20164;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20161))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20161){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20161);
});})(g__14363__auto___20161))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__14363__auto___20161){
return (function (seq20104){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20104));
});})(g__14363__auto___20161))
;


var g__14363__auto___20165 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__14363__auto___20165){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20166 = arguments.length;
var i__7824__auto___20167 = (0);
while(true){
if((i__7824__auto___20167 < len__7823__auto___20166)){
args__7830__auto__.push((arguments[i__7824__auto___20167]));

var G__20168 = (i__7824__auto___20167 + (1));
i__7824__auto___20167 = G__20168;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20165))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20165){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20165);
});})(g__14363__auto___20165))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__14363__auto___20165){
return (function (seq20105){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20105));
});})(g__14363__auto___20165))
;


var g__14363__auto___20169 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__14363__auto___20169){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20170 = arguments.length;
var i__7824__auto___20171 = (0);
while(true){
if((i__7824__auto___20171 < len__7823__auto___20170)){
args__7830__auto__.push((arguments[i__7824__auto___20171]));

var G__20172 = (i__7824__auto___20171 + (1));
i__7824__auto___20171 = G__20172;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20169))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20169){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20169);
});})(g__14363__auto___20169))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__14363__auto___20169){
return (function (seq20106){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20106));
});})(g__14363__auto___20169))
;


var g__14363__auto___20173 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__14363__auto___20173){
return (function cljs$spec$impl$gen$string(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20174 = arguments.length;
var i__7824__auto___20175 = (0);
while(true){
if((i__7824__auto___20175 < len__7823__auto___20174)){
args__7830__auto__.push((arguments[i__7824__auto___20175]));

var G__20176 = (i__7824__auto___20175 + (1));
i__7824__auto___20175 = G__20176;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20173))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20173){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20173);
});})(g__14363__auto___20173))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__14363__auto___20173){
return (function (seq20107){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20107));
});})(g__14363__auto___20173))
;


var g__14363__auto___20177 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__14363__auto___20177){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20178 = arguments.length;
var i__7824__auto___20179 = (0);
while(true){
if((i__7824__auto___20179 < len__7823__auto___20178)){
args__7830__auto__.push((arguments[i__7824__auto___20179]));

var G__20180 = (i__7824__auto___20179 + (1));
i__7824__auto___20179 = G__20180;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20177))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20177){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20177);
});})(g__14363__auto___20177))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__14363__auto___20177){
return (function (seq20108){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20108));
});})(g__14363__auto___20177))
;


var g__14363__auto___20181 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__14363__auto___20181){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20182 = arguments.length;
var i__7824__auto___20183 = (0);
while(true){
if((i__7824__auto___20183 < len__7823__auto___20182)){
args__7830__auto__.push((arguments[i__7824__auto___20183]));

var G__20184 = (i__7824__auto___20183 + (1));
i__7824__auto___20183 = G__20184;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20181))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20181){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20181);
});})(g__14363__auto___20181))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__14363__auto___20181){
return (function (seq20109){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20109));
});})(g__14363__auto___20181))
;


var g__14363__auto___20185 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__14363__auto___20185){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20186 = arguments.length;
var i__7824__auto___20187 = (0);
while(true){
if((i__7824__auto___20187 < len__7823__auto___20186)){
args__7830__auto__.push((arguments[i__7824__auto___20187]));

var G__20188 = (i__7824__auto___20187 + (1));
i__7824__auto___20187 = G__20188;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20185))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20185){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20185);
});})(g__14363__auto___20185))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__14363__auto___20185){
return (function (seq20110){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20110));
});})(g__14363__auto___20185))
;


var g__14363__auto___20189 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__14363__auto___20189){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20190 = arguments.length;
var i__7824__auto___20191 = (0);
while(true){
if((i__7824__auto___20191 < len__7823__auto___20190)){
args__7830__auto__.push((arguments[i__7824__auto___20191]));

var G__20192 = (i__7824__auto___20191 + (1));
i__7824__auto___20191 = G__20192;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20189))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20189){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20189);
});})(g__14363__auto___20189))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__14363__auto___20189){
return (function (seq20111){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20111));
});})(g__14363__auto___20189))
;


var g__14363__auto___20193 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__14363__auto___20193){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20194 = arguments.length;
var i__7824__auto___20195 = (0);
while(true){
if((i__7824__auto___20195 < len__7823__auto___20194)){
args__7830__auto__.push((arguments[i__7824__auto___20195]));

var G__20196 = (i__7824__auto___20195 + (1));
i__7824__auto___20195 = G__20196;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__14363__auto___20193))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14363__auto___20193){
return (function (args){
return cljs.core.deref.call(null,g__14363__auto___20193);
});})(g__14363__auto___20193))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__14363__auto___20193){
return (function (seq20112){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20112));
});})(g__14363__auto___20193))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20199 = arguments.length;
var i__7824__auto___20200 = (0);
while(true){
if((i__7824__auto___20200 < len__7823__auto___20199)){
args__7830__auto__.push((arguments[i__7824__auto___20200]));

var G__20201 = (i__7824__auto___20200 + (1));
i__7824__auto___20200 = G__20201;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__20197_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__20197_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq20198){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20198));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__20202_SHARP_){
return (new Date(p1__20202_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
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