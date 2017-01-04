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
return (function (p1__16461_SHARP_){
var and__6735__auto__ = pred.call(null,u,p1__16461_SHARP_);
if(cljs.core.truth_(and__6735__auto__)){
return fdb.pred.call(null,p1__16461_SHARP_);
} else {
return and__6735__auto__;
}
});})(fdb,u))
,cljs.core.atom.call(null,(0)),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__16462_SHARP_){
return pred.call(null,db,p1__16462_SHARP_);
}),cljs.core.atom.call(null,(0)),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args16463 = [];
var len__7822__auto___16466 = arguments.length;
var i__7823__auto___16467 = (0);
while(true){
if((i__7823__auto___16467 < len__7822__auto___16466)){
args16463.push((arguments[i__7823__auto___16467]));

var G__16468 = (i__7823__auto___16467 + (1));
i__7823__auto___16467 = G__16468;
continue;
} else {
}
break;
}

var G__16465 = args16463.length;
switch (G__16465) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16463.length)].join('')));

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
var args16470 = [];
var len__7822__auto___16473 = arguments.length;
var i__7823__auto___16474 = (0);
while(true){
if((i__7823__auto___16474 < len__7822__auto___16473)){
args16470.push((arguments[i__7823__auto___16474]));

var G__16475 = (i__7823__auto___16474 + (1));
i__7823__auto___16474 = G__16475;
continue;
} else {
}
break;
}

var G__16472 = args16470.length;
switch (G__16472) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16470.length)].join('')));

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
var args16477 = [];
var len__7822__auto___16480 = arguments.length;
var i__7823__auto___16481 = (0);
while(true){
if((i__7823__auto___16481 < len__7822__auto___16480)){
args16477.push((arguments[i__7823__auto___16481]));

var G__16482 = (i__7823__auto___16481 + (1));
i__7823__auto___16481 = G__16482;
continue;
} else {
}
break;
}

var G__16479 = args16477.length;
switch (G__16479) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16477.length)].join('')));

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
var and__6735__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || (conn.cljs$core$IDeref$))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__6735__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__6735__auto__;
}
});
goog.exportSymbol('datascript.core.conn_QMARK_', datascript.core.conn_QMARK_);
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
goog.exportSymbol('datascript.core.conn_from_db', datascript.core.conn_from_db);
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args16488 = [];
var len__7822__auto___16491 = arguments.length;
var i__7823__auto___16492 = (0);
while(true){
if((i__7823__auto___16492 < len__7822__auto___16491)){
args16488.push((arguments[i__7823__auto___16492]));

var G__16493 = (i__7823__auto___16492 + (1));
i__7823__auto___16492 = G__16493;
continue;
} else {
}
break;
}

var G__16490 = args16488.length;
switch (G__16490) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16488.length)].join('')));

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
var args16495 = [];
var len__7822__auto___16498 = arguments.length;
var i__7823__auto___16499 = (0);
while(true){
if((i__7823__auto___16499 < len__7822__auto___16498)){
args16495.push((arguments[i__7823__auto___16499]));

var G__16500 = (i__7823__auto___16499 + (1));
i__7823__auto___16499 = G__16500;
continue;
} else {
}
break;
}

var G__16497 = args16495.length;
switch (G__16497) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16495.length)].join('')));

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
var args16502 = [];
var len__7822__auto___16515 = arguments.length;
var i__7823__auto___16516 = (0);
while(true){
if((i__7823__auto___16516 < len__7822__auto___16515)){
args16502.push((arguments[i__7823__auto___16516]));

var G__16517 = (i__7823__auto___16516 + (1));
i__7823__auto___16516 = G__16517;
continue;
} else {
}
break;
}

