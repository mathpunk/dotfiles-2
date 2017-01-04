// Compiled by ClojureScript 1.9.229 {}
goog.provide('anansi.reading.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent_material_ui.core');
goog.require('cljs.tools.reader.edn');
goog.require('anansi.reading.db');
goog.require('datascript.core');
goog.require('clojure.walk');
cljs.core.enable_console_print_BANG_.call(null);
anansi.reading.app.schema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("pin","href","pin/href",-793678553),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("pin","tags","pin/tags",1771036396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null);
if(typeof anansi.reading.app.conn !== 'undefined'){
} else {
anansi.reading.app.conn = (function (){
cljs.core.println.call(null,"Creating connection");

return datascript.core.create_conn.call(null,anansi.reading.app.schema);
})()
;
}
if(typeof anansi.reading.app.state !== 'undefined'){
} else {
anansi.reading.app.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
anansi.reading.app.edn_handler = (function anansi$reading$app$edn_handler(res){
return cljs.tools.reader.edn.read_string.call(null,res);
});
anansi.reading.app.error_handler = (function anansi$reading$app$error_handler(p__16686){
var map__16689 = p__16686;
var map__16689__$1 = ((((!((map__16689 == null)))?((((map__16689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16689):map__16689);
var status = cljs.core.get.call(null,map__16689__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__16689__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("Error while fetching: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
anansi.reading.app.insert_entity = (function anansi$reading$app$insert_entity(ent){
return datascript.core.transact_BANG_.call(null,anansi.reading.app.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ent], null));
});
anansi.reading.app.insert_many = (function anansi$reading$app$insert_many(ents){
var seq__16695 = cljs.core.seq.call(null,ents);
var chunk__16696 = null;
var count__16697 = (0);
var i__16698 = (0);
while(true){
if((i__16698 < count__16697)){
var e = cljs.core._nth.call(null,chunk__16696,i__16698);
anansi.reading.app.insert_entity.call(null,e);

var G__16699 = seq__16695;
var G__16700 = chunk__16696;
var G__16701 = count__16697;
var G__16702 = (i__16698 + (1));
seq__16695 = G__16699;
chunk__16696 = G__16700;
count__16697 = G__16701;
i__16698 = G__16702;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16695);
if(temp__4657__auto__){
var seq__16695__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16695__$1)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,seq__16695__$1);
var G__16703 = cljs.core.chunk_rest.call(null,seq__16695__$1);
var G__16704 = c__7559__auto__;
var G__16705 = cljs.core.count.call(null,c__7559__auto__);
var G__16706 = (0);
seq__16695 = G__16703;
chunk__16696 = G__16704;
count__16697 = G__16705;
i__16698 = G__16706;
continue;
} else {
var e = cljs.core.first.call(null,seq__16695__$1);
anansi.reading.app.insert_entity.call(null,e);

var G__16707 = cljs.core.next.call(null,seq__16695__$1);
var G__16708 = null;
var G__16709 = (0);
var G__16710 = (0);
seq__16695 = G__16707;
chunk__16696 = G__16708;
count__16697 = G__16709;
i__16698 = G__16710;
continue;
}
} else {
return null;
}
}
break;
}
});
anansi.reading.app.fetch_recent = (function anansi$reading$app$fetch_recent(handler){
var url = "/pins/recent";
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),anansi.reading.app.error_handler], null));
});
anansi.reading.app.posts = (function anansi$reading$app$posts(){
return new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(anansi.reading.app.fetch_recent.call(null,anansi.reading.app.edn_handler));
});
anansi.reading.app.recent_posts = (function anansi$reading$app$recent_posts(){
return anansi.reading.app.fetch_recent.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"posts","posts",760043164),anansi.reading.app.edn_handler));
});
anansi.reading.app.pin__GT_entity = (function anansi$reading$app$pin__GT_entity(p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("pin","href","pin/href",-793678553),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword("pin","tags","pin/tags",1771036396),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(p)], null);
});
anansi.reading.app.do_to_recent_posts = (function anansi$reading$app$do_to_recent_posts(f){

return anansi.reading.app.fetch_recent.call(null,cljs.core.comp.call(null,f,new cljs.core.Keyword(null,"posts","posts",760043164),anansi.reading.app.edn_handler));
});
anansi.reading.app.do_to_recent_posts.call(null,(function (p1__16711_SHARP_){
var seq__16712 = cljs.core.seq.call(null,p1__16711_SHARP_);
var chunk__16713 = null;
var count__16714 = (0);
var i__16715 = (0);
while(true){
if((i__16715 < count__16714)){
var p = cljs.core._nth.call(null,chunk__16713,i__16715);
anansi.reading.app.insert_entity.call(null,anansi.reading.app.pin__GT_entity.call(null,p));

var G__16716 = seq__16712;
var G__16717 = chunk__16713;
var G__16718 = count__16714;
var G__16719 = (i__16715 + (1));
seq__16712 = G__16716;
chunk__16713 = G__16717;
count__16714 = G__16718;
i__16715 = G__16719;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16712);
if(temp__4657__auto__){
var seq__16712__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16712__$1)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,seq__16712__$1);
var G__16720 = cljs.core.chunk_rest.call(null,seq__16712__$1);
var G__16721 = c__7559__auto__;
var G__16722 = cljs.core.count.call(null,c__7559__auto__);
var G__16723 = (0);
seq__16712 = G__16720;
chunk__16713 = G__16721;
count__16714 = G__16722;
i__16715 = G__16723;
continue;
} else {
var p = cljs.core.first.call(null,seq__16712__$1);
anansi.reading.app.insert_entity.call(null,anansi.reading.app.pin__GT_entity.call(null,p));

var G__16724 = cljs.core.next.call(null,seq__16712__$1);
var G__16725 = null;
var G__16726 = (0);
var G__16727 = (0);
seq__16712 = G__16724;
chunk__16713 = G__16725;
count__16714 = G__16726;
i__16715 = G__16727;
continue;
}
} else {
return null;
}
}
break;
}
}));
datascript.core.listen_BANG_.call(null,anansi.reading.app.conn,new cljs.core.Keyword(null,"render","render",-1408033454),(function (tx_report){
return anansi.reading.app.render.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report));
}));
datascript.core.listen_BANG_.call(null,anansi.reading.app.conn,new cljs.core.Keyword(null,"log","log",-1595516004),(function (tx_report){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report));
}));
anansi.reading.app.welcome_pane = (function anansi$reading$app$welcome_pane(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#welcome","div#welcome",573460388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Good morning--"], null)], null);
});
anansi.reading.app.summary = (function anansi$reading$app$summary(db){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#summary","div#summary",-683574477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#today","div#today",-1672087757),"today is 2016-10-16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#source","div#source",1471871161),[cljs.core.str("viewing "),cljs.core.str(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))),cljs.core.str("'s pins, retrieved "),cljs.core.str(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#progress","div#progress",1147844202),[cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)))),cljs.core.str(" pins to review")].join('')], null)], null);
});
anansi.reading.app.display = (function anansi$reading$app$display(db){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pins","div#pins",-2100916802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Data"], null),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))], null);
});
anansi.reading.app.navigation = (function anansi$reading$app$navigation(db){
return "Getting from one data slice view to another.";
});
anansi.reading.app.actions = (function anansi$reading$app$actions(db){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["edit tags","place into a lane","kick off with a 'huh'"], null);
});
anansi.reading.app.brushes = (function anansi$reading$app$brushes(db){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["visually display relationships, entity to entity and entity-now to entity-will"], null);
});
anansi.reading.app.app = (function anansi$reading$app$app(db){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app","div#app",840279329),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.welcome_pane], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.summary,anansi.reading.app.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.display,anansi.reading.app.state], null)], null);
});
anansi.reading.app.render = (function anansi$reading$app$render(var_args){
var args16728 = [];
var len__7823__auto___16731 = arguments.length;
var i__7824__auto___16732 = (0);
while(true){
if((i__7824__auto___16732 < len__7823__auto___16731)){
args16728.push((arguments[i__7824__auto___16732]));

var G__16733 = (i__7824__auto___16732 + (1));
i__7824__auto___16732 = G__16733;
continue;
} else {
}
break;
}

var G__16730 = args16728.length;
switch (G__16730) {
case 0:
return anansi.reading.app.render.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return anansi.reading.app.render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16728.length)].join('')));

}
});

anansi.reading.app.render.cljs$core$IFn$_invoke$arity$0 = (function (){
return anansi.reading.app.render.call(null,cljs.core.deref.call(null,anansi.reading.app.conn));
});

anansi.reading.app.render.cljs$core$IFn$_invoke$arity$1 = (function (db){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [anansi.reading.app.app,db], null),document.getElementById("container"));
});

anansi.reading.app.render.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=app.js.map