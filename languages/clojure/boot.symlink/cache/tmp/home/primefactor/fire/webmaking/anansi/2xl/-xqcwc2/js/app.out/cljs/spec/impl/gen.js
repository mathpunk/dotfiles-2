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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7353__auto__,writer__7354__auto__,opt__7355__auto__){
return cljs.core._write.call(null,writer__7354__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__7829__auto__ = [];
var len__7822__auto___8152 = arguments.length;
var i__7823__auto___8153 = (0);
while(true){
if((i__7823__auto___8153 < len__7822__auto___8152)){
args__7829__auto__.push((arguments[i__7823__auto___8153]));

var G__8154 = (i__7823__auto___8153 + (1));
i__7823__auto___8153 = G__8154;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq8151){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8151));
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
var args__7829__auto__ = [];
var len__7822__auto___8156 = arguments.length;
var i__7823__auto___8157 = (0);
while(true){
if((i__7823__auto___8157 < len__7822__auto___8156)){
args__7829__auto__.push((arguments[i__7823__auto___8157]));

var G__8158 = (i__7823__auto___8157 + (1));
i__7823__auto___8157 = G__8158;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq8155){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8155));
});

var g_QMARK__8159 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_8160 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__8159){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__8159))
,null));
var mkg_8161 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__8159,g_8160){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__8159,g_8160))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__8159,g_8160,mkg_8161){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__8159).call(null,x);
});})(g_QMARK__8159,g_8160,mkg_8161))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__8159,g_8160,mkg_8161){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_8161).call(null,gfn);
});})(g_QMARK__8159,g_8160,mkg_8161))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__8159,g_8160,mkg_8161){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_8160).call(null,generator);
});})(g_QMARK__8159,g_8160,mkg_8161))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8123__auto___8180 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__8123__auto___8180){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8181 = arguments.length;
var i__7823__auto___8182 = (0);
while(true){
if((i__7823__auto___8182 < len__7822__auto___8181)){
args__7829__auto__.push((arguments[i__7823__auto___8182]));

var G__8183 = (i__7823__auto___8182 + (1));
i__7823__auto___8182 = G__8183;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8180))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8180){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8180),args);
});})(g__8123__auto___8180))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__8123__auto___8180){
return (function (seq8162){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8162));
});})(g__8123__auto___8180))
;


var g__8123__auto___8184 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__8123__auto___8184){
return (function cljs$spec$impl$gen$list(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8185 = arguments.length;
var i__7823__auto___8186 = (0);
while(true){
if((i__7823__auto___8186 < len__7822__auto___8185)){
args__7829__auto__.push((arguments[i__7823__auto___8186]));

var G__8187 = (i__7823__auto___8186 + (1));
i__7823__auto___8186 = G__8187;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8184))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8184){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8184),args);
});})(g__8123__auto___8184))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__8123__auto___8184){
return (function (seq8163){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8163));
});})(g__8123__auto___8184))
;


var g__8123__auto___8188 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__8123__auto___8188){
return (function cljs$spec$impl$gen$map(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8189 = arguments.length;
var i__7823__auto___8190 = (0);
while(true){
if((i__7823__auto___8190 < len__7822__auto___8189)){
args__7829__auto__.push((arguments[i__7823__auto___8190]));

var G__8191 = (i__7823__auto___8190 + (1));
i__7823__auto___8190 = G__8191;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8188))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8188){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8188),args);
});})(g__8123__auto___8188))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__8123__auto___8188){
return (function (seq8164){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8164));
});})(g__8123__auto___8188))
;


var g__8123__auto___8192 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__8123__auto___8192){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8193 = arguments.length;
var i__7823__auto___8194 = (0);
while(true){
if((i__7823__auto___8194 < len__7822__auto___8193)){
args__7829__auto__.push((arguments[i__7823__auto___8194]));

var G__8195 = (i__7823__auto___8194 + (1));
i__7823__auto___8194 = G__8195;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8192))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8192){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8192),args);
});})(g__8123__auto___8192))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__8123__auto___8192){
return (function (seq8165){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8165));
});})(g__8123__auto___8192))
;


