// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.toolbox');
goog.require('devtools.hints');
goog.require('devtools.async');
goog.require('devtools.formatters');
goog.require('devtools.util');
goog.require('devtools.defaults');
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__15366 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__15366) {
case "formatters":
return devtools.formatters.available_QMARK_.call(null);

break;
case "hints":
return devtools.hints.available_QMARK_.call(null);

break;
case "async":
return devtools.async.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.available_QMARK_ = (function devtools$core$available_QMARK_(var_args){
var args15368 = [];
var len__8701__auto___15371 = arguments.length;
var i__8702__auto___15372 = (0);
while(true){
if((i__8702__auto___15372 < len__8701__auto___15371)){
args15368.push((arguments[i__8702__auto___15372]));

var G__15373 = (i__8702__auto___15372 + (1));
i__8702__auto___15372 = G__15373;
continue;
} else {
}
break;
}

var G__15370 = args15368.length;
switch (G__15370) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15368.length)].join('')));

}
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.available_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_available_QMARK_,features);
}
});

devtools.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.is_feature_installed_QMARK_ = (function devtools$core$is_feature_installed_QMARK_(feature){
var G__15376 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__15376) {
case "formatters":
return devtools.formatters.installed_QMARK_.call(null);

break;
case "hints":
return devtools.hints.installed_QMARK_.call(null);

break;
case "async":
return devtools.async.installed_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(var_args){
var args15378 = [];
var len__8701__auto___15381 = arguments.length;
var i__8702__auto___15382 = (0);
while(true){
if((i__8702__auto___15382 < len__8701__auto___15381)){
args15378.push((arguments[i__8702__auto___15382]));

var G__15383 = (i__8702__auto___15382 + (1));
i__8702__auto___15382 = G__15383;
continue;
} else {
}
break;
}

var G__15380 = args15378.length;
switch (G__15380) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15378.length)].join('')));

}
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.installed_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_installed_QMARK_,features);
}
});

devtools.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var args15385 = [];
var len__8701__auto___15388 = arguments.length;
var i__8702__auto___15389 = (0);
while(true){
if((i__8702__auto___15389 < len__8701__auto___15388)){
args15385.push((arguments[i__8702__auto___15389]));

var G__15390 = (i__8702__auto___15389 + (1));
i__8702__auto___15389 = G__15390;
continue;
} else {
}
break;
}

var G__15387 = args15385.length;
switch (G__15387) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15385.length)].join('')));

}
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
devtools.util.display_banner_if_needed_BANG_.call(null,features,devtools.defaults.feature_groups);

devtools.util.print_config_overrides_if_requested_BANG_.call(null,"config overrides prior install:\n");

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),features,devtools.core.is_feature_available_QMARK_,devtools.formatters.install_BANG_);

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"hints","hints",-991113151),features,devtools.core.is_feature_available_QMARK_,devtools.hints.install_BANG_);

return devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"async","async",1050769601),features,devtools.core.is_feature_available_QMARK_,devtools.async.install_BANG_);
});

devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1;

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.formatters.uninstall_BANG_.call(null);

devtools.hints.uninstall_BANG_.call(null);

return devtools.async.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return console.warn([cljs.core.str("devtools.core/set-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str("devtools.core/enable-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str("devtools.core/disable-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__8708__auto__ = [];
var len__8701__auto___15393 = arguments.length;
var i__8702__auto___15394 = (0);
while(true){
if((i__8702__auto___15394 < len__8701__auto___15393)){
args__8708__auto__.push((arguments[i__8702__auto___15394]));

var G__15395 = (i__8702__auto___15394 + (1));
i__8702__auto___15394 = G__15395;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/enable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq15392){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15392));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__8708__auto__ = [];
var len__8701__auto___15397 = arguments.length;
var i__8702__auto___15398 = (0);
while(true){
if((i__8702__auto___15398 < len__8701__auto___15397)){
args__8708__auto__.push((arguments[i__8702__auto___15398]));

var G__15399 = (i__8702__auto___15398 + (1));
i__8702__auto___15398 = G__15399;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/disable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq15396){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15396));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return console.warn([cljs.core.str("devtools.core/single-feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__8708__auto__ = [];
var len__8701__auto___15401 = arguments.length;
var i__8702__auto___15402 = (0);
while(true){
if((i__8702__auto___15402 < len__8701__auto___15401)){
args__8708__auto__.push((arguments[i__8702__auto___15402]));

var G__15403 = (i__8702__auto___15402 + (1));
i__8702__auto___15402 = G__15403;
continue;
} else {
}
break;
}

var argseq__8709__auto__ = ((((0) < args__8708__auto__.length))?(new cljs.core.IndexedSeq(args__8708__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__8709__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq15400){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15400));
});


//# sourceMappingURL=core.js.map