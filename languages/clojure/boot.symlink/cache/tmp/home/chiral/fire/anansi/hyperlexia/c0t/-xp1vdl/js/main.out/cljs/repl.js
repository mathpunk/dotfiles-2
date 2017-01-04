// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12641){
var map__12666 = p__12641;
var map__12666__$1 = ((((!((map__12666 == null)))?((((map__12666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12666):map__12666);
var m = map__12666__$1;
var n = cljs.core.get.call(null,map__12666__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12666__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6747__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6747__auto__)){
var ns = temp__6747__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12668_12690 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12669_12691 = null;
var count__12670_12692 = (0);
var i__12671_12693 = (0);
while(true){
if((i__12671_12693 < count__12670_12692)){
var f_12694 = cljs.core._nth.call(null,chunk__12669_12691,i__12671_12693);
cljs.core.println.call(null,"  ",f_12694);

var G__12695 = seq__12668_12690;
var G__12696 = chunk__12669_12691;
var G__12697 = count__12670_12692;
var G__12698 = (i__12671_12693 + (1));
seq__12668_12690 = G__12695;
chunk__12669_12691 = G__12696;
count__12670_12692 = G__12697;
i__12671_12693 = G__12698;
continue;
} else {
var temp__6747__auto___12699 = cljs.core.seq.call(null,seq__12668_12690);
if(temp__6747__auto___12699){
var seq__12668_12700__$1 = temp__6747__auto___12699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12668_12700__$1)){
var c__8525__auto___12701 = cljs.core.chunk_first.call(null,seq__12668_12700__$1);
var G__12702 = cljs.core.chunk_rest.call(null,seq__12668_12700__$1);
var G__12703 = c__8525__auto___12701;
var G__12704 = cljs.core.count.call(null,c__8525__auto___12701);
var G__12705 = (0);
seq__12668_12690 = G__12702;
chunk__12669_12691 = G__12703;
count__12670_12692 = G__12704;
i__12671_12693 = G__12705;
continue;
} else {
var f_12706 = cljs.core.first.call(null,seq__12668_12700__$1);
cljs.core.println.call(null,"  ",f_12706);

var G__12707 = cljs.core.next.call(null,seq__12668_12700__$1);
var G__12708 = null;
var G__12709 = (0);
var G__12710 = (0);
seq__12668_12690 = G__12707;
chunk__12669_12691 = G__12708;
count__12670_12692 = G__12709;
i__12671_12693 = G__12710;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12711 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7619__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7619__auto__)){
return or__7619__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12711);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12711)))?cljs.core.second.call(null,arglists_12711):arglists_12711));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12672_12712 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12673_12713 = null;
var count__12674_12714 = (0);
var i__12675_12715 = (0);
while(true){
if((i__12675_12715 < count__12674_12714)){
var vec__12676_12716 = cljs.core._nth.call(null,chunk__12673_12713,i__12675_12715);
var name_12717 = cljs.core.nth.call(null,vec__12676_12716,(0),null);
var map__12679_12718 = cljs.core.nth.call(null,vec__12676_12716,(1),null);
var map__12679_12719__$1 = ((((!((map__12679_12718 == null)))?((((map__12679_12718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12679_12718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12679_12718):map__12679_12718);
var doc_12720 = cljs.core.get.call(null,map__12679_12719__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12721 = cljs.core.get.call(null,map__12679_12719__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12717);

cljs.core.println.call(null," ",arglists_12721);

if(cljs.core.truth_(doc_12720)){
cljs.core.println.call(null," ",doc_12720);
} else {
}

var G__12722 = seq__12672_12712;
var G__12723 = chunk__12673_12713;
var G__12724 = count__12674_12714;
var G__12725 = (i__12675_12715 + (1));
seq__12672_12712 = G__12722;
chunk__12673_12713 = G__12723;
count__12674_12714 = G__12724;
i__12675_12715 = G__12725;
continue;
} else {
var temp__6747__auto___12726 = cljs.core.seq.call(null,seq__12672_12712);
if(temp__6747__auto___12726){
var seq__12672_12727__$1 = temp__6747__auto___12726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12672_12727__$1)){
var c__8525__auto___12728 = cljs.core.chunk_first.call(null,seq__12672_12727__$1);
var G__12729 = cljs.core.chunk_rest.call(null,seq__12672_12727__$1);
var G__12730 = c__8525__auto___12728;
var G__12731 = cljs.core.count.call(null,c__8525__auto___12728);
var G__12732 = (0);
seq__12672_12712 = G__12729;
chunk__12673_12713 = G__12730;
count__12674_12714 = G__12731;
i__12675_12715 = G__12732;
continue;
} else {
var vec__12681_12733 = cljs.core.first.call(null,seq__12672_12727__$1);
var name_12734 = cljs.core.nth.call(null,vec__12681_12733,(0),null);
var map__12684_12735 = cljs.core.nth.call(null,vec__12681_12733,(1),null);
var map__12684_12736__$1 = ((((!((map__12684_12735 == null)))?((((map__12684_12735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12684_12735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12684_12735):map__12684_12735);
var doc_12737 = cljs.core.get.call(null,map__12684_12736__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12738 = cljs.core.get.call(null,map__12684_12736__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12734);

cljs.core.println.call(null," ",arglists_12738);

if(cljs.core.truth_(doc_12737)){
cljs.core.println.call(null," ",doc_12737);
} else {
}

var G__12739 = cljs.core.next.call(null,seq__12672_12727__$1);
var G__12740 = null;
var G__12741 = (0);
var G__12742 = (0);
seq__12672_12712 = G__12739;
chunk__12673_12713 = G__12740;
count__12674_12714 = G__12741;
i__12675_12715 = G__12742;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6747__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6747__auto__)){
var fnspec = temp__6747__auto__;
cljs.core.print.call(null,"Spec");

var seq__12686 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12687 = null;
var count__12688 = (0);
var i__12689 = (0);
while(true){
if((i__12689 < count__12688)){
var role = cljs.core._nth.call(null,chunk__12687,i__12689);
var temp__6747__auto___12743__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6747__auto___12743__$1)){
var spec_12744 = temp__6747__auto___12743__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12744));
} else {
}

var G__12745 = seq__12686;
var G__12746 = chunk__12687;
var G__12747 = count__12688;
var G__12748 = (i__12689 + (1));
seq__12686 = G__12745;
chunk__12687 = G__12746;
count__12688 = G__12747;
i__12689 = G__12748;
continue;
} else {
var temp__6747__auto____$1 = cljs.core.seq.call(null,seq__12686);
if(temp__6747__auto____$1){
var seq__12686__$1 = temp__6747__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12686__$1)){
var c__8525__auto__ = cljs.core.chunk_first.call(null,seq__12686__$1);
var G__12749 = cljs.core.chunk_rest.call(null,seq__12686__$1);
var G__12750 = c__8525__auto__;
var G__12751 = cljs.core.count.call(null,c__8525__auto__);
var G__12752 = (0);
seq__12686 = G__12749;
chunk__12687 = G__12750;
count__12688 = G__12751;
i__12689 = G__12752;
continue;
} else {
var role = cljs.core.first.call(null,seq__12686__$1);
var temp__6747__auto___12753__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6747__auto___12753__$2)){
var spec_12754 = temp__6747__auto___12753__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12754));
} else {
}

var G__12755 = cljs.core.next.call(null,seq__12686__$1);
var G__12756 = null;
var G__12757 = (0);
var G__12758 = (0);
seq__12686 = G__12755;
chunk__12687 = G__12756;
count__12688 = G__12757;
i__12689 = G__12758;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map