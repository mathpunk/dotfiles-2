// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12646,handler){
var map__12647 = p__12646;
var map__12647__$1 = ((((!((map__12647 == null)))?((((map__12647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12647):map__12647);
var uri = cljs.core.get.call(null,map__12647__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__12647__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__12647__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__12647__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__12647__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__12647__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__12647__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__12647,map__12647__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__12645_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__12645_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__12647,map__12647__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___12659 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___12659)){
var response_type_12660 = temp__4657__auto___12659;
this$__$1.responseType = cljs.core.name.call(null,response_type_12660);
} else {
}

var seq__12649_12661 = cljs.core.seq.call(null,headers);
var chunk__12650_12662 = null;
var count__12651_12663 = (0);
var i__12652_12664 = (0);
while(true){
if((i__12652_12664 < count__12651_12663)){
var vec__12653_12665 = cljs.core._nth.call(null,chunk__12650_12662,i__12652_12664);
var k_12666 = cljs.core.nth.call(null,vec__12653_12665,(0),null);
var v_12667 = cljs.core.nth.call(null,vec__12653_12665,(1),null);
this$__$1.setRequestHeader(k_12666,v_12667);

var G__12668 = seq__12649_12661;
var G__12669 = chunk__12650_12662;
var G__12670 = count__12651_12663;
var G__12671 = (i__12652_12664 + (1));
seq__12649_12661 = G__12668;
chunk__12650_12662 = G__12669;
count__12651_12663 = G__12670;
i__12652_12664 = G__12671;
continue;
} else {
var temp__4657__auto___12672 = cljs.core.seq.call(null,seq__12649_12661);
if(temp__4657__auto___12672){
var seq__12649_12673__$1 = temp__4657__auto___12672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12649_12673__$1)){
var c__7559__auto___12674 = cljs.core.chunk_first.call(null,seq__12649_12673__$1);
var G__12675 = cljs.core.chunk_rest.call(null,seq__12649_12673__$1);
var G__12676 = c__7559__auto___12674;
var G__12677 = cljs.core.count.call(null,c__7559__auto___12674);
var G__12678 = (0);
seq__12649_12661 = G__12675;
chunk__12650_12662 = G__12676;
count__12651_12663 = G__12677;
i__12652_12664 = G__12678;
continue;
} else {
var vec__12656_12679 = cljs.core.first.call(null,seq__12649_12673__$1);
var k_12680 = cljs.core.nth.call(null,vec__12656_12679,(0),null);
var v_12681 = cljs.core.nth.call(null,vec__12656_12679,(1),null);
this$__$1.setRequestHeader(k_12680,v_12681);

var G__12682 = cljs.core.next.call(null,seq__12649_12673__$1);
var G__12683 = null;
var G__12684 = (0);
var G__12685 = (0);
seq__12649_12661 = G__12682;
chunk__12650_12662 = G__12683;
count__12651_12663 = G__12684;
i__12652_12664 = G__12685;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6748__auto__ = body;
if(cljs.core.truth_(or__6748__auto__)){
return or__6748__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

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