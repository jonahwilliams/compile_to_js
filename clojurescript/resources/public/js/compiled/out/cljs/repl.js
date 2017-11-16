// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38440){
var map__38441 = p__38440;
var map__38441__$1 = ((((!((map__38441 == null)))?((((map__38441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38441):map__38441);
var m = map__38441__$1;
var n = cljs.core.get.call(null,map__38441__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38441__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38443_38465 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38444_38466 = null;
var count__38445_38467 = (0);
var i__38446_38468 = (0);
while(true){
if((i__38446_38468 < count__38445_38467)){
var f_38469 = cljs.core._nth.call(null,chunk__38444_38466,i__38446_38468);
cljs.core.println.call(null,"  ",f_38469);

var G__38470 = seq__38443_38465;
var G__38471 = chunk__38444_38466;
var G__38472 = count__38445_38467;
var G__38473 = (i__38446_38468 + (1));
seq__38443_38465 = G__38470;
chunk__38444_38466 = G__38471;
count__38445_38467 = G__38472;
i__38446_38468 = G__38473;
continue;
} else {
var temp__5457__auto___38474 = cljs.core.seq.call(null,seq__38443_38465);
if(temp__5457__auto___38474){
var seq__38443_38475__$1 = temp__5457__auto___38474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38443_38475__$1)){
var c__31027__auto___38476 = cljs.core.chunk_first.call(null,seq__38443_38475__$1);
var G__38477 = cljs.core.chunk_rest.call(null,seq__38443_38475__$1);
var G__38478 = c__31027__auto___38476;
var G__38479 = cljs.core.count.call(null,c__31027__auto___38476);
var G__38480 = (0);
seq__38443_38465 = G__38477;
chunk__38444_38466 = G__38478;
count__38445_38467 = G__38479;
i__38446_38468 = G__38480;
continue;
} else {
var f_38481 = cljs.core.first.call(null,seq__38443_38475__$1);
cljs.core.println.call(null,"  ",f_38481);

var G__38482 = cljs.core.next.call(null,seq__38443_38475__$1);
var G__38483 = null;
var G__38484 = (0);
var G__38485 = (0);
seq__38443_38465 = G__38482;
chunk__38444_38466 = G__38483;
count__38445_38467 = G__38484;
i__38446_38468 = G__38485;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38486 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30096__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38486);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38486)))?cljs.core.second.call(null,arglists_38486):arglists_38486));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38447_38487 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38448_38488 = null;
var count__38449_38489 = (0);
var i__38450_38490 = (0);
while(true){
if((i__38450_38490 < count__38449_38489)){
var vec__38451_38491 = cljs.core._nth.call(null,chunk__38448_38488,i__38450_38490);
var name_38492 = cljs.core.nth.call(null,vec__38451_38491,(0),null);
var map__38454_38493 = cljs.core.nth.call(null,vec__38451_38491,(1),null);
var map__38454_38494__$1 = ((((!((map__38454_38493 == null)))?((((map__38454_38493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38454_38493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38454_38493):map__38454_38493);
var doc_38495 = cljs.core.get.call(null,map__38454_38494__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38496 = cljs.core.get.call(null,map__38454_38494__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38492);

cljs.core.println.call(null," ",arglists_38496);

if(cljs.core.truth_(doc_38495)){
cljs.core.println.call(null," ",doc_38495);
} else {
}

var G__38497 = seq__38447_38487;
var G__38498 = chunk__38448_38488;
var G__38499 = count__38449_38489;
var G__38500 = (i__38450_38490 + (1));
seq__38447_38487 = G__38497;
chunk__38448_38488 = G__38498;
count__38449_38489 = G__38499;
i__38450_38490 = G__38500;
continue;
} else {
var temp__5457__auto___38501 = cljs.core.seq.call(null,seq__38447_38487);
if(temp__5457__auto___38501){
var seq__38447_38502__$1 = temp__5457__auto___38501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38447_38502__$1)){
var c__31027__auto___38503 = cljs.core.chunk_first.call(null,seq__38447_38502__$1);
var G__38504 = cljs.core.chunk_rest.call(null,seq__38447_38502__$1);
var G__38505 = c__31027__auto___38503;
var G__38506 = cljs.core.count.call(null,c__31027__auto___38503);
var G__38507 = (0);
seq__38447_38487 = G__38504;
chunk__38448_38488 = G__38505;
count__38449_38489 = G__38506;
i__38450_38490 = G__38507;
continue;
} else {
var vec__38456_38508 = cljs.core.first.call(null,seq__38447_38502__$1);
var name_38509 = cljs.core.nth.call(null,vec__38456_38508,(0),null);
var map__38459_38510 = cljs.core.nth.call(null,vec__38456_38508,(1),null);
var map__38459_38511__$1 = ((((!((map__38459_38510 == null)))?((((map__38459_38510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38459_38510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38459_38510):map__38459_38510);
var doc_38512 = cljs.core.get.call(null,map__38459_38511__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38513 = cljs.core.get.call(null,map__38459_38511__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38509);

cljs.core.println.call(null," ",arglists_38513);

if(cljs.core.truth_(doc_38512)){
cljs.core.println.call(null," ",doc_38512);
} else {
}

var G__38514 = cljs.core.next.call(null,seq__38447_38502__$1);
var G__38515 = null;
var G__38516 = (0);
var G__38517 = (0);
seq__38447_38487 = G__38514;
chunk__38448_38488 = G__38515;
count__38449_38489 = G__38516;
i__38450_38490 = G__38517;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__38461 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38462 = null;
var count__38463 = (0);
var i__38464 = (0);
while(true){
if((i__38464 < count__38463)){
var role = cljs.core._nth.call(null,chunk__38462,i__38464);
var temp__5457__auto___38518__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38518__$1)){
var spec_38519 = temp__5457__auto___38518__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38519));
} else {
}

var G__38520 = seq__38461;
var G__38521 = chunk__38462;
var G__38522 = count__38463;
var G__38523 = (i__38464 + (1));
seq__38461 = G__38520;
chunk__38462 = G__38521;
count__38463 = G__38522;
i__38464 = G__38523;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__38461);
if(temp__5457__auto____$1){
var seq__38461__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38461__$1)){
var c__31027__auto__ = cljs.core.chunk_first.call(null,seq__38461__$1);
var G__38524 = cljs.core.chunk_rest.call(null,seq__38461__$1);
var G__38525 = c__31027__auto__;
var G__38526 = cljs.core.count.call(null,c__31027__auto__);
var G__38527 = (0);
seq__38461 = G__38524;
chunk__38462 = G__38525;
count__38463 = G__38526;
i__38464 = G__38527;
continue;
} else {
var role = cljs.core.first.call(null,seq__38461__$1);
var temp__5457__auto___38528__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38528__$2)){
var spec_38529 = temp__5457__auto___38528__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38529));
} else {
}

var G__38530 = cljs.core.next.call(null,seq__38461__$1);
var G__38531 = null;
var G__38532 = (0);
var G__38533 = (0);
seq__38461 = G__38530;
chunk__38462 = G__38531;
count__38463 = G__38532;
i__38464 = G__38533;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1510806284534