var g__8123__auto___8196 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__8123__auto___8196){
return (function cljs$spec$impl$gen$set(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8197 = arguments.length;
var i__7823__auto___8198 = (0);
while(true){
if((i__7823__auto___8198 < len__7822__auto___8197)){
args__7829__auto__.push((arguments[i__7823__auto___8198]));

var G__8199 = (i__7823__auto___8198 + (1));
i__7823__auto___8198 = G__8199;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8196))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8196){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8196),args);
});})(g__8123__auto___8196))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__8123__auto___8196){
return (function (seq8166){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8166));
});})(g__8123__auto___8196))
;


var g__8123__auto___8200 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__8123__auto___8200){
return (function cljs$spec$impl$gen$vector(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8201 = arguments.length;
var i__7823__auto___8202 = (0);
while(true){
if((i__7823__auto___8202 < len__7822__auto___8201)){
args__7829__auto__.push((arguments[i__7823__auto___8202]));

var G__8203 = (i__7823__auto___8202 + (1));
i__7823__auto___8202 = G__8203;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8200))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8200){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8200),args);
});})(g__8123__auto___8200))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__8123__auto___8200){
return (function (seq8167){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8167));
});})(g__8123__auto___8200))
;


var g__8123__auto___8204 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__8123__auto___8204){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8205 = arguments.length;
var i__7823__auto___8206 = (0);
while(true){
if((i__7823__auto___8206 < len__7822__auto___8205)){
args__7829__auto__.push((arguments[i__7823__auto___8206]));

var G__8207 = (i__7823__auto___8206 + (1));
i__7823__auto___8206 = G__8207;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8204))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8204){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8204),args);
});})(g__8123__auto___8204))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__8123__auto___8204){
return (function (seq8168){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8168));
});})(g__8123__auto___8204))
;


var g__8123__auto___8208 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__8123__auto___8208){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8209 = arguments.length;
var i__7823__auto___8210 = (0);
while(true){
if((i__7823__auto___8210 < len__7822__auto___8209)){
args__7829__auto__.push((arguments[i__7823__auto___8210]));

var G__8211 = (i__7823__auto___8210 + (1));
i__7823__auto___8210 = G__8211;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8208))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8208){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8208),args);
});})(g__8123__auto___8208))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__8123__auto___8208){
return (function (seq8169){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8169));
});})(g__8123__auto___8208))
;


var g__8123__auto___8212 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__8123__auto___8212){
return (function cljs$spec$impl$gen$elements(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8213 = arguments.length;
var i__7823__auto___8214 = (0);
while(true){
if((i__7823__auto___8214 < len__7822__auto___8213)){
args__7829__auto__.push((arguments[i__7823__auto___8214]));

var G__8215 = (i__7823__auto___8214 + (1));
i__7823__auto___8214 = G__8215;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8212))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8212){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8212),args);
});})(g__8123__auto___8212))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__8123__auto___8212){
return (function (seq8170){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8170));
});})(g__8123__auto___8212))
;


var g__8123__auto___8216 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__8123__auto___8216){
return (function cljs$spec$impl$gen$bind(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8217 = arguments.length;
var i__7823__auto___8218 = (0);
while(true){
if((i__7823__auto___8218 < len__7822__auto___8217)){
args__7829__auto__.push((arguments[i__7823__auto___8218]));

var G__8219 = (i__7823__auto___8218 + (1));
i__7823__auto___8218 = G__8219;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8216))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8216){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8216),args);
});})(g__8123__auto___8216))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__8123__auto___8216){
return (function (seq8171){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8171));
});})(g__8123__auto___8216))
;


var g__8123__auto___8220 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__8123__auto___8220){
return (function cljs$spec$impl$gen$choose(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8221 = arguments.length;
var i__7823__auto___8222 = (0);
while(true){
if((i__7823__auto___8222 < len__7822__auto___8221)){
args__7829__auto__.push((arguments[i__7823__auto___8222]));

var G__8223 = (i__7823__auto___8222 + (1));
i__7823__auto___8222 = G__8223;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8220))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8220){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8220),args);
});})(g__8123__auto___8220))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__8123__auto___8220){
return (function (seq8172){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8172));
});})(g__8123__auto___8220))
;


