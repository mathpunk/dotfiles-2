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
return (function (p1__9467_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9467_SHARP_),path);
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
var seq__9472 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9473 = null;
var count__9474 = (0);
var i__9475 = (0);
while(true){
if((i__9475 < count__9474)){
var s = cljs.core._nth.call(null,chunk__9473,i__9475);
var temp__6747__auto___9480 = (sheets[s]);
if(cljs.core.truth_(temp__6747__auto___9480)){
var sheet_9481 = temp__6747__auto___9480;
var temp__6747__auto___9482__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9481.href,changed);
if(cljs.core.truth_(temp__6747__auto___9482__$1)){
var href_uri_9483 = temp__6747__auto___9482__$1;
sheet_9481.ownerNode.href = href_uri_9483.makeUnique().toString();
} else {
}
} else {
}

var G__9484 = seq__9472;
var G__9485 = chunk__9473;
var G__9486 = count__9474;
var G__9487 = (i__9475 + (1));
seq__9472 = G__9484;
chunk__9473 = G__9485;
count__9474 = G__9486;
i__9475 = G__9487;
continue;
} else {
var temp__6747__auto__ = cljs.core.seq.call(null,seq__9472);
if(temp__6747__auto__){
var seq__9472__$1 = temp__6747__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9472__$1)){
var c__8391__auto__ = cljs.core.chunk_first.call(null,seq__9472__$1);
var G__9488 = cljs.core.chunk_rest.call(null,seq__9472__$1);
var G__9489 = c__8391__auto__;
var G__9490 = cljs.core.count.call(null,c__8391__auto__);
var G__9491 = (0);
seq__9472 = G__9488;
chunk__9473 = G__9489;
count__9474 = G__9490;
i__9475 = G__9491;
continue;
} else {
var s = cljs.core.first.call(null,seq__9472__$1);
var temp__6747__auto___9492__$1 = (sheets[s]);
if(cljs.core.truth_(temp__6747__auto___9492__$1)){
var sheet_9493 = temp__6747__auto___9492__$1;
var temp__6747__auto___9494__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9493.href,changed);
if(cljs.core.truth_(temp__6747__auto___9494__$2)){
var href_uri_9495 = temp__6747__auto___9494__$2;
sheet_9493.ownerNode.href = href_uri_9495.makeUnique().toString();
} else {
}
} else {
}

var G__9496 = cljs.core.next.call(null,seq__9472__$1);
var G__9497 = null;
var G__9498 = (0);
var G__9499 = (0);
seq__9472 = G__9496;
chunk__9473 = G__9497;
count__9474 = G__9498;
i__9475 = G__9499;
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
var seq__9504 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9505 = null;
var count__9506 = (0);
var i__9507 = (0);
while(true){
if((i__9507 < count__9506)){
var s = cljs.core._nth.call(null,chunk__9505,i__9507);
var temp__6747__auto___9508 = (images[s]);
if(cljs.core.truth_(temp__6747__auto___9508)){
var image_9509 = temp__6747__auto___9508;
var temp__6747__auto___9510__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_9509.src,changed);
if(cljs.core.truth_(temp__6747__auto___9510__$1)){
var href_uri_9511 = temp__6747__auto___9510__$1;
image_9509.src = href_uri_9511.makeUnique().toString();
} else {
}
} else {
}

var G__9512 = seq__9504;
var G__9513 = chunk__9505;
var G__9514 = count__9506;
var G__9515 = (i__9507 + (1));
seq__9504 = G__9512;
chunk__9505 = G__9513;
count__9506 = G__9514;
i__9507 = G__9515;
continue;
} else {
var temp__6747__auto__ = cljs.core.seq.call(null,seq__9504);
if(temp__6747__auto__){
var seq__9504__$1 = temp__6747__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9504__$1)){
var c__8391__auto__ = cljs.core.chunk_first.call(null,seq__9504__$1);
var G__9516 = cljs.core.chunk_rest.call(null,seq__9504__$1);
var G__9517 = c__8391__auto__;
var G__9518 = cljs.core.count.call(null,c__8391__auto__);
var G__9519 = (0);
seq__9504 = G__9516;
chunk__9505 = G__9517;
count__9506 = G__9518;
i__9507 = G__9519;
continue;
} else {
var s = cljs.core.first.call(null,seq__9504__$1);
var temp__6747__auto___9523__$1 = (images[s]);
if(cljs.core.truth_(temp__6747__auto___9523__$1)){
var image_9524 = temp__6747__auto___9523__$1;
var temp__6747__auto___9525__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_9524.src,changed);
if(cljs.core.truth_(temp__6747__auto___9525__$2)){
var href_uri_9527 = temp__6747__auto___9525__$2;
image_9524.src = href_uri_9527.makeUnique().toString();
} else {
}
} else {
}

