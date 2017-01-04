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
anansi.reading.app.str__GT_set = (function anansi$reading$app$str__GT_set(tags){
if(cljs.core.empty_QMARK_.call(null,tags)){
return cljs.core.PersistentVector.EMPTY;
} else {
return clojure.string.split.call(null,tags,/ /);
}
});
anansi.reading.app.add_pin = (function anansi$reading$app$add_pin(pin){
var ent = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("pin","time","pin/time",1385734879),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(pin),new cljs.core.Keyword("pin","href","pin/href",-793678553),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(pin),new cljs.core.Keyword("pin","hash","pin/hash",-14162891),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(pin),new cljs.core.Keyword("pin","tags","pin/tags",1771036396),anansi.reading.app.str__GT_set.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(pin))], null);
return datascript.core.transact_BANG_.call(null,anansi.reading.app.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ent], null));
});
if(typeof anansi.reading.app.state !== 'undefined'){
} else {
anansi.reading.app.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
anansi.reading.app.handler = (function anansi$reading$app$handler(res){
var edn = cljs.tools.reader.edn.read_string.call(null,res);
cljs.core.reset_BANG_.call(null,anansi.reading.app.state,edn);

var seq__21993 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anansi.reading.app.state)));
var chunk__21994 = null;
var count__21995 = (0);
var i__21996 = (0);
while(true){
if((i__21996 < count__21995)){
var p = cljs.core._nth.call(null,chunk__21994,i__21996);
anansi.reading.app.add_pin.call(null,p);

var G__21997 = seq__21993;
var G__21998 = chunk__21994;
var G__21999 = count__21995;
var G__22000 = (i__21996 + (1));
seq__21993 = G__21997;
chunk__21994 = G__21998;
count__21995 = G__21999;
i__21996 = G__22000;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21993);
if(temp__4657__auto__){
var seq__21993__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21993__$1)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,seq__21993__$1);
var G__22001 = cljs.core.chunk_rest.call(null,seq__21993__$1);
var G__22002 = c__7559__auto__;
var G__22003 = cljs.core.count.call(null,c__7559__auto__);
var G__22004 = (0);
seq__21993 = G__22001;
chunk__21994 = G__22002;
count__21995 = G__22003;
i__21996 = G__22004;
continue;
} else {
var p = cljs.core.first.call(null,seq__21993__$1);
anansi.reading.app.add_pin.call(null,p);

var G__22005 = cljs.core.next.call(null,seq__21993__$1);
var G__22006 = null;
var G__22007 = (0);
var G__22008 = (0);
seq__21993 = G__22005;
chunk__21994 = G__22006;
count__21995 = G__22007;
i__21996 = G__22008;
continue;
}
} else {
return null;
}
}
break;
}
});
anansi.reading.app.error_handler = (function anansi$reading$app$error_handler(p__22009){
var map__22012 = p__22009;
var map__22012__$1 = ((((!((map__22012 == null)))?((((map__22012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22012):map__22012);
var status = cljs.core.get.call(null,map__22012__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22012__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
anansi.reading.app.one_pin_pane = (function anansi$reading$app$one_pin_pane(db){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pin","div#pin",-111819164),new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))], null);
});
anansi.reading.app.app = (function anansi$reading$app$app(db){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app","div#app",840279329),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.welcome_pane], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.summary_pane,anansi.reading.app.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.review_pane,anansi.reading.app.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.one_pin_pane,anansi.reading.app.state], null)], null);
});
anansi.reading.app.render = (function anansi$reading$app$render(var_args){
var args22014 = [];
var len__7823__auto___22017 = arguments.length;
var i__7824__auto___22018 = (0);
while(true){
if((i__7824__auto___22018 < len__7823__auto___22017)){
args22014.push((arguments[i__7824__auto___22018]));

var G__22019 = (i__7824__auto___22018 + (1));
i__7824__auto___22018 = G__22019;
continue;
} else {
}
break;
}

var G__22016 = args22014.length;
switch (G__22016) {
case 0:
return anansi.reading.app.render.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return anansi.reading.app.render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22014.length)].join('')));

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