var g__8123__auto___8224 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__8123__auto___8224){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8225 = arguments.length;
var i__7823__auto___8226 = (0);
while(true){
if((i__7823__auto___8226 < len__7822__auto___8225)){
args__7829__auto__.push((arguments[i__7823__auto___8226]));

var G__8227 = (i__7823__auto___8226 + (1));
i__7823__auto___8226 = G__8227;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8224))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8224){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8224),args);
});})(g__8123__auto___8224))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__8123__auto___8224){
return (function (seq8173){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8173));
});})(g__8123__auto___8224))
;


var g__8123__auto___8228 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__8123__auto___8228){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8229 = arguments.length;
var i__7823__auto___8230 = (0);
while(true){
if((i__7823__auto___8230 < len__7822__auto___8229)){
args__7829__auto__.push((arguments[i__7823__auto___8230]));

var G__8231 = (i__7823__auto___8230 + (1));
i__7823__auto___8230 = G__8231;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8228))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8228){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8228),args);
});})(g__8123__auto___8228))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__8123__auto___8228){
return (function (seq8174){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8174));
});})(g__8123__auto___8228))
;


var g__8123__auto___8232 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__8123__auto___8232){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8233 = arguments.length;
var i__7823__auto___8234 = (0);
while(true){
if((i__7823__auto___8234 < len__7822__auto___8233)){
args__7829__auto__.push((arguments[i__7823__auto___8234]));

var G__8235 = (i__7823__auto___8234 + (1));
i__7823__auto___8234 = G__8235;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8232))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8232){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8232),args);
});})(g__8123__auto___8232))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__8123__auto___8232){
return (function (seq8175){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8175));
});})(g__8123__auto___8232))
;


var g__8123__auto___8236 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__8123__auto___8236){
return (function cljs$spec$impl$gen$sample(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8237 = arguments.length;
var i__7823__auto___8238 = (0);
while(true){
if((i__7823__auto___8238 < len__7822__auto___8237)){
args__7829__auto__.push((arguments[i__7823__auto___8238]));

var G__8239 = (i__7823__auto___8238 + (1));
i__7823__auto___8238 = G__8239;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8236))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8236){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8236),args);
});})(g__8123__auto___8236))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__8123__auto___8236){
return (function (seq8176){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8176));
});})(g__8123__auto___8236))
;


var g__8123__auto___8240 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__8123__auto___8240){
return (function cljs$spec$impl$gen$return(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8241 = arguments.length;
var i__7823__auto___8242 = (0);
while(true){
if((i__7823__auto___8242 < len__7822__auto___8241)){
args__7829__auto__.push((arguments[i__7823__auto___8242]));

var G__8243 = (i__7823__auto___8242 + (1));
i__7823__auto___8242 = G__8243;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8240))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8240){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8240),args);
});})(g__8123__auto___8240))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__8123__auto___8240){
return (function (seq8177){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8177));
});})(g__8123__auto___8240))
;


var g__8123__auto___8244 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__8123__auto___8244){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8245 = arguments.length;
var i__7823__auto___8246 = (0);
while(true){
if((i__7823__auto___8246 < len__7822__auto___8245)){
args__7829__auto__.push((arguments[i__7823__auto___8246]));

var G__8247 = (i__7823__auto___8246 + (1));
i__7823__auto___8246 = G__8247;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8244))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8244){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8244),args);
});})(g__8123__auto___8244))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8123__auto___8244){
return (function (seq8178){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8178));
});})(g__8123__auto___8244))
;


var g__8123__auto___8248 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__8123__auto___8248){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8249 = arguments.length;
var i__7823__auto___8250 = (0);
while(true){
if((i__7823__auto___8250 < len__7822__auto___8249)){
args__7829__auto__.push((arguments[i__7823__auto___8250]));

var G__8251 = (i__7823__auto___8250 + (1));
i__7823__auto___8250 = G__8251;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8123__auto___8248))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8123__auto___8248){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8123__auto___8248),args);
});})(g__8123__auto___8248))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__8123__auto___8248){
return (function (seq8179){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8179));
});})(g__8123__auto___8248))
;

