// Compiled by ClojureScript 1.9.229 {}
goog.provide('dirac.runtime.preload');
goog.require('cljs.core');
goog.require('dirac.runtime');
dirac.runtime.preload.config = cljs.core.PersistentArrayMap.EMPTY;
dirac.runtime.set_prefs_BANG_.call(null,cljs.core.merge.call(null,dirac.runtime.get_prefs.call(null),dirac.runtime.preload.config));
if(cljs.core.not.call(null,dirac.runtime.get_pref.call(null,new cljs.core.Keyword(null,"suppress-preload-install","suppress-preload-install",1724845090)))){
dirac.runtime.install_BANG_.call(null);
} else {
}

//# sourceMappingURL=preload.js.map