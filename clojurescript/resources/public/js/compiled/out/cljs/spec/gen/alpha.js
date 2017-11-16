// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37645 = arguments.length;
var i__31376__auto___37646 = (0);
while(true){
if((i__31376__auto___37646 < len__31375__auto___37645)){
args__31382__auto__.push((arguments[i__31376__auto___37646]));

var G__37647 = (i__31376__auto___37646 + (1));
i__31376__auto___37646 = G__37647;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq37644){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37644));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37649 = arguments.length;
var i__31376__auto___37650 = (0);
while(true){
if((i__31376__auto___37650 < len__31375__auto___37649)){
args__31382__auto__.push((arguments[i__31376__auto___37650]));

var G__37651 = (i__31376__auto___37650 + (1));
i__31376__auto___37650 = G__37651;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq37648){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37648));
});

var g_QMARK__37652 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_37653 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37652){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__37652))
,null));
var mkg_37654 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37652,g_37653){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__37652,g_37653))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__37652,g_37653,mkg_37654){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__37652).call(null,x);
});})(g_QMARK__37652,g_37653,mkg_37654))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__37652,g_37653,mkg_37654){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_37654).call(null,gfn);
});})(g_QMARK__37652,g_37653,mkg_37654))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__37652,g_37653,mkg_37654){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_37653).call(null,generator);
});})(g_QMARK__37652,g_37653,mkg_37654))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31478__auto___37674 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__31478__auto___37674){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37675 = arguments.length;
var i__31376__auto___37676 = (0);
while(true){
if((i__31376__auto___37676 < len__31375__auto___37675)){
args__31382__auto__.push((arguments[i__31376__auto___37676]));

var G__37677 = (i__31376__auto___37676 + (1));
i__31376__auto___37676 = G__37677;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37674))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37674){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37674),args);
});})(g__31478__auto___37674))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__31478__auto___37674){
return (function (seq37655){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37655));
});})(g__31478__auto___37674))
;


var g__31478__auto___37678 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__31478__auto___37678){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37679 = arguments.length;
var i__31376__auto___37680 = (0);
while(true){
if((i__31376__auto___37680 < len__31375__auto___37679)){
args__31382__auto__.push((arguments[i__31376__auto___37680]));

var G__37681 = (i__31376__auto___37680 + (1));
i__31376__auto___37680 = G__37681;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37678))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37678){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37678),args);
});})(g__31478__auto___37678))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__31478__auto___37678){
return (function (seq37656){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37656));
});})(g__31478__auto___37678))
;


var g__31478__auto___37682 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__31478__auto___37682){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37683 = arguments.length;
var i__31376__auto___37684 = (0);
while(true){
if((i__31376__auto___37684 < len__31375__auto___37683)){
args__31382__auto__.push((arguments[i__31376__auto___37684]));

var G__37685 = (i__31376__auto___37684 + (1));
i__31376__auto___37684 = G__37685;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37682))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37682){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37682),args);
});})(g__31478__auto___37682))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__31478__auto___37682){
return (function (seq37657){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37657));
});})(g__31478__auto___37682))
;


var g__31478__auto___37686 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__31478__auto___37686){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37687 = arguments.length;
var i__31376__auto___37688 = (0);
while(true){
if((i__31376__auto___37688 < len__31375__auto___37687)){
args__31382__auto__.push((arguments[i__31376__auto___37688]));

var G__37689 = (i__31376__auto___37688 + (1));
i__31376__auto___37688 = G__37689;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37686))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37686){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37686),args);
});})(g__31478__auto___37686))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__31478__auto___37686){
return (function (seq37658){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37658));
});})(g__31478__auto___37686))
;


var g__31478__auto___37690 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__31478__auto___37690){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37691 = arguments.length;
var i__31376__auto___37692 = (0);
while(true){
if((i__31376__auto___37692 < len__31375__auto___37691)){
args__31382__auto__.push((arguments[i__31376__auto___37692]));

var G__37693 = (i__31376__auto___37692 + (1));
i__31376__auto___37692 = G__37693;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37690))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37690){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37690),args);
});})(g__31478__auto___37690))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__31478__auto___37690){
return (function (seq37659){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37659));
});})(g__31478__auto___37690))
;


