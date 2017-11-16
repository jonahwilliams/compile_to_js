// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x41295_41296 = value;
x41295_41296.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x41298_41299 = value;
x41298_41299.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x41301_41302 = value;
x41301_41302.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__30084__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__30084__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__30084__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41309 = arguments.length;
var i__31376__auto___41310 = (0);
while(true){
if((i__31376__auto___41310 < len__31375__auto___41309)){
args__31382__auto__.push((arguments[i__31376__auto___41310]));

var G__41311 = (i__31376__auto___41310 + (1));
i__31376__auto___41310 = G__41311;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__41305_41312 = cljs.core.seq.call(null,items);
var chunk__41306_41313 = null;
var count__41307_41314 = (0);
var i__41308_41315 = (0);
while(true){
if((i__41308_41315 < count__41307_41314)){
var item_41316 = cljs.core._nth.call(null,chunk__41306_41313,i__41308_41315);
if(!((item_41316 == null))){
if(cljs.core.coll_QMARK_.call(null,item_41316)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41316)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41316));
}
} else {
}

var G__41317 = seq__41305_41312;
var G__41318 = chunk__41306_41313;
var G__41319 = count__41307_41314;
var G__41320 = (i__41308_41315 + (1));
seq__41305_41312 = G__41317;
chunk__41306_41313 = G__41318;
count__41307_41314 = G__41319;
i__41308_41315 = G__41320;
continue;
} else {
var temp__5457__auto___41321 = cljs.core.seq.call(null,seq__41305_41312);
if(temp__5457__auto___41321){
var seq__41305_41322__$1 = temp__5457__auto___41321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41305_41322__$1)){
var c__31027__auto___41323 = cljs.core.chunk_first.call(null,seq__41305_41322__$1);
var G__41324 = cljs.core.chunk_rest.call(null,seq__41305_41322__$1);
var G__41325 = c__31027__auto___41323;
var G__41326 = cljs.core.count.call(null,c__31027__auto___41323);
var G__41327 = (0);
seq__41305_41312 = G__41324;
chunk__41306_41313 = G__41325;
count__41307_41314 = G__41326;
i__41308_41315 = G__41327;
continue;
} else {
var item_41328 = cljs.core.first.call(null,seq__41305_41322__$1);
if(!((item_41328 == null))){
if(cljs.core.coll_QMARK_.call(null,item_41328)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41328)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41328));
}
} else {
}

var G__41329 = cljs.core.next.call(null,seq__41305_41322__$1);
var G__41330 = null;
var G__41331 = (0);
var G__41332 = (0);
seq__41305_41312 = G__41329;
chunk__41306_41313 = G__41330;
count__41307_41314 = G__41331;
i__41308_41315 = G__41332;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq41304){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41304));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41340 = arguments.length;
var i__31376__auto___41341 = (0);
while(true){
if((i__31376__auto___41341 < len__31375__auto___41340)){
args__31382__auto__.push((arguments[i__31376__auto___41341]));

var G__41342 = (i__31376__auto___41341 + (1));
i__31376__auto___41341 = G__41342;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((2) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31383__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__41336_41343 = cljs.core.seq.call(null,children);
var chunk__41337_41344 = null;
var count__41338_41345 = (0);
var i__41339_41346 = (0);
while(true){
if((i__41339_41346 < count__41338_41345)){
var child_41347 = cljs.core._nth.call(null,chunk__41337_41344,i__41339_41346);
if(!((child_41347 == null))){
if(cljs.core.coll_QMARK_.call(null,child_41347)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41347))));
} else {
var temp__5455__auto___41348 = devtools.formatters.helpers.pref.call(null,child_41347);
if(cljs.core.truth_(temp__5455__auto___41348)){
var child_value_41349 = temp__5455__auto___41348;
template.push(child_value_41349);
} else {
}
}
} else {
}

var G__41350 = seq__41336_41343;
var G__41351 = chunk__41337_41344;
var G__41352 = count__41338_41345;
var G__41353 = (i__41339_41346 + (1));
seq__41336_41343 = G__41350;
chunk__41337_41344 = G__41351;
count__41338_41345 = G__41352;
i__41339_41346 = G__41353;
continue;
} else {
var temp__5457__auto___41354 = cljs.core.seq.call(null,seq__41336_41343);
if(temp__5457__auto___41354){
var seq__41336_41355__$1 = temp__5457__auto___41354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41336_41355__$1)){
var c__31027__auto___41356 = cljs.core.chunk_first.call(null,seq__41336_41355__$1);
var G__41357 = cljs.core.chunk_rest.call(null,seq__41336_41355__$1);
var G__41358 = c__31027__auto___41356;
var G__41359 = cljs.core.count.call(null,c__31027__auto___41356);
var G__41360 = (0);
seq__41336_41343 = G__41357;
chunk__41337_41344 = G__41358;
count__41338_41345 = G__41359;
i__41339_41346 = G__41360;
continue;
} else {
var child_41361 = cljs.core.first.call(null,seq__41336_41355__$1);
if(!((child_41361 == null))){
if(cljs.core.coll_QMARK_.call(null,child_41361)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41361))));
} else {
var temp__5455__auto___41362 = devtools.formatters.helpers.pref.call(null,child_41361);
if(cljs.core.truth_(temp__5455__auto___41362)){
var child_value_41363 = temp__5455__auto___41362;
template.push(child_value_41363);
} else {
}
}
} else {
}

