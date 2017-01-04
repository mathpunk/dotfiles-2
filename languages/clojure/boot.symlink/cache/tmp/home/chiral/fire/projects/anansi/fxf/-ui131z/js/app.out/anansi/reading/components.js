// Compiled by ClojureScript 1.9.229 {}
goog.provide('anansi.reading.components');
goog.require('cljs.core');
goog.require('reagent_material_ui.core');
anansi.reading.components.tags = (function anansi$reading$components$tags(p){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(p))){
return "";
} else {
return clojure.string.split.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(p),/ /);
}
});
anansi.reading.components.Chip = (function anansi$reading$components$Chip(var_args){
var args__7830__auto__ = [];
var len__7823__auto___16660 = arguments.length;
var i__7824__auto___16661 = (0);
while(true){
if((i__7824__auto___16661 < len__7823__auto___16660)){
args__7830__auto__.push((arguments[i__7824__auto___16661]));

var G__16662 = (i__7824__auto___16661 + (1));
i__7824__auto___16661 = G__16662;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return anansi.reading.components.Chip.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

anansi.reading.components.Chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null)], null)], null),args);
});

anansi.reading.components.Chip.cljs$lang$maxFixedArity = (0);

anansi.reading.components.Chip.cljs$lang$applyTo = (function (seq16659){
return anansi.reading.components.Chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16659));
});

anansi.reading.components.card = (function anansi$reading$components$card(p){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(p)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardText,[cljs.core.str("tags: "),cljs.core.str(clojure.string.join.call(null,", ",anansi.reading.components.tags.call(null,p)))].join('')], null)], null);
});

//# sourceMappingURL=components.js.map