var g__31478__auto___37694 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__31478__auto___37694){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37695 = arguments.length;
var i__31376__auto___37696 = (0);
while(true){
if((i__31376__auto___37696 < len__31375__auto___37695)){
args__31382__auto__.push((arguments[i__31376__auto___37696]));

var G__37697 = (i__31376__auto___37696 + (1));
i__31376__auto___37696 = G__37697;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37694))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37694){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37694),args);
});})(g__31478__auto___37694))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__31478__auto___37694){
return (function (seq37660){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37660));
});})(g__31478__auto___37694))
;


var g__31478__auto___37698 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__31478__auto___37698){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37699 = arguments.length;
var i__31376__auto___37700 = (0);
while(true){
if((i__31376__auto___37700 < len__31375__auto___37699)){
args__31382__auto__.push((arguments[i__31376__auto___37700]));

var G__37701 = (i__31376__auto___37700 + (1));
i__31376__auto___37700 = G__37701;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37698))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37698){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37698),args);
});})(g__31478__auto___37698))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__31478__auto___37698){
return (function (seq37661){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37661));
});})(g__31478__auto___37698))
;


var g__31478__auto___37702 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__31478__auto___37702){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37703 = arguments.length;
var i__31376__auto___37704 = (0);
while(true){
if((i__31376__auto___37704 < len__31375__auto___37703)){
args__31382__auto__.push((arguments[i__31376__auto___37704]));

var G__37705 = (i__31376__auto___37704 + (1));
i__31376__auto___37704 = G__37705;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37702))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37702){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37702),args);
});})(g__31478__auto___37702))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__31478__auto___37702){
return (function (seq37662){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37662));
});})(g__31478__auto___37702))
;


var g__31478__auto___37706 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__31478__auto___37706){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37707 = arguments.length;
var i__31376__auto___37708 = (0);
while(true){
if((i__31376__auto___37708 < len__31375__auto___37707)){
args__31382__auto__.push((arguments[i__31376__auto___37708]));

var G__37709 = (i__31376__auto___37708 + (1));
i__31376__auto___37708 = G__37709;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37706))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37706){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37706),args);
});})(g__31478__auto___37706))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__31478__auto___37706){
return (function (seq37663){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37663));
});})(g__31478__auto___37706))
;


var g__31478__auto___37710 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__31478__auto___37710){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37711 = arguments.length;
var i__31376__auto___37712 = (0);
while(true){
if((i__31376__auto___37712 < len__31375__auto___37711)){
args__31382__auto__.push((arguments[i__31376__auto___37712]));

var G__37713 = (i__31376__auto___37712 + (1));
i__31376__auto___37712 = G__37713;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37710))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37710){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37710),args);
});})(g__31478__auto___37710))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__31478__auto___37710){
return (function (seq37664){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37664));
});})(g__31478__auto___37710))
;


var g__31478__auto___37714 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__31478__auto___37714){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37715 = arguments.length;
var i__31376__auto___37716 = (0);
while(true){
if((i__31376__auto___37716 < len__31375__auto___37715)){
args__31382__auto__.push((arguments[i__31376__auto___37716]));

var G__37717 = (i__31376__auto___37716 + (1));
i__31376__auto___37716 = G__37717;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37714))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37714){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37714),args);
});})(g__31478__auto___37714))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__31478__auto___37714){
return (function (seq37665){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37665));
});})(g__31478__auto___37714))
;


var g__31478__auto___37718 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__31478__auto___37718){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37719 = arguments.length;
var i__31376__auto___37720 = (0);
while(true){
if((i__31376__auto___37720 < len__31375__auto___37719)){
args__31382__auto__.push((arguments[i__31376__auto___37720]));

var G__37721 = (i__31376__auto___37720 + (1));
i__31376__auto___37720 = G__37721;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37718))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37718){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37718),args);
});})(g__31478__auto___37718))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__31478__auto___37718){
return (function (seq37666){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37666));
});})(g__31478__auto___37718))
;


