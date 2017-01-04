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
return (function (p1__16452_SHARP_){
var and__6736__auto__ = pred.call(null,u,p1__16452_SHARP_);
if(cljs.core.truth_(and__6736__auto__)){
return fdb.pred.call(null,p1__16452_SHARP_);
} else {
return and__6736__auto__;
}
});})(fdb,u))
,cljs.core.atom.call(null,(0)),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__16453_SHARP_){
return pred.call(null,db,p1__16453_SHARP_);
}),cljs.core.atom.call(null,(0)),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args16454 = [];
var len__7823__auto___16457 = arguments.length;
var i__7824__auto___16458 = (0);
while(true){
if((i__7824__auto___16458 < len__7823__auto___16457)){
args16454.push((arguments[i__7824__auto___16458]));

var G__16459 = (i__7824__auto___16458 + (1));
i__7824__auto___16458 = G__16459;
continue;
} else {
}
break;
}

var G__16456 = args16454.length;
switch (G__16456) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16454.length)].join('')));

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
var args16461 = [];
var len__7823__auto___16464 = arguments.length;
var i__7824__auto___16465 = (0);
while(true){
if((i__7824__auto___16465 < len__7823__auto___16464)){
args16461.push((arguments[i__7824__auto___16465]));

var G__16466 = (i__7824__auto___16465 + (1));
i__7824__auto___16465 = G__16466;
continue;
} else {
}
break;
}

var G__16463 = args16461.length;
switch (G__16463) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16461.length)].join('')));

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
var args16468 = [];
var len__7823__auto___16471 = arguments.length;
var i__7824__auto___16472 = (0);
while(true){
if((i__7824__auto___16472 < len__7823__auto___16471)){
args16468.push((arguments[i__7824__auto___16472]));

var G__16473 = (i__7824__auto___16472 + (1));
i__7824__auto___16472 = G__16473;
continue;
} else {
}
break;
}

var G__16470 = args16468.length;
switch (G__16470) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16468.length)].join('')));

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
var args16479 = [];
var len__7823__auto___16482 = arguments.length;
var i__7824__auto___16483 = (0);
while(true){
if((i__7824__auto___16483 < len__7823__auto___16482)){
args16479.push((arguments[i__7824__auto___16483]));

var G__16484 = (i__7824__auto___16483 + (1));
i__7824__auto___16483 = G__16484;
continue;
} else {
}
break;
}

var G__16481 = args16479.length;
switch (G__16481) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16479.length)].join('')));

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
var args16486 = [];
var len__7823__auto___16489 = arguments.length;
var i__7824__auto___16490 = (0);
while(true){
if((i__7824__auto___16490 < len__7823__auto___16489)){
args16486.push((arguments[i__7824__auto___16490]));

var G__16491 = (i__7824__auto___16490 + (1));
i__7824__auto___16490 = G__16491;
continue;
} else {
}
break;
}

var G__16488 = args16486.length;
switch (G__16488) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16486.length)].join('')));

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
var args16493 = [];
var len__7823__auto___16506 = arguments.length;
var i__7824__auto___16507 = (0);
while(true){
if((i__7824__auto___16507 < len__7823__auto___16506)){
args16493.push((arguments[i__7824__auto___16507]));

var G__16508 = (i__7824__auto___16507 + (1));
i__7824__auto___16507 = G__16508;
continue;
} else {
}
break;
}

