// Compiled by ClojureScript 1.9.229 {}
goog.provide('anansi.reading.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent_material_ui.core');
goog.require('cljs.tools.reader.edn');
goog.require('anansi.reading.db');
goog.require('datascript.core');
goog.require('anansi.reading.components');
goog.require('clojure.walk');
cljs.core.enable_console_print_BANG_.call(null);
anansi.reading.app.schema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("pin","time","pin/time",1385734879),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("pin","href","pin/href",-793678553),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("pin","tags","pin/tags",1771036396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null);
if(typeof anansi.reading.app.conn !== 'undefined'){
} else {
anansi.reading.app.conn = (function (){
cljs.core.println.call(null,"Creating connection");

return datascript.core.create_conn.call(null,anansi.reading.app.schema);
})()
;
}
anansi.reading.app.add_pin = (function anansi$reading$app$add_pin(pin){
var ent = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("pin","time","pin/time",1385734879),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(pin),new cljs.core.Keyword("pin","hash","pin/hash",-14162891),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(pin),new cljs.core.Keyword("pin","href","pin/href",-793678553),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(pin),new cljs.core.Keyword("pin","tags","pin/tags",1771036396),clojure.string.split.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(pin),/ /)], null);
return datascript.core.transact_BANG_.call(null,anansi.reading.app.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ent], null));
});
if(typeof anansi.reading.app.state !== 'undefined'){
} else {
anansi.reading.app.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
anansi.reading.app.handler = (function anansi$reading$app$handler(res){
var edn = cljs.tools.reader.edn.read_string.call(null,res);
cljs.core.reset_BANG_.call(null,anansi.reading.app.state,edn);

var seq__16669 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anansi.reading.app.state)));
var chunk__16670 = null;
var count__16671 = (0);
var i__16672 = (0);
while(true){
if((i__16672 < count__16671)){
var p = cljs.core._nth.call(null,chunk__16670,i__16672);
anansi.reading.app.add_pin.call(null,p);

var G__16673 = seq__16669;
var G__16674 = chunk__16670;
var G__16675 = count__16671;
var G__16676 = (i__16672 + (1));
seq__16669 = G__16673;
chunk__16670 = G__16674;
count__16671 = G__16675;
i__16672 = G__16676;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16669);
if(temp__4657__auto__){
var seq__16669__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16669__$1)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,seq__16669__$1);
var G__16677 = cljs.core.chunk_rest.call(null,seq__16669__$1);
var G__16678 = c__7559__auto__;
var G__16679 = cljs.core.count.call(null,c__7559__auto__);
var G__16680 = (0);
seq__16669 = G__16677;
chunk__16670 = G__16678;
count__16671 = G__16679;
i__16672 = G__16680;
continue;
} else {
var p = cljs.core.first.call(null,seq__16669__$1);
anansi.reading.app.add_pin.call(null,p);

var G__16681 = cljs.core.next.call(null,seq__16669__$1);
var G__16682 = null;
var G__16683 = (0);
var G__16684 = (0);
seq__16669 = G__16681;
chunk__16670 = G__16682;
count__16671 = G__16683;
i__16672 = G__16684;
continue;
}
} else {
return null;
}
}
break;
}
});
anansi.reading.app.error_handler = (function anansi$reading$app$error_handler(p__16685){
var map__16688 = p__16685;
var map__16688__$1 = ((((!((map__16688 == null)))?((((map__16688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16688):map__16688);
var status = cljs.core.get.call(null,map__16688__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__16688__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
ajax.core.GET.call(null,"/pins/recent",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),anansi.reading.app.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),anansi.reading.app.error_handler], null));
anansi.reading.app.welcome_pane = (function anansi$reading$app$welcome_pane(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#welcome","div#welcome",573460388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Good afternoon--"], null)], null);
});
anansi.reading.app.summary_pane = (function anansi$reading$app$summary_pane(db){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#summary","div#summary",-683574477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#today","div#today",-1672087757),"today is 2016-10-16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#source","div#source",1471871161),[cljs.core.str("viewing "),cljs.core.str(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))),cljs.core.str("'s pins, retrieved "),cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#progress","div#progress",1147844202),[cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)))),cljs.core.str(" pins to review")].join('')], null)], null);
});
anansi.reading.app.one_pin = (function anansi$reading$app$one_pin(){
return ajax.core.GET.call(null,"/pins/f3f8be26fc3df85b35089ee5fe94468f");
});
anansi.reading.app.all_tags = (function anansi$reading$app$all_tags(){
return [cljs.core.str(ajax.core.GET.call(null,"/pins/tags"))].join('');
});
anansi.reading.app.review_pane = (function anansi$reading$app$review_pane(db){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pins","div#pins",-2100916802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(anansi.reading.app.one_pin.call(null))].join('')], null)], null);
});
anansi.reading.app.app = (function anansi$reading$app$app(db){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app","div#app",840279329),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.welcome_pane], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.summary_pane,anansi.reading.app.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.review_pane,anansi.reading.app.state], null)], null);
});
anansi.reading.app.render = (function anansi$reading$app$render(var_args){
var args16690 = [];
var len__7823__auto___16693 = arguments.length;
var i__7824__auto___16694 = (0);
while(true){
if((i__7824__auto___16694 < len__7823__auto___16693)){
args16690.push((arguments[i__7824__auto___16694]));

var G__16695 = (i__7824__auto___16694 + (1));
i__7824__auto___16694 = G__16695;
continue;
} else {
}
break;
}

var G__16692 = args16690.length;
switch (G__16692) {
case 0:
return anansi.reading.app.render.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return anansi.reading.app.render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16690.length)].join('')));

}
});

anansi.reading.app.render.cljs$core$IFn$_invoke$arity$0 = (function (){
return anansi.reading.app.render.call(null,cljs.core.deref.call(null,anansi.reading.app.conn));
});

anansi.reading.app.render.cljs$core$IFn$_invoke$arity$1 = (function (db){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.app,db], null),document.getElementById("container"));
});

anansi.reading.app.render.cljs$lang$maxFixedArity = 1;

datascript.core.listen_BANG_.call(null,anansi.reading.app.conn,new cljs.core.Keyword(null,"render","render",-1408033454),(function (tx_report){
return anansi.reading.app.render.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report));
}));
datascript.core.listen_BANG_.call(null,anansi.reading.app.conn,new cljs.core.Keyword(null,"log","log",-1595516004),(function (tx_report){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report));
}));

//# sourceMappingURL=app.js.map