var G__16504 = args16502.length;
switch (G__16504) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16502.length)].join('')));

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
var seq__16505_16519 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__16506_16520 = null;
var count__16507_16521 = (0);
var i__16508_16522 = (0);
while(true){
if((i__16508_16522 < count__16507_16521)){
var vec__16509_16523 = cljs.core._nth.call(null,chunk__16506_16520,i__16508_16522);
var __16524 = cljs.core.nth.call(null,vec__16509_16523,(0),null);
var callback_16525 = cljs.core.nth.call(null,vec__16509_16523,(1),null);
callback_16525.call(null,report);

var G__16526 = seq__16505_16519;
var G__16527 = chunk__16506_16520;
var G__16528 = count__16507_16521;
var G__16529 = (i__16508_16522 + (1));
seq__16505_16519 = G__16526;
chunk__16506_16520 = G__16527;
count__16507_16521 = G__16528;
i__16508_16522 = G__16529;
continue;
} else {
var temp__4657__auto___16530 = cljs.core.seq.call(null,seq__16505_16519);
if(temp__4657__auto___16530){
var seq__16505_16531__$1 = temp__4657__auto___16530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16505_16531__$1)){
var c__7558__auto___16532 = cljs.core.chunk_first.call(null,seq__16505_16531__$1);
var G__16533 = cljs.core.chunk_rest.call(null,seq__16505_16531__$1);
var G__16534 = c__7558__auto___16532;
var G__16535 = cljs.core.count.call(null,c__7558__auto___16532);
var G__16536 = (0);
seq__16505_16519 = G__16533;
chunk__16506_16520 = G__16534;
count__16507_16521 = G__16535;
i__16508_16522 = G__16536;
continue;
} else {
var vec__16512_16537 = cljs.core.first.call(null,seq__16505_16531__$1);
var __16538 = cljs.core.nth.call(null,vec__16512_16537,(0),null);
var callback_16539 = cljs.core.nth.call(null,vec__16512_16537,(1),null);
callback_16539.call(null,report);

var G__16540 = cljs.core.next.call(null,seq__16505_16531__$1);
var G__16541 = null;
var G__16542 = (0);
var G__16543 = (0);
seq__16505_16519 = G__16540;
chunk__16506_16520 = G__16541;
count__16507_16521 = G__16542;
i__16508_16522 = G__16543;
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
var args16545 = [];
var len__7822__auto___16558 = arguments.length;
var i__7823__auto___16559 = (0);
while(true){
if((i__7823__auto___16559 < len__7822__auto___16558)){
args16545.push((arguments[i__7823__auto___16559]));

var G__16560 = (i__7823__auto___16559 + (1));
i__7823__auto___16559 = G__16560;
continue;
} else {
}
break;
}

var G__16547 = args16545.length;
switch (G__16547) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16545.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__16544_SHARP_){
return cljs.core.assoc.call(null,p1__16544_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__16548_16562 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__16549_16563 = null;
var count__16550_16564 = (0);
var i__16551_16565 = (0);
while(true){
if((i__16551_16565 < count__16550_16564)){
var vec__16552_16566 = cljs.core._nth.call(null,chunk__16549_16563,i__16551_16565);
var __16567 = cljs.core.nth.call(null,vec__16552_16566,(0),null);
var callback_16568 = cljs.core.nth.call(null,vec__16552_16566,(1),null);
callback_16568.call(null,report);

var G__16569 = seq__16548_16562;
var G__16570 = chunk__16549_16563;
var G__16571 = count__16550_16564;
var G__16572 = (i__16551_16565 + (1));
seq__16548_16562 = G__16569;
chunk__16549_16563 = G__16570;
count__16550_16564 = G__16571;
i__16551_16565 = G__16572;
continue;
} else {
var temp__4657__auto___16573 = cljs.core.seq.call(null,seq__16548_16562);
if(temp__4657__auto___16573){
var seq__16548_16574__$1 = temp__4657__auto___16573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16548_16574__$1)){
var c__7558__auto___16575 = cljs.core.chunk_first.call(null,seq__16548_16574__$1);
var G__16576 = cljs.core.chunk_rest.call(null,seq__16548_16574__$1);
var G__16577 = c__7558__auto___16575;
var G__16578 = cljs.core.count.call(null,c__7558__auto___16575);
var G__16579 = (0);
seq__16548_16562 = G__16576;
chunk__16549_16563 = G__16577;
count__16550_16564 = G__16578;
i__16551_16565 = G__16579;
continue;
} else {
var vec__16555_16580 = cljs.core.first.call(null,seq__16548_16574__$1);
var __16581 = cljs.core.nth.call(null,vec__16555_16580,(0),null);
var callback_16582 = cljs.core.nth.call(null,vec__16555_16580,(1),null);
callback_16582.call(null,report);

var G__16583 = cljs.core.next.call(null,seq__16548_16574__$1);
var G__16584 = null;
var G__16585 = (0);
var G__16586 = (0);
seq__16548_16562 = G__16583;
chunk__16549_16563 = G__16584;
count__16550_16564 = G__16585;
i__16551_16565 = G__16586;
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
var args16587 = [];
var len__7822__auto___16590 = arguments.length;
var i__7823__auto___16591 = (0);
while(true){
if((i__7823__auto___16591 < len__7822__auto___16590)){
args16587.push((arguments[i__7823__auto___16591]));

var G__16592 = (i__7823__auto___16591 + (1));
i__7823__auto___16591 = G__16592;
continue;
} else {
}
break;
}

var G__16589 = args16587.length;
switch (G__16589) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16587.length)].join('')));

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
var seq__16594_16604 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__16595_16605 = null;
var count__16596_16606 = (0);
var i__16597_16607 = (0);
while(true){
if((i__16597_16607 < count__16596_16606)){
var vec__16598_16608 = cljs.core._nth.call(null,chunk__16595_16605,i__16597_16607);
var tag_16609 = cljs.core.nth.call(null,vec__16598_16608,(0),null);
var cb_16610 = cljs.core.nth.call(null,vec__16598_16608,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_16609,cb_16610);

var G__16611 = seq__16594_16604;
var G__16612 = chunk__16595_16605;
var G__16613 = count__16596_16606;
var G__16614 = (i__16597_16607 + (1));
seq__16594_16604 = G__16611;
chunk__16595_16605 = G__16612;
count__16596_16606 = G__16613;
i__16597_16607 = G__16614;
continue;
} else {
var temp__4657__auto___16615 = cljs.core.seq.call(null,seq__16594_16604);
if(temp__4657__auto___16615){
var seq__16594_16616__$1 = temp__4657__auto___16615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16594_16616__$1)){
var c__7558__auto___16617 = cljs.core.chunk_first.call(null,seq__16594_16616__$1);
var G__16618 = cljs.core.chunk_rest.call(null,seq__16594_16616__$1);
var G__16619 = c__7558__auto___16617;
var G__16620 = cljs.core.count.call(null,c__7558__auto___16617);
var G__16621 = (0);
seq__16594_16604 = G__16618;
chunk__16595_16605 = G__16619;
count__16596_16606 = G__16620;
i__16597_16607 = G__16621;
continue;
} else {
var vec__16601_16622 = cljs.core.first.call(null,seq__16594_16616__$1);
var tag_16623 = cljs.core.nth.call(null,vec__16601_16622,(0),null);
var cb_16624 = cljs.core.nth.call(null,vec__16601_16622,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_16623,cb_16624);

var G__16625 = cljs.core.next.call(null,seq__16594_16616__$1);
var G__16626 = null;
var G__16627 = (0);
var G__16628 = (0);
seq__16594_16604 = G__16625;
chunk__16595_16605 = G__16626;
count__16596_16606 = G__16627;
i__16597_16607 = G__16628;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args16629 = [];
var len__7822__auto___16632 = arguments.length;
var i__7823__auto___16633 = (0);
while(true){
if((i__7823__auto___16633 < len__7822__auto___16632)){
args16629.push((arguments[i__7823__auto___16633]));

var G__16634 = (i__7823__auto___16633 + (1));
i__7823__auto___16633 = G__16634;
continue;
} else {
}
break;
}

var G__16631 = args16629.length;
switch (G__16631) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16629.length)].join('')));

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
var args16636 = [];
var len__7822__auto___16642 = arguments.length;
var i__7823__auto___16643 = (0);
while(true){
if((i__7823__auto___16643 < len__7822__auto___16642)){
args16636.push((arguments[i__7823__auto___16643]));

var G__16644 = (i__7823__auto___16643 + (1));
i__7823__auto___16643 = G__16644;
continue;
} else {
}
break;
}

