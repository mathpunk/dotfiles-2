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
var len__7823__auto___20088 = arguments.length;
var i__7824__auto___20089 = (0);
while(true){
if((i__7824__auto___20089 < len__7823__auto___20088)){
args__7830__auto__.push((arguments[i__7824__auto___20089]));

var G__20090 = (i__7824__auto___20089 + (1));
i__7824__auto___20089 = G__20090;
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

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq20087){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20087));
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
var len__7823__auto___20092 = arguments.length;
var i__7824__auto___20093 = (0);
while(true){
if((i__7824__auto___20093 < len__7823__auto___20092)){
args__7830__auto__.push((arguments[i__7824__auto___20093]));

var G__20094 = (i__7824__auto___20093 + (1));
i__7824__auto___20093 = G__20094;
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

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq20091){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20091));
});

var g_QMARK__20095 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_20096 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20095){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20095))
,null));
var mkg_20097 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20095,g_20096){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20095,g_20096))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__20095,g_20096,mkg_20097){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__20095).call(null,x);
});})(g_QMARK__20095,g_20096,mkg_20097))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__20095,g_20096,mkg_20097){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_20097).call(null,gfn);
});})(g_QMARK__20095,g_20096,mkg_20097))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__20095,g_20096,mkg_20097){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_20096).call(null,generator);
});})(g_QMARK__20095,g_20096,mkg_20097))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8124__auto___20116 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__8124__auto___20116){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20117 = arguments.length;
var i__7824__auto___20118 = (0);
while(true){
if((i__7824__auto___20118 < len__7823__auto___20117)){
args__7830__auto__.push((arguments[i__7824__auto___20118]));

var G__20119 = (i__7824__auto___20118 + (1));
i__7824__auto___20118 = G__20119;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20116))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20116){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20116),args);
});})(g__8124__auto___20116))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__8124__auto___20116){
return (function (seq20098){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20098));
});})(g__8124__auto___20116))
;


var g__8124__auto___20120 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__8124__auto___20120){
return (function cljs$spec$impl$gen$list(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20121 = arguments.length;
var i__7824__auto___20122 = (0);
while(true){
if((i__7824__auto___20122 < len__7823__auto___20121)){
args__7830__auto__.push((arguments[i__7824__auto___20122]));

var G__20123 = (i__7824__auto___20122 + (1));
i__7824__auto___20122 = G__20123;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20120))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20120){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20120),args);
});})(g__8124__auto___20120))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__8124__auto___20120){
return (function (seq20099){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20099));
});})(g__8124__auto___20120))
;


var g__8124__auto___20124 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__8124__auto___20124){
return (function cljs$spec$impl$gen$map(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20125 = arguments.length;
var i__7824__auto___20126 = (0);
while(true){
if((i__7824__auto___20126 < len__7823__auto___20125)){
args__7830__auto__.push((arguments[i__7824__auto___20126]));

var G__20127 = (i__7824__auto___20126 + (1));
i__7824__auto___20126 = G__20127;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20124))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20124){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20124),args);
});})(g__8124__auto___20124))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__8124__auto___20124){
return (function (seq20100){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20100));
});})(g__8124__auto___20124))
;


var g__8124__auto___20128 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__8124__auto___20128){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20129 = arguments.length;
var i__7824__auto___20130 = (0);
while(true){
if((i__7824__auto___20130 < len__7823__auto___20129)){
args__7830__auto__.push((arguments[i__7824__auto___20130]));

var G__20131 = (i__7824__auto___20130 + (1));
i__7824__auto___20130 = G__20131;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20128))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20128){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20128),args);
});})(g__8124__auto___20128))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__8124__auto___20128){
return (function (seq20101){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20101));
});})(g__8124__auto___20128))
;


var g__8124__auto___20132 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__8124__auto___20132){
return (function cljs$spec$impl$gen$set(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20133 = arguments.length;
var i__7824__auto___20134 = (0);
while(true){
if((i__7824__auto___20134 < len__7823__auto___20133)){
args__7830__auto__.push((arguments[i__7824__auto___20134]));

var G__20135 = (i__7824__auto___20134 + (1));
i__7824__auto___20134 = G__20135;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20132))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20132){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20132),args);
});})(g__8124__auto___20132))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__8124__auto___20132){
return (function (seq20102){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20102));
});})(g__8124__auto___20132))
;


