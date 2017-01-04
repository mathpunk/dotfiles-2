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
anansi.reading.app.schema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("pin","user","pin/user",1532353143),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("pin","href","pin/href",-793678553),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinatlity","db/cardinatlity",2118232098),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("pin","tags","pin/tags",1771036396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null);
if(typeof anansi.reading.app.conn !== 'undefined'){
} else {
anansi.reading.app.conn = (function (){
cljs.core.println.call(null,"Creating connection");

return datascript.core.create_conn.call(null,anansi.reading.app.schema);
})()
;
}
anansi.reading.app.add_pin = (function anansi$reading$app$add_pin(pin){
var ent = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("pin","description","pin/description",-1428474107),new cljs.core.Keyword("pin","href","pin/href",-793678553),new cljs.core.Keyword("pin","meta","pin/meta",1499590857),new cljs.core.Keyword("pin","tags","pin/tags",1771036396),new cljs.core.Keyword("pin","extended","pin/extended",-1515298226),new cljs.core.Keyword("pin","toread","pin/toread",-816437006),new cljs.core.Keyword("pin","hash","pin/hash",-14162891),new cljs.core.Keyword("pin","shared","pin/shared",-384036066),new cljs.core.Keyword("pin","time","pin/time",1385734879)],[new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(pin),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(pin),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(pin),clojure.string.split.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(pin),/ /),new cljs.core.Keyword(null,"extended","extended",-1515212057).cljs$core$IFn$_invoke$arity$1(pin),new cljs.core.Keyword(null,"toread","toread",-816809857).cljs$core$IFn$_invoke$arity$1(pin),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(pin),new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(pin),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(pin)]);
return datascript.core.transact_BANG_.call(null,anansi.reading.app.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ent], null));
});
if(typeof anansi.reading.app.state !== 'undefined'){
} else {
anansi.reading.app.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
anansi.reading.app.handler = (function anansi$reading$app$handler(res){
var edn = cljs.tools.reader.edn.read_string.call(null,res);
cljs.core.reset_BANG_.call(null,anansi.reading.app.state,edn);

var seq__16696 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anansi.reading.app.state)));
var chunk__16697 = null;
var count__16698 = (0);
var i__16699 = (0);
while(true){
if((i__16699 < count__16698)){
var p = cljs.core._nth.call(null,chunk__16697,i__16699);
anansi.reading.app.add_pin.call(null,p);

var G__16700 = seq__16696;
var G__16701 = chunk__16697;
var G__16702 = count__16698;
var G__16703 = (i__16699 + (1));
seq__16696 = G__16700;
chunk__16697 = G__16701;
count__16698 = G__16702;
i__16699 = G__16703;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16696);
if(temp__4657__auto__){
var seq__16696__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16696__$1)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,seq__16696__$1);
var G__16704 = cljs.core.chunk_rest.call(null,seq__16696__$1);
var G__16705 = c__7559__auto__;
var G__16706 = cljs.core.count.call(null,c__7559__auto__);
var G__16707 = (0);
seq__16696 = G__16704;
chunk__16697 = G__16705;
count__16698 = G__16706;
i__16699 = G__16707;
continue;
} else {
var p = cljs.core.first.call(null,seq__16696__$1);
anansi.reading.app.add_pin.call(null,p);

var G__16708 = cljs.core.next.call(null,seq__16696__$1);
var G__16709 = null;
var G__16710 = (0);
var G__16711 = (0);
seq__16696 = G__16708;
chunk__16697 = G__16709;
count__16698 = G__16710;
i__16699 = G__16711;
continue;
}
} else {
return null;
}
}
break;
}
});
anansi.reading.app.error_handler = (function anansi$reading$app$error_handler(p__16712){
var map__16715 = p__16712;
var map__16715__$1 = ((((!((map__16715 == null)))?((((map__16715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16715):map__16715);
var status = cljs.core.get.call(null,map__16715__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__16715__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
ajax.core.GET.call(null,"/recent",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),anansi.reading.app.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),anansi.reading.app.error_handler], null));
anansi.reading.app.welcome_pane = (function anansi$reading$app$welcome_pane(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#welcome","div#welcome",573460388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Good afternoon--"], null)], null);
});
anansi.reading.app.summary_pane = (function anansi$reading$app$summary_pane(db){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#summary","div#summary",-683574477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#today","div#today",-1672087757),"today is 2016-10-16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#source","div#source",1471871161),[cljs.core.str("viewing "),cljs.core.str(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))),cljs.core.str("'s pins, retrieved "),cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#progress","div#progress",1147844202),[cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)))),cljs.core.str(" pins to review")].join('')], null)], null);
});
anansi.reading.app.review_pane = (function anansi$reading$app$review_pane(db){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pins","div#pins",-2100916802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Data"], null),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))], null);
});
anansi.reading.app.app = (function anansi$reading$app$app(db){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app","div#app",840279329),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.welcome_pane], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.summary_pane,anansi.reading.app.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.review_pane,anansi.reading.app.state], null)], null);
});
anansi.reading.app.render = (function anansi$reading$app$render(var_args){
var args16717 = [];
var len__7823__auto___16720 = arguments.length;
var i__7824__auto___16721 = (0);
while(true){
if((i__7824__auto___16721 < len__7823__auto___16720)){
args16717.push((arguments[i__7824__auto___16721]));

var G__16722 = (i__7824__auto___16721 + (1));
i__7824__auto___16721 = G__16722;
continue;
} else {
}
break;
}

var G__16719 = args16717.length;
switch (G__16719) {
case 0:
return anansi.reading.app.render.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return anansi.reading.app.render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16717.length)].join('')));

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