var g__8136__auto___8273 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__8136__auto___8273){
return (function cljs$spec$impl$gen$any(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8274 = arguments.length;
var i__7823__auto___8275 = (0);
while(true){
if((i__7823__auto___8275 < len__7822__auto___8274)){
args__7829__auto__.push((arguments[i__7823__auto___8275]));

var G__8276 = (i__7823__auto___8275 + (1));
i__7823__auto___8275 = G__8276;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8273))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8273){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8273);
});})(g__8136__auto___8273))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__8136__auto___8273){
return (function (seq8252){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8252));
});})(g__8136__auto___8273))
;


var g__8136__auto___8277 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__8136__auto___8277){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8278 = arguments.length;
var i__7823__auto___8279 = (0);
while(true){
if((i__7823__auto___8279 < len__7822__auto___8278)){
args__7829__auto__.push((arguments[i__7823__auto___8279]));

var G__8280 = (i__7823__auto___8279 + (1));
i__7823__auto___8279 = G__8280;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8277))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8277){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8277);
});})(g__8136__auto___8277))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__8136__auto___8277){
return (function (seq8253){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8253));
});})(g__8136__auto___8277))
;


var g__8136__auto___8281 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__8136__auto___8281){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8282 = arguments.length;
var i__7823__auto___8283 = (0);
while(true){
if((i__7823__auto___8283 < len__7822__auto___8282)){
args__7829__auto__.push((arguments[i__7823__auto___8283]));

var G__8284 = (i__7823__auto___8283 + (1));
i__7823__auto___8283 = G__8284;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8281))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8281){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8281);
});})(g__8136__auto___8281))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__8136__auto___8281){
return (function (seq8254){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8254));
});})(g__8136__auto___8281))
;


var g__8136__auto___8285 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__8136__auto___8285){
return (function cljs$spec$impl$gen$char(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8286 = arguments.length;
var i__7823__auto___8287 = (0);
while(true){
if((i__7823__auto___8287 < len__7822__auto___8286)){
args__7829__auto__.push((arguments[i__7823__auto___8287]));

var G__8288 = (i__7823__auto___8287 + (1));
i__7823__auto___8287 = G__8288;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8285))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8285){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8285);
});})(g__8136__auto___8285))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__8136__auto___8285){
return (function (seq8255){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8255));
});})(g__8136__auto___8285))
;


var g__8136__auto___8289 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__8136__auto___8289){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8290 = arguments.length;
var i__7823__auto___8291 = (0);
while(true){
if((i__7823__auto___8291 < len__7822__auto___8290)){
args__7829__auto__.push((arguments[i__7823__auto___8291]));

var G__8292 = (i__7823__auto___8291 + (1));
i__7823__auto___8291 = G__8292;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8289))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8289){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8289);
});})(g__8136__auto___8289))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__8136__auto___8289){
return (function (seq8256){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8256));
});})(g__8136__auto___8289))
;


var g__8136__auto___8293 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__8136__auto___8293){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8294 = arguments.length;
var i__7823__auto___8295 = (0);
while(true){
if((i__7823__auto___8295 < len__7822__auto___8294)){
args__7829__auto__.push((arguments[i__7823__auto___8295]));

var G__8296 = (i__7823__auto___8295 + (1));
i__7823__auto___8295 = G__8296;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8293))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8293){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8293);
});})(g__8136__auto___8293))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__8136__auto___8293){
return (function (seq8257){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8257));
});})(g__8136__auto___8293))
;


var g__8136__auto___8297 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__8136__auto___8297){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8298 = arguments.length;
var i__7823__auto___8299 = (0);
while(true){
if((i__7823__auto___8299 < len__7822__auto___8298)){
args__7829__auto__.push((arguments[i__7823__auto___8299]));

var G__8300 = (i__7823__auto___8299 + (1));
i__7823__auto___8299 = G__8300;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8297))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8297){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8297);
});})(g__8136__auto___8297))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__8136__auto___8297){
return (function (seq8258){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8258));
});})(g__8136__auto___8297))
;


