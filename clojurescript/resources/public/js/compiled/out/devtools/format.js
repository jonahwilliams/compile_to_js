// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30829__auto__ = (((value == null))?null:value);
var m__30830__auto__ = (devtools.format._header[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,value);
} else {
var m__30830__auto____$1 = (devtools.format._header["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30829__auto__ = (((value == null))?null:value);
var m__30830__auto__ = (devtools.format._has_body[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,value);
} else {
var m__30830__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30829__auto__ = (((value == null))?null:value);
var m__30830__auto__ = (devtools.format._body[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,value);
} else {
var m__30830__auto____$1 = (devtools.format._body["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41020 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41020["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41021 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41021["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41022 = temp__5455__auto____$2;
return (o41022["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41023 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41023["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41024 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41024["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41025 = temp__5455__auto____$2;
return (o41025["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41026 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41026["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41027 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41027["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41028 = temp__5455__auto____$2;
return (o41028["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41029 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41029["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41030 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41030["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41031 = temp__5455__auto____$2;
return (o41031["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41032 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41032["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41033 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41033["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41034 = temp__5455__auto____$2;
return (o41034["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41035 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41035["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41036 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41036["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41037 = temp__5455__auto____$2;
return (o41037["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41038 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41038["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41039 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41039["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41040 = temp__5455__auto____$2;
return (o41040["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41042 = arguments.length;
var i__31376__auto___41043 = (0);
while(true){
if((i__31376__auto___41043 < len__31375__auto___41042)){
args__31382__auto__.push((arguments[i__31376__auto___41043]));

var G__41044 = (i__31376__auto___41043 + (1));
i__31376__auto___41043 = G__41044;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq41041){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41041));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41046 = arguments.length;
var i__31376__auto___41047 = (0);
while(true){
if((i__31376__auto___41047 < len__31375__auto___41046)){
args__31382__auto__.push((arguments[i__31376__auto___41047]));

var G__41048 = (i__31376__auto___41047 + (1));
i__31376__auto___41047 = G__41048;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq41045){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41045));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41050 = arguments.length;
var i__31376__auto___41051 = (0);
while(true){
if((i__31376__auto___41051 < len__31375__auto___41050)){
args__31382__auto__.push((arguments[i__31376__auto___41051]));

var G__41052 = (i__31376__auto___41051 + (1));
i__31376__auto___41051 = G__41052;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq41049){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41049));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41054 = arguments.length;
var i__31376__auto___41055 = (0);
while(true){
if((i__31376__auto___41055 < len__31375__auto___41054)){
args__31382__auto__.push((arguments[i__31376__auto___41055]));

var G__41056 = (i__31376__auto___41055 + (1));
i__31376__auto___41055 = G__41056;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq41053){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41053));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41058 = arguments.length;
var i__31376__auto___41059 = (0);
while(true){
if((i__31376__auto___41059 < len__31375__auto___41058)){
args__31382__auto__.push((arguments[i__31376__auto___41059]));

var G__41060 = (i__31376__auto___41059 + (1));
i__31376__auto___41059 = G__41060;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq41057){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41057));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41062 = arguments.length;
var i__31376__auto___41063 = (0);
while(true){
if((i__31376__auto___41063 < len__31375__auto___41062)){
args__31382__auto__.push((arguments[i__31376__auto___41063]));

var G__41064 = (i__31376__auto___41063 + (1));
i__31376__auto___41063 = G__41064;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq41061){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41061));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41066 = arguments.length;
var i__31376__auto___41067 = (0);
while(true){
if((i__31376__auto___41067 < len__31375__auto___41066)){
args__31382__auto__.push((arguments[i__31376__auto___41067]));

var G__41068 = (i__31376__auto___41067 + (1));
i__31376__auto___41067 = G__41068;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq41065){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41065));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41076 = arguments.length;
var i__31376__auto___41077 = (0);
while(true){
if((i__31376__auto___41077 < len__31375__auto___41076)){
args__31382__auto__.push((arguments[i__31376__auto___41077]));

var G__41078 = (i__31376__auto___41077 + (1));
i__31376__auto___41077 = G__41078;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41072){
var vec__41073 = p__41072;
var state_override = cljs.core.nth.call(null,vec__41073,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__41073,state_override){
return (function (p1__41069_SHARP_){
return cljs.core.merge.call(null,p1__41069_SHARP_,state_override);
});})(vec__41073,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq41070){
var G__41071 = cljs.core.first.call(null,seq41070);
var seq41070__$1 = cljs.core.next.call(null,seq41070);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__41071,seq41070__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41080 = arguments.length;
var i__31376__auto___41081 = (0);
while(true){
if((i__31376__auto___41081 < len__31375__auto___41080)){
args__31382__auto__.push((arguments[i__31376__auto___41081]));

var G__41082 = (i__31376__auto___41081 + (1));
i__31376__auto___41081 = G__41082;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq41079){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41079));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41085 = arguments.length;
var i__31376__auto___41086 = (0);
while(true){
if((i__31376__auto___41086 < len__31375__auto___41085)){
args__31382__auto__.push((arguments[i__31376__auto___41086]));

var G__41087 = (i__31376__auto___41086 + (1));
i__31376__auto___41086 = G__41087;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq41083){
var G__41084 = cljs.core.first.call(null,seq41083);
var seq41083__$1 = cljs.core.next.call(null,seq41083);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__41084,seq41083__$1);
});


//# sourceMappingURL=format.js.map?rel=1510806288102
