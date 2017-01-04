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
return (function (p1__9221_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9221_SHARP_),path);
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
var seq__9226 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9227 = null;
var count__9228 = (0);
var i__9229 = (0);
while(true){
if((i__9229 < count__9228)){
var s = cljs.core._nth.call(null,chunk__9227,i__9229);
var temp__6747__auto___9230 = (sheets[s]);
if(cljs.core.truth_(temp__6747__auto___9230)){
var sheet_9231 = temp__6747__auto___9230;
var temp__6747__auto___9232__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9231.href,changed);
if(cljs.core.truth_(temp__6747__auto___9232__$1)){
var href_uri_9233 = temp__6747__auto___9232__$1;
sheet_9231.ownerNode.href = href_uri_9233.makeUnique().toString();
} else {
}
} else {
}

var G__9234 = seq__9226;
var G__9235 = chunk__9227;
var G__9236 = count__9228;
var G__9237 = (i__9229 + (1));
seq__9226 = G__9234;
chunk__9227 = G__9235;
count__9228 = G__9236;
i__9229 = G__9237;
continue;
} else {
var temp__6747__auto__ = cljs.core.seq.call(null,seq__9226);
if(temp__6747__auto__){
var seq__9226__$1 = temp__6747__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9226__$1)){
var c__8391__auto__ = cljs.core.chunk_first.call(null,seq__9226__$1);
var G__9238 = cljs.core.chunk_rest.call(null,seq__9226__$1);
var G__9239 = c__8391__auto__;
var G__9240 = cljs.core.count.call(null,c__8391__auto__);
var G__9241 = (0);
seq__9226 = G__9238;
chunk__9227 = G__9239;
count__9228 = G__9240;
i__9229 = G__9241;
continue;
} else {
var s = cljs.core.first.call(null,seq__9226__$1);
var temp__6747__auto___9242__$1 = (sheets[s]);
if(cljs.core.truth_(temp__6747__auto___9242__$1)){
var sheet_9243 = temp__6747__auto___9242__$1;
var temp__6747__auto___9244__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9243.href,changed);
if(cljs.core.truth_(temp__6747__auto___9244__$2)){
var href_uri_9245 = temp__6747__auto___9244__$2;
sheet_9243.ownerNode.href = href_uri_9245.makeUnique().toString();
} else {
}
} else {
}

var G__9246 = cljs.core.next.call(null,seq__9226__$1);
var G__9247 = null;
var G__9248 = (0);
var G__9249 = (0);
seq__9226 = G__9246;
chunk__9227 = G__9247;
count__9228 = G__9248;
i__9229 = G__9249;
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
var seq__9258 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9259 = null;
var count__9260 = (0);
var i__9261 = (0);
while(true){
if((i__9261 < count__9260)){
var s = cljs.core._nth.call(null,chunk__9259,i__9261);
var temp__6747__auto___9270 = (images[s]);
if(cljs.core.truth_(temp__6747__auto___9270)){
var image_9271 = temp__6747__auto___9270;
var temp__6747__auto___9272__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_9271.src,changed);
if(cljs.core.truth_(temp__6747__auto___9272__$1)){
var href_uri_9273 = temp__6747__auto___9272__$1;
image_9271.src = href_uri_9273.makeUnique().toString();
} else {
}
} else {
}

var G__9274 = seq__9258;
var G__9275 = chunk__9259;
var G__9276 = count__9260;
var G__9277 = (i__9261 + (1));
seq__9258 = G__9274;
chunk__9259 = G__9275;
count__9260 = G__9276;
i__9261 = G__9277;
continue;
} else {
var temp__6747__auto__ = cljs.core.seq.call(null,seq__9258);
if(temp__6747__auto__){
var seq__9258__$1 = temp__6747__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9258__$1)){
var c__8391__auto__ = cljs.core.chunk_first.call(null,seq__9258__$1);
var G__9279 = cljs.core.chunk_rest.call(null,seq__9258__$1);
var G__9280 = c__8391__auto__;
var G__9281 = cljs.core.count.call(null,c__8391__auto__);
var G__9282 = (0);
seq__9258 = G__9279;
chunk__9259 = G__9280;
count__9260 = G__9281;
i__9261 = G__9282;
continue;
} else {
var s = cljs.core.first.call(null,seq__9258__$1);
var temp__6747__auto___9284__$1 = (images[s]);
if(cljs.core.truth_(temp__6747__auto___9284__$1)){
var image_9285 = temp__6747__auto___9284__$1;
var temp__6747__auto___9286__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_9285.src,changed);
if(cljs.core.truth_(temp__6747__auto___9286__$2)){
var href_uri_9287 = temp__6747__auto___9286__$2;
image_9285.src = href_uri_9287.makeUnique().toString();
} else {
}
} else {
}

