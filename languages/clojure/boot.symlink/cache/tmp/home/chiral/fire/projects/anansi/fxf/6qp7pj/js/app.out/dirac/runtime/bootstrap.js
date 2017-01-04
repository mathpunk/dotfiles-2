// Compiled by ClojureScript 1.9.229 {}
goog.provide('dirac.runtime.bootstrap');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_ = false;
dirac.runtime.bootstrap._STAR_boostrap_timeout_STAR_ = (100);
dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_ = [];
dirac.runtime.bootstrap.notify_listeners_BANG_ = (function dirac$runtime$bootstrap$notify_listeners_BANG_(listeners){
var seq__21176 = cljs.core.seq.call(null,listeners);
var chunk__21177 = null;
var count__21178 = (0);
var i__21179 = (0);
while(true){
if((i__21179 < count__21178)){
var listener = cljs.core._nth.call(null,chunk__21177,i__21179);
listener.call(null);

var G__21180 = seq__21176;
var G__21181 = chunk__21177;
var G__21182 = count__21178;
var G__21183 = (i__21179 + (1));
seq__21176 = G__21180;
chunk__21177 = G__21181;
count__21178 = G__21182;
i__21179 = G__21183;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21176);
if(temp__4657__auto__){
var seq__21176__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21176__$1)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,seq__21176__$1);
var G__21184 = cljs.core.chunk_rest.call(null,seq__21176__$1);
var G__21185 = c__7559__auto__;
var G__21186 = cljs.core.count.call(null,c__7559__auto__);
var G__21187 = (0);
seq__21176 = G__21184;
chunk__21177 = G__21185;
count__21178 = G__21186;
i__21179 = G__21187;
continue;
} else {
var listener = cljs.core.first.call(null,seq__21176__$1);
listener.call(null);

var G__21188 = cljs.core.next.call(null,seq__21176__$1);
var G__21189 = null;
var G__21190 = (0);
var G__21191 = (0);
seq__21176 = G__21188;
chunk__21177 = G__21189;
count__21178 = G__21190;
i__21179 = G__21191;
continue;
}
} else {
return null;
}
}
break;
}
});
dirac.runtime.bootstrap.boostrap_if_needed_BANG_ = (function dirac$runtime$bootstrap$boostrap_if_needed_BANG_(){
if(cljs.core.truth_(dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_)){
} else {
clojure.browser.repl.bootstrap.call(null);

dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_ = true;
}

dirac.runtime.bootstrap.notify_listeners_BANG_.call(null,dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_);

return dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_ = [];
});
dirac.runtime.bootstrap.call_after_document_finished_loading = (function dirac$runtime$bootstrap$call_after_document_finished_loading(f,timeout){
if(cljs.core._EQ_.call(null,document.readyState,"loading")){
return setTimeout((function (){
return dirac$runtime$bootstrap$call_after_document_finished_loading.call(null,f,dirac.runtime.bootstrap._STAR_boostrap_timeout_STAR_);
}),timeout);
} else {
return f.call(null);
}
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 * 
 *   Note that this function might do its job asynchronously if at the time of calling the document is still loading.
 *   You may provide a callback which will be called immediatelly after bootstrapping happens.
 *   It has no effect if called after bootstrapping has been already done. Only the callback is called immediatelly.
 */
dirac.runtime.bootstrap.bootstrap_BANG_ = (function dirac$runtime$bootstrap$bootstrap_BANG_(var_args){
var args21192 = [];
var len__7823__auto___21195 = arguments.length;
var i__7824__auto___21196 = (0);
while(true){
if((i__7824__auto___21196 < len__7823__auto___21195)){
args21192.push((arguments[i__7824__auto___21196]));

var G__21197 = (i__7824__auto___21196 + (1));
i__7824__auto___21196 = G__21197;
continue;
} else {
}
break;
}

var G__21194 = args21192.length;
switch (G__21194) {
case 0:
return dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21192.length)].join('')));

}
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.bootstrap.bootstrap_BANG_.call(null,null);
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (callback){
if(cljs.core.some_QMARK_.call(null,callback)){
if(cljs.core.fn_QMARK_.call(null,callback)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The callback parameter to clojure.browser.repl/bootstrap expected to be a function."),cljs.core.str("Got "),cljs.core.str(cljs.core.type.call(null,callback)),cljs.core.str(" instead.")].join('')),cljs.core.str("\n"),cljs.core.str("(fn? callback)")].join('')));
}

dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_.push(callback);
} else {
}

return dirac.runtime.bootstrap.call_after_document_finished_loading.call(null,dirac.runtime.bootstrap.boostrap_if_needed_BANG_,(0));
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=bootstrap.js.map