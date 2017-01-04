// Compiled by ClojureScript 1.9.229 {}
goog.provide('dirac.runtime.repl');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('dirac.runtime.deps');
goog.require('goog.labs.userAgent.browser');
goog.require('dirac.runtime.bootstrap');
goog.require('dirac.runtime.output');
goog.require('clojure.string');
goog.require('dirac.runtime.prefs');
dirac.runtime.repl.available_QMARK_ = (function dirac$runtime$repl$available_QMARK_(){
var and__6736__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__6736__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__6736__auto__;
}
});
dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
dirac.runtime.repl._STAR_bootstrapped_QMARK__STAR_ = false;
dirac.runtime.repl.console_tunnel = (function dirac$runtime$repl$console_tunnel(var_args){
var args__7830__auto__ = [];
var len__7823__auto___21319 = arguments.length;
var i__7824__auto___21320 = (0);
while(true){
if((i__7824__auto___21320 < len__7823__auto___21319)){
args__7830__auto__.push((arguments[i__7824__auto___21320]));

var G__21321 = (i__7824__auto___21320 + (1));
i__7824__auto___21320 = G__21321;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((1) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7831__auto__);
});

dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic = (function (method,args){
return goog.object.get(console,method).apply(console,cljs.core.to_array.call(null,args));
});

dirac.runtime.repl.console_tunnel.cljs$lang$maxFixedArity = (1);

dirac.runtime.repl.console_tunnel.cljs$lang$applyTo = (function (seq21317){
var G__21318 = cljs.core.first.call(null,seq21317);
var seq21317__$1 = cljs.core.next.call(null,seq21317);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic(G__21318,seq21317__$1);
});

dirac.runtime.repl.dirac_msg_args = (function dirac$runtime$repl$dirac_msg_args(name,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-MSG$~~",name], null),args);
});
dirac.runtime.repl.dirac_log_args = (function dirac$runtime$repl$dirac_log_args(request_id,kind,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-LOG$~~",request_id,kind], null),args);
});
dirac.runtime.repl.call_dirac = (function dirac$runtime$repl$call_dirac(var_args){
var args__7830__auto__ = [];
var len__7823__auto___21324 = arguments.length;
var i__7824__auto___21325 = (0);
while(true){
if((i__7824__auto___21325 < len__7823__auto___21324)){
args__7830__auto__.push((arguments[i__7824__auto___21325]));

var G__21326 = (i__7824__auto___21325 + (1));
i__7824__auto___21325 = G__21326;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((1) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7831__auto__);
});

dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic = (function (name,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_msg_args.call(null,name,args));
});

dirac.runtime.repl.call_dirac.cljs$lang$maxFixedArity = (1);

dirac.runtime.repl.call_dirac.cljs$lang$applyTo = (function (seq21322){
var G__21323 = cljs.core.first.call(null,seq21322);
var seq21322__$1 = cljs.core.next.call(null,seq21322);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic(G__21323,seq21322__$1);
});

dirac.runtime.repl.log = (function dirac$runtime$repl$log(var_args){
var args__7830__auto__ = [];
var len__7823__auto___21330 = arguments.length;
var i__7824__auto___21331 = (0);
while(true){
if((i__7824__auto___21331 < len__7823__auto___21330)){
args__7830__auto__.push((arguments[i__7824__auto___21331]));

var G__21332 = (i__7824__auto___21331 + (1));
i__7824__auto___21331 = G__21332;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((2) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7831__auto__);
});

dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.log.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.log.cljs$lang$applyTo = (function (seq21327){
var G__21328 = cljs.core.first.call(null,seq21327);
var seq21327__$1 = cljs.core.next.call(null,seq21327);
var G__21329 = cljs.core.first.call(null,seq21327__$1);
var seq21327__$2 = cljs.core.next.call(null,seq21327__$1);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic(G__21328,G__21329,seq21327__$2);
});

dirac.runtime.repl.warn = (function dirac$runtime$repl$warn(var_args){
var args__7830__auto__ = [];
var len__7823__auto___21336 = arguments.length;
var i__7824__auto___21337 = (0);
while(true){
if((i__7824__auto___21337 < len__7823__auto___21336)){
args__7830__auto__.push((arguments[i__7824__auto___21337]));

var G__21338 = (i__7824__auto___21337 + (1));
i__7824__auto___21337 = G__21338;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((2) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7831__auto__);
});

dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"warn",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.warn.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.warn.cljs$lang$applyTo = (function (seq21333){
var G__21334 = cljs.core.first.call(null,seq21333);
var seq21333__$1 = cljs.core.next.call(null,seq21333);
var G__21335 = cljs.core.first.call(null,seq21333__$1);
var seq21333__$2 = cljs.core.next.call(null,seq21333__$1);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic(G__21334,G__21335,seq21333__$2);
});

dirac.runtime.repl.error = (function dirac$runtime$repl$error(var_args){
var args__7830__auto__ = [];
var len__7823__auto___21342 = arguments.length;
var i__7824__auto___21343 = (0);
while(true){
if((i__7824__auto___21343 < len__7823__auto___21342)){
args__7830__auto__.push((arguments[i__7824__auto___21343]));

var G__21344 = (i__7824__auto___21343 + (1));
i__7824__auto___21343 = G__21344;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((2) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7831__auto__);
});

dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"error",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.error.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.error.cljs$lang$applyTo = (function (seq21339){
var G__21340 = cljs.core.first.call(null,seq21339);
var seq21339__$1 = cljs.core.next.call(null,seq21339);
var G__21341 = cljs.core.first.call(null,seq21339__$1);
var seq21339__$2 = cljs.core.next.call(null,seq21339__$1);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic(G__21340,G__21341,seq21339__$2);
});

dirac.runtime.repl.group_STAR_ = (function dirac$runtime$repl$group_STAR_(var_args){
var args__7830__auto__ = [];
var len__7823__auto___21349 = arguments.length;
var i__7824__auto___21350 = (0);
while(true){
if((i__7824__auto___21350 < len__7823__auto___21349)){
args__7830__auto__.push((arguments[i__7824__auto___21350]));

var G__21351 = (i__7824__auto___21350 + (1));
i__7824__auto___21350 = G__21351;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((3) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((3)),(0),null)):null);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7831__auto__);
});

dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (collapsed_QMARK_,request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,(cljs.core.truth_(collapsed_QMARK_)?"groupCollapsed":"group"),dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.group_STAR_.cljs$lang$maxFixedArity = (3);

dirac.runtime.repl.group_STAR_.cljs$lang$applyTo = (function (seq21345){
var G__21346 = cljs.core.first.call(null,seq21345);
var seq21345__$1 = cljs.core.next.call(null,seq21345);
var G__21347 = cljs.core.first.call(null,seq21345__$1);
var seq21345__$2 = cljs.core.next.call(null,seq21345__$1);
var G__21348 = cljs.core.first.call(null,seq21345__$2);
var seq21345__$3 = cljs.core.next.call(null,seq21345__$2);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__21346,G__21347,G__21348,seq21345__$3);
});

dirac.runtime.repl.group_collapsed = (function dirac$runtime$repl$group_collapsed(var_args){
var args__7830__auto__ = [];
var len__7823__auto___21353 = arguments.length;
var i__7824__auto___21354 = (0);
while(true){
if((i__7824__auto___21354 < len__7823__auto___21353)){
args__7830__auto__.push((arguments[i__7824__auto___21354]));

var G__21355 = (i__7824__auto___21354 + (1));
i__7824__auto___21354 = G__21355;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,dirac.runtime.repl.group_STAR_,true,args);
});

dirac.runtime.repl.group_collapsed.cljs$lang$maxFixedArity = (0);

dirac.runtime.repl.group_collapsed.cljs$lang$applyTo = (function (seq21352){
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21352));
});

dirac.runtime.repl.group = (function dirac$runtime$repl$group(var_args){
var args__7830__auto__ = [];
var len__7823__auto___21357 = arguments.length;
var i__7824__auto___21358 = (0);
while(true){
if((i__7824__auto___21358 < len__7823__auto___21357)){
args__7830__auto__.push((arguments[i__7824__auto___21358]));

var G__21359 = (i__7824__auto___21358 + (1));
i__7824__auto___21358 = G__21359;
continue;
} else {
}
break;
}

var argseq__7831__auto__ = ((((0) < args__7830__auto__.length))?(new cljs.core.IndexedSeq(args__7830__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7831__auto__);
});

dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,dirac.runtime.repl.group_STAR_,false,args);
});

dirac.runtime.repl.group.cljs$lang$maxFixedArity = (0);

dirac.runtime.repl.group.cljs$lang$applyTo = (function (seq21356){
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21356));
});

dirac.runtime.repl.group_end = (function dirac$runtime$repl$group_end(){
return console.groupEnd();
});
dirac.runtime.repl.detect_and_strip = (function dirac$runtime$repl$detect_and_strip(prefix,text){
var prefix_len = cljs.core.count.call(null,prefix);
var s = cljs.core.subs.call(null,text,(0),prefix_len);
if(cljs.core._EQ_.call(null,s,prefix)){
return clojure.string.triml.call(null,cljs.core.subs.call(null,text,prefix_len));
} else {
return null;
}
});
dirac.runtime.repl.get_whitespace_prefix_length = (function dirac$runtime$repl$get_whitespace_prefix_length(line){
var temp__4655__auto__ = cljs.core.re_find.call(null,/^([ ]+)/,line);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return cljs.core.count.call(null,cljs.core.second.call(null,m));
} else {
return (0);
}
});
dirac.runtime.repl.remove_common_whitespace_prefix = (function dirac$runtime$repl$remove_common_whitespace_prefix(text){
var text_with_spaces = clojure.string.replace.call(null,text,"\t","  ");
var lines = clojure.string.split.call(null,text_with_spaces,/\n/);
var common_prefix_length = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,dirac.runtime.repl.get_whitespace_prefix_length,lines));
if((common_prefix_length > (0))){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,((function (text_with_spaces,lines,common_prefix_length){
return (function (p1__21360_SHARP_){
return cljs.core.subs.call(null,p1__21360_SHARP_,common_prefix_length);
});})(text_with_spaces,lines,common_prefix_length))
,lines));
} else {
return text;
}
});
dirac.runtime.repl.present_java_trace = (function dirac$runtime$repl$present_java_trace(request_id,text){
var lines = clojure.string.split.call(null,text,/\n/);
var first_line = cljs.core.first.call(null,lines);
var rest_content = clojure.string.join.call(null,"\n",cljs.core.rest.call(null,lines));
if(cljs.core.empty_QMARK_.call(null,rest_content)){
return dirac.runtime.repl.error.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),first_line);
} else {
dirac.runtime.repl.group_collapsed.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),"%c%s",dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"java-trace-header-style","java-trace-header-style",-1425214239)),first_line);

