// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21090){
var map__21115 = p__21090;
var map__21115__$1 = ((((!((map__21115 == null)))?((((map__21115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21115):map__21115);
var m = map__21115__$1;
var n = cljs.core.get.call(null,map__21115__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21115__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__21117_21139 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21118_21140 = null;
var count__21119_21141 = (0);
var i__21120_21142 = (0);
while(true){
if((i__21120_21142 < count__21119_21141)){
var f_21143 = cljs.core._nth.call(null,chunk__21118_21140,i__21120_21142);
cljs.core.println.call(null,"  ",f_21143);

var G__21144 = seq__21117_21139;
var G__21145 = chunk__21118_21140;
var G__21146 = count__21119_21141;
var G__21147 = (i__21120_21142 + (1));
seq__21117_21139 = G__21144;
chunk__21118_21140 = G__21145;
count__21119_21141 = G__21146;
i__21120_21142 = G__21147;
continue;
} else {
var temp__4657__auto___21148 = cljs.core.seq.call(null,seq__21117_21139);
if(temp__4657__auto___21148){
var seq__21117_21149__$1 = temp__4657__auto___21148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21117_21149__$1)){
var c__7559__auto___21150 = cljs.core.chunk_first.call(null,seq__21117_21149__$1);
var G__21151 = cljs.core.chunk_rest.call(null,seq__21117_21149__$1);
var G__21152 = c__7559__auto___21150;
var G__21153 = cljs.core.count.call(null,c__7559__auto___21150);
var G__21154 = (0);
seq__21117_21139 = G__21151;
chunk__21118_21140 = G__21152;
count__21119_21141 = G__21153;
i__21120_21142 = G__21154;
continue;
} else {
var f_21155 = cljs.core.first.call(null,seq__21117_21149__$1);
cljs.core.println.call(null,"  ",f_21155);

var G__21156 = cljs.core.next.call(null,seq__21117_21149__$1);
var G__21157 = null;
var G__21158 = (0);
var G__21159 = (0);
seq__21117_21139 = G__21156;
chunk__21118_21140 = G__21157;
count__21119_21141 = G__21158;
i__21120_21142 = G__21159;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21160 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6748__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21160);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21160)))?cljs.core.second.call(null,arglists_21160):arglists_21160));
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
var seq__21121_21161 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21122_21162 = null;
var count__21123_21163 = (0);
var i__21124_21164 = (0);
while(true){
if((i__21124_21164 < count__21123_21163)){
var vec__21125_21165 = cljs.core._nth.call(null,chunk__21122_21162,i__21124_21164);
var name_21166 = cljs.core.nth.call(null,vec__21125_21165,(0),null);
var map__21128_21167 = cljs.core.nth.call(null,vec__21125_21165,(1),null);
var map__21128_21168__$1 = ((((!((map__21128_21167 == null)))?((((map__21128_21167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21128_21167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21128_21167):map__21128_21167);
var doc_21169 = cljs.core.get.call(null,map__21128_21168__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21170 = cljs.core.get.call(null,map__21128_21168__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21166);

cljs.core.println.call(null," ",arglists_21170);

if(cljs.core.truth_(doc_21169)){
cljs.core.println.call(null," ",doc_21169);
} else {
}

var G__21171 = seq__21121_21161;
var G__21172 = chunk__21122_21162;
var G__21173 = count__21123_21163;
var G__21174 = (i__21124_21164 + (1));
seq__21121_21161 = G__21171;
chunk__21122_21162 = G__21172;
count__21123_21163 = G__21173;
i__21124_21164 = G__21174;
continue;
} else {
var temp__4657__auto___21175 = cljs.core.seq.call(null,seq__21121_21161);
if(temp__4657__auto___21175){
var seq__21121_21176__$1 = temp__4657__auto___21175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21121_21176__$1)){
var c__7559__auto___21177 = cljs.core.chunk_first.call(null,seq__21121_21176__$1);
var G__21178 = cljs.core.chunk_rest.call(null,seq__21121_21176__$1);
var G__21179 = c__7559__auto___21177;
var G__21180 = cljs.core.count.call(null,c__7559__auto___21177);
var G__21181 = (0);
seq__21121_21161 = G__21178;
chunk__21122_21162 = G__21179;
count__21123_21163 = G__21180;
i__21124_21164 = G__21181;
continue;
} else {
var vec__21130_21182 = cljs.core.first.call(null,seq__21121_21176__$1);
var name_21183 = cljs.core.nth.call(null,vec__21130_21182,(0),null);
var map__21133_21184 = cljs.core.nth.call(null,vec__21130_21182,(1),null);
var map__21133_21185__$1 = ((((!((map__21133_21184 == null)))?((((map__21133_21184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21133_21184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21133_21184):map__21133_21184);
var doc_21186 = cljs.core.get.call(null,map__21133_21185__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21187 = cljs.core.get.call(null,map__21133_21185__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21183);

cljs.core.println.call(null," ",arglists_21187);

if(cljs.core.truth_(doc_21186)){
cljs.core.println.call(null," ",doc_21186);
} else {
}

var G__21188 = cljs.core.next.call(null,seq__21121_21176__$1);
var G__21189 = null;
var G__21190 = (0);
var G__21191 = (0);
seq__21121_21161 = G__21188;
chunk__21122_21162 = G__21189;
count__21123_21163 = G__21190;
i__21124_21164 = G__21191;
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

var seq__21135 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21136 = null;
var count__21137 = (0);
var i__21138 = (0);
while(true){
if((i__21138 < count__21137)){
var role = cljs.core._nth.call(null,chunk__21136,i__21138);
var temp__4657__auto___21192__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___21192__$1)){
var spec_21193 = temp__4657__auto___21192__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_21193));
} else {
}

var G__21194 = seq__21135;
var G__21195 = chunk__21136;
var G__21196 = count__21137;
var G__21197 = (i__21138 + (1));
seq__21135 = G__21194;
chunk__21136 = G__21195;
count__21137 = G__21196;
i__21138 = G__21197;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__21135);
if(temp__4657__auto____$1){
var seq__21135__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21135__$1)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,seq__21135__$1);
var G__21198 = cljs.core.chunk_rest.call(null,seq__21135__$1);
var G__21199 = c__7559__auto__;
var G__21200 = cljs.core.count.call(null,c__7559__auto__);
var G__21201 = (0);
seq__21135 = G__21198;
chunk__21136 = G__21199;
count__21137 = G__21200;
i__21138 = G__21201;
continue;
} else {
var role = cljs.core.first.call(null,seq__21135__$1);
var temp__4657__auto___21202__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___21202__$2)){
var spec_21203 = temp__4657__auto___21202__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_21203));
} else {
}

var G__21204 = cljs.core.next.call(null,seq__21135__$1);
var G__21205 = null;
var G__21206 = (0);
var G__21207 = (0);
seq__21135 = G__21204;
chunk__21136 = G__21205;
count__21137 = G__21206;
i__21138 = G__21207;
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