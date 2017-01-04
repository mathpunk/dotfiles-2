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
var seq__10722_10726 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__10723_10727 = null;
var count__10724_10728 = (0);
var i__10725_10729 = (0);
while(true){
if((i__10725_10729 < count__10724_10728)){
var k_10730 = cljs.core._nth.call(null,chunk__10723_10727,i__10725_10729);
var v_10731 = (b[k_10730]);
(a[k_10730] = v_10731);

var G__10732 = seq__10722_10726;
var G__10733 = chunk__10723_10727;
var G__10734 = count__10724_10728;
var G__10735 = (i__10725_10729 + (1));
seq__10722_10726 = G__10732;
chunk__10723_10727 = G__10733;
count__10724_10728 = G__10734;
i__10725_10729 = G__10735;
continue;
} else {
var temp__4657__auto___10736 = cljs.core.seq.call(null,seq__10722_10726);
if(temp__4657__auto___10736){
var seq__10722_10737__$1 = temp__4657__auto___10736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10722_10737__$1)){
var c__7558__auto___10738 = cljs.core.chunk_first.call(null,seq__10722_10737__$1);
var G__10739 = cljs.core.chunk_rest.call(null,seq__10722_10737__$1);
var G__10740 = c__7558__auto___10738;
var G__10741 = cljs.core.count.call(null,c__7558__auto___10738);
var G__10742 = (0);
seq__10722_10726 = G__10739;
chunk__10723_10727 = G__10740;
count__10724_10728 = G__10741;
i__10725_10729 = G__10742;
continue;
} else {
var k_10743 = cljs.core.first.call(null,seq__10722_10737__$1);
var v_10744 = (b[k_10743]);
(a[k_10743] = v_10744);

var G__10745 = cljs.core.next.call(null,seq__10722_10737__$1);
var G__10746 = null;
var G__10747 = (0);
var G__10748 = (0);
seq__10722_10726 = G__10745;
chunk__10723_10727 = G__10746;
count__10724_10728 = G__10747;
i__10725_10729 = G__10748;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7353__auto__,writer__7354__auto__,opt__7355__auto__){
return cljs.core._write.call(null,writer__7354__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7353__auto__,writer__7354__auto__,opt__7355__auto__){
return cljs.core._write.call(null,writer__7354__auto__,"cognitect.transit/VectorBuilder");
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
var args10749 = [];
var len__7822__auto___10752 = arguments.length;
var i__7823__auto___10753 = (0);
while(true){
if((i__7823__auto___10753 < len__7822__auto___10752)){
args10749.push((arguments[i__7823__auto___10753]));

var G__10754 = (i__7823__auto___10753 + (1));
i__7823__auto___10753 = G__10754;
continue;
} else {
}
break;
}

var G__10751 = args10749.length;
switch (G__10751) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10749.length)].join('')));

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
var G__10756 = (i + (2));
var G__10757 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__10756;
ret = G__10757;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7353__auto__,writer__7354__auto__,opt__7355__auto__){
return cljs.core._write.call(null,writer__7354__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7353__auto__,writer__7354__auto__,opt__7355__auto__){
return cljs.core._write.call(null,writer__7354__auto__,"cognitect.transit/SymbolHandler");
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
var seq__10758_10762 = cljs.core.seq.call(null,v);
var chunk__10759_10763 = null;
var count__10760_10764 = (0);
var i__10761_10765 = (0);
while(true){
if((i__10761_10765 < count__10760_10764)){
var x_10766 = cljs.core._nth.call(null,chunk__10759_10763,i__10761_10765);
ret.push(x_10766);

var G__10767 = seq__10758_10762;
var G__10768 = chunk__10759_10763;
var G__10769 = count__10760_10764;
var G__10770 = (i__10761_10765 + (1));
seq__10758_10762 = G__10767;
chunk__10759_10763 = G__10768;
count__10760_10764 = G__10769;
i__10761_10765 = G__10770;
continue;
} else {
var temp__4657__auto___10771 = cljs.core.seq.call(null,seq__10758_10762);
if(temp__4657__auto___10771){
var seq__10758_10772__$1 = temp__4657__auto___10771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10758_10772__$1)){
var c__7558__auto___10773 = cljs.core.chunk_first.call(null,seq__10758_10772__$1);
var G__10774 = cljs.core.chunk_rest.call(null,seq__10758_10772__$1);
var G__10775 = c__7558__auto___10773;
var G__10776 = cljs.core.count.call(null,c__7558__auto___10773);
var G__10777 = (0);
seq__10758_10762 = G__10774;
chunk__10759_10763 = G__10775;
count__10760_10764 = G__10776;
i__10761_10765 = G__10777;
continue;
} else {
var x_10778 = cljs.core.first.call(null,seq__10758_10772__$1);
ret.push(x_10778);

var G__10779 = cljs.core.next.call(null,seq__10758_10772__$1);
var G__10780 = null;
var G__10781 = (0);
var G__10782 = (0);
seq__10758_10762 = G__10779;
chunk__10759_10763 = G__10780;
count__10760_10764 = G__10781;
i__10761_10765 = G__10782;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7353__auto__,writer__7354__auto__,opt__7355__auto__){
return cljs.core._write.call(null,writer__7354__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7353__auto__,writer__7354__auto__,opt__7355__auto__){
return cljs.core._write.call(null,writer__7354__auto__,"cognitect.transit/MapHandler");
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
var seq__10783_10787 = cljs.core.seq.call(null,v);
var chunk__10784_10788 = null;
var count__10785_10789 = (0);
var i__10786_10790 = (0);
while(true){
if((i__10786_10790 < count__10785_10789)){
var x_10791 = cljs.core._nth.call(null,chunk__10784_10788,i__10786_10790);
ret.push(x_10791);

var G__10792 = seq__10783_10787;
var G__10793 = chunk__10784_10788;
var G__10794 = count__10785_10789;
var G__10795 = (i__10786_10790 + (1));
seq__10783_10787 = G__10792;
chunk__10784_10788 = G__10793;
count__10785_10789 = G__10794;
i__10786_10790 = G__10795;
continue;
} else {
var temp__4657__auto___10796 = cljs.core.seq.call(null,seq__10783_10787);
if(temp__4657__auto___10796){
var seq__10783_10797__$1 = temp__4657__auto___10796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10783_10797__$1)){
var c__7558__auto___10798 = cljs.core.chunk_first.call(null,seq__10783_10797__$1);
var G__10799 = cljs.core.chunk_rest.call(null,seq__10783_10797__$1);
var G__10800 = c__7558__auto___10798;
var G__10801 = cljs.core.count.call(null,c__7558__auto___10798);
var G__10802 = (0);
seq__10783_10787 = G__10799;
chunk__10784_10788 = G__10800;
count__10785_10789 = G__10801;
i__10786_10790 = G__10802;
continue;
} else {
var x_10803 = cljs.core.first.call(null,seq__10783_10797__$1);
ret.push(x_10803);

var G__10804 = cljs.core.next.call(null,seq__10783_10797__$1);
var G__10805 = null;
var G__10806 = (0);
var G__10807 = (0);
seq__10783_10787 = G__10804;
chunk__10784_10788 = G__10805;
count__10785_10789 = G__10806;
i__10786_10790 = G__10807;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7353__auto__,writer__7354__auto__,opt__7355__auto__){
return cljs.core._write.call(null,writer__7354__auto__,"cognitect.transit/SetHandler");
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
var seq__10808_10812 = cljs.core.seq.call(null,v);
var chunk__10809_10813 = null;
var count__10810_10814 = (0);
var i__10811_10815 = (0);
while(true){
if((i__10811_10815 < count__10810_10814)){
var x_10816 = cljs.core._nth.call(null,chunk__10809_10813,i__10811_10815);
ret.push(x_10816);

var G__10817 = seq__10808_10812;
var G__10818 = chunk__10809_10813;
var G__10819 = count__10810_10814;
var G__10820 = (i__10811_10815 + (1));
seq__10808_10812 = G__10817;
chunk__10809_10813 = G__10818;
count__10810_10814 = G__10819;
i__10811_10815 = G__10820;
continue;
} else {
var temp__4657__auto___10821 = cljs.core.seq.call(null,seq__10808_10812);
if(temp__4657__auto___10821){
var seq__10808_10822__$1 = temp__4657__auto___10821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10808_10822__$1)){
var c__7558__auto___10823 = cljs.core.chunk_first.call(null,seq__10808_10822__$1);
var G__10824 = cljs.core.chunk_rest.call(null,seq__10808_10822__$1);
var G__10825 = c__7558__auto___10823;
var G__10826 = cljs.core.count.call(null,c__7558__auto___10823);
var G__10827 = (0);
seq__10808_10812 = G__10824;
chunk__10809_10813 = G__10825;
count__10810_10814 = G__10826;
i__10811_10815 = G__10827;
continue;
} else {
var x_10828 = cljs.core.first.call(null,seq__10808_10822__$1);
ret.push(x_10828);

var G__10829 = cljs.core.next.call(null,seq__10808_10822__$1);
var G__10830 = null;
var G__10831 = (0);
var G__10832 = (0);
seq__10808_10812 = G__10829;
chunk__10809_10813 = G__10830;
count__10810_10814 = G__10831;
i__10811_10815 = G__10832;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7353__auto__,writer__7354__auto__,opt__7355__auto__){
return cljs.core._write.call(null,writer__7354__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7353__auto__,writer__7354__auto__,opt__7355__auto__){
return cljs.core._write.call(null,writer__7354__auto__,"cognitect.transit/UUIDHandler");
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
var args10833 = [];
var len__7822__auto___10848 = arguments.length;
var i__7823__auto___10849 = (0);
while(true){
if((i__7823__auto___10849 < len__7822__auto___10848)){
args10833.push((arguments[i__7823__auto___10849]));

var G__10850 = (i__7823__auto___10849 + (1));
i__7823__auto___10849 = G__10850;
continue;
} else {
}
break;
}

var G__10835 = args10833.length;
switch (G__10835) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10833.length)].join('')));

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
var G__10836 = obj;
G__10836.push(kfn.call(null,k),vfn.call(null,v));

return G__10836;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x10837 = cljs.core.clone.call(null,handlers);
x10837.forEach = ((function (x10837,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__10838 = cljs.core.seq.call(null,coll);
var chunk__10839 = null;
var count__10840 = (0);
var i__10841 = (0);
while(true){
if((i__10841 < count__10840)){
var vec__10842 = cljs.core._nth.call(null,chunk__10839,i__10841);
var k = cljs.core.nth.call(null,vec__10842,(0),null);
var v = cljs.core.nth.call(null,vec__10842,(1),null);
f.call(null,v,k);

var G__10852 = seq__10838;
var G__10853 = chunk__10839;
var G__10854 = count__10840;
var G__10855 = (i__10841 + (1));
seq__10838 = G__10852;
chunk__10839 = G__10853;
count__10840 = G__10854;
i__10841 = G__10855;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10838);
if(temp__4657__auto__){
var seq__10838__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10838__$1)){
var c__7558__auto__ = cljs.core.chunk_first.call(null,seq__10838__$1);
var G__10856 = cljs.core.chunk_rest.call(null,seq__10838__$1);
var G__10857 = c__7558__auto__;
var G__10858 = cljs.core.count.call(null,c__7558__auto__);
var G__10859 = (0);
seq__10838 = G__10856;
chunk__10839 = G__10857;
count__10840 = G__10858;
i__10841 = G__10859;
continue;
} else {
var vec__10845 = cljs.core.first.call(null,seq__10838__$1);
var k = cljs.core.nth.call(null,vec__10845,(0),null);
var v = cljs.core.nth.call(null,vec__10845,(1),null);
f.call(null,v,k);

var G__10860 = cljs.core.next.call(null,seq__10838__$1);
var G__10861 = null;
var G__10862 = (0);
var G__10863 = (0);
seq__10838 = G__10860;
chunk__10839 = G__10861;
count__10840 = G__10862;
i__10841 = G__10863;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10837,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x10837;
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
var args10864 = [];
var len__7822__auto___10870 = arguments.length;
var i__7823__auto___10871 = (0);
while(true){
if((i__7823__auto___10871 < len__7822__auto___10870)){
args10864.push((arguments[i__7823__auto___10871]));

var G__10872 = (i__7823__auto___10871 + (1));
i__7823__auto___10871 = G__10872;
continue;
} else {
}
break;
}

var G__10866 = args10864.length;
switch (G__10866) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10864.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit10867 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit10867 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta10868){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta10868 = meta10868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit10867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10869,meta10868__$1){
var self__ = this;
var _10869__$1 = this;
return (new cognitect.transit.t_cognitect$transit10867(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta10868__$1));
});

cognitect.transit.t_cognitect$transit10867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10869){
var self__ = this;
var _10869__$1 = this;
return self__.meta10868;
});

cognitect.transit.t_cognitect$transit10867.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit10867.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit10867.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit10867.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit10867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta10868","meta10868",-6960402,null)], null);
});

cognitect.transit.t_cognitect$transit10867.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit10867.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit10867";

cognitect.transit.t_cognitect$transit10867.cljs$lang$ctorPrWriter = (function (this__7353__auto__,writer__7354__auto__,opt__7355__auto__){
return cljs.core._write.call(null,writer__7354__auto__,"cognitect.transit/t_cognitect$transit10867");
});

cognitect.transit.__GT_t_cognitect$transit10867 = (function cognitect$transit$__GT_t_cognitect$transit10867(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta10868){
return (new cognitect.transit.t_cognitect$transit10867(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta10868));
});

}

return (new cognitect.transit.t_cognitect$transit10867(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__6747__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
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