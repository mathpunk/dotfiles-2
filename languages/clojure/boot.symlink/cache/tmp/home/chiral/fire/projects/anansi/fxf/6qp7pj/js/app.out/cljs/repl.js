// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21005){
var map__21030 = p__21005;
var map__21030__$1 = ((((!((map__21030 == null)))?((((map__21030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21030):map__21030);
var m = map__21030__$1;
var n = cljs.core.get.call(null,map__21030__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21030__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__21032_21054 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21033_21055 = null;
var count__21034_21056 = (0);
var i__21035_21057 = (0);
while(true){
if((i__21035_21057 < count__21034_21056)){
var f_21058 = cljs.core._nth.call(null,chunk__21033_21055,i__21035_21057);
cljs.core.println.call(null,"  ",f_21058);

var G__21059 = seq__21032_21054;
var G__21060 = chunk__21033_21055;
var G__21061 = count__21034_21056;
var G__21062 = (i__21035_21057 + (1));
seq__21032_21054 = G__21059;
chunk__21033_21055 = G__21060;
count__21034_21056 = G__21061;
i__21035_21057 = G__21062;
continue;
} else {
var temp__4657__auto___21063 = cljs.core.seq.call(null,seq__21032_21054);
if(temp__4657__auto___21063){
var seq__21032_21064__$1 = temp__4657__auto___21063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21032_21064__$1)){
var c__7559__auto___21065 = cljs.core.chunk_first.call(null,seq__21032_21064__$1);
var G__21066 = cljs.core.chunk_rest.call(null,seq__21032_21064__$1);
var G__21067 = c__7559__auto___21065;
var G__21068 = cljs.core.count.call(null,c__7559__auto___21065);
var G__21069 = (0);
seq__21032_21054 = G__21066;
chunk__21033_21055 = G__21067;
count__21034_21056 = G__21068;
i__21035_21057 = G__21069;
continue;
} else {
var f_21070 = cljs.core.first.call(null,seq__21032_21064__$1);
cljs.core.println.call(null,"  ",f_21070);

var G__21071 = cljs.core.next.call(null,seq__21032_21064__$1);
var G__21072 = null;
var G__21073 = (0);
var G__21074 = (0);
seq__21032_21054 = G__21071;
chunk__21033_21055 = G__21072;
count__21034_21056 = G__21073;
i__21035_21057 = G__21074;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21075 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6748__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21075);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21075)))?cljs.core.second.call(null,arglists_21075):arglists_21075));
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
var seq__21036_21076 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21037_21077 = null;
var count__21038_21078 = (0);
var i__21039_21079 = (0);
while(true){
if((i__21039_21079 < count__21038_21078)){
var vec__21040_21080 = cljs.core._nth.call(null,chunk__21037_21077,i__21039_21079);
var name_21081 = cljs.core.nth.call(null,vec__21040_21080,(0),null);
var map__21043_21082 = cljs.core.nth.call(null,vec__21040_21080,(1),null);
var map__21043_21083__$1 = ((((!((map__21043_21082 == null)))?((((map__21043_21082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21043_21082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21043_21082):map__21043_21082);
var doc_21084 = cljs.core.get.call(null,map__21043_21083__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21085 = cljs.core.get.call(null,map__21043_21083__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21081);

cljs.core.println.call(null," ",arglists_21085);

if(cljs.core.truth_(doc_21084)){
cljs.core.println.call(null," ",doc_21084);
} else {
}

var G__21086 = seq__21036_21076;
var G__21087 = chunk__21037_21077;
var G__21088 = count__21038_21078;
var G__21089 = (i__21039_21079 + (1));
seq__21036_21076 = G__21086;
chunk__21037_21077 = G__21087;
count__21038_21078 = G__21088;
i__21039_21079 = G__21089;
continue;
} else {
var temp__4657__auto___21090 = cljs.core.seq.call(null,seq__21036_21076);
if(temp__4657__auto___21090){
var seq__21036_21091__$1 = temp__4657__auto___21090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21036_21091__$1)){
var c__7559__auto___21092 = cljs.core.chunk_first.call(null,seq__21036_21091__$1);
var G__21093 = cljs.core.chunk_rest.call(null,seq__21036_21091__$1);
var G__21094 = c__7559__auto___21092;
var G__21095 = cljs.core.count.call(null,c__7559__auto___21092);
var G__21096 = (0);
seq__21036_21076 = G__21093;
chunk__21037_21077 = G__21094;
count__21038_21078 = G__21095;
i__21039_21079 = G__21096;
continue;
} else {
var vec__21045_21097 = cljs.core.first.call(null,seq__21036_21091__$1);
var name_21098 = cljs.core.nth.call(null,vec__21045_21097,(0),null);
var map__21048_21099 = cljs.core.nth.call(null,vec__21045_21097,(1),null);
var map__21048_21100__$1 = ((((!((map__21048_21099 == null)))?((((map__21048_21099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21048_21099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21048_21099):map__21048_21099);
var doc_21101 = cljs.core.get.call(null,map__21048_21100__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21102 = cljs.core.get.call(null,map__21048_21100__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21098);

cljs.core.println.call(null," ",arglists_21102);

if(cljs.core.truth_(doc_21101)){
cljs.core.println.call(null," ",doc_21101);
} else {
}

var G__21103 = cljs.core.next.call(null,seq__21036_21091__$1);
var G__21104 = null;
var G__21105 = (0);
var G__21106 = (0);
seq__21036_21076 = G__21103;
chunk__21037_21077 = G__21104;
count__21038_21078 = G__21105;
i__21039_21079 = G__21106;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__21050 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21051 = null;
var count__21052 = (0);
var i__21053 = (0);
while(true){
if((i__21053 < count__21052)){
var role = cljs.core._nth.call(null,chunk__21051,i__21053);
var temp__4657__auto___21107__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___21107__$1)){
var spec_21108 = temp__4657__auto___21107__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_21108));
} else {
}

var G__21109 = seq__21050;
var G__21110 = chunk__21051;
var G__21111 = count__21052;
var G__21112 = (i__21053 + (1));
seq__21050 = G__21109;
chunk__21051 = G__21110;
count__21052 = G__21111;
i__21053 = G__21112;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__21050);
if(temp__4657__auto____$1){
var seq__21050__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21050__$1)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,seq__21050__$1);
var G__21113 = cljs.core.chunk_rest.call(null,seq__21050__$1);
var G__21114 = c__7559__auto__;
var G__21115 = cljs.core.count.call(null,c__7559__auto__);
var G__21116 = (0);
seq__21050 = G__21113;
chunk__21051 = G__21114;
count__21052 = G__21115;
i__21053 = G__21116;
continue;
} else {
var role = cljs.core.first.call(null,seq__21050__$1);
var temp__4657__auto___21117__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___21117__$2)){
var spec_21118 = temp__4657__auto___21117__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_21118));
} else {
}

var G__21119 = cljs.core.next.call(null,seq__21050__$1);
var G__21120 = null;
var G__21121 = (0);
var G__21122 = (0);
seq__21050 = G__21119;
chunk__21051 = G__21120;
count__21052 = G__21121;
i__21053 = G__21122;
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