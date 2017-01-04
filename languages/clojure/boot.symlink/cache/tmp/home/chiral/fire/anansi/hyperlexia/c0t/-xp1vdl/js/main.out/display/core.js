// Compiled by ClojureScript 1.9.293 {}
goog.provide('display.core');
goog.require('cljs.core');
goog.require('common.hello');
goog.require('ajax.core');
goog.require('reagent.core');
if(typeof display.core.app_state !== 'undefined'){
} else {
display.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(2016)], null));
}
display.core.handler = (function display$core$handler(response){
return console.log([cljs.core.str(response)].join(''));
});
display.core.error_handler = (function display$core$error_handler(p__11231){
var map__11234 = p__11231;
var map__11234__$1 = ((((!((map__11234 == null)))?((((map__11234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11234):map__11234);
var status = cljs.core.get.call(null,map__11234__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__11234__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
display.core.get_tweet_by_id = (function display$core$get_tweet_by_id(){
return ajax.core.GET.call(null,"/twitter",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(798330959271559168)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),display.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),display.core.error_handler], null));
});
display.core.main = (function display$core$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),common.hello.foo_cljc.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,display.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-toolbar","div.btn-toolbar",-2106091207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger","button.btn.btn-danger",533883282),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,display.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.inc);
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success","button.btn.btn-success",574341715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,display.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.dec);
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log(display.core.get_tweet_by_id.call(null));
})], null),"Console.log"], null)], null)], null);
});
display.core.get_tweet_by_id.call(null);
display.core.start_BANG_ = (function display$core$start_BANG_(){
console.log("Starting the app");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [display.core.main], null),document.getElementById("app"));
});
display.core.start_BANG_.call(null);
cljs.core.println.call(null,"foo");

//# sourceMappingURL=core.js.map