var g__31478__auto___37722 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__31478__auto___37722){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37723 = arguments.length;
var i__31376__auto___37724 = (0);
while(true){
if((i__31376__auto___37724 < len__31375__auto___37723)){
args__31382__auto__.push((arguments[i__31376__auto___37724]));

var G__37725 = (i__31376__auto___37724 + (1));
i__31376__auto___37724 = G__37725;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37722))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37722){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37722),args);
});})(g__31478__auto___37722))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__31478__auto___37722){
return (function (seq37667){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37667));
});})(g__31478__auto___37722))
;


var g__31478__auto___37726 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__31478__auto___37726){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37727 = arguments.length;
var i__31376__auto___37728 = (0);
while(true){
if((i__31376__auto___37728 < len__31375__auto___37727)){
args__31382__auto__.push((arguments[i__31376__auto___37728]));

var G__37729 = (i__31376__auto___37728 + (1));
i__31376__auto___37728 = G__37729;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37726))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37726){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37726),args);
});})(g__31478__auto___37726))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__31478__auto___37726){
return (function (seq37668){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37668));
});})(g__31478__auto___37726))
;


var g__31478__auto___37730 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__31478__auto___37730){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37731 = arguments.length;
var i__31376__auto___37732 = (0);
while(true){
if((i__31376__auto___37732 < len__31375__auto___37731)){
args__31382__auto__.push((arguments[i__31376__auto___37732]));

var G__37733 = (i__31376__auto___37732 + (1));
i__31376__auto___37732 = G__37733;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37730))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37730){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37730),args);
});})(g__31478__auto___37730))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__31478__auto___37730){
return (function (seq37669){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37669));
});})(g__31478__auto___37730))
;


var g__31478__auto___37734 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__31478__auto___37734){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37735 = arguments.length;
var i__31376__auto___37736 = (0);
while(true){
if((i__31376__auto___37736 < len__31375__auto___37735)){
args__31382__auto__.push((arguments[i__31376__auto___37736]));

var G__37737 = (i__31376__auto___37736 + (1));
i__31376__auto___37736 = G__37737;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37734))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37734){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37734),args);
});})(g__31478__auto___37734))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__31478__auto___37734){
return (function (seq37670){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37670));
});})(g__31478__auto___37734))
;


var g__31478__auto___37738 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__31478__auto___37738){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37739 = arguments.length;
var i__31376__auto___37740 = (0);
while(true){
if((i__31376__auto___37740 < len__31375__auto___37739)){
args__31382__auto__.push((arguments[i__31376__auto___37740]));

var G__37741 = (i__31376__auto___37740 + (1));
i__31376__auto___37740 = G__37741;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37738))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37738){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37738),args);
});})(g__31478__auto___37738))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31478__auto___37738){
return (function (seq37671){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37671));
});})(g__31478__auto___37738))
;


var g__31478__auto___37742 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__31478__auto___37742){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37743 = arguments.length;
var i__31376__auto___37744 = (0);
while(true){
if((i__31376__auto___37744 < len__31375__auto___37743)){
args__31382__auto__.push((arguments[i__31376__auto___37744]));

var G__37745 = (i__31376__auto___37744 + (1));
i__31376__auto___37744 = G__37745;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37742))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37742){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37742),args);
});})(g__31478__auto___37742))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__31478__auto___37742){
return (function (seq37672){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37672));
});})(g__31478__auto___37742))
;


var g__31478__auto___37746 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__31478__auto___37746){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37747 = arguments.length;
var i__31376__auto___37748 = (0);
while(true){
if((i__31376__auto___37748 < len__31375__auto___37747)){
args__31382__auto__.push((arguments[i__31376__auto___37748]));

var G__37749 = (i__31376__auto___37748 + (1));
i__31376__auto___37748 = G__37749;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31478__auto___37746))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___37746){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31478__auto___37746),args);
});})(g__31478__auto___37746))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__31478__auto___37746){
return (function (seq37673){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37673));
});})(g__31478__auto___37746))
;

