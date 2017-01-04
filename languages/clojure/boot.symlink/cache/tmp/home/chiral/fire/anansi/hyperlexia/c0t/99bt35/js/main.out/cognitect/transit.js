// Compiled by ClojureScript 1.9.293 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__9328_9338 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__9329_9339 = null;
var count__9330_9340 = (0);
var i__9331_9341 = (0);
while(true){
if((i__9331_9341 < count__9330_9340)){
var k_9342 = cljs.core._nth.call(null,chunk__9329_9339,i__9331_9341);
var v_9343 = (b[k_9342]);
(a[k_9342] = v_9343);

var G__9344 = seq__9328_9338;
var G__9345 = chunk__9329_9339;
var G__9346 = count__9330_9340;
var G__9347 = (i__9331_9341 + (1));
seq__9328_9338 = G__9344;
chunk__9329_9339 = G__9345;
count__9330_9340 = G__9346;
i__9331_9341 = G__9347;
continue;
} else {
var temp__6747__auto___9348 = cljs.core.seq.call(null,seq__9328_9338);
if(temp__6747__auto___9348){
var seq__9328_9353__$1 = temp__6747__auto___9348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9328_9353__$1)){
var c__8525__auto___9354 = cljs.core.chunk_first.call(null,seq__9328_9353__$1);
var G__9355 = cljs.core.chunk_rest.call(null,seq__9328_9353__$1);
var G__9356 = c__8525__auto___9354;
var G__9357 = cljs.core.count.call(null,c__8525__auto___9354);
var G__9358 = (0);
seq__9328_9338 = G__9355;
chunk__9329_9339 = G__9356;
count__9330_9340 = G__9357;
i__9331_9341 = G__9358;
continue;
} else {
var k_9359 = cljs.core.first.call(null,seq__9328_9353__$1);
var v_9360 = (b[k_9359]);
(a[k_9359] = v_9360);

var G__9361 = cljs.core.next.call(null,seq__9328_9353__$1);
var G__9362 = null;
var G__9363 = (0);
var G__9364 = (0);
seq__9328_9338 = G__9361;
chunk__9329_9339 = G__9362;
count__9330_9340 = G__9363;
i__9331_9341 = G__9364;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__8271__auto__,writer__8272__auto__,opt__8273__auto__){
return cljs.core._write.call(null,writer__8272__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__8271__auto__,writer__8272__auto__,opt__8273__auto__){
return cljs.core._write.call(null,writer__8272__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args9394 = [];
var len__8835__auto___9403 = arguments.length;
var i__8836__auto___9410 = (0);
while(true){
if((i__8836__auto___9410 < len__8835__auto___9403)){
args9394.push((arguments[i__8836__auto___9410]));

var G__9411 = (i__8836__auto___9410 + (1));
i__8836__auto___9410 = G__9411;
continue;
} else {
}
break;
}

var G__9402 = args9394.length;
switch (G__9402) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9394.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__9427 = (i + (2));
var G__9428 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__9427;
ret = G__9428;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__8271__auto__,writer__8272__auto__,opt__8273__auto__){
return cljs.core._write.call(null,writer__8272__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__8271__auto__,writer__8272__auto__,opt__8273__auto__){
return cljs.core._write.call(null,writer__8272__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9451_9466 = cljs.core.seq.call(null,v);
var chunk__9452_9467 = null;
var count__9453_9468 = (0);
var i__9454_9469 = (0);
while(true){
if((i__9454_9469 < count__9453_9468)){
var x_9470 = cljs.core._nth.call(null,chunk__9452_9467,i__9454_9469);
ret.push(x_9470);

var G__9471 = seq__9451_9466;
var G__9472 = chunk__9452_9467;
var G__9473 = count__9453_9468;
var G__9474 = (i__9454_9469 + (1));
seq__9451_9466 = G__9471;
chunk__9452_9467 = G__9472;
count__9453_9468 = G__9473;
i__9454_9469 = G__9474;
continue;
} else {
var temp__6747__auto___9475 = cljs.core.seq.call(null,seq__9451_9466);
if(temp__6747__auto___9475){
var seq__9451_9476__$1 = temp__6747__auto___9475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9451_9476__$1)){
var c__8525__auto___9477 = cljs.core.chunk_first.call(null,seq__9451_9476__$1);
var G__9478 = cljs.core.chunk_rest.call(null,seq__9451_9476__$1);
var G__9479 = c__8525__auto___9477;
var G__9480 = cljs.core.count.call(null,c__8525__auto___9477);
var G__9481 = (0);
seq__9451_9466 = G__9478;
chunk__9452_9467 = G__9479;
count__9453_9468 = G__9480;
i__9454_9469 = G__9481;
continue;
} else {
var x_9486 = cljs.core.first.call(null,seq__9451_9476__$1);
ret.push(x_9486);

var G__9487 = cljs.core.next.call(null,seq__9451_9476__$1);
var G__9488 = null;
var G__9489 = (0);
var G__9490 = (0);
seq__9451_9466 = G__9487;
chunk__9452_9467 = G__9488;
count__9453_9468 = G__9489;
i__9454_9469 = G__9490;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__8271__auto__,writer__8272__auto__,opt__8273__auto__){
return cljs.core._write.call(null,writer__8272__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__8271__auto__,writer__8272__auto__,opt__8273__auto__){
return cljs.core._write.call(null,writer__8272__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9494_9507 = cljs.core.seq.call(null,v);
var chunk__9495_9508 = null;
var count__9496_9509 = (0);
var i__9497_9510 = (0);
while(true){
if((i__9497_9510 < count__9496_9509)){
var x_9511 = cljs.core._nth.call(null,chunk__9495_9508,i__9497_9510);
ret.push(x_9511);

var G__9513 = seq__9494_9507;
var G__9514 = chunk__9495_9508;
var G__9515 = count__9496_9509;
var G__9516 = (i__9497_9510 + (1));
seq__9494_9507 = G__9513;
chunk__9495_9508 = G__9514;
count__9496_9509 = G__9515;
i__9497_9510 = G__9516;
continue;
} else {
var temp__6747__auto___9517 = cljs.core.seq.call(null,seq__9494_9507);
if(temp__6747__auto___9517){
var seq__9494_9518__$1 = temp__6747__auto___9517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9494_9518__$1)){
var c__8525__auto___9519 = cljs.core.chunk_first.call(null,seq__9494_9518__$1);
var G__9520 = cljs.core.chunk_rest.call(null,seq__9494_9518__$1);
var G__9521 = c__8525__auto___9519;
var G__9522 = cljs.core.count.call(null,c__8525__auto___9519);
var G__9523 = (0);
seq__9494_9507 = G__9520;
chunk__9495_9508 = G__9521;
count__9496_9509 = G__9522;
i__9497_9510 = G__9523;
continue;
} else {
var x_9525 = cljs.core.first.call(null,seq__9494_9518__$1);
ret.push(x_9525);

var G__9526 = cljs.core.next.call(null,seq__9494_9518__$1);
var G__9527 = null;
var G__9528 = (0);
var G__9529 = (0);
seq__9494_9507 = G__9526;
chunk__9495_9508 = G__9527;
count__9496_9509 = G__9528;
i__9497_9510 = G__9529;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__8271__auto__,writer__8272__auto__,opt__8273__auto__){
return cljs.core._write.call(null,writer__8272__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9530_9537 = cljs.core.seq.call(null,v);
var chunk__9531_9538 = null;
var count__9532_9539 = (0);
var i__9533_9540 = (0);
while(true){
if((i__9533_9540 < count__9532_9539)){
var x_9541 = cljs.core._nth.call(null,chunk__9531_9538,i__9533_9540);
ret.push(x_9541);

var G__9542 = seq__9530_9537;
var G__9543 = chunk__9531_9538;
var G__9544 = count__9532_9539;
var G__9545 = (i__9533_9540 + (1));
seq__9530_9537 = G__9542;
chunk__9531_9538 = G__9543;
count__9532_9539 = G__9544;
i__9533_9540 = G__9545;
continue;
} else {
var temp__6747__auto___9546 = cljs.core.seq.call(null,seq__9530_9537);
if(temp__6747__auto___9546){
var seq__9530_9547__$1 = temp__6747__auto___9546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9530_9547__$1)){
var c__8525__auto___9548 = cljs.core.chunk_first.call(null,seq__9530_9547__$1);
var G__9549 = cljs.core.chunk_rest.call(null,seq__9530_9547__$1);
var G__9550 = c__8525__auto___9548;
var G__9551 = cljs.core.count.call(null,c__8525__auto___9548);
var G__9552 = (0);
seq__9530_9537 = G__9549;
chunk__9531_9538 = G__9550;
count__9532_9539 = G__9551;
i__9533_9540 = G__9552;
continue;
} else {
var x_9553 = cljs.core.first.call(null,seq__9530_9547__$1);
ret.push(x_9553);

var G__9554 = cljs.core.next.call(null,seq__9530_9547__$1);
var G__9555 = null;
var G__9556 = (0);
var G__9557 = (0);
seq__9530_9537 = G__9554;
chunk__9531_9538 = G__9555;
count__9532_9539 = G__9556;
i__9533_9540 = G__9557;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__8271__auto__,writer__8272__auto__,opt__8273__auto__){
return cljs.core._write.call(null,writer__8272__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__8271__auto__,writer__8272__auto__,opt__8273__auto__){
return cljs.core._write.call(null,writer__8272__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args9569 = [];
var len__8835__auto___9601 = arguments.length;
var i__8836__auto___9602 = (0);
while(true){
if((i__8836__auto___9602 < len__8835__auto___9601)){
args9569.push((arguments[i__8836__auto___9602]));

var G__9603 = (i__8836__auto___9602 + (1));
i__8836__auto___9602 = G__9603;
continue;
} else {
}
break;
}

var G__9584 = args9569.length;
switch (G__9584) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9569.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__9589 = obj;
G__9589.push(kfn.call(null,k),vfn.call(null,v));

return G__9589;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x9590 = cljs.core.clone.call(null,handlers);
x9590.forEach = ((function (x9590,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__9591 = cljs.core.seq.call(null,coll);
var chunk__9592 = null;
var count__9593 = (0);
var i__9594 = (0);
while(true){
if((i__9594 < count__9593)){
var vec__9595 = cljs.core._nth.call(null,chunk__9592,i__9594);
var k = cljs.core.nth.call(null,vec__9595,(0),null);
var v = cljs.core.nth.call(null,vec__9595,(1),null);
f.call(null,v,k);

var G__9609 = seq__9591;
var G__9610 = chunk__9592;
var G__9611 = count__9593;
var G__9612 = (i__9594 + (1));
seq__9591 = G__9609;
chunk__9592 = G__9610;
count__9593 = G__9611;
i__9594 = G__9612;
continue;
} else {
var temp__6747__auto__ = cljs.core.seq.call(null,seq__9591);
if(temp__6747__auto__){
var seq__9591__$1 = temp__6747__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9591__$1)){
var c__8525__auto__ = cljs.core.chunk_first.call(null,seq__9591__$1);
var G__9613 = cljs.core.chunk_rest.call(null,seq__9591__$1);
var G__9614 = c__8525__auto__;
var G__9615 = cljs.core.count.call(null,c__8525__auto__);
var G__9616 = (0);
seq__9591 = G__9613;
chunk__9592 = G__9614;
count__9593 = G__9615;
i__9594 = G__9616;
continue;
} else {
var vec__9598 = cljs.core.first.call(null,seq__9591__$1);
var k = cljs.core.nth.call(null,vec__9598,(0),null);
var v = cljs.core.nth.call(null,vec__9598,(1),null);
f.call(null,v,k);

var G__9617 = cljs.core.next.call(null,seq__9591__$1);
var G__9618 = null;
var G__9619 = (0);
var G__9620 = (0);
seq__9591 = G__9617;
chunk__9592 = G__9618;
count__9593 = G__9619;
i__9594 = G__9620;
continue;
}
} else {
return null;
}
}
break;
}
});})(x9590,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x9590;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args9637 = [];
var len__8835__auto___9653 = arguments.length;
var i__8836__auto___9654 = (0);
while(true){
if((i__8836__auto___9654 < len__8835__auto___9653)){
args9637.push((arguments[i__8836__auto___9654]));

var G__9655 = (i__8836__auto___9654 + (1));
i__8836__auto___9654 = G__9655;
continue;
} else {
}
break;
}

var G__9639 = args9637.length;
switch (G__9639) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9637.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit9640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit9640 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta9641){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta9641 = meta9641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit9640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9642,meta9641__$1){
var self__ = this;
var _9642__$1 = this;
return (new cognitect.transit.t_cognitect$transit9640(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta9641__$1));
});

cognitect.transit.t_cognitect$transit9640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9642){
var self__ = this;
var _9642__$1 = this;
return self__.meta9641;
});

cognitect.transit.t_cognitect$transit9640.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit9640.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit9640.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit9640.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit9640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta9641","meta9641",785016029,null)], null);
});

cognitect.transit.t_cognitect$transit9640.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit9640.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit9640";

cognitect.transit.t_cognitect$transit9640.cljs$lang$ctorPrWriter = (function (this__8271__auto__,writer__8272__auto__,opt__8273__auto__){
return cljs.core._write.call(null,writer__8272__auto__,"cognitect.transit/t_cognitect$transit9640");
});

cognitect.transit.__GT_t_cognitect$transit9640 = (function cognitect$transit$__GT_t_cognitect$transit9640(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta9641){
return (new cognitect.transit.t_cognitect$transit9640(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta9641));
});

}

return (new cognitect.transit.t_cognitect$transit9640(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__7619__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__7619__auto__)){
return or__7619__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map