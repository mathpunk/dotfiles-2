// Compiled by ClojureScript 1.9.229 {}
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__12534_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__12534_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
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
var seq__12539 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__12540 = null;
var count__12541 = (0);
var i__12542 = (0);
while(true){
if((i__12542 < count__12541)){
var s = cljs.core._nth.call(null,chunk__12540,i__12542);
var temp__4657__auto___12543 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___12543)){
var sheet_12544 = temp__4657__auto___12543;
var temp__4657__auto___12545__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_12544.href,changed);
if(cljs.core.truth_(temp__4657__auto___12545__$1)){
var href_uri_12546 = temp__4657__auto___12545__$1;
sheet_12544.ownerNode.href = href_uri_12546.makeUnique().toString();
} else {
}
} else {
}

var G__12547 = seq__12539;
var G__12548 = chunk__12540;
var G__12549 = count__12541;
var G__12550 = (i__12542 + (1));
seq__12539 = G__12547;
chunk__12540 = G__12548;
count__12541 = G__12549;
i__12542 = G__12550;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12539);
if(temp__4657__auto__){
var seq__12539__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12539__$1)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,seq__12539__$1);
var G__12551 = cljs.core.chunk_rest.call(null,seq__12539__$1);
var G__12552 = c__7559__auto__;
var G__12553 = cljs.core.count.call(null,c__7559__auto__);
var G__12554 = (0);
seq__12539 = G__12551;
chunk__12540 = G__12552;
count__12541 = G__12553;
i__12542 = G__12554;
continue;
} else {
var s = cljs.core.first.call(null,seq__12539__$1);
var temp__4657__auto___12555__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___12555__$1)){
var sheet_12556 = temp__4657__auto___12555__$1;
var temp__4657__auto___12557__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_12556.href,changed);
if(cljs.core.truth_(temp__4657__auto___12557__$2)){
var href_uri_12558 = temp__4657__auto___12557__$2;
sheet_12556.ownerNode.href = href_uri_12558.makeUnique().toString();
} else {
}
} else {
}

var G__12559 = cljs.core.next.call(null,seq__12539__$1);
var G__12560 = null;
var G__12561 = (0);
var G__12562 = (0);
seq__12539 = G__12559;
chunk__12540 = G__12560;
count__12541 = G__12561;
i__12542 = G__12562;
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
var seq__12567 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__12568 = null;
var count__12569 = (0);
var i__12570 = (0);
while(true){
if((i__12570 < count__12569)){
var s = cljs.core._nth.call(null,chunk__12568,i__12570);
var temp__4657__auto___12571 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___12571)){
var image_12572 = temp__4657__auto___12571;
var temp__4657__auto___12573__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_12572.src,changed);
if(cljs.core.truth_(temp__4657__auto___12573__$1)){
var href_uri_12574 = temp__4657__auto___12573__$1;
image_12572.src = href_uri_12574.makeUnique().toString();
} else {
}
} else {
}

var G__12575 = seq__12567;
var G__12576 = chunk__12568;
var G__12577 = count__12569;
var G__12578 = (i__12570 + (1));
seq__12567 = G__12575;
chunk__12568 = G__12576;
count__12569 = G__12577;
i__12570 = G__12578;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12567);
if(temp__4657__auto__){
var seq__12567__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12567__$1)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,seq__12567__$1);
var G__12579 = cljs.core.chunk_rest.call(null,seq__12567__$1);
var G__12580 = c__7559__auto__;
var G__12581 = cljs.core.count.call(null,c__7559__auto__);
var G__12582 = (0);
seq__12567 = G__12579;
chunk__12568 = G__12580;
count__12569 = G__12581;
i__12570 = G__12582;
continue;
} else {
var s = cljs.core.first.call(null,seq__12567__$1);
var temp__4657__auto___12583__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___12583__$1)){
var image_12584 = temp__4657__auto___12583__$1;
var temp__4657__auto___12585__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_12584.src,changed);
if(cljs.core.truth_(temp__4657__auto___12585__$2)){
var href_uri_12586 = temp__4657__auto___12585__$2;
image_12584.src = href_uri_12586.makeUnique().toString();
} else {
}
} else {
}

