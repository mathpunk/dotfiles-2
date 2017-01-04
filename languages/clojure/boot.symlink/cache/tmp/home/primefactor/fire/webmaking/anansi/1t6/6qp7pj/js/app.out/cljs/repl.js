// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21101){
var map__21126 = p__21101;
var map__21126__$1 = ((((!((map__21126 == null)))?((((map__21126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21126):map__21126);
var m = map__21126__$1;
var n = cljs.core.get.call(null,map__21126__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21126__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__21128_21150 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21129_21151 = null;
var count__21130_21152 = (0);
var i__21131_21153 = (0);
while(true){
if((i__21131_21153 < count__21130_21152)){
var f_21154 = cljs.core._nth.call(null,chunk__21129_21151,i__21131_21153);
cljs.core.println.call(null,"  ",f_21154);

var G__21155 = seq__21128_21150;
var G__21156 = chunk__21129_21151;
var G__21157 = count__21130_21152;
var G__21158 = (i__21131_21153 + (1));
seq__21128_21150 = G__21155;
chunk__21129_21151 = G__21156;
count__21130_21152 = G__21157;
i__21131_21153 = G__21158;
continue;
} else {
var temp__4657__auto___21159 = cljs.core.seq.call(null,seq__21128_21150);
if(temp__4657__auto___21159){
var seq__21128_21160__$1 = temp__4657__auto___21159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21128_21160__$1)){
var c__7559__auto___21161 = cljs.core.chunk_first.call(null,seq__21128_21160__$1);
var G__21162 = cljs.core.chunk_rest.call(null,seq__21128_21160__$1);
var G__21163 = c__7559__auto___21161;
var G__21164 = cljs.core.count.call(null,c__7559__auto___21161);
var G__21165 = (0);
seq__21128_21150 = G__21162;
chunk__21129_21151 = G__21163;
count__21130_21152 = G__21164;
i__21131_21153 = G__21165;
continue;
} else {
var f_21166 = cljs.core.first.call(null,seq__21128_21160__$1);
cljs.core.println.call(null,"  ",f_21166);

var G__21167 = cljs.core.next.call(null,seq__21128_21160__$1);
var G__21168 = null;
var G__21169 = (0);
var G__21170 = (0);
seq__21128_21150 = G__21167;
chunk__21129_21151 = G__21168;
count__21130_21152 = G__21169;
i__21131_21153 = G__21170;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21171 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6748__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21171);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21171)))?cljs.core.second.call(null,arglists_21171):arglists_21171));
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
var seq__21132_21172 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21133_21173 = null;
var count__21134_21174 = (0);
var i__21135_21175 = (0);
while(true){
if((i__21135_21175 < count__21134_21174)){
var vec__21136_21176 = cljs.core._nth.call(null,chunk__21133_21173,i__21135_21175);
var name_21177 = cljs.core.nth.call(null,vec__21136_21176,(0),null);
var map__21139_21178 = cljs.core.nth.call(null,vec__21136_21176,(1),null);
var map__21139_21179__$1 = ((((!((map__21139_21178 == null)))?((((map__21139_21178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21139_21178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21139_21178):map__21139_21178);
var doc_21180 = cljs.core.get.call(null,map__21139_21179__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21181 = cljs.core.get.call(null,map__21139_21179__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21177);

cljs.core.println.call(null," ",arglists_21181);

if(cljs.core.truth_(doc_21180)){
cljs.core.println.call(null," ",doc_21180);
} else {
}

var G__21182 = seq__21132_21172;
var G__21183 = chunk__21133_21173;
var G__21184 = count__21134_21174;
var G__21185 = (i__21135_21175 + (1));
seq__21132_21172 = G__21182;
chunk__21133_21173 = G__21183;
count__21134_21174 = G__21184;
i__21135_21175 = G__21185;
continue;
} else {
var temp__4657__auto___21186 = cljs.core.seq.call(null,seq__21132_21172);
if(temp__4657__auto___21186){
var seq__21132_21187__$1 = temp__4657__auto___21186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21132_21187__$1)){
var c__7559__auto___21188 = cljs.core.chunk_first.call(null,seq__21132_21187__$1);
var G__21189 = cljs.core.chunk_rest.call(null,seq__21132_21187__$1);
var G__21190 = c__7559__auto___21188;
var G__21191 = cljs.core.count.call(null,c__7559__auto___21188);
var G__21192 = (0);
seq__21132_21172 = G__21189;
chunk__21133_21173 = G__21190;
count__21134_21174 = G__21191;
i__21135_21175 = G__21192;
continue;
} else {
var vec__21141_21193 = cljs.core.first.call(null,seq__21132_21187__$1);
var name_21194 = cljs.core.nth.call(null,vec__21141_21193,(0),null);
var map__21144_21195 = cljs.core.nth.call(null,vec__21141_21193,(1),null);
var map__21144_21196__$1 = ((((!((map__21144_21195 == null)))?((((map__21144_21195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21144_21195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21144_21195):map__21144_21195);
var doc_21197 = cljs.core.get.call(null,map__21144_21196__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21198 = cljs.core.get.call(null,map__21144_21196__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21194);

cljs.core.println.call(null," ",arglists_21198);

if(cljs.core.truth_(doc_21197)){
cljs.core.println.call(null," ",doc_21197);
} else {
}

var G__21199 = cljs.core.next.call(null,seq__21132_21187__$1);
var G__21200 = null;
var G__21201 = (0);
var G__21202 = (0);
seq__21132_21172 = G__21199;
chunk__21133_21173 = G__21200;
count__21134_21174 = G__21201;
i__21135_21175 = G__21202;
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

var seq__21146 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21147 = null;
var count__21148 = (0);
var i__21149 = (0);
while(true){
if((i__21149 < count__21148)){
var role = cljs.core._nth.call(null,chunk__21147,i__21149);
var temp__4657__auto___21203__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___21203__$1)){
var spec_21204 = temp__4657__auto___21203__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_21204));
} else {
}

var G__21205 = seq__21146;
var G__21206 = chunk__21147;
var G__21207 = count__21148;
var G__21208 = (i__21149 + (1));
seq__21146 = G__21205;
chunk__21147 = G__21206;
count__21148 = G__21207;
i__21149 = G__21208;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__21146);
if(temp__4657__auto____$1){
var seq__21146__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21146__$1)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,seq__21146__$1);
var G__21209 = cljs.core.chunk_rest.call(null,seq__21146__$1);
var G__21210 = c__7559__auto__;
var G__21211 = cljs.core.count.call(null,c__7559__auto__);
var G__21212 = (0);
seq__21146 = G__21209;
chunk__21147 = G__21210;
count__21148 = G__21211;
i__21149 = G__21212;
continue;
} else {
var role = cljs.core.first.call(null,seq__21146__$1);
var temp__4657__auto___21213__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___21213__$2)){
var spec_21214 = temp__4657__auto___21213__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_21214));
} else {
}

var G__21215 = cljs.core.next.call(null,seq__21146__$1);
var G__21216 = null;
var G__21217 = (0);
var G__21218 = (0);
seq__21146 = G__21215;
chunk__21147 = G__21216;
count__21148 = G__21217;
i__21149 = G__21218;
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