var g__8124__auto___20136 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__8124__auto___20136){
return (function cljs$spec$impl$gen$vector(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20137 = arguments.length;
var i__7824__auto___20138 = (0);
while(true){
if((i__7824__auto___20138 < len__7823__auto___20137)){
args__7830__auto__.push((arguments[i__7824__auto___20138]));

var G__20139 = (i__7824__auto___20138 + (1));
i__7824__auto___20138 = G__20139;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20136))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20136){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20136),args);
});})(g__8124__auto___20136))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__8124__auto___20136){
return (function (seq20103){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20103));
});})(g__8124__auto___20136))
;


var g__8124__auto___20140 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__8124__auto___20140){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20141 = arguments.length;
var i__7824__auto___20142 = (0);
while(true){
if((i__7824__auto___20142 < len__7823__auto___20141)){
args__7830__auto__.push((arguments[i__7824__auto___20142]));

var G__20143 = (i__7824__auto___20142 + (1));
i__7824__auto___20142 = G__20143;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20140))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20140){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20140),args);
});})(g__8124__auto___20140))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__8124__auto___20140){
return (function (seq20104){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20104));
});})(g__8124__auto___20140))
;


var g__8124__auto___20144 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__8124__auto___20144){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20145 = arguments.length;
var i__7824__auto___20146 = (0);
while(true){
if((i__7824__auto___20146 < len__7823__auto___20145)){
args__7830__auto__.push((arguments[i__7824__auto___20146]));

var G__20147 = (i__7824__auto___20146 + (1));
i__7824__auto___20146 = G__20147;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20144))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20144){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20144),args);
});})(g__8124__auto___20144))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__8124__auto___20144){
return (function (seq20105){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20105));
});})(g__8124__auto___20144))
;


var g__8124__auto___20148 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__8124__auto___20148){
return (function cljs$spec$impl$gen$elements(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20149 = arguments.length;
var i__7824__auto___20150 = (0);
while(true){
if((i__7824__auto___20150 < len__7823__auto___20149)){
args__7830__auto__.push((arguments[i__7824__auto___20150]));

var G__20151 = (i__7824__auto___20150 + (1));
i__7824__auto___20150 = G__20151;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20148))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20148){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20148),args);
});})(g__8124__auto___20148))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__8124__auto___20148){
return (function (seq20106){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20106));
});})(g__8124__auto___20148))
;


var g__8124__auto___20152 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__8124__auto___20152){
return (function cljs$spec$impl$gen$bind(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20153 = arguments.length;
var i__7824__auto___20154 = (0);
while(true){
if((i__7824__auto___20154 < len__7823__auto___20153)){
args__7830__auto__.push((arguments[i__7824__auto___20154]));

var G__20155 = (i__7824__auto___20154 + (1));
i__7824__auto___20154 = G__20155;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20152))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20152){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20152),args);
});})(g__8124__auto___20152))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__8124__auto___20152){
return (function (seq20107){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20107));
});})(g__8124__auto___20152))
;


var g__8124__auto___20156 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__8124__auto___20156){
return (function cljs$spec$impl$gen$choose(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20157 = arguments.length;
var i__7824__auto___20158 = (0);
while(true){
if((i__7824__auto___20158 < len__7823__auto___20157)){
args__7830__auto__.push((arguments[i__7824__auto___20158]));

var G__20159 = (i__7824__auto___20158 + (1));
i__7824__auto___20158 = G__20159;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20156))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20156){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20156),args);
});})(g__8124__auto___20156))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__8124__auto___20156){
return (function (seq20108){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20108));
});})(g__8124__auto___20156))
;


var g__8124__auto___20160 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__8124__auto___20160){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20161 = arguments.length;
var i__7824__auto___20162 = (0);
while(true){
if((i__7824__auto___20162 < len__7823__auto___20161)){
args__7830__auto__.push((arguments[i__7824__auto___20162]));

var G__20163 = (i__7824__auto___20162 + (1));
i__7824__auto___20162 = G__20163;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20160))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20160){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20160),args);
});})(g__8124__auto___20160))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__8124__auto___20160){
return (function (seq20109){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20109));
});})(g__8124__auto___20160))
;


