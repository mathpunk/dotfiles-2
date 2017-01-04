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
return (function (p1__10564_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__10564_SHARP_),path);
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
var seq__10569 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__10570 = null;
var count__10571 = (0);
var i__10572 = (0);
while(true){
if((i__10572 < count__10571)){
var s = cljs.core._nth.call(null,chunk__10570,i__10572);
var temp__4657__auto___10573 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___10573)){
var sheet_10574 = temp__4657__auto___10573;
var temp__4657__auto___10575__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_10574.href,changed);
if(cljs.core.truth_(temp__4657__auto___10575__$1)){
var href_uri_10576 = temp__4657__auto___10575__$1;
sheet_10574.ownerNode.href = href_uri_10576.makeUnique().toString();
} else {
}
} else {
}

var G__10577 = seq__10569;
var G__10578 = chunk__10570;
var G__10579 = count__10571;
var G__10580 = (i__10572 + (1));
seq__10569 = G__10577;
chunk__10570 = G__10578;
count__10571 = G__10579;
i__10572 = G__10580;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10569);
if(temp__4657__auto__){
var seq__10569__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10569__$1)){
var c__7558__auto__ = cljs.core.chunk_first.call(null,seq__10569__$1);
var G__10581 = cljs.core.chunk_rest.call(null,seq__10569__$1);
var G__10582 = c__7558__auto__;
var G__10583 = cljs.core.count.call(null,c__7558__auto__);
var G__10584 = (0);
seq__10569 = G__10581;
chunk__10570 = G__10582;
count__10571 = G__10583;
i__10572 = G__10584;
continue;
} else {
var s = cljs.core.first.call(null,seq__10569__$1);
var temp__4657__auto___10585__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___10585__$1)){
var sheet_10586 = temp__4657__auto___10585__$1;
var temp__4657__auto___10587__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_10586.href,changed);
if(cljs.core.truth_(temp__4657__auto___10587__$2)){
var href_uri_10588 = temp__4657__auto___10587__$2;
sheet_10586.ownerNode.href = href_uri_10588.makeUnique().toString();
} else {
}
} else {
}

var G__10589 = cljs.core.next.call(null,seq__10569__$1);
var G__10590 = null;
var G__10591 = (0);
var G__10592 = (0);
seq__10569 = G__10589;
chunk__10570 = G__10590;
count__10571 = G__10591;
i__10572 = G__10592;
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
var seq__10597 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__10598 = null;
var count__10599 = (0);
var i__10600 = (0);
while(true){
if((i__10600 < count__10599)){
var s = cljs.core._nth.call(null,chunk__10598,i__10600);
var temp__4657__auto___10601 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___10601)){
var image_10602 = temp__4657__auto___10601;
var temp__4657__auto___10603__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_10602.src,changed);
if(cljs.core.truth_(temp__4657__auto___10603__$1)){
var href_uri_10604 = temp__4657__auto___10603__$1;
image_10602.src = href_uri_10604.makeUnique().toString();
} else {
}
} else {
}

var G__10605 = seq__10597;
var G__10606 = chunk__10598;
var G__10607 = count__10599;
var G__10608 = (i__10600 + (1));
seq__10597 = G__10605;
chunk__10598 = G__10606;
count__10599 = G__10607;
i__10600 = G__10608;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10597);
if(temp__4657__auto__){
var seq__10597__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10597__$1)){
var c__7558__auto__ = cljs.core.chunk_first.call(null,seq__10597__$1);
var G__10609 = cljs.core.chunk_rest.call(null,seq__10597__$1);
var G__10610 = c__7558__auto__;
var G__10611 = cljs.core.count.call(null,c__7558__auto__);
var G__10612 = (0);
seq__10597 = G__10609;
chunk__10598 = G__10610;
count__10599 = G__10611;
i__10600 = G__10612;
continue;
} else {
var s = cljs.core.first.call(null,seq__10597__$1);
var temp__4657__auto___10613__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___10613__$1)){
var image_10614 = temp__4657__auto___10613__$1;
var temp__4657__auto___10615__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_10614.src,changed);
if(cljs.core.truth_(temp__4657__auto___10615__$2)){
var href_uri_10616 = temp__4657__auto___10615__$2;
image_10614.src = href_uri_10616.makeUnique().toString();
} else {
}
} else {
}

