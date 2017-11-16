// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33241 = arguments.length;
switch (G__33241) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33242 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33242 = (function (f,blockable,meta33243){
this.f = f;
this.blockable = blockable;
this.meta33243 = meta33243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33244,meta33243__$1){
var self__ = this;
var _33244__$1 = this;
return (new cljs.core.async.t_cljs$core$async33242(self__.f,self__.blockable,meta33243__$1));
});

cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33244){
var self__ = this;
var _33244__$1 = this;
return self__.meta33243;
});

cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33243","meta33243",732534308,null)], null);
});

cljs.core.async.t_cljs$core$async33242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33242";

cljs.core.async.t_cljs$core$async33242.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async33242");
});

cljs.core.async.__GT_t_cljs$core$async33242 = (function cljs$core$async$__GT_t_cljs$core$async33242(f__$1,blockable__$1,meta33243){
return (new cljs.core.async.t_cljs$core$async33242(f__$1,blockable__$1,meta33243));
});

}

return (new cljs.core.async.t_cljs$core$async33242(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33248 = arguments.length;
switch (G__33248) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33251 = arguments.length;
switch (G__33251) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33254 = arguments.length;
switch (G__33254) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33256 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33256);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33256,ret){
return (function (){
return fn1.call(null,val_33256);
});})(val_33256,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33258 = arguments.length;
switch (G__33258) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31141__auto___33260 = n;
var x_33261 = (0);
while(true){
if((x_33261 < n__31141__auto___33260)){
(a[x_33261] = (0));

var G__33262 = (x_33261 + (1));
x_33261 = G__33262;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33263 = (i + (1));
i = G__33263;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33264 = (function (flag,meta33265){
this.flag = flag;
this.meta33265 = meta33265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33266,meta33265__$1){
var self__ = this;
var _33266__$1 = this;
return (new cljs.core.async.t_cljs$core$async33264(self__.flag,meta33265__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33266){
var self__ = this;
var _33266__$1 = this;
return self__.meta33265;
});})(flag))
;

cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33264.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33265","meta33265",228657199,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33264";

cljs.core.async.t_cljs$core$async33264.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async33264");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33264 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33264(flag__$1,meta33265){
return (new cljs.core.async.t_cljs$core$async33264(flag__$1,meta33265));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33264(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33267 = (function (flag,cb,meta33268){
this.flag = flag;
this.cb = cb;
this.meta33268 = meta33268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33269,meta33268__$1){
var self__ = this;
var _33269__$1 = this;
return (new cljs.core.async.t_cljs$core$async33267(self__.flag,self__.cb,meta33268__$1));
});

cljs.core.async.t_cljs$core$async33267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33269){
var self__ = this;
var _33269__$1 = this;
return self__.meta33268;
});

cljs.core.async.t_cljs$core$async33267.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33267.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33268","meta33268",1627124670,null)], null);
});

cljs.core.async.t_cljs$core$async33267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33267";

cljs.core.async.t_cljs$core$async33267.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async33267");
});

cljs.core.async.__GT_t_cljs$core$async33267 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33267(flag__$1,cb__$1,meta33268){
return (new cljs.core.async.t_cljs$core$async33267(flag__$1,cb__$1,meta33268));
});

}