var g__8124__auto___20164 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__8124__auto___20164){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20165 = arguments.length;
var i__7824__auto___20166 = (0);
while(true){
if((i__7824__auto___20166 < len__7823__auto___20165)){
args__7830__auto__.push((arguments[i__7824__auto___20166]));

var G__20167 = (i__7824__auto___20166 + (1));
i__7824__auto___20166 = G__20167;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20164))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20164){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20164),args);
});})(g__8124__auto___20164))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__8124__auto___20164){
return (function (seq20110){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20110));
});})(g__8124__auto___20164))
;


var g__8124__auto___20168 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__8124__auto___20168){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20169 = arguments.length;
var i__7824__auto___20170 = (0);
while(true){
if((i__7824__auto___20170 < len__7823__auto___20169)){
args__7830__auto__.push((arguments[i__7824__auto___20170]));

var G__20171 = (i__7824__auto___20170 + (1));
i__7824__auto___20170 = G__20171;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20168))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20168){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20168),args);
});})(g__8124__auto___20168))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__8124__auto___20168){
return (function (seq20111){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20111));
});})(g__8124__auto___20168))
;


var g__8124__auto___20172 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__8124__auto___20172){
return (function cljs$spec$impl$gen$sample(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20173 = arguments.length;
var i__7824__auto___20174 = (0);
while(true){
if((i__7824__auto___20174 < len__7823__auto___20173)){
args__7830__auto__.push((arguments[i__7824__auto___20174]));

var G__20175 = (i__7824__auto___20174 + (1));
i__7824__auto___20174 = G__20175;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20172))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20172){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20172),args);
});})(g__8124__auto___20172))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__8124__auto___20172){
return (function (seq20112){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20112));
});})(g__8124__auto___20172))
;


var g__8124__auto___20176 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__8124__auto___20176){
return (function cljs$spec$impl$gen$return(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20177 = arguments.length;
var i__7824__auto___20178 = (0);
while(true){
if((i__7824__auto___20178 < len__7823__auto___20177)){
args__7830__auto__.push((arguments[i__7824__auto___20178]));

var G__20179 = (i__7824__auto___20178 + (1));
i__7824__auto___20178 = G__20179;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20176))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20176){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20176),args);
});})(g__8124__auto___20176))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__8124__auto___20176){
return (function (seq20113){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20113));
});})(g__8124__auto___20176))
;


var g__8124__auto___20180 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__8124__auto___20180){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20181 = arguments.length;
var i__7824__auto___20182 = (0);
while(true){
if((i__7824__auto___20182 < len__7823__auto___20181)){
args__7830__auto__.push((arguments[i__7824__auto___20182]));

var G__20183 = (i__7824__auto___20182 + (1));
i__7824__auto___20182 = G__20183;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20180))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20180){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20180),args);
});})(g__8124__auto___20180))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8124__auto___20180){
return (function (seq20114){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20114));
});})(g__8124__auto___20180))
;


var g__8124__auto___20184 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__8124__auto___20184){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20185 = arguments.length;
var i__7824__auto___20186 = (0);
while(true){
if((i__7824__auto___20186 < len__7823__auto___20185)){
args__7830__auto__.push((arguments[i__7824__auto___20186]));

var G__20187 = (i__7824__auto___20186 + (1));
i__7824__auto___20186 = G__20187;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8124__auto___20184))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8124__auto___20184){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8124__auto___20184),args);
});})(g__8124__auto___20184))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__8124__auto___20184){
return (function (seq20115){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20115));
});})(g__8124__auto___20184))
;