var G__16638 = args16636.length;
switch (G__16638) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16636.length)].join('')));

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
if(typeof datascript.core.t_datascript$core16639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core16639 = (function (conn,tx_data,tx_meta,res,meta16640){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta16640 = meta16640;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core16639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_16641,meta16640__$1){
var self__ = this;
var _16641__$1 = this;
return (new datascript.core.t_datascript$core16639(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta16640__$1));
});})(res))
;

datascript.core.t_datascript$core16639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_16641){
var self__ = this;
var _16641__$1 = this;
return self__.meta16640;
});})(res))
;

datascript.core.t_datascript$core16639.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core16639.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core16639.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core16639.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta16640","meta16640",-304791906,null)], null);
});})(res))
;

datascript.core.t_datascript$core16639.cljs$lang$type = true;

datascript.core.t_datascript$core16639.cljs$lang$ctorStr = "datascript.core/t_datascript$core16639";

datascript.core.t_datascript$core16639.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__7353__auto__,writer__7354__auto__,opt__7355__auto__){
return cljs.core._write.call(null,writer__7354__auto__,"datascript.core/t_datascript$core16639");
});})(res))
;

datascript.core.__GT_t_datascript$core16639 = ((function (res){
return (function datascript$core$__GT_t_datascript$core16639(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta16640){
return (new datascript.core.t_datascript$core16639(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta16640));
});})(res))
;

}

