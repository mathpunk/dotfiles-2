// Compiled by ClojureScript 1.9.229 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__7411__auto__ = (((_ == null))?null:_);
var m__7412__auto__ = (datascript.parser._collect[goog.typeOf(x__7411__auto__)]);
if(!((m__7412__auto__ == null))){
return m__7412__auto__.call(null,_,pred,acc);
} else {
var m__7412__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__7412__auto____$1 == null))){
return m__7412__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__7411__auto__ = (((_ == null))?null:_);
var m__7412__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__7411__auto__)]);
if(!((m__7412__auto__ == null))){
return m__7412__auto__.call(null,_,acc);
} else {
var m__7412__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__7412__auto____$1 == null))){
return m__7412__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__7411__auto__ = (((_ == null))?null:_);
var m__7412__auto__ = (datascript.parser._postwalk[goog.typeOf(x__7411__auto__)]);
if(!((m__7412__auto__ == null))){
return m__7412__auto__.call(null,_,f);
} else {
var m__7412__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__7412__auto____$1 == null))){
return m__7412__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__10711_SHARP_,p2__10710_SHARP_){
var temp__4655__auto__ = parse_el.call(null,p2__10710_SHARP_);
if(cljs.core.truth_(temp__4655__auto__)){
var parsed = temp__4655__auto__;
return cljs.core.conj.call(null,p1__10711_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__7830__auto__ = [];
var len__7823__auto___10720 = arguments.length;
var i__7824__auto___10721 = (0);
while(true){
if((i__7824__auto___10721 < len__7823__auto___10720)){
args__7830__auto__.push((arguments[i__7824__auto___10721]));

var G__10722 = (i__7824__auto___10721 + (1));
i__7824__auto___10721 = G__10722;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((2) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((2)),(0),null)):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7831__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__10715){
var vec__10716 = p__10715;
var acc = cljs.core.nth.call(null,vec__10716,(0),null);
var acc__$1 = (function (){var or__6748__auto__ = acc;
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.db.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__10716,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__10716,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq10712){
var G__10713 = cljs.core.first.call(null,seq10712);
var seq10712__$1 = cljs.core.next.call(null,seq10712);
var G__10714 = cljs.core.first.call(null,seq10712__$1);
var seq10712__$2 = cljs.core.next.call(null,seq10712__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__10713,G__10714,seq10712__$2);
});

datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__6748__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__6748__auto__){
return or__6748__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__10731){
var vec__10732 = p__10731;
var k = cljs.core.nth.call(null,vec__10732,(0),null);
var v = cljs.core.nth.call(null,vec__10732,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__10723_SHARP_){
return datascript$parser$postwalk.call(null,p1__10723_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__10724_SHARP_){
return datascript$parser$postwalk.call(null,p1__10724_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__6748__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10739,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10741 = k10739;
switch (G__10741) {
default:
return cljs.core.get.call(null,self__.__extmap,k10739,else__7373__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.Placeholder{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = true;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10738){
var self__ = this;
var G__10738__$1 = this;
return (new cljs.core.RecordIter((0),G__10738__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10738){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10742 = cljs.core.keyword_identical_QMARK_;
var expr__10743 = k__7378__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10738),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10738){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.Placeholder(G__10738,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10735){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10736,acc10737){
var self__ = this;
var ___9683__auto____$1 = this;
return acc10737;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10737){
var self__ = this;
var ___9683__auto____$1 = this;
return acc10737;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__10740){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__10740),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10750,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10752 = (((k10750 instanceof cljs.core.Keyword))?k10750.fqn:null);
switch (G__10752) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10750,else__7373__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.Variable{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = true;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10749){
var self__ = this;
var G__10749__$1 = this;
return (new cljs.core.RecordIter((0),G__10749__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10749){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10753 = cljs.core.keyword_identical_QMARK_;
var expr__10754 = k__7378__auto__;
if(cljs.core.truth_(pred__10753.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__10754))){
return (new datascript.parser.Variable(G__10749,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10749),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10749){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__10749,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10746){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f10746),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10747,acc10748){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10747,self__.symbol,acc10748);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10748){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc10748,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__10751){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__10751),null,cljs.core.dissoc.call(null,G__10751,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10761,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10763 = (((k10761 instanceof cljs.core.Keyword))?k10761.fqn:null);
switch (G__10763) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10761,else__7373__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.SrcVar{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10760){
var self__ = this;
var G__10760__$1 = this;
return (new cljs.core.RecordIter((0),G__10760__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10760){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10764 = cljs.core.keyword_identical_QMARK_;
var expr__10765 = k__7378__auto__;
if(cljs.core.truth_(pred__10764.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__10765))){
return (new datascript.parser.SrcVar(G__10760,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10760),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10760){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__10760,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10757){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f10757),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10758,acc10759){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10758,self__.symbol,acc10759);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10759){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc10759,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__10762){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__10762),null,cljs.core.dissoc.call(null,G__10762,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10772,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10774 = k10772;
switch (G__10774) {
default:
return cljs.core.get.call(null,self__.__extmap,k10772,else__7373__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = true;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10771){
var self__ = this;
var G__10771__$1 = this;
return (new cljs.core.RecordIter((0),G__10771__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10771){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10775 = cljs.core.keyword_identical_QMARK_;
var expr__10776 = k__7378__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10771),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10771){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__10771,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10768){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10769,acc10770){
var self__ = this;
var ___9683__auto____$1 = this;
return acc10770;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10770){
var self__ = this;
var ___9683__auto____$1 = this;
return acc10770;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__10773){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__10773),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10783,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10785 = k10783;
switch (G__10785) {
default:
return cljs.core.get.call(null,self__.__extmap,k10783,else__7373__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.RulesVar{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10782){
var self__ = this;
var G__10782__$1 = this;
return (new cljs.core.RecordIter((0),G__10782__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10782){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10786 = cljs.core.keyword_identical_QMARK_;
var expr__10787 = k__7378__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10782),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10782){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.RulesVar(G__10782,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10779){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10780,acc10781){
var self__ = this;
var ___9683__auto____$1 = this;
return acc10781;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10781){
var self__ = this;
var ___9683__auto____$1 = this;
return acc10781;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__10784){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__10784),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10794,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10796 = (((k10794 instanceof cljs.core.Keyword))?k10794.fqn:null);
switch (G__10796) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10794,else__7373__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.Constant{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = true;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10793){
var self__ = this;
var G__10793__$1 = this;
return (new cljs.core.RecordIter((0),G__10793__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10793){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10797 = cljs.core.keyword_identical_QMARK_;
var expr__10798 = k__7378__auto__;
if(cljs.core.truth_(pred__10797.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__10798))){
return (new datascript.parser.Constant(G__10793,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10793),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10793){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__10793,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10790){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f10790),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10791,acc10792){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10791,self__.value,acc10792);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10792){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc10792,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__10795){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__10795),null,cljs.core.dissoc.call(null,G__10795,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10805,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10807 = (((k10805 instanceof cljs.core.Keyword))?k10805.fqn:null);
switch (G__10807) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10805,else__7373__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = true;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10804){
var self__ = this;
var G__10804__$1 = this;
return (new cljs.core.RecordIter((0),G__10804__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10804){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10808 = cljs.core.keyword_identical_QMARK_;
var expr__10809 = k__7378__auto__;
if(cljs.core.truth_(pred__10808.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__10809))){
return (new datascript.parser.PlainSymbol(G__10804,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10804),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10804){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__10804,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10801){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f10801),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10802,acc10803){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10802,self__.symbol,acc10803);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10803){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc10803,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__10806){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__10806),null,cljs.core.dissoc.call(null,G__10806,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_rules_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol.call(null,form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__6748__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
var or__6748__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__6748__auto____$1)){
return or__6748__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10816,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10818 = (((k10816 instanceof cljs.core.Keyword))?k10816.fqn:null);
switch (G__10818) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10816,else__7373__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.RuleVars{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10815){
var self__ = this;
var G__10815__$1 = this;
return (new cljs.core.RecordIter((0),G__10815__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10815){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10819 = cljs.core.keyword_identical_QMARK_;
var expr__10820 = k__7378__auto__;
if(cljs.core.truth_(pred__10819.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__10820))){
return (new datascript.parser.RuleVars(G__10815,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10819.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__10820))){
return (new datascript.parser.RuleVars(self__.required,G__10815,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10815),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10815){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__10815,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10812){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f10812),datascript.parser.postwalk.call(null,self__.free,f10812),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10813,acc10814){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10813,self__.free,datascript.parser.collect.call(null,pred10813,self__.required,acc10814));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10814){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc10814,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__10817){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__10817),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__10817),null,cljs.core.dissoc.call(null,G__10817,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__10826 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__10826,(0),null);
var rest = cljs.core.nth.call(null,vec__10826,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10833,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10835 = k10833;
switch (G__10835) {
default:
return cljs.core.get.call(null,self__.__extmap,k10833,else__7373__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10832){
var self__ = this;
var G__10832__$1 = this;
return (new cljs.core.RecordIter((0),G__10832__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10832){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10836 = cljs.core.keyword_identical_QMARK_;
var expr__10837 = k__7378__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10832),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10832){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__10832,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10829){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10830,acc10831){
var self__ = this;
var ___9683__auto____$1 = this;
return acc10831;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10831){
var self__ = this;
var ___9683__auto____$1 = this;
return acc10831;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__10834){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__10834),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10844,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10846 = (((k10844 instanceof cljs.core.Keyword))?k10844.fqn:null);
switch (G__10846) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10844,else__7373__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.BindScalar{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10843){
var self__ = this;
var G__10843__$1 = this;
return (new cljs.core.RecordIter((0),G__10843__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10843){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10847 = cljs.core.keyword_identical_QMARK_;
var expr__10848 = k__7378__auto__;
if(cljs.core.truth_(pred__10847.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__10848))){
return (new datascript.parser.BindScalar(G__10843,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10843),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10843){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__10843,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10840){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f10840),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10841,acc10842){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10841,self__.variable,acc10842);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10842){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc10842,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__10845){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__10845),null,cljs.core.dissoc.call(null,G__10845,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10855,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10857 = (((k10855 instanceof cljs.core.Keyword))?k10855.fqn:null);
switch (G__10857) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10855,else__7373__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.BindTuple{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10854){
var self__ = this;
var G__10854__$1 = this;
return (new cljs.core.RecordIter((0),G__10854__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10854){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10858 = cljs.core.keyword_identical_QMARK_;
var expr__10859 = k__7378__auto__;
if(cljs.core.truth_(pred__10858.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__10859))){
return (new datascript.parser.BindTuple(G__10854,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10854),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10854){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__10854,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10851){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f10851),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10852,acc10853){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10852,self__.bindings,acc10853);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10853){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc10853,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__10856){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__10856),null,cljs.core.dissoc.call(null,G__10856,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10866,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10868 = (((k10866 instanceof cljs.core.Keyword))?k10866.fqn:null);
switch (G__10868) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10866,else__7373__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.BindColl{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10865){
var self__ = this;
var G__10865__$1 = this;
return (new cljs.core.RecordIter((0),G__10865__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10865){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10869 = cljs.core.keyword_identical_QMARK_;
var expr__10870 = k__7378__auto__;
if(cljs.core.truth_(pred__10869.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__10870))){
return (new datascript.parser.BindColl(G__10865,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10865),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10865){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__10865,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10862){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f10862),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10863,acc10864){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10863,self__.binding,acc10864);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10864){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc10864,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__10867){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__10867),null,cljs.core.dissoc.call(null,G__10867,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4657__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var var$ = temp__4657__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__6736__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__6736__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__6736__auto__;
}
})())){
var temp__4655__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4655__auto__)){
var sub_bind = temp__4655__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__6748__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4657__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4657__auto__)){
var sub_bindings = temp__4657__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__6736__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__6736__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__6736__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__6748__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
var or__6748__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__6748__auto____$1)){
return or__6748__auto____$1;
} else {
var or__6748__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__6748__auto____$2)){
return or__6748__auto____$2;
} else {
var or__6748__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__6748__auto____$3)){
return or__6748__auto____$3;
} else {
var or__6748__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__6748__auto____$4)){
return or__6748__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__7411__auto__ = (((this$ == null))?null:this$);
var m__7412__auto__ = (datascript.parser._find_vars[goog.typeOf(x__7411__auto__)]);
if(!((m__7412__auto__ == null))){
return m__7412__auto__.call(null,this$);
} else {
var m__7412__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__7412__auto____$1 == null))){
return m__7412__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10877,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10879 = (((k10877 instanceof cljs.core.Keyword))?k10877.fqn:null);
switch (G__10879) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10877,else__7373__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.Aggregate{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10876){
var self__ = this;
var G__10876__$1 = this;
return (new cljs.core.RecordIter((0),G__10876__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10876){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10880 = cljs.core.keyword_identical_QMARK_;
var expr__10881 = k__7378__auto__;
if(cljs.core.truth_(pred__10880.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10881))){
return (new datascript.parser.Aggregate(G__10876,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10880.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__10881))){
return (new datascript.parser.Aggregate(self__.fn,G__10876,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10876),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10876){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__10876,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10873){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f10873),datascript.parser.postwalk.call(null,self__.args,f10873),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10874,acc10875){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10874,self__.args,datascript.parser.collect.call(null,pred10874,self__.fn,acc10875));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10875){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc10875,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__10878){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10878),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__10878),null,cljs.core.dissoc.call(null,G__10878,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10888,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10890 = (((k10888 instanceof cljs.core.Keyword))?k10888.fqn:null);
switch (G__10890) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10888,else__7373__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.Pull{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10887){
var self__ = this;
var G__10887__$1 = this;
return (new cljs.core.RecordIter((0),G__10887__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10887){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10891 = cljs.core.keyword_identical_QMARK_;
var expr__10892 = k__7378__auto__;
if(cljs.core.truth_(pred__10891.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__10892))){
return (new datascript.parser.Pull(G__10887,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10891.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__10892))){
return (new datascript.parser.Pull(self__.source,G__10887,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10891.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__10892))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__10887,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10887),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10887){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__10887,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10884){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f10884),datascript.parser.postwalk.call(null,self__.variable,f10884),datascript.parser.postwalk.call(null,self__.pattern,f10884),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10885,acc10886){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10885,self__.pattern,datascript.parser.collect.call(null,pred10885,self__.variable,datascript.parser.collect.call(null,pred10885,self__.source,acc10886)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10886){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc10886,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__10889){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__10889),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__10889),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__10889),null,cljs.core.dissoc.call(null,G__10889,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__7411__auto__ = (((this$ == null))?null:this$);
var m__7412__auto__ = (datascript.parser.find_elements[goog.typeOf(x__7411__auto__)]);
if(!((m__7412__auto__ == null))){
return m__7412__auto__.call(null,this$);
} else {
var m__7412__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__7412__auto____$1 == null))){
return m__7412__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10899,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10901 = (((k10899 instanceof cljs.core.Keyword))?k10899.fqn:null);
switch (G__10901) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10899,else__7373__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.FindRel{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10898){
var self__ = this;
var G__10898__$1 = this;
return (new cljs.core.RecordIter((0),G__10898__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10898){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10902 = cljs.core.keyword_identical_QMARK_;
var expr__10903 = k__7378__auto__;
if(cljs.core.truth_(pred__10902.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__10903))){
return (new datascript.parser.FindRel(G__10898,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10898),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10898){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__10898,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10895){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f10895),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10896,acc10897){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10896,self__.elements,acc10897);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10897){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc10897,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__10900){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__10900),null,cljs.core.dissoc.call(null,G__10900,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10910,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10912 = (((k10910 instanceof cljs.core.Keyword))?k10910.fqn:null);
switch (G__10912) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10910,else__7373__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.FindColl{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10909){
var self__ = this;
var G__10909__$1 = this;
return (new cljs.core.RecordIter((0),G__10909__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10909){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10913 = cljs.core.keyword_identical_QMARK_;
var expr__10914 = k__7378__auto__;
if(cljs.core.truth_(pred__10913.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__10914))){
return (new datascript.parser.FindColl(G__10909,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10909),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10909){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__10909,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10906){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f10906),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10907,acc10908){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10907,self__.element,acc10908);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10908){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc10908,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__10911){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__10911),null,cljs.core.dissoc.call(null,G__10911,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10921,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10923 = (((k10921 instanceof cljs.core.Keyword))?k10921.fqn:null);
switch (G__10923) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10921,else__7373__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.FindScalar{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10920){
var self__ = this;
var G__10920__$1 = this;
return (new cljs.core.RecordIter((0),G__10920__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10920){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10924 = cljs.core.keyword_identical_QMARK_;
var expr__10925 = k__7378__auto__;
if(cljs.core.truth_(pred__10924.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__10925))){
return (new datascript.parser.FindScalar(G__10920,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10920),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10920){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__10920,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10917){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f10917),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10918,acc10919){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10918,self__.element,acc10919);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10919){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc10919,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__10922){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__10922),null,cljs.core.dissoc.call(null,G__10922,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10932,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10934 = (((k10932 instanceof cljs.core.Keyword))?k10932.fqn:null);
switch (G__10934) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10932,else__7373__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.FindTuple{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10931){
var self__ = this;
var G__10931__$1 = this;
return (new cljs.core.RecordIter((0),G__10931__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10931){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10935 = cljs.core.keyword_identical_QMARK_;
var expr__10936 = k__7378__auto__;
if(cljs.core.truth_(pred__10935.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__10936))){
return (new datascript.parser.FindTuple(G__10931,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10931),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10931){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__10931,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10928){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f10928),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10929,acc10930){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10929,self__.elements,acc10930);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10930){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc10930,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__10933){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__10933),null,cljs.core.dissoc.call(null,G__10933,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__10942 = form;
var seq__10943 = cljs.core.seq.call(null,vec__10942);
var first__10944 = cljs.core.first.call(null,seq__10943);
var seq__10943__$1 = cljs.core.next.call(null,seq__10943);
var fn = first__10944;
var args = seq__10943__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__6736__auto__ = fn_STAR_;
if(cljs.core.truth_(and__6736__auto__)){
return args_STAR_;
} else {
return and__6736__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__10948 = form;
var seq__10949 = cljs.core.seq.call(null,vec__10948);
var first__10950 = cljs.core.first.call(null,seq__10949);
var seq__10949__$1 = cljs.core.next.call(null,seq__10949);
var _ = first__10950;
var first__10950__$1 = cljs.core.first.call(null,seq__10949__$1);
var seq__10949__$2 = cljs.core.next.call(null,seq__10949__$1);
var fn = first__10950__$1;
var args = seq__10949__$2;
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__6736__auto__ = fn_STAR_;
if(cljs.core.truth_(and__6736__auto__)){
return args_STAR_;
} else {
return and__6736__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__10954 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__10954,(0),null);
var pattern = cljs.core.nth.call(null,vec__10954,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__6748__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
var or__6748__auto____$1 = datascript.parser.parse_plain_variable.call(null,pattern);
if(cljs.core.truth_(or__6748__auto____$1)){
return or__6748__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__6736__auto__ = src_STAR_;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__6736__auto____$1)){
return pattern_STAR_;
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__6748__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
var or__6748__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__6748__auto____$1)){
return or__6748__auto____$1;
} else {
var or__6748__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__6748__auto____$2)){
return or__6748__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__10958 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
if((G__10958 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__10958,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__10960 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
if((G__10960 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__10960,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__10962 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
if((G__10962 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__10962,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__10964 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
if((G__10964 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__10964,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__6748__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
var or__6748__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__6748__auto____$1)){
return or__6748__auto____$1;
} else {
var or__6748__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__6748__auto____$2)){
return or__6748__auto____$2;
} else {
var or__6748__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__6748__auto____$3)){
return or__6748__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__6748__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4655__auto__ = (function (){var or__6748__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
var or__6748__auto____$1 = datascript.parser.parse_rules_var.call(null,form);
if(cljs.core.truth_(or__6748__auto____$1)){
return or__6748__auto____$1;
} else {
return datascript.parser.parse_plain_variable.call(null,form);
}
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__6748__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10969,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10971 = (((k10969 instanceof cljs.core.Keyword))?k10969.fqn:null);
switch (G__10971) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10969,else__7373__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.Pattern{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10968){
var self__ = this;
var G__10968__$1 = this;
return (new cljs.core.RecordIter((0),G__10968__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10968){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10972 = cljs.core.keyword_identical_QMARK_;
var expr__10973 = k__7378__auto__;
if(cljs.core.truth_(pred__10972.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__10973))){
return (new datascript.parser.Pattern(G__10968,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10972.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__10973))){
return (new datascript.parser.Pattern(self__.source,G__10968,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10968),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10968){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__10968,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10965){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f10965),datascript.parser.postwalk.call(null,self__.pattern,f10965),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10966,acc10967){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10966,self__.pattern,datascript.parser.collect.call(null,pred10966,self__.source,acc10967));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10967){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc10967,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__10970){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__10970),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__10970),null,cljs.core.dissoc.call(null,G__10970,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10980,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10982 = (((k10980 instanceof cljs.core.Keyword))?k10980.fqn:null);
switch (G__10982) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10980,else__7373__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.Predicate{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10979){
var self__ = this;
var G__10979__$1 = this;
return (new cljs.core.RecordIter((0),G__10979__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10979){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10983 = cljs.core.keyword_identical_QMARK_;
var expr__10984 = k__7378__auto__;
if(cljs.core.truth_(pred__10983.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10984))){
return (new datascript.parser.Predicate(G__10979,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10983.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__10984))){
return (new datascript.parser.Predicate(self__.fn,G__10979,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10979),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10979){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__10979,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10976){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f10976),datascript.parser.postwalk.call(null,self__.args,f10976),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10977,acc10978){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10977,self__.args,datascript.parser.collect.call(null,pred10977,self__.fn,acc10978));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10978){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc10978,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__10981){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10981),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__10981),null,cljs.core.dissoc.call(null,G__10981,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k10991,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__10993 = (((k10991 instanceof cljs.core.Keyword))?k10991.fqn:null);
switch (G__10993) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10991,else__7373__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.Function{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = true;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10990){
var self__ = this;
var G__10990__$1 = this;
return (new cljs.core.RecordIter((0),G__10990__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__10990){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__10994 = cljs.core.keyword_identical_QMARK_;
var expr__10995 = k__7378__auto__;
if(cljs.core.truth_(pred__10994.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10995))){
return (new datascript.parser.Function(G__10990,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10994.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__10995))){
return (new datascript.parser.Function(self__.fn,G__10990,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10994.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__10995))){
return (new datascript.parser.Function(self__.fn,self__.args,G__10990,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__10990),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__10990){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__10990,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10987){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f10987),datascript.parser.postwalk.call(null,self__.args,f10987),datascript.parser.postwalk.call(null,self__.binding,f10987),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10988,acc10989){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10988,self__.binding,datascript.parser.collect.call(null,pred10988,self__.args,datascript.parser.collect.call(null,pred10988,self__.fn,acc10989)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc10989){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc10989,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__10992){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10992),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__10992),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__10992),null,cljs.core.dissoc.call(null,G__10992,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k11002,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__11004 = (((k11002 instanceof cljs.core.Keyword))?k11002.fqn:null);
switch (G__11004) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11002,else__7373__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11001){
var self__ = this;
var G__11001__$1 = this;
return (new cljs.core.RecordIter((0),G__11001__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__11001){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__11005 = cljs.core.keyword_identical_QMARK_;
var expr__11006 = k__7378__auto__;
if(cljs.core.truth_(pred__11005.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__11006))){
return (new datascript.parser.RuleExpr(G__11001,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11005.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__11006))){
return (new datascript.parser.RuleExpr(self__.source,G__11001,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11005.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__11006))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__11001,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__11001),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__11001){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__11001,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f10998){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f10998),datascript.parser.postwalk.call(null,self__.name,f10998),datascript.parser.postwalk.call(null,self__.args,f10998),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred10999,acc11000){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred10999,self__.args,datascript.parser.collect.call(null,pred10999,self__.name,datascript.parser.collect.call(null,pred10999,self__.source,acc11000)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc11000){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc11000,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__11003){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__11003),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__11003),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__11003),null,cljs.core.dissoc.call(null,G__11003,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k11013,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__11015 = (((k11013 instanceof cljs.core.Keyword))?k11013.fqn:null);
switch (G__11015) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11013,else__7373__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.Not{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = true;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11012){
var self__ = this;
var G__11012__$1 = this;
return (new cljs.core.RecordIter((0),G__11012__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__11012){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__11016 = cljs.core.keyword_identical_QMARK_;
var expr__11017 = k__7378__auto__;
if(cljs.core.truth_(pred__11016.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__11017))){
return (new datascript.parser.Not(G__11012,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11016.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__11017))){
return (new datascript.parser.Not(self__.source,G__11012,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11016.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__11017))){
return (new datascript.parser.Not(self__.source,self__.vars,G__11012,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__11012),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__11012){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__11012,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f11009){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f11009),datascript.parser.postwalk.call(null,self__.vars,f11009),datascript.parser.postwalk.call(null,self__.clauses,f11009),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred11010,acc11011){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred11010,self__.clauses,datascript.parser.collect.call(null,pred11010,self__.vars,datascript.parser.collect.call(null,pred11010,self__.source,acc11011)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc11011){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc11011,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__11014){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__11014),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__11014),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__11014),null,cljs.core.dissoc.call(null,G__11014,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k11024,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__11026 = (((k11024 instanceof cljs.core.Keyword))?k11024.fqn:null);
switch (G__11026) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11024,else__7373__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.Or{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = true;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11023){
var self__ = this;
var G__11023__$1 = this;
return (new cljs.core.RecordIter((0),G__11023__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__11023){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__11027 = cljs.core.keyword_identical_QMARK_;
var expr__11028 = k__7378__auto__;
if(cljs.core.truth_(pred__11027.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__11028))){
return (new datascript.parser.Or(G__11023,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11027.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__11028))){
return (new datascript.parser.Or(self__.source,G__11023,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11027.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__11028))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__11023,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__11023),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__11023){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__11023,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f11020){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f11020),datascript.parser.postwalk.call(null,self__.rule_vars,f11020),datascript.parser.postwalk.call(null,self__.clauses,f11020),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred11021,acc11022){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred11021,self__.clauses,datascript.parser.collect.call(null,pred11021,self__.rule_vars,datascript.parser.collect.call(null,pred11021,self__.source,acc11022)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc11022){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc11022,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__11025){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__11025),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__11025),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__11025),null,cljs.core.dissoc.call(null,G__11025,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k11035,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__11037 = (((k11035 instanceof cljs.core.Keyword))?k11035.fqn:null);
switch (G__11037) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11035,else__7373__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.And{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = true;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11034){
var self__ = this;
var G__11034__$1 = this;
return (new cljs.core.RecordIter((0),G__11034__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__11034){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__11038 = cljs.core.keyword_identical_QMARK_;
var expr__11039 = k__7378__auto__;
if(cljs.core.truth_(pred__11038.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__11039))){
return (new datascript.parser.And(G__11034,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__11034),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__11034){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__11034,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f11031){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f11031),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred11032,acc11033){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred11032,self__.clauses,acc11033);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc11033){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc11033,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__11036){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__11036),null,cljs.core.dissoc.call(null,G__11036,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__6748__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
var or__6748__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__6748__auto____$1)){
return or__6748__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4655__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4655__auto__)){
var source_STAR_ = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__11045 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__11045,(0),null);
var next_form = cljs.core.nth.call(null,vec__11045,(1),null);
var temp__4657__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4657__auto____$1)){
var pattern_STAR_ = temp__4657__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__11051 = form;
var seq__11052 = cljs.core.seq.call(null,vec__11051);
var first__11053 = cljs.core.first.call(null,seq__11052);
var seq__11052__$1 = cljs.core.next.call(null,seq__11052);
var fn = first__11053;
var args = seq__11052__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__6748__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__6736__auto__ = fn_STAR_;
if(cljs.core.truth_(and__6736__auto__)){
return args_STAR_;
} else {
return and__6736__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4657__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__11057 = temp__4657__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__11057,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__11057,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__11066 = form;
var call = cljs.core.nth.call(null,vec__11066,(0),null);
var binding = cljs.core.nth.call(null,vec__11066,(1),null);
var temp__4657__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__11069 = temp__4657__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__11069,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__11069,(1),null);
var temp__4657__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4657__auto____$1)){
var binding_STAR_ = temp__4657__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__11078 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__11078,(0),null);
var next_form = cljs.core.nth.call(null,vec__11078,(1),null);
var vec__11081 = next_form;
var seq__11082 = cljs.core.seq.call(null,vec__11081);
var first__11083 = cljs.core.first.call(null,seq__11082);
var seq__11082__$1 = cljs.core.next.call(null,seq__11082);
var name = first__11083;
var args = seq__11082__$1;
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_11086 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_11086)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_11086)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__11093 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__11093,(0),null);
var next_form = cljs.core.nth.call(null,vec__11093,(1),null);
var vec__11096 = next_form;
var seq__11097 = cljs.core.seq.call(null,vec__11096);
var first__11098 = cljs.core.first.call(null,seq__11097);
var seq__11097__$1 = cljs.core.next.call(null,seq__11097);
var sym = first__11098;
var clauses = seq__11097__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4655__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__4655__auto__)){
var clauses_STAR_ = temp__4655__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__11105 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__11105,(0),null);
var next_form = cljs.core.nth.call(null,vec__11105,(1),null);
var vec__11108 = next_form;
var seq__11109 = cljs.core.seq.call(null,vec__11108);
var first__11110 = cljs.core.first.call(null,seq__11109);
var seq__11109__$1 = cljs.core.next.call(null,seq__11109);
var sym = first__11110;
var first__11110__$1 = cljs.core.first.call(null,seq__11109__$1);
var seq__11109__$2 = cljs.core.next.call(null,seq__11109__$1);
var vars = first__11110__$1;
var clauses = seq__11109__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__6736__auto__ = vars_STAR_;
if(cljs.core.truth_(and__6736__auto__)){
return clauses_STAR_;
} else {
return and__6736__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__11119 = clause;
var map__11119__$1 = ((((!((map__11119 == null)))?((((map__11119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11119):map__11119);
var map__11120 = cljs.core.get.call(null,map__11119__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__11120__$1 = ((((!((map__11120 == null)))?((((map__11120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11120):map__11120);
var required = cljs.core.get.call(null,map__11120__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__11120__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__11119__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__11123_11127 = cljs.core.seq.call(null,clauses);
var chunk__11124_11128 = null;
var count__11125_11129 = (0);
var i__11126_11130 = (0);
while(true){
if((i__11126_11130 < count__11125_11129)){
var clause_11131__$1 = cljs.core._nth.call(null,chunk__11124_11128,i__11126_11130);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_11131__$1], null),form);

var G__11132 = seq__11123_11127;
var G__11133 = chunk__11124_11128;
var G__11134 = count__11125_11129;
var G__11135 = (i__11126_11130 + (1));
seq__11123_11127 = G__11132;
chunk__11124_11128 = G__11133;
count__11125_11129 = G__11134;
i__11126_11130 = G__11135;
continue;
} else {
var temp__4657__auto___11136 = cljs.core.seq.call(null,seq__11123_11127);
if(temp__4657__auto___11136){
var seq__11123_11137__$1 = temp__4657__auto___11136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11123_11137__$1)){
var c__7559__auto___11138 = cljs.core.chunk_first.call(null,seq__11123_11137__$1);
var G__11139 = cljs.core.chunk_rest.call(null,seq__11123_11137__$1);
var G__11140 = c__7559__auto___11138;
var G__11141 = cljs.core.count.call(null,c__7559__auto___11138);
var G__11142 = (0);
seq__11123_11127 = G__11139;
chunk__11124_11128 = G__11140;
count__11125_11129 = G__11141;
i__11126_11130 = G__11142;
continue;
} else {
var clause_11143__$1 = cljs.core.first.call(null,seq__11123_11137__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_11143__$1], null),form);

var G__11144 = cljs.core.next.call(null,seq__11123_11137__$1);
var G__11145 = null;
var G__11146 = (0);
var G__11147 = (0);
seq__11123_11127 = G__11144;
chunk__11124_11128 = G__11145;
count__11125_11129 = G__11146;
i__11126_11130 = G__11147;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__11154 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__11154,(0),null);
var next_form = cljs.core.nth.call(null,vec__11154,(1),null);
var vec__11157 = next_form;
var seq__11158 = cljs.core.seq.call(null,vec__11157);
var first__11159 = cljs.core.first.call(null,seq__11158);
var seq__11158__$1 = cljs.core.next.call(null,seq__11158);
var sym = first__11159;
var clauses = seq__11158__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4655__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4655__auto__)){
var clauses_STAR_ = temp__4655__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__11166 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__11166,(0),null);
var next_form = cljs.core.nth.call(null,vec__11166,(1),null);
var vec__11169 = next_form;
var seq__11170 = cljs.core.seq.call(null,vec__11169);
var first__11171 = cljs.core.first.call(null,seq__11170);
var seq__11170__$1 = cljs.core.next.call(null,seq__11170);
var sym = first__11171;
var first__11171__$1 = cljs.core.first.call(null,seq__11170__$1);
var seq__11170__$2 = cljs.core.next.call(null,seq__11170__$1);
var vars = first__11171__$1;
var clauses = seq__11170__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__6736__auto__ = vars_STAR_;
if(cljs.core.truth_(and__6736__auto__)){
return clauses_STAR_;
} else {
return and__6736__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__6748__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
var or__6748__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__6748__auto____$1)){
return or__6748__auto____$1;
} else {
var or__6748__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__6748__auto____$2)){
return or__6748__auto____$2;
} else {
var or__6748__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__6748__auto____$3)){
return or__6748__auto____$3;
} else {
var or__6748__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__6748__auto____$4)){
return or__6748__auto____$4;
} else {
var or__6748__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__6748__auto____$5)){
return or__6748__auto____$5;
} else {
var or__6748__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__6748__auto____$6)){
return or__6748__auto____$6;
} else {
var or__6748__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__6748__auto____$7)){
return or__6748__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__6748__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k11177,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__11179 = (((k11177 instanceof cljs.core.Keyword))?k11177.fqn:null);
switch (G__11179) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11177,else__7373__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11176){
var self__ = this;
var G__11176__$1 = this;
return (new cljs.core.RecordIter((0),G__11176__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__11176){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__11180 = cljs.core.keyword_identical_QMARK_;
var expr__11181 = k__7378__auto__;
if(cljs.core.truth_(pred__11180.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__11181))){
return (new datascript.parser.RuleBranch(G__11176,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11180.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__11181))){
return (new datascript.parser.RuleBranch(self__.vars,G__11176,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__11176),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__11176){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__11176,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f11173){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f11173),datascript.parser.postwalk.call(null,self__.clauses,f11173),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred11174,acc11175){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred11174,self__.clauses,datascript.parser.collect.call(null,pred11174,self__.vars,acc11175));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc11175){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc11175,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__11178){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__11178),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__11178),null,cljs.core.dissoc.call(null,G__11178,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k11188,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__11190 = (((k11188 instanceof cljs.core.Keyword))?k11188.fqn:null);
switch (G__11190) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11188,else__7373__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.Rule{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = true;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11187){
var self__ = this;
var G__11187__$1 = this;
return (new cljs.core.RecordIter((0),G__11187__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__11187){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__11191 = cljs.core.keyword_identical_QMARK_;
var expr__11192 = k__7378__auto__;
if(cljs.core.truth_(pred__11191.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__11192))){
return (new datascript.parser.Rule(G__11187,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11191.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__11192))){
return (new datascript.parser.Rule(self__.name,G__11187,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__11187),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__11187){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__11187,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f11184){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f11184),datascript.parser.postwalk.call(null,self__.branches,f11184),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred11185,acc11186){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred11185,self__.branches,datascript.parser.collect.call(null,pred11185,self__.name,acc11186));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc11186){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc11186,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__11189){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__11189),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__11189),null,cljs.core.dissoc.call(null,G__11189,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__11195_SHARP_){
return (p1__11195_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__11196_SHARP_){
return (p1__11196_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__11203 = form;
var seq__11204 = cljs.core.seq.call(null,vec__11203);
var first__11205 = cljs.core.first.call(null,seq__11204);
var seq__11204__$1 = cljs.core.next.call(null,seq__11204);
var head = first__11205;
var clauses = seq__11204__$1;
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__11206 = head;
var seq__11207 = cljs.core.seq.call(null,vec__11206);
var first__11208 = cljs.core.first.call(null,seq__11207);
var seq__11207__$1 = cljs.core.next.call(null,seq__11207);
var name = first__11208;
var vars = seq__11207__$1;
var name_STAR_ = (function (){var or__6748__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__6748__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__11215 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__11217 = null;
var count__11218 = (0);
var i__11219 = (0);
while(true){
if((i__11219 < count__11218)){
var b = cljs.core._nth.call(null,chunk__11217,i__11219);
var vars_11221 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_11221))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_11221)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__11222 = seq__11215;
var G__11223 = chunk__11217;
var G__11224 = count__11218;
var G__11225 = (i__11219 + (1));
seq__11215 = G__11222;
chunk__11217 = G__11223;
count__11218 = G__11224;
i__11219 = G__11225;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11215);
if(temp__4657__auto__){
var seq__11215__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11215__$1)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,seq__11215__$1);
var G__11226 = cljs.core.chunk_rest.call(null,seq__11215__$1);
var G__11227 = c__7559__auto__;
var G__11228 = cljs.core.count.call(null,c__7559__auto__);
var G__11229 = (0);
seq__11215 = G__11226;
chunk__11217 = G__11227;
count__11218 = G__11228;
i__11219 = G__11229;
continue;
} else {
var b = cljs.core.first.call(null,seq__11215__$1);
var vars_11230 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_11230))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_11230)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__11231 = cljs.core.next.call(null,seq__11215__$1);
var G__11232 = null;
var G__11233 = (0);
var G__11234 = (0);
seq__11215 = G__11231;
chunk__11217 = G__11232;
count__11218 = G__11233;
i__11219 = G__11234;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__7528__auto__ = (function datascript$parser$parse_rules_$_iter__11252(s__11253){
return (new cljs.core.LazySeq(null,(function (){
var s__11253__$1 = s__11253;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11253__$1);
if(temp__4657__auto__){
var s__11253__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11253__$2)){
var c__7526__auto__ = cljs.core.chunk_first.call(null,s__11253__$2);
var size__7527__auto__ = cljs.core.count.call(null,c__7526__auto__);
var b__11255 = cljs.core.chunk_buffer.call(null,size__7527__auto__);
if((function (){var i__11254 = (0);
while(true){
if((i__11254 < size__7527__auto__)){
var vec__11262 = cljs.core._nth.call(null,c__7526__auto__,i__11254);
var name = cljs.core.nth.call(null,vec__11262,(0),null);
var branches = cljs.core.nth.call(null,vec__11262,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__11254,vec__11262,name,branches,c__7526__auto__,size__7527__auto__,b__11255,s__11253__$2,temp__4657__auto__){
return (function (p1__11235_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__11235_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__11235_SHARP_),null,null,null));
});})(i__11254,vec__11262,name,branches,c__7526__auto__,size__7527__auto__,b__11255,s__11253__$2,temp__4657__auto__))
,branches);
cljs.core.chunk_append.call(null,b__11255,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__11268 = (i__11254 + (1));
i__11254 = G__11268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11255),datascript$parser$parse_rules_$_iter__11252.call(null,cljs.core.chunk_rest.call(null,s__11253__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11255),null);
}
} else {
var vec__11265 = cljs.core.first.call(null,s__11253__$2);
var name = cljs.core.nth.call(null,vec__11265,(0),null);
var branches = cljs.core.nth.call(null,vec__11265,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__11265,name,branches,s__11253__$2,temp__4657__auto__){
return (function (p1__11235_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__11235_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__11235_SHARP_),null,null,null));
});})(vec__11265,name,branches,s__11253__$2,temp__4657__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__11252.call(null,cljs.core.rest.call(null,s__11253__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7528__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7370__auto__,k__7371__auto__){
var self__ = this;
var this__7370__auto____$1 = this;
return cljs.core._lookup.call(null,this__7370__auto____$1,k__7371__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7372__auto__,k11273,else__7373__auto__){
var self__ = this;
var this__7372__auto____$1 = this;
var G__11275 = (((k11273 instanceof cljs.core.Keyword))?k11273.fqn:null);
switch (G__11275) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11273,else__7373__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7384__auto__,writer__7385__auto__,opts__7386__auto__){
var self__ = this;
var this__7384__auto____$1 = this;
var pr_pair__7387__auto__ = ((function (this__7384__auto____$1){
return (function (keyval__7388__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,cljs.core.pr_writer,""," ","",opts__7386__auto__,keyval__7388__auto__);
});})(this__7384__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7385__auto__,pr_pair__7387__auto__,"#datascript.parser.Query{",", ","}",opts__7386__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = true;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11272){
var self__ = this;
var G__11272__$1 = this;
return (new cljs.core.RecordIter((0),G__11272__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7368__auto__){
var self__ = this;
var this__7368__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7374__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7365__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
var h__7183__auto__ = self__.__hash;
if(!((h__7183__auto__ == null))){
return h__7183__auto__;
} else {
var h__7183__auto____$1 = cljs.core.hash_imap.call(null,this__7365__auto____$1);
self__.__hash = h__7183__auto____$1;

return h__7183__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7366__auto__,other__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6736__auto__ = other__7367__auto__;
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = (this__7366__auto____$1.constructor === other__7367__auto__.constructor);
if(and__6736__auto____$1){
return cljs.core.equiv_map.call(null,this__7366__auto____$1,other__7367__auto__);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7379__auto__,k__7380__auto__){
var self__ = this;
var this__7379__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__7380__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7379__auto____$1),self__.__meta),k__7380__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7380__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7377__auto__,k__7378__auto__,G__11272){
var self__ = this;
var this__7377__auto____$1 = this;
var pred__11276 = cljs.core.keyword_identical_QMARK_;
var expr__11277 = k__7378__auto__;
if(cljs.core.truth_(pred__11276.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__11277))){
return (new datascript.parser.Query(G__11272,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11276.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__11277))){
return (new datascript.parser.Query(self__.find,G__11272,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11276.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__11277))){
return (new datascript.parser.Query(self__.find,self__.with$,G__11272,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11276.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__11277))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__11272,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7378__auto__,G__11272),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7382__auto__){
var self__ = this;
var this__7382__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7369__auto__,G__11272){
var self__ = this;
var this__7369__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__11272,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7375__auto__,entry__7376__auto__){
var self__ = this;
var this__7375__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7376__auto__)){
return cljs.core._assoc.call(null,this__7375__auto____$1,cljs.core._nth.call(null,entry__7376__auto__,(0)),cljs.core._nth.call(null,entry__7376__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7375__auto____$1,entry__7376__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__9680__auto__,f11269){
var self__ = this;
var this__9680__auto____$1 = this;
var new__9681__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f11269),datascript.parser.postwalk.call(null,self__.with$,f11269),datascript.parser.postwalk.call(null,self__.in$,f11269),datascript.parser.postwalk.call(null,self__.where,f11269),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__9680__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__9682__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__9681__auto__,meta__9682__auto__);
} else {
return new__9681__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___9683__auto__,pred11270,acc11271){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect.call(null,pred11270,self__.where,datascript.parser.collect.call(null,pred11270,self__.in$,datascript.parser.collect.call(null,pred11270,self__.with$,datascript.parser.collect.call(null,pred11270,self__.find,acc11271))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___9683__auto__,acc11271){
var self__ = this;
var ___9683__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc11271,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__7404__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__7404__auto__,writer__7405__auto__){
return cljs.core._write.call(null,writer__7405__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__11274){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__11274),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__11274),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__11274),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__11274),null,cljs.core.dissoc.call(null,G__11274,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4655__auto__)){
var q = temp__4655__auto__;
if((q instanceof cljs.core.Keyword)){
var G__11280 = parsed;
var G__11281 = q;
var G__11282 = cljs.core.next.call(null,qs);
parsed = G__11280;
key = G__11281;
qs = G__11282;
continue;
} else {
var G__11283 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__11284 = key;
var G__11285 = cljs.core.next.call(null,qs);
parsed = G__11283;
key = G__11284;
qs = G__11285;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_11292 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_11293 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_11294 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_11295 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_11296 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_11292,with_vars_11293),clojure.set.union.call(null,where_vars_11295,in_vars_11294));
var shared_11297 = clojure.set.intersection.call(null,find_vars_11292,with_vars_11293);
if(cljs.core.empty_QMARK_.call(null,unknown_11296)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_11296)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_11296,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_11297)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_11297)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_11297,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_11298 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_11299 = datascript.parser.collect.call(null,((function (in_vars_11298){
return (function (p1__11286_SHARP_){
return (p1__11286_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_11298))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_11300 = datascript.parser.collect.call(null,((function (in_vars_11298,in_sources_11299){
return (function (p1__11287_SHARP_){
return (p1__11287_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_11298,in_sources_11299))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__6736__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_11298);
if(cljs.core.truth_(and__6736__auto__)){
var and__6736__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_11299);
if(cljs.core.truth_(and__6736__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_11300);
} else {
return and__6736__auto____$1;
}
} else {
return and__6736__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_11301 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_11301))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_11302 = datascript.parser.collect.call(null,(function (p1__11288_SHARP_){
return (p1__11288_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_11303 = datascript.parser.collect.call(null,((function (in_sources_11302){
return (function (p1__11289_SHARP_){
return (p1__11289_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_11302))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_11304 = clojure.set.difference.call(null,where_sources_11303,in_sources_11302);
if(cljs.core.empty_QMARK_.call(null,unknown_11304)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_11304)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_11304,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__11290_SHARP_){
return (p1__11290_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__11291_SHARP_){
return (p1__11291_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4657__auto__)){
var with$ = temp__4657__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map