var G__16495 = args16493.length;
switch (G__16495) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16493.length)].join('')));

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
var seq__16496_16510 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__16497_16511 = null;
var count__16498_16512 = (0);
var i__16499_16513 = (0);
while(true){
if((i__16499_16513 < count__16498_16512)){
var vec__16500_16514 = cljs.core._nth.call(null,chunk__16497_16511,i__16499_16513);
var __16515 = cljs.core.nth.call(null,vec__16500_16514,(0),null);
var callback_16516 = cljs.core.nth.call(null,vec__16500_16514,(1),null);
callback_16516.call(null,report);

var G__16517 = seq__16496_16510;
var G__16518 = chunk__16497_16511;
var G__16519 = count__16498_16512;
var G__16520 = (i__16499_16513 + (1));
seq__16496_16510 = G__16517;
chunk__16497_16511 = G__16518;
count__16498_16512 = G__16519;
i__16499_16513 = G__16520;
continue;
} else {
var temp__4657__auto___16521 = cljs.core.seq.call(null,seq__16496_16510);
if(temp__4657__auto___16521){
var seq__16496_16522__$1 = temp__4657__auto___16521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16496_16522__$1)){
var c__7559__auto___16523 = cljs.core.chunk_first.call(null,seq__16496_16522__$1);
var G__16524 = cljs.core.chunk_rest.call(null,seq__16496_16522__$1);
var G__16525 = c__7559__auto___16523;
var G__16526 = cljs.core.count.call(null,c__7559__auto___16523);
var G__16527 = (0);
seq__16496_16510 = G__16524;
chunk__16497_16511 = G__16525;
count__16498_16512 = G__16526;
i__16499_16513 = G__16527;
continue;
} else {
var vec__16503_16528 = cljs.core.first.call(null,seq__16496_16522__$1);
var __16529 = cljs.core.nth.call(null,vec__16503_16528,(0),null);
var callback_16530 = cljs.core.nth.call(null,vec__16503_16528,(1),null);
callback_16530.call(null,report);

var G__16531 = cljs.core.next.call(null,seq__16496_16522__$1);
var G__16532 = null;
var G__16533 = (0);
var G__16534 = (0);
seq__16496_16510 = G__16531;
chunk__16497_16511 = G__16532;
count__16498_16512 = G__16533;
i__16499_16513 = G__16534;
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
var args16536 = [];
var len__7823__auto___16549 = arguments.length;
var i__7824__auto___16550 = (0);
while(true){
if((i__7824__auto___16550 < len__7823__auto___16549)){
args16536.push((arguments[i__7824__auto___16550]));

var G__16551 = (i__7824__auto___16550 + (1));
i__7824__auto___16550 = G__16551;
continue;
} else {
}
break;
}

var G__16538 = args16536.length;
switch (G__16538) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16536.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__16535_SHARP_){
return cljs.core.assoc.call(null,p1__16535_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__16539_16553 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__16540_16554 = null;
var count__16541_16555 = (0);
var i__16542_16556 = (0);
while(true){
if((i__16542_16556 < count__16541_16555)){
var vec__16543_16557 = cljs.core._nth.call(null,chunk__16540_16554,i__16542_16556);
var __16558 = cljs.core.nth.call(null,vec__16543_16557,(0),null);
var callback_16559 = cljs.core.nth.call(null,vec__16543_16557,(1),null);
callback_16559.call(null,report);

var G__16560 = seq__16539_16553;
var G__16561 = chunk__16540_16554;
var G__16562 = count__16541_16555;
var G__16563 = (i__16542_16556 + (1));
seq__16539_16553 = G__16560;
chunk__16540_16554 = G__16561;
count__16541_16555 = G__16562;
i__16542_16556 = G__16563;
continue;
} else {
var temp__4657__auto___16564 = cljs.core.seq.call(null,seq__16539_16553);
if(temp__4657__auto___16564){
var seq__16539_16565__$1 = temp__4657__auto___16564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16539_16565__$1)){
var c__7559__auto___16566 = cljs.core.chunk_first.call(null,seq__16539_16565__$1);
var G__16567 = cljs.core.chunk_rest.call(null,seq__16539_16565__$1);
var G__16568 = c__7559__auto___16566;
var G__16569 = cljs.core.count.call(null,c__7559__auto___16566);
var G__16570 = (0);
seq__16539_16553 = G__16567;
chunk__16540_16554 = G__16568;
count__16541_16555 = G__16569;
i__16542_16556 = G__16570;
continue;
} else {
var vec__16546_16571 = cljs.core.first.call(null,seq__16539_16565__$1);
var __16572 = cljs.core.nth.call(null,vec__16546_16571,(0),null);
var callback_16573 = cljs.core.nth.call(null,vec__16546_16571,(1),null);
callback_16573.call(null,report);

var G__16574 = cljs.core.next.call(null,seq__16539_16565__$1);
var G__16575 = null;
var G__16576 = (0);
var G__16577 = (0);
seq__16539_16553 = G__16574;
chunk__16540_16554 = G__16575;
count__16541_16555 = G__16576;
i__16542_16556 = G__16577;
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
var args16578 = [];
var len__7823__auto___16581 = arguments.length;
var i__7824__auto___16582 = (0);
while(true){
if((i__7824__auto___16582 < len__7823__auto___16581)){
args16578.push((arguments[i__7824__auto___16582]));

var G__16583 = (i__7824__auto___16582 + (1));
i__7824__auto___16582 = G__16583;
continue;
} else {
}
break;
}

var G__16580 = args16578.length;
switch (G__16580) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16578.length)].join('')));

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
var seq__16585_16595 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__16586_16596 = null;
var count__16587_16597 = (0);
var i__16588_16598 = (0);
while(true){
if((i__16588_16598 < count__16587_16597)){
var vec__16589_16599 = cljs.core._nth.call(null,chunk__16586_16596,i__16588_16598);
var tag_16600 = cljs.core.nth.call(null,vec__16589_16599,(0),null);
var cb_16601 = cljs.core.nth.call(null,vec__16589_16599,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_16600,cb_16601);

var G__16602 = seq__16585_16595;
var G__16603 = chunk__16586_16596;
var G__16604 = count__16587_16597;
var G__16605 = (i__16588_16598 + (1));
seq__16585_16595 = G__16602;
chunk__16586_16596 = G__16603;
count__16587_16597 = G__16604;
i__16588_16598 = G__16605;
continue;
} else {
var temp__4657__auto___16606 = cljs.core.seq.call(null,seq__16585_16595);
if(temp__4657__auto___16606){
var seq__16585_16607__$1 = temp__4657__auto___16606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16585_16607__$1)){
var c__7559__auto___16608 = cljs.core.chunk_first.call(null,seq__16585_16607__$1);
var G__16609 = cljs.core.chunk_rest.call(null,seq__16585_16607__$1);
var G__16610 = c__7559__auto___16608;
var G__16611 = cljs.core.count.call(null,c__7559__auto___16608);
var G__16612 = (0);
seq__16585_16595 = G__16609;
chunk__16586_16596 = G__16610;
count__16587_16597 = G__16611;
i__16588_16598 = G__16612;
continue;
} else {
var vec__16592_16613 = cljs.core.first.call(null,seq__16585_16607__$1);
var tag_16614 = cljs.core.nth.call(null,vec__16592_16613,(0),null);
var cb_16615 = cljs.core.nth.call(null,vec__16592_16613,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_16614,cb_16615);

var G__16616 = cljs.core.next.call(null,seq__16585_16607__$1);
var G__16617 = null;
var G__16618 = (0);
var G__16619 = (0);
seq__16585_16595 = G__16616;
chunk__16586_16596 = G__16617;
count__16587_16597 = G__16618;
i__16588_16598 = G__16619;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args16620 = [];
var len__7823__auto___16623 = arguments.length;
var i__7824__auto___16624 = (0);
while(true){
if((i__7824__auto___16624 < len__7823__auto___16623)){
args16620.push((arguments[i__7824__auto___16624]));

var G__16625 = (i__7824__auto___16624 + (1));
i__7824__auto___16624 = G__16625;
continue;
} else {
}
break;
}

var G__16622 = args16620.length;
switch (G__16622) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16620.length)].join('')));

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
var args16627 = [];
var len__7823__auto___16633 = arguments.length;
var i__7824__auto___16634 = (0);
while(true){
if((i__7824__auto___16634 < len__7823__auto___16633)){
args16627.push((arguments[i__7824__auto___16634]));

var G__16635 = (i__7824__auto___16634 + (1));
i__7824__auto___16634 = G__16635;
continue;
} else {
}
break;
}

