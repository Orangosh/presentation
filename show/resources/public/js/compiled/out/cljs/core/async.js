// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args53061 = [];
var len__48849__auto___53067 = arguments.length;
var i__48850__auto___53068 = (0);
while(true){
if((i__48850__auto___53068 < len__48849__auto___53067)){
args53061.push((arguments[i__48850__auto___53068]));

var G__53069 = (i__48850__auto___53068 + (1));
i__48850__auto___53068 = G__53069;
continue;
} else {
}
break;
}

var G__53063 = args53061.length;
switch (G__53063) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53061.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async53064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53064 = (function (f,blockable,meta53065){
this.f = f;
this.blockable = blockable;
this.meta53065 = meta53065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53066,meta53065__$1){
var self__ = this;
var _53066__$1 = this;
return (new cljs.core.async.t_cljs$core$async53064(self__.f,self__.blockable,meta53065__$1));
});

cljs.core.async.t_cljs$core$async53064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53066){
var self__ = this;
var _53066__$1 = this;
return self__.meta53065;
});

cljs.core.async.t_cljs$core$async53064.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async53064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async53064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async53064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta53065","meta53065",-1066371026,null)], null);
});

cljs.core.async.t_cljs$core$async53064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53064";

cljs.core.async.t_cljs$core$async53064.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cljs.core.async/t_cljs$core$async53064");
});

cljs.core.async.__GT_t_cljs$core$async53064 = (function cljs$core$async$__GT_t_cljs$core$async53064(f__$1,blockable__$1,meta53065){
return (new cljs.core.async.t_cljs$core$async53064(f__$1,blockable__$1,meta53065));
});

}

return (new cljs.core.async.t_cljs$core$async53064(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args53073 = [];
var len__48849__auto___53076 = arguments.length;
var i__48850__auto___53077 = (0);
while(true){
if((i__48850__auto___53077 < len__48849__auto___53076)){
args53073.push((arguments[i__48850__auto___53077]));

var G__53078 = (i__48850__auto___53077 + (1));
i__48850__auto___53077 = G__53078;
continue;
} else {
}
break;
}

var G__53075 = args53073.length;
switch (G__53075) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53073.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args53080 = [];
var len__48849__auto___53083 = arguments.length;
var i__48850__auto___53084 = (0);
while(true){
if((i__48850__auto___53084 < len__48849__auto___53083)){
args53080.push((arguments[i__48850__auto___53084]));

var G__53085 = (i__48850__auto___53084 + (1));
i__48850__auto___53084 = G__53085;
continue;
} else {
}
break;
}

var G__53082 = args53080.length;
switch (G__53082) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53080.length)].join('')));

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
var args53087 = [];
var len__48849__auto___53090 = arguments.length;
var i__48850__auto___53091 = (0);
while(true){
if((i__48850__auto___53091 < len__48849__auto___53090)){
args53087.push((arguments[i__48850__auto___53091]));

var G__53092 = (i__48850__auto___53091 + (1));
i__48850__auto___53091 = G__53092;
continue;
} else {
}
break;
}

var G__53089 = args53087.length;
switch (G__53089) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53087.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_53094 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_53094);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_53094,ret){
return (function (){
return fn1.call(null,val_53094);
});})(val_53094,ret))
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
var args53095 = [];
var len__48849__auto___53098 = arguments.length;
var i__48850__auto___53099 = (0);
while(true){
if((i__48850__auto___53099 < len__48849__auto___53098)){
args53095.push((arguments[i__48850__auto___53099]));

var G__53100 = (i__48850__auto___53099 + (1));
i__48850__auto___53099 = G__53100;
continue;
} else {
}
break;
}

var G__53097 = args53095.length;
switch (G__53097) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53095.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
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
var n__48649__auto___53102 = n;
var x_53103 = (0);
while(true){
if((x_53103 < n__48649__auto___53102)){
(a[x_53103] = (0));

var G__53104 = (x_53103 + (1));
x_53103 = G__53104;
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

var G__53105 = (i + (1));
i = G__53105;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async53109 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53109 = (function (flag,meta53110){
this.flag = flag;
this.meta53110 = meta53110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_53111,meta53110__$1){
var self__ = this;
var _53111__$1 = this;
return (new cljs.core.async.t_cljs$core$async53109(self__.flag,meta53110__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async53109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_53111){
var self__ = this;
var _53111__$1 = this;
return self__.meta53110;
});})(flag))
;

cljs.core.async.t_cljs$core$async53109.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async53109.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async53109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async53109.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta53110","meta53110",855238696,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async53109.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53109";

cljs.core.async.t_cljs$core$async53109.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cljs.core.async/t_cljs$core$async53109");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async53109 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async53109(flag__$1,meta53110){
return (new cljs.core.async.t_cljs$core$async53109(flag__$1,meta53110));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async53109(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async53115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53115 = (function (flag,cb,meta53116){
this.flag = flag;
this.cb = cb;
this.meta53116 = meta53116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53117,meta53116__$1){
var self__ = this;
var _53117__$1 = this;
return (new cljs.core.async.t_cljs$core$async53115(self__.flag,self__.cb,meta53116__$1));
});

cljs.core.async.t_cljs$core$async53115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53117){
var self__ = this;
var _53117__$1 = this;
return self__.meta53116;
});

cljs.core.async.t_cljs$core$async53115.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async53115.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async53115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async53115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta53116","meta53116",-1736655504,null)], null);
});

cljs.core.async.t_cljs$core$async53115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53115";

cljs.core.async.t_cljs$core$async53115.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cljs.core.async/t_cljs$core$async53115");
});

cljs.core.async.__GT_t_cljs$core$async53115 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async53115(flag__$1,cb__$1,meta53116){
return (new cljs.core.async.t_cljs$core$async53115(flag__$1,cb__$1,meta53116));
});

}

