// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.preload');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.core');
devtools.preload.config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formatters","formatters",-1875637118),new cljs.core.Keyword(null,"hints","hints",-991113151),new cljs.core.Keyword(null,"async","async",1050769601)], null)], null);
devtools.prefs.merge_prefs_BANG_.call(null,devtools.preload.config);
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"suppress-preload-install","suppress-preload-install",1724845090)))){
devtools.core.install_BANG_.call(null);
} else {
}

//# sourceMappingURL=preload.js.map