var g__8137__auto___20209 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__8137__auto___20209){
return (function cljs$spec$impl$gen$any(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20210 = arguments.length;
var i__7824__auto___20211 = (0);
while(true){
if((i__7824__auto___20211 < len__7823__auto___20210)){
args__7830__auto__.push((arguments[i__7824__auto___20211]));

var G__20212 = (i__7824__auto___20211 + (1));
i__7824__auto___20211 = G__20212;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20209))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20209){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20209);
});})(g__8137__auto___20209))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__8137__auto___20209){
return (function (seq20188){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20188));
});})(g__8137__auto___20209))
;


var g__8137__auto___20213 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__8137__auto___20213){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20214 = arguments.length;
var i__7824__auto___20215 = (0);
while(true){
if((i__7824__auto___20215 < len__7823__auto___20214)){
args__7830__auto__.push((arguments[i__7824__auto___20215]));

var G__20216 = (i__7824__auto___20215 + (1));
i__7824__auto___20215 = G__20216;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20213))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20213){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20213);
});})(g__8137__auto___20213))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__8137__auto___20213){
return (function (seq20189){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20189));
});})(g__8137__auto___20213))
;


var g__8137__auto___20217 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__8137__auto___20217){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20218 = arguments.length;
var i__7824__auto___20219 = (0);
while(true){
if((i__7824__auto___20219 < len__7823__auto___20218)){
args__7830__auto__.push((arguments[i__7824__auto___20219]));

var G__20220 = (i__7824__auto___20219 + (1));
i__7824__auto___20219 = G__20220;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20217))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20217){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20217);
});})(g__8137__auto___20217))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__8137__auto___20217){
return (function (seq20190){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20190));
});})(g__8137__auto___20217))
;


var g__8137__auto___20221 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__8137__auto___20221){
return (function cljs$spec$impl$gen$char(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20222 = arguments.length;
var i__7824__auto___20223 = (0);
while(true){
if((i__7824__auto___20223 < len__7823__auto___20222)){
args__7830__auto__.push((arguments[i__7824__auto___20223]));

var G__20224 = (i__7824__auto___20223 + (1));
i__7824__auto___20223 = G__20224;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20221))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20221){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20221);
});})(g__8137__auto___20221))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__8137__auto___20221){
return (function (seq20191){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20191));
});})(g__8137__auto___20221))
;


var g__8137__auto___20225 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__8137__auto___20225){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20226 = arguments.length;
var i__7824__auto___20227 = (0);
while(true){
if((i__7824__auto___20227 < len__7823__auto___20226)){
args__7830__auto__.push((arguments[i__7824__auto___20227]));

var G__20228 = (i__7824__auto___20227 + (1));
i__7824__auto___20227 = G__20228;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20225))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20225){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20225);
});})(g__8137__auto___20225))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__8137__auto___20225){
return (function (seq20192){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20192));
});})(g__8137__auto___20225))
;


var g__8137__auto___20229 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__8137__auto___20229){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20230 = arguments.length;
var i__7824__auto___20231 = (0);
while(true){
if((i__7824__auto___20231 < len__7823__auto___20230)){
args__7830__auto__.push((arguments[i__7824__auto___20231]));

var G__20232 = (i__7824__auto___20231 + (1));
i__7824__auto___20231 = G__20232;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20229))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20229){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20229);
});})(g__8137__auto___20229))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__8137__auto___20229){
return (function (seq20193){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20193));
});})(g__8137__auto___20229))
;


var g__8137__auto___20233 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__8137__auto___20233){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20234 = arguments.length;
var i__7824__auto___20235 = (0);
while(true){
if((i__7824__auto___20235 < len__7823__auto___20234)){
args__7830__auto__.push((arguments[i__7824__auto___20235]));

var G__20236 = (i__7824__auto___20235 + (1));
i__7824__auto___20235 = G__20236;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20233))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20233){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20233);
});})(g__8137__auto___20233))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__8137__auto___20233){
return (function (seq20194){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20194));
});})(g__8137__auto___20233))
;


var g__8137__auto___20237 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__8137__auto___20237){
return (function cljs$spec$impl$gen$double(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20238 = arguments.length;
var i__7824__auto___20239 = (0);
while(true){
if((i__7824__auto___20239 < len__7823__auto___20238)){
args__7830__auto__.push((arguments[i__7824__auto___20239]));

var G__20240 = (i__7824__auto___20239 + (1));
i__7824__auto___20239 = G__20240;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20237))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20237){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20237);
});})(g__8137__auto___20237))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__8137__auto___20237){
return (function (seq20195){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20195));
});})(g__8137__auto___20237))
;


