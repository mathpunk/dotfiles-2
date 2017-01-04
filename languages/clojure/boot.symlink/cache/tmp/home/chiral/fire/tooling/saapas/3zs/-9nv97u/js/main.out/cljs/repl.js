// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11817){
var map__11842 = p__11817;
var map__11842__$1 = ((((!((map__11842 == null)))?((((map__11842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11842):map__11842);
var m = map__11842__$1;
var n = cljs.core.get.call(null,map__11842__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11842__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__11844_11866 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11845_11867 = null;
var count__11846_11868 = (0);
var i__11847_11869 = (0);
while(true){
if((i__11847_11869 < count__11846_11868)){
var f_11870 = cljs.core._nth.call(null,chunk__11845_11867,i__11847_11869);
cljs.core.println.call(null,"  ",f_11870);

var G__11871 = seq__11844_11866;
var G__11872 = chunk__11845_11867;
var G__11873 = count__11846_11868;
var G__11874 = (i__11847_11869 + (1));
seq__11844_11866 = G__11871;
chunk__11845_11867 = G__11872;
count__11846_11868 = G__11873;
i__11847_11869 = G__11874;
continue;
} else {
var temp__6747__auto___11875 = cljs.core.seq.call(null,seq__11844_11866);
if(temp__6747__auto___11875){
var seq__11844_11876__$1 = temp__6747__auto___11875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11844_11876__$1)){
var c__8391__auto___11877 = cljs.core.chunk_first.call(null,seq__11844_11876__$1);
var G__11878 = cljs.core.chunk_rest.call(null,seq__11844_11876__$1);
var G__11879 = c__8391__auto___11877;
var G__11880 = cljs.core.count.call(null,c__8391__auto___11877);
var G__11881 = (0);
seq__11844_11866 = G__11878;
chunk__11845_11867 = G__11879;
count__11846_11868 = G__11880;
i__11847_11869 = G__11881;
continue;
} else {
var f_11882 = cljs.core.first.call(null,seq__11844_11876__$1);
cljs.core.println.call(null,"  ",f_11882);

var G__11883 = cljs.core.next.call(null,seq__11844_11876__$1);
var G__11884 = null;
var G__11885 = (0);
var G__11886 = (0);
seq__11844_11866 = G__11883;
chunk__11845_11867 = G__11884;
count__11846_11868 = G__11885;
i__11847_11869 = G__11886;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11887 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7485__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7485__auto__)){
return or__7485__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11887);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11887)))?cljs.core.second.call(null,arglists_11887):arglists_11887));
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
var seq__11848_11888 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11849_11889 = null;
var count__11850_11890 = (0);
var i__11851_11891 = (0);
while(true){
if((i__11851_11891 < count__11850_11890)){
var vec__11852_11892 = cljs.core._nth.call(null,chunk__11849_11889,i__11851_11891);
var name_11893 = cljs.core.nth.call(null,vec__11852_11892,(0),null);
var map__11855_11894 = cljs.core.nth.call(null,vec__11852_11892,(1),null);
var map__11855_11895__$1 = ((((!((map__11855_11894 == null)))?((((map__11855_11894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11855_11894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11855_11894):map__11855_11894);
var doc_11896 = cljs.core.get.call(null,map__11855_11895__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11897 = cljs.core.get.call(null,map__11855_11895__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11893);

cljs.core.println.call(null," ",arglists_11897);

if(cljs.core.truth_(doc_11896)){
cljs.core.println.call(null," ",doc_11896);
} else {
}

var G__11898 = seq__11848_11888;
var G__11899 = chunk__11849_11889;
var G__11900 = count__11850_11890;
var G__11901 = (i__11851_11891 + (1));
seq__11848_11888 = G__11898;
chunk__11849_11889 = G__11899;
count__11850_11890 = G__11900;
i__11851_11891 = G__11901;
continue;
} else {
var temp__6747__auto___11902 = cljs.core.seq.call(null,seq__11848_11888);
if(temp__6747__auto___11902){
var seq__11848_11903__$1 = temp__6747__auto___11902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11848_11903__$1)){
var c__8391__auto___11904 = cljs.core.chunk_first.call(null,seq__11848_11903__$1);
var G__11905 = cljs.core.chunk_rest.call(null,seq__11848_11903__$1);
var G__11906 = c__8391__auto___11904;
var G__11907 = cljs.core.count.call(null,c__8391__auto___11904);
var G__11908 = (0);
seq__11848_11888 = G__11905;
chunk__11849_11889 = G__11906;
count__11850_11890 = G__11907;
i__11851_11891 = G__11908;
continue;
} else {
var vec__11857_11909 = cljs.core.first.call(null,seq__11848_11903__$1);
var name_11910 = cljs.core.nth.call(null,vec__11857_11909,(0),null);
var map__11860_11911 = cljs.core.nth.call(null,vec__11857_11909,(1),null);
var map__11860_11912__$1 = ((((!((map__11860_11911 == null)))?((((map__11860_11911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11860_11911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11860_11911):map__11860_11911);
var doc_11913 = cljs.core.get.call(null,map__11860_11912__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11914 = cljs.core.get.call(null,map__11860_11912__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11910);

cljs.core.println.call(null," ",arglists_11914);

if(cljs.core.truth_(doc_11913)){
cljs.core.println.call(null," ",doc_11913);
} else {
}

var G__11915 = cljs.core.next.call(null,seq__11848_11903__$1);
var G__11916 = null;
var G__11917 = (0);
var G__11918 = (0);
seq__11848_11888 = G__11915;
chunk__11849_11889 = G__11916;
count__11850_11890 = G__11917;
i__11851_11891 = G__11918;
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

var seq__11862 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11863 = null;
var count__11864 = (0);
var i__11865 = (0);
while(true){
if((i__11865 < count__11864)){
var role = cljs.core._nth.call(null,chunk__11863,i__11865);
var temp__6747__auto___11919__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6747__auto___11919__$1)){
var spec_11920 = temp__6747__auto___11919__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_11920));
} else {
}

var G__11921 = seq__11862;
var G__11922 = chunk__11863;
var G__11923 = count__11864;
var G__11924 = (i__11865 + (1));
seq__11862 = G__11921;
chunk__11863 = G__11922;
count__11864 = G__11923;
i__11865 = G__11924;
continue;
} else {
var temp__6747__auto____$1 = cljs.core.seq.call(null,seq__11862);
if(temp__6747__auto____$1){
var seq__11862__$1 = temp__6747__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11862__$1)){
var c__8391__auto__ = cljs.core.chunk_first.call(null,seq__11862__$1);
var G__11925 = cljs.core.chunk_rest.call(null,seq__11862__$1);
var G__11926 = c__8391__auto__;
var G__11927 = cljs.core.count.call(null,c__8391__auto__);
var G__11928 = (0);
seq__11862 = G__11925;
chunk__11863 = G__11926;
count__11864 = G__11927;
i__11865 = G__11928;
continue;
} else {
var role = cljs.core.first.call(null,seq__11862__$1);
var temp__6747__auto___11929__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6747__auto___11929__$2)){
var spec_11930 = temp__6747__auto___11929__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_11930));
} else {
}

var G__11931 = cljs.core.next.call(null,seq__11862__$1);
var G__11932 = null;
var G__11933 = (0);
var G__11934 = (0);
seq__11862 = G__11931;
chunk__11863 = G__11932;
count__11864 = G__11933;
i__11865 = G__11934;
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