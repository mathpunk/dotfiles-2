// Compiled by ClojureScript 1.9.293 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__6747__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__9168_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9168_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__6747__auto__)){
var changed__$1 = temp__6747__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__9197 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9198 = null;
var count__9199 = (0);
var i__9200 = (0);
while(true){
if((i__9200 < count__9199)){
var s = cljs.core._nth.call(null,chunk__9198,i__9200);
var temp__6747__auto___9203 = (sheets[s]);
if(cljs.core.truth_(temp__6747__auto___9203)){
var sheet_9204 = temp__6747__auto___9203;
var temp__6747__auto___9205__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9204.href,changed);
if(cljs.core.truth_(temp__6747__auto___9205__$1)){
var href_uri_9206 = temp__6747__auto___9205__$1;
sheet_9204.ownerNode.href = href_uri_9206.makeUnique().toString();
} else {
}
} else {
}

var G__9207 = seq__9197;
var G__9208 = chunk__9198;
var G__9209 = count__9199;
var G__9210 = (i__9200 + (1));
seq__9197 = G__9207;
chunk__9198 = G__9208;
count__9199 = G__9209;
i__9200 = G__9210;
continue;
} else {
var temp__6747__auto__ = cljs.core.seq.call(null,seq__9197);
if(temp__6747__auto__){
var seq__9197__$1 = temp__6747__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9197__$1)){
var c__8525__auto__ = cljs.core.chunk_first.call(null,seq__9197__$1);
var G__9211 = cljs.core.chunk_rest.call(null,seq__9197__$1);
var G__9212 = c__8525__auto__;
var G__9213 = cljs.core.count.call(null,c__8525__auto__);
var G__9214 = (0);
seq__9197 = G__9211;
chunk__9198 = G__9212;
count__9199 = G__9213;
i__9200 = G__9214;
continue;
} else {
var s = cljs.core.first.call(null,seq__9197__$1);
var temp__6747__auto___9215__$1 = (sheets[s]);
if(cljs.core.truth_(temp__6747__auto___9215__$1)){
var sheet_9216 = temp__6747__auto___9215__$1;
var temp__6747__auto___9217__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9216.href,changed);
if(cljs.core.truth_(temp__6747__auto___9217__$2)){
var href_uri_9218 = temp__6747__auto___9217__$2;
sheet_9216.ownerNode.href = href_uri_9218.makeUnique().toString();
} else {
}
} else {
}

var G__9219 = cljs.core.next.call(null,seq__9197__$1);
var G__9220 = null;
var G__9221 = (0);
var G__9222 = (0);
seq__9197 = G__9219;
chunk__9198 = G__9220;
count__9199 = G__9221;
i__9200 = G__9222;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__9231 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9232 = null;
var count__9233 = (0);
var i__9234 = (0);
while(true){
if((i__9234 < count__9233)){
var s = cljs.core._nth.call(null,chunk__9232,i__9234);
var temp__6747__auto___9249 = (images[s]);
if(cljs.core.truth_(temp__6747__auto___9249)){
var image_9250 = temp__6747__auto___9249;
var temp__6747__auto___9251__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_9250.src,changed);
if(cljs.core.truth_(temp__6747__auto___9251__$1)){
var href_uri_9252 = temp__6747__auto___9251__$1;
image_9250.src = href_uri_9252.makeUnique().toString();
} else {
}
} else {
}

var G__9253 = seq__9231;
var G__9254 = chunk__9232;
var G__9255 = count__9233;
var G__9256 = (i__9234 + (1));
seq__9231 = G__9253;
chunk__9232 = G__9254;
count__9233 = G__9255;
i__9234 = G__9256;
continue;
} else {
var temp__6747__auto__ = cljs.core.seq.call(null,seq__9231);
if(temp__6747__auto__){
var seq__9231__$1 = temp__6747__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9231__$1)){
var c__8525__auto__ = cljs.core.chunk_first.call(null,seq__9231__$1);
var G__9257 = cljs.core.chunk_rest.call(null,seq__9231__$1);
var G__9258 = c__8525__auto__;
var G__9259 = cljs.core.count.call(null,c__8525__auto__);
var G__9260 = (0);
seq__9231 = G__9257;
chunk__9232 = G__9258;
count__9233 = G__9259;
i__9234 = G__9260;
continue;
} else {
var s = cljs.core.first.call(null,seq__9231__$1);
var temp__6747__auto___9263__$1 = (images[s]);
if(cljs.core.truth_(temp__6747__auto___9263__$1)){
var image_9264 = temp__6747__auto___9263__$1;
var temp__6747__auto___9265__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_9264.src,changed);
if(cljs.core.truth_(temp__6747__auto___9265__$2)){
var href_uri_9266 = temp__6747__auto___9265__$2;
image_9264.src = href_uri_9266.makeUnique().toString();
} else {
}
} else {
}