var G__12587 = cljs.core.next.call(null,seq__12567__$1);
var G__12588 = null;
var G__12589 = (0);
var G__12590 = (0);
seq__12567 = G__12587;
chunk__12568 = G__12588;
count__12569 = G__12589;
i__12570 = G__12590;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__12593){
var map__12596 = p__12593;
var map__12596__$1 = ((((!((map__12596 == null)))?((((map__12596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12596):map__12596);
var on_jsload = cljs.core.get.call(null,map__12596__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__12596,map__12596__$1,on_jsload){
return (function (p1__12591_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__12591_SHARP_,".js");
});})(map__12596,map__12596__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__12596,map__12596__$1,on_jsload){
return (function (p1__12592_SHARP_){
return goog.Uri.parse(p1__12592_SHARP_).makeUnique();
});})(js_files,map__12596,map__12596__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__12596,map__12596__$1,on_jsload){
return (function() { 
var G__12598__delegate = function (_){
return on_jsload.call(null);
};
var G__12598 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__12599__i = 0, G__12599__a = new Array(arguments.length -  0);
while (G__12599__i < G__12599__a.length) {G__12599__a[G__12599__i] = arguments[G__12599__i + 0]; ++G__12599__i;}
  _ = new cljs.core.IndexedSeq(G__12599__a,0);
} 
return G__12598__delegate.call(this,_);};
G__12598.cljs$lang$maxFixedArity = 0;
G__12598.cljs$lang$applyTo = (function (arglist__12600){
var _ = cljs.core.seq(arglist__12600);
return G__12598__delegate(_);
});
G__12598.cljs$core$IFn$_invoke$arity$variadic = G__12598__delegate;
return G__12598;
})()
;})(js_files,map__12596,map__12596__$1,on_jsload))
,((function (js_files,map__12596,map__12596__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__12596,map__12596__$1,on_jsload))
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

var seq__12605_12609 = cljs.core.seq.call(null,things_to_log);
var chunk__12606_12610 = null;
var count__12607_12611 = (0);
var i__12608_12612 = (0);
while(true){
if((i__12608_12612 < count__12607_12611)){
var t_12613 = cljs.core._nth.call(null,chunk__12606_12610,i__12608_12612);
console.log(t_12613);

var G__12614 = seq__12605_12609;
var G__12615 = chunk__12606_12610;
var G__12616 = count__12607_12611;
var G__12617 = (i__12608_12612 + (1));
seq__12605_12609 = G__12614;
chunk__12606_12610 = G__12615;
count__12607_12611 = G__12616;
i__12608_12612 = G__12617;
continue;
} else {
var temp__4657__auto___12618 = cljs.core.seq.call(null,seq__12605_12609);
if(temp__4657__auto___12618){
var seq__12605_12619__$1 = temp__4657__auto___12618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12605_12619__$1)){
var c__7559__auto___12620 = cljs.core.chunk_first.call(null,seq__12605_12619__$1);
var G__12621 = cljs.core.chunk_rest.call(null,seq__12605_12619__$1);
var G__12622 = c__7559__auto___12620;
var G__12623 = cljs.core.count.call(null,c__7559__auto___12620);
var G__12624 = (0);
seq__12605_12609 = G__12621;
chunk__12606_12610 = G__12622;
count__12607_12611 = G__12623;
i__12608_12612 = G__12624;
continue;
} else {
var t_12625 = cljs.core.first.call(null,seq__12605_12619__$1);
console.log(t_12625);

var G__12626 = cljs.core.next.call(null,seq__12605_12619__$1);
var G__12627 = null;
var G__12628 = (0);
var G__12629 = (0);
seq__12605_12609 = G__12626;
chunk__12606_12610 = G__12627;
count__12607_12611 = G__12628;
i__12608_12612 = G__12629;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__12630_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__12630_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__12632 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__12632);

adzerk.boot_reload.reload.reload_css.call(null,G__12632);

adzerk.boot_reload.reload.reload_img.call(null,G__12632);

return G__12632;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map