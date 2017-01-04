// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__9130,handler){
var map__9131 = p__9130;
var map__9131__$1 = ((((!((map__9131 == null)))?((((map__9131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9131):map__9131);
var uri = cljs.core.get.call(null,map__9131__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__9131__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__9131__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__9131__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__9131__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__9131__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__9131__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__9131,map__9131__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__9126_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__9126_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__9131,map__9131__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__6747__auto___9149 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__6747__auto___9149)){
var response_type_9150 = temp__6747__auto___9149;
this$__$1.responseType = cljs.core.name.call(null,response_type_9150);
} else {
}

var seq__9137_9151 = cljs.core.seq.call(null,headers);
var chunk__9138_9152 = null;
var count__9139_9153 = (0);
var i__9140_9154 = (0);
while(true){
if((i__9140_9154 < count__9139_9153)){
var vec__9141_9155 = cljs.core._nth.call(null,chunk__9138_9152,i__9140_9154);
var k_9156 = cljs.core.nth.call(null,vec__9141_9155,(0),null);
var v_9157 = cljs.core.nth.call(null,vec__9141_9155,(1),null);
this$__$1.setRequestHeader(k_9156,v_9157);

var G__9158 = seq__9137_9151;
var G__9159 = chunk__9138_9152;
var G__9160 = count__9139_9153;
var G__9161 = (i__9140_9154 + (1));
seq__9137_9151 = G__9158;
chunk__9138_9152 = G__9159;
count__9139_9153 = G__9160;
i__9140_9154 = G__9161;
continue;
} else {
var temp__6747__auto___9162 = cljs.core.seq.call(null,seq__9137_9151);
if(temp__6747__auto___9162){
var seq__9137_9163__$1 = temp__6747__auto___9162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9137_9163__$1)){
var c__8525__auto___9164 = cljs.core.chunk_first.call(null,seq__9137_9163__$1);
var G__9169 = cljs.core.chunk_rest.call(null,seq__9137_9163__$1);
var G__9170 = c__8525__auto___9164;
var G__9171 = cljs.core.count.call(null,c__8525__auto___9164);
var G__9172 = (0);
seq__9137_9151 = G__9169;
chunk__9138_9152 = G__9170;
count__9139_9153 = G__9171;
i__9140_9154 = G__9172;
continue;
} else {
var vec__9144_9175 = cljs.core.first.call(null,seq__9137_9163__$1);
var k_9176 = cljs.core.nth.call(null,vec__9144_9175,(0),null);
var v_9177 = cljs.core.nth.call(null,vec__9144_9175,(1),null);
this$__$1.setRequestHeader(k_9176,v_9177);

var G__9178 = cljs.core.next.call(null,seq__9137_9163__$1);
var G__9179 = null;
var G__9180 = (0);
var G__9181 = (0);
seq__9137_9151 = G__9178;
chunk__9138_9152 = G__9179;
count__9139_9153 = G__9180;
i__9140_9154 = G__9181;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__7619__auto__ = body;
if(cljs.core.truth_(or__7619__auto__)){
return or__7619__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map