dirac.runtime.repl.log.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),dirac.runtime.repl.remove_common_whitespace_prefix.call(null,rest_content));

return dirac.runtime.repl.group_end.call(null);
}
});
dirac.runtime.repl.should_silence_warning_QMARK_ = (function dirac$runtime$repl$should_silence_warning_QMARK_(message){
if(cljs.core.truth_((function (){var and__6736__auto__ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"silence-use-of-undeclared-var-warnings","silence-use-of-undeclared-var-warnings",341047901));
if(cljs.core.truth_(and__6736__auto__)){
return cljs.core.re_find.call(null,/^Use of undeclared Var/,message);
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
if(cljs.core.truth_((function (){var and__6736__auto__ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"silence-no-such-namespace-warnings","silence-no-such-namespace-warnings",2078733745));
if(cljs.core.truth_(and__6736__auto__)){
return cljs.core.re_find.call(null,/^No such namespace/,message);
} else {
return and__6736__auto__;
}
})())){
return true;
} else {
return false;

}
}
});
dirac.runtime.repl.should_silence_error_QMARK_ = (function dirac$runtime$repl$should_silence_error_QMARK_(_message){
return false;

});
dirac.runtime.repl.emit_warning_BANG_ = (function dirac$runtime$repl$emit_warning_BANG_(request_id,message){
if(cljs.core.truth_(dirac.runtime.repl.should_silence_warning_QMARK_.call(null,message))){
return null;
} else {
return dirac.runtime.repl.warn.call(null,request_id,"warning",message);
}
});
dirac.runtime.repl.emit_error_BANG_ = (function dirac$runtime$repl$emit_error_BANG_(request_id,message){
if(cljs.core.truth_(dirac.runtime.repl.should_silence_error_QMARK_.call(null,message))){
return null;
} else {
return dirac.runtime.repl.error.call(null,request_id,"error",message);
}
});
dirac.runtime.repl.formatted_log = (function dirac$runtime$repl$formatted_log(request_id,kind,format,text){
if(cljs.core.not.call(null,(function (){var and__6736__auto__ = cljs.core._EQ_.call(null,format,"rich-text");
if(and__6736__auto__){
return dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"rich-text-enabled","rich-text-enabled",1247614521));
} else {
return and__6736__auto__;
}
})())){
return dirac.runtime.repl.log.call(null,request_id,kind,text);
} else {
var soup = dirac.runtime.output.boil_rich_text.call(null,text);
return cljs.core.apply.call(null,dirac.runtime.repl.log,request_id,kind,soup);
}
});
dirac.runtime.repl.api_version = (6);
dirac.runtime.repl.get_api_version = (function dirac$runtime$repl$get_api_version(){
return dirac.runtime.repl.api_version;
});
goog.exportSymbol('dirac.runtime.repl.get_api_version', dirac.runtime.repl.get_api_version);
dirac.runtime.repl.get_effective_config = (function dirac$runtime$repl$get_effective_config(){
return cljs.core.clj__GT_js.call(null,dirac.runtime.prefs.get_prefs.call(null));
});
goog.exportSymbol('dirac.runtime.repl.get_effective_config', dirac.runtime.repl.get_effective_config);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation result.
 */