return (new cljs.core.async.t_cljs$core$async33267(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33270_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33270_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33271_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33271_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30096__auto__ = wport;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33272 = (i + (1));
i = G__33272;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30096__auto__ = ret;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30084__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30084__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30084__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31382__auto__ = [];
var len__31375__auto___33278 = arguments.length;
var i__31376__auto___33279 = (0);
while(true){
if((i__31376__auto___33279 < len__31375__auto___33278)){
args__31382__auto__.push((arguments[i__31376__auto___33279]));

var G__33280 = (i__31376__auto___33279 + (1));
i__31376__auto___33279 = G__33280;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33275){
var map__33276 = p__33275;
var map__33276__$1 = ((((!((map__33276 == null)))?((((map__33276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33276):map__33276);
var opts = map__33276__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33273){
var G__33274 = cljs.core.first.call(null,seq33273);
var seq33273__$1 = cljs.core.next.call(null,seq33273);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33274,seq33273__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33282 = arguments.length;
switch (G__33282) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33181__auto___33328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___33328){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___33328){
return (function (state_33306){
var state_val_33307 = (state_33306[(1)]);
if((state_val_33307 === (7))){
var inst_33302 = (state_33306[(2)]);
var state_33306__$1 = state_33306;
var statearr_33308_33329 = state_33306__$1;
(statearr_33308_33329[(2)] = inst_33302);

(statearr_33308_33329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (1))){
var state_33306__$1 = state_33306;
var statearr_33309_33330 = state_33306__$1;
(statearr_33309_33330[(2)] = null);

(statearr_33309_33330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (4))){
var inst_33285 = (state_33306[(7)]);
var inst_33285__$1 = (state_33306[(2)]);
var inst_33286 = (inst_33285__$1 == null);
var state_33306__$1 = (function (){var statearr_33310 = state_33306;
(statearr_33310[(7)] = inst_33285__$1);

return statearr_33310;
})();
if(cljs.core.truth_(inst_33286)){
var statearr_33311_33331 = state_33306__$1;
(statearr_33311_33331[(1)] = (5));

} else {
var statearr_33312_33332 = state_33306__$1;
(statearr_33312_33332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (13))){
var state_33306__$1 = state_33306;
var statearr_33313_33333 = state_33306__$1;
(statearr_33313_33333[(2)] = null);

(statearr_33313_33333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (6))){
var inst_33285 = (state_33306[(7)]);
var state_33306__$1 = state_33306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33306__$1,(11),to,inst_33285);
} else {
if((state_val_33307 === (3))){
var inst_33304 = (state_33306[(2)]);
var state_33306__$1 = state_33306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33306__$1,inst_33304);
} else {
if((state_val_33307 === (12))){
var state_33306__$1 = state_33306;
var statearr_33314_33334 = state_33306__$1;
(statearr_33314_33334[(2)] = null);

(statearr_33314_33334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (2))){
var state_33306__$1 = state_33306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33306__$1,(4),from);
} else {
if((state_val_33307 === (11))){
var inst_33295 = (state_33306[(2)]);
var state_33306__$1 = state_33306;
if(cljs.core.truth_(inst_33295)){
var statearr_33315_33335 = state_33306__$1;
(statearr_33315_33335[(1)] = (12));

} else {
var statearr_33316_33336 = state_33306__$1;
(statearr_33316_33336[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (9))){
var state_33306__$1 = state_33306;
var statearr_33317_33337 = state_33306__$1;
(statearr_33317_33337[(2)] = null);

(statearr_33317_33337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (5))){
var state_33306__$1 = state_33306;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33318_33338 = state_33306__$1;
(statearr_33318_33338[(1)] = (8));

} else {
var statearr_33319_33339 = state_33306__$1;
(statearr_33319_33339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (14))){
var inst_33300 = (state_33306[(2)]);
var state_33306__$1 = state_33306;
var statearr_33320_33340 = state_33306__$1;
(statearr_33320_33340[(2)] = inst_33300);

(statearr_33320_33340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (10))){
var inst_33292 = (state_33306[(2)]);
var state_33306__$1 = state_33306;
var statearr_33321_33341 = state_33306__$1;
(statearr_33321_33341[(2)] = inst_33292);

(statearr_33321_33341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (8))){
var inst_33289 = cljs.core.async.close_BANG_.call(null,to);
var state_33306__$1 = state_33306;
var statearr_33322_33342 = state_33306__$1;
(statearr_33322_33342[(2)] = inst_33289);

(statearr_33322_33342[(1)] = (10));


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
});})(c__33181__auto___33328))
;
return ((function (switch__33091__auto__,c__33181__auto___33328){
return (function() {
var cljs$core$async$state_machine__33092__auto__ = null;
var cljs$core$async$state_machine__33092__auto____0 = (function (){
var statearr_33323 = [null,null,null,null,null,null,null,null];
(statearr_33323[(0)] = cljs$core$async$state_machine__33092__auto__);

(statearr_33323[(1)] = (1));

return statearr_33323;
});
var cljs$core$async$state_machine__33092__auto____1 = (function (state_33306){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_33306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e33324){if((e33324 instanceof Object)){
var ex__33095__auto__ = e33324;
var statearr_33325_33343 = state_33306;
(statearr_33325_33343[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33344 = state_33306;
state_33306 = G__33344;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$state_machine__33092__auto__ = function(state_33306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33092__auto____1.call(this,state_33306);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33092__auto____0;
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33092__auto____1;
return cljs$core$async$state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___33328))
})();
var state__33183__auto__ = (function (){var statearr_33326 = f__33182__auto__.call(null);
(statearr_33326[(6)] = c__33181__auto___33328);

return statearr_33326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___33328))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33345){
var vec__33346 = p__33345;
var v = cljs.core.nth.call(null,vec__33346,(0),null);
var p = cljs.core.nth.call(null,vec__33346,(1),null);
var job = vec__33346;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33181__auto___33517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___33517,res,vec__33346,v,p,job,jobs,results){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___33517,res,vec__33346,v,p,job,jobs,results){
return (function (state_33353){
var state_val_33354 = (state_33353[(1)]);
if((state_val_33354 === (1))){
var state_33353__$1 = state_33353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33353__$1,(2),res,v);
} else {
if((state_val_33354 === (2))){
var inst_33350 = (state_33353[(2)]);
var inst_33351 = cljs.core.async.close_BANG_.call(null,res);
var state_33353__$1 = (function (){var statearr_33355 = state_33353;
(statearr_33355[(7)] = inst_33350);

return statearr_33355;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33353__$1,inst_33351);
} else {
return null;
}
}
});})(c__33181__auto___33517,res,vec__33346,v,p,job,jobs,results))
;
return ((function (switch__33091__auto__,c__33181__auto___33517,res,vec__33346,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0 = (function (){
var statearr_33356 = [null,null,null,null,null,null,null,null];
(statearr_33356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__);

(statearr_33356[(1)] = (1));

return statearr_33356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1 = (function (state_33353){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_33353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e33357){if((e33357 instanceof Object)){
var ex__33095__auto__ = e33357;
var statearr_33358_33518 = state_33353;
(statearr_33358_33518[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33519 = state_33353;
state_33353 = G__33519;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__ = function(state_33353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1.call(this,state_33353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___33517,res,vec__33346,v,p,job,jobs,results))
})();
var state__33183__auto__ = (function (){var statearr_33359 = f__33182__auto__.call(null);
(statearr_33359[(6)] = c__33181__auto___33517);

return statearr_33359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___33517,res,vec__33346,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33360){
var vec__33361 = p__33360;
var v = cljs.core.nth.call(null,vec__33361,(0),null);
var p = cljs.core.nth.call(null,vec__33361,(1),null);
var job = vec__33361;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31141__auto___33520 = n;
var __33521 = (0);
while(true){
if((__33521 < n__31141__auto___33520)){
var G__33364_33522 = type;
var G__33364_33523__$1 = (((G__33364_33522 instanceof cljs.core.Keyword))?G__33364_33522.fqn:null);
switch (G__33364_33523__$1) {
case "compute":
var c__33181__auto___33525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33521,c__33181__auto___33525,G__33364_33522,G__33364_33523__$1,n__31141__auto___33520,jobs,results,process,async){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (__33521,c__33181__auto___33525,G__33364_33522,G__33364_33523__$1,n__31141__auto___33520,jobs,results,process,async){
return (function (state_33377){
var state_val_33378 = (state_33377[(1)]);
if((state_val_33378 === (1))){
var state_33377__$1 = state_33377;
var statearr_33379_33526 = state_33377__$1;
(statearr_33379_33526[(2)] = null);

(statearr_33379_33526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (2))){
var state_33377__$1 = state_33377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33377__$1,(4),jobs);
} else {
if((state_val_33378 === (3))){
var inst_33375 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33377__$1,inst_33375);
} else {
if((state_val_33378 === (4))){
var inst_33367 = (state_33377[(2)]);
var inst_33368 = process.call(null,inst_33367);
var state_33377__$1 = state_33377;
if(cljs.core.truth_(inst_33368)){
var statearr_33380_33527 = state_33377__$1;
(statearr_33380_33527[(1)] = (5));

} else {
var statearr_33381_33528 = state_33377__$1;
(statearr_33381_33528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (5))){
var state_33377__$1 = state_33377;
var statearr_33382_33529 = state_33377__$1;
(statearr_33382_33529[(2)] = null);

(statearr_33382_33529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (6))){
var state_33377__$1 = state_33377;
var statearr_33383_33530 = state_33377__$1;
(statearr_33383_33530[(2)] = null);

(statearr_33383_33530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (7))){
var inst_33373 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
var statearr_33384_33531 = state_33377__$1;
(statearr_33384_33531[(2)] = inst_33373);

(statearr_33384_33531[(1)] = (3));


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
});})(__33521,c__33181__auto___33525,G__33364_33522,G__33364_33523__$1,n__31141__auto___33520,jobs,results,process,async))
;
return ((function (__33521,switch__33091__auto__,c__33181__auto___33525,G__33364_33522,G__33364_33523__$1,n__31141__auto___33520,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0 = (function (){
var statearr_33385 = [null,null,null,null,null,null,null];
(statearr_33385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__);

(statearr_33385[(1)] = (1));

return statearr_33385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1 = (function (state_33377){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_33377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e33386){if((e33386 instanceof Object)){
var ex__33095__auto__ = e33386;
var statearr_33387_33532 = state_33377;
(statearr_33387_33532[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33533 = state_33377;
state_33377 = G__33533;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__ = function(state_33377){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1.call(this,state_33377);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__;
})()
;})(__33521,switch__33091__auto__,c__33181__auto___33525,G__33364_33522,G__33364_33523__$1,n__31141__auto___33520,jobs,results,process,async))
})();
var state__33183__auto__ = (function (){var statearr_33388 = f__33182__auto__.call(null);
(statearr_33388[(6)] = c__33181__auto___33525);

return statearr_33388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(__33521,c__33181__auto___33525,G__33364_33522,G__33364_33523__$1,n__31141__auto___33520,jobs,results,process,async))
);


break;
case "async":
var c__33181__auto___33534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33521,c__33181__auto___33534,G__33364_33522,G__33364_33523__$1,n__31141__auto___33520,jobs,results,process,async){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (__33521,c__33181__auto___33534,G__33364_33522,G__33364_33523__$1,n__31141__auto___33520,jobs,results,process,async){
return (function (state_33401){
var state_val_33402 = (state_33401[(1)]);
if((state_val_33402 === (1))){
var state_33401__$1 = state_33401;
var statearr_33403_33535 = state_33401__$1;
(statearr_33403_33535[(2)] = null);

(statearr_33403_33535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33402 === (2))){
var state_33401__$1 = state_33401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33401__$1,(4),jobs);
} else {
if((state_val_33402 === (3))){
var inst_33399 = (state_33401[(2)]);
var state_33401__$1 = state_33401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33401__$1,inst_33399);
} else {
if((state_val_33402 === (4))){
var inst_33391 = (state_33401[(2)]);
var inst_33392 = async.call(null,inst_33391);
var state_33401__$1 = state_33401;
if(cljs.core.truth_(inst_33392)){
var statearr_33404_33536 = state_33401__$1;
(statearr_33404_33536[(1)] = (5));

} else {
var statearr_33405_33537 = state_33401__$1;
(statearr_33405_33537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33402 === (5))){
var state_33401__$1 = state_33401;
var statearr_33406_33538 = state_33401__$1;
(statearr_33406_33538[(2)] = null);

(statearr_33406_33538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33402 === (6))){
var state_33401__$1 = state_33401;
var statearr_33407_33539 = state_33401__$1;
(statearr_33407_33539[(2)] = null);

(statearr_33407_33539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33402 === (7))){
var inst_33397 = (state_33401[(2)]);
var state_33401__$1 = state_33401;
var statearr_33408_33540 = state_33401__$1;
(statearr_33408_33540[(2)] = inst_33397);

(statearr_33408_33540[(1)] = (3));


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
});})(__33521,c__33181__auto___33534,G__33364_33522,G__33364_33523__$1,n__31141__auto___33520,jobs,results,process,async))
;
return ((function (__33521,switch__33091__auto__,c__33181__auto___33534,G__33364_33522,G__33364_33523__$1,n__31141__auto___33520,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0 = (function (){
var statearr_33409 = [null,null,null,null,null,null,null];
(statearr_33409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__);

(statearr_33409[(1)] = (1));

return statearr_33409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1 = (function (state_33401){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_33401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e33410){if((e33410 instanceof Object)){
var ex__33095__auto__ = e33410;
var statearr_33411_33541 = state_33401;
(statearr_33411_33541[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33542 = state_33401;
state_33401 = G__33542;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__ = function(state_33401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1.call(this,state_33401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__;
})()
;})(__33521,switch__33091__auto__,c__33181__auto___33534,G__33364_33522,G__33364_33523__$1,n__31141__auto___33520,jobs,results,process,async))
})();
var state__33183__auto__ = (function (){var statearr_33412 = f__33182__auto__.call(null);
(statearr_33412[(6)] = c__33181__auto___33534);

return statearr_33412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(__33521,c__33181__auto___33534,G__33364_33522,G__33364_33523__$1,n__31141__auto___33520,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33364_33523__$1)].join('')));

}

var G__33543 = (__33521 + (1));
__33521 = G__33543;
continue;
} else {
}
break;
}

var c__33181__auto___33544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___33544,jobs,results,process,async){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___33544,jobs,results,process,async){
return (function (state_33434){
var state_val_33435 = (state_33434[(1)]);
if((state_val_33435 === (1))){
var state_33434__$1 = state_33434;
var statearr_33436_33545 = state_33434__$1;
(statearr_33436_33545[(2)] = null);

(statearr_33436_33545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (2))){
var state_33434__$1 = state_33434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33434__$1,(4),from);
} else {
if((state_val_33435 === (3))){
var inst_33432 = (state_33434[(2)]);
var state_33434__$1 = state_33434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33434__$1,inst_33432);
} else {
if((state_val_33435 === (4))){
var inst_33415 = (state_33434[(7)]);
var inst_33415__$1 = (state_33434[(2)]);
var inst_33416 = (inst_33415__$1 == null);
var state_33434__$1 = (function (){var statearr_33437 = state_33434;
(statearr_33437[(7)] = inst_33415__$1);

return statearr_33437;
})();
if(cljs.core.truth_(inst_33416)){
var statearr_33438_33546 = state_33434__$1;
(statearr_33438_33546[(1)] = (5));

} else {
var statearr_33439_33547 = state_33434__$1;
(statearr_33439_33547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (5))){
var inst_33418 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33434__$1 = state_33434;
var statearr_33440_33548 = state_33434__$1;
(statearr_33440_33548[(2)] = inst_33418);

(statearr_33440_33548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (6))){
var inst_33420 = (state_33434[(8)]);
var inst_33415 = (state_33434[(7)]);
var inst_33420__$1 = cljs.core.async.chan.call(null,(1));
var inst_33421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33422 = [inst_33415,inst_33420__$1];
var inst_33423 = (new cljs.core.PersistentVector(null,2,(5),inst_33421,inst_33422,null));
var state_33434__$1 = (function (){var statearr_33441 = state_33434;
(statearr_33441[(8)] = inst_33420__$1);

return statearr_33441;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33434__$1,(8),jobs,inst_33423);
} else {
if((state_val_33435 === (7))){
var inst_33430 = (state_33434[(2)]);
var state_33434__$1 = state_33434;
var statearr_33442_33549 = state_33434__$1;
(statearr_33442_33549[(2)] = inst_33430);

(statearr_33442_33549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (8))){
var inst_33420 = (state_33434[(8)]);
var inst_33425 = (state_33434[(2)]);
var state_33434__$1 = (function (){var statearr_33443 = state_33434;
(statearr_33443[(9)] = inst_33425);

return statearr_33443;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33434__$1,(9),results,inst_33420);
} else {
if((state_val_33435 === (9))){
var inst_33427 = (state_33434[(2)]);
var state_33434__$1 = (function (){var statearr_33444 = state_33434;
(statearr_33444[(10)] = inst_33427);

return statearr_33444;
})();
var statearr_33445_33550 = state_33434__$1;
(statearr_33445_33550[(2)] = null);

(statearr_33445_33550[(1)] = (2));


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
});})(c__33181__auto___33544,jobs,results,process,async))
;
return ((function (switch__33091__auto__,c__33181__auto___33544,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0 = (function (){
var statearr_33446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__);

(statearr_33446[(1)] = (1));

return statearr_33446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1 = (function (state_33434){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_33434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e33447){if((e33447 instanceof Object)){
var ex__33095__auto__ = e33447;
var statearr_33448_33551 = state_33434;
(statearr_33448_33551[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33552 = state_33434;
state_33434 = G__33552;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__ = function(state_33434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1.call(this,state_33434);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___33544,jobs,results,process,async))
})();
var state__33183__auto__ = (function (){var statearr_33449 = f__33182__auto__.call(null);
(statearr_33449[(6)] = c__33181__auto___33544);

return statearr_33449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___33544,jobs,results,process,async))
);


var c__33181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto__,jobs,results,process,async){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto__,jobs,results,process,async){
return (function (state_33487){
var state_val_33488 = (state_33487[(1)]);
if((state_val_33488 === (7))){
var inst_33483 = (state_33487[(2)]);
var state_33487__$1 = state_33487;
var statearr_33489_33553 = state_33487__$1;
(statearr_33489_33553[(2)] = inst_33483);

(statearr_33489_33553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (20))){
var state_33487__$1 = state_33487;
var statearr_33490_33554 = state_33487__$1;
(statearr_33490_33554[(2)] = null);

(statearr_33490_33554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (1))){
var state_33487__$1 = state_33487;
var statearr_33491_33555 = state_33487__$1;
(statearr_33491_33555[(2)] = null);

(statearr_33491_33555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (4))){
var inst_33452 = (state_33487[(7)]);
var inst_33452__$1 = (state_33487[(2)]);
var inst_33453 = (inst_33452__$1 == null);
var state_33487__$1 = (function (){var statearr_33492 = state_33487;
(statearr_33492[(7)] = inst_33452__$1);

return statearr_33492;
})();
if(cljs.core.truth_(inst_33453)){
var statearr_33493_33556 = state_33487__$1;
(statearr_33493_33556[(1)] = (5));

} else {
var statearr_33494_33557 = state_33487__$1;
(statearr_33494_33557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (15))){
var inst_33465 = (state_33487[(8)]);
var state_33487__$1 = state_33487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33487__$1,(18),to,inst_33465);
} else {
if((state_val_33488 === (21))){
var inst_33478 = (state_33487[(2)]);
var state_33487__$1 = state_33487;
var statearr_33495_33558 = state_33487__$1;
(statearr_33495_33558[(2)] = inst_33478);

(statearr_33495_33558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (13))){
var inst_33480 = (state_33487[(2)]);
var state_33487__$1 = (function (){var statearr_33496 = state_33487;
(statearr_33496[(9)] = inst_33480);

return statearr_33496;
})();
var statearr_33497_33559 = state_33487__$1;
(statearr_33497_33559[(2)] = null);

(statearr_33497_33559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (6))){
var inst_33452 = (state_33487[(7)]);
var state_33487__$1 = state_33487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33487__$1,(11),inst_33452);
} else {
if((state_val_33488 === (17))){
var inst_33473 = (state_33487[(2)]);
var state_33487__$1 = state_33487;
if(cljs.core.truth_(inst_33473)){
var statearr_33498_33560 = state_33487__$1;
(statearr_33498_33560[(1)] = (19));

} else {
var statearr_33499_33561 = state_33487__$1;
(statearr_33499_33561[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (3))){
var inst_33485 = (state_33487[(2)]);
var state_33487__$1 = state_33487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33487__$1,inst_33485);
} else {
if((state_val_33488 === (12))){
var inst_33462 = (state_33487[(10)]);
var state_33487__$1 = state_33487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33487__$1,(14),inst_33462);
} else {
if((state_val_33488 === (2))){
var state_33487__$1 = state_33487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33487__$1,(4),results);
} else {
if((state_val_33488 === (19))){
var state_33487__$1 = state_33487;
var statearr_33500_33562 = state_33487__$1;
(statearr_33500_33562[(2)] = null);

(statearr_33500_33562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (11))){
var inst_33462 = (state_33487[(2)]);
var state_33487__$1 = (function (){var statearr_33501 = state_33487;
(statearr_33501[(10)] = inst_33462);

return statearr_33501;
})();
var statearr_33502_33563 = state_33487__$1;
(statearr_33502_33563[(2)] = null);

(statearr_33502_33563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (9))){
var state_33487__$1 = state_33487;
var statearr_33503_33564 = state_33487__$1;
(statearr_33503_33564[(2)] = null);

(statearr_33503_33564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (5))){
var state_33487__$1 = state_33487;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33504_33565 = state_33487__$1;
(statearr_33504_33565[(1)] = (8));

} else {
var statearr_33505_33566 = state_33487__$1;
(statearr_33505_33566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (14))){
var inst_33465 = (state_33487[(8)]);
var inst_33467 = (state_33487[(11)]);
var inst_33465__$1 = (state_33487[(2)]);
var inst_33466 = (inst_33465__$1 == null);
var inst_33467__$1 = cljs.core.not.call(null,inst_33466);
var state_33487__$1 = (function (){var statearr_33506 = state_33487;
(statearr_33506[(8)] = inst_33465__$1);

(statearr_33506[(11)] = inst_33467__$1);

return statearr_33506;
})();
if(inst_33467__$1){
var statearr_33507_33567 = state_33487__$1;
(statearr_33507_33567[(1)] = (15));

} else {
var statearr_33508_33568 = state_33487__$1;
(statearr_33508_33568[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (16))){
var inst_33467 = (state_33487[(11)]);
var state_33487__$1 = state_33487;
var statearr_33509_33569 = state_33487__$1;
(statearr_33509_33569[(2)] = inst_33467);

(statearr_33509_33569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (10))){
var inst_33459 = (state_33487[(2)]);
var state_33487__$1 = state_33487;
var statearr_33510_33570 = state_33487__$1;
(statearr_33510_33570[(2)] = inst_33459);

(statearr_33510_33570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (18))){
var inst_33470 = (state_33487[(2)]);
var state_33487__$1 = state_33487;
var statearr_33511_33571 = state_33487__$1;
(statearr_33511_33571[(2)] = inst_33470);

(statearr_33511_33571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (8))){
var inst_33456 = cljs.core.async.close_BANG_.call(null,to);
var state_33487__$1 = state_33487;
var statearr_33512_33572 = state_33487__$1;
(statearr_33512_33572[(2)] = inst_33456);

(statearr_33512_33572[(1)] = (10));


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
}
}
}
}
});})(c__33181__auto__,jobs,results,process,async))
;
return ((function (switch__33091__auto__,c__33181__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0 = (function (){
var statearr_33513 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__);

(statearr_33513[(1)] = (1));

return statearr_33513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1 = (function (state_33487){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_33487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e33514){if((e33514 instanceof Object)){
var ex__33095__auto__ = e33514;
var statearr_33515_33573 = state_33487;
(statearr_33515_33573[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33574 = state_33487;
state_33487 = G__33574;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__ = function(state_33487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1.call(this,state_33487);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto__,jobs,results,process,async))
})();
var state__33183__auto__ = (function (){var statearr_33516 = f__33182__auto__.call(null);
(statearr_33516[(6)] = c__33181__auto__);

return statearr_33516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto__,jobs,results,process,async))
);

return c__33181__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33576 = arguments.length;
switch (G__33576) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33579 = arguments.length;
switch (G__33579) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33582 = arguments.length;
switch (G__33582) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33181__auto___33631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___33631,tc,fc){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___33631,tc,fc){
return (function (state_33608){
var state_val_33609 = (state_33608[(1)]);
if((state_val_33609 === (7))){
var inst_33604 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
var statearr_33610_33632 = state_33608__$1;
(statearr_33610_33632[(2)] = inst_33604);

(statearr_33610_33632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (1))){
var state_33608__$1 = state_33608;
var statearr_33611_33633 = state_33608__$1;
(statearr_33611_33633[(2)] = null);

(statearr_33611_33633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (4))){
var inst_33585 = (state_33608[(7)]);
var inst_33585__$1 = (state_33608[(2)]);
var inst_33586 = (inst_33585__$1 == null);
var state_33608__$1 = (function (){var statearr_33612 = state_33608;
(statearr_33612[(7)] = inst_33585__$1);

return statearr_33612;
})();
if(cljs.core.truth_(inst_33586)){
var statearr_33613_33634 = state_33608__$1;
(statearr_33613_33634[(1)] = (5));

} else {
var statearr_33614_33635 = state_33608__$1;
(statearr_33614_33635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (13))){
var state_33608__$1 = state_33608;
var statearr_33615_33636 = state_33608__$1;
(statearr_33615_33636[(2)] = null);

(statearr_33615_33636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (6))){
var inst_33585 = (state_33608[(7)]);
var inst_33591 = p.call(null,inst_33585);
var state_33608__$1 = state_33608;
if(cljs.core.truth_(inst_33591)){
var statearr_33616_33637 = state_33608__$1;
(statearr_33616_33637[(1)] = (9));

} else {
var statearr_33617_33638 = state_33608__$1;
(statearr_33617_33638[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (3))){
var inst_33606 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33608__$1,inst_33606);
} else {
if((state_val_33609 === (12))){
var state_33608__$1 = state_33608;
var statearr_33618_33639 = state_33608__$1;
(statearr_33618_33639[(2)] = null);

(statearr_33618_33639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (2))){
var state_33608__$1 = state_33608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33608__$1,(4),ch);
} else {
if((state_val_33609 === (11))){
var inst_33585 = (state_33608[(7)]);
var inst_33595 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33608__$1,(8),inst_33595,inst_33585);
} else {
if((state_val_33609 === (9))){
var state_33608__$1 = state_33608;
var statearr_33619_33640 = state_33608__$1;
(statearr_33619_33640[(2)] = tc);

(statearr_33619_33640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (5))){
var inst_33588 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33589 = cljs.core.async.close_BANG_.call(null,fc);
var state_33608__$1 = (function (){var statearr_33620 = state_33608;
(statearr_33620[(8)] = inst_33588);

return statearr_33620;
})();
var statearr_33621_33641 = state_33608__$1;
(statearr_33621_33641[(2)] = inst_33589);

(statearr_33621_33641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (14))){
var inst_33602 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
var statearr_33622_33642 = state_33608__$1;
(statearr_33622_33642[(2)] = inst_33602);

(statearr_33622_33642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (10))){
var state_33608__$1 = state_33608;
var statearr_33623_33643 = state_33608__$1;
(statearr_33623_33643[(2)] = fc);

(statearr_33623_33643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (8))){
var inst_33597 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
if(cljs.core.truth_(inst_33597)){
var statearr_33624_33644 = state_33608__$1;
(statearr_33624_33644[(1)] = (12));

} else {
var statearr_33625_33645 = state_33608__$1;
(statearr_33625_33645[(1)] = (13));

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
});})(c__33181__auto___33631,tc,fc))
;
return ((function (switch__33091__auto__,c__33181__auto___33631,tc,fc){
return (function() {
var cljs$core$async$state_machine__33092__auto__ = null;
var cljs$core$async$state_machine__33092__auto____0 = (function (){
var statearr_33626 = [null,null,null,null,null,null,null,null,null];
(statearr_33626[(0)] = cljs$core$async$state_machine__33092__auto__);

(statearr_33626[(1)] = (1));

return statearr_33626;
});
var cljs$core$async$state_machine__33092__auto____1 = (function (state_33608){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_33608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e33627){if((e33627 instanceof Object)){
var ex__33095__auto__ = e33627;
var statearr_33628_33646 = state_33608;
(statearr_33628_33646[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33647 = state_33608;
state_33608 = G__33647;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$state_machine__33092__auto__ = function(state_33608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33092__auto____1.call(this,state_33608);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33092__auto____0;
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33092__auto____1;
return cljs$core$async$state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___33631,tc,fc))
})();
var state__33183__auto__ = (function (){var statearr_33629 = f__33182__auto__.call(null);
(statearr_33629[(6)] = c__33181__auto___33631);

return statearr_33629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___33631,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto__){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto__){
return (function (state_33668){
var state_val_33669 = (state_33668[(1)]);
if((state_val_33669 === (7))){
var inst_33664 = (state_33668[(2)]);
var state_33668__$1 = state_33668;
var statearr_33670_33688 = state_33668__$1;
(statearr_33670_33688[(2)] = inst_33664);

(statearr_33670_33688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (1))){
var inst_33648 = init;
var state_33668__$1 = (function (){var statearr_33671 = state_33668;
(statearr_33671[(7)] = inst_33648);

return statearr_33671;
})();
var statearr_33672_33689 = state_33668__$1;
(statearr_33672_33689[(2)] = null);

(statearr_33672_33689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (4))){
var inst_33651 = (state_33668[(8)]);
var inst_33651__$1 = (state_33668[(2)]);
var inst_33652 = (inst_33651__$1 == null);
var state_33668__$1 = (function (){var statearr_33673 = state_33668;
(statearr_33673[(8)] = inst_33651__$1);

return statearr_33673;
})();
if(cljs.core.truth_(inst_33652)){
var statearr_33674_33690 = state_33668__$1;
(statearr_33674_33690[(1)] = (5));

} else {
var statearr_33675_33691 = state_33668__$1;
(statearr_33675_33691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (6))){
var inst_33655 = (state_33668[(9)]);
var inst_33648 = (state_33668[(7)]);
var inst_33651 = (state_33668[(8)]);
var inst_33655__$1 = f.call(null,inst_33648,inst_33651);
var inst_33656 = cljs.core.reduced_QMARK_.call(null,inst_33655__$1);
var state_33668__$1 = (function (){var statearr_33676 = state_33668;
(statearr_33676[(9)] = inst_33655__$1);

return statearr_33676;
})();
if(inst_33656){
var statearr_33677_33692 = state_33668__$1;
(statearr_33677_33692[(1)] = (8));

} else {
var statearr_33678_33693 = state_33668__$1;
(statearr_33678_33693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (3))){
var inst_33666 = (state_33668[(2)]);
var state_33668__$1 = state_33668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33668__$1,inst_33666);
} else {
if((state_val_33669 === (2))){
var state_33668__$1 = state_33668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33668__$1,(4),ch);
} else {
if((state_val_33669 === (9))){
var inst_33655 = (state_33668[(9)]);
var inst_33648 = inst_33655;
var state_33668__$1 = (function (){var statearr_33679 = state_33668;
(statearr_33679[(7)] = inst_33648);

return statearr_33679;
})();
var statearr_33680_33694 = state_33668__$1;
(statearr_33680_33694[(2)] = null);

(statearr_33680_33694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (5))){
var inst_33648 = (state_33668[(7)]);
var state_33668__$1 = state_33668;
var statearr_33681_33695 = state_33668__$1;
(statearr_33681_33695[(2)] = inst_33648);

(statearr_33681_33695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (10))){
var inst_33662 = (state_33668[(2)]);
var state_33668__$1 = state_33668;
var statearr_33682_33696 = state_33668__$1;
(statearr_33682_33696[(2)] = inst_33662);

(statearr_33682_33696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (8))){
var inst_33655 = (state_33668[(9)]);
var inst_33658 = cljs.core.deref.call(null,inst_33655);
var state_33668__$1 = state_33668;
var statearr_33683_33697 = state_33668__$1;
(statearr_33683_33697[(2)] = inst_33658);

(statearr_33683_33697[(1)] = (10));


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
});})(c__33181__auto__))
;
return ((function (switch__33091__auto__,c__33181__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33092__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33092__auto____0 = (function (){
var statearr_33684 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33684[(0)] = cljs$core$async$reduce_$_state_machine__33092__auto__);

(statearr_33684[(1)] = (1));

return statearr_33684;
});
var cljs$core$async$reduce_$_state_machine__33092__auto____1 = (function (state_33668){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_33668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e33685){if((e33685 instanceof Object)){
var ex__33095__auto__ = e33685;
var statearr_33686_33698 = state_33668;
(statearr_33686_33698[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33699 = state_33668;
state_33668 = G__33699;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33092__auto__ = function(state_33668){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33092__auto____1.call(this,state_33668);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33092__auto____0;
cljs$core$async$reduce_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33092__auto____1;
return cljs$core$async$reduce_$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto__))
})();
var state__33183__auto__ = (function (){var statearr_33687 = f__33182__auto__.call(null);
(statearr_33687[(6)] = c__33181__auto__);

return statearr_33687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto__))
);

return c__33181__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto__,f__$1){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto__,f__$1){
return (function (state_33705){
var state_val_33706 = (state_33705[(1)]);
if((state_val_33706 === (1))){
var inst_33700 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33705__$1 = state_33705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33705__$1,(2),inst_33700);
} else {
if((state_val_33706 === (2))){
var inst_33702 = (state_33705[(2)]);
var inst_33703 = f__$1.call(null,inst_33702);
var state_33705__$1 = state_33705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33705__$1,inst_33703);
} else {
return null;
}
}
});})(c__33181__auto__,f__$1))
;
return ((function (switch__33091__auto__,c__33181__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33092__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33092__auto____0 = (function (){
var statearr_33707 = [null,null,null,null,null,null,null];
(statearr_33707[(0)] = cljs$core$async$transduce_$_state_machine__33092__auto__);

(statearr_33707[(1)] = (1));

return statearr_33707;
});
var cljs$core$async$transduce_$_state_machine__33092__auto____1 = (function (state_33705){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_33705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e33708){if((e33708 instanceof Object)){
var ex__33095__auto__ = e33708;
var statearr_33709_33711 = state_33705;
(statearr_33709_33711[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33712 = state_33705;
state_33705 = G__33712;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33092__auto__ = function(state_33705){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33092__auto____1.call(this,state_33705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33092__auto____0;
cljs$core$async$transduce_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33092__auto____1;
return cljs$core$async$transduce_$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto__,f__$1))
})();
var state__33183__auto__ = (function (){var statearr_33710 = f__33182__auto__.call(null);
(statearr_33710[(6)] = c__33181__auto__);

return statearr_33710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto__,f__$1))
);

return c__33181__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33714 = arguments.length;
switch (G__33714) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto__){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto__){
return (function (state_33739){
var state_val_33740 = (state_33739[(1)]);
if((state_val_33740 === (7))){
var inst_33721 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
var statearr_33741_33762 = state_33739__$1;
(statearr_33741_33762[(2)] = inst_33721);

(statearr_33741_33762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (1))){
var inst_33715 = cljs.core.seq.call(null,coll);
var inst_33716 = inst_33715;
var state_33739__$1 = (function (){var statearr_33742 = state_33739;
(statearr_33742[(7)] = inst_33716);

return statearr_33742;
})();
var statearr_33743_33763 = state_33739__$1;
(statearr_33743_33763[(2)] = null);

(statearr_33743_33763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (4))){
var inst_33716 = (state_33739[(7)]);
var inst_33719 = cljs.core.first.call(null,inst_33716);
var state_33739__$1 = state_33739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33739__$1,(7),ch,inst_33719);
} else {
if((state_val_33740 === (13))){
var inst_33733 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
var statearr_33744_33764 = state_33739__$1;
(statearr_33744_33764[(2)] = inst_33733);

(statearr_33744_33764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (6))){
var inst_33724 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
if(cljs.core.truth_(inst_33724)){
var statearr_33745_33765 = state_33739__$1;
(statearr_33745_33765[(1)] = (8));

} else {
var statearr_33746_33766 = state_33739__$1;
(statearr_33746_33766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (3))){
var inst_33737 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33739__$1,inst_33737);
} else {
if((state_val_33740 === (12))){
var state_33739__$1 = state_33739;
var statearr_33747_33767 = state_33739__$1;
(statearr_33747_33767[(2)] = null);

(statearr_33747_33767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (2))){
var inst_33716 = (state_33739[(7)]);
var state_33739__$1 = state_33739;
if(cljs.core.truth_(inst_33716)){
var statearr_33748_33768 = state_33739__$1;
(statearr_33748_33768[(1)] = (4));

} else {
var statearr_33749_33769 = state_33739__$1;
(statearr_33749_33769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (11))){
var inst_33730 = cljs.core.async.close_BANG_.call(null,ch);
var state_33739__$1 = state_33739;
var statearr_33750_33770 = state_33739__$1;
(statearr_33750_33770[(2)] = inst_33730);

(statearr_33750_33770[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (9))){
var state_33739__$1 = state_33739;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33751_33771 = state_33739__$1;
(statearr_33751_33771[(1)] = (11));

} else {
var statearr_33752_33772 = state_33739__$1;
(statearr_33752_33772[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (5))){
var inst_33716 = (state_33739[(7)]);
var state_33739__$1 = state_33739;
var statearr_33753_33773 = state_33739__$1;
(statearr_33753_33773[(2)] = inst_33716);

(statearr_33753_33773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (10))){
var inst_33735 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
var statearr_33754_33774 = state_33739__$1;
(statearr_33754_33774[(2)] = inst_33735);

(statearr_33754_33774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (8))){
var inst_33716 = (state_33739[(7)]);
var inst_33726 = cljs.core.next.call(null,inst_33716);
var inst_33716__$1 = inst_33726;
var state_33739__$1 = (function (){var statearr_33755 = state_33739;
(statearr_33755[(7)] = inst_33716__$1);

return statearr_33755;
})();
var statearr_33756_33775 = state_33739__$1;
(statearr_33756_33775[(2)] = null);

(statearr_33756_33775[(1)] = (2));


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
});})(c__33181__auto__))
;
return ((function (switch__33091__auto__,c__33181__auto__){
return (function() {
var cljs$core$async$state_machine__33092__auto__ = null;
var cljs$core$async$state_machine__33092__auto____0 = (function (){
var statearr_33757 = [null,null,null,null,null,null,null,null];
(statearr_33757[(0)] = cljs$core$async$state_machine__33092__auto__);

(statearr_33757[(1)] = (1));

return statearr_33757;
});
var cljs$core$async$state_machine__33092__auto____1 = (function (state_33739){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_33739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e33758){if((e33758 instanceof Object)){
var ex__33095__auto__ = e33758;
var statearr_33759_33776 = state_33739;
(statearr_33759_33776[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33777 = state_33739;
state_33739 = G__33777;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$state_machine__33092__auto__ = function(state_33739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33092__auto____1.call(this,state_33739);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33092__auto____0;
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33092__auto____1;
return cljs$core$async$state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto__))
})();
var state__33183__auto__ = (function (){var statearr_33760 = f__33182__auto__.call(null);
(statearr_33760[(6)] = c__33181__auto__);

return statearr_33760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto__))
);

return c__33181__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30829__auto__ = (((_ == null))?null:_);
var m__30830__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,_);
} else {
var m__30830__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30830__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,ch);
} else {
var m__30830__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m);
} else {
var m__30830__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33778 = (function (ch,cs,meta33779){
this.ch = ch;
this.cs = cs;
this.meta33779 = meta33779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33780,meta33779__$1){
var self__ = this;
var _33780__$1 = this;
return (new cljs.core.async.t_cljs$core$async33778(self__.ch,self__.cs,meta33779__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33780){
var self__ = this;
var _33780__$1 = this;
return self__.meta33779;
});})(cs))
;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33778.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33779","meta33779",1666470495,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33778";

cljs.core.async.t_cljs$core$async33778.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async33778");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33778 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33778(ch__$1,cs__$1,meta33779){
return (new cljs.core.async.t_cljs$core$async33778(ch__$1,cs__$1,meta33779));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33778(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33181__auto___34000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___34000,cs,m,dchan,dctr,done){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___34000,cs,m,dchan,dctr,done){
return (function (state_33915){
var state_val_33916 = (state_33915[(1)]);
if((state_val_33916 === (7))){
var inst_33911 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_33917_34001 = state_33915__$1;
(statearr_33917_34001[(2)] = inst_33911);

(statearr_33917_34001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (20))){
var inst_33814 = (state_33915[(7)]);
var inst_33826 = cljs.core.first.call(null,inst_33814);
var inst_33827 = cljs.core.nth.call(null,inst_33826,(0),null);
var inst_33828 = cljs.core.nth.call(null,inst_33826,(1),null);
var state_33915__$1 = (function (){var statearr_33918 = state_33915;
(statearr_33918[(8)] = inst_33827);

return statearr_33918;
})();
if(cljs.core.truth_(inst_33828)){
var statearr_33919_34002 = state_33915__$1;
(statearr_33919_34002[(1)] = (22));

} else {
var statearr_33920_34003 = state_33915__$1;
(statearr_33920_34003[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (27))){
var inst_33856 = (state_33915[(9)]);
var inst_33858 = (state_33915[(10)]);
var inst_33783 = (state_33915[(11)]);
var inst_33863 = (state_33915[(12)]);
var inst_33863__$1 = cljs.core._nth.call(null,inst_33856,inst_33858);
var inst_33864 = cljs.core.async.put_BANG_.call(null,inst_33863__$1,inst_33783,done);
var state_33915__$1 = (function (){var statearr_33921 = state_33915;
(statearr_33921[(12)] = inst_33863__$1);

return statearr_33921;
})();
if(cljs.core.truth_(inst_33864)){
var statearr_33922_34004 = state_33915__$1;
(statearr_33922_34004[(1)] = (30));

} else {
var statearr_33923_34005 = state_33915__$1;
(statearr_33923_34005[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (1))){
var state_33915__$1 = state_33915;
var statearr_33924_34006 = state_33915__$1;
(statearr_33924_34006[(2)] = null);

(statearr_33924_34006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (24))){
var inst_33814 = (state_33915[(7)]);
var inst_33833 = (state_33915[(2)]);
var inst_33834 = cljs.core.next.call(null,inst_33814);
var inst_33792 = inst_33834;
var inst_33793 = null;
var inst_33794 = (0);
var inst_33795 = (0);
var state_33915__$1 = (function (){var statearr_33925 = state_33915;
(statearr_33925[(13)] = inst_33792);

(statearr_33925[(14)] = inst_33793);

(statearr_33925[(15)] = inst_33833);

(statearr_33925[(16)] = inst_33794);

(statearr_33925[(17)] = inst_33795);

return statearr_33925;
})();
var statearr_33926_34007 = state_33915__$1;
(statearr_33926_34007[(2)] = null);

(statearr_33926_34007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (39))){
var state_33915__$1 = state_33915;
var statearr_33930_34008 = state_33915__$1;
(statearr_33930_34008[(2)] = null);

(statearr_33930_34008[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (4))){
var inst_33783 = (state_33915[(11)]);
var inst_33783__$1 = (state_33915[(2)]);
var inst_33784 = (inst_33783__$1 == null);
var state_33915__$1 = (function (){var statearr_33931 = state_33915;
(statearr_33931[(11)] = inst_33783__$1);

return statearr_33931;
})();
if(cljs.core.truth_(inst_33784)){
var statearr_33932_34009 = state_33915__$1;
(statearr_33932_34009[(1)] = (5));

} else {
var statearr_33933_34010 = state_33915__$1;
(statearr_33933_34010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (15))){
var inst_33792 = (state_33915[(13)]);
var inst_33793 = (state_33915[(14)]);
var inst_33794 = (state_33915[(16)]);
var inst_33795 = (state_33915[(17)]);
var inst_33810 = (state_33915[(2)]);
var inst_33811 = (inst_33795 + (1));
var tmp33927 = inst_33792;
var tmp33928 = inst_33793;
var tmp33929 = inst_33794;
var inst_33792__$1 = tmp33927;
var inst_33793__$1 = tmp33928;
var inst_33794__$1 = tmp33929;
var inst_33795__$1 = inst_33811;
var state_33915__$1 = (function (){var statearr_33934 = state_33915;
(statearr_33934[(13)] = inst_33792__$1);

(statearr_33934[(14)] = inst_33793__$1);

(statearr_33934[(18)] = inst_33810);

(statearr_33934[(16)] = inst_33794__$1);

(statearr_33934[(17)] = inst_33795__$1);

return statearr_33934;
})();
var statearr_33935_34011 = state_33915__$1;
(statearr_33935_34011[(2)] = null);

(statearr_33935_34011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (21))){
var inst_33837 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_33939_34012 = state_33915__$1;
(statearr_33939_34012[(2)] = inst_33837);

(statearr_33939_34012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (31))){
var inst_33863 = (state_33915[(12)]);
var inst_33867 = done.call(null,null);
var inst_33868 = cljs.core.async.untap_STAR_.call(null,m,inst_33863);
var state_33915__$1 = (function (){var statearr_33940 = state_33915;
(statearr_33940[(19)] = inst_33867);

return statearr_33940;
})();
var statearr_33941_34013 = state_33915__$1;
(statearr_33941_34013[(2)] = inst_33868);

(statearr_33941_34013[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (32))){
var inst_33856 = (state_33915[(9)]);
var inst_33857 = (state_33915[(20)]);
var inst_33858 = (state_33915[(10)]);
var inst_33855 = (state_33915[(21)]);
var inst_33870 = (state_33915[(2)]);
var inst_33871 = (inst_33858 + (1));
var tmp33936 = inst_33856;
var tmp33937 = inst_33857;
var tmp33938 = inst_33855;
var inst_33855__$1 = tmp33938;
var inst_33856__$1 = tmp33936;
var inst_33857__$1 = tmp33937;
var inst_33858__$1 = inst_33871;
var state_33915__$1 = (function (){var statearr_33942 = state_33915;
(statearr_33942[(9)] = inst_33856__$1);

(statearr_33942[(20)] = inst_33857__$1);

(statearr_33942[(10)] = inst_33858__$1);

(statearr_33942[(22)] = inst_33870);

(statearr_33942[(21)] = inst_33855__$1);

return statearr_33942;
})();
var statearr_33943_34014 = state_33915__$1;
(statearr_33943_34014[(2)] = null);

(statearr_33943_34014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (40))){
var inst_33883 = (state_33915[(23)]);
var inst_33887 = done.call(null,null);
var inst_33888 = cljs.core.async.untap_STAR_.call(null,m,inst_33883);
var state_33915__$1 = (function (){var statearr_33944 = state_33915;
(statearr_33944[(24)] = inst_33887);

return statearr_33944;
})();
var statearr_33945_34015 = state_33915__$1;
(statearr_33945_34015[(2)] = inst_33888);

(statearr_33945_34015[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (33))){
var inst_33874 = (state_33915[(25)]);
var inst_33876 = cljs.core.chunked_seq_QMARK_.call(null,inst_33874);
var state_33915__$1 = state_33915;
if(inst_33876){
var statearr_33946_34016 = state_33915__$1;
(statearr_33946_34016[(1)] = (36));

} else {
var statearr_33947_34017 = state_33915__$1;
(statearr_33947_34017[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (13))){
var inst_33804 = (state_33915[(26)]);
var inst_33807 = cljs.core.async.close_BANG_.call(null,inst_33804);
var state_33915__$1 = state_33915;
var statearr_33948_34018 = state_33915__$1;
(statearr_33948_34018[(2)] = inst_33807);

(statearr_33948_34018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (22))){
var inst_33827 = (state_33915[(8)]);
var inst_33830 = cljs.core.async.close_BANG_.call(null,inst_33827);
var state_33915__$1 = state_33915;
var statearr_33949_34019 = state_33915__$1;
(statearr_33949_34019[(2)] = inst_33830);

(statearr_33949_34019[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (36))){
var inst_33874 = (state_33915[(25)]);
var inst_33878 = cljs.core.chunk_first.call(null,inst_33874);
var inst_33879 = cljs.core.chunk_rest.call(null,inst_33874);
var inst_33880 = cljs.core.count.call(null,inst_33878);
var inst_33855 = inst_33879;
var inst_33856 = inst_33878;
var inst_33857 = inst_33880;
var inst_33858 = (0);
var state_33915__$1 = (function (){var statearr_33950 = state_33915;
(statearr_33950[(9)] = inst_33856);

(statearr_33950[(20)] = inst_33857);

(statearr_33950[(10)] = inst_33858);

(statearr_33950[(21)] = inst_33855);

return statearr_33950;
})();
var statearr_33951_34020 = state_33915__$1;
(statearr_33951_34020[(2)] = null);

(statearr_33951_34020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (41))){
var inst_33874 = (state_33915[(25)]);
var inst_33890 = (state_33915[(2)]);
var inst_33891 = cljs.core.next.call(null,inst_33874);
var inst_33855 = inst_33891;
var inst_33856 = null;
var inst_33857 = (0);
var inst_33858 = (0);
var state_33915__$1 = (function (){var statearr_33952 = state_33915;
(statearr_33952[(27)] = inst_33890);

(statearr_33952[(9)] = inst_33856);

(statearr_33952[(20)] = inst_33857);

(statearr_33952[(10)] = inst_33858);

(statearr_33952[(21)] = inst_33855);

return statearr_33952;
})();
var statearr_33953_34021 = state_33915__$1;
(statearr_33953_34021[(2)] = null);

(statearr_33953_34021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (43))){
var state_33915__$1 = state_33915;
var statearr_33954_34022 = state_33915__$1;
(statearr_33954_34022[(2)] = null);

(statearr_33954_34022[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (29))){
var inst_33899 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_33955_34023 = state_33915__$1;
(statearr_33955_34023[(2)] = inst_33899);

(statearr_33955_34023[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (44))){
var inst_33908 = (state_33915[(2)]);
var state_33915__$1 = (function (){var statearr_33956 = state_33915;
(statearr_33956[(28)] = inst_33908);

return statearr_33956;
})();
var statearr_33957_34024 = state_33915__$1;
(statearr_33957_34024[(2)] = null);

(statearr_33957_34024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (6))){
var inst_33847 = (state_33915[(29)]);
var inst_33846 = cljs.core.deref.call(null,cs);
var inst_33847__$1 = cljs.core.keys.call(null,inst_33846);
var inst_33848 = cljs.core.count.call(null,inst_33847__$1);
var inst_33849 = cljs.core.reset_BANG_.call(null,dctr,inst_33848);
var inst_33854 = cljs.core.seq.call(null,inst_33847__$1);
var inst_33855 = inst_33854;
var inst_33856 = null;
var inst_33857 = (0);
var inst_33858 = (0);
var state_33915__$1 = (function (){var statearr_33958 = state_33915;
(statearr_33958[(9)] = inst_33856);

(statearr_33958[(20)] = inst_33857);

(statearr_33958[(10)] = inst_33858);

(statearr_33958[(30)] = inst_33849);

(statearr_33958[(29)] = inst_33847__$1);

(statearr_33958[(21)] = inst_33855);

return statearr_33958;
})();
var statearr_33959_34025 = state_33915__$1;
(statearr_33959_34025[(2)] = null);

(statearr_33959_34025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (28))){
var inst_33874 = (state_33915[(25)]);
var inst_33855 = (state_33915[(21)]);
var inst_33874__$1 = cljs.core.seq.call(null,inst_33855);
var state_33915__$1 = (function (){var statearr_33960 = state_33915;
(statearr_33960[(25)] = inst_33874__$1);

return statearr_33960;
})();
if(inst_33874__$1){
var statearr_33961_34026 = state_33915__$1;
(statearr_33961_34026[(1)] = (33));

} else {
var statearr_33962_34027 = state_33915__$1;
(statearr_33962_34027[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (25))){
var inst_33857 = (state_33915[(20)]);
var inst_33858 = (state_33915[(10)]);
var inst_33860 = (inst_33858 < inst_33857);
var inst_33861 = inst_33860;
var state_33915__$1 = state_33915;
if(cljs.core.truth_(inst_33861)){
var statearr_33963_34028 = state_33915__$1;
(statearr_33963_34028[(1)] = (27));

} else {
var statearr_33964_34029 = state_33915__$1;
(statearr_33964_34029[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (34))){
var state_33915__$1 = state_33915;
var statearr_33965_34030 = state_33915__$1;
(statearr_33965_34030[(2)] = null);

(statearr_33965_34030[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (17))){
var state_33915__$1 = state_33915;
var statearr_33966_34031 = state_33915__$1;
(statearr_33966_34031[(2)] = null);

(statearr_33966_34031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (3))){
var inst_33913 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33915__$1,inst_33913);
} else {
if((state_val_33916 === (12))){
var inst_33842 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_33967_34032 = state_33915__$1;
(statearr_33967_34032[(2)] = inst_33842);

(statearr_33967_34032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (2))){
var state_33915__$1 = state_33915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33915__$1,(4),ch);
} else {
if((state_val_33916 === (23))){
var state_33915__$1 = state_33915;
var statearr_33968_34033 = state_33915__$1;
(statearr_33968_34033[(2)] = null);

(statearr_33968_34033[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (35))){
var inst_33897 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_33969_34034 = state_33915__$1;
(statearr_33969_34034[(2)] = inst_33897);

(statearr_33969_34034[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (19))){
var inst_33814 = (state_33915[(7)]);
var inst_33818 = cljs.core.chunk_first.call(null,inst_33814);
var inst_33819 = cljs.core.chunk_rest.call(null,inst_33814);
var inst_33820 = cljs.core.count.call(null,inst_33818);
var inst_33792 = inst_33819;
var inst_33793 = inst_33818;
var inst_33794 = inst_33820;
var inst_33795 = (0);
var state_33915__$1 = (function (){var statearr_33970 = state_33915;
(statearr_33970[(13)] = inst_33792);

(statearr_33970[(14)] = inst_33793);

(statearr_33970[(16)] = inst_33794);

(statearr_33970[(17)] = inst_33795);

return statearr_33970;
})();
var statearr_33971_34035 = state_33915__$1;
(statearr_33971_34035[(2)] = null);

(statearr_33971_34035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (11))){
var inst_33792 = (state_33915[(13)]);
var inst_33814 = (state_33915[(7)]);
var inst_33814__$1 = cljs.core.seq.call(null,inst_33792);
var state_33915__$1 = (function (){var statearr_33972 = state_33915;
(statearr_33972[(7)] = inst_33814__$1);

return statearr_33972;
})();
if(inst_33814__$1){
var statearr_33973_34036 = state_33915__$1;
(statearr_33973_34036[(1)] = (16));

} else {
var statearr_33974_34037 = state_33915__$1;
(statearr_33974_34037[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (9))){
var inst_33844 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_33975_34038 = state_33915__$1;
(statearr_33975_34038[(2)] = inst_33844);

(statearr_33975_34038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (5))){
var inst_33790 = cljs.core.deref.call(null,cs);
var inst_33791 = cljs.core.seq.call(null,inst_33790);
var inst_33792 = inst_33791;
var inst_33793 = null;
var inst_33794 = (0);
var inst_33795 = (0);
var state_33915__$1 = (function (){var statearr_33976 = state_33915;
(statearr_33976[(13)] = inst_33792);

(statearr_33976[(14)] = inst_33793);

(statearr_33976[(16)] = inst_33794);

(statearr_33976[(17)] = inst_33795);

return statearr_33976;
})();
var statearr_33977_34039 = state_33915__$1;
(statearr_33977_34039[(2)] = null);

(statearr_33977_34039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (14))){
var state_33915__$1 = state_33915;
var statearr_33978_34040 = state_33915__$1;
(statearr_33978_34040[(2)] = null);

(statearr_33978_34040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (45))){
var inst_33905 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_33979_34041 = state_33915__$1;
(statearr_33979_34041[(2)] = inst_33905);

(statearr_33979_34041[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (26))){
var inst_33847 = (state_33915[(29)]);
var inst_33901 = (state_33915[(2)]);
var inst_33902 = cljs.core.seq.call(null,inst_33847);
var state_33915__$1 = (function (){var statearr_33980 = state_33915;
(statearr_33980[(31)] = inst_33901);

return statearr_33980;
})();
if(inst_33902){
var statearr_33981_34042 = state_33915__$1;
(statearr_33981_34042[(1)] = (42));

} else {
var statearr_33982_34043 = state_33915__$1;
(statearr_33982_34043[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (16))){
var inst_33814 = (state_33915[(7)]);
var inst_33816 = cljs.core.chunked_seq_QMARK_.call(null,inst_33814);
var state_33915__$1 = state_33915;
if(inst_33816){
var statearr_33983_34044 = state_33915__$1;
(statearr_33983_34044[(1)] = (19));

} else {
var statearr_33984_34045 = state_33915__$1;
(statearr_33984_34045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (38))){
var inst_33894 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_33985_34046 = state_33915__$1;
(statearr_33985_34046[(2)] = inst_33894);

(statearr_33985_34046[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (30))){
var state_33915__$1 = state_33915;
var statearr_33986_34047 = state_33915__$1;
(statearr_33986_34047[(2)] = null);

(statearr_33986_34047[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (10))){
var inst_33793 = (state_33915[(14)]);
var inst_33795 = (state_33915[(17)]);
var inst_33803 = cljs.core._nth.call(null,inst_33793,inst_33795);
var inst_33804 = cljs.core.nth.call(null,inst_33803,(0),null);
var inst_33805 = cljs.core.nth.call(null,inst_33803,(1),null);
var state_33915__$1 = (function (){var statearr_33987 = state_33915;
(statearr_33987[(26)] = inst_33804);

return statearr_33987;
})();
if(cljs.core.truth_(inst_33805)){
var statearr_33988_34048 = state_33915__$1;
(statearr_33988_34048[(1)] = (13));

} else {
var statearr_33989_34049 = state_33915__$1;
(statearr_33989_34049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (18))){
var inst_33840 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_33990_34050 = state_33915__$1;
(statearr_33990_34050[(2)] = inst_33840);

(statearr_33990_34050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (42))){
var state_33915__$1 = state_33915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33915__$1,(45),dchan);
} else {
if((state_val_33916 === (37))){
var inst_33883 = (state_33915[(23)]);
var inst_33874 = (state_33915[(25)]);
var inst_33783 = (state_33915[(11)]);
var inst_33883__$1 = cljs.core.first.call(null,inst_33874);
var inst_33884 = cljs.core.async.put_BANG_.call(null,inst_33883__$1,inst_33783,done);
var state_33915__$1 = (function (){var statearr_33991 = state_33915;
(statearr_33991[(23)] = inst_33883__$1);

return statearr_33991;
})();
if(cljs.core.truth_(inst_33884)){
var statearr_33992_34051 = state_33915__$1;
(statearr_33992_34051[(1)] = (39));

} else {
var statearr_33993_34052 = state_33915__$1;
(statearr_33993_34052[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (8))){
var inst_33794 = (state_33915[(16)]);
var inst_33795 = (state_33915[(17)]);
var inst_33797 = (inst_33795 < inst_33794);
var inst_33798 = inst_33797;
var state_33915__$1 = state_33915;
if(cljs.core.truth_(inst_33798)){
var statearr_33994_34053 = state_33915__$1;
(statearr_33994_34053[(1)] = (10));

} else {
var statearr_33995_34054 = state_33915__$1;
(statearr_33995_34054[(1)] = (11));

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
});})(c__33181__auto___34000,cs,m,dchan,dctr,done))
;
return ((function (switch__33091__auto__,c__33181__auto___34000,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33092__auto__ = null;
var cljs$core$async$mult_$_state_machine__33092__auto____0 = (function (){
var statearr_33996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33996[(0)] = cljs$core$async$mult_$_state_machine__33092__auto__);

(statearr_33996[(1)] = (1));

return statearr_33996;
});
var cljs$core$async$mult_$_state_machine__33092__auto____1 = (function (state_33915){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_33915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e33997){if((e33997 instanceof Object)){
var ex__33095__auto__ = e33997;
var statearr_33998_34055 = state_33915;
(statearr_33998_34055[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34056 = state_33915;
state_33915 = G__34056;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33092__auto__ = function(state_33915){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33092__auto____1.call(this,state_33915);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33092__auto____0;
cljs$core$async$mult_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33092__auto____1;
return cljs$core$async$mult_$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___34000,cs,m,dchan,dctr,done))
})();
var state__33183__auto__ = (function (){var statearr_33999 = f__33182__auto__.call(null);
(statearr_33999[(6)] = c__33181__auto___34000);

return statearr_33999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___34000,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34058 = arguments.length;
switch (G__34058) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,ch);
} else {
var m__30830__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,ch);
} else {
var m__30830__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m);
} else {
var m__30830__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,state_map);
} else {
var m__30830__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,mode);
} else {
var m__30830__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31382__auto__ = [];
var len__31375__auto___34070 = arguments.length;
var i__31376__auto___34071 = (0);
while(true){
if((i__31376__auto___34071 < len__31375__auto___34070)){
args__31382__auto__.push((arguments[i__31376__auto___34071]));

var G__34072 = (i__31376__auto___34071 + (1));
i__31376__auto___34071 = G__34072;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((3) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31383__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34064){
var map__34065 = p__34064;
var map__34065__$1 = ((((!((map__34065 == null)))?((((map__34065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34065):map__34065);
var opts = map__34065__$1;
var statearr_34067_34073 = state;
(statearr_34067_34073[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__34065,map__34065__$1,opts){
return (function (val){
var statearr_34068_34074 = state;
(statearr_34068_34074[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34065,map__34065__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_34069_34075 = state;
(statearr_34069_34075[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34060){
var G__34061 = cljs.core.first.call(null,seq34060);
var seq34060__$1 = cljs.core.next.call(null,seq34060);
var G__34062 = cljs.core.first.call(null,seq34060__$1);
var seq34060__$2 = cljs.core.next.call(null,seq34060__$1);
var G__34063 = cljs.core.first.call(null,seq34060__$2);
var seq34060__$3 = cljs.core.next.call(null,seq34060__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34061,G__34062,G__34063,seq34060__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34076 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34077){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34077 = meta34077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34078,meta34077__$1){
var self__ = this;
var _34078__$1 = this;
return (new cljs.core.async.t_cljs$core$async34076(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34077__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34078){
var self__ = this;
var _34078__$1 = this;
return self__.meta34077;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34076.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34076.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34076.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34076.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34076.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34076.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34076.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34076.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34076.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34077","meta34077",2002402576,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34076";

cljs.core.async.t_cljs$core$async34076.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34076");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34076 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34076(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34077){
return (new cljs.core.async.t_cljs$core$async34076(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34077));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34076(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33181__auto___34240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___34240,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___34240,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34180){
var state_val_34181 = (state_34180[(1)]);
if((state_val_34181 === (7))){
var inst_34095 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
var statearr_34182_34241 = state_34180__$1;
(statearr_34182_34241[(2)] = inst_34095);

(statearr_34182_34241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (20))){
var inst_34107 = (state_34180[(7)]);
var state_34180__$1 = state_34180;
var statearr_34183_34242 = state_34180__$1;
(statearr_34183_34242[(2)] = inst_34107);

(statearr_34183_34242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (27))){
var state_34180__$1 = state_34180;
var statearr_34184_34243 = state_34180__$1;
(statearr_34184_34243[(2)] = null);

(statearr_34184_34243[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (1))){
var inst_34082 = (state_34180[(8)]);
var inst_34082__$1 = calc_state.call(null);
var inst_34084 = (inst_34082__$1 == null);
var inst_34085 = cljs.core.not.call(null,inst_34084);
var state_34180__$1 = (function (){var statearr_34185 = state_34180;
(statearr_34185[(8)] = inst_34082__$1);

return statearr_34185;
})();
if(inst_34085){
var statearr_34186_34244 = state_34180__$1;
(statearr_34186_34244[(1)] = (2));

} else {
var statearr_34187_34245 = state_34180__$1;
(statearr_34187_34245[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (24))){
var inst_34140 = (state_34180[(9)]);
var inst_34154 = (state_34180[(10)]);
var inst_34131 = (state_34180[(11)]);
var inst_34154__$1 = inst_34131.call(null,inst_34140);
var state_34180__$1 = (function (){var statearr_34188 = state_34180;
(statearr_34188[(10)] = inst_34154__$1);

return statearr_34188;
})();
if(cljs.core.truth_(inst_34154__$1)){
var statearr_34189_34246 = state_34180__$1;
(statearr_34189_34246[(1)] = (29));

} else {
var statearr_34190_34247 = state_34180__$1;
(statearr_34190_34247[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (4))){
var inst_34098 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
if(cljs.core.truth_(inst_34098)){
var statearr_34191_34248 = state_34180__$1;
(statearr_34191_34248[(1)] = (8));

} else {
var statearr_34192_34249 = state_34180__$1;
(statearr_34192_34249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (15))){
var inst_34125 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
if(cljs.core.truth_(inst_34125)){
var statearr_34193_34250 = state_34180__$1;
(statearr_34193_34250[(1)] = (19));

} else {
var statearr_34194_34251 = state_34180__$1;
(statearr_34194_34251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (21))){
var inst_34130 = (state_34180[(12)]);
var inst_34130__$1 = (state_34180[(2)]);
var inst_34131 = cljs.core.get.call(null,inst_34130__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34132 = cljs.core.get.call(null,inst_34130__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34133 = cljs.core.get.call(null,inst_34130__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34180__$1 = (function (){var statearr_34195 = state_34180;
(statearr_34195[(12)] = inst_34130__$1);

(statearr_34195[(13)] = inst_34132);

(statearr_34195[(11)] = inst_34131);

return statearr_34195;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34180__$1,(22),inst_34133);
} else {
if((state_val_34181 === (31))){
var inst_34162 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
if(cljs.core.truth_(inst_34162)){
var statearr_34196_34252 = state_34180__$1;
(statearr_34196_34252[(1)] = (32));

} else {
var statearr_34197_34253 = state_34180__$1;
(statearr_34197_34253[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (32))){
var inst_34139 = (state_34180[(14)]);
var state_34180__$1 = state_34180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34180__$1,(35),out,inst_34139);
} else {
if((state_val_34181 === (33))){
var inst_34130 = (state_34180[(12)]);
var inst_34107 = inst_34130;
var state_34180__$1 = (function (){var statearr_34198 = state_34180;
(statearr_34198[(7)] = inst_34107);

return statearr_34198;
})();
var statearr_34199_34254 = state_34180__$1;
(statearr_34199_34254[(2)] = null);

(statearr_34199_34254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (13))){
var inst_34107 = (state_34180[(7)]);
var inst_34114 = inst_34107.cljs$lang$protocol_mask$partition0$;
var inst_34115 = (inst_34114 & (64));
var inst_34116 = inst_34107.cljs$core$ISeq$;
var inst_34117 = (cljs.core.PROTOCOL_SENTINEL === inst_34116);
var inst_34118 = (inst_34115) || (inst_34117);
var state_34180__$1 = state_34180;
if(cljs.core.truth_(inst_34118)){
var statearr_34200_34255 = state_34180__$1;
(statearr_34200_34255[(1)] = (16));

} else {
var statearr_34201_34256 = state_34180__$1;
(statearr_34201_34256[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (22))){
var inst_34139 = (state_34180[(14)]);
var inst_34140 = (state_34180[(9)]);
var inst_34138 = (state_34180[(2)]);
var inst_34139__$1 = cljs.core.nth.call(null,inst_34138,(0),null);
var inst_34140__$1 = cljs.core.nth.call(null,inst_34138,(1),null);
var inst_34141 = (inst_34139__$1 == null);
var inst_34142 = cljs.core._EQ_.call(null,inst_34140__$1,change);
var inst_34143 = (inst_34141) || (inst_34142);
var state_34180__$1 = (function (){var statearr_34202 = state_34180;
(statearr_34202[(14)] = inst_34139__$1);

(statearr_34202[(9)] = inst_34140__$1);

return statearr_34202;
})();
if(cljs.core.truth_(inst_34143)){
var statearr_34203_34257 = state_34180__$1;
(statearr_34203_34257[(1)] = (23));

} else {
var statearr_34204_34258 = state_34180__$1;
(statearr_34204_34258[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (36))){
var inst_34130 = (state_34180[(12)]);
var inst_34107 = inst_34130;
var state_34180__$1 = (function (){var statearr_34205 = state_34180;
(statearr_34205[(7)] = inst_34107);

return statearr_34205;
})();
var statearr_34206_34259 = state_34180__$1;
(statearr_34206_34259[(2)] = null);

(statearr_34206_34259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (29))){
var inst_34154 = (state_34180[(10)]);
var state_34180__$1 = state_34180;
var statearr_34207_34260 = state_34180__$1;
(statearr_34207_34260[(2)] = inst_34154);

(statearr_34207_34260[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (6))){
var state_34180__$1 = state_34180;
var statearr_34208_34261 = state_34180__$1;
(statearr_34208_34261[(2)] = false);

(statearr_34208_34261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (28))){
var inst_34150 = (state_34180[(2)]);
var inst_34151 = calc_state.call(null);
var inst_34107 = inst_34151;
var state_34180__$1 = (function (){var statearr_34209 = state_34180;
(statearr_34209[(7)] = inst_34107);

(statearr_34209[(15)] = inst_34150);

return statearr_34209;
})();
var statearr_34210_34262 = state_34180__$1;
(statearr_34210_34262[(2)] = null);

(statearr_34210_34262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (25))){
var inst_34176 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
var statearr_34211_34263 = state_34180__$1;
(statearr_34211_34263[(2)] = inst_34176);

(statearr_34211_34263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (34))){
var inst_34174 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
var statearr_34212_34264 = state_34180__$1;
(statearr_34212_34264[(2)] = inst_34174);

(statearr_34212_34264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (17))){
var state_34180__$1 = state_34180;
var statearr_34213_34265 = state_34180__$1;
(statearr_34213_34265[(2)] = false);

(statearr_34213_34265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (3))){
var state_34180__$1 = state_34180;
var statearr_34214_34266 = state_34180__$1;
(statearr_34214_34266[(2)] = false);

(statearr_34214_34266[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (12))){
var inst_34178 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34180__$1,inst_34178);
} else {
if((state_val_34181 === (2))){
var inst_34082 = (state_34180[(8)]);
var inst_34087 = inst_34082.cljs$lang$protocol_mask$partition0$;
var inst_34088 = (inst_34087 & (64));
var inst_34089 = inst_34082.cljs$core$ISeq$;
var inst_34090 = (cljs.core.PROTOCOL_SENTINEL === inst_34089);
var inst_34091 = (inst_34088) || (inst_34090);
var state_34180__$1 = state_34180;
if(cljs.core.truth_(inst_34091)){
var statearr_34215_34267 = state_34180__$1;
(statearr_34215_34267[(1)] = (5));

} else {
var statearr_34216_34268 = state_34180__$1;
(statearr_34216_34268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (23))){
var inst_34139 = (state_34180[(14)]);
var inst_34145 = (inst_34139 == null);
var state_34180__$1 = state_34180;
if(cljs.core.truth_(inst_34145)){
var statearr_34217_34269 = state_34180__$1;
(statearr_34217_34269[(1)] = (26));

} else {
var statearr_34218_34270 = state_34180__$1;
(statearr_34218_34270[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (35))){
var inst_34165 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
if(cljs.core.truth_(inst_34165)){
var statearr_34219_34271 = state_34180__$1;
(statearr_34219_34271[(1)] = (36));

} else {
var statearr_34220_34272 = state_34180__$1;
(statearr_34220_34272[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (19))){
var inst_34107 = (state_34180[(7)]);
var inst_34127 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34107);
var state_34180__$1 = state_34180;
var statearr_34221_34273 = state_34180__$1;
(statearr_34221_34273[(2)] = inst_34127);

(statearr_34221_34273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (11))){
var inst_34107 = (state_34180[(7)]);
var inst_34111 = (inst_34107 == null);
var inst_34112 = cljs.core.not.call(null,inst_34111);
var state_34180__$1 = state_34180;
if(inst_34112){
var statearr_34222_34274 = state_34180__$1;
(statearr_34222_34274[(1)] = (13));

} else {
var statearr_34223_34275 = state_34180__$1;
(statearr_34223_34275[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (9))){
var inst_34082 = (state_34180[(8)]);
var state_34180__$1 = state_34180;
var statearr_34224_34276 = state_34180__$1;
(statearr_34224_34276[(2)] = inst_34082);

(statearr_34224_34276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (5))){
var state_34180__$1 = state_34180;
var statearr_34225_34277 = state_34180__$1;
(statearr_34225_34277[(2)] = true);

(statearr_34225_34277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (14))){
var state_34180__$1 = state_34180;
var statearr_34226_34278 = state_34180__$1;
(statearr_34226_34278[(2)] = false);

(statearr_34226_34278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (26))){
var inst_34140 = (state_34180[(9)]);
var inst_34147 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34140);
var state_34180__$1 = state_34180;
var statearr_34227_34279 = state_34180__$1;
(statearr_34227_34279[(2)] = inst_34147);

(statearr_34227_34279[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (16))){
var state_34180__$1 = state_34180;
var statearr_34228_34280 = state_34180__$1;
(statearr_34228_34280[(2)] = true);

(statearr_34228_34280[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (38))){
var inst_34170 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
var statearr_34229_34281 = state_34180__$1;
(statearr_34229_34281[(2)] = inst_34170);

(statearr_34229_34281[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (30))){
var inst_34132 = (state_34180[(13)]);
var inst_34140 = (state_34180[(9)]);
var inst_34131 = (state_34180[(11)]);
var inst_34157 = cljs.core.empty_QMARK_.call(null,inst_34131);
var inst_34158 = inst_34132.call(null,inst_34140);
var inst_34159 = cljs.core.not.call(null,inst_34158);
var inst_34160 = (inst_34157) && (inst_34159);
var state_34180__$1 = state_34180;
var statearr_34230_34282 = state_34180__$1;
(statearr_34230_34282[(2)] = inst_34160);

(statearr_34230_34282[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (10))){
var inst_34082 = (state_34180[(8)]);
var inst_34103 = (state_34180[(2)]);
var inst_34104 = cljs.core.get.call(null,inst_34103,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34105 = cljs.core.get.call(null,inst_34103,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34106 = cljs.core.get.call(null,inst_34103,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34107 = inst_34082;
var state_34180__$1 = (function (){var statearr_34231 = state_34180;
(statearr_34231[(7)] = inst_34107);

(statearr_34231[(16)] = inst_34104);

(statearr_34231[(17)] = inst_34106);

(statearr_34231[(18)] = inst_34105);

return statearr_34231;
})();
var statearr_34232_34283 = state_34180__$1;
(statearr_34232_34283[(2)] = null);

(statearr_34232_34283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (18))){
var inst_34122 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
var statearr_34233_34284 = state_34180__$1;
(statearr_34233_34284[(2)] = inst_34122);

(statearr_34233_34284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (37))){
var state_34180__$1 = state_34180;
var statearr_34234_34285 = state_34180__$1;
(statearr_34234_34285[(2)] = null);

(statearr_34234_34285[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (8))){
var inst_34082 = (state_34180[(8)]);
var inst_34100 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34082);
var state_34180__$1 = state_34180;
var statearr_34235_34286 = state_34180__$1;
(statearr_34235_34286[(2)] = inst_34100);

(statearr_34235_34286[(1)] = (10));


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
});})(c__33181__auto___34240,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33091__auto__,c__33181__auto___34240,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33092__auto__ = null;
var cljs$core$async$mix_$_state_machine__33092__auto____0 = (function (){
var statearr_34236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34236[(0)] = cljs$core$async$mix_$_state_machine__33092__auto__);

(statearr_34236[(1)] = (1));

return statearr_34236;
});
var cljs$core$async$mix_$_state_machine__33092__auto____1 = (function (state_34180){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_34180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e34237){if((e34237 instanceof Object)){
var ex__33095__auto__ = e34237;
var statearr_34238_34287 = state_34180;
(statearr_34238_34287[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34288 = state_34180;
state_34180 = G__34288;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33092__auto__ = function(state_34180){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33092__auto____1.call(this,state_34180);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33092__auto____0;
cljs$core$async$mix_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33092__auto____1;
return cljs$core$async$mix_$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___34240,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33183__auto__ = (function (){var statearr_34239 = f__33182__auto__.call(null);
(statearr_34239[(6)] = c__33181__auto___34240);

return statearr_34239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___34240,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30829__auto__ = (((p == null))?null:p);
var m__30830__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30830__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30829__auto__ = (((p == null))?null:p);
var m__30830__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,p,v,ch);
} else {
var m__30830__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34290 = arguments.length;
switch (G__34290) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30829__auto__ = (((p == null))?null:p);
var m__30830__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,p);
} else {
var m__30830__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30829__auto__ = (((p == null))?null:p);
var m__30830__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,p,v);
} else {
var m__30830__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34294 = arguments.length;
switch (G__34294) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30096__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30096__auto__,mults){
return (function (p1__34292_SHARP_){
if(cljs.core.truth_(p1__34292_SHARP_.call(null,topic))){
return p1__34292_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34292_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30096__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34295 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34295 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34296){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34296 = meta34296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34297,meta34296__$1){
var self__ = this;
var _34297__$1 = this;
return (new cljs.core.async.t_cljs$core$async34295(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34296__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34297){
var self__ = this;
var _34297__$1 = this;
return self__.meta34296;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34295.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34295.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34295.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34295.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34295.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34295.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34295.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34296","meta34296",-591035403,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34295.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34295";

cljs.core.async.t_cljs$core$async34295.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34295");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34295 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34295(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34296){
return (new cljs.core.async.t_cljs$core$async34295(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34296));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34295(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33181__auto___34415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___34415,mults,ensure_mult,p){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___34415,mults,ensure_mult,p){
return (function (state_34369){
var state_val_34370 = (state_34369[(1)]);
if((state_val_34370 === (7))){
var inst_34365 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34371_34416 = state_34369__$1;
(statearr_34371_34416[(2)] = inst_34365);

(statearr_34371_34416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (20))){
var state_34369__$1 = state_34369;
var statearr_34372_34417 = state_34369__$1;
(statearr_34372_34417[(2)] = null);

(statearr_34372_34417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (1))){
var state_34369__$1 = state_34369;
var statearr_34373_34418 = state_34369__$1;
(statearr_34373_34418[(2)] = null);

(statearr_34373_34418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (24))){
var inst_34348 = (state_34369[(7)]);
var inst_34357 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34348);
var state_34369__$1 = state_34369;
var statearr_34374_34419 = state_34369__$1;
(statearr_34374_34419[(2)] = inst_34357);

(statearr_34374_34419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (4))){
var inst_34300 = (state_34369[(8)]);
var inst_34300__$1 = (state_34369[(2)]);
var inst_34301 = (inst_34300__$1 == null);
var state_34369__$1 = (function (){var statearr_34375 = state_34369;
(statearr_34375[(8)] = inst_34300__$1);

return statearr_34375;
})();
if(cljs.core.truth_(inst_34301)){
var statearr_34376_34420 = state_34369__$1;
(statearr_34376_34420[(1)] = (5));

} else {
var statearr_34377_34421 = state_34369__$1;
(statearr_34377_34421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (15))){
var inst_34342 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34378_34422 = state_34369__$1;
(statearr_34378_34422[(2)] = inst_34342);

(statearr_34378_34422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (21))){
var inst_34362 = (state_34369[(2)]);
var state_34369__$1 = (function (){var statearr_34379 = state_34369;
(statearr_34379[(9)] = inst_34362);

return statearr_34379;
})();
var statearr_34380_34423 = state_34369__$1;
(statearr_34380_34423[(2)] = null);

(statearr_34380_34423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (13))){
var inst_34324 = (state_34369[(10)]);
var inst_34326 = cljs.core.chunked_seq_QMARK_.call(null,inst_34324);
var state_34369__$1 = state_34369;
if(inst_34326){
var statearr_34381_34424 = state_34369__$1;
(statearr_34381_34424[(1)] = (16));

} else {
var statearr_34382_34425 = state_34369__$1;
(statearr_34382_34425[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (22))){
var inst_34354 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
if(cljs.core.truth_(inst_34354)){
var statearr_34383_34426 = state_34369__$1;
(statearr_34383_34426[(1)] = (23));

} else {
var statearr_34384_34427 = state_34369__$1;
(statearr_34384_34427[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (6))){
var inst_34348 = (state_34369[(7)]);
var inst_34300 = (state_34369[(8)]);
var inst_34350 = (state_34369[(11)]);
var inst_34348__$1 = topic_fn.call(null,inst_34300);
var inst_34349 = cljs.core.deref.call(null,mults);
var inst_34350__$1 = cljs.core.get.call(null,inst_34349,inst_34348__$1);
var state_34369__$1 = (function (){var statearr_34385 = state_34369;
(statearr_34385[(7)] = inst_34348__$1);

(statearr_34385[(11)] = inst_34350__$1);

return statearr_34385;
})();
if(cljs.core.truth_(inst_34350__$1)){
var statearr_34386_34428 = state_34369__$1;
(statearr_34386_34428[(1)] = (19));

} else {
var statearr_34387_34429 = state_34369__$1;
(statearr_34387_34429[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (25))){
var inst_34359 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34388_34430 = state_34369__$1;
(statearr_34388_34430[(2)] = inst_34359);

(statearr_34388_34430[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (17))){
var inst_34324 = (state_34369[(10)]);
var inst_34333 = cljs.core.first.call(null,inst_34324);
var inst_34334 = cljs.core.async.muxch_STAR_.call(null,inst_34333);
var inst_34335 = cljs.core.async.close_BANG_.call(null,inst_34334);
var inst_34336 = cljs.core.next.call(null,inst_34324);
var inst_34310 = inst_34336;
var inst_34311 = null;
var inst_34312 = (0);
var inst_34313 = (0);
var state_34369__$1 = (function (){var statearr_34389 = state_34369;
(statearr_34389[(12)] = inst_34310);

(statearr_34389[(13)] = inst_34335);

(statearr_34389[(14)] = inst_34313);

(statearr_34389[(15)] = inst_34311);

(statearr_34389[(16)] = inst_34312);

return statearr_34389;
})();
var statearr_34390_34431 = state_34369__$1;
(statearr_34390_34431[(2)] = null);

(statearr_34390_34431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (3))){
var inst_34367 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34369__$1,inst_34367);
} else {
if((state_val_34370 === (12))){
var inst_34344 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34391_34432 = state_34369__$1;
(statearr_34391_34432[(2)] = inst_34344);

(statearr_34391_34432[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (2))){
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34369__$1,(4),ch);
} else {
if((state_val_34370 === (23))){
var state_34369__$1 = state_34369;
var statearr_34392_34433 = state_34369__$1;
(statearr_34392_34433[(2)] = null);

(statearr_34392_34433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (19))){
var inst_34300 = (state_34369[(8)]);
var inst_34350 = (state_34369[(11)]);
var inst_34352 = cljs.core.async.muxch_STAR_.call(null,inst_34350);
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34369__$1,(22),inst_34352,inst_34300);
} else {
if((state_val_34370 === (11))){
var inst_34310 = (state_34369[(12)]);
var inst_34324 = (state_34369[(10)]);
var inst_34324__$1 = cljs.core.seq.call(null,inst_34310);
var state_34369__$1 = (function (){var statearr_34393 = state_34369;
(statearr_34393[(10)] = inst_34324__$1);

return statearr_34393;
})();
if(inst_34324__$1){
var statearr_34394_34434 = state_34369__$1;
(statearr_34394_34434[(1)] = (13));

} else {
var statearr_34395_34435 = state_34369__$1;
(statearr_34395_34435[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (9))){
var inst_34346 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34396_34436 = state_34369__$1;
(statearr_34396_34436[(2)] = inst_34346);

(statearr_34396_34436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (5))){
var inst_34307 = cljs.core.deref.call(null,mults);
var inst_34308 = cljs.core.vals.call(null,inst_34307);
var inst_34309 = cljs.core.seq.call(null,inst_34308);
var inst_34310 = inst_34309;
var inst_34311 = null;
var inst_34312 = (0);
var inst_34313 = (0);
var state_34369__$1 = (function (){var statearr_34397 = state_34369;
(statearr_34397[(12)] = inst_34310);

(statearr_34397[(14)] = inst_34313);

(statearr_34397[(15)] = inst_34311);

(statearr_34397[(16)] = inst_34312);

return statearr_34397;
})();
var statearr_34398_34437 = state_34369__$1;
(statearr_34398_34437[(2)] = null);

(statearr_34398_34437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (14))){
var state_34369__$1 = state_34369;
var statearr_34402_34438 = state_34369__$1;
(statearr_34402_34438[(2)] = null);

(statearr_34402_34438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (16))){
var inst_34324 = (state_34369[(10)]);
var inst_34328 = cljs.core.chunk_first.call(null,inst_34324);
var inst_34329 = cljs.core.chunk_rest.call(null,inst_34324);
var inst_34330 = cljs.core.count.call(null,inst_34328);
var inst_34310 = inst_34329;
var inst_34311 = inst_34328;
var inst_34312 = inst_34330;
var inst_34313 = (0);
var state_34369__$1 = (function (){var statearr_34403 = state_34369;
(statearr_34403[(12)] = inst_34310);

(statearr_34403[(14)] = inst_34313);

(statearr_34403[(15)] = inst_34311);

(statearr_34403[(16)] = inst_34312);

return statearr_34403;
})();
var statearr_34404_34439 = state_34369__$1;
(statearr_34404_34439[(2)] = null);

(statearr_34404_34439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (10))){
var inst_34310 = (state_34369[(12)]);
var inst_34313 = (state_34369[(14)]);
var inst_34311 = (state_34369[(15)]);
var inst_34312 = (state_34369[(16)]);
var inst_34318 = cljs.core._nth.call(null,inst_34311,inst_34313);
var inst_34319 = cljs.core.async.muxch_STAR_.call(null,inst_34318);
var inst_34320 = cljs.core.async.close_BANG_.call(null,inst_34319);
var inst_34321 = (inst_34313 + (1));
var tmp34399 = inst_34310;
var tmp34400 = inst_34311;
var tmp34401 = inst_34312;
var inst_34310__$1 = tmp34399;
var inst_34311__$1 = tmp34400;
var inst_34312__$1 = tmp34401;
var inst_34313__$1 = inst_34321;
var state_34369__$1 = (function (){var statearr_34405 = state_34369;
(statearr_34405[(12)] = inst_34310__$1);

(statearr_34405[(17)] = inst_34320);

(statearr_34405[(14)] = inst_34313__$1);

(statearr_34405[(15)] = inst_34311__$1);

(statearr_34405[(16)] = inst_34312__$1);

return statearr_34405;
})();
var statearr_34406_34440 = state_34369__$1;
(statearr_34406_34440[(2)] = null);

(statearr_34406_34440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (18))){
var inst_34339 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34407_34441 = state_34369__$1;
(statearr_34407_34441[(2)] = inst_34339);

(statearr_34407_34441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (8))){
var inst_34313 = (state_34369[(14)]);
var inst_34312 = (state_34369[(16)]);
var inst_34315 = (inst_34313 < inst_34312);
var inst_34316 = inst_34315;
var state_34369__$1 = state_34369;
if(cljs.core.truth_(inst_34316)){
var statearr_34408_34442 = state_34369__$1;
(statearr_34408_34442[(1)] = (10));

} else {
var statearr_34409_34443 = state_34369__$1;
(statearr_34409_34443[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__33181__auto___34415,mults,ensure_mult,p))
;
return ((function (switch__33091__auto__,c__33181__auto___34415,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33092__auto__ = null;
var cljs$core$async$state_machine__33092__auto____0 = (function (){
var statearr_34410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34410[(0)] = cljs$core$async$state_machine__33092__auto__);

(statearr_34410[(1)] = (1));

return statearr_34410;
});
var cljs$core$async$state_machine__33092__auto____1 = (function (state_34369){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_34369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e34411){if((e34411 instanceof Object)){
var ex__33095__auto__ = e34411;
var statearr_34412_34444 = state_34369;
(statearr_34412_34444[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34445 = state_34369;
state_34369 = G__34445;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$state_machine__33092__auto__ = function(state_34369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33092__auto____1.call(this,state_34369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33092__auto____0;
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33092__auto____1;
return cljs$core$async$state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___34415,mults,ensure_mult,p))
})();
var state__33183__auto__ = (function (){var statearr_34413 = f__33182__auto__.call(null);
(statearr_34413[(6)] = c__33181__auto___34415);

return statearr_34413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___34415,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34447 = arguments.length;
switch (G__34447) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34450 = arguments.length;
switch (G__34450) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34453 = arguments.length;
switch (G__34453) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33181__auto___34520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___34520,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___34520,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34492){
var state_val_34493 = (state_34492[(1)]);
if((state_val_34493 === (7))){
var state_34492__$1 = state_34492;
var statearr_34494_34521 = state_34492__$1;
(statearr_34494_34521[(2)] = null);

(statearr_34494_34521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (1))){
var state_34492__$1 = state_34492;
var statearr_34495_34522 = state_34492__$1;
(statearr_34495_34522[(2)] = null);

(statearr_34495_34522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (4))){
var inst_34456 = (state_34492[(7)]);
var inst_34458 = (inst_34456 < cnt);
var state_34492__$1 = state_34492;
if(cljs.core.truth_(inst_34458)){
var statearr_34496_34523 = state_34492__$1;
(statearr_34496_34523[(1)] = (6));

} else {
var statearr_34497_34524 = state_34492__$1;
(statearr_34497_34524[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (15))){
var inst_34488 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
var statearr_34498_34525 = state_34492__$1;
(statearr_34498_34525[(2)] = inst_34488);

(statearr_34498_34525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (13))){
var inst_34481 = cljs.core.async.close_BANG_.call(null,out);
var state_34492__$1 = state_34492;
var statearr_34499_34526 = state_34492__$1;
(statearr_34499_34526[(2)] = inst_34481);

(statearr_34499_34526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (6))){
var state_34492__$1 = state_34492;
var statearr_34500_34527 = state_34492__$1;
(statearr_34500_34527[(2)] = null);

(statearr_34500_34527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (3))){
var inst_34490 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34492__$1,inst_34490);
} else {
if((state_val_34493 === (12))){
var inst_34478 = (state_34492[(8)]);
var inst_34478__$1 = (state_34492[(2)]);
var inst_34479 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34478__$1);
var state_34492__$1 = (function (){var statearr_34501 = state_34492;
(statearr_34501[(8)] = inst_34478__$1);

return statearr_34501;
})();
if(cljs.core.truth_(inst_34479)){
var statearr_34502_34528 = state_34492__$1;
(statearr_34502_34528[(1)] = (13));

} else {
var statearr_34503_34529 = state_34492__$1;
(statearr_34503_34529[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (2))){
var inst_34455 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34456 = (0);
var state_34492__$1 = (function (){var statearr_34504 = state_34492;
(statearr_34504[(9)] = inst_34455);

(statearr_34504[(7)] = inst_34456);

return statearr_34504;
})();
var statearr_34505_34530 = state_34492__$1;
(statearr_34505_34530[(2)] = null);

(statearr_34505_34530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (11))){
var inst_34456 = (state_34492[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34492,(10),Object,null,(9));
var inst_34465 = chs__$1.call(null,inst_34456);
var inst_34466 = done.call(null,inst_34456);
var inst_34467 = cljs.core.async.take_BANG_.call(null,inst_34465,inst_34466);
var state_34492__$1 = state_34492;
var statearr_34506_34531 = state_34492__$1;
(statearr_34506_34531[(2)] = inst_34467);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34492__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (9))){
var inst_34456 = (state_34492[(7)]);
var inst_34469 = (state_34492[(2)]);
var inst_34470 = (inst_34456 + (1));
var inst_34456__$1 = inst_34470;
var state_34492__$1 = (function (){var statearr_34507 = state_34492;
(statearr_34507[(7)] = inst_34456__$1);

(statearr_34507[(10)] = inst_34469);

return statearr_34507;
})();
var statearr_34508_34532 = state_34492__$1;
(statearr_34508_34532[(2)] = null);

(statearr_34508_34532[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (5))){
var inst_34476 = (state_34492[(2)]);
var state_34492__$1 = (function (){var statearr_34509 = state_34492;
(statearr_34509[(11)] = inst_34476);

return statearr_34509;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34492__$1,(12),dchan);
} else {
if((state_val_34493 === (14))){
var inst_34478 = (state_34492[(8)]);
var inst_34483 = cljs.core.apply.call(null,f,inst_34478);
var state_34492__$1 = state_34492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34492__$1,(16),out,inst_34483);
} else {
if((state_val_34493 === (16))){
var inst_34485 = (state_34492[(2)]);
var state_34492__$1 = (function (){var statearr_34510 = state_34492;
(statearr_34510[(12)] = inst_34485);

return statearr_34510;
})();
var statearr_34511_34533 = state_34492__$1;
(statearr_34511_34533[(2)] = null);

(statearr_34511_34533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (10))){
var inst_34460 = (state_34492[(2)]);
var inst_34461 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34492__$1 = (function (){var statearr_34512 = state_34492;
(statearr_34512[(13)] = inst_34460);

return statearr_34512;
})();
var statearr_34513_34534 = state_34492__$1;
(statearr_34513_34534[(2)] = inst_34461);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34492__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (8))){
var inst_34474 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
var statearr_34514_34535 = state_34492__$1;
(statearr_34514_34535[(2)] = inst_34474);

(statearr_34514_34535[(1)] = (5));


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
});})(c__33181__auto___34520,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33091__auto__,c__33181__auto___34520,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33092__auto__ = null;
var cljs$core$async$state_machine__33092__auto____0 = (function (){
var statearr_34515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34515[(0)] = cljs$core$async$state_machine__33092__auto__);

(statearr_34515[(1)] = (1));

return statearr_34515;
});
var cljs$core$async$state_machine__33092__auto____1 = (function (state_34492){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_34492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e34516){if((e34516 instanceof Object)){
var ex__33095__auto__ = e34516;
var statearr_34517_34536 = state_34492;
(statearr_34517_34536[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34537 = state_34492;
state_34492 = G__34537;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$state_machine__33092__auto__ = function(state_34492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33092__auto____1.call(this,state_34492);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33092__auto____0;
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33092__auto____1;
return cljs$core$async$state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___34520,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33183__auto__ = (function (){var statearr_34518 = f__33182__auto__.call(null);
(statearr_34518[(6)] = c__33181__auto___34520);

return statearr_34518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___34520,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34540 = arguments.length;
switch (G__34540) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33181__auto___34594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___34594,out){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___34594,out){
return (function (state_34572){
var state_val_34573 = (state_34572[(1)]);
if((state_val_34573 === (7))){
var inst_34552 = (state_34572[(7)]);
var inst_34551 = (state_34572[(8)]);
var inst_34551__$1 = (state_34572[(2)]);
var inst_34552__$1 = cljs.core.nth.call(null,inst_34551__$1,(0),null);
var inst_34553 = cljs.core.nth.call(null,inst_34551__$1,(1),null);
var inst_34554 = (inst_34552__$1 == null);
var state_34572__$1 = (function (){var statearr_34574 = state_34572;
(statearr_34574[(7)] = inst_34552__$1);

(statearr_34574[(9)] = inst_34553);

(statearr_34574[(8)] = inst_34551__$1);

return statearr_34574;
})();
if(cljs.core.truth_(inst_34554)){
var statearr_34575_34595 = state_34572__$1;
(statearr_34575_34595[(1)] = (8));

} else {
var statearr_34576_34596 = state_34572__$1;
(statearr_34576_34596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (1))){
var inst_34541 = cljs.core.vec.call(null,chs);
var inst_34542 = inst_34541;
var state_34572__$1 = (function (){var statearr_34577 = state_34572;
(statearr_34577[(10)] = inst_34542);

return statearr_34577;
})();
var statearr_34578_34597 = state_34572__$1;
(statearr_34578_34597[(2)] = null);

(statearr_34578_34597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (4))){
var inst_34542 = (state_34572[(10)]);
var state_34572__$1 = state_34572;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34572__$1,(7),inst_34542);
} else {
if((state_val_34573 === (6))){
var inst_34568 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
var statearr_34579_34598 = state_34572__$1;
(statearr_34579_34598[(2)] = inst_34568);

(statearr_34579_34598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (3))){
var inst_34570 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34572__$1,inst_34570);
} else {
if((state_val_34573 === (2))){
var inst_34542 = (state_34572[(10)]);
var inst_34544 = cljs.core.count.call(null,inst_34542);
var inst_34545 = (inst_34544 > (0));
var state_34572__$1 = state_34572;
if(cljs.core.truth_(inst_34545)){
var statearr_34581_34599 = state_34572__$1;
(statearr_34581_34599[(1)] = (4));

} else {
var statearr_34582_34600 = state_34572__$1;
(statearr_34582_34600[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (11))){
var inst_34542 = (state_34572[(10)]);
var inst_34561 = (state_34572[(2)]);
var tmp34580 = inst_34542;
var inst_34542__$1 = tmp34580;
var state_34572__$1 = (function (){var statearr_34583 = state_34572;
(statearr_34583[(10)] = inst_34542__$1);

(statearr_34583[(11)] = inst_34561);

return statearr_34583;
})();
var statearr_34584_34601 = state_34572__$1;
(statearr_34584_34601[(2)] = null);

(statearr_34584_34601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (9))){
var inst_34552 = (state_34572[(7)]);
var state_34572__$1 = state_34572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34572__$1,(11),out,inst_34552);
} else {
if((state_val_34573 === (5))){
var inst_34566 = cljs.core.async.close_BANG_.call(null,out);
var state_34572__$1 = state_34572;
var statearr_34585_34602 = state_34572__$1;
(statearr_34585_34602[(2)] = inst_34566);

(statearr_34585_34602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (10))){
var inst_34564 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
var statearr_34586_34603 = state_34572__$1;
(statearr_34586_34603[(2)] = inst_34564);

(statearr_34586_34603[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (8))){
var inst_34542 = (state_34572[(10)]);
var inst_34552 = (state_34572[(7)]);
var inst_34553 = (state_34572[(9)]);
var inst_34551 = (state_34572[(8)]);
var inst_34556 = (function (){var cs = inst_34542;
var vec__34547 = inst_34551;
var v = inst_34552;
var c = inst_34553;
return ((function (cs,vec__34547,v,c,inst_34542,inst_34552,inst_34553,inst_34551,state_val_34573,c__33181__auto___34594,out){
return (function (p1__34538_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34538_SHARP_);
});
;})(cs,vec__34547,v,c,inst_34542,inst_34552,inst_34553,inst_34551,state_val_34573,c__33181__auto___34594,out))
})();
var inst_34557 = cljs.core.filterv.call(null,inst_34556,inst_34542);
var inst_34542__$1 = inst_34557;
var state_34572__$1 = (function (){var statearr_34587 = state_34572;
(statearr_34587[(10)] = inst_34542__$1);

return statearr_34587;
})();
var statearr_34588_34604 = state_34572__$1;
(statearr_34588_34604[(2)] = null);

(statearr_34588_34604[(1)] = (2));


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
});})(c__33181__auto___34594,out))
;
return ((function (switch__33091__auto__,c__33181__auto___34594,out){
return (function() {
var cljs$core$async$state_machine__33092__auto__ = null;
var cljs$core$async$state_machine__33092__auto____0 = (function (){
var statearr_34589 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34589[(0)] = cljs$core$async$state_machine__33092__auto__);

(statearr_34589[(1)] = (1));

return statearr_34589;
});
var cljs$core$async$state_machine__33092__auto____1 = (function (state_34572){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_34572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e34590){if((e34590 instanceof Object)){
var ex__33095__auto__ = e34590;
var statearr_34591_34605 = state_34572;
(statearr_34591_34605[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34606 = state_34572;
state_34572 = G__34606;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$state_machine__33092__auto__ = function(state_34572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33092__auto____1.call(this,state_34572);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33092__auto____0;
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33092__auto____1;
return cljs$core$async$state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___34594,out))
})();
var state__33183__auto__ = (function (){var statearr_34592 = f__33182__auto__.call(null);
(statearr_34592[(6)] = c__33181__auto___34594);

return statearr_34592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___34594,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34608 = arguments.length;
switch (G__34608) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33181__auto___34653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___34653,out){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___34653,out){
return (function (state_34632){
var state_val_34633 = (state_34632[(1)]);
if((state_val_34633 === (7))){
var inst_34614 = (state_34632[(7)]);
var inst_34614__$1 = (state_34632[(2)]);
var inst_34615 = (inst_34614__$1 == null);
var inst_34616 = cljs.core.not.call(null,inst_34615);
var state_34632__$1 = (function (){var statearr_34634 = state_34632;
(statearr_34634[(7)] = inst_34614__$1);

return statearr_34634;
})();
if(inst_34616){
var statearr_34635_34654 = state_34632__$1;
(statearr_34635_34654[(1)] = (8));

} else {
var statearr_34636_34655 = state_34632__$1;
(statearr_34636_34655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (1))){
var inst_34609 = (0);
var state_34632__$1 = (function (){var statearr_34637 = state_34632;
(statearr_34637[(8)] = inst_34609);

return statearr_34637;
})();
var statearr_34638_34656 = state_34632__$1;
(statearr_34638_34656[(2)] = null);

(statearr_34638_34656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (4))){
var state_34632__$1 = state_34632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34632__$1,(7),ch);
} else {
if((state_val_34633 === (6))){
var inst_34627 = (state_34632[(2)]);
var state_34632__$1 = state_34632;
var statearr_34639_34657 = state_34632__$1;
(statearr_34639_34657[(2)] = inst_34627);

(statearr_34639_34657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (3))){
var inst_34629 = (state_34632[(2)]);
var inst_34630 = cljs.core.async.close_BANG_.call(null,out);
var state_34632__$1 = (function (){var statearr_34640 = state_34632;
(statearr_34640[(9)] = inst_34629);

return statearr_34640;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34632__$1,inst_34630);
} else {
if((state_val_34633 === (2))){
var inst_34609 = (state_34632[(8)]);
var inst_34611 = (inst_34609 < n);
var state_34632__$1 = state_34632;
if(cljs.core.truth_(inst_34611)){
var statearr_34641_34658 = state_34632__$1;
(statearr_34641_34658[(1)] = (4));

} else {
var statearr_34642_34659 = state_34632__$1;
(statearr_34642_34659[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (11))){
var inst_34609 = (state_34632[(8)]);
var inst_34619 = (state_34632[(2)]);
var inst_34620 = (inst_34609 + (1));
var inst_34609__$1 = inst_34620;
var state_34632__$1 = (function (){var statearr_34643 = state_34632;
(statearr_34643[(10)] = inst_34619);

(statearr_34643[(8)] = inst_34609__$1);

return statearr_34643;
})();
var statearr_34644_34660 = state_34632__$1;
(statearr_34644_34660[(2)] = null);

(statearr_34644_34660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (9))){
var state_34632__$1 = state_34632;
var statearr_34645_34661 = state_34632__$1;
(statearr_34645_34661[(2)] = null);

(statearr_34645_34661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (5))){
var state_34632__$1 = state_34632;
var statearr_34646_34662 = state_34632__$1;
(statearr_34646_34662[(2)] = null);

(statearr_34646_34662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (10))){
var inst_34624 = (state_34632[(2)]);
var state_34632__$1 = state_34632;
var statearr_34647_34663 = state_34632__$1;
(statearr_34647_34663[(2)] = inst_34624);

(statearr_34647_34663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (8))){
var inst_34614 = (state_34632[(7)]);
var state_34632__$1 = state_34632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34632__$1,(11),out,inst_34614);
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
});})(c__33181__auto___34653,out))
;
return ((function (switch__33091__auto__,c__33181__auto___34653,out){
return (function() {
var cljs$core$async$state_machine__33092__auto__ = null;
var cljs$core$async$state_machine__33092__auto____0 = (function (){
var statearr_34648 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34648[(0)] = cljs$core$async$state_machine__33092__auto__);

(statearr_34648[(1)] = (1));

return statearr_34648;
});
var cljs$core$async$state_machine__33092__auto____1 = (function (state_34632){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_34632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e34649){if((e34649 instanceof Object)){
var ex__33095__auto__ = e34649;
var statearr_34650_34664 = state_34632;
(statearr_34650_34664[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34665 = state_34632;
state_34632 = G__34665;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$state_machine__33092__auto__ = function(state_34632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33092__auto____1.call(this,state_34632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33092__auto____0;
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33092__auto____1;
return cljs$core$async$state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___34653,out))
})();
var state__33183__auto__ = (function (){var statearr_34651 = f__33182__auto__.call(null);
(statearr_34651[(6)] = c__33181__auto___34653);

return statearr_34651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___34653,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34667 = (function (f,ch,meta34668){
this.f = f;
this.ch = ch;
this.meta34668 = meta34668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34669,meta34668__$1){
var self__ = this;
var _34669__$1 = this;
return (new cljs.core.async.t_cljs$core$async34667(self__.f,self__.ch,meta34668__$1));
});

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34669){
var self__ = this;
var _34669__$1 = this;
return self__.meta34668;
});

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34670 = (function (f,ch,meta34668,_,fn1,meta34671){
this.f = f;
this.ch = ch;
this.meta34668 = meta34668;
this._ = _;
this.fn1 = fn1;
this.meta34671 = meta34671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34672,meta34671__$1){
var self__ = this;
var _34672__$1 = this;
return (new cljs.core.async.t_cljs$core$async34670(self__.f,self__.ch,self__.meta34668,self__._,self__.fn1,meta34671__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34672){
var self__ = this;
var _34672__$1 = this;
return self__.meta34671;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34670.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34670.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34670.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34670.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34666_SHARP_){
return f1.call(null,(((p1__34666_SHARP_ == null))?null:self__.f.call(null,p1__34666_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34670.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34668","meta34668",1749701963,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34667","cljs.core.async/t_cljs$core$async34667",-302080931,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34671","meta34671",-1768335349,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34670";

cljs.core.async.t_cljs$core$async34670.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34670");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34670 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34670(f__$1,ch__$1,meta34668__$1,___$2,fn1__$1,meta34671){
return (new cljs.core.async.t_cljs$core$async34670(f__$1,ch__$1,meta34668__$1,___$2,fn1__$1,meta34671));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34670(self__.f,self__.ch,self__.meta34668,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30084__auto__ = ret;
if(cljs.core.truth_(and__30084__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30084__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34667.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34668","meta34668",1749701963,null)], null);
});

cljs.core.async.t_cljs$core$async34667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34667";

cljs.core.async.t_cljs$core$async34667.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34667");
});

cljs.core.async.__GT_t_cljs$core$async34667 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34667(f__$1,ch__$1,meta34668){
return (new cljs.core.async.t_cljs$core$async34667(f__$1,ch__$1,meta34668));
});

}

return (new cljs.core.async.t_cljs$core$async34667(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34673 = (function (f,ch,meta34674){
this.f = f;
this.ch = ch;
this.meta34674 = meta34674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34675,meta34674__$1){
var self__ = this;
var _34675__$1 = this;
return (new cljs.core.async.t_cljs$core$async34673(self__.f,self__.ch,meta34674__$1));
});

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34675){
var self__ = this;
var _34675__$1 = this;
return self__.meta34674;
});

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34673.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34674","meta34674",-1087466644,null)], null);
});

cljs.core.async.t_cljs$core$async34673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34673";

cljs.core.async.t_cljs$core$async34673.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34673");
});

cljs.core.async.__GT_t_cljs$core$async34673 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34673(f__$1,ch__$1,meta34674){
return (new cljs.core.async.t_cljs$core$async34673(f__$1,ch__$1,meta34674));
});

}

return (new cljs.core.async.t_cljs$core$async34673(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34676 = (function (p,ch,meta34677){
this.p = p;
this.ch = ch;
this.meta34677 = meta34677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34678,meta34677__$1){
var self__ = this;
var _34678__$1 = this;
return (new cljs.core.async.t_cljs$core$async34676(self__.p,self__.ch,meta34677__$1));
});

cljs.core.async.t_cljs$core$async34676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34678){
var self__ = this;
var _34678__$1 = this;
return self__.meta34677;
});

cljs.core.async.t_cljs$core$async34676.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34676.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34676.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34676.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34677","meta34677",-1141917906,null)], null);
});

cljs.core.async.t_cljs$core$async34676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34676";

cljs.core.async.t_cljs$core$async34676.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34676");
});

cljs.core.async.__GT_t_cljs$core$async34676 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34676(p__$1,ch__$1,meta34677){
return (new cljs.core.async.t_cljs$core$async34676(p__$1,ch__$1,meta34677));
});

}

return (new cljs.core.async.t_cljs$core$async34676(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34680 = arguments.length;
switch (G__34680) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33181__auto___34720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___34720,out){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___34720,out){
return (function (state_34701){
var state_val_34702 = (state_34701[(1)]);
if((state_val_34702 === (7))){
var inst_34697 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34703_34721 = state_34701__$1;
(statearr_34703_34721[(2)] = inst_34697);

(statearr_34703_34721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (1))){
var state_34701__$1 = state_34701;
var statearr_34704_34722 = state_34701__$1;
(statearr_34704_34722[(2)] = null);

(statearr_34704_34722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (4))){
var inst_34683 = (state_34701[(7)]);
var inst_34683__$1 = (state_34701[(2)]);
var inst_34684 = (inst_34683__$1 == null);
var state_34701__$1 = (function (){var statearr_34705 = state_34701;
(statearr_34705[(7)] = inst_34683__$1);

return statearr_34705;
})();
if(cljs.core.truth_(inst_34684)){
var statearr_34706_34723 = state_34701__$1;
(statearr_34706_34723[(1)] = (5));

} else {
var statearr_34707_34724 = state_34701__$1;
(statearr_34707_34724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (6))){
var inst_34683 = (state_34701[(7)]);
var inst_34688 = p.call(null,inst_34683);
var state_34701__$1 = state_34701;
if(cljs.core.truth_(inst_34688)){
var statearr_34708_34725 = state_34701__$1;
(statearr_34708_34725[(1)] = (8));

} else {
var statearr_34709_34726 = state_34701__$1;
(statearr_34709_34726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (3))){
var inst_34699 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34701__$1,inst_34699);
} else {
if((state_val_34702 === (2))){
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34701__$1,(4),ch);
} else {
if((state_val_34702 === (11))){
var inst_34691 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34710_34727 = state_34701__$1;
(statearr_34710_34727[(2)] = inst_34691);

(statearr_34710_34727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (9))){
var state_34701__$1 = state_34701;
var statearr_34711_34728 = state_34701__$1;
(statearr_34711_34728[(2)] = null);

(statearr_34711_34728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (5))){
var inst_34686 = cljs.core.async.close_BANG_.call(null,out);
var state_34701__$1 = state_34701;
var statearr_34712_34729 = state_34701__$1;
(statearr_34712_34729[(2)] = inst_34686);

(statearr_34712_34729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (10))){
var inst_34694 = (state_34701[(2)]);
var state_34701__$1 = (function (){var statearr_34713 = state_34701;
(statearr_34713[(8)] = inst_34694);

return statearr_34713;
})();
var statearr_34714_34730 = state_34701__$1;
(statearr_34714_34730[(2)] = null);

(statearr_34714_34730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (8))){
var inst_34683 = (state_34701[(7)]);
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34701__$1,(11),out,inst_34683);
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
});})(c__33181__auto___34720,out))
;
return ((function (switch__33091__auto__,c__33181__auto___34720,out){
return (function() {
var cljs$core$async$state_machine__33092__auto__ = null;
var cljs$core$async$state_machine__33092__auto____0 = (function (){
var statearr_34715 = [null,null,null,null,null,null,null,null,null];
(statearr_34715[(0)] = cljs$core$async$state_machine__33092__auto__);

(statearr_34715[(1)] = (1));

return statearr_34715;
});
var cljs$core$async$state_machine__33092__auto____1 = (function (state_34701){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_34701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e34716){if((e34716 instanceof Object)){
var ex__33095__auto__ = e34716;
var statearr_34717_34731 = state_34701;
(statearr_34717_34731[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34732 = state_34701;
state_34701 = G__34732;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$state_machine__33092__auto__ = function(state_34701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33092__auto____1.call(this,state_34701);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33092__auto____0;
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33092__auto____1;
return cljs$core$async$state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___34720,out))
})();
var state__33183__auto__ = (function (){var statearr_34718 = f__33182__auto__.call(null);
(statearr_34718[(6)] = c__33181__auto___34720);

return statearr_34718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___34720,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34734 = arguments.length;
switch (G__34734) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto__){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto__){
return (function (state_34797){
var state_val_34798 = (state_34797[(1)]);
if((state_val_34798 === (7))){
var inst_34793 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34799_34837 = state_34797__$1;
(statearr_34799_34837[(2)] = inst_34793);

(statearr_34799_34837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (20))){
var inst_34763 = (state_34797[(7)]);
var inst_34774 = (state_34797[(2)]);
var inst_34775 = cljs.core.next.call(null,inst_34763);
var inst_34749 = inst_34775;
var inst_34750 = null;
var inst_34751 = (0);
var inst_34752 = (0);
var state_34797__$1 = (function (){var statearr_34800 = state_34797;
(statearr_34800[(8)] = inst_34751);

(statearr_34800[(9)] = inst_34750);

(statearr_34800[(10)] = inst_34774);

(statearr_34800[(11)] = inst_34752);

(statearr_34800[(12)] = inst_34749);

return statearr_34800;
})();
var statearr_34801_34838 = state_34797__$1;
(statearr_34801_34838[(2)] = null);

(statearr_34801_34838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (1))){
var state_34797__$1 = state_34797;
var statearr_34802_34839 = state_34797__$1;
(statearr_34802_34839[(2)] = null);

(statearr_34802_34839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (4))){
var inst_34738 = (state_34797[(13)]);
var inst_34738__$1 = (state_34797[(2)]);
var inst_34739 = (inst_34738__$1 == null);
var state_34797__$1 = (function (){var statearr_34803 = state_34797;
(statearr_34803[(13)] = inst_34738__$1);

return statearr_34803;
})();
if(cljs.core.truth_(inst_34739)){
var statearr_34804_34840 = state_34797__$1;
(statearr_34804_34840[(1)] = (5));

} else {
var statearr_34805_34841 = state_34797__$1;
(statearr_34805_34841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (15))){
var state_34797__$1 = state_34797;
var statearr_34809_34842 = state_34797__$1;
(statearr_34809_34842[(2)] = null);

(statearr_34809_34842[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (21))){
var state_34797__$1 = state_34797;
var statearr_34810_34843 = state_34797__$1;
(statearr_34810_34843[(2)] = null);

(statearr_34810_34843[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (13))){
var inst_34751 = (state_34797[(8)]);
var inst_34750 = (state_34797[(9)]);
var inst_34752 = (state_34797[(11)]);
var inst_34749 = (state_34797[(12)]);
var inst_34759 = (state_34797[(2)]);
var inst_34760 = (inst_34752 + (1));
var tmp34806 = inst_34751;
var tmp34807 = inst_34750;
var tmp34808 = inst_34749;
var inst_34749__$1 = tmp34808;
var inst_34750__$1 = tmp34807;
var inst_34751__$1 = tmp34806;
var inst_34752__$1 = inst_34760;
var state_34797__$1 = (function (){var statearr_34811 = state_34797;
(statearr_34811[(8)] = inst_34751__$1);

(statearr_34811[(9)] = inst_34750__$1);

(statearr_34811[(11)] = inst_34752__$1);

(statearr_34811[(14)] = inst_34759);

(statearr_34811[(12)] = inst_34749__$1);

return statearr_34811;
})();
var statearr_34812_34844 = state_34797__$1;
(statearr_34812_34844[(2)] = null);

(statearr_34812_34844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (22))){
var state_34797__$1 = state_34797;
var statearr_34813_34845 = state_34797__$1;
(statearr_34813_34845[(2)] = null);

(statearr_34813_34845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (6))){
var inst_34738 = (state_34797[(13)]);
var inst_34747 = f.call(null,inst_34738);
var inst_34748 = cljs.core.seq.call(null,inst_34747);
var inst_34749 = inst_34748;
var inst_34750 = null;
var inst_34751 = (0);
var inst_34752 = (0);
var state_34797__$1 = (function (){var statearr_34814 = state_34797;
(statearr_34814[(8)] = inst_34751);

(statearr_34814[(9)] = inst_34750);

(statearr_34814[(11)] = inst_34752);

(statearr_34814[(12)] = inst_34749);

return statearr_34814;
})();
var statearr_34815_34846 = state_34797__$1;
(statearr_34815_34846[(2)] = null);

(statearr_34815_34846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (17))){
var inst_34763 = (state_34797[(7)]);
var inst_34767 = cljs.core.chunk_first.call(null,inst_34763);
var inst_34768 = cljs.core.chunk_rest.call(null,inst_34763);
var inst_34769 = cljs.core.count.call(null,inst_34767);
var inst_34749 = inst_34768;
var inst_34750 = inst_34767;
var inst_34751 = inst_34769;
var inst_34752 = (0);
var state_34797__$1 = (function (){var statearr_34816 = state_34797;
(statearr_34816[(8)] = inst_34751);

(statearr_34816[(9)] = inst_34750);

(statearr_34816[(11)] = inst_34752);

(statearr_34816[(12)] = inst_34749);

return statearr_34816;
})();
var statearr_34817_34847 = state_34797__$1;
(statearr_34817_34847[(2)] = null);

(statearr_34817_34847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (3))){
var inst_34795 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34797__$1,inst_34795);
} else {
if((state_val_34798 === (12))){
var inst_34783 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34818_34848 = state_34797__$1;
(statearr_34818_34848[(2)] = inst_34783);

(statearr_34818_34848[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (2))){
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34797__$1,(4),in$);
} else {
if((state_val_34798 === (23))){
var inst_34791 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34819_34849 = state_34797__$1;
(statearr_34819_34849[(2)] = inst_34791);

(statearr_34819_34849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (19))){
var inst_34778 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34820_34850 = state_34797__$1;
(statearr_34820_34850[(2)] = inst_34778);

(statearr_34820_34850[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (11))){
var inst_34763 = (state_34797[(7)]);
var inst_34749 = (state_34797[(12)]);
var inst_34763__$1 = cljs.core.seq.call(null,inst_34749);
var state_34797__$1 = (function (){var statearr_34821 = state_34797;
(statearr_34821[(7)] = inst_34763__$1);

return statearr_34821;
})();
if(inst_34763__$1){
var statearr_34822_34851 = state_34797__$1;
(statearr_34822_34851[(1)] = (14));

} else {
var statearr_34823_34852 = state_34797__$1;
(statearr_34823_34852[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (9))){
var inst_34785 = (state_34797[(2)]);
var inst_34786 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34797__$1 = (function (){var statearr_34824 = state_34797;
(statearr_34824[(15)] = inst_34785);

return statearr_34824;
})();
if(cljs.core.truth_(inst_34786)){
var statearr_34825_34853 = state_34797__$1;
(statearr_34825_34853[(1)] = (21));

} else {
var statearr_34826_34854 = state_34797__$1;
(statearr_34826_34854[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (5))){
var inst_34741 = cljs.core.async.close_BANG_.call(null,out);
var state_34797__$1 = state_34797;
var statearr_34827_34855 = state_34797__$1;
(statearr_34827_34855[(2)] = inst_34741);

(statearr_34827_34855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (14))){
var inst_34763 = (state_34797[(7)]);
var inst_34765 = cljs.core.chunked_seq_QMARK_.call(null,inst_34763);
var state_34797__$1 = state_34797;
if(inst_34765){
var statearr_34828_34856 = state_34797__$1;
(statearr_34828_34856[(1)] = (17));

} else {
var statearr_34829_34857 = state_34797__$1;
(statearr_34829_34857[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (16))){
var inst_34781 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34830_34858 = state_34797__$1;
(statearr_34830_34858[(2)] = inst_34781);

(statearr_34830_34858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (10))){
var inst_34750 = (state_34797[(9)]);
var inst_34752 = (state_34797[(11)]);
var inst_34757 = cljs.core._nth.call(null,inst_34750,inst_34752);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34797__$1,(13),out,inst_34757);
} else {
if((state_val_34798 === (18))){
var inst_34763 = (state_34797[(7)]);
var inst_34772 = cljs.core.first.call(null,inst_34763);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34797__$1,(20),out,inst_34772);
} else {
if((state_val_34798 === (8))){
var inst_34751 = (state_34797[(8)]);
var inst_34752 = (state_34797[(11)]);
var inst_34754 = (inst_34752 < inst_34751);
var inst_34755 = inst_34754;
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34755)){
var statearr_34831_34859 = state_34797__$1;
(statearr_34831_34859[(1)] = (10));

} else {
var statearr_34832_34860 = state_34797__$1;
(statearr_34832_34860[(1)] = (11));

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
}
}
}
}
}
}
});})(c__33181__auto__))
;
return ((function (switch__33091__auto__,c__33181__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33092__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33092__auto____0 = (function (){
var statearr_34833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34833[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33092__auto__);

(statearr_34833[(1)] = (1));

return statearr_34833;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33092__auto____1 = (function (state_34797){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_34797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e34834){if((e34834 instanceof Object)){
var ex__33095__auto__ = e34834;
var statearr_34835_34861 = state_34797;
(statearr_34835_34861[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34862 = state_34797;
state_34797 = G__34862;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33092__auto__ = function(state_34797){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33092__auto____1.call(this,state_34797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33092__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33092__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto__))
})();
var state__33183__auto__ = (function (){var statearr_34836 = f__33182__auto__.call(null);
(statearr_34836[(6)] = c__33181__auto__);

return statearr_34836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto__))
);

return c__33181__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34864 = arguments.length;
switch (G__34864) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34867 = arguments.length;
switch (G__34867) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34870 = arguments.length;
switch (G__34870) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33181__auto___34917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___34917,out){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___34917,out){
return (function (state_34894){
var state_val_34895 = (state_34894[(1)]);
if((state_val_34895 === (7))){
var inst_34889 = (state_34894[(2)]);
var state_34894__$1 = state_34894;
var statearr_34896_34918 = state_34894__$1;
(statearr_34896_34918[(2)] = inst_34889);

(statearr_34896_34918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (1))){
var inst_34871 = null;
var state_34894__$1 = (function (){var statearr_34897 = state_34894;
(statearr_34897[(7)] = inst_34871);

return statearr_34897;
})();
var statearr_34898_34919 = state_34894__$1;
(statearr_34898_34919[(2)] = null);

(statearr_34898_34919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (4))){
var inst_34874 = (state_34894[(8)]);
var inst_34874__$1 = (state_34894[(2)]);
var inst_34875 = (inst_34874__$1 == null);
var inst_34876 = cljs.core.not.call(null,inst_34875);
var state_34894__$1 = (function (){var statearr_34899 = state_34894;
(statearr_34899[(8)] = inst_34874__$1);

return statearr_34899;
})();
if(inst_34876){
var statearr_34900_34920 = state_34894__$1;
(statearr_34900_34920[(1)] = (5));

} else {
var statearr_34901_34921 = state_34894__$1;
(statearr_34901_34921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (6))){
var state_34894__$1 = state_34894;
var statearr_34902_34922 = state_34894__$1;
(statearr_34902_34922[(2)] = null);

(statearr_34902_34922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (3))){
var inst_34891 = (state_34894[(2)]);
var inst_34892 = cljs.core.async.close_BANG_.call(null,out);
var state_34894__$1 = (function (){var statearr_34903 = state_34894;
(statearr_34903[(9)] = inst_34891);

return statearr_34903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34894__$1,inst_34892);
} else {
if((state_val_34895 === (2))){
var state_34894__$1 = state_34894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34894__$1,(4),ch);
} else {
if((state_val_34895 === (11))){
var inst_34874 = (state_34894[(8)]);
var inst_34883 = (state_34894[(2)]);
var inst_34871 = inst_34874;
var state_34894__$1 = (function (){var statearr_34904 = state_34894;
(statearr_34904[(10)] = inst_34883);

(statearr_34904[(7)] = inst_34871);

return statearr_34904;
})();
var statearr_34905_34923 = state_34894__$1;
(statearr_34905_34923[(2)] = null);

(statearr_34905_34923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (9))){
var inst_34874 = (state_34894[(8)]);
var state_34894__$1 = state_34894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34894__$1,(11),out,inst_34874);
} else {
if((state_val_34895 === (5))){
var inst_34871 = (state_34894[(7)]);
var inst_34874 = (state_34894[(8)]);
var inst_34878 = cljs.core._EQ_.call(null,inst_34874,inst_34871);
var state_34894__$1 = state_34894;
if(inst_34878){
var statearr_34907_34924 = state_34894__$1;
(statearr_34907_34924[(1)] = (8));

} else {
var statearr_34908_34925 = state_34894__$1;
(statearr_34908_34925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (10))){
var inst_34886 = (state_34894[(2)]);
var state_34894__$1 = state_34894;
var statearr_34909_34926 = state_34894__$1;
(statearr_34909_34926[(2)] = inst_34886);

(statearr_34909_34926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (8))){
var inst_34871 = (state_34894[(7)]);
var tmp34906 = inst_34871;
var inst_34871__$1 = tmp34906;
var state_34894__$1 = (function (){var statearr_34910 = state_34894;
(statearr_34910[(7)] = inst_34871__$1);

return statearr_34910;
})();
var statearr_34911_34927 = state_34894__$1;
(statearr_34911_34927[(2)] = null);

(statearr_34911_34927[(1)] = (2));


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
});})(c__33181__auto___34917,out))
;
return ((function (switch__33091__auto__,c__33181__auto___34917,out){
return (function() {
var cljs$core$async$state_machine__33092__auto__ = null;
var cljs$core$async$state_machine__33092__auto____0 = (function (){
var statearr_34912 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34912[(0)] = cljs$core$async$state_machine__33092__auto__);

(statearr_34912[(1)] = (1));

return statearr_34912;
});
var cljs$core$async$state_machine__33092__auto____1 = (function (state_34894){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_34894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e34913){if((e34913 instanceof Object)){
var ex__33095__auto__ = e34913;
var statearr_34914_34928 = state_34894;
(statearr_34914_34928[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34929 = state_34894;
state_34894 = G__34929;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$state_machine__33092__auto__ = function(state_34894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33092__auto____1.call(this,state_34894);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33092__auto____0;
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33092__auto____1;
return cljs$core$async$state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___34917,out))
})();
var state__33183__auto__ = (function (){var statearr_34915 = f__33182__auto__.call(null);
(statearr_34915[(6)] = c__33181__auto___34917);

return statearr_34915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___34917,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34931 = arguments.length;
switch (G__34931) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33181__auto___34997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___34997,out){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___34997,out){
return (function (state_34969){
var state_val_34970 = (state_34969[(1)]);
if((state_val_34970 === (7))){
var inst_34965 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
var statearr_34971_34998 = state_34969__$1;
(statearr_34971_34998[(2)] = inst_34965);

(statearr_34971_34998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (1))){
var inst_34932 = (new Array(n));
var inst_34933 = inst_34932;
var inst_34934 = (0);
var state_34969__$1 = (function (){var statearr_34972 = state_34969;
(statearr_34972[(7)] = inst_34934);

(statearr_34972[(8)] = inst_34933);

return statearr_34972;
})();
var statearr_34973_34999 = state_34969__$1;
(statearr_34973_34999[(2)] = null);

(statearr_34973_34999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (4))){
var inst_34937 = (state_34969[(9)]);
var inst_34937__$1 = (state_34969[(2)]);
var inst_34938 = (inst_34937__$1 == null);
var inst_34939 = cljs.core.not.call(null,inst_34938);
var state_34969__$1 = (function (){var statearr_34974 = state_34969;
(statearr_34974[(9)] = inst_34937__$1);

return statearr_34974;
})();
if(inst_34939){
var statearr_34975_35000 = state_34969__$1;
(statearr_34975_35000[(1)] = (5));

} else {
var statearr_34976_35001 = state_34969__$1;
(statearr_34976_35001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (15))){
var inst_34959 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
var statearr_34977_35002 = state_34969__$1;
(statearr_34977_35002[(2)] = inst_34959);

(statearr_34977_35002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (13))){
var state_34969__$1 = state_34969;
var statearr_34978_35003 = state_34969__$1;
(statearr_34978_35003[(2)] = null);

(statearr_34978_35003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (6))){
var inst_34934 = (state_34969[(7)]);
var inst_34955 = (inst_34934 > (0));
var state_34969__$1 = state_34969;
if(cljs.core.truth_(inst_34955)){
var statearr_34979_35004 = state_34969__$1;
(statearr_34979_35004[(1)] = (12));

} else {
var statearr_34980_35005 = state_34969__$1;
(statearr_34980_35005[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (3))){
var inst_34967 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34969__$1,inst_34967);
} else {
if((state_val_34970 === (12))){
var inst_34933 = (state_34969[(8)]);
var inst_34957 = cljs.core.vec.call(null,inst_34933);
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34969__$1,(15),out,inst_34957);
} else {
if((state_val_34970 === (2))){
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34969__$1,(4),ch);
} else {
if((state_val_34970 === (11))){
var inst_34949 = (state_34969[(2)]);
var inst_34950 = (new Array(n));
var inst_34933 = inst_34950;
var inst_34934 = (0);
var state_34969__$1 = (function (){var statearr_34981 = state_34969;
(statearr_34981[(7)] = inst_34934);

(statearr_34981[(8)] = inst_34933);

(statearr_34981[(10)] = inst_34949);

return statearr_34981;
})();
var statearr_34982_35006 = state_34969__$1;
(statearr_34982_35006[(2)] = null);

(statearr_34982_35006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (9))){
var inst_34933 = (state_34969[(8)]);
var inst_34947 = cljs.core.vec.call(null,inst_34933);
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34969__$1,(11),out,inst_34947);
} else {
if((state_val_34970 === (5))){
var inst_34934 = (state_34969[(7)]);
var inst_34933 = (state_34969[(8)]);
var inst_34937 = (state_34969[(9)]);
var inst_34942 = (state_34969[(11)]);
var inst_34941 = (inst_34933[inst_34934] = inst_34937);
var inst_34942__$1 = (inst_34934 + (1));
var inst_34943 = (inst_34942__$1 < n);
var state_34969__$1 = (function (){var statearr_34983 = state_34969;
(statearr_34983[(12)] = inst_34941);

(statearr_34983[(11)] = inst_34942__$1);

return statearr_34983;
})();
if(cljs.core.truth_(inst_34943)){
var statearr_34984_35007 = state_34969__$1;
(statearr_34984_35007[(1)] = (8));

} else {
var statearr_34985_35008 = state_34969__$1;
(statearr_34985_35008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (14))){
var inst_34962 = (state_34969[(2)]);
var inst_34963 = cljs.core.async.close_BANG_.call(null,out);
var state_34969__$1 = (function (){var statearr_34987 = state_34969;
(statearr_34987[(13)] = inst_34962);

return statearr_34987;
})();
var statearr_34988_35009 = state_34969__$1;
(statearr_34988_35009[(2)] = inst_34963);

(statearr_34988_35009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (10))){
var inst_34953 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
var statearr_34989_35010 = state_34969__$1;
(statearr_34989_35010[(2)] = inst_34953);

(statearr_34989_35010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (8))){
var inst_34933 = (state_34969[(8)]);
var inst_34942 = (state_34969[(11)]);
var tmp34986 = inst_34933;
var inst_34933__$1 = tmp34986;
var inst_34934 = inst_34942;
var state_34969__$1 = (function (){var statearr_34990 = state_34969;
(statearr_34990[(7)] = inst_34934);

(statearr_34990[(8)] = inst_34933__$1);

return statearr_34990;
})();
var statearr_34991_35011 = state_34969__$1;
(statearr_34991_35011[(2)] = null);

(statearr_34991_35011[(1)] = (2));


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
});})(c__33181__auto___34997,out))
;
return ((function (switch__33091__auto__,c__33181__auto___34997,out){
return (function() {
var cljs$core$async$state_machine__33092__auto__ = null;
var cljs$core$async$state_machine__33092__auto____0 = (function (){
var statearr_34992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34992[(0)] = cljs$core$async$state_machine__33092__auto__);

(statearr_34992[(1)] = (1));

return statearr_34992;
});
var cljs$core$async$state_machine__33092__auto____1 = (function (state_34969){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_34969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e34993){if((e34993 instanceof Object)){
var ex__33095__auto__ = e34993;
var statearr_34994_35012 = state_34969;
(statearr_34994_35012[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35013 = state_34969;
state_34969 = G__35013;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$state_machine__33092__auto__ = function(state_34969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33092__auto____1.call(this,state_34969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33092__auto____0;
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33092__auto____1;
return cljs$core$async$state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___34997,out))
})();
var state__33183__auto__ = (function (){var statearr_34995 = f__33182__auto__.call(null);
(statearr_34995[(6)] = c__33181__auto___34997);

return statearr_34995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___34997,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35015 = arguments.length;
switch (G__35015) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33181__auto___35085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___35085,out){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___35085,out){
return (function (state_35057){
var state_val_35058 = (state_35057[(1)]);
if((state_val_35058 === (7))){
var inst_35053 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35059_35086 = state_35057__$1;
(statearr_35059_35086[(2)] = inst_35053);

(statearr_35059_35086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (1))){
var inst_35016 = [];
var inst_35017 = inst_35016;
var inst_35018 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35057__$1 = (function (){var statearr_35060 = state_35057;
(statearr_35060[(7)] = inst_35018);

(statearr_35060[(8)] = inst_35017);

return statearr_35060;
})();
var statearr_35061_35087 = state_35057__$1;
(statearr_35061_35087[(2)] = null);

(statearr_35061_35087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (4))){
var inst_35021 = (state_35057[(9)]);
var inst_35021__$1 = (state_35057[(2)]);
var inst_35022 = (inst_35021__$1 == null);
var inst_35023 = cljs.core.not.call(null,inst_35022);
var state_35057__$1 = (function (){var statearr_35062 = state_35057;
(statearr_35062[(9)] = inst_35021__$1);

return statearr_35062;
})();
if(inst_35023){
var statearr_35063_35088 = state_35057__$1;
(statearr_35063_35088[(1)] = (5));

} else {
var statearr_35064_35089 = state_35057__$1;
(statearr_35064_35089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (15))){
var inst_35047 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35065_35090 = state_35057__$1;
(statearr_35065_35090[(2)] = inst_35047);

(statearr_35065_35090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (13))){
var state_35057__$1 = state_35057;
var statearr_35066_35091 = state_35057__$1;
(statearr_35066_35091[(2)] = null);

(statearr_35066_35091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (6))){
var inst_35017 = (state_35057[(8)]);
var inst_35042 = inst_35017.length;
var inst_35043 = (inst_35042 > (0));
var state_35057__$1 = state_35057;
if(cljs.core.truth_(inst_35043)){
var statearr_35067_35092 = state_35057__$1;
(statearr_35067_35092[(1)] = (12));

} else {
var statearr_35068_35093 = state_35057__$1;
(statearr_35068_35093[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (3))){
var inst_35055 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35057__$1,inst_35055);
} else {
if((state_val_35058 === (12))){
var inst_35017 = (state_35057[(8)]);
var inst_35045 = cljs.core.vec.call(null,inst_35017);
var state_35057__$1 = state_35057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35057__$1,(15),out,inst_35045);
} else {
if((state_val_35058 === (2))){
var state_35057__$1 = state_35057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35057__$1,(4),ch);
} else {
if((state_val_35058 === (11))){
var inst_35021 = (state_35057[(9)]);
var inst_35025 = (state_35057[(10)]);
var inst_35035 = (state_35057[(2)]);
var inst_35036 = [];
var inst_35037 = inst_35036.push(inst_35021);
var inst_35017 = inst_35036;
var inst_35018 = inst_35025;
var state_35057__$1 = (function (){var statearr_35069 = state_35057;
(statearr_35069[(11)] = inst_35037);

(statearr_35069[(7)] = inst_35018);

(statearr_35069[(8)] = inst_35017);

(statearr_35069[(12)] = inst_35035);

return statearr_35069;
})();
var statearr_35070_35094 = state_35057__$1;
(statearr_35070_35094[(2)] = null);

(statearr_35070_35094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (9))){
var inst_35017 = (state_35057[(8)]);
var inst_35033 = cljs.core.vec.call(null,inst_35017);
var state_35057__$1 = state_35057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35057__$1,(11),out,inst_35033);
} else {
if((state_val_35058 === (5))){
var inst_35018 = (state_35057[(7)]);
var inst_35021 = (state_35057[(9)]);
var inst_35025 = (state_35057[(10)]);
var inst_35025__$1 = f.call(null,inst_35021);
var inst_35026 = cljs.core._EQ_.call(null,inst_35025__$1,inst_35018);
var inst_35027 = cljs.core.keyword_identical_QMARK_.call(null,inst_35018,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35028 = (inst_35026) || (inst_35027);
var state_35057__$1 = (function (){var statearr_35071 = state_35057;
(statearr_35071[(10)] = inst_35025__$1);

return statearr_35071;
})();
if(cljs.core.truth_(inst_35028)){
var statearr_35072_35095 = state_35057__$1;
(statearr_35072_35095[(1)] = (8));

} else {
var statearr_35073_35096 = state_35057__$1;
(statearr_35073_35096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (14))){
var inst_35050 = (state_35057[(2)]);
var inst_35051 = cljs.core.async.close_BANG_.call(null,out);
var state_35057__$1 = (function (){var statearr_35075 = state_35057;
(statearr_35075[(13)] = inst_35050);

return statearr_35075;
})();
var statearr_35076_35097 = state_35057__$1;
(statearr_35076_35097[(2)] = inst_35051);

(statearr_35076_35097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (10))){
var inst_35040 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35077_35098 = state_35057__$1;
(statearr_35077_35098[(2)] = inst_35040);

(statearr_35077_35098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (8))){
var inst_35017 = (state_35057[(8)]);
var inst_35021 = (state_35057[(9)]);
var inst_35025 = (state_35057[(10)]);
var inst_35030 = inst_35017.push(inst_35021);
var tmp35074 = inst_35017;
var inst_35017__$1 = tmp35074;
var inst_35018 = inst_35025;
var state_35057__$1 = (function (){var statearr_35078 = state_35057;
(statearr_35078[(7)] = inst_35018);

(statearr_35078[(8)] = inst_35017__$1);

(statearr_35078[(14)] = inst_35030);

return statearr_35078;
})();
var statearr_35079_35099 = state_35057__$1;
(statearr_35079_35099[(2)] = null);

(statearr_35079_35099[(1)] = (2));


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
});})(c__33181__auto___35085,out))
;
return ((function (switch__33091__auto__,c__33181__auto___35085,out){
return (function() {
var cljs$core$async$state_machine__33092__auto__ = null;
var cljs$core$async$state_machine__33092__auto____0 = (function (){
var statearr_35080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35080[(0)] = cljs$core$async$state_machine__33092__auto__);

(statearr_35080[(1)] = (1));

return statearr_35080;
});
var cljs$core$async$state_machine__33092__auto____1 = (function (state_35057){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_35057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e35081){if((e35081 instanceof Object)){
var ex__33095__auto__ = e35081;
var statearr_35082_35100 = state_35057;
(statearr_35082_35100[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35101 = state_35057;
state_35057 = G__35101;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
cljs$core$async$state_machine__33092__auto__ = function(state_35057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33092__auto____1.call(this,state_35057);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33092__auto____0;
cljs$core$async$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33092__auto____1;
return cljs$core$async$state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___35085,out))
})();
var state__33183__auto__ = (function (){var statearr_35083 = f__33182__auto__.call(null);
(statearr_35083[(6)] = c__33181__auto___35085);

return statearr_35083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___35085,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510806276171
