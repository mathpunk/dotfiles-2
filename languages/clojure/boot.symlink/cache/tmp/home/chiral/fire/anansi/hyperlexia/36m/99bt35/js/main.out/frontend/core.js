// Compiled by ClojureScript 1.9.293 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('common.hello');
goog.require('foo.bar');
if(typeof frontend.core.app_state !== 'undefined'){
} else {
frontend.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(2016)], null));
}
frontend.core.main = (function frontend$core$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),common.hello.foo_cljc.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-toolbar","div.btn-toolbar",-2106091207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger","button.btn.btn-danger",533883282),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.inc);
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success","button.btn.btn-success",574341715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.dec);
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log(cljs.core.deref.call(null,frontend.core.app_state));
})], null),"Console.log"], null)], null)], null);
});
frontend.core.start_BANG_ = (function frontend$core$start_BANG_(){
console.log("Starting the app");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.main], null),document.getElementById("app"));
});
frontend.core.start_BANG_.call(null);
console.log([cljs.core.str(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bar","bar",-1386246584),(3),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"abc","abc",-1232035677)], null))].join(''));
foo();

//# sourceMappingURL=core.js.map