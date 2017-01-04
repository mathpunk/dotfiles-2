// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

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
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__12692_12696 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__12693_12697 = null;
var count__12694_12698 = (0);
var i__12695_12699 = (0);
while(true){
if((i__12695_12699 < count__12694_12698)){
var k_12700 = cljs.core._nth.call(null,chunk__12693_12697,i__12695_12699);
var v_12701 = (b[k_12700]);
(a[k_12700] = v_12701);

var G__12702 = seq__12692_12696;
var G__12703 = chunk__12693_12697;
var G__12704 = count__12694_12698;
var G__12705 = (i__12695_12699 + (1));
seq__12692_12696 = G__12702;
chunk__12693_12697 = G__12703;
count__12694_12698 = G__12704;
i__12695_12699 = G__12705;
continue;
} else {
var temp__4657__auto___12706 = cljs.core.seq.call(null,seq__12692_12696);
if(temp__4657__auto___12706){
var seq__12692_12707__$1 = temp__4657__auto___12706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12692_12707__$1)){
var c__7559__auto___12708 = cljs.core.chunk_first.call(null,seq__12692_12707__$1);
var G__12709 = cljs.core.chunk_rest.call(null,seq__12692_12707__$1);
var G__12710 = c__7559__auto___12708;
var G__12711 = cljs.core.count.call(null,c__7559__auto___12708);
var G__12712 = (0);
seq__12692_12696 = G__12709;
chunk__12693_12697 = G__12710;
count__12694_12698 = G__12711;
i__12695_12699 = G__12712;
continue;
} else {
var k_12713 = cljs.core.first.call(null,seq__12692_12707__$1);
var v_12714 = (b[k_12713]);
(a[k_12713] = v_12714);

var G__12715 = cljs.core.next.call(null,seq__12692_12707__$1);
var G__12716 = null;
var G__12717 = (0);
var G__12718 = (0);
seq__12692_12696 = G__12715;
chunk__12693_12697 = G__12716;
count__12694_12698 = G__12717;
i__12695_12699 = G__12718;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"cognitect.transit/VectorBuilder");
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
var args12719 = [];
var len__7823__auto___12722 = arguments.length;
var i__7824__auto___12723 = (0);
while(true){
if((i__7824__auto___12723 < len__7823__auto___12722)){
args12719.push((arguments[i__7824__auto___12723]));

var G__12724 = (i__7824__auto___12723 + (1));
i__7824__auto___12723 = G__12724;
continue;
} else {
}
break;
}

var G__12721 = args12719.length;
switch (G__12721) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12719.length)].join('')));

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
var G__12726 = (i + (2));
var G__12727 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__12726;
ret = G__12727;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"cognitect.transit/SymbolHandler");
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
var seq__12728_12732 = cljs.core.seq.call(null,v);
var chunk__12729_12733 = null;
var count__12730_12734 = (0);
var i__12731_12735 = (0);
while(true){
if((i__12731_12735 < count__12730_12734)){
var x_12736 = cljs.core._nth.call(null,chunk__12729_12733,i__12731_12735);
ret.push(x_12736);

var G__12737 = seq__12728_12732;
var G__12738 = chunk__12729_12733;
var G__12739 = count__12730_12734;
var G__12740 = (i__12731_12735 + (1));
seq__12728_12732 = G__12737;
chunk__12729_12733 = G__12738;
count__12730_12734 = G__12739;
i__12731_12735 = G__12740;
continue;
} else {
var temp__4657__auto___12741 = cljs.core.seq.call(null,seq__12728_12732);
if(temp__4657__auto___12741){
var seq__12728_12742__$1 = temp__4657__auto___12741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12728_12742__$1)){
var c__7559__auto___12743 = cljs.core.chunk_first.call(null,seq__12728_12742__$1);
var G__12744 = cljs.core.chunk_rest.call(null,seq__12728_12742__$1);
var G__12745 = c__7559__auto___12743;
var G__12746 = cljs.core.count.call(null,c__7559__auto___12743);
var G__12747 = (0);
seq__12728_12732 = G__12744;
chunk__12729_12733 = G__12745;
count__12730_12734 = G__12746;
i__12731_12735 = G__12747;
continue;
} else {
var x_12748 = cljs.core.first.call(null,seq__12728_12742__$1);
ret.push(x_12748);

var G__12749 = cljs.core.next.call(null,seq__12728_12742__$1);
var G__12750 = null;
var G__12751 = (0);
var G__12752 = (0);
seq__12728_12732 = G__12749;
chunk__12729_12733 = G__12750;
count__12730_12734 = G__12751;
i__12731_12735 = G__12752;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"cognitect.transit/MapHandler");
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
var seq__12753_12757 = cljs.core.seq.call(null,v);
var chunk__12754_12758 = null;
var count__12755_12759 = (0);
var i__12756_12760 = (0);
while(true){
if((i__12756_12760 < count__12755_12759)){
var x_12761 = cljs.core._nth.call(null,chunk__12754_12758,i__12756_12760);
ret.push(x_12761);

var G__12762 = seq__12753_12757;
var G__12763 = chunk__12754_12758;
var G__12764 = count__12755_12759;
var G__12765 = (i__12756_12760 + (1));
seq__12753_12757 = G__12762;
chunk__12754_12758 = G__12763;
count__12755_12759 = G__12764;
i__12756_12760 = G__12765;
continue;
} else {
var temp__4657__auto___12766 = cljs.core.seq.call(null,seq__12753_12757);
if(temp__4657__auto___12766){
var seq__12753_12767__$1 = temp__4657__auto___12766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12753_12767__$1)){
var c__7559__auto___12768 = cljs.core.chunk_first.call(null,seq__12753_12767__$1);
var G__12769 = cljs.core.chunk_rest.call(null,seq__12753_12767__$1);
var G__12770 = c__7559__auto___12768;
var G__12771 = cljs.core.count.call(null,c__7559__auto___12768);
var G__12772 = (0);
seq__12753_12757 = G__12769;
chunk__12754_12758 = G__12770;
count__12755_12759 = G__12771;
i__12756_12760 = G__12772;
continue;
} else {
var x_12773 = cljs.core.first.call(null,seq__12753_12767__$1);
ret.push(x_12773);

var G__12774 = cljs.core.next.call(null,seq__12753_12767__$1);
var G__12775 = null;
var G__12776 = (0);
var G__12777 = (0);
seq__12753_12757 = G__12774;
chunk__12754_12758 = G__12775;
count__12755_12759 = G__12776;
i__12756_12760 = G__12777;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"cognitect.transit/SetHandler");
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
var seq__12778_12782 = cljs.core.seq.call(null,v);
var chunk__12779_12783 = null;
var count__12780_12784 = (0);
var i__12781_12785 = (0);
while(true){
if((i__12781_12785 < count__12780_12784)){
var x_12786 = cljs.core._nth.call(null,chunk__12779_12783,i__12781_12785);
ret.push(x_12786);

var G__12787 = seq__12778_12782;
var G__12788 = chunk__12779_12783;
var G__12789 = count__12780_12784;
var G__12790 = (i__12781_12785 + (1));
seq__12778_12782 = G__12787;
chunk__12779_12783 = G__12788;
count__12780_12784 = G__12789;
i__12781_12785 = G__12790;
continue;
} else {
var temp__4657__auto___12791 = cljs.core.seq.call(null,seq__12778_12782);
if(temp__4657__auto___12791){
var seq__12778_12792__$1 = temp__4657__auto___12791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12778_12792__$1)){
var c__7559__auto___12793 = cljs.core.chunk_first.call(null,seq__12778_12792__$1);
var G__12794 = cljs.core.chunk_rest.call(null,seq__12778_12792__$1);
var G__12795 = c__7559__auto___12793;
var G__12796 = cljs.core.count.call(null,c__7559__auto___12793);
var G__12797 = (0);
seq__12778_12782 = G__12794;
chunk__12779_12783 = G__12795;
count__12780_12784 = G__12796;
i__12781_12785 = G__12797;
continue;
} else {
var x_12798 = cljs.core.first.call(null,seq__12778_12792__$1);
ret.push(x_12798);

var G__12799 = cljs.core.next.call(null,seq__12778_12792__$1);
var G__12800 = null;
var G__12801 = (0);
var G__12802 = (0);
seq__12778_12782 = G__12799;
chunk__12779_12783 = G__12800;
count__12780_12784 = G__12801;
i__12781_12785 = G__12802;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"cognitect.transit/UUIDHandler");
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
var args12803 = [];
var len__7823__auto___12818 = arguments.length;
var i__7824__auto___12819 = (0);
while(true){
if((i__7824__auto___12819 < len__7823__auto___12818)){
args12803.push((arguments[i__7824__auto___12819]));

var G__12820 = (i__7824__auto___12819 + (1));
i__7824__auto___12819 = G__12820;
continue;
} else {
}
break;
}

var G__12805 = args12803.length;
switch (G__12805) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12803.length)].join('')));

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
var G__12806 = obj;
G__12806.push(kfn.call(null,k),vfn.call(null,v));