var g__8137__auto___20241 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__8137__auto___20241){
return (function cljs$spec$impl$gen$int(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20242 = arguments.length;
var i__7824__auto___20243 = (0);
while(true){
if((i__7824__auto___20243 < len__7823__auto___20242)){
args__7830__auto__.push((arguments[i__7824__auto___20243]));

var G__20244 = (i__7824__auto___20243 + (1));
i__7824__auto___20243 = G__20244;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20241))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20241){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20241);
});})(g__8137__auto___20241))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__8137__auto___20241){
return (function (seq20196){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20196));
});})(g__8137__auto___20241))
;


var g__8137__auto___20245 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__8137__auto___20245){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20246 = arguments.length;
var i__7824__auto___20247 = (0);
while(true){
if((i__7824__auto___20247 < len__7823__auto___20246)){
args__7830__auto__.push((arguments[i__7824__auto___20247]));

var G__20248 = (i__7824__auto___20247 + (1));
i__7824__auto___20247 = G__20248;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20245))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20245){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20245);
});})(g__8137__auto___20245))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__8137__auto___20245){
return (function (seq20197){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20197));
});})(g__8137__auto___20245))
;


var g__8137__auto___20249 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__8137__auto___20249){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20250 = arguments.length;
var i__7824__auto___20251 = (0);
while(true){
if((i__7824__auto___20251 < len__7823__auto___20250)){
args__7830__auto__.push((arguments[i__7824__auto___20251]));

var G__20252 = (i__7824__auto___20251 + (1));
i__7824__auto___20251 = G__20252;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20249))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20249){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20249);
});})(g__8137__auto___20249))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__8137__auto___20249){
return (function (seq20198){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20198));
});})(g__8137__auto___20249))
;


var g__8137__auto___20253 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__8137__auto___20253){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20254 = arguments.length;
var i__7824__auto___20255 = (0);
while(true){
if((i__7824__auto___20255 < len__7823__auto___20254)){
args__7830__auto__.push((arguments[i__7824__auto___20255]));

var G__20256 = (i__7824__auto___20255 + (1));
i__7824__auto___20255 = G__20256;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20253))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20253){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20253);
});})(g__8137__auto___20253))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__8137__auto___20253){
return (function (seq20199){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20199));
});})(g__8137__auto___20253))
;


var g__8137__auto___20257 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__8137__auto___20257){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20258 = arguments.length;
var i__7824__auto___20259 = (0);
while(true){
if((i__7824__auto___20259 < len__7823__auto___20258)){
args__7830__auto__.push((arguments[i__7824__auto___20259]));

var G__20260 = (i__7824__auto___20259 + (1));
i__7824__auto___20259 = G__20260;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20257))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20257){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20257);
});})(g__8137__auto___20257))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__8137__auto___20257){
return (function (seq20200){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20200));
});})(g__8137__auto___20257))
;


var g__8137__auto___20261 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__8137__auto___20261){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20262 = arguments.length;
var i__7824__auto___20263 = (0);
while(true){
if((i__7824__auto___20263 < len__7823__auto___20262)){
args__7830__auto__.push((arguments[i__7824__auto___20263]));

var G__20264 = (i__7824__auto___20263 + (1));
i__7824__auto___20263 = G__20264;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20261))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20261){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20261);
});})(g__8137__auto___20261))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__8137__auto___20261){
return (function (seq20201){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20201));
});})(g__8137__auto___20261))
;


var g__8137__auto___20265 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__8137__auto___20265){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20266 = arguments.length;
var i__7824__auto___20267 = (0);
while(true){
if((i__7824__auto___20267 < len__7823__auto___20266)){
args__7830__auto__.push((arguments[i__7824__auto___20267]));

var G__20268 = (i__7824__auto___20267 + (1));
i__7824__auto___20267 = G__20268;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20265))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20265){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20265);
});})(g__8137__auto___20265))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__8137__auto___20265){
return (function (seq20202){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20202));
});})(g__8137__auto___20265))
;


