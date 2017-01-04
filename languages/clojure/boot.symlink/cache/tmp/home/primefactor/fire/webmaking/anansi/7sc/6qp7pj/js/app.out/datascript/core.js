// Compiled by ClojureScript 1.9.229 {}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.query');
goog.require('datascript.btset');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.impl.entity');
datascript.core.q = datascript.query.q;
goog.exportSymbol('datascript.core.q', datascript.core.q);
datascript.core.entity = datascript.impl.entity.entity;
goog.exportSymbol('datascript.core.entity', datascript.core.entity);
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error("Assert failed: (de/entity? entity)"));
}

return entity.db;
});
goog.exportSymbol('datascript.core.entity_db', datascript.core.entity_db);
datascript.core.datom = datascript.db.datom;
goog.exportSymbol('datascript.core.datom', datascript.core.datom);
datascript.core.pull = datascript.pull_api.pull;
goog.exportSymbol('datascript.core.pull', datascript.core.pull);
datascript.core.pull_many = datascript.pull_api.pull_many;
goog.exportSymbol('datascript.core.pull_many', datascript.core.pull_many);
datascript.core.touch = datascript.impl.entity.touch;
goog.exportSymbol('datascript.core.touch', datascript.core.touch);
datascript.core.empty_db = datascript.db.empty_db;
goog.exportSymbol('datascript.core.empty_db', datascript.core.empty_db);
datascript.core.init_db = datascript.db.init_db;
goog.exportSymbol('datascript.core.init_db', datascript.core.init_db);
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
goog.exportSymbol('datascript.core.datom_QMARK_', datascript.core.datom_QMARK_);
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
goog.exportSymbol('datascript.core.db_QMARK_', datascript.core.db_QMARK_);
datascript.core.tx0 = datascript.db.tx0;
goog.exportSymbol('datascript.core.tx0', datascript.core.tx0);
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
goog.exportSymbol('datascript.core.is_filtered', datascript.core.is_filtered);
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
var fdb = db;
var u = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(u,((function (fdb,u){
return (function (p1__16479_SHARP_){
var and__6736__auto__ = pred.call(null,u,p1__16479_SHARP_);
if(cljs.core.truth_(and__6736__auto__)){
return fdb.pred.call(null,p1__16479_SHARP_);
} else {
return and__6736__auto__;
}
});})(fdb,u))
,cljs.core.atom.call(null,(0)),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__16480_SHARP_){
return pred.call(null,db,p1__16480_SHARP_);
}),cljs.core.atom.call(null,(0)),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args16481 = [];
var len__7823__auto___16484 = arguments.length;
var i__7824__auto___16485 = (0);
while(true){
if((i__7824__auto___16485 < len__7823__auto___16484)){
args16481.push((arguments[i__7824__auto___16485]));

var G__16486 = (i__7824__auto___16485 + (1));
i__7824__auto___16485 = G__16486;
continue;
} else {
}
break;
}

var G__16483 = args16481.length;
switch (G__16483) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16481.length)].join('')));

}
});
goog.exportSymbol('datascript.core.with$', datascript.core.with$);

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.call(null,db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;

datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.call(null,db,tx_data));
});
goog.exportSymbol('datascript.core.db_with', datascript.core.db_with);
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args16488 = [];
var len__7823__auto___16491 = arguments.length;
var i__7824__auto___16492 = (0);
while(true){
if((i__7824__auto___16492 < len__7823__auto___16491)){
args16488.push((arguments[i__7824__auto___16492]));

var G__16493 = (i__7824__auto___16492 + (1));
i__7824__auto___16492 = G__16493;
continue;
} else {
}
break;
}

var G__16490 = args16488.length;
switch (G__16490) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16488.length)].join('')));

}
});
goog.exportSymbol('datascript.core.datoms', datascript.core.datoms);

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;

datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args16495 = [];
var len__7823__auto___16498 = arguments.length;
var i__7824__auto___16499 = (0);
while(true){
if((i__7824__auto___16499 < len__7823__auto___16498)){
args16495.push((arguments[i__7824__auto___16499]));

var G__16500 = (i__7824__auto___16499 + (1));
i__7824__auto___16499 = G__16500;
continue;
} else {
}
break;
}

var G__16497 = args16495.length;
switch (G__16497) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16495.length)].join('')));

}
});
goog.exportSymbol('datascript.core.seek_datoms', datascript.core.seek_datoms);

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;

datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._index_range.call(null,db,attr,start,end);
});
goog.exportSymbol('datascript.core.index_range', datascript.core.index_range);
datascript.core.entid = datascript.db.entid;
goog.exportSymbol('datascript.core.entid', datascript.core.entid);
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__6736__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || (conn.cljs$core$IDeref$))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__6736__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__6736__auto__;
}
});
goog.exportSymbol('datascript.core.conn_QMARK_', datascript.core.conn_QMARK_);
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
goog.exportSymbol('datascript.core.conn_from_db', datascript.core.conn_from_db);
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args16506 = [];
var len__7823__auto___16509 = arguments.length;
var i__7824__auto___16510 = (0);
while(true){
if((i__7824__auto___16510 < len__7823__auto___16509)){
args16506.push((arguments[i__7824__auto___16510]));

var G__16511 = (i__7824__auto___16510 + (1));
i__7824__auto___16510 = G__16511;
continue;
} else {
}
break;
}

var G__16508 = args16506.length;
switch (G__16508) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16506.length)].join('')));

}
});
goog.exportSymbol('datascript.core.conn_from_datoms', datascript.core.conn_from_datoms);

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms,schema));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;

datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args16513 = [];
var len__7823__auto___16516 = arguments.length;
var i__7824__auto___16517 = (0);
while(true){
if((i__7824__auto___16517 < len__7823__auto___16516)){
args16513.push((arguments[i__7824__auto___16517]));

var G__16518 = (i__7824__auto___16517 + (1));
i__7824__auto___16517 = G__16518;
continue;
} else {
}
break;
}

var G__16515 = args16513.length;
switch (G__16515) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16513.length)].join('')));

}
});
goog.exportSymbol('datascript.core.create_conn', datascript.core.create_conn);

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null,schema));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;

datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args16520 = [];
var len__7823__auto___16533 = arguments.length;
var i__7824__auto___16534 = (0);
while(true){
if((i__7824__auto___16534 < len__7823__auto___16533)){
args16520.push((arguments[i__7824__auto___16534]));

var G__16535 = (i__7824__auto___16534 + (1));
i__7824__auto___16534 = G__16535;
continue;
} else {
}
break;
}