return G__12806;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x12807 = cljs.core.clone.call(null,handlers);
x12807.forEach = ((function (x12807,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__12808 = cljs.core.seq.call(null,coll);
var chunk__12809 = null;
var count__12810 = (0);
var i__12811 = (0);
while(true){
if((i__12811 < count__12810)){
var vec__12812 = cljs.core._nth.call(null,chunk__12809,i__12811);
var k = cljs.core.nth.call(null,vec__12812,(0),null);
var v = cljs.core.nth.call(null,vec__12812,(1),null);
f.call(null,v,k);

var G__12822 = seq__12808;
var G__12823 = chunk__12809;
var G__12824 = count__12810;
var G__12825 = (i__12811 + (1));
seq__12808 = G__12822;
chunk__12809 = G__12823;
count__12810 = G__12824;
i__12811 = G__12825;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12808);
if(temp__4657__auto__){
var seq__12808__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12808__$1)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,seq__12808__$1);
var G__12826 = cljs.core.chunk_rest.call(null,seq__12808__$1);
var G__12827 = c__7559__auto__;
var G__12828 = cljs.core.count.call(null,c__7559__auto__);
var G__12829 = (0);
seq__12808 = G__12826;
chunk__12809 = G__12827;
count__12810 = G__12828;
i__12811 = G__12829;
continue;
} else {
var vec__12815 = cljs.core.first.call(null,seq__12808__$1);
var k = cljs.core.nth.call(null,vec__12815,(0),null);
var v = cljs.core.nth.call(null,vec__12815,(1),null);
f.call(null,v,k);

var G__12830 = cljs.core.next.call(null,seq__12808__$1);
var G__12831 = null;
var G__12832 = (0);
var G__12833 = (0);
seq__12808 = G__12830;
chunk__12809 = G__12831;
count__12810 = G__12832;
i__12811 = G__12833;
continue;
}
} else {
return null;
}
}
break;
}
});})(x12807,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x12807;
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
var args12834 = [];
var len__7823__auto___12840 = arguments.length;
var i__7824__auto___12841 = (0);
while(true){
if((i__7824__auto___12841 < len__7823__auto___12840)){
args12834.push((arguments[i__7824__auto___12841]));

var G__12842 = (i__7824__auto___12841 + (1));
i__7824__auto___12841 = G__12842;
continue;
} else {
}
break;
}

var G__12836 = args12834.length;
switch (G__12836) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12834.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit12837 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit12837 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta12838){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta12838 = meta12838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit12837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12839,meta12838__$1){
var self__ = this;
var _12839__$1 = this;
return (new cognitect.transit.t_cognitect$transit12837(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta12838__$1));
});

cognitect.transit.t_cognitect$transit12837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12839){
var self__ = this;
var _12839__$1 = this;
return self__.meta12838;
});

cognitect.transit.t_cognitect$transit12837.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit12837.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit12837.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit12837.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit12837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta12838","meta12838",-862639234,null)], null);
});

cognitect.transit.t_cognitect$transit12837.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit12837.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit12837";

cognitect.transit.t_cognitect$transit12837.cljs$lang$ctorPrWriter = (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"cognitect.transit/t_cognitect$transit12837");
});

cognitect.transit.__GT_t_cognitect$transit12837 = (function cognitect$transit$__GT_t_cognitect$transit12837(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12838){
return (new cognitect.transit.t_cognitect$transit12837(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12838));
});

}

return (new cognitect.transit.t_cognitect$transit12837(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__6748__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
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