var g__8137__auto___20269 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__8137__auto___20269){
return (function cljs$spec$impl$gen$string(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20270 = arguments.length;
var i__7824__auto___20271 = (0);
while(true){
if((i__7824__auto___20271 < len__7823__auto___20270)){
args__7830__auto__.push((arguments[i__7824__auto___20271]));

var G__20272 = (i__7824__auto___20271 + (1));
i__7824__auto___20271 = G__20272;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20269))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20269){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20269);
});})(g__8137__auto___20269))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__8137__auto___20269){
return (function (seq20203){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20203));
});})(g__8137__auto___20269))
;


var g__8137__auto___20273 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__8137__auto___20273){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20274 = arguments.length;
var i__7824__auto___20275 = (0);
while(true){
if((i__7824__auto___20275 < len__7823__auto___20274)){
args__7830__auto__.push((arguments[i__7824__auto___20275]));

var G__20276 = (i__7824__auto___20275 + (1));
i__7824__auto___20275 = G__20276;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20273))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20273){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20273);
});})(g__8137__auto___20273))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__8137__auto___20273){
return (function (seq20204){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20204));
});})(g__8137__auto___20273))
;


var g__8137__auto___20277 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__8137__auto___20277){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20278 = arguments.length;
var i__7824__auto___20279 = (0);
while(true){
if((i__7824__auto___20279 < len__7823__auto___20278)){
args__7830__auto__.push((arguments[i__7824__auto___20279]));

var G__20280 = (i__7824__auto___20279 + (1));
i__7824__auto___20279 = G__20280;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20277))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20277){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20277);
});})(g__8137__auto___20277))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__8137__auto___20277){
return (function (seq20205){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20205));
});})(g__8137__auto___20277))
;


var g__8137__auto___20281 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__8137__auto___20281){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20282 = arguments.length;
var i__7824__auto___20283 = (0);
while(true){
if((i__7824__auto___20283 < len__7823__auto___20282)){
args__7830__auto__.push((arguments[i__7824__auto___20283]));

var G__20284 = (i__7824__auto___20283 + (1));
i__7824__auto___20283 = G__20284;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20281))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20281){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20281);
});})(g__8137__auto___20281))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__8137__auto___20281){
return (function (seq20206){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20206));
});})(g__8137__auto___20281))
;


var g__8137__auto___20285 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__8137__auto___20285){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20286 = arguments.length;
var i__7824__auto___20287 = (0);
while(true){
if((i__7824__auto___20287 < len__7823__auto___20286)){
args__7830__auto__.push((arguments[i__7824__auto___20287]));

var G__20288 = (i__7824__auto___20287 + (1));
i__7824__auto___20287 = G__20288;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20285))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20285){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20285);
});})(g__8137__auto___20285))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__8137__auto___20285){
return (function (seq20207){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20207));
});})(g__8137__auto___20285))
;


var g__8137__auto___20289 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__8137__auto___20289){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20290 = arguments.length;
var i__7824__auto___20291 = (0);
while(true){
if((i__7824__auto___20291 < len__7823__auto___20290)){
args__7830__auto__.push((arguments[i__7824__auto___20291]));

var G__20292 = (i__7824__auto___20291 + (1));
i__7824__auto___20291 = G__20292;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});})(g__8137__auto___20289))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8137__auto___20289){
return (function (args){
return cljs.core.deref.call(null,g__8137__auto___20289);
});})(g__8137__auto___20289))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__8137__auto___20289){
return (function (seq20208){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20208));
});})(g__8137__auto___20289))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__7830__auto__ = [];
var len__7823__auto___20295 = arguments.length;
var i__7824__auto___20296 = (0);
while(true){
if((i__7824__auto___20296 < len__7823__auto___20295)){
args__7830__auto__.push((arguments[i__7824__auto___20296]));

var G__20297 = (i__7824__auto___20296 + (1));
i__7824__auto___20296 = G__20297;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__20293_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__20293_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq20294){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20294));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__20298_SHARP_){
return (new Date(p1__20298_SHARP_));
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