var G__10617 = cljs.core.next.call(null,seq__10597__$1);
var G__10618 = null;
var G__10619 = (0);
var G__10620 = (0);
seq__10597 = G__10617;
chunk__10598 = G__10618;
count__10599 = G__10619;
i__10600 = G__10620;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__10623){
var map__10626 = p__10623;
var map__10626__$1 = ((((!((map__10626 == null)))?((((map__10626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10626):map__10626);
var on_jsload = cljs.core.get.call(null,map__10626__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__10626,map__10626__$1,on_jsload){
return (function (p1__10621_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__10621_SHARP_,".js");
});})(map__10626,map__10626__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__10626,map__10626__$1,on_jsload){
return (function (p1__10622_SHARP_){
return goog.Uri.parse(p1__10622_SHARP_).makeUnique();
});})(js_files,map__10626,map__10626__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__10626,map__10626__$1,on_jsload){
return (function() { 
var G__10628__delegate = function (_){
return on_jsload.call(null);
};
var G__10628 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__10629__i = 0, G__10629__a = new Array(arguments.length -  0);
while (G__10629__i < G__10629__a.length) {G__10629__a[G__10629__i] = arguments[G__10629__i + 0]; ++G__10629__i;}
  _ = new cljs.core.IndexedSeq(G__10629__a,0);
} 
return G__10628__delegate.call(this,_);};
G__10628.cljs$lang$maxFixedArity = 0;
G__10628.cljs$lang$applyTo = (function (arglist__10630){
var _ = cljs.core.seq(arglist__10630);
return G__10628__delegate(_);
});
G__10628.cljs$core$IFn$_invoke$arity$variadic = G__10628__delegate;
return G__10628;
})()
;})(js_files,map__10626,map__10626__$1,on_jsload))
,((function (js_files,map__10626,map__10626__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__10626,map__10626__$1,on_jsload))
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

var seq__10635_10639 = cljs.core.seq.call(null,things_to_log);
var chunk__10636_10640 = null;
var count__10637_10641 = (0);
var i__10638_10642 = (0);
while(true){
if((i__10638_10642 < count__10637_10641)){
var t_10643 = cljs.core._nth.call(null,chunk__10636_10640,i__10638_10642);
console.log(t_10643);

var G__10644 = seq__10635_10639;
var G__10645 = chunk__10636_10640;
var G__10646 = count__10637_10641;
var G__10647 = (i__10638_10642 + (1));
seq__10635_10639 = G__10644;
chunk__10636_10640 = G__10645;
count__10637_10641 = G__10646;
i__10638_10642 = G__10647;
continue;
} else {
var temp__4657__auto___10648 = cljs.core.seq.call(null,seq__10635_10639);
if(temp__4657__auto___10648){
var seq__10635_10649__$1 = temp__4657__auto___10648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10635_10649__$1)){
var c__7558__auto___10650 = cljs.core.chunk_first.call(null,seq__10635_10649__$1);
var G__10651 = cljs.core.chunk_rest.call(null,seq__10635_10649__$1);
var G__10652 = c__7558__auto___10650;
var G__10653 = cljs.core.count.call(null,c__7558__auto___10650);
var G__10654 = (0);
seq__10635_10639 = G__10651;
chunk__10636_10640 = G__10652;
count__10637_10641 = G__10653;
i__10638_10642 = G__10654;
continue;
} else {
var t_10655 = cljs.core.first.call(null,seq__10635_10649__$1);
console.log(t_10655);

var G__10656 = cljs.core.next.call(null,seq__10635_10649__$1);
var G__10657 = null;
var G__10658 = (0);
var G__10659 = (0);
seq__10635_10639 = G__10656;
chunk__10636_10640 = G__10657;
count__10637_10641 = G__10658;
i__10638_10642 = G__10659;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__10660_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__10660_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__10662 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__10662);

adzerk.boot_reload.reload.reload_css.call(null,G__10662);

adzerk.boot_reload.reload.reload_img.call(null,G__10662);

return G__10662;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map