var G__16629 = args16627.length;
switch (G__16629) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16627.length)].join('')));

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
if(typeof datascript.core.t_datascript$core16630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core16630 = (function (conn,tx_data,tx_meta,res,meta16631){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta16631 = meta16631;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core16630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_16632,meta16631__$1){
var self__ = this;
var _16632__$1 = this;
return (new datascript.core.t_datascript$core16630(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta16631__$1));
});})(res))
;

datascript.core.t_datascript$core16630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_16632){
var self__ = this;
var _16632__$1 = this;
return self__.meta16631;
});})(res))
;

datascript.core.t_datascript$core16630.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core16630.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core16630.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core16630.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta16631","meta16631",-1304567358,null)], null);
});})(res))
;

datascript.core.t_datascript$core16630.cljs$lang$type = true;

datascript.core.t_datascript$core16630.cljs$lang$ctorStr = "datascript.core/t_datascript$core16630";

datascript.core.t_datascript$core16630.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"datascript.core/t_datascript$core16630");
});})(res))
;

datascript.core.__GT_t_datascript$core16630 = ((function (res){
return (function datascript$core$__GT_t_datascript$core16630(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta16631){
return (new datascript.core.t_datascript$core16630(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta16631));
});})(res))
;

}

return (new datascript.core.t_datascript$core16630(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
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

if(typeof datascript.core.t_datascript$core16640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core16640 = (function (future_call,f,res,realized,meta16641){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta16641 = meta16641;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core16640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_16642,meta16641__$1){
var self__ = this;
var _16642__$1 = this;
return (new datascript.core.t_datascript$core16640(self__.future_call,self__.f,self__.res,self__.realized,meta16641__$1));
});})(res,realized))
;