var g__31491__auto___37771 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__31491__auto___37771){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37772 = arguments.length;
var i__31376__auto___37773 = (0);
while(true){
if((i__31376__auto___37773 < len__31375__auto___37772)){
args__31382__auto__.push((arguments[i__31376__auto___37773]));

var G__37774 = (i__31376__auto___37773 + (1));
i__31376__auto___37773 = G__37774;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37771))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37771){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37771);
});})(g__31491__auto___37771))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__31491__auto___37771){
return (function (seq37750){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37750));
});})(g__31491__auto___37771))
;


var g__31491__auto___37775 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__31491__auto___37775){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37776 = arguments.length;
var i__31376__auto___37777 = (0);
while(true){
if((i__31376__auto___37777 < len__31375__auto___37776)){
args__31382__auto__.push((arguments[i__31376__auto___37777]));

var G__37778 = (i__31376__auto___37777 + (1));
i__31376__auto___37777 = G__37778;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37775))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37775){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37775);
});})(g__31491__auto___37775))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__31491__auto___37775){
return (function (seq37751){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37751));
});})(g__31491__auto___37775))
;


var g__31491__auto___37779 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__31491__auto___37779){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37780 = arguments.length;
var i__31376__auto___37781 = (0);
while(true){
if((i__31376__auto___37781 < len__31375__auto___37780)){
args__31382__auto__.push((arguments[i__31376__auto___37781]));

var G__37782 = (i__31376__auto___37781 + (1));
i__31376__auto___37781 = G__37782;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37779))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37779){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37779);
});})(g__31491__auto___37779))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__31491__auto___37779){
return (function (seq37752){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37752));
});})(g__31491__auto___37779))
;


var g__31491__auto___37783 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__31491__auto___37783){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37784 = arguments.length;
var i__31376__auto___37785 = (0);
while(true){
if((i__31376__auto___37785 < len__31375__auto___37784)){
args__31382__auto__.push((arguments[i__31376__auto___37785]));

var G__37786 = (i__31376__auto___37785 + (1));
i__31376__auto___37785 = G__37786;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37783))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37783){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37783);
});})(g__31491__auto___37783))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__31491__auto___37783){
return (function (seq37753){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37753));
});})(g__31491__auto___37783))
;


var g__31491__auto___37787 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__31491__auto___37787){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37788 = arguments.length;
var i__31376__auto___37789 = (0);
while(true){
if((i__31376__auto___37789 < len__31375__auto___37788)){
args__31382__auto__.push((arguments[i__31376__auto___37789]));

var G__37790 = (i__31376__auto___37789 + (1));
i__31376__auto___37789 = G__37790;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37787))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37787){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37787);
});})(g__31491__auto___37787))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__31491__auto___37787){
return (function (seq37754){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37754));
});})(g__31491__auto___37787))
;


var g__31491__auto___37791 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__31491__auto___37791){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37792 = arguments.length;
var i__31376__auto___37793 = (0);
while(true){
if((i__31376__auto___37793 < len__31375__auto___37792)){
args__31382__auto__.push((arguments[i__31376__auto___37793]));

var G__37794 = (i__31376__auto___37793 + (1));
i__31376__auto___37793 = G__37794;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37791))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37791){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37791);
});})(g__31491__auto___37791))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__31491__auto___37791){
return (function (seq37755){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37755));
});})(g__31491__auto___37791))
;


var g__31491__auto___37795 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__31491__auto___37795){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37796 = arguments.length;
var i__31376__auto___37797 = (0);
while(true){
if((i__31376__auto___37797 < len__31375__auto___37796)){
args__31382__auto__.push((arguments[i__31376__auto___37797]));

var G__37798 = (i__31376__auto___37797 + (1));
i__31376__auto___37797 = G__37798;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37795))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37795){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37795);
});})(g__31491__auto___37795))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__31491__auto___37795){
return (function (seq37756){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37756));
});})(g__31491__auto___37795))
;