var G__16522 = args16520.length;
switch (G__16522) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16520.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_BANG_', datascript.core.transact_BANG_);

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__16523_16537 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__16524_16538 = null;
var count__16525_16539 = (0);
var i__16526_16540 = (0);
while(true){
if((i__16526_16540 < count__16525_16539)){
var vec__16527_16541 = cljs.core._nth.call(null,chunk__16524_16538,i__16526_16540);
var __16542 = cljs.core.nth.call(null,vec__16527_16541,(0),null);
var callback_16543 = cljs.core.nth.call(null,vec__16527_16541,(1),null);
callback_16543.call(null,report);

var G__16544 = seq__16523_16537;
var G__16545 = chunk__16524_16538;
var G__16546 = count__16525_16539;
var G__16547 = (i__16526_16540 + (1));
seq__16523_16537 = G__16544;
chunk__16524_16538 = G__16545;
count__16525_16539 = G__16546;
i__16526_16540 = G__16547;
continue;
} else {
var temp__4657__auto___16548 = cljs.core.seq.call(null,seq__16523_16537);
if(temp__4657__auto___16548){
var seq__16523_16549__$1 = temp__4657__auto___16548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16523_16549__$1)){
var c__7559__auto___16550 = cljs.core.chunk_first.call(null,seq__16523_16549__$1);
var G__16551 = cljs.core.chunk_rest.call(null,seq__16523_16549__$1);
var G__16552 = c__7559__auto___16550;
var G__16553 = cljs.core.count.call(null,c__7559__auto___16550);
var G__16554 = (0);
seq__16523_16537 = G__16551;
chunk__16524_16538 = G__16552;
count__16525_16539 = G__16553;
i__16526_16540 = G__16554;
continue;
} else {
var vec__16530_16555 = cljs.core.first.call(null,seq__16523_16549__$1);
var __16556 = cljs.core.nth.call(null,vec__16530_16555,(0),null);
var callback_16557 = cljs.core.nth.call(null,vec__16530_16555,(1),null);
callback_16557.call(null,report);

var G__16558 = cljs.core.next.call(null,seq__16523_16549__$1);
var G__16559 = null;
var G__16560 = (0);
var G__16561 = (0);
seq__16523_16537 = G__16558;
chunk__16524_16538 = G__16559;
count__16525_16539 = G__16560;
i__16526_16540 = G__16561;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var args16563 = [];
var len__7823__auto___16576 = arguments.length;
var i__7824__auto___16577 = (0);
while(true){
if((i__7824__auto___16577 < len__7823__auto___16576)){
args16563.push((arguments[i__7824__auto___16577]));

var G__16578 = (i__7824__auto___16577 + (1));
i__7824__auto___16577 = G__16578;
continue;
} else {
}
break;
}

var G__16565 = args16563.length;
switch (G__16565) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16563.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__16562_SHARP_){
return cljs.core.assoc.call(null,p1__16562_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__16566_16580 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__16567_16581 = null;
var count__16568_16582 = (0);
var i__16569_16583 = (0);
while(true){
if((i__16569_16583 < count__16568_16582)){
var vec__16570_16584 = cljs.core._nth.call(null,chunk__16567_16581,i__16569_16583);
var __16585 = cljs.core.nth.call(null,vec__16570_16584,(0),null);
var callback_16586 = cljs.core.nth.call(null,vec__16570_16584,(1),null);
callback_16586.call(null,report);

var G__16587 = seq__16566_16580;
var G__16588 = chunk__16567_16581;
var G__16589 = count__16568_16582;
var G__16590 = (i__16569_16583 + (1));
seq__16566_16580 = G__16587;
chunk__16567_16581 = G__16588;
count__16568_16582 = G__16589;
i__16569_16583 = G__16590;
continue;
} else {
var temp__4657__auto___16591 = cljs.core.seq.call(null,seq__16566_16580);
if(temp__4657__auto___16591){
var seq__16566_16592__$1 = temp__4657__auto___16591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16566_16592__$1)){
var c__7559__auto___16593 = cljs.core.chunk_first.call(null,seq__16566_16592__$1);
var G__16594 = cljs.core.chunk_rest.call(null,seq__16566_16592__$1);
var G__16595 = c__7559__auto___16593;
var G__16596 = cljs.core.count.call(null,c__7559__auto___16593);
var G__16597 = (0);
seq__16566_16580 = G__16594;
chunk__16567_16581 = G__16595;
count__16568_16582 = G__16596;
i__16569_16583 = G__16597;
continue;
} else {
var vec__16573_16598 = cljs.core.first.call(null,seq__16566_16592__$1);
var __16599 = cljs.core.nth.call(null,vec__16573_16598,(0),null);
var callback_16600 = cljs.core.nth.call(null,vec__16573_16598,(1),null);
callback_16600.call(null,report);

var G__16601 = cljs.core.next.call(null,seq__16566_16592__$1);
var G__16602 = null;
var G__16603 = (0);
var G__16604 = (0);
seq__16566_16580 = G__16601;
chunk__16567_16581 = G__16602;
count__16568_16582 = G__16603;
i__16569_16583 = G__16604;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args16605 = [];
var len__7823__auto___16608 = arguments.length;
var i__7824__auto___16609 = (0);
while(true){
if((i__7824__auto___16609 < len__7823__auto___16608)){
args16605.push((arguments[i__7824__auto___16609]));

var G__16610 = (i__7824__auto___16609 + (1));
i__7824__auto___16609 = G__16610;
continue;
} else {
}
break;
}

var G__16607 = args16605.length;
switch (G__16607) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16605.length)].join('')));

}
});
goog.exportSymbol('datascript.core.listen_BANG_', datascript.core.listen_BANG_);

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
goog.exportSymbol('datascript.core.unlisten_BANG_', datascript.core.unlisten_BANG_);
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.db.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.db.db_from_reader], null);
var seq__16612_16622 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__16613_16623 = null;
var count__16614_16624 = (0);
var i__16615_16625 = (0);
while(true){
if((i__16615_16625 < count__16614_16624)){
var vec__16616_16626 = cljs.core._nth.call(null,chunk__16613_16623,i__16615_16625);
var tag_16627 = cljs.core.nth.call(null,vec__16616_16626,(0),null);
var cb_16628 = cljs.core.nth.call(null,vec__16616_16626,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_16627,cb_16628);

var G__16629 = seq__16612_16622;
var G__16630 = chunk__16613_16623;
var G__16631 = count__16614_16624;
var G__16632 = (i__16615_16625 + (1));
seq__16612_16622 = G__16629;
chunk__16613_16623 = G__16630;
count__16614_16624 = G__16631;
i__16615_16625 = G__16632;
continue;
} else {
var temp__4657__auto___16633 = cljs.core.seq.call(null,seq__16612_16622);
if(temp__4657__auto___16633){
var seq__16612_16634__$1 = temp__4657__auto___16633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16612_16634__$1)){
var c__7559__auto___16635 = cljs.core.chunk_first.call(null,seq__16612_16634__$1);
var G__16636 = cljs.core.chunk_rest.call(null,seq__16612_16634__$1);
var G__16637 = c__7559__auto___16635;
var G__16638 = cljs.core.count.call(null,c__7559__auto___16635);
var G__16639 = (0);
seq__16612_16622 = G__16636;
chunk__16613_16623 = G__16637;
count__16614_16624 = G__16638;
i__16615_16625 = G__16639;
continue;
} else {
var vec__16619_16640 = cljs.core.first.call(null,seq__16612_16634__$1);
var tag_16641 = cljs.core.nth.call(null,vec__16619_16640,(0),null);
var cb_16642 = cljs.core.nth.call(null,vec__16619_16640,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_16641,cb_16642);

var G__16643 = cljs.core.next.call(null,seq__16612_16634__$1);
var G__16644 = null;
var G__16645 = (0);
var G__16646 = (0);
seq__16612_16622 = G__16643;
chunk__16613_16623 = G__16644;
count__16614_16624 = G__16645;
i__16615_16625 = G__16646;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args16647 = [];
var len__7823__auto___16650 = arguments.length;
var i__7824__auto___16651 = (0);
while(true){
if((i__7824__auto___16651 < len__7823__auto___16650)){
args16647.push((arguments[i__7824__auto___16651]));

var G__16652 = (i__7824__auto___16651 + (1));
i__7824__auto___16651 = G__16652;
continue;
} else {
}
break;
}

var G__16649 = args16647.length;
switch (G__16649) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16647.length)].join('')));

}
});
goog.exportSymbol('datascript.core.tempid', datascript.core.tempid);

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;

datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
goog.exportSymbol('datascript.core.resolve_tempid', datascript.core.resolve_tempid);
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.deref.call(null,conn);
});
goog.exportSymbol('datascript.core.db', datascript.core.db);
datascript.core.transact = (function datascript$core$transact(var_args){
var args16654 = [];
var len__7823__auto___16660 = arguments.length;
var i__7824__auto___16661 = (0);
while(true){
if((i__7824__auto___16661 < len__7823__auto___16660)){
args16654.push((arguments[i__7824__auto___16661]));

var G__16662 = (i__7824__auto___16661 + (1));
i__7824__auto___16661 = G__16662;
continue;
} else {
}
break;
}

var G__16656 = args16654.length;
switch (G__16656) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16654.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact', datascript.core.transact);

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.call(null,conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core16657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core16657 = (function (conn,tx_data,tx_meta,res,meta16658){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta16658 = meta16658;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core16657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_16659,meta16658__$1){
var self__ = this;
var _16659__$1 = this;
return (new datascript.core.t_datascript$core16657(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta16658__$1));
});})(res))
;

datascript.core.t_datascript$core16657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_16659){
var self__ = this;
var _16659__$1 = this;
return self__.meta16658;
});})(res))
;

datascript.core.t_datascript$core16657.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core16657.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core16657.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core16657.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta16658","meta16658",-681641719,null)], null);
});})(res))
;