datascript.core.t_datascript$core16640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_16642){
var self__ = this;
var _16642__$1 = this;
return self__.meta16641;
});})(res,realized))
;

datascript.core.t_datascript$core16640.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core16640.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
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

datascript.core.t_datascript$core16640.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core16640.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta16641","meta16641",-1522778743,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core16640.cljs$lang$type = true;

datascript.core.t_datascript$core16640.cljs$lang$ctorStr = "datascript.core/t_datascript$core16640";

datascript.core.t_datascript$core16640.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__7354__auto__,writer__7355__auto__,opt__7356__auto__){
return cljs.core._write.call(null,writer__7355__auto__,"datascript.core/t_datascript$core16640");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core16640 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core16640(future_call__$1,f__$1,res__$1,realized__$1,meta16641){
return (new datascript.core.t_datascript$core16640(future_call__$1,f__$1,res__$1,realized__$1,meta16641));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core16640(datascript$core$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args16643 = [];
var len__7823__auto___16646 = arguments.length;
var i__7824__auto___16647 = (0);
while(true){
if((i__7824__auto___16647 < len__7823__auto___16646)){
args16643.push((arguments[i__7824__auto___16647]));

var G__16648 = (i__7824__auto___16647 + (1));
i__7824__auto___16647 = G__16648;
continue;
} else {
}
break;
}

var G__16645 = args16643.length;
switch (G__16645) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16643.length)].join('')));

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
var args16650 = [];
var len__7823__auto___16653 = arguments.length;
var i__7824__auto___16654 = (0);
while(true){
if((i__7824__auto___16654 < len__7823__auto___16653)){
args16650.push((arguments[i__7824__auto___16654]));

var G__16655 = (i__7824__auto___16654 + (1));
i__7824__auto___16654 = G__16655;
continue;
} else {
}
break;
}

var G__16652 = args16650.length;
switch (G__16652) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16650.length)].join('')));

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