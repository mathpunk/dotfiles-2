// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10086){
var map__10111 = p__10086;
var map__10111__$1 = ((((!((map__10111 == null)))?((((map__10111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10111):map__10111);
var m = map__10111__$1;
var n = cljs.core.get.call(null,map__10111__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10111__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__10113_10135 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10114_10136 = null;
var count__10115_10137 = (0);
var i__10116_10138 = (0);
while(true){
if((i__10116_10138 < count__10115_10137)){
var f_10139 = cljs.core._nth.call(null,chunk__10114_10136,i__10116_10138);
cljs.core.println.call(null,"  ",f_10139);

var G__10140 = seq__10113_10135;
var G__10141 = chunk__10114_10136;
var G__10142 = count__10115_10137;
var G__10143 = (i__10116_10138 + (1));
seq__10113_10135 = G__10140;
chunk__10114_10136 = G__10141;
count__10115_10137 = G__10142;
i__10116_10138 = G__10143;
continue;
} else {
var temp__4657__auto___10144 = cljs.core.seq.call(null,seq__10113_10135);
if(temp__4657__auto___10144){
var seq__10113_10145__$1 = temp__4657__auto___10144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10113_10145__$1)){
var c__7558__auto___10146 = cljs.core.chunk_first.call(null,seq__10113_10145__$1);
var G__10147 = cljs.core.chunk_rest.call(null,seq__10113_10145__$1);
var G__10148 = c__7558__auto___10146;
var G__10149 = cljs.core.count.call(null,c__7558__auto___10146);
var G__10150 = (0);
seq__10113_10135 = G__10147;
chunk__10114_10136 = G__10148;
count__10115_10137 = G__10149;
i__10116_10138 = G__10150;
continue;
} else {
var f_10151 = cljs.core.first.call(null,seq__10113_10145__$1);
cljs.core.println.call(null,"  ",f_10151);

var G__10152 = cljs.core.next.call(null,seq__10113_10145__$1);
var G__10153 = null;
var G__10154 = (0);
var G__10155 = (0);
seq__10113_10135 = G__10152;
chunk__10114_10136 = G__10153;
count__10115_10137 = G__10154;
i__10116_10138 = G__10155;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10156 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6747__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6747__auto__)){
return or__6747__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10156);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10156)))?cljs.core.second.call(null,arglists_10156):arglists_10156));
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
var seq__10117_10157 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10118_10158 = null;
var count__10119_10159 = (0);
var i__10120_10160 = (0);
while(true){
if((i__10120_10160 < count__10119_10159)){
var vec__10121_10161 = cljs.core._nth.call(null,chunk__10118_10158,i__10120_10160);
var name_10162 = cljs.core.nth.call(null,vec__10121_10161,(0),null);
var map__10124_10163 = cljs.core.nth.call(null,vec__10121_10161,(1),null);
var map__10124_10164__$1 = ((((!((map__10124_10163 == null)))?((((map__10124_10163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10124_10163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10124_10163):map__10124_10163);
var doc_10165 = cljs.core.get.call(null,map__10124_10164__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10166 = cljs.core.get.call(null,map__10124_10164__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10162);

cljs.core.println.call(null," ",arglists_10166);

if(cljs.core.truth_(doc_10165)){
cljs.core.println.call(null," ",doc_10165);
} else {
}

var G__10167 = seq__10117_10157;
var G__10168 = chunk__10118_10158;
var G__10169 = count__10119_10159;
var G__10170 = (i__10120_10160 + (1));
seq__10117_10157 = G__10167;
chunk__10118_10158 = G__10168;
count__10119_10159 = G__10169;
i__10120_10160 = G__10170;
continue;
} else {
var temp__4657__auto___10171 = cljs.core.seq.call(null,seq__10117_10157);
if(temp__4657__auto___10171){
var seq__10117_10172__$1 = temp__4657__auto___10171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10117_10172__$1)){
var c__7558__auto___10173 = cljs.core.chunk_first.call(null,seq__10117_10172__$1);
var G__10174 = cljs.core.chunk_rest.call(null,seq__10117_10172__$1);
var G__10175 = c__7558__auto___10173;
var G__10176 = cljs.core.count.call(null,c__7558__auto___10173);
var G__10177 = (0);
seq__10117_10157 = G__10174;
chunk__10118_10158 = G__10175;
count__10119_10159 = G__10176;
i__10120_10160 = G__10177;
continue;
} else {
var vec__10126_10178 = cljs.core.first.call(null,seq__10117_10172__$1);
var name_10179 = cljs.core.nth.call(null,vec__10126_10178,(0),null);
var map__10129_10180 = cljs.core.nth.call(null,vec__10126_10178,(1),null);
var map__10129_10181__$1 = ((((!((map__10129_10180 == null)))?((((map__10129_10180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10129_10180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10129_10180):map__10129_10180);
var doc_10182 = cljs.core.get.call(null,map__10129_10181__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10183 = cljs.core.get.call(null,map__10129_10181__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10179);

cljs.core.println.call(null," ",arglists_10183);

if(cljs.core.truth_(doc_10182)){
cljs.core.println.call(null," ",doc_10182);
} else {
}

var G__10184 = cljs.core.next.call(null,seq__10117_10172__$1);
var G__10185 = null;
var G__10186 = (0);
var G__10187 = (0);
seq__10117_10157 = G__10184;
chunk__10118_10158 = G__10185;
count__10119_10159 = G__10186;
i__10120_10160 = G__10187;
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

var seq__10131 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10132 = null;
var count__10133 = (0);
var i__10134 = (0);
while(true){
if((i__10134 < count__10133)){
var role = cljs.core._nth.call(null,chunk__10132,i__10134);
var temp__4657__auto___10188__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10188__$1)){
var spec_10189 = temp__4657__auto___10188__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10189));
} else {
}

var G__10190 = seq__10131;
var G__10191 = chunk__10132;
var G__10192 = count__10133;
var G__10193 = (i__10134 + (1));
seq__10131 = G__10190;
chunk__10132 = G__10191;
count__10133 = G__10192;
i__10134 = G__10193;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__10131);
if(temp__4657__auto____$1){
var seq__10131__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10131__$1)){
var c__7558__auto__ = cljs.core.chunk_first.call(null,seq__10131__$1);
var G__10194 = cljs.core.chunk_rest.call(null,seq__10131__$1);
var G__10195 = c__7558__auto__;
var G__10196 = cljs.core.count.call(null,c__7558__auto__);
var G__10197 = (0);
seq__10131 = G__10194;
chunk__10132 = G__10195;
count__10133 = G__10196;
i__10134 = G__10197;
continue;
} else {
var role = cljs.core.first.call(null,seq__10131__$1);
var temp__4657__auto___10198__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10198__$2)){
var spec_10199 = temp__4657__auto___10198__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10199));
} else {
}

var G__10200 = cljs.core.next.call(null,seq__10131__$1);
var G__10201 = null;
var G__10202 = (0);
var G__10203 = (0);
seq__10131 = G__10200;
chunk__10132 = G__10201;
count__10133 = G__10202;
i__10134 = G__10203;
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