var g__31491__auto___37799 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__31491__auto___37799){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37800 = arguments.length;
var i__31376__auto___37801 = (0);
while(true){
if((i__31376__auto___37801 < len__31375__auto___37800)){
args__31382__auto__.push((arguments[i__31376__auto___37801]));

var G__37802 = (i__31376__auto___37801 + (1));
i__31376__auto___37801 = G__37802;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37799))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37799){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37799);
});})(g__31491__auto___37799))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__31491__auto___37799){
return (function (seq37757){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37757));
});})(g__31491__auto___37799))
;


var g__31491__auto___37803 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__31491__auto___37803){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37804 = arguments.length;
var i__31376__auto___37805 = (0);
while(true){
if((i__31376__auto___37805 < len__31375__auto___37804)){
args__31382__auto__.push((arguments[i__31376__auto___37805]));

var G__37806 = (i__31376__auto___37805 + (1));
i__31376__auto___37805 = G__37806;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37803))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37803){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37803);
});})(g__31491__auto___37803))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__31491__auto___37803){
return (function (seq37758){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37758));
});})(g__31491__auto___37803))
;


var g__31491__auto___37807 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__31491__auto___37807){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37808 = arguments.length;
var i__31376__auto___37809 = (0);
while(true){
if((i__31376__auto___37809 < len__31375__auto___37808)){
args__31382__auto__.push((arguments[i__31376__auto___37809]));

var G__37810 = (i__31376__auto___37809 + (1));
i__31376__auto___37809 = G__37810;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37807))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37807){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37807);
});})(g__31491__auto___37807))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__31491__auto___37807){
return (function (seq37759){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37759));
});})(g__31491__auto___37807))
;


var g__31491__auto___37811 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__31491__auto___37811){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37812 = arguments.length;
var i__31376__auto___37813 = (0);
while(true){
if((i__31376__auto___37813 < len__31375__auto___37812)){
args__31382__auto__.push((arguments[i__31376__auto___37813]));

var G__37814 = (i__31376__auto___37813 + (1));
i__31376__auto___37813 = G__37814;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37811))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37811){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37811);
});})(g__31491__auto___37811))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__31491__auto___37811){
return (function (seq37760){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37760));
});})(g__31491__auto___37811))
;


var g__31491__auto___37815 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__31491__auto___37815){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37816 = arguments.length;
var i__31376__auto___37817 = (0);
while(true){
if((i__31376__auto___37817 < len__31375__auto___37816)){
args__31382__auto__.push((arguments[i__31376__auto___37817]));

var G__37818 = (i__31376__auto___37817 + (1));
i__31376__auto___37817 = G__37818;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37815))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37815){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37815);
});})(g__31491__auto___37815))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__31491__auto___37815){
return (function (seq37761){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37761));
});})(g__31491__auto___37815))
;


var g__31491__auto___37819 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__31491__auto___37819){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37820 = arguments.length;
var i__31376__auto___37821 = (0);
while(true){
if((i__31376__auto___37821 < len__31375__auto___37820)){
args__31382__auto__.push((arguments[i__31376__auto___37821]));

var G__37822 = (i__31376__auto___37821 + (1));
i__31376__auto___37821 = G__37822;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37819))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37819){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37819);
});})(g__31491__auto___37819))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__31491__auto___37819){
return (function (seq37762){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37762));
});})(g__31491__auto___37819))
;


var g__31491__auto___37823 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__31491__auto___37823){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37824 = arguments.length;
var i__31376__auto___37825 = (0);
while(true){
if((i__31376__auto___37825 < len__31375__auto___37824)){
args__31382__auto__.push((arguments[i__31376__auto___37825]));

var G__37826 = (i__31376__auto___37825 + (1));
i__31376__auto___37825 = G__37826;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37823))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37823){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37823);
});})(g__31491__auto___37823))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__31491__auto___37823){
return (function (seq37763){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37763));
});})(g__31491__auto___37823))
;


var g__31491__auto___37827 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__31491__auto___37827){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37828 = arguments.length;
var i__31376__auto___37829 = (0);
while(true){
if((i__31376__auto___37829 < len__31375__auto___37828)){
args__31382__auto__.push((arguments[i__31376__auto___37829]));

var G__37830 = (i__31376__auto___37829 + (1));
i__31376__auto___37829 = G__37830;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37827))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37827){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37827);
});})(g__31491__auto___37827))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__31491__auto___37827){
return (function (seq37764){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37764));
});})(g__31491__auto___37827))
;


