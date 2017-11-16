// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38536){if((e38536 instanceof Error)){
var e = e38536;
return "Error: Unable to stringify";
} else {
throw e38536;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38539 = arguments.length;
switch (G__38539) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38537_SHARP_){
if(typeof p1__38537_SHARP_ === 'string'){
return p1__38537_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38537_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31382__auto__ = [];
var len__31375__auto___38542 = arguments.length;
var i__31376__auto___38543 = (0);
while(true){
if((i__31376__auto___38543 < len__31375__auto___38542)){
args__31382__auto__.push((arguments[i__31376__auto___38543]));

var G__38544 = (i__31376__auto___38543 + (1));
i__31376__auto___38543 = G__38544;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38541){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38541));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31382__auto__ = [];
var len__31375__auto___38546 = arguments.length;
var i__31376__auto___38547 = (0);
while(true){
if((i__31376__auto___38547 < len__31375__auto___38546)){
args__31382__auto__.push((arguments[i__31376__auto___38547]));

var G__38548 = (i__31376__auto___38547 + (1));
i__31376__auto___38547 = G__38548;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38545){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38545));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38549){
var map__38550 = p__38549;
var map__38550__$1 = ((((!((map__38550 == null)))?((((map__38550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38550):map__38550);
var message = cljs.core.get.call(null,map__38550__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38550__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30096__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30084__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30084__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30084__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33181__auto___38629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___38629,ch){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___38629,ch){
return (function (state_38601){
var state_val_38602 = (state_38601[(1)]);
if((state_val_38602 === (7))){
var inst_38597 = (state_38601[(2)]);
var state_38601__$1 = state_38601;
var statearr_38603_38630 = state_38601__$1;
(statearr_38603_38630[(2)] = inst_38597);

(statearr_38603_38630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38602 === (1))){
var state_38601__$1 = state_38601;
var statearr_38604_38631 = state_38601__$1;
(statearr_38604_38631[(2)] = null);

(statearr_38604_38631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38602 === (4))){
var inst_38554 = (state_38601[(7)]);
var inst_38554__$1 = (state_38601[(2)]);
var state_38601__$1 = (function (){var statearr_38605 = state_38601;
(statearr_38605[(7)] = inst_38554__$1);

return statearr_38605;
})();
if(cljs.core.truth_(inst_38554__$1)){
var statearr_38606_38632 = state_38601__$1;
(statearr_38606_38632[(1)] = (5));

} else {
var statearr_38607_38633 = state_38601__$1;
(statearr_38607_38633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38602 === (15))){
var inst_38561 = (state_38601[(8)]);
var inst_38576 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38561);
var inst_38577 = cljs.core.first.call(null,inst_38576);
var inst_38578 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38577);
var inst_38579 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38578)].join('');
var inst_38580 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38579);
var state_38601__$1 = state_38601;
var statearr_38608_38634 = state_38601__$1;
(statearr_38608_38634[(2)] = inst_38580);

(statearr_38608_38634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38602 === (13))){
var inst_38585 = (state_38601[(2)]);
var state_38601__$1 = state_38601;
var statearr_38609_38635 = state_38601__$1;
(statearr_38609_38635[(2)] = inst_38585);

(statearr_38609_38635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38602 === (6))){
var state_38601__$1 = state_38601;
var statearr_38610_38636 = state_38601__$1;
(statearr_38610_38636[(2)] = null);

(statearr_38610_38636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38602 === (17))){
var inst_38583 = (state_38601[(2)]);
var state_38601__$1 = state_38601;
var statearr_38611_38637 = state_38601__$1;
(statearr_38611_38637[(2)] = inst_38583);

(statearr_38611_38637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38602 === (3))){
var inst_38599 = (state_38601[(2)]);
var state_38601__$1 = state_38601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38601__$1,inst_38599);
} else {
if((state_val_38602 === (12))){
var inst_38560 = (state_38601[(9)]);
var inst_38574 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38560,opts);
var state_38601__$1 = state_38601;
if(cljs.core.truth_(inst_38574)){
var statearr_38612_38638 = state_38601__$1;
(statearr_38612_38638[(1)] = (15));

} else {
var statearr_38613_38639 = state_38601__$1;
(statearr_38613_38639[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38602 === (2))){
var state_38601__$1 = state_38601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38601__$1,(4),ch);
} else {
if((state_val_38602 === (11))){
var inst_38561 = (state_38601[(8)]);
var inst_38566 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38567 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38561);
var inst_38568 = cljs.core.async.timeout.call(null,(1000));
var inst_38569 = [inst_38567,inst_38568];
var inst_38570 = (new cljs.core.PersistentVector(null,2,(5),inst_38566,inst_38569,null));
var state_38601__$1 = state_38601;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38601__$1,(14),inst_38570);
} else {
if((state_val_38602 === (9))){
var inst_38561 = (state_38601[(8)]);
var inst_38587 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38588 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38561);
var inst_38589 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38588);
var inst_38590 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38589)].join('');
var inst_38591 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38590);
var state_38601__$1 = (function (){var statearr_38614 = state_38601;
(statearr_38614[(10)] = inst_38587);

return statearr_38614;
})();
var statearr_38615_38640 = state_38601__$1;
(statearr_38615_38640[(2)] = inst_38591);

(statearr_38615_38640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38602 === (5))){
var inst_38554 = (state_38601[(7)]);
var inst_38556 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38557 = (new cljs.core.PersistentArrayMap(null,2,inst_38556,null));
var inst_38558 = (new cljs.core.PersistentHashSet(null,inst_38557,null));
var inst_38559 = figwheel.client.focus_msgs.call(null,inst_38558,inst_38554);
var inst_38560 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38559);
var inst_38561 = cljs.core.first.call(null,inst_38559);
var inst_38562 = figwheel.client.autoload_QMARK_.call(null);
var state_38601__$1 = (function (){var statearr_38616 = state_38601;
(statearr_38616[(8)] = inst_38561);

(statearr_38616[(9)] = inst_38560);

return statearr_38616;
})();
if(cljs.core.truth_(inst_38562)){
var statearr_38617_38641 = state_38601__$1;
(statearr_38617_38641[(1)] = (8));

} else {
var statearr_38618_38642 = state_38601__$1;
(statearr_38618_38642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38602 === (14))){
var inst_38572 = (state_38601[(2)]);
var state_38601__$1 = state_38601;
var statearr_38619_38643 = state_38601__$1;
(statearr_38619_38643[(2)] = inst_38572);

(statearr_38619_38643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38602 === (16))){
var state_38601__$1 = state_38601;
var statearr_38620_38644 = state_38601__$1;
(statearr_38620_38644[(2)] = null);

(statearr_38620_38644[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38602 === (10))){
var inst_38593 = (state_38601[(2)]);
var state_38601__$1 = (function (){var statearr_38621 = state_38601;
(statearr_38621[(11)] = inst_38593);

return statearr_38621;
})();
var statearr_38622_38645 = state_38601__$1;
(statearr_38622_38645[(2)] = null);

(statearr_38622_38645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38602 === (8))){
var inst_38560 = (state_38601[(9)]);
var inst_38564 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38560,opts);
var state_38601__$1 = state_38601;
if(cljs.core.truth_(inst_38564)){
var statearr_38623_38646 = state_38601__$1;
(statearr_38623_38646[(1)] = (11));

} else {
var statearr_38624_38647 = state_38601__$1;
(statearr_38624_38647[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33181__auto___38629,ch))
;
return ((function (switch__33091__auto__,c__33181__auto___38629,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33092__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33092__auto____0 = (function (){
var statearr_38625 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38625[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33092__auto__);

(statearr_38625[(1)] = (1));

return statearr_38625;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33092__auto____1 = (function (state_38601){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_38601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e38626){if((e38626 instanceof Object)){
var ex__33095__auto__ = e38626;
var statearr_38627_38648 = state_38601;
(statearr_38627_38648[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38649 = state_38601;
state_38601 = G__38649;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33092__auto__ = function(state_38601){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33092__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33092__auto____1.call(this,state_38601);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33092__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33092__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___38629,ch))
})();
var state__33183__auto__ = (function (){var statearr_38628 = f__33182__auto__.call(null);
(statearr_38628[(6)] = c__33181__auto___38629);

return statearr_38628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___38629,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38650_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38650_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38652 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38652){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38651){if((e38651 instanceof Error)){
var e = e38651;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38652], null));
} else {
var e = e38651;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38652))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38653){
var map__38654 = p__38653;
var map__38654__$1 = ((((!((map__38654 == null)))?((((map__38654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38654):map__38654);
var opts = map__38654__$1;
var build_id = cljs.core.get.call(null,map__38654__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38654,map__38654__$1,opts,build_id){
return (function (p__38656){
var vec__38657 = p__38656;
var seq__38658 = cljs.core.seq.call(null,vec__38657);
var first__38659 = cljs.core.first.call(null,seq__38658);
var seq__38658__$1 = cljs.core.next.call(null,seq__38658);
var map__38660 = first__38659;
var map__38660__$1 = ((((!((map__38660 == null)))?((((map__38660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38660):map__38660);
var msg = map__38660__$1;
var msg_name = cljs.core.get.call(null,map__38660__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38658__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38657,seq__38658,first__38659,seq__38658__$1,map__38660,map__38660__$1,msg,msg_name,_,map__38654,map__38654__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38657,seq__38658,first__38659,seq__38658__$1,map__38660,map__38660__$1,msg,msg_name,_,map__38654,map__38654__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38654,map__38654__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38662){
var vec__38663 = p__38662;
var seq__38664 = cljs.core.seq.call(null,vec__38663);
var first__38665 = cljs.core.first.call(null,seq__38664);
var seq__38664__$1 = cljs.core.next.call(null,seq__38664);
var map__38666 = first__38665;
var map__38666__$1 = ((((!((map__38666 == null)))?((((map__38666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38666):map__38666);
var msg = map__38666__$1;
var msg_name = cljs.core.get.call(null,map__38666__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38664__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38668){
var map__38669 = p__38668;
var map__38669__$1 = ((((!((map__38669 == null)))?((((map__38669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38669):map__38669);
var on_compile_warning = cljs.core.get.call(null,map__38669__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38669__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38669,map__38669__$1,on_compile_warning,on_compile_fail){
return (function (p__38671){
var vec__38672 = p__38671;
var seq__38673 = cljs.core.seq.call(null,vec__38672);
var first__38674 = cljs.core.first.call(null,seq__38673);
var seq__38673__$1 = cljs.core.next.call(null,seq__38673);
var map__38675 = first__38674;
var map__38675__$1 = ((((!((map__38675 == null)))?((((map__38675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38675):map__38675);
var msg = map__38675__$1;
var msg_name = cljs.core.get.call(null,map__38675__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38673__$1;
var pred__38677 = cljs.core._EQ_;
var expr__38678 = msg_name;
if(cljs.core.truth_(pred__38677.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38678))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38677.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38678))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38669,map__38669__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto__,msg_hist,msg_names,msg){
return (function (state_38767){
var state_val_38768 = (state_38767[(1)]);
if((state_val_38768 === (7))){
var inst_38687 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
if(cljs.core.truth_(inst_38687)){
var statearr_38769_38816 = state_38767__$1;
(statearr_38769_38816[(1)] = (8));

} else {
var statearr_38770_38817 = state_38767__$1;
(statearr_38770_38817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (20))){
var inst_38761 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
var statearr_38771_38818 = state_38767__$1;
(statearr_38771_38818[(2)] = inst_38761);

(statearr_38771_38818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (27))){
var inst_38757 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
var statearr_38772_38819 = state_38767__$1;
(statearr_38772_38819[(2)] = inst_38757);

(statearr_38772_38819[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (1))){
var inst_38680 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38767__$1 = state_38767;
if(cljs.core.truth_(inst_38680)){
var statearr_38773_38820 = state_38767__$1;
(statearr_38773_38820[(1)] = (2));

} else {
var statearr_38774_38821 = state_38767__$1;
(statearr_38774_38821[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (24))){
var inst_38759 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
var statearr_38775_38822 = state_38767__$1;
(statearr_38775_38822[(2)] = inst_38759);

(statearr_38775_38822[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (4))){
var inst_38765 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38767__$1,inst_38765);
} else {
if((state_val_38768 === (15))){
var inst_38763 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
var statearr_38776_38823 = state_38767__$1;
(statearr_38776_38823[(2)] = inst_38763);

(statearr_38776_38823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (21))){
var inst_38716 = (state_38767[(2)]);
var inst_38717 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38718 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38717);
var state_38767__$1 = (function (){var statearr_38777 = state_38767;
(statearr_38777[(7)] = inst_38716);

return statearr_38777;
})();
var statearr_38778_38824 = state_38767__$1;
(statearr_38778_38824[(2)] = inst_38718);

(statearr_38778_38824[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (31))){
var inst_38746 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38767__$1 = state_38767;
if(cljs.core.truth_(inst_38746)){
var statearr_38779_38825 = state_38767__$1;
(statearr_38779_38825[(1)] = (34));

} else {
var statearr_38780_38826 = state_38767__$1;
(statearr_38780_38826[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (32))){
var inst_38755 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
var statearr_38781_38827 = state_38767__$1;
(statearr_38781_38827[(2)] = inst_38755);

(statearr_38781_38827[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (33))){
var inst_38742 = (state_38767[(2)]);
var inst_38743 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38744 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38743);
var state_38767__$1 = (function (){var statearr_38782 = state_38767;
(statearr_38782[(8)] = inst_38742);

return statearr_38782;
})();
var statearr_38783_38828 = state_38767__$1;
(statearr_38783_38828[(2)] = inst_38744);

(statearr_38783_38828[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (13))){
var inst_38701 = figwheel.client.heads_up.clear.call(null);
var state_38767__$1 = state_38767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38767__$1,(16),inst_38701);
} else {
if((state_val_38768 === (22))){
var inst_38722 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38723 = figwheel.client.heads_up.append_warning_message.call(null,inst_38722);
var state_38767__$1 = state_38767;
var statearr_38784_38829 = state_38767__$1;
(statearr_38784_38829[(2)] = inst_38723);

(statearr_38784_38829[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (36))){
var inst_38753 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
var statearr_38785_38830 = state_38767__$1;
(statearr_38785_38830[(2)] = inst_38753);

(statearr_38785_38830[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (29))){
var inst_38733 = (state_38767[(2)]);
var inst_38734 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38735 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38734);
var state_38767__$1 = (function (){var statearr_38786 = state_38767;
(statearr_38786[(9)] = inst_38733);

return statearr_38786;
})();
var statearr_38787_38831 = state_38767__$1;
(statearr_38787_38831[(2)] = inst_38735);

(statearr_38787_38831[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (6))){
var inst_38682 = (state_38767[(10)]);
var state_38767__$1 = state_38767;
var statearr_38788_38832 = state_38767__$1;
(statearr_38788_38832[(2)] = inst_38682);

(statearr_38788_38832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (28))){
var inst_38729 = (state_38767[(2)]);
var inst_38730 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38731 = figwheel.client.heads_up.display_warning.call(null,inst_38730);
var state_38767__$1 = (function (){var statearr_38789 = state_38767;
(statearr_38789[(11)] = inst_38729);

return statearr_38789;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38767__$1,(29),inst_38731);
} else {
if((state_val_38768 === (25))){
var inst_38727 = figwheel.client.heads_up.clear.call(null);
var state_38767__$1 = state_38767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38767__$1,(28),inst_38727);
} else {
if((state_val_38768 === (34))){
var inst_38748 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38767__$1 = state_38767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38767__$1,(37),inst_38748);
} else {
if((state_val_38768 === (17))){
var inst_38707 = (state_38767[(2)]);
var inst_38708 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38709 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38708);
var state_38767__$1 = (function (){var statearr_38790 = state_38767;
(statearr_38790[(12)] = inst_38707);

return statearr_38790;
})();
var statearr_38791_38833 = state_38767__$1;
(statearr_38791_38833[(2)] = inst_38709);

(statearr_38791_38833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (3))){
var inst_38699 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38767__$1 = state_38767;
if(cljs.core.truth_(inst_38699)){
var statearr_38792_38834 = state_38767__$1;
(statearr_38792_38834[(1)] = (13));

} else {
var statearr_38793_38835 = state_38767__$1;
(statearr_38793_38835[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (12))){
var inst_38695 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
var statearr_38794_38836 = state_38767__$1;
(statearr_38794_38836[(2)] = inst_38695);

(statearr_38794_38836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (2))){
var inst_38682 = (state_38767[(10)]);
var inst_38682__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38767__$1 = (function (){var statearr_38795 = state_38767;
(statearr_38795[(10)] = inst_38682__$1);

return statearr_38795;
})();
if(cljs.core.truth_(inst_38682__$1)){
var statearr_38796_38837 = state_38767__$1;
(statearr_38796_38837[(1)] = (5));

} else {
var statearr_38797_38838 = state_38767__$1;
(statearr_38797_38838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (23))){
var inst_38725 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38767__$1 = state_38767;
if(cljs.core.truth_(inst_38725)){
var statearr_38798_38839 = state_38767__$1;
(statearr_38798_38839[(1)] = (25));

} else {
var statearr_38799_38840 = state_38767__$1;
(statearr_38799_38840[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (35))){
var state_38767__$1 = state_38767;
var statearr_38800_38841 = state_38767__$1;
(statearr_38800_38841[(2)] = null);

(statearr_38800_38841[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (19))){
var inst_38720 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38767__$1 = state_38767;
if(cljs.core.truth_(inst_38720)){
var statearr_38801_38842 = state_38767__$1;
(statearr_38801_38842[(1)] = (22));

} else {
var statearr_38802_38843 = state_38767__$1;
(statearr_38802_38843[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (11))){
var inst_38691 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
var statearr_38803_38844 = state_38767__$1;
(statearr_38803_38844[(2)] = inst_38691);

(statearr_38803_38844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (9))){
var inst_38693 = figwheel.client.heads_up.clear.call(null);
var state_38767__$1 = state_38767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38767__$1,(12),inst_38693);
} else {
if((state_val_38768 === (5))){
var inst_38684 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38767__$1 = state_38767;
var statearr_38804_38845 = state_38767__$1;
(statearr_38804_38845[(2)] = inst_38684);

(statearr_38804_38845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (14))){
var inst_38711 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38767__$1 = state_38767;
if(cljs.core.truth_(inst_38711)){
var statearr_38805_38846 = state_38767__$1;
(statearr_38805_38846[(1)] = (18));

} else {
var statearr_38806_38847 = state_38767__$1;
(statearr_38806_38847[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (26))){
var inst_38737 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38767__$1 = state_38767;
if(cljs.core.truth_(inst_38737)){
var statearr_38807_38848 = state_38767__$1;
(statearr_38807_38848[(1)] = (30));

} else {
var statearr_38808_38849 = state_38767__$1;
(statearr_38808_38849[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (16))){
var inst_38703 = (state_38767[(2)]);
var inst_38704 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38705 = figwheel.client.heads_up.display_exception.call(null,inst_38704);
var state_38767__$1 = (function (){var statearr_38809 = state_38767;
(statearr_38809[(13)] = inst_38703);

return statearr_38809;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38767__$1,(17),inst_38705);
} else {
if((state_val_38768 === (30))){
var inst_38739 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38740 = figwheel.client.heads_up.display_warning.call(null,inst_38739);
var state_38767__$1 = state_38767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38767__$1,(33),inst_38740);
} else {
if((state_val_38768 === (10))){
var inst_38697 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
var statearr_38810_38850 = state_38767__$1;
(statearr_38810_38850[(2)] = inst_38697);

(statearr_38810_38850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (18))){
var inst_38713 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38714 = figwheel.client.heads_up.display_exception.call(null,inst_38713);
var state_38767__$1 = state_38767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38767__$1,(21),inst_38714);
} else {
if((state_val_38768 === (37))){
var inst_38750 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
var statearr_38811_38851 = state_38767__$1;
(statearr_38811_38851[(2)] = inst_38750);

(statearr_38811_38851[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (8))){
var inst_38689 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38767__$1 = state_38767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38767__$1,(11),inst_38689);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33181__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33091__auto__,c__33181__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33092__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33092__auto____0 = (function (){
var statearr_38812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38812[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33092__auto__);

(statearr_38812[(1)] = (1));

return statearr_38812;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33092__auto____1 = (function (state_38767){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_38767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e38813){if((e38813 instanceof Object)){
var ex__33095__auto__ = e38813;
var statearr_38814_38852 = state_38767;
(statearr_38814_38852[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38853 = state_38767;
state_38767 = G__38853;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33092__auto__ = function(state_38767){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33092__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33092__auto____1.call(this,state_38767);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33092__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33092__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto__,msg_hist,msg_names,msg))
})();
var state__33183__auto__ = (function (){var statearr_38815 = f__33182__auto__.call(null);
(statearr_38815[(6)] = c__33181__auto__);

return statearr_38815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto__,msg_hist,msg_names,msg))
);

return c__33181__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33181__auto___38882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___38882,ch){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___38882,ch){
return (function (state_38868){
var state_val_38869 = (state_38868[(1)]);
if((state_val_38869 === (1))){
var state_38868__$1 = state_38868;
var statearr_38870_38883 = state_38868__$1;
(statearr_38870_38883[(2)] = null);

(statearr_38870_38883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38869 === (2))){
var state_38868__$1 = state_38868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38868__$1,(4),ch);
} else {
if((state_val_38869 === (3))){
var inst_38866 = (state_38868[(2)]);
var state_38868__$1 = state_38868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38868__$1,inst_38866);
} else {
if((state_val_38869 === (4))){
var inst_38856 = (state_38868[(7)]);
var inst_38856__$1 = (state_38868[(2)]);
var state_38868__$1 = (function (){var statearr_38871 = state_38868;
(statearr_38871[(7)] = inst_38856__$1);

return statearr_38871;
})();
if(cljs.core.truth_(inst_38856__$1)){
var statearr_38872_38884 = state_38868__$1;
(statearr_38872_38884[(1)] = (5));

} else {
var statearr_38873_38885 = state_38868__$1;
(statearr_38873_38885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38869 === (5))){
var inst_38856 = (state_38868[(7)]);
var inst_38858 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38856);
var state_38868__$1 = state_38868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38868__$1,(8),inst_38858);
} else {
if((state_val_38869 === (6))){
var state_38868__$1 = state_38868;
var statearr_38874_38886 = state_38868__$1;
(statearr_38874_38886[(2)] = null);

(statearr_38874_38886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38869 === (7))){
var inst_38864 = (state_38868[(2)]);
var state_38868__$1 = state_38868;
var statearr_38875_38887 = state_38868__$1;
(statearr_38875_38887[(2)] = inst_38864);

(statearr_38875_38887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38869 === (8))){
var inst_38860 = (state_38868[(2)]);
var state_38868__$1 = (function (){var statearr_38876 = state_38868;
(statearr_38876[(8)] = inst_38860);

return statearr_38876;
})();
var statearr_38877_38888 = state_38868__$1;
(statearr_38877_38888[(2)] = null);

(statearr_38877_38888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__33181__auto___38882,ch))
;
return ((function (switch__33091__auto__,c__33181__auto___38882,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33092__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33092__auto____0 = (function (){
var statearr_38878 = [null,null,null,null,null,null,null,null,null];
(statearr_38878[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33092__auto__);

(statearr_38878[(1)] = (1));

return statearr_38878;
});
var figwheel$client$heads_up_plugin_$_state_machine__33092__auto____1 = (function (state_38868){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_38868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e38879){if((e38879 instanceof Object)){
var ex__33095__auto__ = e38879;
var statearr_38880_38889 = state_38868;
(statearr_38880_38889[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38890 = state_38868;
state_38868 = G__38890;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33092__auto__ = function(state_38868){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33092__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33092__auto____1.call(this,state_38868);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33092__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33092__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___38882,ch))
})();
var state__33183__auto__ = (function (){var statearr_38881 = f__33182__auto__.call(null);
(statearr_38881[(6)] = c__33181__auto___38882);

return statearr_38881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___38882,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto__){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto__){
return (function (state_38896){
var state_val_38897 = (state_38896[(1)]);
if((state_val_38897 === (1))){
var inst_38891 = cljs.core.async.timeout.call(null,(3000));
var state_38896__$1 = state_38896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38896__$1,(2),inst_38891);
} else {
if((state_val_38897 === (2))){
var inst_38893 = (state_38896[(2)]);
var inst_38894 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38896__$1 = (function (){var statearr_38898 = state_38896;
(statearr_38898[(7)] = inst_38893);

return statearr_38898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38896__$1,inst_38894);
} else {
return null;
}
}
});})(c__33181__auto__))
;
return ((function (switch__33091__auto__,c__33181__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33092__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33092__auto____0 = (function (){
var statearr_38899 = [null,null,null,null,null,null,null,null];
(statearr_38899[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33092__auto__);

(statearr_38899[(1)] = (1));

return statearr_38899;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33092__auto____1 = (function (state_38896){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_38896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e38900){if((e38900 instanceof Object)){
var ex__33095__auto__ = e38900;
var statearr_38901_38903 = state_38896;
(statearr_38901_38903[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38904 = state_38896;
state_38896 = G__38904;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33092__auto__ = function(state_38896){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33092__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33092__auto____1.call(this,state_38896);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33092__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33092__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto__))
})();
var state__33183__auto__ = (function (){var statearr_38902 = f__33182__auto__.call(null);
(statearr_38902[(6)] = c__33181__auto__);

return statearr_38902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto__))
);

return c__33181__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto__,figwheel_version,temp__5457__auto__){
return (function (state_38911){
var state_val_38912 = (state_38911[(1)]);
if((state_val_38912 === (1))){
var inst_38905 = cljs.core.async.timeout.call(null,(2000));
var state_38911__$1 = state_38911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38911__$1,(2),inst_38905);
} else {
if((state_val_38912 === (2))){
var inst_38907 = (state_38911[(2)]);
var inst_38908 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38909 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38908);
var state_38911__$1 = (function (){var statearr_38913 = state_38911;
(statearr_38913[(7)] = inst_38907);

return statearr_38913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38911__$1,inst_38909);
} else {
return null;
}
}
});})(c__33181__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__33091__auto__,c__33181__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33092__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33092__auto____0 = (function (){
var statearr_38914 = [null,null,null,null,null,null,null,null];
(statearr_38914[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33092__auto__);

(statearr_38914[(1)] = (1));

return statearr_38914;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33092__auto____1 = (function (state_38911){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_38911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e38915){if((e38915 instanceof Object)){
var ex__33095__auto__ = e38915;
var statearr_38916_38918 = state_38911;
(statearr_38916_38918[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38919 = state_38911;
state_38911 = G__38919;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33092__auto__ = function(state_38911){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33092__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33092__auto____1.call(this,state_38911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33092__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33092__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto__,figwheel_version,temp__5457__auto__))
})();
var state__33183__auto__ = (function (){var statearr_38917 = f__33182__auto__.call(null);
(statearr_38917[(6)] = c__33181__auto__);

return statearr_38917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto__,figwheel_version,temp__5457__auto__))
);

return c__33181__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38920){
var map__38921 = p__38920;
var map__38921__$1 = ((((!((map__38921 == null)))?((((map__38921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38921):map__38921);
var file = cljs.core.get.call(null,map__38921__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38921__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38921__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38923 = "";
var G__38923__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38923),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38923);
var G__38923__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38923__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38923__$1);
if(cljs.core.truth_((function (){var and__30084__auto__ = line;
if(cljs.core.truth_(and__30084__auto__)){
return column;
} else {
return and__30084__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38923__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38923__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38924){
var map__38925 = p__38924;
var map__38925__$1 = ((((!((map__38925 == null)))?((((map__38925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38925):map__38925);
var ed = map__38925__$1;
var formatted_exception = cljs.core.get.call(null,map__38925__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38925__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38925__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38927_38931 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38928_38932 = null;
var count__38929_38933 = (0);
var i__38930_38934 = (0);
while(true){
if((i__38930_38934 < count__38929_38933)){
var msg_38935 = cljs.core._nth.call(null,chunk__38928_38932,i__38930_38934);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38935);

var G__38936 = seq__38927_38931;
var G__38937 = chunk__38928_38932;
var G__38938 = count__38929_38933;
var G__38939 = (i__38930_38934 + (1));
seq__38927_38931 = G__38936;
chunk__38928_38932 = G__38937;
count__38929_38933 = G__38938;
i__38930_38934 = G__38939;
continue;
} else {
var temp__5457__auto___38940 = cljs.core.seq.call(null,seq__38927_38931);
if(temp__5457__auto___38940){
var seq__38927_38941__$1 = temp__5457__auto___38940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38927_38941__$1)){
var c__31027__auto___38942 = cljs.core.chunk_first.call(null,seq__38927_38941__$1);
var G__38943 = cljs.core.chunk_rest.call(null,seq__38927_38941__$1);
var G__38944 = c__31027__auto___38942;
var G__38945 = cljs.core.count.call(null,c__31027__auto___38942);
var G__38946 = (0);
seq__38927_38931 = G__38943;
chunk__38928_38932 = G__38944;
count__38929_38933 = G__38945;
i__38930_38934 = G__38946;
continue;
} else {
var msg_38947 = cljs.core.first.call(null,seq__38927_38941__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38947);

var G__38948 = cljs.core.next.call(null,seq__38927_38941__$1);
var G__38949 = null;
var G__38950 = (0);
var G__38951 = (0);
seq__38927_38931 = G__38948;
chunk__38928_38932 = G__38949;
count__38929_38933 = G__38950;
i__38930_38934 = G__38951;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38952){
var map__38953 = p__38952;
var map__38953__$1 = ((((!((map__38953 == null)))?((((map__38953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38953):map__38953);
var w = map__38953__$1;
var message = cljs.core.get.call(null,map__38953__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30084__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30084__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30084__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38955 = cljs.core.seq.call(null,plugins);
var chunk__38956 = null;
var count__38957 = (0);
var i__38958 = (0);
while(true){
if((i__38958 < count__38957)){
var vec__38959 = cljs.core._nth.call(null,chunk__38956,i__38958);
var k = cljs.core.nth.call(null,vec__38959,(0),null);
var plugin = cljs.core.nth.call(null,vec__38959,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38965 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38955,chunk__38956,count__38957,i__38958,pl_38965,vec__38959,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38965.call(null,msg_hist);
});})(seq__38955,chunk__38956,count__38957,i__38958,pl_38965,vec__38959,k,plugin))
);
} else {
}

var G__38966 = seq__38955;
var G__38967 = chunk__38956;
var G__38968 = count__38957;
var G__38969 = (i__38958 + (1));
seq__38955 = G__38966;
chunk__38956 = G__38967;
count__38957 = G__38968;
i__38958 = G__38969;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__38955);
if(temp__5457__auto__){
var seq__38955__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38955__$1)){
var c__31027__auto__ = cljs.core.chunk_first.call(null,seq__38955__$1);
var G__38970 = cljs.core.chunk_rest.call(null,seq__38955__$1);
var G__38971 = c__31027__auto__;
var G__38972 = cljs.core.count.call(null,c__31027__auto__);
var G__38973 = (0);
seq__38955 = G__38970;
chunk__38956 = G__38971;
count__38957 = G__38972;
i__38958 = G__38973;
continue;
} else {
var vec__38962 = cljs.core.first.call(null,seq__38955__$1);
var k = cljs.core.nth.call(null,vec__38962,(0),null);
var plugin = cljs.core.nth.call(null,vec__38962,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38974 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38955,chunk__38956,count__38957,i__38958,pl_38974,vec__38962,k,plugin,seq__38955__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38974.call(null,msg_hist);
});})(seq__38955,chunk__38956,count__38957,i__38958,pl_38974,vec__38962,k,plugin,seq__38955__$1,temp__5457__auto__))
);
} else {
}

var G__38975 = cljs.core.next.call(null,seq__38955__$1);
var G__38976 = null;
var G__38977 = (0);
var G__38978 = (0);
seq__38955 = G__38975;
chunk__38956 = G__38976;
count__38957 = G__38977;
i__38958 = G__38978;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38980 = arguments.length;
switch (G__38980) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38981_38986 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38982_38987 = null;
var count__38983_38988 = (0);
var i__38984_38989 = (0);
while(true){
if((i__38984_38989 < count__38983_38988)){
var msg_38990 = cljs.core._nth.call(null,chunk__38982_38987,i__38984_38989);
figwheel.client.socket.handle_incoming_message.call(null,msg_38990);

var G__38991 = seq__38981_38986;
var G__38992 = chunk__38982_38987;
var G__38993 = count__38983_38988;
var G__38994 = (i__38984_38989 + (1));
seq__38981_38986 = G__38991;
chunk__38982_38987 = G__38992;
count__38983_38988 = G__38993;
i__38984_38989 = G__38994;
continue;
} else {
var temp__5457__auto___38995 = cljs.core.seq.call(null,seq__38981_38986);
if(temp__5457__auto___38995){
var seq__38981_38996__$1 = temp__5457__auto___38995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38981_38996__$1)){
var c__31027__auto___38997 = cljs.core.chunk_first.call(null,seq__38981_38996__$1);
var G__38998 = cljs.core.chunk_rest.call(null,seq__38981_38996__$1);
var G__38999 = c__31027__auto___38997;
var G__39000 = cljs.core.count.call(null,c__31027__auto___38997);
var G__39001 = (0);
seq__38981_38986 = G__38998;
chunk__38982_38987 = G__38999;
count__38983_38988 = G__39000;
i__38984_38989 = G__39001;
continue;
} else {
var msg_39002 = cljs.core.first.call(null,seq__38981_38996__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39002);

var G__39003 = cljs.core.next.call(null,seq__38981_38996__$1);
var G__39004 = null;
var G__39005 = (0);
var G__39006 = (0);
seq__38981_38986 = G__39003;
chunk__38982_38987 = G__39004;
count__38983_38988 = G__39005;
i__38984_38989 = G__39006;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39011 = arguments.length;
var i__31376__auto___39012 = (0);
while(true){
if((i__31376__auto___39012 < len__31375__auto___39011)){
args__31382__auto__.push((arguments[i__31376__auto___39012]));

var G__39013 = (i__31376__auto___39012 + (1));
i__31376__auto___39012 = G__39013;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39008){
var map__39009 = p__39008;
var map__39009__$1 = ((((!((map__39009 == null)))?((((map__39009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39009):map__39009);
var opts = map__39009__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39007){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39007));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39014){if((e39014 instanceof Error)){
var e = e39014;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39014;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39015){
var map__39016 = p__39015;
var map__39016__$1 = ((((!((map__39016 == null)))?((((map__39016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39016):map__39016);
var msg_name = cljs.core.get.call(null,map__39016__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510806284925