var G__9529 = cljs.core.next.call(null,seq__9504__$1);
var G__9530 = null;
var G__9531 = (0);
var G__9532 = (0);
seq__9504 = G__9529;
chunk__9505 = G__9530;
count__9506 = G__9531;
i__9507 = G__9532;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9535){
var map__9544 = p__9535;
var map__9544__$1 = ((((!((map__9544 == null)))?((((map__9544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9544):map__9544);
var on_jsload = cljs.core.get.call(null,map__9544__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9544,map__9544__$1,on_jsload){
return (function (p1__9533_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9533_SHARP_,".js");
});})(map__9544,map__9544__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9544,map__9544__$1,on_jsload){
return (function (p1__9534_SHARP_){
return goog.Uri.parse(p1__9534_SHARP_).makeUnique();
});})(js_files,map__9544,map__9544__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9544,map__9544__$1,on_jsload){
return (function() { 
var G__9564__delegate = function (_){
return on_jsload.call(null);
};
var G__9564 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9566__i = 0, G__9566__a = new Array(arguments.length -  0);
while (G__9566__i < G__9566__a.length) {G__9566__a[G__9566__i] = arguments[G__9566__i + 0]; ++G__9566__i;}
  _ = new cljs.core.IndexedSeq(G__9566__a,0);
} 
return G__9564__delegate.call(this,_);};
G__9564.cljs$lang$maxFixedArity = 0;
G__9564.cljs$lang$applyTo = (function (arglist__9567){
var _ = cljs.core.seq(arglist__9567);
return G__9564__delegate(_);
});
G__9564.cljs$core$IFn$_invoke$arity$variadic = G__9564__delegate;
return G__9564;
})()
;})(js_files,map__9544,map__9544__$1,on_jsload))
,((function (js_files,map__9544,map__9544__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9544,map__9544__$1,on_jsload))
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

var seq__9614_9618 = cljs.core.seq.call(null,things_to_log);
var chunk__9615_9619 = null;
var count__9616_9620 = (0);
var i__9617_9621 = (0);
while(true){
if((i__9617_9621 < count__9616_9620)){
var t_9622 = cljs.core._nth.call(null,chunk__9615_9619,i__9617_9621);
console.log(t_9622);

var G__9632 = seq__9614_9618;
var G__9633 = chunk__9615_9619;
var G__9634 = count__9616_9620;
var G__9635 = (i__9617_9621 + (1));
seq__9614_9618 = G__9632;
chunk__9615_9619 = G__9633;
count__9616_9620 = G__9634;
i__9617_9621 = G__9635;
continue;
} else {
var temp__6747__auto___9637 = cljs.core.seq.call(null,seq__9614_9618);
if(temp__6747__auto___9637){
var seq__9614_9639__$1 = temp__6747__auto___9637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9614_9639__$1)){
var c__8391__auto___9640 = cljs.core.chunk_first.call(null,seq__9614_9639__$1);
var G__9641 = cljs.core.chunk_rest.call(null,seq__9614_9639__$1);
var G__9642 = c__8391__auto___9640;
var G__9643 = cljs.core.count.call(null,c__8391__auto___9640);
var G__9644 = (0);
seq__9614_9618 = G__9641;
chunk__9615_9619 = G__9642;
count__9616_9620 = G__9643;
i__9617_9621 = G__9644;
continue;
} else {
var t_9645 = cljs.core.first.call(null,seq__9614_9639__$1);
console.log(t_9645);

var G__9646 = cljs.core.next.call(null,seq__9614_9639__$1);
var G__9647 = null;
var G__9648 = (0);
var G__9649 = (0);
seq__9614_9618 = G__9646;
chunk__9615_9619 = G__9647;
count__9616_9620 = G__9648;
i__9617_9621 = G__9649;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__9653_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__9653_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__9656 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__9656);

adzerk.boot_reload.reload.reload_css.call(null,G__9656);

adzerk.boot_reload.reload.reload_img.call(null,G__9656);

return G__9656;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map