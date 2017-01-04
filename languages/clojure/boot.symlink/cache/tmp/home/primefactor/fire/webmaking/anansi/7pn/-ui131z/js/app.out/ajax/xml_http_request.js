// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__10676,handler){
var map__10677 = p__10676;
var map__10677__$1 = ((((!((map__10677 == null)))?((((map__10677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10677):map__10677);
var uri = cljs.core.get.call(null,map__10677__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__10677__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__10677__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__10677__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__10677__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__10677__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__10677__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__10677,map__10677__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__10675_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__10675_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__10677,map__10677__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___10689 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___10689)){
var response_type_10690 = temp__4657__auto___10689;
this$__$1.responseType = cljs.core.name.call(null,response_type_10690);
} else {
}

var seq__10679_10691 = cljs.core.seq.call(null,headers);
var chunk__10680_10692 = null;
var count__10681_10693 = (0);
var i__10682_10694 = (0);
while(true){
if((i__10682_10694 < count__10681_10693)){
var vec__10683_10695 = cljs.core._nth.call(null,chunk__10680_10692,i__10682_10694);
var k_10696 = cljs.core.nth.call(null,vec__10683_10695,(0),null);
var v_10697 = cljs.core.nth.call(null,vec__10683_10695,(1),null);
this$__$1.setRequestHeader(k_10696,v_10697);

var G__10698 = seq__10679_10691;
var G__10699 = chunk__10680_10692;
var G__10700 = count__10681_10693;
var G__10701 = (i__10682_10694 + (1));
seq__10679_10691 = G__10698;
chunk__10680_10692 = G__10699;
count__10681_10693 = G__10700;
i__10682_10694 = G__10701;
continue;
} else {
var temp__4657__auto___10702 = cljs.core.seq.call(null,seq__10679_10691);
if(temp__4657__auto___10702){
var seq__10679_10703__$1 = temp__4657__auto___10702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10679_10703__$1)){
var c__7559__auto___10704 = cljs.core.chunk_first.call(null,seq__10679_10703__$1);
var G__10705 = cljs.core.chunk_rest.call(null,seq__10679_10703__$1);
var G__10706 = c__7559__auto___10704;
var G__10707 = cljs.core.count.call(null,c__7559__auto___10704);
var G__10708 = (0);
seq__10679_10691 = G__10705;
chunk__10680_10692 = G__10706;
count__10681_10693 = G__10707;
i__10682_10694 = G__10708;
continue;
} else {
var vec__10686_10709 = cljs.core.first.call(null,seq__10679_10703__$1);
var k_10710 = cljs.core.nth.call(null,vec__10686_10709,(0),null);
var v_10711 = cljs.core.nth.call(null,vec__10686_10709,(1),null);
this$__$1.setRequestHeader(k_10710,v_10711);

var G__10712 = cljs.core.next.call(null,seq__10679_10703__$1);
var G__10713 = null;
var G__10714 = (0);
var G__10715 = (0);
seq__10679_10691 = G__10712;
chunk__10680_10692 = G__10713;
count__10681_10693 = G__10714;
i__10682_10694 = G__10715;
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