var G__9288 = cljs.core.next.call(null,seq__9258__$1);
var G__9289 = null;
var G__9290 = (0);
var G__9291 = (0);
seq__9258 = G__9288;
chunk__9259 = G__9289;
count__9260 = G__9290;
i__9261 = G__9291;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9294){
var map__9300 = p__9294;
var map__9300__$1 = ((((!((map__9300 == null)))?((((map__9300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9300):map__9300);
var on_jsload = cljs.core.get.call(null,map__9300__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9300,map__9300__$1,on_jsload){
return (function (p1__9292_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9292_SHARP_,".js");
});})(map__9300,map__9300__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9300,map__9300__$1,on_jsload){
return (function (p1__9293_SHARP_){
return goog.Uri.parse(p1__9293_SHARP_).makeUnique();
});})(js_files,map__9300,map__9300__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9300,map__9300__$1,on_jsload){
return (function() { 
var G__9306__delegate = function (_){
return on_jsload.call(null);
};
var G__9306 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9307__i = 0, G__9307__a = new Array(arguments.length -  0);
while (G__9307__i < G__9307__a.length) {G__9307__a[G__9307__i] = arguments[G__9307__i + 0]; ++G__9307__i;}
  _ = new cljs.core.IndexedSeq(G__9307__a,0);
} 
return G__9306__delegate.call(this,_);};
G__9306.cljs$lang$maxFixedArity = 0;
G__9306.cljs$lang$applyTo = (function (arglist__9308){
var _ = cljs.core.seq(arglist__9308);
return G__9306__delegate(_);
});
G__9306.cljs$core$IFn$_invoke$arity$variadic = G__9306__delegate;
return G__9306;
})()
;})(js_files,map__9300,map__9300__$1,on_jsload))
,((function (js_files,map__9300,map__9300__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9300,map__9300__$1,on_jsload))
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

var seq__9317_9321 = cljs.core.seq.call(null,things_to_log);
var chunk__9318_9322 = null;
var count__9319_9323 = (0);
var i__9320_9324 = (0);
while(true){
if((i__9320_9324 < count__9319_9323)){
var t_9325 = cljs.core._nth.call(null,chunk__9318_9322,i__9320_9324);
console.log(t_9325);

var G__9326 = seq__9317_9321;
var G__9327 = chunk__9318_9322;
var G__9328 = count__9319_9323;
var G__9329 = (i__9320_9324 + (1));
seq__9317_9321 = G__9326;
chunk__9318_9322 = G__9327;
count__9319_9323 = G__9328;
i__9320_9324 = G__9329;
continue;
} else {
var temp__6747__auto___9330 = cljs.core.seq.call(null,seq__9317_9321);
if(temp__6747__auto___9330){
var seq__9317_9331__$1 = temp__6747__auto___9330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9317_9331__$1)){
var c__8391__auto___9332 = cljs.core.chunk_first.call(null,seq__9317_9331__$1);
var G__9333 = cljs.core.chunk_rest.call(null,seq__9317_9331__$1);
var G__9334 = c__8391__auto___9332;
var G__9335 = cljs.core.count.call(null,c__8391__auto___9332);
var G__9336 = (0);
seq__9317_9321 = G__9333;
chunk__9318_9322 = G__9334;
count__9319_9323 = G__9335;
i__9320_9324 = G__9336;
continue;
} else {
var t_9340 = cljs.core.first.call(null,seq__9317_9331__$1);
console.log(t_9340);

var G__9341 = cljs.core.next.call(null,seq__9317_9331__$1);
var G__9342 = null;
var G__9343 = (0);
var G__9344 = (0);
seq__9317_9321 = G__9341;
chunk__9318_9322 = G__9342;
count__9319_9323 = G__9343;
i__9320_9324 = G__9344;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__9349_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__9349_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__9351 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__9351);

adzerk.boot_reload.reload.reload_css.call(null,G__9351);

adzerk.boot_reload.reload.reload_img.call(null,G__9351);

return G__9351;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map