return (new cljs.core.async.t_cljs$core$async53115(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__53118_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53118_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__53119_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53119_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__47633__auto__ = wport;
if(cljs.core.truth_(or__47633__auto__)){
return or__47633__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53120 = (i + (1));
i = G__53120;
continue;
}
} else {
return null;
}
break;
}
})();
var or__47633__auto__ = ret;
if(cljs.core.truth_(or__47633__auto__)){
return or__47633__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__47621__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__47621__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__47621__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
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
var args__48856__auto__ = [];
var len__48849__auto___53126 = arguments.length;
var i__48850__auto___53127 = (0);
while(true){
if((i__48850__auto___53127 < len__48849__auto___53126)){
args__48856__auto__.push((arguments[i__48850__auto___53127]));

var G__53128 = (i__48850__auto___53127 + (1));
i__48850__auto___53127 = G__53128;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((1) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48857__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__53123){
var map__53124 = p__53123;
var map__53124__$1 = ((((!((map__53124 == null)))?((((map__53124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53124):map__53124);
var opts = map__53124__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq53121){
var G__53122 = cljs.core.first.call(null,seq53121);
var seq53121__$1 = cljs.core.next.call(null,seq53121);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53122,seq53121__$1);
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
var args53129 = [];
var len__48849__auto___53179 = arguments.length;
var i__48850__auto___53180 = (0);
while(true){
if((i__48850__auto___53180 < len__48849__auto___53179)){
args53129.push((arguments[i__48850__auto___53180]));

var G__53181 = (i__48850__auto___53180 + (1));
i__48850__auto___53180 = G__53181;
continue;
} else {
}
break;
}

var G__53131 = args53129.length;
switch (G__53131) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53129.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__53002__auto___53183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___53183){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___53183){
return (function (state_53155){
var state_val_53156 = (state_53155[(1)]);
if((state_val_53156 === (7))){
var inst_53151 = (state_53155[(2)]);
var state_53155__$1 = state_53155;
var statearr_53157_53184 = state_53155__$1;
(statearr_53157_53184[(2)] = inst_53151);

(statearr_53157_53184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53156 === (1))){
var state_53155__$1 = state_53155;
var statearr_53158_53185 = state_53155__$1;
(statearr_53158_53185[(2)] = null);

(statearr_53158_53185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53156 === (4))){
var inst_53134 = (state_53155[(7)]);
var inst_53134__$1 = (state_53155[(2)]);
var inst_53135 = (inst_53134__$1 == null);
var state_53155__$1 = (function (){var statearr_53159 = state_53155;
(statearr_53159[(7)] = inst_53134__$1);

return statearr_53159;
})();
if(cljs.core.truth_(inst_53135)){
var statearr_53160_53186 = state_53155__$1;
(statearr_53160_53186[(1)] = (5));

} else {
var statearr_53161_53187 = state_53155__$1;
(statearr_53161_53187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53156 === (13))){
var state_53155__$1 = state_53155;
var statearr_53162_53188 = state_53155__$1;
(statearr_53162_53188[(2)] = null);

(statearr_53162_53188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53156 === (6))){
var inst_53134 = (state_53155[(7)]);
var state_53155__$1 = state_53155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53155__$1,(11),to,inst_53134);
} else {
if((state_val_53156 === (3))){
var inst_53153 = (state_53155[(2)]);
var state_53155__$1 = state_53155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53155__$1,inst_53153);
} else {
if((state_val_53156 === (12))){
var state_53155__$1 = state_53155;
var statearr_53163_53189 = state_53155__$1;
(statearr_53163_53189[(2)] = null);

(statearr_53163_53189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53156 === (2))){
var state_53155__$1 = state_53155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53155__$1,(4),from);
} else {
if((state_val_53156 === (11))){
var inst_53144 = (state_53155[(2)]);
var state_53155__$1 = state_53155;
if(cljs.core.truth_(inst_53144)){
var statearr_53164_53190 = state_53155__$1;
(statearr_53164_53190[(1)] = (12));

} else {
var statearr_53165_53191 = state_53155__$1;
(statearr_53165_53191[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53156 === (9))){
var state_53155__$1 = state_53155;
var statearr_53166_53192 = state_53155__$1;
(statearr_53166_53192[(2)] = null);

(statearr_53166_53192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53156 === (5))){
var state_53155__$1 = state_53155;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53167_53193 = state_53155__$1;
(statearr_53167_53193[(1)] = (8));

} else {
var statearr_53168_53194 = state_53155__$1;
(statearr_53168_53194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53156 === (14))){
var inst_53149 = (state_53155[(2)]);
var state_53155__$1 = state_53155;
var statearr_53169_53195 = state_53155__$1;
(statearr_53169_53195[(2)] = inst_53149);

(statearr_53169_53195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53156 === (10))){
var inst_53141 = (state_53155[(2)]);
var state_53155__$1 = state_53155;
var statearr_53170_53196 = state_53155__$1;
(statearr_53170_53196[(2)] = inst_53141);

(statearr_53170_53196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53156 === (8))){
var inst_53138 = cljs.core.async.close_BANG_.call(null,to);
var state_53155__$1 = state_53155;
var statearr_53171_53197 = state_53155__$1;
(statearr_53171_53197[(2)] = inst_53138);

(statearr_53171_53197[(1)] = (10));


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
});})(c__53002__auto___53183))
;
return ((function (switch__52888__auto__,c__53002__auto___53183){
return (function() {
var cljs$core$async$state_machine__52889__auto__ = null;
var cljs$core$async$state_machine__52889__auto____0 = (function (){
var statearr_53175 = [null,null,null,null,null,null,null,null];
(statearr_53175[(0)] = cljs$core$async$state_machine__52889__auto__);

(statearr_53175[(1)] = (1));

return statearr_53175;
});
var cljs$core$async$state_machine__52889__auto____1 = (function (state_53155){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_53155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e53176){if((e53176 instanceof Object)){
var ex__52892__auto__ = e53176;
var statearr_53177_53198 = state_53155;
(statearr_53177_53198[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53199 = state_53155;
state_53155 = G__53199;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$state_machine__52889__auto__ = function(state_53155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52889__auto____1.call(this,state_53155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52889__auto____0;
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52889__auto____1;
return cljs$core$async$state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___53183))
})();
var state__53004__auto__ = (function (){var statearr_53178 = f__53003__auto__.call(null);
(statearr_53178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___53183);

return statearr_53178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___53183))
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
return (function (p__53387){
var vec__53388 = p__53387;
var v = cljs.core.nth.call(null,vec__53388,(0),null);
var p = cljs.core.nth.call(null,vec__53388,(1),null);
var job = vec__53388;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__53002__auto___53574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___53574,res,vec__53388,v,p,job,jobs,results){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___53574,res,vec__53388,v,p,job,jobs,results){
return (function (state_53395){
var state_val_53396 = (state_53395[(1)]);
if((state_val_53396 === (1))){
var state_53395__$1 = state_53395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53395__$1,(2),res,v);
} else {
if((state_val_53396 === (2))){
var inst_53392 = (state_53395[(2)]);
var inst_53393 = cljs.core.async.close_BANG_.call(null,res);
var state_53395__$1 = (function (){var statearr_53397 = state_53395;
(statearr_53397[(7)] = inst_53392);

return statearr_53397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53395__$1,inst_53393);
} else {
return null;
}
}
});})(c__53002__auto___53574,res,vec__53388,v,p,job,jobs,results))
;
return ((function (switch__52888__auto__,c__53002__auto___53574,res,vec__53388,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0 = (function (){
var statearr_53401 = [null,null,null,null,null,null,null,null];
(statearr_53401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__);

(statearr_53401[(1)] = (1));

return statearr_53401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1 = (function (state_53395){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_53395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e53402){if((e53402 instanceof Object)){
var ex__52892__auto__ = e53402;
var statearr_53403_53575 = state_53395;
(statearr_53403_53575[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53576 = state_53395;
state_53395 = G__53576;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__ = function(state_53395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1.call(this,state_53395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___53574,res,vec__53388,v,p,job,jobs,results))
})();
var state__53004__auto__ = (function (){var statearr_53404 = f__53003__auto__.call(null);
(statearr_53404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___53574);

return statearr_53404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___53574,res,vec__53388,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__53405){
var vec__53406 = p__53405;
var v = cljs.core.nth.call(null,vec__53406,(0),null);
var p = cljs.core.nth.call(null,vec__53406,(1),null);
var job = vec__53406;
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
var n__48649__auto___53577 = n;
var __53578 = (0);
while(true){
if((__53578 < n__48649__auto___53577)){
var G__53409_53579 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__53409_53579) {
case "compute":
var c__53002__auto___53581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__53578,c__53002__auto___53581,G__53409_53579,n__48649__auto___53577,jobs,results,process,async){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (__53578,c__53002__auto___53581,G__53409_53579,n__48649__auto___53577,jobs,results,process,async){
return (function (state_53422){
var state_val_53423 = (state_53422[(1)]);
if((state_val_53423 === (1))){
var state_53422__$1 = state_53422;
var statearr_53424_53582 = state_53422__$1;
(statearr_53424_53582[(2)] = null);

(statearr_53424_53582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53423 === (2))){
var state_53422__$1 = state_53422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53422__$1,(4),jobs);
} else {
if((state_val_53423 === (3))){
var inst_53420 = (state_53422[(2)]);
var state_53422__$1 = state_53422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53422__$1,inst_53420);
} else {
if((state_val_53423 === (4))){
var inst_53412 = (state_53422[(2)]);
var inst_53413 = process.call(null,inst_53412);
var state_53422__$1 = state_53422;
if(cljs.core.truth_(inst_53413)){
var statearr_53425_53583 = state_53422__$1;
(statearr_53425_53583[(1)] = (5));

} else {
var statearr_53426_53584 = state_53422__$1;
(statearr_53426_53584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53423 === (5))){
var state_53422__$1 = state_53422;
var statearr_53427_53585 = state_53422__$1;
(statearr_53427_53585[(2)] = null);

(statearr_53427_53585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53423 === (6))){
var state_53422__$1 = state_53422;
var statearr_53428_53586 = state_53422__$1;
(statearr_53428_53586[(2)] = null);

(statearr_53428_53586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53423 === (7))){
var inst_53418 = (state_53422[(2)]);
var state_53422__$1 = state_53422;
var statearr_53429_53587 = state_53422__$1;
(statearr_53429_53587[(2)] = inst_53418);

(statearr_53429_53587[(1)] = (3));


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
});})(__53578,c__53002__auto___53581,G__53409_53579,n__48649__auto___53577,jobs,results,process,async))
;
return ((function (__53578,switch__52888__auto__,c__53002__auto___53581,G__53409_53579,n__48649__auto___53577,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0 = (function (){
var statearr_53433 = [null,null,null,null,null,null,null];
(statearr_53433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__);

(statearr_53433[(1)] = (1));

return statearr_53433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1 = (function (state_53422){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_53422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e53434){if((e53434 instanceof Object)){
var ex__52892__auto__ = e53434;
var statearr_53435_53588 = state_53422;
(statearr_53435_53588[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53589 = state_53422;
state_53422 = G__53589;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__ = function(state_53422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1.call(this,state_53422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__;
})()
;})(__53578,switch__52888__auto__,c__53002__auto___53581,G__53409_53579,n__48649__auto___53577,jobs,results,process,async))
})();
var state__53004__auto__ = (function (){var statearr_53436 = f__53003__auto__.call(null);
(statearr_53436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___53581);

return statearr_53436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(__53578,c__53002__auto___53581,G__53409_53579,n__48649__auto___53577,jobs,results,process,async))
);


break;
case "async":
var c__53002__auto___53590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__53578,c__53002__auto___53590,G__53409_53579,n__48649__auto___53577,jobs,results,process,async){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (__53578,c__53002__auto___53590,G__53409_53579,n__48649__auto___53577,jobs,results,process,async){
return (function (state_53449){
var state_val_53450 = (state_53449[(1)]);
if((state_val_53450 === (1))){
var state_53449__$1 = state_53449;
var statearr_53451_53591 = state_53449__$1;
(statearr_53451_53591[(2)] = null);

(statearr_53451_53591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53450 === (2))){
var state_53449__$1 = state_53449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53449__$1,(4),jobs);
} else {
if((state_val_53450 === (3))){
var inst_53447 = (state_53449[(2)]);
var state_53449__$1 = state_53449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53449__$1,inst_53447);
} else {
if((state_val_53450 === (4))){
var inst_53439 = (state_53449[(2)]);
var inst_53440 = async.call(null,inst_53439);
var state_53449__$1 = state_53449;
if(cljs.core.truth_(inst_53440)){
var statearr_53452_53592 = state_53449__$1;
(statearr_53452_53592[(1)] = (5));

} else {
var statearr_53453_53593 = state_53449__$1;
(statearr_53453_53593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53450 === (5))){
var state_53449__$1 = state_53449;
var statearr_53454_53594 = state_53449__$1;
(statearr_53454_53594[(2)] = null);

(statearr_53454_53594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53450 === (6))){
var state_53449__$1 = state_53449;
var statearr_53455_53595 = state_53449__$1;
(statearr_53455_53595[(2)] = null);

(statearr_53455_53595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53450 === (7))){
var inst_53445 = (state_53449[(2)]);
var state_53449__$1 = state_53449;
var statearr_53456_53596 = state_53449__$1;
(statearr_53456_53596[(2)] = inst_53445);

(statearr_53456_53596[(1)] = (3));


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
});})(__53578,c__53002__auto___53590,G__53409_53579,n__48649__auto___53577,jobs,results,process,async))
;
return ((function (__53578,switch__52888__auto__,c__53002__auto___53590,G__53409_53579,n__48649__auto___53577,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0 = (function (){
var statearr_53460 = [null,null,null,null,null,null,null];
(statearr_53460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__);

(statearr_53460[(1)] = (1));

return statearr_53460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1 = (function (state_53449){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_53449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e53461){if((e53461 instanceof Object)){
var ex__52892__auto__ = e53461;
var statearr_53462_53597 = state_53449;
(statearr_53462_53597[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53598 = state_53449;
state_53449 = G__53598;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__ = function(state_53449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1.call(this,state_53449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__;
})()
;})(__53578,switch__52888__auto__,c__53002__auto___53590,G__53409_53579,n__48649__auto___53577,jobs,results,process,async))
})();
var state__53004__auto__ = (function (){var statearr_53463 = f__53003__auto__.call(null);
(statearr_53463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___53590);

return statearr_53463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(__53578,c__53002__auto___53590,G__53409_53579,n__48649__auto___53577,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__53599 = (__53578 + (1));
__53578 = G__53599;
continue;
} else {
}
break;
}

var c__53002__auto___53600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___53600,jobs,results,process,async){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___53600,jobs,results,process,async){
return (function (state_53485){
var state_val_53486 = (state_53485[(1)]);
if((state_val_53486 === (1))){
var state_53485__$1 = state_53485;
var statearr_53487_53601 = state_53485__$1;
(statearr_53487_53601[(2)] = null);

(statearr_53487_53601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53486 === (2))){
var state_53485__$1 = state_53485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53485__$1,(4),from);
} else {
if((state_val_53486 === (3))){
var inst_53483 = (state_53485[(2)]);
var state_53485__$1 = state_53485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53485__$1,inst_53483);
} else {
if((state_val_53486 === (4))){
var inst_53466 = (state_53485[(7)]);
var inst_53466__$1 = (state_53485[(2)]);
var inst_53467 = (inst_53466__$1 == null);
var state_53485__$1 = (function (){var statearr_53488 = state_53485;
(statearr_53488[(7)] = inst_53466__$1);

return statearr_53488;
})();
if(cljs.core.truth_(inst_53467)){
var statearr_53489_53602 = state_53485__$1;
(statearr_53489_53602[(1)] = (5));

} else {
var statearr_53490_53603 = state_53485__$1;
(statearr_53490_53603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53486 === (5))){
var inst_53469 = cljs.core.async.close_BANG_.call(null,jobs);
var state_53485__$1 = state_53485;
var statearr_53491_53604 = state_53485__$1;
(statearr_53491_53604[(2)] = inst_53469);

(statearr_53491_53604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53486 === (6))){
var inst_53471 = (state_53485[(8)]);
var inst_53466 = (state_53485[(7)]);
var inst_53471__$1 = cljs.core.async.chan.call(null,(1));
var inst_53472 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53473 = [inst_53466,inst_53471__$1];
var inst_53474 = (new cljs.core.PersistentVector(null,2,(5),inst_53472,inst_53473,null));
var state_53485__$1 = (function (){var statearr_53492 = state_53485;
(statearr_53492[(8)] = inst_53471__$1);

return statearr_53492;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53485__$1,(8),jobs,inst_53474);
} else {
if((state_val_53486 === (7))){
var inst_53481 = (state_53485[(2)]);
var state_53485__$1 = state_53485;
var statearr_53493_53605 = state_53485__$1;
(statearr_53493_53605[(2)] = inst_53481);

(statearr_53493_53605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53486 === (8))){
var inst_53471 = (state_53485[(8)]);
var inst_53476 = (state_53485[(2)]);
var state_53485__$1 = (function (){var statearr_53494 = state_53485;
(statearr_53494[(9)] = inst_53476);

return statearr_53494;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53485__$1,(9),results,inst_53471);
} else {
if((state_val_53486 === (9))){
var inst_53478 = (state_53485[(2)]);
var state_53485__$1 = (function (){var statearr_53495 = state_53485;
(statearr_53495[(10)] = inst_53478);

return statearr_53495;
})();
var statearr_53496_53606 = state_53485__$1;
(statearr_53496_53606[(2)] = null);

(statearr_53496_53606[(1)] = (2));


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
});})(c__53002__auto___53600,jobs,results,process,async))
;
return ((function (switch__52888__auto__,c__53002__auto___53600,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0 = (function (){
var statearr_53500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__);

(statearr_53500[(1)] = (1));

return statearr_53500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1 = (function (state_53485){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_53485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e53501){if((e53501 instanceof Object)){
var ex__52892__auto__ = e53501;
var statearr_53502_53607 = state_53485;
(statearr_53502_53607[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53608 = state_53485;
state_53485 = G__53608;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__ = function(state_53485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1.call(this,state_53485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___53600,jobs,results,process,async))
})();
var state__53004__auto__ = (function (){var statearr_53503 = f__53003__auto__.call(null);
(statearr_53503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___53600);

return statearr_53503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___53600,jobs,results,process,async))
);


var c__53002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto__,jobs,results,process,async){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto__,jobs,results,process,async){
return (function (state_53541){
var state_val_53542 = (state_53541[(1)]);
if((state_val_53542 === (7))){
var inst_53537 = (state_53541[(2)]);
var state_53541__$1 = state_53541;
var statearr_53543_53609 = state_53541__$1;
(statearr_53543_53609[(2)] = inst_53537);

(statearr_53543_53609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (20))){
var state_53541__$1 = state_53541;
var statearr_53544_53610 = state_53541__$1;
(statearr_53544_53610[(2)] = null);

(statearr_53544_53610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (1))){
var state_53541__$1 = state_53541;
var statearr_53545_53611 = state_53541__$1;
(statearr_53545_53611[(2)] = null);

(statearr_53545_53611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (4))){
var inst_53506 = (state_53541[(7)]);
var inst_53506__$1 = (state_53541[(2)]);
var inst_53507 = (inst_53506__$1 == null);
var state_53541__$1 = (function (){var statearr_53546 = state_53541;
(statearr_53546[(7)] = inst_53506__$1);

return statearr_53546;
})();
if(cljs.core.truth_(inst_53507)){
var statearr_53547_53612 = state_53541__$1;
(statearr_53547_53612[(1)] = (5));

} else {
var statearr_53548_53613 = state_53541__$1;
(statearr_53548_53613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (15))){
var inst_53519 = (state_53541[(8)]);
var state_53541__$1 = state_53541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53541__$1,(18),to,inst_53519);
} else {
if((state_val_53542 === (21))){
var inst_53532 = (state_53541[(2)]);
var state_53541__$1 = state_53541;
var statearr_53549_53614 = state_53541__$1;
(statearr_53549_53614[(2)] = inst_53532);

(statearr_53549_53614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (13))){
var inst_53534 = (state_53541[(2)]);
var state_53541__$1 = (function (){var statearr_53550 = state_53541;
(statearr_53550[(9)] = inst_53534);

return statearr_53550;
})();
var statearr_53551_53615 = state_53541__$1;
(statearr_53551_53615[(2)] = null);

(statearr_53551_53615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (6))){
var inst_53506 = (state_53541[(7)]);
var state_53541__$1 = state_53541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53541__$1,(11),inst_53506);
} else {
if((state_val_53542 === (17))){
var inst_53527 = (state_53541[(2)]);
var state_53541__$1 = state_53541;
if(cljs.core.truth_(inst_53527)){
var statearr_53552_53616 = state_53541__$1;
(statearr_53552_53616[(1)] = (19));

} else {
var statearr_53553_53617 = state_53541__$1;
(statearr_53553_53617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (3))){
var inst_53539 = (state_53541[(2)]);
var state_53541__$1 = state_53541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53541__$1,inst_53539);
} else {
if((state_val_53542 === (12))){
var inst_53516 = (state_53541[(10)]);
var state_53541__$1 = state_53541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53541__$1,(14),inst_53516);
} else {
if((state_val_53542 === (2))){
var state_53541__$1 = state_53541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53541__$1,(4),results);
} else {
if((state_val_53542 === (19))){
var state_53541__$1 = state_53541;
var statearr_53554_53618 = state_53541__$1;
(statearr_53554_53618[(2)] = null);

(statearr_53554_53618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (11))){
var inst_53516 = (state_53541[(2)]);
var state_53541__$1 = (function (){var statearr_53555 = state_53541;
(statearr_53555[(10)] = inst_53516);

return statearr_53555;
})();
var statearr_53556_53619 = state_53541__$1;
(statearr_53556_53619[(2)] = null);

(statearr_53556_53619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (9))){
var state_53541__$1 = state_53541;
var statearr_53557_53620 = state_53541__$1;
(statearr_53557_53620[(2)] = null);

(statearr_53557_53620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (5))){
var state_53541__$1 = state_53541;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53558_53621 = state_53541__$1;
(statearr_53558_53621[(1)] = (8));

} else {
var statearr_53559_53622 = state_53541__$1;
(statearr_53559_53622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (14))){
var inst_53519 = (state_53541[(8)]);
var inst_53521 = (state_53541[(11)]);
var inst_53519__$1 = (state_53541[(2)]);
var inst_53520 = (inst_53519__$1 == null);
var inst_53521__$1 = cljs.core.not.call(null,inst_53520);
var state_53541__$1 = (function (){var statearr_53560 = state_53541;
(statearr_53560[(8)] = inst_53519__$1);

(statearr_53560[(11)] = inst_53521__$1);

return statearr_53560;
})();
if(inst_53521__$1){
var statearr_53561_53623 = state_53541__$1;
(statearr_53561_53623[(1)] = (15));

} else {
var statearr_53562_53624 = state_53541__$1;
(statearr_53562_53624[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (16))){
var inst_53521 = (state_53541[(11)]);
var state_53541__$1 = state_53541;
var statearr_53563_53625 = state_53541__$1;
(statearr_53563_53625[(2)] = inst_53521);

(statearr_53563_53625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (10))){
var inst_53513 = (state_53541[(2)]);
var state_53541__$1 = state_53541;
var statearr_53564_53626 = state_53541__$1;
(statearr_53564_53626[(2)] = inst_53513);

(statearr_53564_53626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (18))){
var inst_53524 = (state_53541[(2)]);
var state_53541__$1 = state_53541;
var statearr_53565_53627 = state_53541__$1;
(statearr_53565_53627[(2)] = inst_53524);

(statearr_53565_53627[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53542 === (8))){
var inst_53510 = cljs.core.async.close_BANG_.call(null,to);
var state_53541__$1 = state_53541;
var statearr_53566_53628 = state_53541__$1;
(statearr_53566_53628[(2)] = inst_53510);

(statearr_53566_53628[(1)] = (10));


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
});})(c__53002__auto__,jobs,results,process,async))
;
return ((function (switch__52888__auto__,c__53002__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0 = (function (){
var statearr_53570 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__);

(statearr_53570[(1)] = (1));

return statearr_53570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1 = (function (state_53541){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_53541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e53571){if((e53571 instanceof Object)){
var ex__52892__auto__ = e53571;
var statearr_53572_53629 = state_53541;
(statearr_53572_53629[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53630 = state_53541;
state_53541 = G__53630;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__ = function(state_53541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1.call(this,state_53541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__52889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto__,jobs,results,process,async))
})();
var state__53004__auto__ = (function (){var statearr_53573 = f__53003__auto__.call(null);
(statearr_53573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto__);

return statearr_53573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto__,jobs,results,process,async))
);

return c__53002__auto__;
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
var args53631 = [];
var len__48849__auto___53634 = arguments.length;
var i__48850__auto___53635 = (0);
while(true){
if((i__48850__auto___53635 < len__48849__auto___53634)){
args53631.push((arguments[i__48850__auto___53635]));

var G__53636 = (i__48850__auto___53635 + (1));
i__48850__auto___53635 = G__53636;
continue;
} else {
}
break;
}

var G__53633 = args53631.length;
switch (G__53633) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53631.length)].join('')));

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
var args53638 = [];
var len__48849__auto___53641 = arguments.length;
var i__48850__auto___53642 = (0);
while(true){
if((i__48850__auto___53642 < len__48849__auto___53641)){
args53638.push((arguments[i__48850__auto___53642]));

var G__53643 = (i__48850__auto___53642 + (1));
i__48850__auto___53642 = G__53643;
continue;
} else {
}
break;
}

var G__53640 = args53638.length;
switch (G__53640) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53638.length)].join('')));

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
var args53645 = [];
var len__48849__auto___53698 = arguments.length;
var i__48850__auto___53699 = (0);
while(true){
if((i__48850__auto___53699 < len__48849__auto___53698)){
args53645.push((arguments[i__48850__auto___53699]));

var G__53700 = (i__48850__auto___53699 + (1));
i__48850__auto___53699 = G__53700;
continue;
} else {
}
break;
}

var G__53647 = args53645.length;
switch (G__53647) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53645.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__53002__auto___53702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___53702,tc,fc){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___53702,tc,fc){
return (function (state_53673){
var state_val_53674 = (state_53673[(1)]);
if((state_val_53674 === (7))){
var inst_53669 = (state_53673[(2)]);
var state_53673__$1 = state_53673;
var statearr_53675_53703 = state_53673__$1;
(statearr_53675_53703[(2)] = inst_53669);

(statearr_53675_53703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (1))){
var state_53673__$1 = state_53673;
var statearr_53676_53704 = state_53673__$1;
(statearr_53676_53704[(2)] = null);

(statearr_53676_53704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (4))){
var inst_53650 = (state_53673[(7)]);
var inst_53650__$1 = (state_53673[(2)]);
var inst_53651 = (inst_53650__$1 == null);
var state_53673__$1 = (function (){var statearr_53677 = state_53673;
(statearr_53677[(7)] = inst_53650__$1);

return statearr_53677;
})();
if(cljs.core.truth_(inst_53651)){
var statearr_53678_53705 = state_53673__$1;
(statearr_53678_53705[(1)] = (5));

} else {
var statearr_53679_53706 = state_53673__$1;
(statearr_53679_53706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (13))){
var state_53673__$1 = state_53673;
var statearr_53680_53707 = state_53673__$1;
(statearr_53680_53707[(2)] = null);

(statearr_53680_53707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (6))){
var inst_53650 = (state_53673[(7)]);
var inst_53656 = p.call(null,inst_53650);
var state_53673__$1 = state_53673;
if(cljs.core.truth_(inst_53656)){
var statearr_53681_53708 = state_53673__$1;
(statearr_53681_53708[(1)] = (9));

} else {
var statearr_53682_53709 = state_53673__$1;
(statearr_53682_53709[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (3))){
var inst_53671 = (state_53673[(2)]);
var state_53673__$1 = state_53673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53673__$1,inst_53671);
} else {
if((state_val_53674 === (12))){
var state_53673__$1 = state_53673;
var statearr_53683_53710 = state_53673__$1;
(statearr_53683_53710[(2)] = null);

(statearr_53683_53710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (2))){
var state_53673__$1 = state_53673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53673__$1,(4),ch);
} else {
if((state_val_53674 === (11))){
var inst_53650 = (state_53673[(7)]);
var inst_53660 = (state_53673[(2)]);
var state_53673__$1 = state_53673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53673__$1,(8),inst_53660,inst_53650);
} else {
if((state_val_53674 === (9))){
var state_53673__$1 = state_53673;
var statearr_53684_53711 = state_53673__$1;
(statearr_53684_53711[(2)] = tc);

(statearr_53684_53711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (5))){
var inst_53653 = cljs.core.async.close_BANG_.call(null,tc);
var inst_53654 = cljs.core.async.close_BANG_.call(null,fc);
var state_53673__$1 = (function (){var statearr_53685 = state_53673;
(statearr_53685[(8)] = inst_53653);

return statearr_53685;
})();
var statearr_53686_53712 = state_53673__$1;
(statearr_53686_53712[(2)] = inst_53654);

(statearr_53686_53712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (14))){
var inst_53667 = (state_53673[(2)]);
var state_53673__$1 = state_53673;
var statearr_53687_53713 = state_53673__$1;
(statearr_53687_53713[(2)] = inst_53667);

(statearr_53687_53713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (10))){
var state_53673__$1 = state_53673;
var statearr_53688_53714 = state_53673__$1;
(statearr_53688_53714[(2)] = fc);

(statearr_53688_53714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (8))){
var inst_53662 = (state_53673[(2)]);
var state_53673__$1 = state_53673;
if(cljs.core.truth_(inst_53662)){
var statearr_53689_53715 = state_53673__$1;
(statearr_53689_53715[(1)] = (12));

} else {
var statearr_53690_53716 = state_53673__$1;
(statearr_53690_53716[(1)] = (13));

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
});})(c__53002__auto___53702,tc,fc))
;
return ((function (switch__52888__auto__,c__53002__auto___53702,tc,fc){
return (function() {
var cljs$core$async$state_machine__52889__auto__ = null;
var cljs$core$async$state_machine__52889__auto____0 = (function (){
var statearr_53694 = [null,null,null,null,null,null,null,null,null];
(statearr_53694[(0)] = cljs$core$async$state_machine__52889__auto__);

(statearr_53694[(1)] = (1));

return statearr_53694;
});
var cljs$core$async$state_machine__52889__auto____1 = (function (state_53673){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_53673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e53695){if((e53695 instanceof Object)){
var ex__52892__auto__ = e53695;
var statearr_53696_53717 = state_53673;
(statearr_53696_53717[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53718 = state_53673;
state_53673 = G__53718;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$state_machine__52889__auto__ = function(state_53673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52889__auto____1.call(this,state_53673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52889__auto____0;
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52889__auto____1;
return cljs$core$async$state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___53702,tc,fc))
})();
var state__53004__auto__ = (function (){var statearr_53697 = f__53003__auto__.call(null);
(statearr_53697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___53702);

return statearr_53697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___53702,tc,fc))
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
var c__53002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto__){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto__){
return (function (state_53782){
var state_val_53783 = (state_53782[(1)]);
if((state_val_53783 === (7))){
var inst_53778 = (state_53782[(2)]);
var state_53782__$1 = state_53782;
var statearr_53784_53805 = state_53782__$1;
(statearr_53784_53805[(2)] = inst_53778);

(statearr_53784_53805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53783 === (1))){
var inst_53762 = init;
var state_53782__$1 = (function (){var statearr_53785 = state_53782;
(statearr_53785[(7)] = inst_53762);

return statearr_53785;
})();
var statearr_53786_53806 = state_53782__$1;
(statearr_53786_53806[(2)] = null);

(statearr_53786_53806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53783 === (4))){
var inst_53765 = (state_53782[(8)]);
var inst_53765__$1 = (state_53782[(2)]);
var inst_53766 = (inst_53765__$1 == null);
var state_53782__$1 = (function (){var statearr_53787 = state_53782;
(statearr_53787[(8)] = inst_53765__$1);

return statearr_53787;
})();
if(cljs.core.truth_(inst_53766)){
var statearr_53788_53807 = state_53782__$1;
(statearr_53788_53807[(1)] = (5));

} else {
var statearr_53789_53808 = state_53782__$1;
(statearr_53789_53808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53783 === (6))){
var inst_53762 = (state_53782[(7)]);
var inst_53765 = (state_53782[(8)]);
var inst_53769 = (state_53782[(9)]);
var inst_53769__$1 = f.call(null,inst_53762,inst_53765);
var inst_53770 = cljs.core.reduced_QMARK_.call(null,inst_53769__$1);
var state_53782__$1 = (function (){var statearr_53790 = state_53782;
(statearr_53790[(9)] = inst_53769__$1);

return statearr_53790;
})();
if(inst_53770){
var statearr_53791_53809 = state_53782__$1;
(statearr_53791_53809[(1)] = (8));

} else {
var statearr_53792_53810 = state_53782__$1;
(statearr_53792_53810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53783 === (3))){
var inst_53780 = (state_53782[(2)]);
var state_53782__$1 = state_53782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53782__$1,inst_53780);
} else {
if((state_val_53783 === (2))){
var state_53782__$1 = state_53782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53782__$1,(4),ch);
} else {
if((state_val_53783 === (9))){
var inst_53769 = (state_53782[(9)]);
var inst_53762 = inst_53769;
var state_53782__$1 = (function (){var statearr_53793 = state_53782;
(statearr_53793[(7)] = inst_53762);

return statearr_53793;
})();
var statearr_53794_53811 = state_53782__$1;
(statearr_53794_53811[(2)] = null);

(statearr_53794_53811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53783 === (5))){
var inst_53762 = (state_53782[(7)]);
var state_53782__$1 = state_53782;
var statearr_53795_53812 = state_53782__$1;
(statearr_53795_53812[(2)] = inst_53762);

(statearr_53795_53812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53783 === (10))){
var inst_53776 = (state_53782[(2)]);
var state_53782__$1 = state_53782;
var statearr_53796_53813 = state_53782__$1;
(statearr_53796_53813[(2)] = inst_53776);

(statearr_53796_53813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53783 === (8))){
var inst_53769 = (state_53782[(9)]);
var inst_53772 = cljs.core.deref.call(null,inst_53769);
var state_53782__$1 = state_53782;
var statearr_53797_53814 = state_53782__$1;
(statearr_53797_53814[(2)] = inst_53772);

(statearr_53797_53814[(1)] = (10));


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
});})(c__53002__auto__))
;
return ((function (switch__52888__auto__,c__53002__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__52889__auto__ = null;
var cljs$core$async$reduce_$_state_machine__52889__auto____0 = (function (){
var statearr_53801 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53801[(0)] = cljs$core$async$reduce_$_state_machine__52889__auto__);

(statearr_53801[(1)] = (1));

return statearr_53801;
});
var cljs$core$async$reduce_$_state_machine__52889__auto____1 = (function (state_53782){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_53782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e53802){if((e53802 instanceof Object)){
var ex__52892__auto__ = e53802;
var statearr_53803_53815 = state_53782;
(statearr_53803_53815[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53816 = state_53782;
state_53782 = G__53816;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__52889__auto__ = function(state_53782){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__52889__auto____1.call(this,state_53782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__52889__auto____0;
cljs$core$async$reduce_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__52889__auto____1;
return cljs$core$async$reduce_$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto__))
})();
var state__53004__auto__ = (function (){var statearr_53804 = f__53003__auto__.call(null);
(statearr_53804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto__);

return statearr_53804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto__))
);

return c__53002__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__53002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto__,f__$1){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto__,f__$1){
return (function (state_53836){
var state_val_53837 = (state_53836[(1)]);
if((state_val_53837 === (1))){
var inst_53831 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_53836__$1 = state_53836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53836__$1,(2),inst_53831);
} else {
if((state_val_53837 === (2))){
var inst_53833 = (state_53836[(2)]);
var inst_53834 = f__$1.call(null,inst_53833);
var state_53836__$1 = state_53836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53836__$1,inst_53834);
} else {
return null;
}
}
});})(c__53002__auto__,f__$1))
;
return ((function (switch__52888__auto__,c__53002__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__52889__auto__ = null;
var cljs$core$async$transduce_$_state_machine__52889__auto____0 = (function (){
var statearr_53841 = [null,null,null,null,null,null,null];
(statearr_53841[(0)] = cljs$core$async$transduce_$_state_machine__52889__auto__);

(statearr_53841[(1)] = (1));

return statearr_53841;
});
var cljs$core$async$transduce_$_state_machine__52889__auto____1 = (function (state_53836){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_53836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e53842){if((e53842 instanceof Object)){
var ex__52892__auto__ = e53842;
var statearr_53843_53845 = state_53836;
(statearr_53843_53845[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53846 = state_53836;
state_53836 = G__53846;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__52889__auto__ = function(state_53836){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__52889__auto____1.call(this,state_53836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__52889__auto____0;
cljs$core$async$transduce_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__52889__auto____1;
return cljs$core$async$transduce_$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto__,f__$1))
})();
var state__53004__auto__ = (function (){var statearr_53844 = f__53003__auto__.call(null);
(statearr_53844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto__);

return statearr_53844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto__,f__$1))
);

return c__53002__auto__;
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
var args53847 = [];
var len__48849__auto___53899 = arguments.length;
var i__48850__auto___53900 = (0);
while(true){
if((i__48850__auto___53900 < len__48849__auto___53899)){
args53847.push((arguments[i__48850__auto___53900]));

var G__53901 = (i__48850__auto___53900 + (1));
i__48850__auto___53900 = G__53901;
continue;
} else {
}
break;
}

var G__53849 = args53847.length;
switch (G__53849) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53847.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__53002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto__){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto__){
return (function (state_53874){
var state_val_53875 = (state_53874[(1)]);
if((state_val_53875 === (7))){
var inst_53856 = (state_53874[(2)]);
var state_53874__$1 = state_53874;
var statearr_53876_53903 = state_53874__$1;
(statearr_53876_53903[(2)] = inst_53856);

(statearr_53876_53903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53875 === (1))){
var inst_53850 = cljs.core.seq.call(null,coll);
var inst_53851 = inst_53850;
var state_53874__$1 = (function (){var statearr_53877 = state_53874;
(statearr_53877[(7)] = inst_53851);

return statearr_53877;
})();
var statearr_53878_53904 = state_53874__$1;
(statearr_53878_53904[(2)] = null);

(statearr_53878_53904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53875 === (4))){
var inst_53851 = (state_53874[(7)]);
var inst_53854 = cljs.core.first.call(null,inst_53851);
var state_53874__$1 = state_53874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53874__$1,(7),ch,inst_53854);
} else {
if((state_val_53875 === (13))){
var inst_53868 = (state_53874[(2)]);
var state_53874__$1 = state_53874;
var statearr_53879_53905 = state_53874__$1;
(statearr_53879_53905[(2)] = inst_53868);

(statearr_53879_53905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53875 === (6))){
var inst_53859 = (state_53874[(2)]);
var state_53874__$1 = state_53874;
if(cljs.core.truth_(inst_53859)){
var statearr_53880_53906 = state_53874__$1;
(statearr_53880_53906[(1)] = (8));

} else {
var statearr_53881_53907 = state_53874__$1;
(statearr_53881_53907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53875 === (3))){
var inst_53872 = (state_53874[(2)]);
var state_53874__$1 = state_53874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53874__$1,inst_53872);
} else {
if((state_val_53875 === (12))){
var state_53874__$1 = state_53874;
var statearr_53882_53908 = state_53874__$1;
(statearr_53882_53908[(2)] = null);

(statearr_53882_53908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53875 === (2))){
var inst_53851 = (state_53874[(7)]);
var state_53874__$1 = state_53874;
if(cljs.core.truth_(inst_53851)){
var statearr_53883_53909 = state_53874__$1;
(statearr_53883_53909[(1)] = (4));

} else {
var statearr_53884_53910 = state_53874__$1;
(statearr_53884_53910[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53875 === (11))){
var inst_53865 = cljs.core.async.close_BANG_.call(null,ch);
var state_53874__$1 = state_53874;
var statearr_53885_53911 = state_53874__$1;
(statearr_53885_53911[(2)] = inst_53865);

(statearr_53885_53911[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53875 === (9))){
var state_53874__$1 = state_53874;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53886_53912 = state_53874__$1;
(statearr_53886_53912[(1)] = (11));

} else {
var statearr_53887_53913 = state_53874__$1;
(statearr_53887_53913[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53875 === (5))){
var inst_53851 = (state_53874[(7)]);
var state_53874__$1 = state_53874;
var statearr_53888_53914 = state_53874__$1;
(statearr_53888_53914[(2)] = inst_53851);

(statearr_53888_53914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53875 === (10))){
var inst_53870 = (state_53874[(2)]);
var state_53874__$1 = state_53874;
var statearr_53889_53915 = state_53874__$1;
(statearr_53889_53915[(2)] = inst_53870);

(statearr_53889_53915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53875 === (8))){
var inst_53851 = (state_53874[(7)]);
var inst_53861 = cljs.core.next.call(null,inst_53851);
var inst_53851__$1 = inst_53861;
var state_53874__$1 = (function (){var statearr_53890 = state_53874;
(statearr_53890[(7)] = inst_53851__$1);

return statearr_53890;
})();
var statearr_53891_53916 = state_53874__$1;
(statearr_53891_53916[(2)] = null);

(statearr_53891_53916[(1)] = (2));


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
});})(c__53002__auto__))
;
return ((function (switch__52888__auto__,c__53002__auto__){
return (function() {
var cljs$core$async$state_machine__52889__auto__ = null;
var cljs$core$async$state_machine__52889__auto____0 = (function (){
var statearr_53895 = [null,null,null,null,null,null,null,null];
(statearr_53895[(0)] = cljs$core$async$state_machine__52889__auto__);

(statearr_53895[(1)] = (1));

return statearr_53895;
});
var cljs$core$async$state_machine__52889__auto____1 = (function (state_53874){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_53874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e53896){if((e53896 instanceof Object)){
var ex__52892__auto__ = e53896;
var statearr_53897_53917 = state_53874;
(statearr_53897_53917[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53918 = state_53874;
state_53874 = G__53918;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$state_machine__52889__auto__ = function(state_53874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52889__auto____1.call(this,state_53874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52889__auto____0;
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52889__auto____1;
return cljs$core$async$state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto__))
})();
var state__53004__auto__ = (function (){var statearr_53898 = f__53003__auto__.call(null);
(statearr_53898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto__);

return statearr_53898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto__))
);

return c__53002__auto__;
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
var x__48346__auto__ = (((_ == null))?null:_);
var m__48347__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__48346__auto__)]);
if(!((m__48347__auto__ == null))){
return m__48347__auto__.call(null,_);
} else {
var m__48347__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__48347__auto____$1 == null))){
return m__48347__auto____$1.call(null,_);
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
var x__48346__auto__ = (((m == null))?null:m);
var m__48347__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__48346__auto__)]);
if(!((m__48347__auto__ == null))){
return m__48347__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__48347__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__48347__auto____$1 == null))){
return m__48347__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__48346__auto__ = (((m == null))?null:m);
var m__48347__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__48346__auto__)]);
if(!((m__48347__auto__ == null))){
return m__48347__auto__.call(null,m,ch);
} else {
var m__48347__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__48347__auto____$1 == null))){
return m__48347__auto____$1.call(null,m,ch);
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
var x__48346__auto__ = (((m == null))?null:m);
var m__48347__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__48346__auto__)]);
if(!((m__48347__auto__ == null))){
return m__48347__auto__.call(null,m);
} else {
var m__48347__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__48347__auto____$1 == null))){
return m__48347__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async54144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54144 = (function (ch,cs,meta54145){
this.ch = ch;
this.cs = cs;
this.meta54145 = meta54145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_54146,meta54145__$1){
var self__ = this;
var _54146__$1 = this;
return (new cljs.core.async.t_cljs$core$async54144(self__.ch,self__.cs,meta54145__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_54146){
var self__ = this;
var _54146__$1 = this;
return self__.meta54145;
});})(cs))
;

cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54144.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54145","meta54145",-1158782321,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async54144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54144";

cljs.core.async.t_cljs$core$async54144.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cljs.core.async/t_cljs$core$async54144");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async54144 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async54144(ch__$1,cs__$1,meta54145){
return (new cljs.core.async.t_cljs$core$async54144(ch__$1,cs__$1,meta54145));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async54144(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__53002__auto___54369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___54369,cs,m,dchan,dctr,done){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___54369,cs,m,dchan,dctr,done){
return (function (state_54281){
var state_val_54282 = (state_54281[(1)]);
if((state_val_54282 === (7))){
var inst_54277 = (state_54281[(2)]);
var state_54281__$1 = state_54281;
var statearr_54283_54370 = state_54281__$1;
(statearr_54283_54370[(2)] = inst_54277);

(statearr_54283_54370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (20))){
var inst_54180 = (state_54281[(7)]);
var inst_54192 = cljs.core.first.call(null,inst_54180);
var inst_54193 = cljs.core.nth.call(null,inst_54192,(0),null);
var inst_54194 = cljs.core.nth.call(null,inst_54192,(1),null);
var state_54281__$1 = (function (){var statearr_54284 = state_54281;
(statearr_54284[(8)] = inst_54193);

return statearr_54284;
})();
if(cljs.core.truth_(inst_54194)){
var statearr_54285_54371 = state_54281__$1;
(statearr_54285_54371[(1)] = (22));

} else {
var statearr_54286_54372 = state_54281__$1;
(statearr_54286_54372[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (27))){
var inst_54149 = (state_54281[(9)]);
var inst_54229 = (state_54281[(10)]);
var inst_54222 = (state_54281[(11)]);
var inst_54224 = (state_54281[(12)]);
var inst_54229__$1 = cljs.core._nth.call(null,inst_54222,inst_54224);
var inst_54230 = cljs.core.async.put_BANG_.call(null,inst_54229__$1,inst_54149,done);
var state_54281__$1 = (function (){var statearr_54287 = state_54281;
(statearr_54287[(10)] = inst_54229__$1);

return statearr_54287;
})();
if(cljs.core.truth_(inst_54230)){
var statearr_54288_54373 = state_54281__$1;
(statearr_54288_54373[(1)] = (30));

} else {
var statearr_54289_54374 = state_54281__$1;
(statearr_54289_54374[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (1))){
var state_54281__$1 = state_54281;
var statearr_54290_54375 = state_54281__$1;
(statearr_54290_54375[(2)] = null);

(statearr_54290_54375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (24))){
var inst_54180 = (state_54281[(7)]);
var inst_54199 = (state_54281[(2)]);
var inst_54200 = cljs.core.next.call(null,inst_54180);
var inst_54158 = inst_54200;
var inst_54159 = null;
var inst_54160 = (0);
var inst_54161 = (0);
var state_54281__$1 = (function (){var statearr_54291 = state_54281;
(statearr_54291[(13)] = inst_54158);

(statearr_54291[(14)] = inst_54199);

(statearr_54291[(15)] = inst_54159);

(statearr_54291[(16)] = inst_54161);

(statearr_54291[(17)] = inst_54160);

return statearr_54291;
})();
var statearr_54292_54376 = state_54281__$1;
(statearr_54292_54376[(2)] = null);

(statearr_54292_54376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (39))){
var state_54281__$1 = state_54281;
var statearr_54296_54377 = state_54281__$1;
(statearr_54296_54377[(2)] = null);

(statearr_54296_54377[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (4))){
var inst_54149 = (state_54281[(9)]);
var inst_54149__$1 = (state_54281[(2)]);
var inst_54150 = (inst_54149__$1 == null);
var state_54281__$1 = (function (){var statearr_54297 = state_54281;
(statearr_54297[(9)] = inst_54149__$1);

return statearr_54297;
})();
if(cljs.core.truth_(inst_54150)){
var statearr_54298_54378 = state_54281__$1;
(statearr_54298_54378[(1)] = (5));

} else {
var statearr_54299_54379 = state_54281__$1;
(statearr_54299_54379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (15))){
var inst_54158 = (state_54281[(13)]);
var inst_54159 = (state_54281[(15)]);
var inst_54161 = (state_54281[(16)]);
var inst_54160 = (state_54281[(17)]);
var inst_54176 = (state_54281[(2)]);
var inst_54177 = (inst_54161 + (1));
var tmp54293 = inst_54158;
var tmp54294 = inst_54159;
var tmp54295 = inst_54160;
var inst_54158__$1 = tmp54293;
var inst_54159__$1 = tmp54294;
var inst_54160__$1 = tmp54295;
var inst_54161__$1 = inst_54177;
var state_54281__$1 = (function (){var statearr_54300 = state_54281;
(statearr_54300[(18)] = inst_54176);

(statearr_54300[(13)] = inst_54158__$1);

(statearr_54300[(15)] = inst_54159__$1);

(statearr_54300[(16)] = inst_54161__$1);

(statearr_54300[(17)] = inst_54160__$1);

return statearr_54300;
})();
var statearr_54301_54380 = state_54281__$1;
(statearr_54301_54380[(2)] = null);

(statearr_54301_54380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (21))){
var inst_54203 = (state_54281[(2)]);
var state_54281__$1 = state_54281;
var statearr_54305_54381 = state_54281__$1;
(statearr_54305_54381[(2)] = inst_54203);

(statearr_54305_54381[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (31))){
var inst_54229 = (state_54281[(10)]);
var inst_54233 = done.call(null,null);
var inst_54234 = cljs.core.async.untap_STAR_.call(null,m,inst_54229);
var state_54281__$1 = (function (){var statearr_54306 = state_54281;
(statearr_54306[(19)] = inst_54233);

return statearr_54306;
})();
var statearr_54307_54382 = state_54281__$1;
(statearr_54307_54382[(2)] = inst_54234);

(statearr_54307_54382[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (32))){
var inst_54223 = (state_54281[(20)]);
var inst_54222 = (state_54281[(11)]);
var inst_54221 = (state_54281[(21)]);
var inst_54224 = (state_54281[(12)]);
var inst_54236 = (state_54281[(2)]);
var inst_54237 = (inst_54224 + (1));
var tmp54302 = inst_54223;
var tmp54303 = inst_54222;
var tmp54304 = inst_54221;
var inst_54221__$1 = tmp54304;
var inst_54222__$1 = tmp54303;
var inst_54223__$1 = tmp54302;
var inst_54224__$1 = inst_54237;
var state_54281__$1 = (function (){var statearr_54308 = state_54281;
(statearr_54308[(20)] = inst_54223__$1);

(statearr_54308[(11)] = inst_54222__$1);

(statearr_54308[(21)] = inst_54221__$1);

(statearr_54308[(22)] = inst_54236);

(statearr_54308[(12)] = inst_54224__$1);

return statearr_54308;
})();
var statearr_54309_54383 = state_54281__$1;
(statearr_54309_54383[(2)] = null);

(statearr_54309_54383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (40))){
var inst_54249 = (state_54281[(23)]);
var inst_54253 = done.call(null,null);
var inst_54254 = cljs.core.async.untap_STAR_.call(null,m,inst_54249);
var state_54281__$1 = (function (){var statearr_54310 = state_54281;
(statearr_54310[(24)] = inst_54253);

return statearr_54310;
})();
var statearr_54311_54384 = state_54281__$1;
(statearr_54311_54384[(2)] = inst_54254);

(statearr_54311_54384[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (33))){
var inst_54240 = (state_54281[(25)]);
var inst_54242 = cljs.core.chunked_seq_QMARK_.call(null,inst_54240);
var state_54281__$1 = state_54281;
if(inst_54242){
var statearr_54312_54385 = state_54281__$1;
(statearr_54312_54385[(1)] = (36));

} else {
var statearr_54313_54386 = state_54281__$1;
(statearr_54313_54386[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (13))){
var inst_54170 = (state_54281[(26)]);
var inst_54173 = cljs.core.async.close_BANG_.call(null,inst_54170);
var state_54281__$1 = state_54281;
var statearr_54314_54387 = state_54281__$1;
(statearr_54314_54387[(2)] = inst_54173);

(statearr_54314_54387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (22))){
var inst_54193 = (state_54281[(8)]);
var inst_54196 = cljs.core.async.close_BANG_.call(null,inst_54193);
var state_54281__$1 = state_54281;
var statearr_54315_54388 = state_54281__$1;
(statearr_54315_54388[(2)] = inst_54196);

(statearr_54315_54388[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (36))){
var inst_54240 = (state_54281[(25)]);
var inst_54244 = cljs.core.chunk_first.call(null,inst_54240);
var inst_54245 = cljs.core.chunk_rest.call(null,inst_54240);
var inst_54246 = cljs.core.count.call(null,inst_54244);
var inst_54221 = inst_54245;
var inst_54222 = inst_54244;
var inst_54223 = inst_54246;
var inst_54224 = (0);
var state_54281__$1 = (function (){var statearr_54316 = state_54281;
(statearr_54316[(20)] = inst_54223);

(statearr_54316[(11)] = inst_54222);

(statearr_54316[(21)] = inst_54221);

(statearr_54316[(12)] = inst_54224);

return statearr_54316;
})();
var statearr_54317_54389 = state_54281__$1;
(statearr_54317_54389[(2)] = null);

(statearr_54317_54389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (41))){
var inst_54240 = (state_54281[(25)]);
var inst_54256 = (state_54281[(2)]);
var inst_54257 = cljs.core.next.call(null,inst_54240);
var inst_54221 = inst_54257;
var inst_54222 = null;
var inst_54223 = (0);
var inst_54224 = (0);
var state_54281__$1 = (function (){var statearr_54318 = state_54281;
(statearr_54318[(20)] = inst_54223);

(statearr_54318[(11)] = inst_54222);

(statearr_54318[(21)] = inst_54221);

(statearr_54318[(12)] = inst_54224);

(statearr_54318[(27)] = inst_54256);

return statearr_54318;
})();
var statearr_54319_54390 = state_54281__$1;
(statearr_54319_54390[(2)] = null);

(statearr_54319_54390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (43))){
var state_54281__$1 = state_54281;
var statearr_54320_54391 = state_54281__$1;
(statearr_54320_54391[(2)] = null);

(statearr_54320_54391[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (29))){
var inst_54265 = (state_54281[(2)]);
var state_54281__$1 = state_54281;
var statearr_54321_54392 = state_54281__$1;
(statearr_54321_54392[(2)] = inst_54265);

(statearr_54321_54392[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (44))){
var inst_54274 = (state_54281[(2)]);
var state_54281__$1 = (function (){var statearr_54322 = state_54281;
(statearr_54322[(28)] = inst_54274);

return statearr_54322;
})();
var statearr_54323_54393 = state_54281__$1;
(statearr_54323_54393[(2)] = null);

(statearr_54323_54393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (6))){
var inst_54213 = (state_54281[(29)]);
var inst_54212 = cljs.core.deref.call(null,cs);
var inst_54213__$1 = cljs.core.keys.call(null,inst_54212);
var inst_54214 = cljs.core.count.call(null,inst_54213__$1);
var inst_54215 = cljs.core.reset_BANG_.call(null,dctr,inst_54214);
var inst_54220 = cljs.core.seq.call(null,inst_54213__$1);
var inst_54221 = inst_54220;
var inst_54222 = null;
var inst_54223 = (0);
var inst_54224 = (0);
var state_54281__$1 = (function (){var statearr_54324 = state_54281;
(statearr_54324[(20)] = inst_54223);

(statearr_54324[(11)] = inst_54222);

(statearr_54324[(21)] = inst_54221);

(statearr_54324[(30)] = inst_54215);

(statearr_54324[(12)] = inst_54224);

(statearr_54324[(29)] = inst_54213__$1);

return statearr_54324;
})();
var statearr_54325_54394 = state_54281__$1;
(statearr_54325_54394[(2)] = null);

(statearr_54325_54394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (28))){
var inst_54221 = (state_54281[(21)]);
var inst_54240 = (state_54281[(25)]);
var inst_54240__$1 = cljs.core.seq.call(null,inst_54221);
var state_54281__$1 = (function (){var statearr_54326 = state_54281;
(statearr_54326[(25)] = inst_54240__$1);

return statearr_54326;
})();
if(inst_54240__$1){
var statearr_54327_54395 = state_54281__$1;
(statearr_54327_54395[(1)] = (33));

} else {
var statearr_54328_54396 = state_54281__$1;
(statearr_54328_54396[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (25))){
var inst_54223 = (state_54281[(20)]);
var inst_54224 = (state_54281[(12)]);
var inst_54226 = (inst_54224 < inst_54223);
var inst_54227 = inst_54226;
var state_54281__$1 = state_54281;
if(cljs.core.truth_(inst_54227)){
var statearr_54329_54397 = state_54281__$1;
(statearr_54329_54397[(1)] = (27));

} else {
var statearr_54330_54398 = state_54281__$1;
(statearr_54330_54398[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (34))){
var state_54281__$1 = state_54281;
var statearr_54331_54399 = state_54281__$1;
(statearr_54331_54399[(2)] = null);

(statearr_54331_54399[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (17))){
var state_54281__$1 = state_54281;
var statearr_54332_54400 = state_54281__$1;
(statearr_54332_54400[(2)] = null);

(statearr_54332_54400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (3))){
var inst_54279 = (state_54281[(2)]);
var state_54281__$1 = state_54281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54281__$1,inst_54279);
} else {
if((state_val_54282 === (12))){
var inst_54208 = (state_54281[(2)]);
var state_54281__$1 = state_54281;
var statearr_54333_54401 = state_54281__$1;
(statearr_54333_54401[(2)] = inst_54208);

(statearr_54333_54401[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (2))){
var state_54281__$1 = state_54281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54281__$1,(4),ch);
} else {
if((state_val_54282 === (23))){
var state_54281__$1 = state_54281;
var statearr_54334_54402 = state_54281__$1;
(statearr_54334_54402[(2)] = null);

(statearr_54334_54402[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (35))){
var inst_54263 = (state_54281[(2)]);
var state_54281__$1 = state_54281;
var statearr_54335_54403 = state_54281__$1;
(statearr_54335_54403[(2)] = inst_54263);

(statearr_54335_54403[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (19))){
var inst_54180 = (state_54281[(7)]);
var inst_54184 = cljs.core.chunk_first.call(null,inst_54180);
var inst_54185 = cljs.core.chunk_rest.call(null,inst_54180);
var inst_54186 = cljs.core.count.call(null,inst_54184);
var inst_54158 = inst_54185;
var inst_54159 = inst_54184;
var inst_54160 = inst_54186;
var inst_54161 = (0);
var state_54281__$1 = (function (){var statearr_54336 = state_54281;
(statearr_54336[(13)] = inst_54158);

(statearr_54336[(15)] = inst_54159);

(statearr_54336[(16)] = inst_54161);

(statearr_54336[(17)] = inst_54160);

return statearr_54336;
})();
var statearr_54337_54404 = state_54281__$1;
(statearr_54337_54404[(2)] = null);

(statearr_54337_54404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (11))){
var inst_54158 = (state_54281[(13)]);
var inst_54180 = (state_54281[(7)]);
var inst_54180__$1 = cljs.core.seq.call(null,inst_54158);
var state_54281__$1 = (function (){var statearr_54338 = state_54281;
(statearr_54338[(7)] = inst_54180__$1);

return statearr_54338;
})();
if(inst_54180__$1){
var statearr_54339_54405 = state_54281__$1;
(statearr_54339_54405[(1)] = (16));

} else {
var statearr_54340_54406 = state_54281__$1;
(statearr_54340_54406[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (9))){
var inst_54210 = (state_54281[(2)]);
var state_54281__$1 = state_54281;
var statearr_54341_54407 = state_54281__$1;
(statearr_54341_54407[(2)] = inst_54210);

(statearr_54341_54407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (5))){
var inst_54156 = cljs.core.deref.call(null,cs);
var inst_54157 = cljs.core.seq.call(null,inst_54156);
var inst_54158 = inst_54157;
var inst_54159 = null;
var inst_54160 = (0);
var inst_54161 = (0);
var state_54281__$1 = (function (){var statearr_54342 = state_54281;
(statearr_54342[(13)] = inst_54158);

(statearr_54342[(15)] = inst_54159);

(statearr_54342[(16)] = inst_54161);

(statearr_54342[(17)] = inst_54160);

return statearr_54342;
})();
var statearr_54343_54408 = state_54281__$1;
(statearr_54343_54408[(2)] = null);

(statearr_54343_54408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (14))){
var state_54281__$1 = state_54281;
var statearr_54344_54409 = state_54281__$1;
(statearr_54344_54409[(2)] = null);

(statearr_54344_54409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (45))){
var inst_54271 = (state_54281[(2)]);
var state_54281__$1 = state_54281;
var statearr_54345_54410 = state_54281__$1;
(statearr_54345_54410[(2)] = inst_54271);

(statearr_54345_54410[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (26))){
var inst_54213 = (state_54281[(29)]);
var inst_54267 = (state_54281[(2)]);
var inst_54268 = cljs.core.seq.call(null,inst_54213);
var state_54281__$1 = (function (){var statearr_54346 = state_54281;
(statearr_54346[(31)] = inst_54267);

return statearr_54346;
})();
if(inst_54268){
var statearr_54347_54411 = state_54281__$1;
(statearr_54347_54411[(1)] = (42));

} else {
var statearr_54348_54412 = state_54281__$1;
(statearr_54348_54412[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (16))){
var inst_54180 = (state_54281[(7)]);
var inst_54182 = cljs.core.chunked_seq_QMARK_.call(null,inst_54180);
var state_54281__$1 = state_54281;
if(inst_54182){
var statearr_54349_54413 = state_54281__$1;
(statearr_54349_54413[(1)] = (19));

} else {
var statearr_54350_54414 = state_54281__$1;
(statearr_54350_54414[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (38))){
var inst_54260 = (state_54281[(2)]);
var state_54281__$1 = state_54281;
var statearr_54351_54415 = state_54281__$1;
(statearr_54351_54415[(2)] = inst_54260);

(statearr_54351_54415[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (30))){
var state_54281__$1 = state_54281;
var statearr_54352_54416 = state_54281__$1;
(statearr_54352_54416[(2)] = null);

(statearr_54352_54416[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (10))){
var inst_54159 = (state_54281[(15)]);
var inst_54161 = (state_54281[(16)]);
var inst_54169 = cljs.core._nth.call(null,inst_54159,inst_54161);
var inst_54170 = cljs.core.nth.call(null,inst_54169,(0),null);
var inst_54171 = cljs.core.nth.call(null,inst_54169,(1),null);
var state_54281__$1 = (function (){var statearr_54353 = state_54281;
(statearr_54353[(26)] = inst_54170);

return statearr_54353;
})();
if(cljs.core.truth_(inst_54171)){
var statearr_54354_54417 = state_54281__$1;
(statearr_54354_54417[(1)] = (13));

} else {
var statearr_54355_54418 = state_54281__$1;
(statearr_54355_54418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (18))){
var inst_54206 = (state_54281[(2)]);
var state_54281__$1 = state_54281;
var statearr_54356_54419 = state_54281__$1;
(statearr_54356_54419[(2)] = inst_54206);

(statearr_54356_54419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (42))){
var state_54281__$1 = state_54281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54281__$1,(45),dchan);
} else {
if((state_val_54282 === (37))){
var inst_54149 = (state_54281[(9)]);
var inst_54249 = (state_54281[(23)]);
var inst_54240 = (state_54281[(25)]);
var inst_54249__$1 = cljs.core.first.call(null,inst_54240);
var inst_54250 = cljs.core.async.put_BANG_.call(null,inst_54249__$1,inst_54149,done);
var state_54281__$1 = (function (){var statearr_54357 = state_54281;
(statearr_54357[(23)] = inst_54249__$1);

return statearr_54357;
})();
if(cljs.core.truth_(inst_54250)){
var statearr_54358_54420 = state_54281__$1;
(statearr_54358_54420[(1)] = (39));

} else {
var statearr_54359_54421 = state_54281__$1;
(statearr_54359_54421[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54282 === (8))){
var inst_54161 = (state_54281[(16)]);
var inst_54160 = (state_54281[(17)]);
var inst_54163 = (inst_54161 < inst_54160);
var inst_54164 = inst_54163;
var state_54281__$1 = state_54281;
if(cljs.core.truth_(inst_54164)){
var statearr_54360_54422 = state_54281__$1;
(statearr_54360_54422[(1)] = (10));

} else {
var statearr_54361_54423 = state_54281__$1;
(statearr_54361_54423[(1)] = (11));

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
});})(c__53002__auto___54369,cs,m,dchan,dctr,done))
;
return ((function (switch__52888__auto__,c__53002__auto___54369,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__52889__auto__ = null;
var cljs$core$async$mult_$_state_machine__52889__auto____0 = (function (){
var statearr_54365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54365[(0)] = cljs$core$async$mult_$_state_machine__52889__auto__);

(statearr_54365[(1)] = (1));

return statearr_54365;
});
var cljs$core$async$mult_$_state_machine__52889__auto____1 = (function (state_54281){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_54281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e54366){if((e54366 instanceof Object)){
var ex__52892__auto__ = e54366;
var statearr_54367_54424 = state_54281;
(statearr_54367_54424[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54425 = state_54281;
state_54281 = G__54425;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__52889__auto__ = function(state_54281){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__52889__auto____1.call(this,state_54281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__52889__auto____0;
cljs$core$async$mult_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__52889__auto____1;
return cljs$core$async$mult_$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___54369,cs,m,dchan,dctr,done))
})();
var state__53004__auto__ = (function (){var statearr_54368 = f__53003__auto__.call(null);
(statearr_54368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___54369);

return statearr_54368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___54369,cs,m,dchan,dctr,done))
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
var args54426 = [];
var len__48849__auto___54429 = arguments.length;
var i__48850__auto___54430 = (0);
while(true){
if((i__48850__auto___54430 < len__48849__auto___54429)){
args54426.push((arguments[i__48850__auto___54430]));

var G__54431 = (i__48850__auto___54430 + (1));
i__48850__auto___54430 = G__54431;
continue;
} else {
}
break;
}

var G__54428 = args54426.length;
switch (G__54428) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54426.length)].join('')));

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
var x__48346__auto__ = (((m == null))?null:m);
var m__48347__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__48346__auto__)]);
if(!((m__48347__auto__ == null))){
return m__48347__auto__.call(null,m,ch);
} else {
var m__48347__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__48347__auto____$1 == null))){
return m__48347__auto____$1.call(null,m,ch);
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
var x__48346__auto__ = (((m == null))?null:m);
var m__48347__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__48346__auto__)]);
if(!((m__48347__auto__ == null))){
return m__48347__auto__.call(null,m,ch);
} else {
var m__48347__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__48347__auto____$1 == null))){
return m__48347__auto____$1.call(null,m,ch);
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
var x__48346__auto__ = (((m == null))?null:m);
var m__48347__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__48346__auto__)]);
if(!((m__48347__auto__ == null))){
return m__48347__auto__.call(null,m);
} else {
var m__48347__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__48347__auto____$1 == null))){
return m__48347__auto____$1.call(null,m);
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
var x__48346__auto__ = (((m == null))?null:m);
var m__48347__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__48346__auto__)]);
if(!((m__48347__auto__ == null))){
return m__48347__auto__.call(null,m,state_map);
} else {
var m__48347__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__48347__auto____$1 == null))){
return m__48347__auto____$1.call(null,m,state_map);
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
var x__48346__auto__ = (((m == null))?null:m);
var m__48347__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__48346__auto__)]);
if(!((m__48347__auto__ == null))){
return m__48347__auto__.call(null,m,mode);
} else {
var m__48347__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__48347__auto____$1 == null))){
return m__48347__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__48856__auto__ = [];
var len__48849__auto___54443 = arguments.length;
var i__48850__auto___54444 = (0);
while(true){
if((i__48850__auto___54444 < len__48849__auto___54443)){
args__48856__auto__.push((arguments[i__48850__auto___54444]));

var G__54445 = (i__48850__auto___54444 + (1));
i__48850__auto___54444 = G__54445;
continue;
} else {
}
break;
}

var argseq__48857__auto__ = ((((3) < args__48856__auto__.length))?(new cljs.core.IndexedSeq(args__48856__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48857__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__54437){
var map__54438 = p__54437;
var map__54438__$1 = ((((!((map__54438 == null)))?((((map__54438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54438):map__54438);
var opts = map__54438__$1;
var statearr_54440_54446 = state;
(statearr_54440_54446[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__54438,map__54438__$1,opts){
return (function (val){
var statearr_54441_54447 = state;
(statearr_54441_54447[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__54438,map__54438__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_54442_54448 = state;
(statearr_54442_54448[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq54433){
var G__54434 = cljs.core.first.call(null,seq54433);
var seq54433__$1 = cljs.core.next.call(null,seq54433);
var G__54435 = cljs.core.first.call(null,seq54433__$1);
var seq54433__$2 = cljs.core.next.call(null,seq54433__$1);
var G__54436 = cljs.core.first.call(null,seq54433__$2);
var seq54433__$3 = cljs.core.next.call(null,seq54433__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54434,G__54435,G__54436,seq54433__$3);
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
if(typeof cljs.core.async.t_cljs$core$async54616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54616 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta54617){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta54617 = meta54617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54618,meta54617__$1){
var self__ = this;
var _54618__$1 = this;
return (new cljs.core.async.t_cljs$core$async54616(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta54617__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54616.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54618){
var self__ = this;
var _54618__$1 = this;
return self__.meta54617;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54616.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54616.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54616.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54616.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54616.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54616.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54616.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54616.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54616.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta54617","meta54617",-1656953748,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54616";

cljs.core.async.t_cljs$core$async54616.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cljs.core.async/t_cljs$core$async54616");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async54616 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async54616(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta54617){
return (new cljs.core.async.t_cljs$core$async54616(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta54617));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async54616(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53002__auto___54783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___54783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___54783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_54720){
var state_val_54721 = (state_54720[(1)]);
if((state_val_54721 === (7))){
var inst_54635 = (state_54720[(2)]);
var state_54720__$1 = state_54720;
var statearr_54722_54784 = state_54720__$1;
(statearr_54722_54784[(2)] = inst_54635);

(statearr_54722_54784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (20))){
var inst_54647 = (state_54720[(7)]);
var state_54720__$1 = state_54720;
var statearr_54723_54785 = state_54720__$1;
(statearr_54723_54785[(2)] = inst_54647);

(statearr_54723_54785[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (27))){
var state_54720__$1 = state_54720;
var statearr_54724_54786 = state_54720__$1;
(statearr_54724_54786[(2)] = null);

(statearr_54724_54786[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (1))){
var inst_54622 = (state_54720[(8)]);
var inst_54622__$1 = calc_state.call(null);
var inst_54624 = (inst_54622__$1 == null);
var inst_54625 = cljs.core.not.call(null,inst_54624);
var state_54720__$1 = (function (){var statearr_54725 = state_54720;
(statearr_54725[(8)] = inst_54622__$1);

return statearr_54725;
})();
if(inst_54625){
var statearr_54726_54787 = state_54720__$1;
(statearr_54726_54787[(1)] = (2));

} else {
var statearr_54727_54788 = state_54720__$1;
(statearr_54727_54788[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (24))){
var inst_54680 = (state_54720[(9)]);
var inst_54694 = (state_54720[(10)]);
var inst_54671 = (state_54720[(11)]);
var inst_54694__$1 = inst_54671.call(null,inst_54680);
var state_54720__$1 = (function (){var statearr_54728 = state_54720;
(statearr_54728[(10)] = inst_54694__$1);

return statearr_54728;
})();
if(cljs.core.truth_(inst_54694__$1)){
var statearr_54729_54789 = state_54720__$1;
(statearr_54729_54789[(1)] = (29));

} else {
var statearr_54730_54790 = state_54720__$1;
(statearr_54730_54790[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (4))){
var inst_54638 = (state_54720[(2)]);
var state_54720__$1 = state_54720;
if(cljs.core.truth_(inst_54638)){
var statearr_54731_54791 = state_54720__$1;
(statearr_54731_54791[(1)] = (8));

} else {
var statearr_54732_54792 = state_54720__$1;
(statearr_54732_54792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (15))){
var inst_54665 = (state_54720[(2)]);
var state_54720__$1 = state_54720;
if(cljs.core.truth_(inst_54665)){
var statearr_54733_54793 = state_54720__$1;
(statearr_54733_54793[(1)] = (19));

} else {
var statearr_54734_54794 = state_54720__$1;
(statearr_54734_54794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (21))){
var inst_54670 = (state_54720[(12)]);
var inst_54670__$1 = (state_54720[(2)]);
var inst_54671 = cljs.core.get.call(null,inst_54670__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54672 = cljs.core.get.call(null,inst_54670__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54673 = cljs.core.get.call(null,inst_54670__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_54720__$1 = (function (){var statearr_54735 = state_54720;
(statearr_54735[(13)] = inst_54672);

(statearr_54735[(11)] = inst_54671);

(statearr_54735[(12)] = inst_54670__$1);

return statearr_54735;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_54720__$1,(22),inst_54673);
} else {
if((state_val_54721 === (31))){
var inst_54702 = (state_54720[(2)]);
var state_54720__$1 = state_54720;
if(cljs.core.truth_(inst_54702)){
var statearr_54736_54795 = state_54720__$1;
(statearr_54736_54795[(1)] = (32));

} else {
var statearr_54737_54796 = state_54720__$1;
(statearr_54737_54796[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (32))){
var inst_54679 = (state_54720[(14)]);
var state_54720__$1 = state_54720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54720__$1,(35),out,inst_54679);
} else {
if((state_val_54721 === (33))){
var inst_54670 = (state_54720[(12)]);
var inst_54647 = inst_54670;
var state_54720__$1 = (function (){var statearr_54738 = state_54720;
(statearr_54738[(7)] = inst_54647);

return statearr_54738;
})();
var statearr_54739_54797 = state_54720__$1;
(statearr_54739_54797[(2)] = null);

(statearr_54739_54797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (13))){
var inst_54647 = (state_54720[(7)]);
var inst_54654 = inst_54647.cljs$lang$protocol_mask$partition0$;
var inst_54655 = (inst_54654 & (64));
var inst_54656 = inst_54647.cljs$core$ISeq$;
var inst_54657 = (cljs.core.PROTOCOL_SENTINEL === inst_54656);
var inst_54658 = (inst_54655) || (inst_54657);
var state_54720__$1 = state_54720;
if(cljs.core.truth_(inst_54658)){
var statearr_54740_54798 = state_54720__$1;
(statearr_54740_54798[(1)] = (16));

} else {
var statearr_54741_54799 = state_54720__$1;
(statearr_54741_54799[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (22))){
var inst_54680 = (state_54720[(9)]);
var inst_54679 = (state_54720[(14)]);
var inst_54678 = (state_54720[(2)]);
var inst_54679__$1 = cljs.core.nth.call(null,inst_54678,(0),null);
var inst_54680__$1 = cljs.core.nth.call(null,inst_54678,(1),null);
var inst_54681 = (inst_54679__$1 == null);
var inst_54682 = cljs.core._EQ_.call(null,inst_54680__$1,change);
var inst_54683 = (inst_54681) || (inst_54682);
var state_54720__$1 = (function (){var statearr_54742 = state_54720;
(statearr_54742[(9)] = inst_54680__$1);

(statearr_54742[(14)] = inst_54679__$1);

return statearr_54742;
})();
if(cljs.core.truth_(inst_54683)){
var statearr_54743_54800 = state_54720__$1;
(statearr_54743_54800[(1)] = (23));

} else {
var statearr_54744_54801 = state_54720__$1;
(statearr_54744_54801[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (36))){
var inst_54670 = (state_54720[(12)]);
var inst_54647 = inst_54670;
var state_54720__$1 = (function (){var statearr_54745 = state_54720;
(statearr_54745[(7)] = inst_54647);

return statearr_54745;
})();
var statearr_54746_54802 = state_54720__$1;
(statearr_54746_54802[(2)] = null);

(statearr_54746_54802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (29))){
var inst_54694 = (state_54720[(10)]);
var state_54720__$1 = state_54720;
var statearr_54747_54803 = state_54720__$1;
(statearr_54747_54803[(2)] = inst_54694);

(statearr_54747_54803[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (6))){
var state_54720__$1 = state_54720;
var statearr_54748_54804 = state_54720__$1;
(statearr_54748_54804[(2)] = false);

(statearr_54748_54804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (28))){
var inst_54690 = (state_54720[(2)]);
var inst_54691 = calc_state.call(null);
var inst_54647 = inst_54691;
var state_54720__$1 = (function (){var statearr_54749 = state_54720;
(statearr_54749[(15)] = inst_54690);

(statearr_54749[(7)] = inst_54647);

return statearr_54749;
})();
var statearr_54750_54805 = state_54720__$1;
(statearr_54750_54805[(2)] = null);

(statearr_54750_54805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (25))){
var inst_54716 = (state_54720[(2)]);
var state_54720__$1 = state_54720;
var statearr_54751_54806 = state_54720__$1;
(statearr_54751_54806[(2)] = inst_54716);

(statearr_54751_54806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (34))){
var inst_54714 = (state_54720[(2)]);
var state_54720__$1 = state_54720;
var statearr_54752_54807 = state_54720__$1;
(statearr_54752_54807[(2)] = inst_54714);

(statearr_54752_54807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (17))){
var state_54720__$1 = state_54720;
var statearr_54753_54808 = state_54720__$1;
(statearr_54753_54808[(2)] = false);

(statearr_54753_54808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (3))){
var state_54720__$1 = state_54720;
var statearr_54754_54809 = state_54720__$1;
(statearr_54754_54809[(2)] = false);

(statearr_54754_54809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (12))){
var inst_54718 = (state_54720[(2)]);
var state_54720__$1 = state_54720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54720__$1,inst_54718);
} else {
if((state_val_54721 === (2))){
var inst_54622 = (state_54720[(8)]);
var inst_54627 = inst_54622.cljs$lang$protocol_mask$partition0$;
var inst_54628 = (inst_54627 & (64));
var inst_54629 = inst_54622.cljs$core$ISeq$;
var inst_54630 = (cljs.core.PROTOCOL_SENTINEL === inst_54629);
var inst_54631 = (inst_54628) || (inst_54630);
var state_54720__$1 = state_54720;
if(cljs.core.truth_(inst_54631)){
var statearr_54755_54810 = state_54720__$1;
(statearr_54755_54810[(1)] = (5));

} else {
var statearr_54756_54811 = state_54720__$1;
(statearr_54756_54811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (23))){
var inst_54679 = (state_54720[(14)]);
var inst_54685 = (inst_54679 == null);
var state_54720__$1 = state_54720;
if(cljs.core.truth_(inst_54685)){
var statearr_54757_54812 = state_54720__$1;
(statearr_54757_54812[(1)] = (26));

} else {
var statearr_54758_54813 = state_54720__$1;
(statearr_54758_54813[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (35))){
var inst_54705 = (state_54720[(2)]);
var state_54720__$1 = state_54720;
if(cljs.core.truth_(inst_54705)){
var statearr_54759_54814 = state_54720__$1;
(statearr_54759_54814[(1)] = (36));

} else {
var statearr_54760_54815 = state_54720__$1;
(statearr_54760_54815[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (19))){
var inst_54647 = (state_54720[(7)]);
var inst_54667 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54647);
var state_54720__$1 = state_54720;
var statearr_54761_54816 = state_54720__$1;
(statearr_54761_54816[(2)] = inst_54667);

(statearr_54761_54816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (11))){
var inst_54647 = (state_54720[(7)]);
var inst_54651 = (inst_54647 == null);
var inst_54652 = cljs.core.not.call(null,inst_54651);
var state_54720__$1 = state_54720;
if(inst_54652){
var statearr_54762_54817 = state_54720__$1;
(statearr_54762_54817[(1)] = (13));

} else {
var statearr_54763_54818 = state_54720__$1;
(statearr_54763_54818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (9))){
var inst_54622 = (state_54720[(8)]);
var state_54720__$1 = state_54720;
var statearr_54764_54819 = state_54720__$1;
(statearr_54764_54819[(2)] = inst_54622);

(statearr_54764_54819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (5))){
var state_54720__$1 = state_54720;
var statearr_54765_54820 = state_54720__$1;
(statearr_54765_54820[(2)] = true);

(statearr_54765_54820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (14))){
var state_54720__$1 = state_54720;
var statearr_54766_54821 = state_54720__$1;
(statearr_54766_54821[(2)] = false);

(statearr_54766_54821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (26))){
var inst_54680 = (state_54720[(9)]);
var inst_54687 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_54680);
var state_54720__$1 = state_54720;
var statearr_54767_54822 = state_54720__$1;
(statearr_54767_54822[(2)] = inst_54687);

(statearr_54767_54822[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (16))){
var state_54720__$1 = state_54720;
var statearr_54768_54823 = state_54720__$1;
(statearr_54768_54823[(2)] = true);

(statearr_54768_54823[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (38))){
var inst_54710 = (state_54720[(2)]);
var state_54720__$1 = state_54720;
var statearr_54769_54824 = state_54720__$1;
(statearr_54769_54824[(2)] = inst_54710);

(statearr_54769_54824[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (30))){
var inst_54680 = (state_54720[(9)]);
var inst_54672 = (state_54720[(13)]);
var inst_54671 = (state_54720[(11)]);
var inst_54697 = cljs.core.empty_QMARK_.call(null,inst_54671);
var inst_54698 = inst_54672.call(null,inst_54680);
var inst_54699 = cljs.core.not.call(null,inst_54698);
var inst_54700 = (inst_54697) && (inst_54699);
var state_54720__$1 = state_54720;
var statearr_54770_54825 = state_54720__$1;
(statearr_54770_54825[(2)] = inst_54700);

(statearr_54770_54825[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (10))){
var inst_54622 = (state_54720[(8)]);
var inst_54643 = (state_54720[(2)]);
var inst_54644 = cljs.core.get.call(null,inst_54643,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54645 = cljs.core.get.call(null,inst_54643,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54646 = cljs.core.get.call(null,inst_54643,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_54647 = inst_54622;
var state_54720__$1 = (function (){var statearr_54771 = state_54720;
(statearr_54771[(7)] = inst_54647);

(statearr_54771[(16)] = inst_54644);

(statearr_54771[(17)] = inst_54646);

(statearr_54771[(18)] = inst_54645);

return statearr_54771;
})();
var statearr_54772_54826 = state_54720__$1;
(statearr_54772_54826[(2)] = null);

(statearr_54772_54826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (18))){
var inst_54662 = (state_54720[(2)]);
var state_54720__$1 = state_54720;
var statearr_54773_54827 = state_54720__$1;
(statearr_54773_54827[(2)] = inst_54662);

(statearr_54773_54827[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (37))){
var state_54720__$1 = state_54720;
var statearr_54774_54828 = state_54720__$1;
(statearr_54774_54828[(2)] = null);

(statearr_54774_54828[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (8))){
var inst_54622 = (state_54720[(8)]);
var inst_54640 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54622);
var state_54720__$1 = state_54720;
var statearr_54775_54829 = state_54720__$1;
(statearr_54775_54829[(2)] = inst_54640);

(statearr_54775_54829[(1)] = (10));


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
});})(c__53002__auto___54783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__52888__auto__,c__53002__auto___54783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__52889__auto__ = null;
var cljs$core$async$mix_$_state_machine__52889__auto____0 = (function (){
var statearr_54779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54779[(0)] = cljs$core$async$mix_$_state_machine__52889__auto__);

(statearr_54779[(1)] = (1));

return statearr_54779;
});
var cljs$core$async$mix_$_state_machine__52889__auto____1 = (function (state_54720){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_54720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e54780){if((e54780 instanceof Object)){
var ex__52892__auto__ = e54780;
var statearr_54781_54830 = state_54720;
(statearr_54781_54830[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54831 = state_54720;
state_54720 = G__54831;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__52889__auto__ = function(state_54720){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__52889__auto____1.call(this,state_54720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__52889__auto____0;
cljs$core$async$mix_$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__52889__auto____1;
return cljs$core$async$mix_$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___54783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__53004__auto__ = (function (){var statearr_54782 = f__53003__auto__.call(null);
(statearr_54782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___54783);

return statearr_54782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___54783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__48346__auto__ = (((p == null))?null:p);
var m__48347__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__48346__auto__)]);
if(!((m__48347__auto__ == null))){
return m__48347__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__48347__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__48347__auto____$1 == null))){
return m__48347__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__48346__auto__ = (((p == null))?null:p);
var m__48347__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__48346__auto__)]);
if(!((m__48347__auto__ == null))){
return m__48347__auto__.call(null,p,v,ch);
} else {
var m__48347__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__48347__auto____$1 == null))){
return m__48347__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args54832 = [];
var len__48849__auto___54835 = arguments.length;
var i__48850__auto___54836 = (0);
while(true){
if((i__48850__auto___54836 < len__48849__auto___54835)){
args54832.push((arguments[i__48850__auto___54836]));

var G__54837 = (i__48850__auto___54836 + (1));
i__48850__auto___54836 = G__54837;
continue;
} else {
}
break;
}

var G__54834 = args54832.length;
switch (G__54834) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54832.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__48346__auto__ = (((p == null))?null:p);
var m__48347__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__48346__auto__)]);
if(!((m__48347__auto__ == null))){
return m__48347__auto__.call(null,p);
} else {
var m__48347__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__48347__auto____$1 == null))){
return m__48347__auto____$1.call(null,p);
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
var x__48346__auto__ = (((p == null))?null:p);
var m__48347__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__48346__auto__)]);
if(!((m__48347__auto__ == null))){
return m__48347__auto__.call(null,p,v);
} else {
var m__48347__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__48347__auto____$1 == null))){
return m__48347__auto____$1.call(null,p,v);
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
var args54840 = [];
var len__48849__auto___54965 = arguments.length;
var i__48850__auto___54966 = (0);
while(true){
if((i__48850__auto___54966 < len__48849__auto___54965)){
args54840.push((arguments[i__48850__auto___54966]));

var G__54967 = (i__48850__auto___54966 + (1));
i__48850__auto___54966 = G__54967;
continue;
} else {
}
break;
}

var G__54842 = args54840.length;
switch (G__54842) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54840.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__47633__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__47633__auto__)){
return or__47633__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__47633__auto__,mults){
return (function (p1__54839_SHARP_){
if(cljs.core.truth_(p1__54839_SHARP_.call(null,topic))){
return p1__54839_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__54839_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__47633__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async54843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54843 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta54844){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta54844 = meta54844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_54845,meta54844__$1){
var self__ = this;
var _54845__$1 = this;
return (new cljs.core.async.t_cljs$core$async54843(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta54844__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_54845){
var self__ = this;
var _54845__$1 = this;
return self__.meta54844;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54843.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54843.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54843.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54843.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54843.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54843.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta54844","meta54844",-720808021,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54843";

cljs.core.async.t_cljs$core$async54843.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cljs.core.async/t_cljs$core$async54843");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async54843 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async54843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54844){
return (new cljs.core.async.t_cljs$core$async54843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54844));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async54843(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53002__auto___54969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___54969,mults,ensure_mult,p){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___54969,mults,ensure_mult,p){
return (function (state_54917){
var state_val_54918 = (state_54917[(1)]);
if((state_val_54918 === (7))){
var inst_54913 = (state_54917[(2)]);
var state_54917__$1 = state_54917;
var statearr_54919_54970 = state_54917__$1;
(statearr_54919_54970[(2)] = inst_54913);

(statearr_54919_54970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (20))){
var state_54917__$1 = state_54917;
var statearr_54920_54971 = state_54917__$1;
(statearr_54920_54971[(2)] = null);

(statearr_54920_54971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (1))){
var state_54917__$1 = state_54917;
var statearr_54921_54972 = state_54917__$1;
(statearr_54921_54972[(2)] = null);

(statearr_54921_54972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (24))){
var inst_54896 = (state_54917[(7)]);
var inst_54905 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_54896);
var state_54917__$1 = state_54917;
var statearr_54922_54973 = state_54917__$1;
(statearr_54922_54973[(2)] = inst_54905);

(statearr_54922_54973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (4))){
var inst_54848 = (state_54917[(8)]);
var inst_54848__$1 = (state_54917[(2)]);
var inst_54849 = (inst_54848__$1 == null);
var state_54917__$1 = (function (){var statearr_54923 = state_54917;
(statearr_54923[(8)] = inst_54848__$1);

return statearr_54923;
})();
if(cljs.core.truth_(inst_54849)){
var statearr_54924_54974 = state_54917__$1;
(statearr_54924_54974[(1)] = (5));

} else {
var statearr_54925_54975 = state_54917__$1;
(statearr_54925_54975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (15))){
var inst_54890 = (state_54917[(2)]);
var state_54917__$1 = state_54917;
var statearr_54926_54976 = state_54917__$1;
(statearr_54926_54976[(2)] = inst_54890);

(statearr_54926_54976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (21))){
var inst_54910 = (state_54917[(2)]);
var state_54917__$1 = (function (){var statearr_54927 = state_54917;
(statearr_54927[(9)] = inst_54910);

return statearr_54927;
})();
var statearr_54928_54977 = state_54917__$1;
(statearr_54928_54977[(2)] = null);

(statearr_54928_54977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (13))){
var inst_54872 = (state_54917[(10)]);
var inst_54874 = cljs.core.chunked_seq_QMARK_.call(null,inst_54872);
var state_54917__$1 = state_54917;
if(inst_54874){
var statearr_54929_54978 = state_54917__$1;
(statearr_54929_54978[(1)] = (16));

} else {
var statearr_54930_54979 = state_54917__$1;
(statearr_54930_54979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (22))){
var inst_54902 = (state_54917[(2)]);
var state_54917__$1 = state_54917;
if(cljs.core.truth_(inst_54902)){
var statearr_54931_54980 = state_54917__$1;
(statearr_54931_54980[(1)] = (23));

} else {
var statearr_54932_54981 = state_54917__$1;
(statearr_54932_54981[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (6))){
var inst_54898 = (state_54917[(11)]);
var inst_54848 = (state_54917[(8)]);
var inst_54896 = (state_54917[(7)]);
var inst_54896__$1 = topic_fn.call(null,inst_54848);
var inst_54897 = cljs.core.deref.call(null,mults);
var inst_54898__$1 = cljs.core.get.call(null,inst_54897,inst_54896__$1);
var state_54917__$1 = (function (){var statearr_54933 = state_54917;
(statearr_54933[(11)] = inst_54898__$1);

(statearr_54933[(7)] = inst_54896__$1);

return statearr_54933;
})();
if(cljs.core.truth_(inst_54898__$1)){
var statearr_54934_54982 = state_54917__$1;
(statearr_54934_54982[(1)] = (19));

} else {
var statearr_54935_54983 = state_54917__$1;
(statearr_54935_54983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (25))){
var inst_54907 = (state_54917[(2)]);
var state_54917__$1 = state_54917;
var statearr_54936_54984 = state_54917__$1;
(statearr_54936_54984[(2)] = inst_54907);

(statearr_54936_54984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (17))){
var inst_54872 = (state_54917[(10)]);
var inst_54881 = cljs.core.first.call(null,inst_54872);
var inst_54882 = cljs.core.async.muxch_STAR_.call(null,inst_54881);
var inst_54883 = cljs.core.async.close_BANG_.call(null,inst_54882);
var inst_54884 = cljs.core.next.call(null,inst_54872);
var inst_54858 = inst_54884;
var inst_54859 = null;
var inst_54860 = (0);
var inst_54861 = (0);
var state_54917__$1 = (function (){var statearr_54937 = state_54917;
(statearr_54937[(12)] = inst_54861);

(statearr_54937[(13)] = inst_54858);

(statearr_54937[(14)] = inst_54860);

(statearr_54937[(15)] = inst_54883);

(statearr_54937[(16)] = inst_54859);

return statearr_54937;
})();
var statearr_54938_54985 = state_54917__$1;
(statearr_54938_54985[(2)] = null);

(statearr_54938_54985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (3))){
var inst_54915 = (state_54917[(2)]);
var state_54917__$1 = state_54917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54917__$1,inst_54915);
} else {
if((state_val_54918 === (12))){
var inst_54892 = (state_54917[(2)]);
var state_54917__$1 = state_54917;
var statearr_54939_54986 = state_54917__$1;
(statearr_54939_54986[(2)] = inst_54892);

(statearr_54939_54986[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (2))){
var state_54917__$1 = state_54917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54917__$1,(4),ch);
} else {
if((state_val_54918 === (23))){
var state_54917__$1 = state_54917;
var statearr_54940_54987 = state_54917__$1;
(statearr_54940_54987[(2)] = null);

(statearr_54940_54987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (19))){
var inst_54898 = (state_54917[(11)]);
var inst_54848 = (state_54917[(8)]);
var inst_54900 = cljs.core.async.muxch_STAR_.call(null,inst_54898);
var state_54917__$1 = state_54917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54917__$1,(22),inst_54900,inst_54848);
} else {
if((state_val_54918 === (11))){
var inst_54858 = (state_54917[(13)]);
var inst_54872 = (state_54917[(10)]);
var inst_54872__$1 = cljs.core.seq.call(null,inst_54858);
var state_54917__$1 = (function (){var statearr_54941 = state_54917;
(statearr_54941[(10)] = inst_54872__$1);

return statearr_54941;
})();
if(inst_54872__$1){
var statearr_54942_54988 = state_54917__$1;
(statearr_54942_54988[(1)] = (13));

} else {
var statearr_54943_54989 = state_54917__$1;
(statearr_54943_54989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (9))){
var inst_54894 = (state_54917[(2)]);
var state_54917__$1 = state_54917;
var statearr_54944_54990 = state_54917__$1;
(statearr_54944_54990[(2)] = inst_54894);

(statearr_54944_54990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (5))){
var inst_54855 = cljs.core.deref.call(null,mults);
var inst_54856 = cljs.core.vals.call(null,inst_54855);
var inst_54857 = cljs.core.seq.call(null,inst_54856);
var inst_54858 = inst_54857;
var inst_54859 = null;
var inst_54860 = (0);
var inst_54861 = (0);
var state_54917__$1 = (function (){var statearr_54945 = state_54917;
(statearr_54945[(12)] = inst_54861);

(statearr_54945[(13)] = inst_54858);

(statearr_54945[(14)] = inst_54860);

(statearr_54945[(16)] = inst_54859);

return statearr_54945;
})();
var statearr_54946_54991 = state_54917__$1;
(statearr_54946_54991[(2)] = null);

(statearr_54946_54991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (14))){
var state_54917__$1 = state_54917;
var statearr_54950_54992 = state_54917__$1;
(statearr_54950_54992[(2)] = null);

(statearr_54950_54992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (16))){
var inst_54872 = (state_54917[(10)]);
var inst_54876 = cljs.core.chunk_first.call(null,inst_54872);
var inst_54877 = cljs.core.chunk_rest.call(null,inst_54872);
var inst_54878 = cljs.core.count.call(null,inst_54876);
var inst_54858 = inst_54877;
var inst_54859 = inst_54876;
var inst_54860 = inst_54878;
var inst_54861 = (0);
var state_54917__$1 = (function (){var statearr_54951 = state_54917;
(statearr_54951[(12)] = inst_54861);

(statearr_54951[(13)] = inst_54858);

(statearr_54951[(14)] = inst_54860);

(statearr_54951[(16)] = inst_54859);

return statearr_54951;
})();
var statearr_54952_54993 = state_54917__$1;
(statearr_54952_54993[(2)] = null);

(statearr_54952_54993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (10))){
var inst_54861 = (state_54917[(12)]);
var inst_54858 = (state_54917[(13)]);
var inst_54860 = (state_54917[(14)]);
var inst_54859 = (state_54917[(16)]);
var inst_54866 = cljs.core._nth.call(null,inst_54859,inst_54861);
var inst_54867 = cljs.core.async.muxch_STAR_.call(null,inst_54866);
var inst_54868 = cljs.core.async.close_BANG_.call(null,inst_54867);
var inst_54869 = (inst_54861 + (1));
var tmp54947 = inst_54858;
var tmp54948 = inst_54860;
var tmp54949 = inst_54859;
var inst_54858__$1 = tmp54947;
var inst_54859__$1 = tmp54949;
var inst_54860__$1 = tmp54948;
var inst_54861__$1 = inst_54869;
var state_54917__$1 = (function (){var statearr_54953 = state_54917;
(statearr_54953[(12)] = inst_54861__$1);

(statearr_54953[(13)] = inst_54858__$1);

(statearr_54953[(17)] = inst_54868);

(statearr_54953[(14)] = inst_54860__$1);

(statearr_54953[(16)] = inst_54859__$1);

return statearr_54953;
})();
var statearr_54954_54994 = state_54917__$1;
(statearr_54954_54994[(2)] = null);

(statearr_54954_54994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (18))){
var inst_54887 = (state_54917[(2)]);
var state_54917__$1 = state_54917;
var statearr_54955_54995 = state_54917__$1;
(statearr_54955_54995[(2)] = inst_54887);

(statearr_54955_54995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54918 === (8))){
var inst_54861 = (state_54917[(12)]);
var inst_54860 = (state_54917[(14)]);
var inst_54863 = (inst_54861 < inst_54860);
var inst_54864 = inst_54863;
var state_54917__$1 = state_54917;
if(cljs.core.truth_(inst_54864)){
var statearr_54956_54996 = state_54917__$1;
(statearr_54956_54996[(1)] = (10));

} else {
var statearr_54957_54997 = state_54917__$1;
(statearr_54957_54997[(1)] = (11));

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
});})(c__53002__auto___54969,mults,ensure_mult,p))
;
return ((function (switch__52888__auto__,c__53002__auto___54969,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__52889__auto__ = null;
var cljs$core$async$state_machine__52889__auto____0 = (function (){
var statearr_54961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54961[(0)] = cljs$core$async$state_machine__52889__auto__);

(statearr_54961[(1)] = (1));

return statearr_54961;
});
var cljs$core$async$state_machine__52889__auto____1 = (function (state_54917){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_54917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e54962){if((e54962 instanceof Object)){
var ex__52892__auto__ = e54962;
var statearr_54963_54998 = state_54917;
(statearr_54963_54998[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54999 = state_54917;
state_54917 = G__54999;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$state_machine__52889__auto__ = function(state_54917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52889__auto____1.call(this,state_54917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52889__auto____0;
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52889__auto____1;
return cljs$core$async$state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___54969,mults,ensure_mult,p))
})();
var state__53004__auto__ = (function (){var statearr_54964 = f__53003__auto__.call(null);
(statearr_54964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___54969);

return statearr_54964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___54969,mults,ensure_mult,p))
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
var args55000 = [];
var len__48849__auto___55003 = arguments.length;
var i__48850__auto___55004 = (0);
while(true){
if((i__48850__auto___55004 < len__48849__auto___55003)){
args55000.push((arguments[i__48850__auto___55004]));

var G__55005 = (i__48850__auto___55004 + (1));
i__48850__auto___55004 = G__55005;
continue;
} else {
}
break;
}

var G__55002 = args55000.length;
switch (G__55002) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55000.length)].join('')));

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
var args55007 = [];
var len__48849__auto___55010 = arguments.length;
var i__48850__auto___55011 = (0);
while(true){
if((i__48850__auto___55011 < len__48849__auto___55010)){
args55007.push((arguments[i__48850__auto___55011]));

var G__55012 = (i__48850__auto___55011 + (1));
i__48850__auto___55011 = G__55012;
continue;
} else {
}
break;
}

var G__55009 = args55007.length;
switch (G__55009) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55007.length)].join('')));

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
var args55014 = [];
var len__48849__auto___55085 = arguments.length;
var i__48850__auto___55086 = (0);
while(true){
if((i__48850__auto___55086 < len__48849__auto___55085)){
args55014.push((arguments[i__48850__auto___55086]));

var G__55087 = (i__48850__auto___55086 + (1));
i__48850__auto___55086 = G__55087;
continue;
} else {
}
break;
}

var G__55016 = args55014.length;
switch (G__55016) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55014.length)].join('')));

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
var c__53002__auto___55089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___55089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___55089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_55055){
var state_val_55056 = (state_55055[(1)]);
if((state_val_55056 === (7))){
var state_55055__$1 = state_55055;
var statearr_55057_55090 = state_55055__$1;
(statearr_55057_55090[(2)] = null);

(statearr_55057_55090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (1))){
var state_55055__$1 = state_55055;
var statearr_55058_55091 = state_55055__$1;
(statearr_55058_55091[(2)] = null);

(statearr_55058_55091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (4))){
var inst_55019 = (state_55055[(7)]);
var inst_55021 = (inst_55019 < cnt);
var state_55055__$1 = state_55055;
if(cljs.core.truth_(inst_55021)){
var statearr_55059_55092 = state_55055__$1;
(statearr_55059_55092[(1)] = (6));

} else {
var statearr_55060_55093 = state_55055__$1;
(statearr_55060_55093[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (15))){
var inst_55051 = (state_55055[(2)]);
var state_55055__$1 = state_55055;
var statearr_55061_55094 = state_55055__$1;
(statearr_55061_55094[(2)] = inst_55051);

(statearr_55061_55094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (13))){
var inst_55044 = cljs.core.async.close_BANG_.call(null,out);
var state_55055__$1 = state_55055;
var statearr_55062_55095 = state_55055__$1;
(statearr_55062_55095[(2)] = inst_55044);

(statearr_55062_55095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (6))){
var state_55055__$1 = state_55055;
var statearr_55063_55096 = state_55055__$1;
(statearr_55063_55096[(2)] = null);

(statearr_55063_55096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (3))){
var inst_55053 = (state_55055[(2)]);
var state_55055__$1 = state_55055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55055__$1,inst_55053);
} else {
if((state_val_55056 === (12))){
var inst_55041 = (state_55055[(8)]);
var inst_55041__$1 = (state_55055[(2)]);
var inst_55042 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_55041__$1);
var state_55055__$1 = (function (){var statearr_55064 = state_55055;
(statearr_55064[(8)] = inst_55041__$1);

return statearr_55064;
})();
if(cljs.core.truth_(inst_55042)){
var statearr_55065_55097 = state_55055__$1;
(statearr_55065_55097[(1)] = (13));

} else {
var statearr_55066_55098 = state_55055__$1;
(statearr_55066_55098[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (2))){
var inst_55018 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_55019 = (0);
var state_55055__$1 = (function (){var statearr_55067 = state_55055;
(statearr_55067[(7)] = inst_55019);

(statearr_55067[(9)] = inst_55018);

return statearr_55067;
})();
var statearr_55068_55099 = state_55055__$1;
(statearr_55068_55099[(2)] = null);

(statearr_55068_55099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (11))){
var inst_55019 = (state_55055[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_55055,(10),Object,null,(9));
var inst_55028 = chs__$1.call(null,inst_55019);
var inst_55029 = done.call(null,inst_55019);
var inst_55030 = cljs.core.async.take_BANG_.call(null,inst_55028,inst_55029);
var state_55055__$1 = state_55055;
var statearr_55069_55100 = state_55055__$1;
(statearr_55069_55100[(2)] = inst_55030);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55055__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (9))){
var inst_55019 = (state_55055[(7)]);
var inst_55032 = (state_55055[(2)]);
var inst_55033 = (inst_55019 + (1));
var inst_55019__$1 = inst_55033;
var state_55055__$1 = (function (){var statearr_55070 = state_55055;
(statearr_55070[(7)] = inst_55019__$1);

(statearr_55070[(10)] = inst_55032);

return statearr_55070;
})();
var statearr_55071_55101 = state_55055__$1;
(statearr_55071_55101[(2)] = null);

(statearr_55071_55101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (5))){
var inst_55039 = (state_55055[(2)]);
var state_55055__$1 = (function (){var statearr_55072 = state_55055;
(statearr_55072[(11)] = inst_55039);

return statearr_55072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55055__$1,(12),dchan);
} else {
if((state_val_55056 === (14))){
var inst_55041 = (state_55055[(8)]);
var inst_55046 = cljs.core.apply.call(null,f,inst_55041);
var state_55055__$1 = state_55055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55055__$1,(16),out,inst_55046);
} else {
if((state_val_55056 === (16))){
var inst_55048 = (state_55055[(2)]);
var state_55055__$1 = (function (){var statearr_55073 = state_55055;
(statearr_55073[(12)] = inst_55048);

return statearr_55073;
})();
var statearr_55074_55102 = state_55055__$1;
(statearr_55074_55102[(2)] = null);

(statearr_55074_55102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (10))){
var inst_55023 = (state_55055[(2)]);
var inst_55024 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_55055__$1 = (function (){var statearr_55075 = state_55055;
(statearr_55075[(13)] = inst_55023);

return statearr_55075;
})();
var statearr_55076_55103 = state_55055__$1;
(statearr_55076_55103[(2)] = inst_55024);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55055__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (8))){
var inst_55037 = (state_55055[(2)]);
var state_55055__$1 = state_55055;
var statearr_55077_55104 = state_55055__$1;
(statearr_55077_55104[(2)] = inst_55037);

(statearr_55077_55104[(1)] = (5));


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
});})(c__53002__auto___55089,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__52888__auto__,c__53002__auto___55089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__52889__auto__ = null;
var cljs$core$async$state_machine__52889__auto____0 = (function (){
var statearr_55081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55081[(0)] = cljs$core$async$state_machine__52889__auto__);

(statearr_55081[(1)] = (1));

return statearr_55081;
});
var cljs$core$async$state_machine__52889__auto____1 = (function (state_55055){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_55055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e55082){if((e55082 instanceof Object)){
var ex__52892__auto__ = e55082;
var statearr_55083_55105 = state_55055;
(statearr_55083_55105[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55106 = state_55055;
state_55055 = G__55106;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$state_machine__52889__auto__ = function(state_55055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52889__auto____1.call(this,state_55055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52889__auto____0;
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52889__auto____1;
return cljs$core$async$state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___55089,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__53004__auto__ = (function (){var statearr_55084 = f__53003__auto__.call(null);
(statearr_55084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___55089);

return statearr_55084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___55089,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args55108 = [];
var len__48849__auto___55166 = arguments.length;
var i__48850__auto___55167 = (0);
while(true){
if((i__48850__auto___55167 < len__48849__auto___55166)){
args55108.push((arguments[i__48850__auto___55167]));

var G__55168 = (i__48850__auto___55167 + (1));
i__48850__auto___55167 = G__55168;
continue;
} else {
}
break;
}

var G__55110 = args55108.length;
switch (G__55110) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55108.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53002__auto___55170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___55170,out){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___55170,out){
return (function (state_55142){
var state_val_55143 = (state_55142[(1)]);
if((state_val_55143 === (7))){
var inst_55122 = (state_55142[(7)]);
var inst_55121 = (state_55142[(8)]);
var inst_55121__$1 = (state_55142[(2)]);
var inst_55122__$1 = cljs.core.nth.call(null,inst_55121__$1,(0),null);
var inst_55123 = cljs.core.nth.call(null,inst_55121__$1,(1),null);
var inst_55124 = (inst_55122__$1 == null);
var state_55142__$1 = (function (){var statearr_55144 = state_55142;
(statearr_55144[(7)] = inst_55122__$1);

(statearr_55144[(9)] = inst_55123);

(statearr_55144[(8)] = inst_55121__$1);

return statearr_55144;
})();
if(cljs.core.truth_(inst_55124)){
var statearr_55145_55171 = state_55142__$1;
(statearr_55145_55171[(1)] = (8));

} else {
var statearr_55146_55172 = state_55142__$1;
(statearr_55146_55172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55143 === (1))){
var inst_55111 = cljs.core.vec.call(null,chs);
var inst_55112 = inst_55111;
var state_55142__$1 = (function (){var statearr_55147 = state_55142;
(statearr_55147[(10)] = inst_55112);

return statearr_55147;
})();
var statearr_55148_55173 = state_55142__$1;
(statearr_55148_55173[(2)] = null);

(statearr_55148_55173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55143 === (4))){
var inst_55112 = (state_55142[(10)]);
var state_55142__$1 = state_55142;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55142__$1,(7),inst_55112);
} else {
if((state_val_55143 === (6))){
var inst_55138 = (state_55142[(2)]);
var state_55142__$1 = state_55142;
var statearr_55149_55174 = state_55142__$1;
(statearr_55149_55174[(2)] = inst_55138);

(statearr_55149_55174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55143 === (3))){
var inst_55140 = (state_55142[(2)]);
var state_55142__$1 = state_55142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55142__$1,inst_55140);
} else {
if((state_val_55143 === (2))){
var inst_55112 = (state_55142[(10)]);
var inst_55114 = cljs.core.count.call(null,inst_55112);
var inst_55115 = (inst_55114 > (0));
var state_55142__$1 = state_55142;
if(cljs.core.truth_(inst_55115)){
var statearr_55151_55175 = state_55142__$1;
(statearr_55151_55175[(1)] = (4));

} else {
var statearr_55152_55176 = state_55142__$1;
(statearr_55152_55176[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55143 === (11))){
var inst_55112 = (state_55142[(10)]);
var inst_55131 = (state_55142[(2)]);
var tmp55150 = inst_55112;
var inst_55112__$1 = tmp55150;
var state_55142__$1 = (function (){var statearr_55153 = state_55142;
(statearr_55153[(10)] = inst_55112__$1);

(statearr_55153[(11)] = inst_55131);

return statearr_55153;
})();
var statearr_55154_55177 = state_55142__$1;
(statearr_55154_55177[(2)] = null);

(statearr_55154_55177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55143 === (9))){
var inst_55122 = (state_55142[(7)]);
var state_55142__$1 = state_55142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55142__$1,(11),out,inst_55122);
} else {
if((state_val_55143 === (5))){
var inst_55136 = cljs.core.async.close_BANG_.call(null,out);
var state_55142__$1 = state_55142;
var statearr_55155_55178 = state_55142__$1;
(statearr_55155_55178[(2)] = inst_55136);

(statearr_55155_55178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55143 === (10))){
var inst_55134 = (state_55142[(2)]);
var state_55142__$1 = state_55142;
var statearr_55156_55179 = state_55142__$1;
(statearr_55156_55179[(2)] = inst_55134);

(statearr_55156_55179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55143 === (8))){
var inst_55112 = (state_55142[(10)]);
var inst_55122 = (state_55142[(7)]);
var inst_55123 = (state_55142[(9)]);
var inst_55121 = (state_55142[(8)]);
var inst_55126 = (function (){var cs = inst_55112;
var vec__55117 = inst_55121;
var v = inst_55122;
var c = inst_55123;
return ((function (cs,vec__55117,v,c,inst_55112,inst_55122,inst_55123,inst_55121,state_val_55143,c__53002__auto___55170,out){
return (function (p1__55107_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__55107_SHARP_);
});
;})(cs,vec__55117,v,c,inst_55112,inst_55122,inst_55123,inst_55121,state_val_55143,c__53002__auto___55170,out))
})();
var inst_55127 = cljs.core.filterv.call(null,inst_55126,inst_55112);
var inst_55112__$1 = inst_55127;
var state_55142__$1 = (function (){var statearr_55157 = state_55142;
(statearr_55157[(10)] = inst_55112__$1);

return statearr_55157;
})();
var statearr_55158_55180 = state_55142__$1;
(statearr_55158_55180[(2)] = null);

(statearr_55158_55180[(1)] = (2));


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
});})(c__53002__auto___55170,out))
;
return ((function (switch__52888__auto__,c__53002__auto___55170,out){
return (function() {
var cljs$core$async$state_machine__52889__auto__ = null;
var cljs$core$async$state_machine__52889__auto____0 = (function (){
var statearr_55162 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55162[(0)] = cljs$core$async$state_machine__52889__auto__);

(statearr_55162[(1)] = (1));

return statearr_55162;
});
var cljs$core$async$state_machine__52889__auto____1 = (function (state_55142){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_55142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e55163){if((e55163 instanceof Object)){
var ex__52892__auto__ = e55163;
var statearr_55164_55181 = state_55142;
(statearr_55164_55181[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55182 = state_55142;
state_55142 = G__55182;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$state_machine__52889__auto__ = function(state_55142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52889__auto____1.call(this,state_55142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52889__auto____0;
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52889__auto____1;
return cljs$core$async$state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___55170,out))
})();
var state__53004__auto__ = (function (){var statearr_55165 = f__53003__auto__.call(null);
(statearr_55165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___55170);

return statearr_55165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___55170,out))
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
var args55183 = [];
var len__48849__auto___55232 = arguments.length;
var i__48850__auto___55233 = (0);
while(true){
if((i__48850__auto___55233 < len__48849__auto___55232)){
args55183.push((arguments[i__48850__auto___55233]));

var G__55234 = (i__48850__auto___55233 + (1));
i__48850__auto___55233 = G__55234;
continue;
} else {
}
break;
}

var G__55185 = args55183.length;
switch (G__55185) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55183.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53002__auto___55236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___55236,out){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___55236,out){
return (function (state_55209){
var state_val_55210 = (state_55209[(1)]);
if((state_val_55210 === (7))){
var inst_55191 = (state_55209[(7)]);
var inst_55191__$1 = (state_55209[(2)]);
var inst_55192 = (inst_55191__$1 == null);
var inst_55193 = cljs.core.not.call(null,inst_55192);
var state_55209__$1 = (function (){var statearr_55211 = state_55209;
(statearr_55211[(7)] = inst_55191__$1);

return statearr_55211;
})();
if(inst_55193){
var statearr_55212_55237 = state_55209__$1;
(statearr_55212_55237[(1)] = (8));

} else {
var statearr_55213_55238 = state_55209__$1;
(statearr_55213_55238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (1))){
var inst_55186 = (0);
var state_55209__$1 = (function (){var statearr_55214 = state_55209;
(statearr_55214[(8)] = inst_55186);

return statearr_55214;
})();
var statearr_55215_55239 = state_55209__$1;
(statearr_55215_55239[(2)] = null);

(statearr_55215_55239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (4))){
var state_55209__$1 = state_55209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55209__$1,(7),ch);
} else {
if((state_val_55210 === (6))){
var inst_55204 = (state_55209[(2)]);
var state_55209__$1 = state_55209;
var statearr_55216_55240 = state_55209__$1;
(statearr_55216_55240[(2)] = inst_55204);

(statearr_55216_55240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (3))){
var inst_55206 = (state_55209[(2)]);
var inst_55207 = cljs.core.async.close_BANG_.call(null,out);
var state_55209__$1 = (function (){var statearr_55217 = state_55209;
(statearr_55217[(9)] = inst_55206);

return statearr_55217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55209__$1,inst_55207);
} else {
if((state_val_55210 === (2))){
var inst_55186 = (state_55209[(8)]);
var inst_55188 = (inst_55186 < n);
var state_55209__$1 = state_55209;
if(cljs.core.truth_(inst_55188)){
var statearr_55218_55241 = state_55209__$1;
(statearr_55218_55241[(1)] = (4));

} else {
var statearr_55219_55242 = state_55209__$1;
(statearr_55219_55242[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (11))){
var inst_55186 = (state_55209[(8)]);
var inst_55196 = (state_55209[(2)]);
var inst_55197 = (inst_55186 + (1));
var inst_55186__$1 = inst_55197;
var state_55209__$1 = (function (){var statearr_55220 = state_55209;
(statearr_55220[(8)] = inst_55186__$1);

(statearr_55220[(10)] = inst_55196);

return statearr_55220;
})();
var statearr_55221_55243 = state_55209__$1;
(statearr_55221_55243[(2)] = null);

(statearr_55221_55243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (9))){
var state_55209__$1 = state_55209;
var statearr_55222_55244 = state_55209__$1;
(statearr_55222_55244[(2)] = null);

(statearr_55222_55244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (5))){
var state_55209__$1 = state_55209;
var statearr_55223_55245 = state_55209__$1;
(statearr_55223_55245[(2)] = null);

(statearr_55223_55245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (10))){
var inst_55201 = (state_55209[(2)]);
var state_55209__$1 = state_55209;
var statearr_55224_55246 = state_55209__$1;
(statearr_55224_55246[(2)] = inst_55201);

(statearr_55224_55246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (8))){
var inst_55191 = (state_55209[(7)]);
var state_55209__$1 = state_55209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55209__$1,(11),out,inst_55191);
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
});})(c__53002__auto___55236,out))
;
return ((function (switch__52888__auto__,c__53002__auto___55236,out){
return (function() {
var cljs$core$async$state_machine__52889__auto__ = null;
var cljs$core$async$state_machine__52889__auto____0 = (function (){
var statearr_55228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55228[(0)] = cljs$core$async$state_machine__52889__auto__);

(statearr_55228[(1)] = (1));

return statearr_55228;
});
var cljs$core$async$state_machine__52889__auto____1 = (function (state_55209){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_55209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e55229){if((e55229 instanceof Object)){
var ex__52892__auto__ = e55229;
var statearr_55230_55247 = state_55209;
(statearr_55230_55247[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55248 = state_55209;
state_55209 = G__55248;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$state_machine__52889__auto__ = function(state_55209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52889__auto____1.call(this,state_55209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52889__auto____0;
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52889__auto____1;
return cljs$core$async$state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___55236,out))
})();
var state__53004__auto__ = (function (){var statearr_55231 = f__53003__auto__.call(null);
(statearr_55231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___55236);

return statearr_55231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___55236,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async55256 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55256 = (function (f,ch,meta55257){
this.f = f;
this.ch = ch;
this.meta55257 = meta55257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55258,meta55257__$1){
var self__ = this;
var _55258__$1 = this;
return (new cljs.core.async.t_cljs$core$async55256(self__.f,self__.ch,meta55257__$1));
});

cljs.core.async.t_cljs$core$async55256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55258){
var self__ = this;
var _55258__$1 = this;
return self__.meta55257;
});

cljs.core.async.t_cljs$core$async55256.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55256.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55256.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55256.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55256.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async55259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55259 = (function (f,ch,meta55257,_,fn1,meta55260){
this.f = f;
this.ch = ch;
this.meta55257 = meta55257;
this._ = _;
this.fn1 = fn1;
this.meta55260 = meta55260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_55261,meta55260__$1){
var self__ = this;
var _55261__$1 = this;
return (new cljs.core.async.t_cljs$core$async55259(self__.f,self__.ch,self__.meta55257,self__._,self__.fn1,meta55260__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async55259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_55261){
var self__ = this;
var _55261__$1 = this;
return self__.meta55260;
});})(___$1))
;

cljs.core.async.t_cljs$core$async55259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async55259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async55259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__55249_SHARP_){
return f1.call(null,(((p1__55249_SHARP_ == null))?null:self__.f.call(null,p1__55249_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async55259.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55257","meta55257",892112275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55256","cljs.core.async/t_cljs$core$async55256",1017479176,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55260","meta55260",421927582,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async55259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55259";

cljs.core.async.t_cljs$core$async55259.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cljs.core.async/t_cljs$core$async55259");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async55259 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55259(f__$1,ch__$1,meta55257__$1,___$2,fn1__$1,meta55260){
return (new cljs.core.async.t_cljs$core$async55259(f__$1,ch__$1,meta55257__$1,___$2,fn1__$1,meta55260));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async55259(self__.f,self__.ch,self__.meta55257,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__47621__auto__ = ret;
if(cljs.core.truth_(and__47621__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__47621__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async55256.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55256.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async55256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55257","meta55257",892112275,null)], null);
});

cljs.core.async.t_cljs$core$async55256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55256";

cljs.core.async.t_cljs$core$async55256.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cljs.core.async/t_cljs$core$async55256");
});

cljs.core.async.__GT_t_cljs$core$async55256 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55256(f__$1,ch__$1,meta55257){
return (new cljs.core.async.t_cljs$core$async55256(f__$1,ch__$1,meta55257));
});

}

return (new cljs.core.async.t_cljs$core$async55256(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async55265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55265 = (function (f,ch,meta55266){
this.f = f;
this.ch = ch;
this.meta55266 = meta55266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55267,meta55266__$1){
var self__ = this;
var _55267__$1 = this;
return (new cljs.core.async.t_cljs$core$async55265(self__.f,self__.ch,meta55266__$1));
});

cljs.core.async.t_cljs$core$async55265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55267){
var self__ = this;
var _55267__$1 = this;
return self__.meta55266;
});

cljs.core.async.t_cljs$core$async55265.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55265.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55265.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55265.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async55265.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55265.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async55265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55266","meta55266",-677302719,null)], null);
});

cljs.core.async.t_cljs$core$async55265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55265";

cljs.core.async.t_cljs$core$async55265.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cljs.core.async/t_cljs$core$async55265");
});

cljs.core.async.__GT_t_cljs$core$async55265 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async55265(f__$1,ch__$1,meta55266){
return (new cljs.core.async.t_cljs$core$async55265(f__$1,ch__$1,meta55266));
});

}

return (new cljs.core.async.t_cljs$core$async55265(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async55271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55271 = (function (p,ch,meta55272){
this.p = p;
this.ch = ch;
this.meta55272 = meta55272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55273,meta55272__$1){
var self__ = this;
var _55273__$1 = this;
return (new cljs.core.async.t_cljs$core$async55271(self__.p,self__.ch,meta55272__$1));
});

cljs.core.async.t_cljs$core$async55271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55273){
var self__ = this;
var _55273__$1 = this;
return self__.meta55272;
});

cljs.core.async.t_cljs$core$async55271.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55271.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55271.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55271.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55271.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async55271.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55271.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async55271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55272","meta55272",-1141855103,null)], null);
});

cljs.core.async.t_cljs$core$async55271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55271";

cljs.core.async.t_cljs$core$async55271.cljs$lang$ctorPrWriter = (function (this__48285__auto__,writer__48286__auto__,opt__48287__auto__){
return cljs.core._write.call(null,writer__48286__auto__,"cljs.core.async/t_cljs$core$async55271");
});

cljs.core.async.__GT_t_cljs$core$async55271 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async55271(p__$1,ch__$1,meta55272){
return (new cljs.core.async.t_cljs$core$async55271(p__$1,ch__$1,meta55272));
});

}

return (new cljs.core.async.t_cljs$core$async55271(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args55274 = [];
var len__48849__auto___55318 = arguments.length;
var i__48850__auto___55319 = (0);
while(true){
if((i__48850__auto___55319 < len__48849__auto___55318)){
args55274.push((arguments[i__48850__auto___55319]));

var G__55320 = (i__48850__auto___55319 + (1));
i__48850__auto___55319 = G__55320;
continue;
} else {
}
break;
}

var G__55276 = args55274.length;
switch (G__55276) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55274.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53002__auto___55322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___55322,out){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___55322,out){
return (function (state_55297){
var state_val_55298 = (state_55297[(1)]);
if((state_val_55298 === (7))){
var inst_55293 = (state_55297[(2)]);
var state_55297__$1 = state_55297;
var statearr_55299_55323 = state_55297__$1;
(statearr_55299_55323[(2)] = inst_55293);

(statearr_55299_55323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55298 === (1))){
var state_55297__$1 = state_55297;
var statearr_55300_55324 = state_55297__$1;
(statearr_55300_55324[(2)] = null);

(statearr_55300_55324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55298 === (4))){
var inst_55279 = (state_55297[(7)]);
var inst_55279__$1 = (state_55297[(2)]);
var inst_55280 = (inst_55279__$1 == null);
var state_55297__$1 = (function (){var statearr_55301 = state_55297;
(statearr_55301[(7)] = inst_55279__$1);

return statearr_55301;
})();
if(cljs.core.truth_(inst_55280)){
var statearr_55302_55325 = state_55297__$1;
(statearr_55302_55325[(1)] = (5));

} else {
var statearr_55303_55326 = state_55297__$1;
(statearr_55303_55326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55298 === (6))){
var inst_55279 = (state_55297[(7)]);
var inst_55284 = p.call(null,inst_55279);
var state_55297__$1 = state_55297;
if(cljs.core.truth_(inst_55284)){
var statearr_55304_55327 = state_55297__$1;
(statearr_55304_55327[(1)] = (8));

} else {
var statearr_55305_55328 = state_55297__$1;
(statearr_55305_55328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55298 === (3))){
var inst_55295 = (state_55297[(2)]);
var state_55297__$1 = state_55297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55297__$1,inst_55295);
} else {
if((state_val_55298 === (2))){
var state_55297__$1 = state_55297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55297__$1,(4),ch);
} else {
if((state_val_55298 === (11))){
var inst_55287 = (state_55297[(2)]);
var state_55297__$1 = state_55297;
var statearr_55306_55329 = state_55297__$1;
(statearr_55306_55329[(2)] = inst_55287);

(statearr_55306_55329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55298 === (9))){
var state_55297__$1 = state_55297;
var statearr_55307_55330 = state_55297__$1;
(statearr_55307_55330[(2)] = null);

(statearr_55307_55330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55298 === (5))){
var inst_55282 = cljs.core.async.close_BANG_.call(null,out);
var state_55297__$1 = state_55297;
var statearr_55308_55331 = state_55297__$1;
(statearr_55308_55331[(2)] = inst_55282);

(statearr_55308_55331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55298 === (10))){
var inst_55290 = (state_55297[(2)]);
var state_55297__$1 = (function (){var statearr_55309 = state_55297;
(statearr_55309[(8)] = inst_55290);

return statearr_55309;
})();
var statearr_55310_55332 = state_55297__$1;
(statearr_55310_55332[(2)] = null);

(statearr_55310_55332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55298 === (8))){
var inst_55279 = (state_55297[(7)]);
var state_55297__$1 = state_55297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55297__$1,(11),out,inst_55279);
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
});})(c__53002__auto___55322,out))
;
return ((function (switch__52888__auto__,c__53002__auto___55322,out){
return (function() {
var cljs$core$async$state_machine__52889__auto__ = null;
var cljs$core$async$state_machine__52889__auto____0 = (function (){
var statearr_55314 = [null,null,null,null,null,null,null,null,null];
(statearr_55314[(0)] = cljs$core$async$state_machine__52889__auto__);

(statearr_55314[(1)] = (1));

return statearr_55314;
});
var cljs$core$async$state_machine__52889__auto____1 = (function (state_55297){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_55297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e55315){if((e55315 instanceof Object)){
var ex__52892__auto__ = e55315;
var statearr_55316_55333 = state_55297;
(statearr_55316_55333[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55334 = state_55297;
state_55297 = G__55334;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$state_machine__52889__auto__ = function(state_55297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52889__auto____1.call(this,state_55297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52889__auto____0;
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52889__auto____1;
return cljs$core$async$state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___55322,out))
})();
var state__53004__auto__ = (function (){var statearr_55317 = f__53003__auto__.call(null);
(statearr_55317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___55322);

return statearr_55317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___55322,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args55335 = [];
var len__48849__auto___55338 = arguments.length;
var i__48850__auto___55339 = (0);
while(true){
if((i__48850__auto___55339 < len__48849__auto___55338)){
args55335.push((arguments[i__48850__auto___55339]));

var G__55340 = (i__48850__auto___55339 + (1));
i__48850__auto___55339 = G__55340;
continue;
} else {
}
break;
}

var G__55337 = args55335.length;
switch (G__55337) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55335.length)].join('')));

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
var c__53002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto__){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto__){
return (function (state_55507){
var state_val_55508 = (state_55507[(1)]);
if((state_val_55508 === (7))){
var inst_55503 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
var statearr_55509_55550 = state_55507__$1;
(statearr_55509_55550[(2)] = inst_55503);

(statearr_55509_55550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (20))){
var inst_55473 = (state_55507[(7)]);
var inst_55484 = (state_55507[(2)]);
var inst_55485 = cljs.core.next.call(null,inst_55473);
var inst_55459 = inst_55485;
var inst_55460 = null;
var inst_55461 = (0);
var inst_55462 = (0);
var state_55507__$1 = (function (){var statearr_55510 = state_55507;
(statearr_55510[(8)] = inst_55462);

(statearr_55510[(9)] = inst_55460);

(statearr_55510[(10)] = inst_55461);

(statearr_55510[(11)] = inst_55459);

(statearr_55510[(12)] = inst_55484);

return statearr_55510;
})();
var statearr_55511_55551 = state_55507__$1;
(statearr_55511_55551[(2)] = null);

(statearr_55511_55551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (1))){
var state_55507__$1 = state_55507;
var statearr_55512_55552 = state_55507__$1;
(statearr_55512_55552[(2)] = null);

(statearr_55512_55552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (4))){
var inst_55448 = (state_55507[(13)]);
var inst_55448__$1 = (state_55507[(2)]);
var inst_55449 = (inst_55448__$1 == null);
var state_55507__$1 = (function (){var statearr_55513 = state_55507;
(statearr_55513[(13)] = inst_55448__$1);

return statearr_55513;
})();
if(cljs.core.truth_(inst_55449)){
var statearr_55514_55553 = state_55507__$1;
(statearr_55514_55553[(1)] = (5));

} else {
var statearr_55515_55554 = state_55507__$1;
(statearr_55515_55554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (15))){
var state_55507__$1 = state_55507;
var statearr_55519_55555 = state_55507__$1;
(statearr_55519_55555[(2)] = null);

(statearr_55519_55555[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (21))){
var state_55507__$1 = state_55507;
var statearr_55520_55556 = state_55507__$1;
(statearr_55520_55556[(2)] = null);

(statearr_55520_55556[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (13))){
var inst_55462 = (state_55507[(8)]);
var inst_55460 = (state_55507[(9)]);
var inst_55461 = (state_55507[(10)]);
var inst_55459 = (state_55507[(11)]);
var inst_55469 = (state_55507[(2)]);
var inst_55470 = (inst_55462 + (1));
var tmp55516 = inst_55460;
var tmp55517 = inst_55461;
var tmp55518 = inst_55459;
var inst_55459__$1 = tmp55518;
var inst_55460__$1 = tmp55516;
var inst_55461__$1 = tmp55517;
var inst_55462__$1 = inst_55470;
var state_55507__$1 = (function (){var statearr_55521 = state_55507;
(statearr_55521[(8)] = inst_55462__$1);

(statearr_55521[(9)] = inst_55460__$1);

(statearr_55521[(10)] = inst_55461__$1);

(statearr_55521[(11)] = inst_55459__$1);

(statearr_55521[(14)] = inst_55469);

return statearr_55521;
})();
var statearr_55522_55557 = state_55507__$1;
(statearr_55522_55557[(2)] = null);

(statearr_55522_55557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (22))){
var state_55507__$1 = state_55507;
var statearr_55523_55558 = state_55507__$1;
(statearr_55523_55558[(2)] = null);

(statearr_55523_55558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (6))){
var inst_55448 = (state_55507[(13)]);
var inst_55457 = f.call(null,inst_55448);
var inst_55458 = cljs.core.seq.call(null,inst_55457);
var inst_55459 = inst_55458;
var inst_55460 = null;
var inst_55461 = (0);
var inst_55462 = (0);
var state_55507__$1 = (function (){var statearr_55524 = state_55507;
(statearr_55524[(8)] = inst_55462);

(statearr_55524[(9)] = inst_55460);

(statearr_55524[(10)] = inst_55461);

(statearr_55524[(11)] = inst_55459);

return statearr_55524;
})();
var statearr_55525_55559 = state_55507__$1;
(statearr_55525_55559[(2)] = null);

(statearr_55525_55559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (17))){
var inst_55473 = (state_55507[(7)]);
var inst_55477 = cljs.core.chunk_first.call(null,inst_55473);
var inst_55478 = cljs.core.chunk_rest.call(null,inst_55473);
var inst_55479 = cljs.core.count.call(null,inst_55477);
var inst_55459 = inst_55478;
var inst_55460 = inst_55477;
var inst_55461 = inst_55479;
var inst_55462 = (0);
var state_55507__$1 = (function (){var statearr_55526 = state_55507;
(statearr_55526[(8)] = inst_55462);

(statearr_55526[(9)] = inst_55460);

(statearr_55526[(10)] = inst_55461);

(statearr_55526[(11)] = inst_55459);

return statearr_55526;
})();
var statearr_55527_55560 = state_55507__$1;
(statearr_55527_55560[(2)] = null);

(statearr_55527_55560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (3))){
var inst_55505 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55507__$1,inst_55505);
} else {
if((state_val_55508 === (12))){
var inst_55493 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
var statearr_55528_55561 = state_55507__$1;
(statearr_55528_55561[(2)] = inst_55493);

(statearr_55528_55561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (2))){
var state_55507__$1 = state_55507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55507__$1,(4),in$);
} else {
if((state_val_55508 === (23))){
var inst_55501 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
var statearr_55529_55562 = state_55507__$1;
(statearr_55529_55562[(2)] = inst_55501);

(statearr_55529_55562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (19))){
var inst_55488 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
var statearr_55530_55563 = state_55507__$1;
(statearr_55530_55563[(2)] = inst_55488);

(statearr_55530_55563[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (11))){
var inst_55459 = (state_55507[(11)]);
var inst_55473 = (state_55507[(7)]);
var inst_55473__$1 = cljs.core.seq.call(null,inst_55459);
var state_55507__$1 = (function (){var statearr_55531 = state_55507;
(statearr_55531[(7)] = inst_55473__$1);

return statearr_55531;
})();
if(inst_55473__$1){
var statearr_55532_55564 = state_55507__$1;
(statearr_55532_55564[(1)] = (14));

} else {
var statearr_55533_55565 = state_55507__$1;
(statearr_55533_55565[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (9))){
var inst_55495 = (state_55507[(2)]);
var inst_55496 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_55507__$1 = (function (){var statearr_55534 = state_55507;
(statearr_55534[(15)] = inst_55495);

return statearr_55534;
})();
if(cljs.core.truth_(inst_55496)){
var statearr_55535_55566 = state_55507__$1;
(statearr_55535_55566[(1)] = (21));

} else {
var statearr_55536_55567 = state_55507__$1;
(statearr_55536_55567[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (5))){
var inst_55451 = cljs.core.async.close_BANG_.call(null,out);
var state_55507__$1 = state_55507;
var statearr_55537_55568 = state_55507__$1;
(statearr_55537_55568[(2)] = inst_55451);

(statearr_55537_55568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (14))){
var inst_55473 = (state_55507[(7)]);
var inst_55475 = cljs.core.chunked_seq_QMARK_.call(null,inst_55473);
var state_55507__$1 = state_55507;
if(inst_55475){
var statearr_55538_55569 = state_55507__$1;
(statearr_55538_55569[(1)] = (17));

} else {
var statearr_55539_55570 = state_55507__$1;
(statearr_55539_55570[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (16))){
var inst_55491 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
var statearr_55540_55571 = state_55507__$1;
(statearr_55540_55571[(2)] = inst_55491);

(statearr_55540_55571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (10))){
var inst_55462 = (state_55507[(8)]);
var inst_55460 = (state_55507[(9)]);
var inst_55467 = cljs.core._nth.call(null,inst_55460,inst_55462);
var state_55507__$1 = state_55507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55507__$1,(13),out,inst_55467);
} else {
if((state_val_55508 === (18))){
var inst_55473 = (state_55507[(7)]);
var inst_55482 = cljs.core.first.call(null,inst_55473);
var state_55507__$1 = state_55507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55507__$1,(20),out,inst_55482);
} else {
if((state_val_55508 === (8))){
var inst_55462 = (state_55507[(8)]);
var inst_55461 = (state_55507[(10)]);
var inst_55464 = (inst_55462 < inst_55461);
var inst_55465 = inst_55464;
var state_55507__$1 = state_55507;
if(cljs.core.truth_(inst_55465)){
var statearr_55541_55572 = state_55507__$1;
(statearr_55541_55572[(1)] = (10));

} else {
var statearr_55542_55573 = state_55507__$1;
(statearr_55542_55573[(1)] = (11));

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
});})(c__53002__auto__))
;
return ((function (switch__52888__auto__,c__53002__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__52889__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__52889__auto____0 = (function (){
var statearr_55546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55546[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__52889__auto__);

(statearr_55546[(1)] = (1));

return statearr_55546;
});
var cljs$core$async$mapcat_STAR__$_state_machine__52889__auto____1 = (function (state_55507){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_55507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e55547){if((e55547 instanceof Object)){
var ex__52892__auto__ = e55547;
var statearr_55548_55574 = state_55507;
(statearr_55548_55574[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55575 = state_55507;
state_55507 = G__55575;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__52889__auto__ = function(state_55507){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__52889__auto____1.call(this,state_55507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__52889__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__52889__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto__))
})();
var state__53004__auto__ = (function (){var statearr_55549 = f__53003__auto__.call(null);
(statearr_55549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto__);

return statearr_55549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto__))
);

return c__53002__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args55576 = [];
var len__48849__auto___55579 = arguments.length;
var i__48850__auto___55580 = (0);
while(true){
if((i__48850__auto___55580 < len__48849__auto___55579)){
args55576.push((arguments[i__48850__auto___55580]));

var G__55581 = (i__48850__auto___55580 + (1));
i__48850__auto___55580 = G__55581;
continue;
} else {
}
break;
}

var G__55578 = args55576.length;
switch (G__55578) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55576.length)].join('')));

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
var args55583 = [];
var len__48849__auto___55586 = arguments.length;
var i__48850__auto___55587 = (0);
while(true){
if((i__48850__auto___55587 < len__48849__auto___55586)){
args55583.push((arguments[i__48850__auto___55587]));

var G__55588 = (i__48850__auto___55587 + (1));
i__48850__auto___55587 = G__55588;
continue;
} else {
}
break;
}

var G__55585 = args55583.length;
switch (G__55585) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55583.length)].join('')));

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
var args55590 = [];
var len__48849__auto___55641 = arguments.length;
var i__48850__auto___55642 = (0);
while(true){
if((i__48850__auto___55642 < len__48849__auto___55641)){
args55590.push((arguments[i__48850__auto___55642]));

var G__55643 = (i__48850__auto___55642 + (1));
i__48850__auto___55642 = G__55643;
continue;
} else {
}
break;
}

var G__55592 = args55590.length;
switch (G__55592) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55590.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53002__auto___55645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___55645,out){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___55645,out){
return (function (state_55616){
var state_val_55617 = (state_55616[(1)]);
if((state_val_55617 === (7))){
var inst_55611 = (state_55616[(2)]);
var state_55616__$1 = state_55616;
var statearr_55618_55646 = state_55616__$1;
(statearr_55618_55646[(2)] = inst_55611);

(statearr_55618_55646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55617 === (1))){
var inst_55593 = null;
var state_55616__$1 = (function (){var statearr_55619 = state_55616;
(statearr_55619[(7)] = inst_55593);

return statearr_55619;
})();
var statearr_55620_55647 = state_55616__$1;
(statearr_55620_55647[(2)] = null);

(statearr_55620_55647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55617 === (4))){
var inst_55596 = (state_55616[(8)]);
var inst_55596__$1 = (state_55616[(2)]);
var inst_55597 = (inst_55596__$1 == null);
var inst_55598 = cljs.core.not.call(null,inst_55597);
var state_55616__$1 = (function (){var statearr_55621 = state_55616;
(statearr_55621[(8)] = inst_55596__$1);

return statearr_55621;
})();
if(inst_55598){
var statearr_55622_55648 = state_55616__$1;
(statearr_55622_55648[(1)] = (5));

} else {
var statearr_55623_55649 = state_55616__$1;
(statearr_55623_55649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55617 === (6))){
var state_55616__$1 = state_55616;
var statearr_55624_55650 = state_55616__$1;
(statearr_55624_55650[(2)] = null);

(statearr_55624_55650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55617 === (3))){
var inst_55613 = (state_55616[(2)]);
var inst_55614 = cljs.core.async.close_BANG_.call(null,out);
var state_55616__$1 = (function (){var statearr_55625 = state_55616;
(statearr_55625[(9)] = inst_55613);

return statearr_55625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55616__$1,inst_55614);
} else {
if((state_val_55617 === (2))){
var state_55616__$1 = state_55616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55616__$1,(4),ch);
} else {
if((state_val_55617 === (11))){
var inst_55596 = (state_55616[(8)]);
var inst_55605 = (state_55616[(2)]);
var inst_55593 = inst_55596;
var state_55616__$1 = (function (){var statearr_55626 = state_55616;
(statearr_55626[(10)] = inst_55605);

(statearr_55626[(7)] = inst_55593);

return statearr_55626;
})();
var statearr_55627_55651 = state_55616__$1;
(statearr_55627_55651[(2)] = null);

(statearr_55627_55651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55617 === (9))){
var inst_55596 = (state_55616[(8)]);
var state_55616__$1 = state_55616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55616__$1,(11),out,inst_55596);
} else {
if((state_val_55617 === (5))){
var inst_55593 = (state_55616[(7)]);
var inst_55596 = (state_55616[(8)]);
var inst_55600 = cljs.core._EQ_.call(null,inst_55596,inst_55593);
var state_55616__$1 = state_55616;
if(inst_55600){
var statearr_55629_55652 = state_55616__$1;
(statearr_55629_55652[(1)] = (8));

} else {
var statearr_55630_55653 = state_55616__$1;
(statearr_55630_55653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55617 === (10))){
var inst_55608 = (state_55616[(2)]);
var state_55616__$1 = state_55616;
var statearr_55631_55654 = state_55616__$1;
(statearr_55631_55654[(2)] = inst_55608);

(statearr_55631_55654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55617 === (8))){
var inst_55593 = (state_55616[(7)]);
var tmp55628 = inst_55593;
var inst_55593__$1 = tmp55628;
var state_55616__$1 = (function (){var statearr_55632 = state_55616;
(statearr_55632[(7)] = inst_55593__$1);

return statearr_55632;
})();
var statearr_55633_55655 = state_55616__$1;
(statearr_55633_55655[(2)] = null);

(statearr_55633_55655[(1)] = (2));


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
});})(c__53002__auto___55645,out))
;
return ((function (switch__52888__auto__,c__53002__auto___55645,out){
return (function() {
var cljs$core$async$state_machine__52889__auto__ = null;
var cljs$core$async$state_machine__52889__auto____0 = (function (){
var statearr_55637 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55637[(0)] = cljs$core$async$state_machine__52889__auto__);

(statearr_55637[(1)] = (1));

return statearr_55637;
});
var cljs$core$async$state_machine__52889__auto____1 = (function (state_55616){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_55616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e55638){if((e55638 instanceof Object)){
var ex__52892__auto__ = e55638;
var statearr_55639_55656 = state_55616;
(statearr_55639_55656[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55657 = state_55616;
state_55616 = G__55657;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$state_machine__52889__auto__ = function(state_55616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52889__auto____1.call(this,state_55616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52889__auto____0;
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52889__auto____1;
return cljs$core$async$state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___55645,out))
})();
var state__53004__auto__ = (function (){var statearr_55640 = f__53003__auto__.call(null);
(statearr_55640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___55645);

return statearr_55640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___55645,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args55658 = [];
var len__48849__auto___55728 = arguments.length;
var i__48850__auto___55729 = (0);
while(true){
if((i__48850__auto___55729 < len__48849__auto___55728)){
args55658.push((arguments[i__48850__auto___55729]));

var G__55730 = (i__48850__auto___55729 + (1));
i__48850__auto___55729 = G__55730;
continue;
} else {
}
break;
}

var G__55660 = args55658.length;
switch (G__55660) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55658.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53002__auto___55732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___55732,out){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___55732,out){
return (function (state_55698){
var state_val_55699 = (state_55698[(1)]);
if((state_val_55699 === (7))){
var inst_55694 = (state_55698[(2)]);
var state_55698__$1 = state_55698;
var statearr_55700_55733 = state_55698__$1;
(statearr_55700_55733[(2)] = inst_55694);

(statearr_55700_55733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (1))){
var inst_55661 = (new Array(n));
var inst_55662 = inst_55661;
var inst_55663 = (0);
var state_55698__$1 = (function (){var statearr_55701 = state_55698;
(statearr_55701[(7)] = inst_55662);

(statearr_55701[(8)] = inst_55663);

return statearr_55701;
})();
var statearr_55702_55734 = state_55698__$1;
(statearr_55702_55734[(2)] = null);

(statearr_55702_55734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (4))){
var inst_55666 = (state_55698[(9)]);
var inst_55666__$1 = (state_55698[(2)]);
var inst_55667 = (inst_55666__$1 == null);
var inst_55668 = cljs.core.not.call(null,inst_55667);
var state_55698__$1 = (function (){var statearr_55703 = state_55698;
(statearr_55703[(9)] = inst_55666__$1);

return statearr_55703;
})();
if(inst_55668){
var statearr_55704_55735 = state_55698__$1;
(statearr_55704_55735[(1)] = (5));

} else {
var statearr_55705_55736 = state_55698__$1;
(statearr_55705_55736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (15))){
var inst_55688 = (state_55698[(2)]);
var state_55698__$1 = state_55698;
var statearr_55706_55737 = state_55698__$1;
(statearr_55706_55737[(2)] = inst_55688);

(statearr_55706_55737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (13))){
var state_55698__$1 = state_55698;
var statearr_55707_55738 = state_55698__$1;
(statearr_55707_55738[(2)] = null);

(statearr_55707_55738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (6))){
var inst_55663 = (state_55698[(8)]);
var inst_55684 = (inst_55663 > (0));
var state_55698__$1 = state_55698;
if(cljs.core.truth_(inst_55684)){
var statearr_55708_55739 = state_55698__$1;
(statearr_55708_55739[(1)] = (12));

} else {
var statearr_55709_55740 = state_55698__$1;
(statearr_55709_55740[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (3))){
var inst_55696 = (state_55698[(2)]);
var state_55698__$1 = state_55698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55698__$1,inst_55696);
} else {
if((state_val_55699 === (12))){
var inst_55662 = (state_55698[(7)]);
var inst_55686 = cljs.core.vec.call(null,inst_55662);
var state_55698__$1 = state_55698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55698__$1,(15),out,inst_55686);
} else {
if((state_val_55699 === (2))){
var state_55698__$1 = state_55698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55698__$1,(4),ch);
} else {
if((state_val_55699 === (11))){
var inst_55678 = (state_55698[(2)]);
var inst_55679 = (new Array(n));
var inst_55662 = inst_55679;
var inst_55663 = (0);
var state_55698__$1 = (function (){var statearr_55710 = state_55698;
(statearr_55710[(7)] = inst_55662);

(statearr_55710[(10)] = inst_55678);

(statearr_55710[(8)] = inst_55663);

return statearr_55710;
})();
var statearr_55711_55741 = state_55698__$1;
(statearr_55711_55741[(2)] = null);

(statearr_55711_55741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (9))){
var inst_55662 = (state_55698[(7)]);
var inst_55676 = cljs.core.vec.call(null,inst_55662);
var state_55698__$1 = state_55698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55698__$1,(11),out,inst_55676);
} else {
if((state_val_55699 === (5))){
var inst_55666 = (state_55698[(9)]);
var inst_55671 = (state_55698[(11)]);
var inst_55662 = (state_55698[(7)]);
var inst_55663 = (state_55698[(8)]);
var inst_55670 = (inst_55662[inst_55663] = inst_55666);
var inst_55671__$1 = (inst_55663 + (1));
var inst_55672 = (inst_55671__$1 < n);
var state_55698__$1 = (function (){var statearr_55712 = state_55698;
(statearr_55712[(12)] = inst_55670);

(statearr_55712[(11)] = inst_55671__$1);

return statearr_55712;
})();
if(cljs.core.truth_(inst_55672)){
var statearr_55713_55742 = state_55698__$1;
(statearr_55713_55742[(1)] = (8));

} else {
var statearr_55714_55743 = state_55698__$1;
(statearr_55714_55743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (14))){
var inst_55691 = (state_55698[(2)]);
var inst_55692 = cljs.core.async.close_BANG_.call(null,out);
var state_55698__$1 = (function (){var statearr_55716 = state_55698;
(statearr_55716[(13)] = inst_55691);

return statearr_55716;
})();
var statearr_55717_55744 = state_55698__$1;
(statearr_55717_55744[(2)] = inst_55692);

(statearr_55717_55744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (10))){
var inst_55682 = (state_55698[(2)]);
var state_55698__$1 = state_55698;
var statearr_55718_55745 = state_55698__$1;
(statearr_55718_55745[(2)] = inst_55682);

(statearr_55718_55745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (8))){
var inst_55671 = (state_55698[(11)]);
var inst_55662 = (state_55698[(7)]);
var tmp55715 = inst_55662;
var inst_55662__$1 = tmp55715;
var inst_55663 = inst_55671;
var state_55698__$1 = (function (){var statearr_55719 = state_55698;
(statearr_55719[(7)] = inst_55662__$1);

(statearr_55719[(8)] = inst_55663);

return statearr_55719;
})();
var statearr_55720_55746 = state_55698__$1;
(statearr_55720_55746[(2)] = null);

(statearr_55720_55746[(1)] = (2));


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
});})(c__53002__auto___55732,out))
;
return ((function (switch__52888__auto__,c__53002__auto___55732,out){
return (function() {
var cljs$core$async$state_machine__52889__auto__ = null;
var cljs$core$async$state_machine__52889__auto____0 = (function (){
var statearr_55724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55724[(0)] = cljs$core$async$state_machine__52889__auto__);

(statearr_55724[(1)] = (1));

return statearr_55724;
});
var cljs$core$async$state_machine__52889__auto____1 = (function (state_55698){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_55698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e55725){if((e55725 instanceof Object)){
var ex__52892__auto__ = e55725;
var statearr_55726_55747 = state_55698;
(statearr_55726_55747[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55748 = state_55698;
state_55698 = G__55748;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$state_machine__52889__auto__ = function(state_55698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52889__auto____1.call(this,state_55698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52889__auto____0;
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52889__auto____1;
return cljs$core$async$state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___55732,out))
})();
var state__53004__auto__ = (function (){var statearr_55727 = f__53003__auto__.call(null);
(statearr_55727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___55732);

return statearr_55727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___55732,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args55749 = [];
var len__48849__auto___55823 = arguments.length;
var i__48850__auto___55824 = (0);
while(true){
if((i__48850__auto___55824 < len__48849__auto___55823)){
args55749.push((arguments[i__48850__auto___55824]));

var G__55825 = (i__48850__auto___55824 + (1));
i__48850__auto___55824 = G__55825;
continue;
} else {
}
break;
}

var G__55751 = args55749.length;
switch (G__55751) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55749.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53002__auto___55827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53002__auto___55827,out){
return (function (){
var f__53003__auto__ = (function (){var switch__52888__auto__ = ((function (c__53002__auto___55827,out){
return (function (state_55793){
var state_val_55794 = (state_55793[(1)]);
if((state_val_55794 === (7))){
var inst_55789 = (state_55793[(2)]);
var state_55793__$1 = state_55793;
var statearr_55795_55828 = state_55793__$1;
(statearr_55795_55828[(2)] = inst_55789);

(statearr_55795_55828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (1))){
var inst_55752 = [];
var inst_55753 = inst_55752;
var inst_55754 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_55793__$1 = (function (){var statearr_55796 = state_55793;
(statearr_55796[(7)] = inst_55754);

(statearr_55796[(8)] = inst_55753);

return statearr_55796;
})();
var statearr_55797_55829 = state_55793__$1;
(statearr_55797_55829[(2)] = null);

(statearr_55797_55829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (4))){
var inst_55757 = (state_55793[(9)]);
var inst_55757__$1 = (state_55793[(2)]);
var inst_55758 = (inst_55757__$1 == null);
var inst_55759 = cljs.core.not.call(null,inst_55758);
var state_55793__$1 = (function (){var statearr_55798 = state_55793;
(statearr_55798[(9)] = inst_55757__$1);

return statearr_55798;
})();
if(inst_55759){
var statearr_55799_55830 = state_55793__$1;
(statearr_55799_55830[(1)] = (5));

} else {
var statearr_55800_55831 = state_55793__$1;
(statearr_55800_55831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (15))){
var inst_55783 = (state_55793[(2)]);
var state_55793__$1 = state_55793;
var statearr_55801_55832 = state_55793__$1;
(statearr_55801_55832[(2)] = inst_55783);

(statearr_55801_55832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (13))){
var state_55793__$1 = state_55793;
var statearr_55802_55833 = state_55793__$1;
(statearr_55802_55833[(2)] = null);

(statearr_55802_55833[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (6))){
var inst_55753 = (state_55793[(8)]);
var inst_55778 = inst_55753.length;
var inst_55779 = (inst_55778 > (0));
var state_55793__$1 = state_55793;
if(cljs.core.truth_(inst_55779)){
var statearr_55803_55834 = state_55793__$1;
(statearr_55803_55834[(1)] = (12));

} else {
var statearr_55804_55835 = state_55793__$1;
(statearr_55804_55835[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (3))){
var inst_55791 = (state_55793[(2)]);
var state_55793__$1 = state_55793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55793__$1,inst_55791);
} else {
if((state_val_55794 === (12))){
var inst_55753 = (state_55793[(8)]);
var inst_55781 = cljs.core.vec.call(null,inst_55753);
var state_55793__$1 = state_55793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55793__$1,(15),out,inst_55781);
} else {
if((state_val_55794 === (2))){
var state_55793__$1 = state_55793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55793__$1,(4),ch);
} else {
if((state_val_55794 === (11))){
var inst_55757 = (state_55793[(9)]);
var inst_55761 = (state_55793[(10)]);
var inst_55771 = (state_55793[(2)]);
var inst_55772 = [];
var inst_55773 = inst_55772.push(inst_55757);
var inst_55753 = inst_55772;
var inst_55754 = inst_55761;
var state_55793__$1 = (function (){var statearr_55805 = state_55793;
(statearr_55805[(7)] = inst_55754);

(statearr_55805[(11)] = inst_55773);

(statearr_55805[(8)] = inst_55753);

(statearr_55805[(12)] = inst_55771);

return statearr_55805;
})();
var statearr_55806_55836 = state_55793__$1;
(statearr_55806_55836[(2)] = null);

(statearr_55806_55836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (9))){
var inst_55753 = (state_55793[(8)]);
var inst_55769 = cljs.core.vec.call(null,inst_55753);
var state_55793__$1 = state_55793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55793__$1,(11),out,inst_55769);
} else {
if((state_val_55794 === (5))){
var inst_55754 = (state_55793[(7)]);
var inst_55757 = (state_55793[(9)]);
var inst_55761 = (state_55793[(10)]);
var inst_55761__$1 = f.call(null,inst_55757);
var inst_55762 = cljs.core._EQ_.call(null,inst_55761__$1,inst_55754);
var inst_55763 = cljs.core.keyword_identical_QMARK_.call(null,inst_55754,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_55764 = (inst_55762) || (inst_55763);
var state_55793__$1 = (function (){var statearr_55807 = state_55793;
(statearr_55807[(10)] = inst_55761__$1);

return statearr_55807;
})();
if(cljs.core.truth_(inst_55764)){
var statearr_55808_55837 = state_55793__$1;
(statearr_55808_55837[(1)] = (8));

} else {
var statearr_55809_55838 = state_55793__$1;
(statearr_55809_55838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (14))){
var inst_55786 = (state_55793[(2)]);
var inst_55787 = cljs.core.async.close_BANG_.call(null,out);
var state_55793__$1 = (function (){var statearr_55811 = state_55793;
(statearr_55811[(13)] = inst_55786);

return statearr_55811;
})();
var statearr_55812_55839 = state_55793__$1;
(statearr_55812_55839[(2)] = inst_55787);

(statearr_55812_55839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (10))){
var inst_55776 = (state_55793[(2)]);
var state_55793__$1 = state_55793;
var statearr_55813_55840 = state_55793__$1;
(statearr_55813_55840[(2)] = inst_55776);

(statearr_55813_55840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (8))){
var inst_55757 = (state_55793[(9)]);
var inst_55761 = (state_55793[(10)]);
var inst_55753 = (state_55793[(8)]);
var inst_55766 = inst_55753.push(inst_55757);
var tmp55810 = inst_55753;
var inst_55753__$1 = tmp55810;
var inst_55754 = inst_55761;
var state_55793__$1 = (function (){var statearr_55814 = state_55793;
(statearr_55814[(7)] = inst_55754);

(statearr_55814[(14)] = inst_55766);

(statearr_55814[(8)] = inst_55753__$1);

return statearr_55814;
})();
var statearr_55815_55841 = state_55793__$1;
(statearr_55815_55841[(2)] = null);

(statearr_55815_55841[(1)] = (2));


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
});})(c__53002__auto___55827,out))
;
return ((function (switch__52888__auto__,c__53002__auto___55827,out){
return (function() {
var cljs$core$async$state_machine__52889__auto__ = null;
var cljs$core$async$state_machine__52889__auto____0 = (function (){
var statearr_55819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55819[(0)] = cljs$core$async$state_machine__52889__auto__);

(statearr_55819[(1)] = (1));

return statearr_55819;
});
var cljs$core$async$state_machine__52889__auto____1 = (function (state_55793){
while(true){
var ret_value__52890__auto__ = (function (){try{while(true){
var result__52891__auto__ = switch__52888__auto__.call(null,state_55793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__52891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52891__auto__;
}
break;
}
}catch (e55820){if((e55820 instanceof Object)){
var ex__52892__auto__ = e55820;
var statearr_55821_55842 = state_55793;
(statearr_55821_55842[(5)] = ex__52892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__52890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55843 = state_55793;
state_55793 = G__55843;
continue;
} else {
return ret_value__52890__auto__;
}
break;
}
});
cljs$core$async$state_machine__52889__auto__ = function(state_55793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__52889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__52889__auto____1.call(this,state_55793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__52889__auto____0;
cljs$core$async$state_machine__52889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__52889__auto____1;
return cljs$core$async$state_machine__52889__auto__;
})()
;})(switch__52888__auto__,c__53002__auto___55827,out))
})();
var state__53004__auto__ = (function (){var statearr_55822 = f__53003__auto__.call(null);
(statearr_55822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53002__auto___55827);

return statearr_55822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53004__auto__);
});})(c__53002__auto___55827,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1509481867717