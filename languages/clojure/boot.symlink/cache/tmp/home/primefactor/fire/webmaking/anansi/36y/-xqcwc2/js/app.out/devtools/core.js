// Compiled by ClojureScript 1.9.229 {}
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
var G__21779 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__21779) {
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
var args21781 = [];
var len__7823__auto___21784 = arguments.length;
var i__7824__auto___21785 = (0);
while(true){
if((i__7824__auto___21785 < len__7823__auto___21784)){
args21781.push((arguments[i__7824__auto___21785]));

var G__21786 = (i__7824__auto___21785 + (1));
i__7824__auto___21785 = G__21786;
continue;
} else {
}
break;
}

var G__21783 = args21781.length;
switch (G__21783) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21781.length)].join('')));

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
var G__21789 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__21789) {
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
var args21791 = [];
var len__7823__auto___21794 = arguments.length;
var i__7824__auto___21795 = (0);
while(true){
if((i__7824__auto___21795 < len__7823__auto___21794)){
args21791.push((arguments[i__7824__auto___21795]));

var G__21796 = (i__7824__auto___21795 + (1));
i__7824__auto___21795 = G__21796;
continue;
} else {
}
break;
}

var G__21793 = args21791.length;
switch (G__21793) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21791.length)].join('')));

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
var args21798 = [];
var len__7823__auto___21801 = arguments.length;
var i__7824__auto___21802 = (0);
while(true){
if((i__7824__auto___21802 < len__7823__auto___21801)){
args21798.push((arguments[i__7824__auto___21802]));

var G__21803 = (i__7824__auto___21802 + (1));
i__7824__auto___21802 = G__21803;
continue;
} else {
}
break;
}

var G__21800 = args21798.length;
switch (G__21800) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21798.length)].join('')));

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
var args__7830__auto__ = [];
var len__7823__auto___21806 = arguments.length;
var i__7824__auto___21807 = (0);
while(true){
if((i__7824__auto___21807 < len__7823__auto___21806)){
args__7830__auto__.push((arguments[i__7824__auto___21807]));

var G__21808 = (i__7824__auto___21807 + (1));
i__7824__auto___21807 = G__21808;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/enable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq21805){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21805));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__7830__auto__ = [];
var len__7823__auto___21810 = arguments.length;
var i__7824__auto___21811 = (0);
while(true){
if((i__7824__auto___21811 < len__7823__auto___21810)){
args__7830__auto__.push((arguments[i__7824__auto___21811]));

var G__21812 = (i__7824__auto___21811 + (1));
i__7824__auto___21811 = G__21812;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/disable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq21809){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21809));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return console.warn([cljs.core.str("devtools.core/single-feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__7830__auto__ = [];
var len__7823__auto___21814 = arguments.length;
var i__7824__auto___21815 = (0);
while(true){
if((i__7824__auto___21815 < len__7823__auto___21814)){
args__7830__auto__.push((arguments[i__7824__auto___21815]));

var G__21816 = (i__7824__auto___21815 + (1));
i__7824__auto___21815 = G__21816;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq21813){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21813));
});


//# sourceMappingURL=core.js.map