var G__9267 = cljs.core.next.call(null,seq__9231__$1);
var G__9268 = null;
var G__9269 = (0);
var G__9270 = (0);
seq__9231 = G__9267;
chunk__9232 = G__9268;
count__9233 = G__9269;
i__9234 = G__9270;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9273){
var map__9279 = p__9273;
var map__9279__$1 = ((((!((map__9279 == null)))?((((map__9279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9279):map__9279);
var on_jsload = cljs.core.get.call(null,map__9279__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9279,map__9279__$1,on_jsload){
return (function (p1__9271_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9271_SHARP_,".js");
});})(map__9279,map__9279__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9279,map__9279__$1,on_jsload){
return (function (p1__9272_SHARP_){
return goog.Uri.parse(p1__9272_SHARP_).makeUnique();
});})(js_files,map__9279,map__9279__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9279,map__9279__$1,on_jsload){
return (function() { 
var G__9284__delegate = function (_){
return on_jsload.call(null);
};
var G__9284 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9285__i = 0, G__9285__a = new Array(arguments.length -  0);
while (G__9285__i < G__9285__a.length) {G__9285__a[G__9285__i] = arguments[G__9285__i + 0]; ++G__9285__i;}
  _ = new cljs.core.IndexedSeq(G__9285__a,0);
} 
return G__9284__delegate.call(this,_);};
G__9284.cljs$lang$maxFixedArity = 0;
G__9284.cljs$lang$applyTo = (function (arglist__9286){
var _ = cljs.core.seq(arglist__9286);
return G__9284__delegate(_);
});
G__9284.cljs$core$IFn$_invoke$arity$variadic = G__9284__delegate;
return G__9284;
})()
;})(js_files,map__9279,map__9279__$1,on_jsload))
,((function (js_files,map__9279,map__9279__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9279,map__9279__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__9300_9304 = cljs.core.seq.call(null,things_to_log);
var chunk__9301_9305 = null;
var count__9302_9306 = (0);
var i__9303_9307 = (0);
while(true){
if((i__9303_9307 < count__9302_9306)){
var t_9308 = cljs.core._nth.call(null,chunk__9301_9305,i__9303_9307);
console.log(t_9308);

var G__9309 = seq__9300_9304;
var G__9310 = chunk__9301_9305;
var G__9311 = count__9302_9306;
var G__9312 = (i__9303_9307 + (1));
seq__9300_9304 = G__9309;
chunk__9301_9305 = G__9310;
count__9302_9306 = G__9311;
i__9303_9307 = G__9312;
continue;
} else {
var temp__6747__auto___9313 = cljs.core.seq.call(null,seq__9300_9304);
if(temp__6747__auto___9313){
var seq__9300_9314__$1 = temp__6747__auto___9313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9300_9314__$1)){
var c__8525__auto___9315 = cljs.core.chunk_first.call(null,seq__9300_9314__$1);
var G__9316 = cljs.core.chunk_rest.call(null,seq__9300_9314__$1);
var G__9317 = c__8525__auto___9315;
var G__9318 = cljs.core.count.call(null,c__8525__auto___9315);
var G__9319 = (0);
seq__9300_9304 = G__9316;
chunk__9301_9305 = G__9317;
count__9302_9306 = G__9318;
i__9303_9307 = G__9319;
continue;
} else {
var t_9320 = cljs.core.first.call(null,seq__9300_9314__$1);
console.log(t_9320);

var G__9321 = cljs.core.next.call(null,seq__9300_9314__$1);
var G__9322 = null;
var G__9323 = (0);
var G__9324 = (0);
seq__9300_9304 = G__9321;
chunk__9301_9305 = G__9322;
count__9302_9306 = G__9323;
i__9303_9307 = G__9324;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__9327_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__9327_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__9333 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__9333);

adzerk.boot_reload.reload.reload_css.call(null,G__9333);

adzerk.boot_reload.reload.reload_img.call(null,G__9333);

return G__9333;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map