var g__8136__auto___8301 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__8136__auto___8301){
return (function cljs$spec$impl$gen$double(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8302 = arguments.length;
var i__7823__auto___8303 = (0);
while(true){
if((i__7823__auto___8303 < len__7822__auto___8302)){
args__7829__auto__.push((arguments[i__7823__auto___8303]));

var G__8304 = (i__7823__auto___8303 + (1));
i__7823__auto___8303 = G__8304;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8301))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8301){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8301);
});})(g__8136__auto___8301))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__8136__auto___8301){
return (function (seq8259){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8259));
});})(g__8136__auto___8301))
;


var g__8136__auto___8305 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__8136__auto___8305){
return (function cljs$spec$impl$gen$int(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8306 = arguments.length;
var i__7823__auto___8307 = (0);
while(true){
if((i__7823__auto___8307 < len__7822__auto___8306)){
args__7829__auto__.push((arguments[i__7823__auto___8307]));

var G__8308 = (i__7823__auto___8307 + (1));
i__7823__auto___8307 = G__8308;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8305))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8305){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8305);
});})(g__8136__auto___8305))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__8136__auto___8305){
return (function (seq8260){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8260));
});})(g__8136__auto___8305))
;


var g__8136__auto___8309 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__8136__auto___8309){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8310 = arguments.length;
var i__7823__auto___8311 = (0);
while(true){
if((i__7823__auto___8311 < len__7822__auto___8310)){
args__7829__auto__.push((arguments[i__7823__auto___8311]));

var G__8312 = (i__7823__auto___8311 + (1));
i__7823__auto___8311 = G__8312;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8309))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8309){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8309);
});})(g__8136__auto___8309))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__8136__auto___8309){
return (function (seq8261){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8261));
});})(g__8136__auto___8309))
;


var g__8136__auto___8313 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__8136__auto___8313){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8314 = arguments.length;
var i__7823__auto___8315 = (0);
while(true){
if((i__7823__auto___8315 < len__7822__auto___8314)){
args__7829__auto__.push((arguments[i__7823__auto___8315]));

var G__8316 = (i__7823__auto___8315 + (1));
i__7823__auto___8315 = G__8316;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8313))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8313){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8313);
});})(g__8136__auto___8313))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__8136__auto___8313){
return (function (seq8262){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8262));
});})(g__8136__auto___8313))
;


var g__8136__auto___8317 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__8136__auto___8317){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8318 = arguments.length;
var i__7823__auto___8319 = (0);
while(true){
if((i__7823__auto___8319 < len__7822__auto___8318)){
args__7829__auto__.push((arguments[i__7823__auto___8319]));

var G__8320 = (i__7823__auto___8319 + (1));
i__7823__auto___8319 = G__8320;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8317))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8317){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8317);
});})(g__8136__auto___8317))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__8136__auto___8317){
return (function (seq8263){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8263));
});})(g__8136__auto___8317))
;


var g__8136__auto___8321 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__8136__auto___8321){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8322 = arguments.length;
var i__7823__auto___8323 = (0);
while(true){
if((i__7823__auto___8323 < len__7822__auto___8322)){
args__7829__auto__.push((arguments[i__7823__auto___8323]));

var G__8324 = (i__7823__auto___8323 + (1));
i__7823__auto___8323 = G__8324;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8321))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8321){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8321);
});})(g__8136__auto___8321))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__8136__auto___8321){
return (function (seq8264){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8264));
});})(g__8136__auto___8321))
;


var g__8136__auto___8325 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__8136__auto___8325){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8326 = arguments.length;
var i__7823__auto___8327 = (0);
while(true){
if((i__7823__auto___8327 < len__7822__auto___8326)){
args__7829__auto__.push((arguments[i__7823__auto___8327]));

var G__8328 = (i__7823__auto___8327 + (1));
i__7823__auto___8327 = G__8328;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8325))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8325){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8325);
});})(g__8136__auto___8325))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__8136__auto___8325){
return (function (seq8265){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8265));
});})(g__8136__auto___8325))
;


var g__8136__auto___8329 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__8136__auto___8329){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8330 = arguments.length;
var i__7823__auto___8331 = (0);
while(true){
if((i__7823__auto___8331 < len__7822__auto___8330)){
args__7829__auto__.push((arguments[i__7823__auto___8331]));

var G__8332 = (i__7823__auto___8331 + (1));
i__7823__auto___8331 = G__8332;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8329))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8329){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8329);
});})(g__8136__auto___8329))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__8136__auto___8329){
return (function (seq8266){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8266));
});})(g__8136__auto___8329))
;