var g__31491__auto___37831 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__31491__auto___37831){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37832 = arguments.length;
var i__31376__auto___37833 = (0);
while(true){
if((i__31376__auto___37833 < len__31375__auto___37832)){
args__31382__auto__.push((arguments[i__31376__auto___37833]));

var G__37834 = (i__31376__auto___37833 + (1));
i__31376__auto___37833 = G__37834;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37831))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37831){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37831);
});})(g__31491__auto___37831))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__31491__auto___37831){
return (function (seq37765){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37765));
});})(g__31491__auto___37831))
;


var g__31491__auto___37835 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__31491__auto___37835){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37836 = arguments.length;
var i__31376__auto___37837 = (0);
while(true){
if((i__31376__auto___37837 < len__31375__auto___37836)){
args__31382__auto__.push((arguments[i__31376__auto___37837]));

var G__37838 = (i__31376__auto___37837 + (1));
i__31376__auto___37837 = G__37838;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37835))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37835){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37835);
});})(g__31491__auto___37835))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__31491__auto___37835){
return (function (seq37766){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37766));
});})(g__31491__auto___37835))
;


var g__31491__auto___37839 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__31491__auto___37839){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37840 = arguments.length;
var i__31376__auto___37841 = (0);
while(true){
if((i__31376__auto___37841 < len__31375__auto___37840)){
args__31382__auto__.push((arguments[i__31376__auto___37841]));

var G__37842 = (i__31376__auto___37841 + (1));
i__31376__auto___37841 = G__37842;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37839))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37839){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37839);
});})(g__31491__auto___37839))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__31491__auto___37839){
return (function (seq37767){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37767));
});})(g__31491__auto___37839))
;


var g__31491__auto___37843 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__31491__auto___37843){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37844 = arguments.length;
var i__31376__auto___37845 = (0);
while(true){
if((i__31376__auto___37845 < len__31375__auto___37844)){
args__31382__auto__.push((arguments[i__31376__auto___37845]));

var G__37846 = (i__31376__auto___37845 + (1));
i__31376__auto___37845 = G__37846;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37843))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37843){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37843);
});})(g__31491__auto___37843))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__31491__auto___37843){
return (function (seq37768){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37768));
});})(g__31491__auto___37843))
;


var g__31491__auto___37847 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__31491__auto___37847){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37848 = arguments.length;
var i__31376__auto___37849 = (0);
while(true){
if((i__31376__auto___37849 < len__31375__auto___37848)){
args__31382__auto__.push((arguments[i__31376__auto___37849]));

var G__37850 = (i__31376__auto___37849 + (1));
i__31376__auto___37849 = G__37850;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37847))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37847){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37847);
});})(g__31491__auto___37847))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__31491__auto___37847){
return (function (seq37769){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37769));
});})(g__31491__auto___37847))
;


var g__31491__auto___37851 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__31491__auto___37851){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37852 = arguments.length;
var i__31376__auto___37853 = (0);
while(true){
if((i__31376__auto___37853 < len__31375__auto___37852)){
args__31382__auto__.push((arguments[i__31376__auto___37853]));

var G__37854 = (i__31376__auto___37853 + (1));
i__31376__auto___37853 = G__37854;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});})(g__31491__auto___37851))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31491__auto___37851){
return (function (args){
return cljs.core.deref.call(null,g__31491__auto___37851);
});})(g__31491__auto___37851))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__31491__auto___37851){
return (function (seq37770){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37770));
});})(g__31491__auto___37851))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31382__auto__ = [];
var len__31375__auto___37857 = arguments.length;
var i__31376__auto___37858 = (0);
while(true){
if((i__31376__auto___37858 < len__31375__auto___37857)){
args__31382__auto__.push((arguments[i__31376__auto___37858]));

var G__37859 = (i__31376__auto___37858 + (1));
i__31376__auto___37858 = G__37859;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__37855_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__37855_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq37856){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37856));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__37860_SHARP_){
return (new Date(p1__37860_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1510806283186
