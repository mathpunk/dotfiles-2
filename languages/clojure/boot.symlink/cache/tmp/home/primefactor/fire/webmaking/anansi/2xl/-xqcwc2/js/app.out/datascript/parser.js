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
var x__7410__auto__ = (((_ == null))?null:_);
var m__7411__auto__ = (datascript.parser._collect[goog.typeOf(x__7410__auto__)]);
if(!((m__7411__auto__ == null))){
return m__7411__auto__.call(null,_,pred,acc);
} else {
var m__7411__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__7411__auto____$1 == null))){
return m__7411__auto____$1.call(null,_,pred,acc);
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
var x__7410__auto__ = (((_ == null))?null:_);
var m__7411__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__7410__auto__)]);
if(!((m__7411__auto__ == null))){
return m__7411__auto__.call(null,_,acc);
} else {
var m__7411__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__7411__auto____$1 == null))){
return m__7411__auto____$1.call(null,_,acc);
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
var x__7410__auto__ = (((_ == null))?null:_);
var m__7411__auto__ = (datascript.parser._postwalk[goog.typeOf(x__7410__auto__)]);
if(!((m__7411__auto__ == null))){
return m__7411__auto__.call(null,_,f);
} else {
var m__7411__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__7411__auto____$1 == null))){
return m__7411__auto____$1.call(null,_,f);
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
return cljs.core.reduce.call(null,(function (p1__14851_SHARP_,p2__14850_SHARP_){
var temp__4655__auto__ = parse_el.call(null,p2__14850_SHARP_);
if(cljs.core.truth_(temp__4655__auto__)){
var parsed = temp__4655__auto__;
return cljs.core.conj.call(null,p1__14851_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__7829__auto__ = [];
var len__7822__auto___14860 = arguments.length;
var i__7823__auto___14861 = (0);
while(true){
if((i__7823__auto___14861 < len__7822__auto___14860)){
args__7829__auto__.push((arguments[i__7823__auto___14861]));

var G__14862 = (i__7823__auto___14861 + (1));
i__7823__auto___14861 = G__14862;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((2) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((2)),(0),null)):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7830__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__14855){
var vec__14856 = p__14855;
var acc = cljs.core.nth.call(null,vec__14856,(0),null);
var acc__$1 = (function (){var or__6747__auto__ = acc;
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
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
return cljs.core.reduce.call(null,((function (acc__$1,vec__14856,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__14856,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq14852){
var G__14853 = cljs.core.first.call(null,seq14852);
var seq14852__$1 = cljs.core.next.call(null,seq14852);
var G__14854 = cljs.core.first.call(null,seq14852__$1);
var seq14852__$2 = cljs.core.next.call(null,seq14852__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__14853,G__14854,seq14852__$2);
});

datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__6747__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__6747__auto__){
return or__6747__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__14871){
var vec__14872 = p__14871;
var k = cljs.core.nth.call(null,vec__14872,(0),null);
var v = cljs.core.nth.call(null,vec__14872,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__14863_SHARP_){
return datascript$parser$postwalk.call(null,p1__14863_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__14864_SHARP_){
return datascript$parser$postwalk.call(null,p1__14864_SHARP_,f);
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
var or__6747__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
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
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k14879,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__14881 = k14879;
switch (G__14881) {
default:
return cljs.core.get.call(null,self__.__extmap,k14879,else__7372__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.Placeholder{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = true;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14878){
var self__ = this;
var G__14878__$1 = this;
return (new cljs.core.RecordIter((0),G__14878__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__14878){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__14882 = cljs.core.keyword_identical_QMARK_;
var expr__14883 = k__7377__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__14878),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__14878){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.Placeholder(G__14878,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f14875){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred14876,acc14877){
var self__ = this;
var ___13823__auto____$1 = this;
return acc14877;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc14877){
var self__ = this;
var ___13823__auto____$1 = this;
return acc14877;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__14880){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__14880),null));
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
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k14890,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__14892 = (((k14890 instanceof cljs.core.Keyword))?k14890.fqn:null);
switch (G__14892) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14890,else__7372__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.Variable{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = true;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14889){
var self__ = this;
var G__14889__$1 = this;
return (new cljs.core.RecordIter((0),G__14889__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__14889){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__14893 = cljs.core.keyword_identical_QMARK_;
var expr__14894 = k__7377__auto__;
if(cljs.core.truth_(pred__14893.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__14894))){
return (new datascript.parser.Variable(G__14889,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__14889),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__14889){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__14889,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f14886){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f14886),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred14887,acc14888){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred14887,self__.symbol,acc14888);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc14888){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc14888,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__14891){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__14891),null,cljs.core.dissoc.call(null,G__14891,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
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
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k14901,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__14903 = (((k14901 instanceof cljs.core.Keyword))?k14901.fqn:null);
switch (G__14903) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14901,else__7372__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.SrcVar{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14900){
var self__ = this;
var G__14900__$1 = this;
return (new cljs.core.RecordIter((0),G__14900__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__14900){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__14904 = cljs.core.keyword_identical_QMARK_;
var expr__14905 = k__7377__auto__;
if(cljs.core.truth_(pred__14904.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__14905))){
return (new datascript.parser.SrcVar(G__14900,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__14900),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__14900){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__14900,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f14897){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f14897),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred14898,acc14899){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred14898,self__.symbol,acc14899);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc14899){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc14899,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__14902){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__14902),null,cljs.core.dissoc.call(null,G__14902,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
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
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k14912,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__14914 = k14912;
switch (G__14914) {
default:
return cljs.core.get.call(null,self__.__extmap,k14912,else__7372__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = true;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14911){
var self__ = this;
var G__14911__$1 = this;
return (new cljs.core.RecordIter((0),G__14911__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__14911){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__14915 = cljs.core.keyword_identical_QMARK_;
var expr__14916 = k__7377__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__14911),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__14911){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__14911,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f14908){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred14909,acc14910){
var self__ = this;
var ___13823__auto____$1 = this;
return acc14910;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc14910){
var self__ = this;
var ___13823__auto____$1 = this;
return acc14910;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__14913){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__14913),null));
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
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k14923,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__14925 = k14923;
switch (G__14925) {
default:
return cljs.core.get.call(null,self__.__extmap,k14923,else__7372__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.RulesVar{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14922){
var self__ = this;
var G__14922__$1 = this;
return (new cljs.core.RecordIter((0),G__14922__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__14922){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__14926 = cljs.core.keyword_identical_QMARK_;
var expr__14927 = k__7377__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__14922),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__14922){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.RulesVar(G__14922,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f14919){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred14920,acc14921){
var self__ = this;
var ___13823__auto____$1 = this;
return acc14921;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc14921){
var self__ = this;
var ___13823__auto____$1 = this;
return acc14921;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__14924){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__14924),null));
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
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k14934,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__14936 = (((k14934 instanceof cljs.core.Keyword))?k14934.fqn:null);
switch (G__14936) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14934,else__7372__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.Constant{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = true;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14933){
var self__ = this;
var G__14933__$1 = this;
return (new cljs.core.RecordIter((0),G__14933__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__14933){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__14937 = cljs.core.keyword_identical_QMARK_;
var expr__14938 = k__7377__auto__;
if(cljs.core.truth_(pred__14937.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__14938))){
return (new datascript.parser.Constant(G__14933,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__14933),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__14933){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__14933,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f14930){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f14930),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred14931,acc14932){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred14931,self__.value,acc14932);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc14932){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc14932,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__14935){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__14935),null,cljs.core.dissoc.call(null,G__14935,new cljs.core.Keyword(null,"value","value",305978217)),null));
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
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k14945,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__14947 = (((k14945 instanceof cljs.core.Keyword))?k14945.fqn:null);
switch (G__14947) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14945,else__7372__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = true;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14944){
var self__ = this;
var G__14944__$1 = this;
return (new cljs.core.RecordIter((0),G__14944__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__14944){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__14948 = cljs.core.keyword_identical_QMARK_;
var expr__14949 = k__7377__auto__;
if(cljs.core.truth_(pred__14948.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__14949))){
return (new datascript.parser.PlainSymbol(G__14944,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__14944),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__14944){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__14944,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f14941){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f14941),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred14942,acc14943){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred14942,self__.symbol,acc14943);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc14943){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc14943,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__14946){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__14946),null,cljs.core.dissoc.call(null,G__14946,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
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
var or__6747__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
} else {
var or__6747__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__6747__auto____$1)){
return or__6747__auto____$1;
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
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k14956,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__14958 = (((k14956 instanceof cljs.core.Keyword))?k14956.fqn:null);
switch (G__14958) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14956,else__7372__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.RuleVars{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14955){
var self__ = this;
var G__14955__$1 = this;
return (new cljs.core.RecordIter((0),G__14955__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__14955){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__14959 = cljs.core.keyword_identical_QMARK_;
var expr__14960 = k__7377__auto__;
if(cljs.core.truth_(pred__14959.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__14960))){
return (new datascript.parser.RuleVars(G__14955,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14959.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__14960))){
return (new datascript.parser.RuleVars(self__.required,G__14955,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__14955),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__14955){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__14955,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f14952){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f14952),datascript.parser.postwalk.call(null,self__.free,f14952),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred14953,acc14954){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred14953,self__.free,datascript.parser.collect.call(null,pred14953,self__.required,acc14954));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc14954){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc14954,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__14957){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__14957),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__14957),null,cljs.core.dissoc.call(null,G__14957,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__14966 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__14966,(0),null);
var rest = cljs.core.nth.call(null,vec__14966,(1),null);
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
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k14973,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__14975 = k14973;
switch (G__14975) {
default:
return cljs.core.get.call(null,self__.__extmap,k14973,else__7372__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14972){
var self__ = this;
var G__14972__$1 = this;
return (new cljs.core.RecordIter((0),G__14972__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__14972){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__14976 = cljs.core.keyword_identical_QMARK_;
var expr__14977 = k__7377__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__14972),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__14972){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__14972,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f14969){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred14970,acc14971){
var self__ = this;
var ___13823__auto____$1 = this;
return acc14971;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc14971){
var self__ = this;
var ___13823__auto____$1 = this;
return acc14971;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__14974){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__14974),null));
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
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k14984,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__14986 = (((k14984 instanceof cljs.core.Keyword))?k14984.fqn:null);
switch (G__14986) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14984,else__7372__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.BindScalar{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14983){
var self__ = this;
var G__14983__$1 = this;
return (new cljs.core.RecordIter((0),G__14983__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__14983){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__14987 = cljs.core.keyword_identical_QMARK_;
var expr__14988 = k__7377__auto__;
if(cljs.core.truth_(pred__14987.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__14988))){
return (new datascript.parser.BindScalar(G__14983,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__14983),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__14983){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__14983,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f14980){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f14980),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred14981,acc14982){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred14981,self__.variable,acc14982);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc14982){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc14982,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__14985){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__14985),null,cljs.core.dissoc.call(null,G__14985,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
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
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k14995,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__14997 = (((k14995 instanceof cljs.core.Keyword))?k14995.fqn:null);
switch (G__14997) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14995,else__7372__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.BindTuple{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14994){
var self__ = this;
var G__14994__$1 = this;
return (new cljs.core.RecordIter((0),G__14994__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__14994){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__14998 = cljs.core.keyword_identical_QMARK_;
var expr__14999 = k__7377__auto__;
if(cljs.core.truth_(pred__14998.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__14999))){
return (new datascript.parser.BindTuple(G__14994,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__14994),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__14994){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__14994,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f14991){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f14991),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred14992,acc14993){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred14992,self__.bindings,acc14993);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc14993){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc14993,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__14996){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__14996),null,cljs.core.dissoc.call(null,G__14996,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
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
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15006,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15008 = (((k15006 instanceof cljs.core.Keyword))?k15006.fqn:null);
switch (G__15008) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15006,else__7372__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.BindColl{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15005){
var self__ = this;
var G__15005__$1 = this;
return (new cljs.core.RecordIter((0),G__15005__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15005){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15009 = cljs.core.keyword_identical_QMARK_;
var expr__15010 = k__7377__auto__;
if(cljs.core.truth_(pred__15009.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__15010))){
return (new datascript.parser.BindColl(G__15005,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15005),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15005){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__15005,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15002){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f15002),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15003,acc15004){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15003,self__.binding,acc15004);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15004){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc15004,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__15007){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__15007),null,cljs.core.dissoc.call(null,G__15007,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
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
if(cljs.core.truth_((function (){var and__6735__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__6735__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__6735__auto__;
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
var or__6747__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
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
if(cljs.core.truth_((function (){var and__6735__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__6735__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__6735__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__6747__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
} else {
var or__6747__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__6747__auto____$1)){
return or__6747__auto____$1;
} else {
var or__6747__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__6747__auto____$2)){
return or__6747__auto____$2;
} else {
var or__6747__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__6747__auto____$3)){
return or__6747__auto____$3;
} else {
var or__6747__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__6747__auto____$4)){
return or__6747__auto____$4;
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
var x__7410__auto__ = (((this$ == null))?null:this$);
var m__7411__auto__ = (datascript.parser._find_vars[goog.typeOf(x__7410__auto__)]);
if(!((m__7411__auto__ == null))){
return m__7411__auto__.call(null,this$);
} else {
var m__7411__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__7411__auto____$1 == null))){
return m__7411__auto____$1.call(null,this$);
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

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15017,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15019 = (((k15017 instanceof cljs.core.Keyword))?k15017.fqn:null);
switch (G__15019) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15017,else__7372__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.Aggregate{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15016){
var self__ = this;
var G__15016__$1 = this;
return (new cljs.core.RecordIter((0),G__15016__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15016){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15020 = cljs.core.keyword_identical_QMARK_;
var expr__15021 = k__7377__auto__;
if(cljs.core.truth_(pred__15020.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__15021))){
return (new datascript.parser.Aggregate(G__15016,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15020.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__15021))){
return (new datascript.parser.Aggregate(self__.fn,G__15016,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15016),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15016){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__15016,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15013){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f15013),datascript.parser.postwalk.call(null,self__.args,f15013),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15014,acc15015){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15014,self__.args,datascript.parser.collect.call(null,pred15014,self__.fn,acc15015));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15015){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc15015,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__15018){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__15018),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__15018),null,cljs.core.dissoc.call(null,G__15018,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15028,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15030 = (((k15028 instanceof cljs.core.Keyword))?k15028.fqn:null);
switch (G__15030) {
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
return cljs.core.get.call(null,self__.__extmap,k15028,else__7372__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.Pull{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15027){
var self__ = this;
var G__15027__$1 = this;
return (new cljs.core.RecordIter((0),G__15027__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15027){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15031 = cljs.core.keyword_identical_QMARK_;
var expr__15032 = k__7377__auto__;
if(cljs.core.truth_(pred__15031.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__15032))){
return (new datascript.parser.Pull(G__15027,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15031.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__15032))){
return (new datascript.parser.Pull(self__.source,G__15027,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15031.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__15032))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__15027,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15027),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15027){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__15027,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15024){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f15024),datascript.parser.postwalk.call(null,self__.variable,f15024),datascript.parser.postwalk.call(null,self__.pattern,f15024),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15025,acc15026){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15025,self__.pattern,datascript.parser.collect.call(null,pred15025,self__.variable,datascript.parser.collect.call(null,pred15025,self__.source,acc15026)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15026){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc15026,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__15029){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__15029),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__15029),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__15029),null,cljs.core.dissoc.call(null,G__15029,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__7410__auto__ = (((this$ == null))?null:this$);
var m__7411__auto__ = (datascript.parser.find_elements[goog.typeOf(x__7410__auto__)]);
if(!((m__7411__auto__ == null))){
return m__7411__auto__.call(null,this$);
} else {
var m__7411__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__7411__auto____$1 == null))){
return m__7411__auto____$1.call(null,this$);
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
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15039,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15041 = (((k15039 instanceof cljs.core.Keyword))?k15039.fqn:null);
switch (G__15041) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15039,else__7372__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.FindRel{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15038){
var self__ = this;
var G__15038__$1 = this;
return (new cljs.core.RecordIter((0),G__15038__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15038){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15042 = cljs.core.keyword_identical_QMARK_;
var expr__15043 = k__7377__auto__;
if(cljs.core.truth_(pred__15042.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__15043))){
return (new datascript.parser.FindRel(G__15038,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15038),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15038){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__15038,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15035){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f15035),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15036,acc15037){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15036,self__.elements,acc15037);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15037){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc15037,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__15040){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__15040),null,cljs.core.dissoc.call(null,G__15040,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
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
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15050,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15052 = (((k15050 instanceof cljs.core.Keyword))?k15050.fqn:null);
switch (G__15052) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15050,else__7372__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.FindColl{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15049){
var self__ = this;
var G__15049__$1 = this;
return (new cljs.core.RecordIter((0),G__15049__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15049){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15053 = cljs.core.keyword_identical_QMARK_;
var expr__15054 = k__7377__auto__;
if(cljs.core.truth_(pred__15053.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__15054))){
return (new datascript.parser.FindColl(G__15049,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15049),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15049){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__15049,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15046){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f15046),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15047,acc15048){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15047,self__.element,acc15048);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15048){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc15048,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__15051){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__15051),null,cljs.core.dissoc.call(null,G__15051,new cljs.core.Keyword(null,"element","element",1974019749)),null));
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
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15061,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15063 = (((k15061 instanceof cljs.core.Keyword))?k15061.fqn:null);
switch (G__15063) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15061,else__7372__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.FindScalar{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15060){
var self__ = this;
var G__15060__$1 = this;
return (new cljs.core.RecordIter((0),G__15060__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15060){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15064 = cljs.core.keyword_identical_QMARK_;
var expr__15065 = k__7377__auto__;
if(cljs.core.truth_(pred__15064.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__15065))){
return (new datascript.parser.FindScalar(G__15060,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15060),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15060){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__15060,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15057){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f15057),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15058,acc15059){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15058,self__.element,acc15059);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15059){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc15059,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__15062){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__15062),null,cljs.core.dissoc.call(null,G__15062,new cljs.core.Keyword(null,"element","element",1974019749)),null));
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
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15072,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15074 = (((k15072 instanceof cljs.core.Keyword))?k15072.fqn:null);
switch (G__15074) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15072,else__7372__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.FindTuple{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15071){
var self__ = this;
var G__15071__$1 = this;
return (new cljs.core.RecordIter((0),G__15071__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15071){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15075 = cljs.core.keyword_identical_QMARK_;
var expr__15076 = k__7377__auto__;
if(cljs.core.truth_(pred__15075.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__15076))){
return (new datascript.parser.FindTuple(G__15071,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15071),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15071){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__15071,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15068){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f15068),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15069,acc15070){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15069,self__.elements,acc15070);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15070){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc15070,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__15073){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__15073),null,cljs.core.dissoc.call(null,G__15073,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
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
var vec__15082 = form;
var seq__15083 = cljs.core.seq.call(null,vec__15082);
var first__15084 = cljs.core.first.call(null,seq__15083);
var seq__15083__$1 = cljs.core.next.call(null,seq__15083);
var fn = first__15084;
var args = seq__15083__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__6735__auto__ = fn_STAR_;
if(cljs.core.truth_(and__6735__auto__)){
return args_STAR_;
} else {
return and__6735__auto__;
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
var vec__15088 = form;
var seq__15089 = cljs.core.seq.call(null,vec__15088);
var first__15090 = cljs.core.first.call(null,seq__15089);
var seq__15089__$1 = cljs.core.next.call(null,seq__15089);
var _ = first__15090;
var first__15090__$1 = cljs.core.first.call(null,seq__15089__$1);
var seq__15089__$2 = cljs.core.next.call(null,seq__15089__$1);
var fn = first__15090__$1;
var args = seq__15089__$2;
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__6735__auto__ = fn_STAR_;
if(cljs.core.truth_(and__6735__auto__)){
return args_STAR_;
} else {
return and__6735__auto__;
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
var vec__15094 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__15094,(0),null);
var pattern = cljs.core.nth.call(null,vec__15094,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__6747__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
} else {
var or__6747__auto____$1 = datascript.parser.parse_plain_variable.call(null,pattern);
if(cljs.core.truth_(or__6747__auto____$1)){
return or__6747__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__6735__auto__ = src_STAR_;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__6735__auto____$1)){
return pattern_STAR_;
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
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
var or__6747__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
} else {
var or__6747__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__6747__auto____$1)){
return or__6747__auto____$1;
} else {
var or__6747__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__6747__auto____$2)){
return or__6747__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__15098 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
if((G__15098 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__15098,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__15100 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
if((G__15100 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__15100,null,null,null));
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
var G__15102 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
if((G__15102 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__15102,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__15104 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
if((G__15104 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__15104,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__6747__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
} else {
var or__6747__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__6747__auto____$1)){
return or__6747__auto____$1;
} else {
var or__6747__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__6747__auto____$2)){
return or__6747__auto____$2;
} else {
var or__6747__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__6747__auto____$3)){
return or__6747__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__6747__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4655__auto__ = (function (){var or__6747__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
} else {
var or__6747__auto____$1 = datascript.parser.parse_rules_var.call(null,form);
if(cljs.core.truth_(or__6747__auto____$1)){
return or__6747__auto____$1;
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
var or__6747__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
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
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15109,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15111 = (((k15109 instanceof cljs.core.Keyword))?k15109.fqn:null);
switch (G__15111) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15109,else__7372__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.Pattern{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15108){
var self__ = this;
var G__15108__$1 = this;
return (new cljs.core.RecordIter((0),G__15108__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15108){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15112 = cljs.core.keyword_identical_QMARK_;
var expr__15113 = k__7377__auto__;
if(cljs.core.truth_(pred__15112.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__15113))){
return (new datascript.parser.Pattern(G__15108,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15112.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__15113))){
return (new datascript.parser.Pattern(self__.source,G__15108,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15108),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15108){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__15108,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15105){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f15105),datascript.parser.postwalk.call(null,self__.pattern,f15105),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15106,acc15107){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15106,self__.pattern,datascript.parser.collect.call(null,pred15106,self__.source,acc15107));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15107){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc15107,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__15110){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__15110),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__15110),null,cljs.core.dissoc.call(null,G__15110,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
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
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15120,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15122 = (((k15120 instanceof cljs.core.Keyword))?k15120.fqn:null);
switch (G__15122) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15120,else__7372__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.Predicate{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15119){
var self__ = this;
var G__15119__$1 = this;
return (new cljs.core.RecordIter((0),G__15119__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15119){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15123 = cljs.core.keyword_identical_QMARK_;
var expr__15124 = k__7377__auto__;
if(cljs.core.truth_(pred__15123.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__15124))){
return (new datascript.parser.Predicate(G__15119,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15123.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__15124))){
return (new datascript.parser.Predicate(self__.fn,G__15119,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15119),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15119){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__15119,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15116){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f15116),datascript.parser.postwalk.call(null,self__.args,f15116),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15117,acc15118){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15117,self__.args,datascript.parser.collect.call(null,pred15117,self__.fn,acc15118));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15118){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc15118,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__15121){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__15121),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__15121),null,cljs.core.dissoc.call(null,G__15121,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15131,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15133 = (((k15131 instanceof cljs.core.Keyword))?k15131.fqn:null);
switch (G__15133) {
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
return cljs.core.get.call(null,self__.__extmap,k15131,else__7372__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.Function{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = true;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15130){
var self__ = this;
var G__15130__$1 = this;
return (new cljs.core.RecordIter((0),G__15130__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15130){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15134 = cljs.core.keyword_identical_QMARK_;
var expr__15135 = k__7377__auto__;
if(cljs.core.truth_(pred__15134.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__15135))){
return (new datascript.parser.Function(G__15130,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15134.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__15135))){
return (new datascript.parser.Function(self__.fn,G__15130,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15134.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__15135))){
return (new datascript.parser.Function(self__.fn,self__.args,G__15130,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15130),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15130){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__15130,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15127){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f15127),datascript.parser.postwalk.call(null,self__.args,f15127),datascript.parser.postwalk.call(null,self__.binding,f15127),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15128,acc15129){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15128,self__.binding,datascript.parser.collect.call(null,pred15128,self__.args,datascript.parser.collect.call(null,pred15128,self__.fn,acc15129)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15129){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc15129,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__15132){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__15132),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__15132),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__15132),null,cljs.core.dissoc.call(null,G__15132,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
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
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15142,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15144 = (((k15142 instanceof cljs.core.Keyword))?k15142.fqn:null);
switch (G__15144) {
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
return cljs.core.get.call(null,self__.__extmap,k15142,else__7372__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15141){
var self__ = this;
var G__15141__$1 = this;
return (new cljs.core.RecordIter((0),G__15141__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15141){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15145 = cljs.core.keyword_identical_QMARK_;
var expr__15146 = k__7377__auto__;
if(cljs.core.truth_(pred__15145.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__15146))){
return (new datascript.parser.RuleExpr(G__15141,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15145.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__15146))){
return (new datascript.parser.RuleExpr(self__.source,G__15141,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15145.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__15146))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__15141,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15141),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15141){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__15141,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15138){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f15138),datascript.parser.postwalk.call(null,self__.name,f15138),datascript.parser.postwalk.call(null,self__.args,f15138),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15139,acc15140){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15139,self__.args,datascript.parser.collect.call(null,pred15139,self__.name,datascript.parser.collect.call(null,pred15139,self__.source,acc15140)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15140){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc15140,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__15143){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__15143),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__15143),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__15143),null,cljs.core.dissoc.call(null,G__15143,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15153,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15155 = (((k15153 instanceof cljs.core.Keyword))?k15153.fqn:null);
switch (G__15155) {
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
return cljs.core.get.call(null,self__.__extmap,k15153,else__7372__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.Not{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = true;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15152){
var self__ = this;
var G__15152__$1 = this;
return (new cljs.core.RecordIter((0),G__15152__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15152){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15156 = cljs.core.keyword_identical_QMARK_;
var expr__15157 = k__7377__auto__;
if(cljs.core.truth_(pred__15156.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__15157))){
return (new datascript.parser.Not(G__15152,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15156.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__15157))){
return (new datascript.parser.Not(self__.source,G__15152,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15156.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__15157))){
return (new datascript.parser.Not(self__.source,self__.vars,G__15152,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15152),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15152){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__15152,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15149){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f15149),datascript.parser.postwalk.call(null,self__.vars,f15149),datascript.parser.postwalk.call(null,self__.clauses,f15149),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15150,acc15151){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15150,self__.clauses,datascript.parser.collect.call(null,pred15150,self__.vars,datascript.parser.collect.call(null,pred15150,self__.source,acc15151)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15151){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc15151,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__15154){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__15154),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__15154),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__15154),null,cljs.core.dissoc.call(null,G__15154,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
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
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15164,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15166 = (((k15164 instanceof cljs.core.Keyword))?k15164.fqn:null);
switch (G__15166) {
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
return cljs.core.get.call(null,self__.__extmap,k15164,else__7372__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.Or{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = true;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15163){
var self__ = this;
var G__15163__$1 = this;
return (new cljs.core.RecordIter((0),G__15163__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15163){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15167 = cljs.core.keyword_identical_QMARK_;
var expr__15168 = k__7377__auto__;
if(cljs.core.truth_(pred__15167.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__15168))){
return (new datascript.parser.Or(G__15163,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15167.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__15168))){
return (new datascript.parser.Or(self__.source,G__15163,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15167.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__15168))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__15163,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15163),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15163){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__15163,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15160){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f15160),datascript.parser.postwalk.call(null,self__.rule_vars,f15160),datascript.parser.postwalk.call(null,self__.clauses,f15160),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15161,acc15162){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15161,self__.clauses,datascript.parser.collect.call(null,pred15161,self__.rule_vars,datascript.parser.collect.call(null,pred15161,self__.source,acc15162)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15162){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc15162,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__15165){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__15165),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__15165),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__15165),null,cljs.core.dissoc.call(null,G__15165,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
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
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15175,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15177 = (((k15175 instanceof cljs.core.Keyword))?k15175.fqn:null);
switch (G__15177) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15175,else__7372__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.And{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = true;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15174){
var self__ = this;
var G__15174__$1 = this;
return (new cljs.core.RecordIter((0),G__15174__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15174){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15178 = cljs.core.keyword_identical_QMARK_;
var expr__15179 = k__7377__auto__;
if(cljs.core.truth_(pred__15178.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__15179))){
return (new datascript.parser.And(G__15174,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15174),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15174){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__15174,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15171){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f15171),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15172,acc15173){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15172,self__.clauses,acc15173);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15173){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc15173,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__15176){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__15176),null,cljs.core.dissoc.call(null,G__15176,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__6747__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
} else {
var or__6747__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__6747__auto____$1)){
return or__6747__auto____$1;
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
var vec__15185 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__15185,(0),null);
var next_form = cljs.core.nth.call(null,vec__15185,(1),null);
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
var vec__15191 = form;
var seq__15192 = cljs.core.seq.call(null,vec__15191);
var first__15193 = cljs.core.first.call(null,seq__15192);
var seq__15192__$1 = cljs.core.next.call(null,seq__15192);
var fn = first__15193;
var args = seq__15192__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__6747__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__6735__auto__ = fn_STAR_;
if(cljs.core.truth_(and__6735__auto__)){
return args_STAR_;
} else {
return and__6735__auto__;
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
var vec__15197 = temp__4657__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__15197,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__15197,(1),null);
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
var vec__15206 = form;
var call = cljs.core.nth.call(null,vec__15206,(0),null);
var binding = cljs.core.nth.call(null,vec__15206,(1),null);
var temp__4657__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__15209 = temp__4657__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__15209,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__15209,(1),null);
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
var vec__15218 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__15218,(0),null);
var next_form = cljs.core.nth.call(null,vec__15218,(1),null);
var vec__15221 = next_form;
var seq__15222 = cljs.core.seq.call(null,vec__15221);
var first__15223 = cljs.core.first.call(null,seq__15222);
var seq__15222__$1 = cljs.core.next.call(null,seq__15222);
var name = first__15223;
var args = seq__15222__$1;
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
var undeclared_15226 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_15226)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_15226)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
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
var vec__15233 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__15233,(0),null);
var next_form = cljs.core.nth.call(null,vec__15233,(1),null);
var vec__15236 = next_form;
var seq__15237 = cljs.core.seq.call(null,vec__15236);
var first__15238 = cljs.core.first.call(null,seq__15237);
var seq__15237__$1 = cljs.core.next.call(null,seq__15237);
var sym = first__15238;
var clauses = seq__15237__$1;
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
var vec__15245 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__15245,(0),null);
var next_form = cljs.core.nth.call(null,vec__15245,(1),null);
var vec__15248 = next_form;
var seq__15249 = cljs.core.seq.call(null,vec__15248);
var first__15250 = cljs.core.first.call(null,seq__15249);
var seq__15249__$1 = cljs.core.next.call(null,seq__15249);
var sym = first__15250;
var first__15250__$1 = cljs.core.first.call(null,seq__15249__$1);
var seq__15249__$2 = cljs.core.next.call(null,seq__15249__$1);
var vars = first__15250__$1;
var clauses = seq__15249__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__6735__auto__ = vars_STAR_;
if(cljs.core.truth_(and__6735__auto__)){
return clauses_STAR_;
} else {
return and__6735__auto__;
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
var map__15259 = clause;
var map__15259__$1 = ((((!((map__15259 == null)))?((((map__15259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15259):map__15259);
var map__15260 = cljs.core.get.call(null,map__15259__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__15260__$1 = ((((!((map__15260 == null)))?((((map__15260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15260):map__15260);
var required = cljs.core.get.call(null,map__15260__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__15260__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__15259__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__15263_15267 = cljs.core.seq.call(null,clauses);
var chunk__15264_15268 = null;
var count__15265_15269 = (0);
var i__15266_15270 = (0);
while(true){
if((i__15266_15270 < count__15265_15269)){
var clause_15271__$1 = cljs.core._nth.call(null,chunk__15264_15268,i__15266_15270);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_15271__$1], null),form);

var G__15272 = seq__15263_15267;
var G__15273 = chunk__15264_15268;
var G__15274 = count__15265_15269;
var G__15275 = (i__15266_15270 + (1));
seq__15263_15267 = G__15272;
chunk__15264_15268 = G__15273;
count__15265_15269 = G__15274;
i__15266_15270 = G__15275;
continue;
} else {
var temp__4657__auto___15276 = cljs.core.seq.call(null,seq__15263_15267);
if(temp__4657__auto___15276){
var seq__15263_15277__$1 = temp__4657__auto___15276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15263_15277__$1)){
var c__7558__auto___15278 = cljs.core.chunk_first.call(null,seq__15263_15277__$1);
var G__15279 = cljs.core.chunk_rest.call(null,seq__15263_15277__$1);
var G__15280 = c__7558__auto___15278;
var G__15281 = cljs.core.count.call(null,c__7558__auto___15278);
var G__15282 = (0);
seq__15263_15267 = G__15279;
chunk__15264_15268 = G__15280;
count__15265_15269 = G__15281;
i__15266_15270 = G__15282;
continue;
} else {
var clause_15283__$1 = cljs.core.first.call(null,seq__15263_15277__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_15283__$1], null),form);

var G__15284 = cljs.core.next.call(null,seq__15263_15277__$1);
var G__15285 = null;
var G__15286 = (0);
var G__15287 = (0);
seq__15263_15267 = G__15284;
chunk__15264_15268 = G__15285;
count__15265_15269 = G__15286;
i__15266_15270 = G__15287;
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
var vec__15294 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__15294,(0),null);
var next_form = cljs.core.nth.call(null,vec__15294,(1),null);
var vec__15297 = next_form;
var seq__15298 = cljs.core.seq.call(null,vec__15297);
var first__15299 = cljs.core.first.call(null,seq__15298);
var seq__15298__$1 = cljs.core.next.call(null,seq__15298);
var sym = first__15299;
var clauses = seq__15298__$1;
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
var vec__15306 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__15306,(0),null);
var next_form = cljs.core.nth.call(null,vec__15306,(1),null);
var vec__15309 = next_form;
var seq__15310 = cljs.core.seq.call(null,vec__15309);
var first__15311 = cljs.core.first.call(null,seq__15310);
var seq__15310__$1 = cljs.core.next.call(null,seq__15310);
var sym = first__15311;
var first__15311__$1 = cljs.core.first.call(null,seq__15310__$1);
var seq__15310__$2 = cljs.core.next.call(null,seq__15310__$1);
var vars = first__15311__$1;
var clauses = seq__15310__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__6735__auto__ = vars_STAR_;
if(cljs.core.truth_(and__6735__auto__)){
return clauses_STAR_;
} else {
return and__6735__auto__;
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
var or__6747__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
} else {
var or__6747__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__6747__auto____$1)){
return or__6747__auto____$1;
} else {
var or__6747__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__6747__auto____$2)){
return or__6747__auto____$2;
} else {
var or__6747__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__6747__auto____$3)){
return or__6747__auto____$3;
} else {
var or__6747__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__6747__auto____$4)){
return or__6747__auto____$4;
} else {
var or__6747__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__6747__auto____$5)){
return or__6747__auto____$5;
} else {
var or__6747__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__6747__auto____$6)){
return or__6747__auto____$6;
} else {
var or__6747__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__6747__auto____$7)){
return or__6747__auto____$7;
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
var or__6747__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
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
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15317,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15319 = (((k15317 instanceof cljs.core.Keyword))?k15317.fqn:null);
switch (G__15319) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15317,else__7372__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15316){
var self__ = this;
var G__15316__$1 = this;
return (new cljs.core.RecordIter((0),G__15316__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15316){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15320 = cljs.core.keyword_identical_QMARK_;
var expr__15321 = k__7377__auto__;
if(cljs.core.truth_(pred__15320.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__15321))){
return (new datascript.parser.RuleBranch(G__15316,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15320.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__15321))){
return (new datascript.parser.RuleBranch(self__.vars,G__15316,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15316),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15316){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__15316,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15313){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f15313),datascript.parser.postwalk.call(null,self__.clauses,f15313),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15314,acc15315){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15314,self__.clauses,datascript.parser.collect.call(null,pred15314,self__.vars,acc15315));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15315){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc15315,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__15318){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__15318),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__15318),null,cljs.core.dissoc.call(null,G__15318,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
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
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15328,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15330 = (((k15328 instanceof cljs.core.Keyword))?k15328.fqn:null);
switch (G__15330) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15328,else__7372__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.Rule{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = true;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15327){
var self__ = this;
var G__15327__$1 = this;
return (new cljs.core.RecordIter((0),G__15327__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15327){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15331 = cljs.core.keyword_identical_QMARK_;
var expr__15332 = k__7377__auto__;
if(cljs.core.truth_(pred__15331.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__15332))){
return (new datascript.parser.Rule(G__15327,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15331.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__15332))){
return (new datascript.parser.Rule(self__.name,G__15327,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15327),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15327){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__15327,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15324){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f15324),datascript.parser.postwalk.call(null,self__.branches,f15324),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15325,acc15326){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15325,self__.branches,datascript.parser.collect.call(null,pred15325,self__.name,acc15326));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15326){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc15326,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__15329){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__15329),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__15329),null,cljs.core.dissoc.call(null,G__15329,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__15335_SHARP_){
return (p1__15335_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__15336_SHARP_){
return (p1__15336_SHARP_ instanceof datascript.parser.Variable);
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
var vec__15343 = form;
var seq__15344 = cljs.core.seq.call(null,vec__15343);
var first__15345 = cljs.core.first.call(null,seq__15344);
var seq__15344__$1 = cljs.core.next.call(null,seq__15344);
var head = first__15345;
var clauses = seq__15344__$1;
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__15346 = head;
var seq__15347 = cljs.core.seq.call(null,vec__15346);
var first__15348 = cljs.core.first.call(null,seq__15347);
var seq__15347__$1 = cljs.core.next.call(null,seq__15347);
var name = first__15348;
var vars = seq__15347__$1;
var name_STAR_ = (function (){var or__6747__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__6747__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
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
var seq__15355 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__15357 = null;
var count__15358 = (0);
var i__15359 = (0);
while(true){
if((i__15359 < count__15358)){
var b = cljs.core._nth.call(null,chunk__15357,i__15359);
var vars_15361 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_15361))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_15361)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__15362 = seq__15355;
var G__15363 = chunk__15357;
var G__15364 = count__15358;
var G__15365 = (i__15359 + (1));
seq__15355 = G__15362;
chunk__15357 = G__15363;
count__15358 = G__15364;
i__15359 = G__15365;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15355);
if(temp__4657__auto__){
var seq__15355__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15355__$1)){
var c__7558__auto__ = cljs.core.chunk_first.call(null,seq__15355__$1);
var G__15366 = cljs.core.chunk_rest.call(null,seq__15355__$1);
var G__15367 = c__7558__auto__;
var G__15368 = cljs.core.count.call(null,c__7558__auto__);
var G__15369 = (0);
seq__15355 = G__15366;
chunk__15357 = G__15367;
count__15358 = G__15368;
i__15359 = G__15369;
continue;
} else {
var b = cljs.core.first.call(null,seq__15355__$1);
var vars_15370 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_15370))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_15370)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__15371 = cljs.core.next.call(null,seq__15355__$1);
var G__15372 = null;
var G__15373 = (0);
var G__15374 = (0);
seq__15355 = G__15371;
chunk__15357 = G__15372;
count__15358 = G__15373;
i__15359 = G__15374;
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
return cljs.core.vec.call(null,(function (){var iter__7527__auto__ = (function datascript$parser$parse_rules_$_iter__15392(s__15393){
return (new cljs.core.LazySeq(null,(function (){
var s__15393__$1 = s__15393;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15393__$1);
if(temp__4657__auto__){
var s__15393__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15393__$2)){
var c__7525__auto__ = cljs.core.chunk_first.call(null,s__15393__$2);
var size__7526__auto__ = cljs.core.count.call(null,c__7525__auto__);
var b__15395 = cljs.core.chunk_buffer.call(null,size__7526__auto__);
if((function (){var i__15394 = (0);
while(true){
if((i__15394 < size__7526__auto__)){
var vec__15402 = cljs.core._nth.call(null,c__7525__auto__,i__15394);
var name = cljs.core.nth.call(null,vec__15402,(0),null);
var branches = cljs.core.nth.call(null,vec__15402,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__15394,vec__15402,name,branches,c__7525__auto__,size__7526__auto__,b__15395,s__15393__$2,temp__4657__auto__){
return (function (p1__15375_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__15375_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__15375_SHARP_),null,null,null));
});})(i__15394,vec__15402,name,branches,c__7525__auto__,size__7526__auto__,b__15395,s__15393__$2,temp__4657__auto__))
,branches);
cljs.core.chunk_append.call(null,b__15395,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__15408 = (i__15394 + (1));
i__15394 = G__15408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15395),datascript$parser$parse_rules_$_iter__15392.call(null,cljs.core.chunk_rest.call(null,s__15393__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15395),null);
}
} else {
var vec__15405 = cljs.core.first.call(null,s__15393__$2);
var name = cljs.core.nth.call(null,vec__15405,(0),null);
var branches = cljs.core.nth.call(null,vec__15405,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__15405,name,branches,s__15393__$2,temp__4657__auto__){
return (function (p1__15375_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__15375_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__15375_SHARP_),null,null,null));
});})(vec__15405,name,branches,s__15393__$2,temp__4657__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__15392.call(null,cljs.core.rest.call(null,s__15393__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7527__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
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
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7369__auto__,k__7370__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core._lookup.call(null,this__7369__auto____$1,k__7370__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7371__auto__,k15413,else__7372__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var G__15415 = (((k15413 instanceof cljs.core.Keyword))?k15413.fqn:null);
switch (G__15415) {
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
return cljs.core.get.call(null,self__.__extmap,k15413,else__7372__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7383__auto__,writer__7384__auto__,opts__7385__auto__){
var self__ = this;
var this__7383__auto____$1 = this;
var pr_pair__7386__auto__ = ((function (this__7383__auto____$1){
return (function (keyval__7387__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,cljs.core.pr_writer,""," ","",opts__7385__auto__,keyval__7387__auto__);
});})(this__7383__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7384__auto__,pr_pair__7386__auto__,"#datascript.parser.Query{",", ","}",opts__7385__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = true;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15412){
var self__ = this;
var G__15412__$1 = this;
return (new cljs.core.RecordIter((0),G__15412__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7367__auto__){
var self__ = this;
var this__7367__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7363__auto__){
var self__ = this;
var this__7363__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7373__auto__){
var self__ = this;
var this__7373__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7364__auto__){
var self__ = this;
var this__7364__auto____$1 = this;
var h__7182__auto__ = self__.__hash;
if(!((h__7182__auto__ == null))){
return h__7182__auto__;
} else {
var h__7182__auto____$1 = cljs.core.hash_imap.call(null,this__7364__auto____$1);
self__.__hash = h__7182__auto____$1;

return h__7182__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7365__auto__,other__7366__auto__){
var self__ = this;
var this__7365__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6735__auto__ = other__7366__auto__;
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = (this__7365__auto____$1.constructor === other__7366__auto__.constructor);
if(and__6735__auto____$1){
return cljs.core.equiv_map.call(null,this__7365__auto____$1,other__7366__auto__);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7378__auto__,k__7379__auto__){
var self__ = this;
var this__7378__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__7379__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7378__auto____$1),self__.__meta),k__7379__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7379__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7376__auto__,k__7377__auto__,G__15412){
var self__ = this;
var this__7376__auto____$1 = this;
var pred__15416 = cljs.core.keyword_identical_QMARK_;
var expr__15417 = k__7377__auto__;
if(cljs.core.truth_(pred__15416.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__15417))){
return (new datascript.parser.Query(G__15412,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15416.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__15417))){
return (new datascript.parser.Query(self__.find,G__15412,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15416.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__15417))){
return (new datascript.parser.Query(self__.find,self__.with$,G__15412,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15416.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__15417))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__15412,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7377__auto__,G__15412),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7381__auto__){
var self__ = this;
var this__7381__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7368__auto__,G__15412){
var self__ = this;
var this__7368__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__15412,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7374__auto__,entry__7375__auto__){
var self__ = this;
var this__7374__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7375__auto__)){
return cljs.core._assoc.call(null,this__7374__auto____$1,cljs.core._nth.call(null,entry__7375__auto__,(0)),cljs.core._nth.call(null,entry__7375__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7374__auto____$1,entry__7375__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13820__auto__,f15409){
var self__ = this;
var this__13820__auto____$1 = this;
var new__13821__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f15409),datascript.parser.postwalk.call(null,self__.with$,f15409),datascript.parser.postwalk.call(null,self__.in$,f15409),datascript.parser.postwalk.call(null,self__.where,f15409),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__13820__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__13822__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__13821__auto__,meta__13822__auto__);
} else {
return new__13821__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13823__auto__,pred15410,acc15411){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect.call(null,pred15410,self__.where,datascript.parser.collect.call(null,pred15410,self__.in$,datascript.parser.collect.call(null,pred15410,self__.with$,datascript.parser.collect.call(null,pred15410,self__.find,acc15411))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13823__auto__,acc15411){
var self__ = this;
var ___13823__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc15411,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__7403__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__7403__auto__,writer__7404__auto__){
return cljs.core._write.call(null,writer__7404__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__15414){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__15414),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__15414),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__15414),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__15414),null,cljs.core.dissoc.call(null,G__15414,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
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
var G__15420 = parsed;
var G__15421 = q;
var G__15422 = cljs.core.next.call(null,qs);
parsed = G__15420;
key = G__15421;
qs = G__15422;
continue;
} else {
var G__15423 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__15424 = key;
var G__15425 = cljs.core.next.call(null,qs);
parsed = G__15423;
key = G__15424;
qs = G__15425;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_15432 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_15433 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_15434 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_15435 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_15436 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_15432,with_vars_15433),clojure.set.union.call(null,where_vars_15435,in_vars_15434));
var shared_15437 = clojure.set.intersection.call(null,find_vars_15432,with_vars_15433);
if(cljs.core.empty_QMARK_.call(null,unknown_15436)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_15436)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_15436,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_15437)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_15437)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_15437,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_15438 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_15439 = datascript.parser.collect.call(null,((function (in_vars_15438){
return (function (p1__15426_SHARP_){
return (p1__15426_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_15438))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_15440 = datascript.parser.collect.call(null,((function (in_vars_15438,in_sources_15439){
return (function (p1__15427_SHARP_){
return (p1__15427_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_15438,in_sources_15439))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__6735__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_15438);
if(cljs.core.truth_(and__6735__auto__)){
var and__6735__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_15439);
if(cljs.core.truth_(and__6735__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_15440);
} else {
return and__6735__auto____$1;
}
} else {
return and__6735__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_15441 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_15441))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_15442 = datascript.parser.collect.call(null,(function (p1__15428_SHARP_){
return (p1__15428_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_15443 = datascript.parser.collect.call(null,((function (in_sources_15442){
return (function (p1__15429_SHARP_){
return (p1__15429_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_15442))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_15444 = clojure.set.difference.call(null,where_sources_15443,in_sources_15442);
if(cljs.core.empty_QMARK_.call(null,unknown_15444)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_15444)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_15444,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__15430_SHARP_){
return (p1__15430_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__15431_SHARP_){
return (p1__15431_SHARP_ instanceof datascript.parser.RulesVar);
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