datascript.core.t_datascript$core16657.cljs$lang$type = true;

datascript.core.t_datascript$core16657.cljs$lang$ctorStr = "datascript.core/t_datascript$core16657";

datascript.core.t_datascript$core16657.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"datascript.core/t_datascript$core16657");
});})(res))
;

datascript.core.__GT_t_datascript$core16657 = ((function (res){
return (function datascript$core$__GT_t_datascript$core16657(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta16658){
return (new datascript.core.t_datascript$core16657(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta16658));
});})(res))
;

}

return (new datascript.core.t_datascript$core16657(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;

datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.core.t_datascript$core16667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core16667 = (function (future_call,f,res,realized,meta16668){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta16668 = meta16668;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core16667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_16669,meta16668__$1){
var self__ = this;
var _16669__$1 = this;
return (new datascript.core.t_datascript$core16667(self__.future_call,self__.f,self__.res,self__.realized,meta16668__$1));
});})(res,realized))
;

datascript.core.t_datascript$core16667.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_16669){
var self__ = this;
var _16669__$1 = this;
return self__.meta16668;
});})(res,realized))
;

datascript.core.t_datascript$core16667.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core16667.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core16667.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core16667.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta16668","meta16668",269215532,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core16667.cljs$lang$type = true;

datascript.core.t_datascript$core16667.cljs$lang$ctorStr = "datascript.core/t_datascript$core16667";

datascript.core.t_datascript$core16667.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"datascript.core/t_datascript$core16667");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core16667 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core16667(future_call__$1,f__$1,res__$1,realized__$1,meta16668){
return (new datascript.core.t_datascript$core16667(future_call__$1,f__$1,res__$1,realized__$1,meta16668));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core16667(datascript$core$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args16670 = [];
var len__7823__auto___16673 = arguments.length;
var i__7824__auto___16674 = (0);
while(true){
if((i__7824__auto___16674 < len__7823__auto___16673)){
args16670.push((arguments[i__7824__auto___16674]));

var G__16675 = (i__7824__auto___16674 + (1));
i__7824__auto___16674 = G__16675;
continue;
} else {
}
break;
}

var G__16672 = args16670.length;
switch (G__16672) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16670.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_async', datascript.core.transact_async);

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.call(null,conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datascript.core.future_call.call(null,(function (){
return datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;

datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args16677 = [];
var len__7823__auto___16680 = arguments.length;
var i__7824__auto___16681 = (0);
while(true){
if((i__7824__auto___16681 < len__7823__auto___16680)){
args16677.push((arguments[i__7824__auto___16681]));

var G__16682 = (i__7824__auto___16681 + (1));
i__7824__auto___16681 = G__16682;
continue;
} else {
}
break;
}

var G__16679 = args16677.length;
switch (G__16679) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16677.length)].join('')));

}
});
goog.exportSymbol('datascript.core.squuid', datascript.core.squuid);

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.call(null,(new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str(datascript.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;

datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str(uuid)].join(''),(0),(8)),(16)) * (1000));
});
goog.exportSymbol('datascript.core.squuid_time_millis', datascript.core.squuid_time_millis);

//# sourceMappingURL=core.js.map