dirac.runtime.repl.present_repl_result = (function dirac$runtime$repl$present_repl_result(request_id,value){
dirac.runtime.repl.log.call(null,request_id,"result",value);

return value;
});
goog.exportSymbol('dirac.runtime.repl.present_repl_result', dirac.runtime.repl.present_repl_result);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation exception.
 */
dirac.runtime.repl.present_repl_exception = (function dirac$runtime$repl$present_repl_exception(request_id,exception){
return dirac.runtime.repl.error.call(null,request_id,"exception",exception);
});
goog.exportSymbol('dirac.runtime.repl.present_repl_exception', dirac.runtime.repl.present_repl_exception);
dirac.runtime.repl.present_output = (function dirac$runtime$repl$present_output(request_id,kind,format,text){
var G__21362 = kind;
switch (G__21362) {
case "java-trace":
return dirac.runtime.repl.present_java_trace.call(null,request_id,text);

break;
default:
var temp__4655__auto__ = dirac.runtime.repl.detect_and_strip.call(null,"WARNING:",text);
if(cljs.core.truth_(temp__4655__auto__)){
var warning_msg = temp__4655__auto__;
return dirac.runtime.repl.emit_warning_BANG_.call(null,request_id,warning_msg);
} else {
var temp__4655__auto____$1 = dirac.runtime.repl.detect_and_strip.call(null,"ERROR:",text);
if(cljs.core.truth_(temp__4655__auto____$1)){
var error_msg = temp__4655__auto____$1;
return dirac.runtime.repl.emit_error_BANG_.call(null,request_id,error_msg);
} else {
return dirac.runtime.repl.formatted_log.call(null,request_id,kind,format,text);
}
}

}
});
goog.exportSymbol('dirac.runtime.repl.present_output', dirac.runtime.repl.present_output);
/**
 * This is a postprocessing function wrapping weasel javascript evaluation attempt.
 *   This structure is needed for building response to nREPL server (see dirac.implant.weasel in Dirac project)
 *   In our case weasel is running in the context of Dirac DevTools and could potentially have different version of cljs runtime.
 *   To be correct we have to do this post-processing in app's context to use the same cljs runtime as app evaluating the code.
 * 
 *   Also we have to be careful to not enter into infinite printing with cyclic data structures.
 *   We limit printing level and length via with-safe-printing.
 */