return (new datascript.core.t_datascript$core16639(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
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

if(typeof datascript.core.t_datascript$core16649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core16649 = (function (future_call,f,res,realized,meta16650){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta16650 = meta16650;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core16649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_16651,meta16650__$1){
var self__ = this;
var _16651__$1 = this;
return (new datascript.core.t_datascript$core16649(self__.future_call,self__.f,self__.res,self__.realized,meta16650__$1));
});})(res,realized))
;

datascript.core.t_datascript$core16649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_16651){
var self__ = this;
var _16651__$1 = this;
return self__.meta16650;
});})(res,realized))
;

datascript.core.t_datascript$core16649.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core16649.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
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

datascript.core.t_datascript$core16649.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core16649.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta16650","meta16650",1039298513,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core16649.cljs$lang$type = true;

datascript.core.t_datascript$core16649.cljs$lang$ctorStr = "datascript.core/t_datascript$core16649";

datascript.core.t_datascript$core16649.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__7353__auto__,writer__7354__auto__,opt__7355__auto__){
return cljs.core._write.call(null,writer__7354__auto__,"datascript.core/t_datascript$core16649");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core16649 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core16649(future_call__$1,f__$1,res__$1,realized__$1,meta16650){
return (new datascript.core.t_datascript$core16649(future_call__$1,f__$1,res__$1,realized__$1,meta16650));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core16649(datascript$core$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args16652 = [];
var len__7822__auto___16655 = arguments.length;
var i__7823__auto___16656 = (0);
while(true){
if((i__7823__auto___16656 < len__7822__auto___16655)){
args16652.push((arguments[i__7823__auto___16656]));

var G__16657 = (i__7823__auto___16656 + (1));
i__7823__auto___16656 = G__16657;
continue;
} else {
}
break;
}

var G__16654 = args16652.length;
switch (G__16654) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16652.length)].join('')));

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
var args16659 = [];
var len__7822__auto___16662 = arguments.length;
var i__7823__auto___16663 = (0);
while(true){
if((i__7823__auto___16663 < len__7822__auto___16662)){
args16659.push((arguments[i__7823__auto___16663]));

var G__16664 = (i__7823__auto___16663 + (1));
i__7823__auto___16663 = G__16664;
continue;
} else {
}
break;
}

var G__16661 = args16659.length;
switch (G__16661) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16659.length)].join('')));

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