var G__41364 = cljs.core.next.call(null,seq__41336_41355__$1);
var G__41365 = null;
var G__41366 = (0);
var G__41367 = (0);
seq__41336_41343 = G__41364;
chunk__41337_41344 = G__41365;
count__41338_41345 = G__41366;
i__41339_41346 = G__41367;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq41333){
var G__41334 = cljs.core.first.call(null,seq41333);
var seq41333__$1 = cljs.core.next.call(null,seq41333);
var G__41335 = cljs.core.first.call(null,seq41333__$1);
var seq41333__$2 = cljs.core.next.call(null,seq41333__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__41334,G__41335,seq41333__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41370 = arguments.length;
var i__31376__auto___41371 = (0);
while(true){
if((i__31376__auto___41371 < len__31375__auto___41370)){
args__31382__auto__.push((arguments[i__31376__auto___41371]));

var G__41372 = (i__31376__auto___41371 + (1));
i__31376__auto___41371 = G__41372;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq41368){
var G__41369 = cljs.core.first.call(null,seq41368);
var seq41368__$1 = cljs.core.next.call(null,seq41368);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41369,seq41368__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41375 = arguments.length;
var i__31376__auto___41376 = (0);
while(true){
if((i__31376__auto___41376 < len__31375__auto___41375)){
args__31382__auto__.push((arguments[i__31376__auto___41376]));

var G__41377 = (i__31376__auto___41376 + (1));
i__31376__auto___41376 = G__41377;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq41373){
var G__41374 = cljs.core.first.call(null,seq41373);
var seq41373__$1 = cljs.core.next.call(null,seq41373);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41374,seq41373__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__41379 = arguments.length;
switch (G__41379) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj41381 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__30096__auto__ = start_index;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return (0);
}
})()};
return obj41381;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41389 = arguments.length;
var i__31376__auto___41390 = (0);
while(true){
if((i__31376__auto___41390 < len__31375__auto___41389)){
args__31382__auto__.push((arguments[i__31376__auto___41390]));

var G__41391 = (i__31376__auto___41390 + (1));
i__31376__auto___41390 = G__41391;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41385){
var vec__41386 = p__41385;
var state_override_fn = cljs.core.nth.call(null,vec__41386,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq41383){
var G__41384 = cljs.core.first.call(null,seq41383);
var seq41383__$1 = cljs.core.next.call(null,seq41383);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__41384,seq41383__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_41392 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_41392;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__41393 = name;
switch (G__41393) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__41395 = tag;
var html_tag = cljs.core.nth.call(null,vec__41395,(0),null);
var style = cljs.core.nth.call(null,vec__41395,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_41398 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41398;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_41399 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_41400 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41400;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_41399;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__41401 = initial_value;
var G__41402 = value.call(null);
initial_value = G__41401;
value = G__41402;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__41403 = initial_value;
var G__41404 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__41403;
value = G__41404;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__41405 = initial_value;
var G__41406 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__41405;
value = G__41406;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1510806288761