dirac.runtime.repl.postprocess_successful_eval = (function dirac$runtime$repl$postprocess_successful_eval(value){
var _STAR_print_level_STAR_21366 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_21367 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"safe-print-level","safe-print-level",-1010991983));

cljs.core._STAR_print_length_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"safe-print-length","safe-print-length",1870129082));

try{return ({"status": "success", "value": [cljs.core.str(value)].join('')});
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_21367;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_21366;
}});
goog.exportSymbol('dirac.runtime.repl.postprocess_successful_eval', dirac.runtime.repl.postprocess_successful_eval);
dirac.runtime.repl.postprocess_unsuccessful_eval = (function dirac$runtime$repl$postprocess_unsuccessful_eval(ex){

var _STAR_print_level_STAR_21370 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_21371 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"safe-print-level","safe-print-level",-1010991983));

cljs.core._STAR_print_length_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"safe-print-length","safe-print-length",1870129082));

try{return ({"status": "exception", "value": cljs.core.pr_str.call(null,ex), "stacktrace": (cljs.core.truth_(ex.hasOwnProperty("stack"))?ex.stack:"No stacktrace available.")});
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_21371;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_21370;
}});
goog.exportSymbol('dirac.runtime.repl.postprocess_unsuccessful_eval', dirac.runtime.repl.postprocess_unsuccessful_eval);
dirac.runtime.repl.request_eval_cljs = (function dirac$runtime$repl$request_eval_cljs(code){
if(typeof code === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Code passed for evaluation must be a string"),cljs.core.str("\n"),cljs.core.str("(string? code)")].join('')));
}

return dirac.runtime.repl.call_dirac.call(null,"eval-cljs",code);
});
goog.exportSymbol('dirac.runtime.repl.request_eval_cljs', dirac.runtime.repl.request_eval_cljs);
dirac.runtime.repl.request_eval_js = (function dirac$runtime$repl$request_eval_js(code){
if(typeof code === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Code passed for evaluation must be a string"),cljs.core.str("\n"),cljs.core.str("(string? code)")].join('')));
}

return dirac.runtime.repl.call_dirac.call(null,"eval-js",code);
});
goog.exportSymbol('dirac.runtime.repl.request_eval_js', dirac.runtime.repl.request_eval_js);
dirac.runtime.repl.bootstrapped_QMARK_ = (function dirac$runtime$repl$bootstrapped_QMARK_(){
return dirac.runtime.repl._STAR_bootstrapped_QMARK__STAR_;
});
goog.exportSymbol('dirac.runtime.repl.bootstrapped_QMARK_', dirac.runtime.repl.bootstrapped_QMARK_);
dirac.runtime.repl.installed_QMARK_ = (function dirac$runtime$repl$installed_QMARK_(){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_;
});
goog.exportSymbol('dirac.runtime.repl.installed_QMARK_', dirac.runtime.repl.installed_QMARK_);
dirac.runtime.repl.install_BANG_ = (function dirac$runtime$repl$install_BANG_(){
if(cljs.core.not.call(null,dirac.runtime.repl.installed_QMARK_.call(null))){
dirac.runtime.bootstrap.bootstrap_BANG_.call(null,(function (){
return dirac.runtime.repl._STAR_bootstrapped_QMARK__STAR_ = true;
}));

dirac.runtime.repl._STAR_installed_QMARK__STAR_ = true;

return true;
} else {
return null;
}
});
goog.exportSymbol('dirac.runtime.repl.install_BANG_', dirac.runtime.repl.install_BANG_);
dirac.runtime.repl.uninstall_BANG_ = (function dirac$runtime$repl$uninstall_BANG_(){
if(cljs.core.truth_(dirac.runtime.repl.installed_QMARK_.call(null))){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
} else {
return null;
}
});
goog.exportSymbol('dirac.runtime.repl.uninstall_BANG_', dirac.runtime.repl.uninstall_BANG_);

//# sourceMappingURL=repl.js.map