var g__8136__auto___8333 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__8136__auto___8333){
return (function cljs$spec$impl$gen$string(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8334 = arguments.length;
var i__7823__auto___8335 = (0);
while(true){
if((i__7823__auto___8335 < len__7822__auto___8334)){
args__7829__auto__.push((arguments[i__7823__auto___8335]));

var G__8336 = (i__7823__auto___8335 + (1));
i__7823__auto___8335 = G__8336;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8333))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8333){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8333);
});})(g__8136__auto___8333))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__8136__auto___8333){
return (function (seq8267){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8267));
});})(g__8136__auto___8333))
;


var g__8136__auto___8337 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__8136__auto___8337){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8338 = arguments.length;
var i__7823__auto___8339 = (0);
while(true){
if((i__7823__auto___8339 < len__7822__auto___8338)){
args__7829__auto__.push((arguments[i__7823__auto___8339]));

var G__8340 = (i__7823__auto___8339 + (1));
i__7823__auto___8339 = G__8340;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8337))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8337){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8337);
});})(g__8136__auto___8337))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__8136__auto___8337){
return (function (seq8268){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8268));
});})(g__8136__auto___8337))
;


var g__8136__auto___8341 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__8136__auto___8341){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8342 = arguments.length;
var i__7823__auto___8343 = (0);
while(true){
if((i__7823__auto___8343 < len__7822__auto___8342)){
args__7829__auto__.push((arguments[i__7823__auto___8343]));

var G__8344 = (i__7823__auto___8343 + (1));
i__7823__auto___8343 = G__8344;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8341))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8341){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8341);
});})(g__8136__auto___8341))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__8136__auto___8341){
return (function (seq8269){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8269));
});})(g__8136__auto___8341))
;


var g__8136__auto___8345 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__8136__auto___8345){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8346 = arguments.length;
var i__7823__auto___8347 = (0);
while(true){
if((i__7823__auto___8347 < len__7822__auto___8346)){
args__7829__auto__.push((arguments[i__7823__auto___8347]));

var G__8348 = (i__7823__auto___8347 + (1));
i__7823__auto___8347 = G__8348;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8345))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8345){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8345);
});})(g__8136__auto___8345))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__8136__auto___8345){
return (function (seq8270){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8270));
});})(g__8136__auto___8345))
;


var g__8136__auto___8349 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__8136__auto___8349){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8350 = arguments.length;
var i__7823__auto___8351 = (0);
while(true){
if((i__7823__auto___8351 < len__7822__auto___8350)){
args__7829__auto__.push((arguments[i__7823__auto___8351]));

var G__8352 = (i__7823__auto___8351 + (1));
i__7823__auto___8351 = G__8352;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8349))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8349){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8349);
});})(g__8136__auto___8349))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__8136__auto___8349){
return (function (seq8271){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8271));
});})(g__8136__auto___8349))
;


var g__8136__auto___8353 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__8136__auto___8353){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8354 = arguments.length;
var i__7823__auto___8355 = (0);
while(true){
if((i__7823__auto___8355 < len__7822__auto___8354)){
args__7829__auto__.push((arguments[i__7823__auto___8355]));

var G__8356 = (i__7823__auto___8355 + (1));
i__7823__auto___8355 = G__8356;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});})(g__8136__auto___8353))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8136__auto___8353){
return (function (args){
return cljs.core.deref.call(null,g__8136__auto___8353);
});})(g__8136__auto___8353))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__8136__auto___8353){
return (function (seq8272){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8272));
});})(g__8136__auto___8353))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__7829__auto__ = [];
var len__7822__auto___8359 = arguments.length;
var i__7823__auto___8360 = (0);
while(true){
if((i__7823__auto___8360 < len__7822__auto___8359)){
args__7829__auto__.push((arguments[i__7823__auto___8360]));

var G__8361 = (i__7823__auto___8360 + (1));
i__7823__auto___8360 = G__8361;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__8357_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__8357_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq8358){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8358));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__8362_SHARP_){
return (new Date(p1__8362_SHARP_));
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