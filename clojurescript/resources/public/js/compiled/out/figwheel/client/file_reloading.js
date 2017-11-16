// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30096__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30096__auto__){
return or__30096__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30096__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
var or__30096__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30096__auto____$1)){
return or__30096__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36963_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36963_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36964 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36965 = null;
var count__36966 = (0);
var i__36967 = (0);
while(true){
if((i__36967 < count__36966)){
var n = cljs.core._nth.call(null,chunk__36965,i__36967);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36968 = seq__36964;
var G__36969 = chunk__36965;
var G__36970 = count__36966;
var G__36971 = (i__36967 + (1));
seq__36964 = G__36968;
chunk__36965 = G__36969;
count__36966 = G__36970;
i__36967 = G__36971;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36964);
if(temp__5457__auto__){
var seq__36964__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36964__$1)){
var c__31027__auto__ = cljs.core.chunk_first.call(null,seq__36964__$1);
var G__36972 = cljs.core.chunk_rest.call(null,seq__36964__$1);
var G__36973 = c__31027__auto__;
var G__36974 = cljs.core.count.call(null,c__31027__auto__);
var G__36975 = (0);
seq__36964 = G__36972;
chunk__36965 = G__36973;
count__36966 = G__36974;
i__36967 = G__36975;
continue;
} else {
var n = cljs.core.first.call(null,seq__36964__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36976 = cljs.core.next.call(null,seq__36964__$1);
var G__36977 = null;
var G__36978 = (0);
var G__36979 = (0);
seq__36964 = G__36976;
chunk__36965 = G__36977;
count__36966 = G__36978;
i__36967 = G__36979;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__36980){
var vec__36981 = p__36980;
var _ = cljs.core.nth.call(null,vec__36981,(0),null);
var v = cljs.core.nth.call(null,vec__36981,(1),null);
var and__30084__auto__ = v;
if(cljs.core.truth_(and__30084__auto__)){
return v.call(null,dep);
} else {
return and__30084__auto__;
}
}),cljs.core.filter.call(null,(function (p__36984){
var vec__36985 = p__36984;
var k = cljs.core.nth.call(null,vec__36985,(0),null);
var v = cljs.core.nth.call(null,vec__36985,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36997_37005 = cljs.core.seq.call(null,deps);
var chunk__36998_37006 = null;
var count__36999_37007 = (0);
var i__37000_37008 = (0);
while(true){
if((i__37000_37008 < count__36999_37007)){
var dep_37009 = cljs.core._nth.call(null,chunk__36998_37006,i__37000_37008);
if(cljs.core.truth_((function (){var and__30084__auto__ = dep_37009;
if(cljs.core.truth_(and__30084__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37009));
} else {
return and__30084__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37009,(depth + (1)),state);
} else {
}

var G__37010 = seq__36997_37005;
var G__37011 = chunk__36998_37006;
var G__37012 = count__36999_37007;
var G__37013 = (i__37000_37008 + (1));
seq__36997_37005 = G__37010;
chunk__36998_37006 = G__37011;
count__36999_37007 = G__37012;
i__37000_37008 = G__37013;
continue;
} else {
var temp__5457__auto___37014 = cljs.core.seq.call(null,seq__36997_37005);
if(temp__5457__auto___37014){
var seq__36997_37015__$1 = temp__5457__auto___37014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36997_37015__$1)){
var c__31027__auto___37016 = cljs.core.chunk_first.call(null,seq__36997_37015__$1);
var G__37017 = cljs.core.chunk_rest.call(null,seq__36997_37015__$1);
var G__37018 = c__31027__auto___37016;
var G__37019 = cljs.core.count.call(null,c__31027__auto___37016);
var G__37020 = (0);
seq__36997_37005 = G__37017;
chunk__36998_37006 = G__37018;
count__36999_37007 = G__37019;
i__37000_37008 = G__37020;
continue;
} else {
var dep_37021 = cljs.core.first.call(null,seq__36997_37015__$1);
if(cljs.core.truth_((function (){var and__30084__auto__ = dep_37021;
if(cljs.core.truth_(and__30084__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37021));
} else {
return and__30084__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37021,(depth + (1)),state);
} else {
}

var G__37022 = cljs.core.next.call(null,seq__36997_37015__$1);
var G__37023 = null;
var G__37024 = (0);
var G__37025 = (0);
seq__36997_37005 = G__37022;
chunk__36998_37006 = G__37023;
count__36999_37007 = G__37024;
i__37000_37008 = G__37025;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37001){
var vec__37002 = p__37001;
var seq__37003 = cljs.core.seq.call(null,vec__37002);
var first__37004 = cljs.core.first.call(null,seq__37003);
var seq__37003__$1 = cljs.core.next.call(null,seq__37003);
var x = first__37004;
var xs = seq__37003__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37002,seq__37003,first__37004,seq__37003__$1,x,xs,get_deps__$1){
return (function (p1__36988_SHARP_){
return clojure.set.difference.call(null,p1__36988_SHARP_,x);
});})(vec__37002,seq__37003,first__37004,seq__37003__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37026 = cljs.core.seq.call(null,provides);
var chunk__37027 = null;
var count__37028 = (0);
var i__37029 = (0);
while(true){
if((i__37029 < count__37028)){
var prov = cljs.core._nth.call(null,chunk__37027,i__37029);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37030_37038 = cljs.core.seq.call(null,requires);
var chunk__37031_37039 = null;
var count__37032_37040 = (0);
var i__37033_37041 = (0);
while(true){
if((i__37033_37041 < count__37032_37040)){
var req_37042 = cljs.core._nth.call(null,chunk__37031_37039,i__37033_37041);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37042,prov);

var G__37043 = seq__37030_37038;
var G__37044 = chunk__37031_37039;
var G__37045 = count__37032_37040;
var G__37046 = (i__37033_37041 + (1));
seq__37030_37038 = G__37043;
chunk__37031_37039 = G__37044;
count__37032_37040 = G__37045;
i__37033_37041 = G__37046;
continue;
} else {
var temp__5457__auto___37047 = cljs.core.seq.call(null,seq__37030_37038);
if(temp__5457__auto___37047){
var seq__37030_37048__$1 = temp__5457__auto___37047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37030_37048__$1)){
var c__31027__auto___37049 = cljs.core.chunk_first.call(null,seq__37030_37048__$1);
var G__37050 = cljs.core.chunk_rest.call(null,seq__37030_37048__$1);
var G__37051 = c__31027__auto___37049;
var G__37052 = cljs.core.count.call(null,c__31027__auto___37049);
var G__37053 = (0);
seq__37030_37038 = G__37050;
chunk__37031_37039 = G__37051;
count__37032_37040 = G__37052;
i__37033_37041 = G__37053;
continue;
} else {
var req_37054 = cljs.core.first.call(null,seq__37030_37048__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37054,prov);

var G__37055 = cljs.core.next.call(null,seq__37030_37048__$1);
var G__37056 = null;
var G__37057 = (0);
var G__37058 = (0);
seq__37030_37038 = G__37055;
chunk__37031_37039 = G__37056;
count__37032_37040 = G__37057;
i__37033_37041 = G__37058;
continue;
}
} else {
}
}
break;
}

var G__37059 = seq__37026;
var G__37060 = chunk__37027;
var G__37061 = count__37028;
var G__37062 = (i__37029 + (1));
seq__37026 = G__37059;
chunk__37027 = G__37060;
count__37028 = G__37061;
i__37029 = G__37062;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37026);
if(temp__5457__auto__){
var seq__37026__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37026__$1)){
var c__31027__auto__ = cljs.core.chunk_first.call(null,seq__37026__$1);
var G__37063 = cljs.core.chunk_rest.call(null,seq__37026__$1);
var G__37064 = c__31027__auto__;
var G__37065 = cljs.core.count.call(null,c__31027__auto__);
var G__37066 = (0);
seq__37026 = G__37063;
chunk__37027 = G__37064;
count__37028 = G__37065;
i__37029 = G__37066;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37026__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37034_37067 = cljs.core.seq.call(null,requires);
var chunk__37035_37068 = null;
var count__37036_37069 = (0);
var i__37037_37070 = (0);
while(true){
if((i__37037_37070 < count__37036_37069)){
var req_37071 = cljs.core._nth.call(null,chunk__37035_37068,i__37037_37070);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37071,prov);

var G__37072 = seq__37034_37067;
var G__37073 = chunk__37035_37068;
var G__37074 = count__37036_37069;
var G__37075 = (i__37037_37070 + (1));
seq__37034_37067 = G__37072;
chunk__37035_37068 = G__37073;
count__37036_37069 = G__37074;
i__37037_37070 = G__37075;
continue;
} else {
var temp__5457__auto___37076__$1 = cljs.core.seq.call(null,seq__37034_37067);
if(temp__5457__auto___37076__$1){
var seq__37034_37077__$1 = temp__5457__auto___37076__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37034_37077__$1)){
var c__31027__auto___37078 = cljs.core.chunk_first.call(null,seq__37034_37077__$1);
var G__37079 = cljs.core.chunk_rest.call(null,seq__37034_37077__$1);
var G__37080 = c__31027__auto___37078;
var G__37081 = cljs.core.count.call(null,c__31027__auto___37078);
var G__37082 = (0);
seq__37034_37067 = G__37079;
chunk__37035_37068 = G__37080;
count__37036_37069 = G__37081;
i__37037_37070 = G__37082;
continue;
} else {
var req_37083 = cljs.core.first.call(null,seq__37034_37077__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37083,prov);

var G__37084 = cljs.core.next.call(null,seq__37034_37077__$1);
var G__37085 = null;
var G__37086 = (0);
var G__37087 = (0);
seq__37034_37067 = G__37084;
chunk__37035_37068 = G__37085;
count__37036_37069 = G__37086;
i__37037_37070 = G__37087;
continue;
}
} else {
}
}
break;
}

var G__37088 = cljs.core.next.call(null,seq__37026__$1);
var G__37089 = null;
var G__37090 = (0);
var G__37091 = (0);
seq__37026 = G__37088;
chunk__37027 = G__37089;
count__37028 = G__37090;
i__37029 = G__37091;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37092_37096 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37093_37097 = null;
var count__37094_37098 = (0);
var i__37095_37099 = (0);
while(true){
if((i__37095_37099 < count__37094_37098)){
var ns_37100 = cljs.core._nth.call(null,chunk__37093_37097,i__37095_37099);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37100);

var G__37101 = seq__37092_37096;
var G__37102 = chunk__37093_37097;
var G__37103 = count__37094_37098;
var G__37104 = (i__37095_37099 + (1));
seq__37092_37096 = G__37101;
chunk__37093_37097 = G__37102;
count__37094_37098 = G__37103;
i__37095_37099 = G__37104;
continue;
} else {
var temp__5457__auto___37105 = cljs.core.seq.call(null,seq__37092_37096);
if(temp__5457__auto___37105){
var seq__37092_37106__$1 = temp__5457__auto___37105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37092_37106__$1)){
var c__31027__auto___37107 = cljs.core.chunk_first.call(null,seq__37092_37106__$1);
var G__37108 = cljs.core.chunk_rest.call(null,seq__37092_37106__$1);
var G__37109 = c__31027__auto___37107;
var G__37110 = cljs.core.count.call(null,c__31027__auto___37107);
var G__37111 = (0);
seq__37092_37096 = G__37108;
chunk__37093_37097 = G__37109;
count__37094_37098 = G__37110;
i__37095_37099 = G__37111;
continue;
} else {
var ns_37112 = cljs.core.first.call(null,seq__37092_37106__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37112);

var G__37113 = cljs.core.next.call(null,seq__37092_37106__$1);
var G__37114 = null;
var G__37115 = (0);
var G__37116 = (0);
seq__37092_37096 = G__37113;
chunk__37093_37097 = G__37114;
count__37094_37098 = G__37115;
i__37095_37099 = G__37116;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30096__auto__ = goog.require__;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37117__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37118__i = 0, G__37118__a = new Array(arguments.length -  0);
while (G__37118__i < G__37118__a.length) {G__37118__a[G__37118__i] = arguments[G__37118__i + 0]; ++G__37118__i;}
  args = new cljs.core.IndexedSeq(G__37118__a,0,null);
} 
return G__37117__delegate.call(this,args);};
G__37117.cljs$lang$maxFixedArity = 0;
G__37117.cljs$lang$applyTo = (function (arglist__37119){
var args = cljs.core.seq(arglist__37119);
return G__37117__delegate(args);
});
G__37117.cljs$core$IFn$_invoke$arity$variadic = G__37117__delegate;
return G__37117;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37120_SHARP_,p2__37121_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37120_SHARP_)].join('')),p2__37121_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37122_SHARP_,p2__37123_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37122_SHARP_)].join(''),p2__37123_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37124 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37124.addCallback(((function (G__37124){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37124))
);

G__37124.addErrback(((function (G__37124){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37124))
);

return G__37124;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37125){if((e37125 instanceof Error)){
var e = e37125;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37125;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37126){if((e37126 instanceof Error)){
var e = e37126;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37126;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37127 = cljs.core._EQ_;
var expr__37128 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37127.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37128))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37127.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37128))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37127.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37128))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37127,expr__37128){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37127,expr__37128))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37130,callback){
var map__37131 = p__37130;
var map__37131__$1 = ((((!((map__37131 == null)))?((((map__37131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37131):map__37131);
var file_msg = map__37131__$1;
var request_url = cljs.core.get.call(null,map__37131__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30096__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37131,map__37131__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37131,map__37131__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto__){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto__){
return (function (state_37171){
var state_val_37172 = (state_37171[(1)]);
if((state_val_37172 === (7))){
var inst_37167 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
var statearr_37173_37200 = state_37171__$1;
(statearr_37173_37200[(2)] = inst_37167);

(statearr_37173_37200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (1))){
var state_37171__$1 = state_37171;
var statearr_37174_37201 = state_37171__$1;
(statearr_37174_37201[(2)] = null);

(statearr_37174_37201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (4))){
var inst_37135 = (state_37171[(7)]);
var inst_37135__$1 = (state_37171[(2)]);
var state_37171__$1 = (function (){var statearr_37175 = state_37171;
(statearr_37175[(7)] = inst_37135__$1);

return statearr_37175;
})();
if(cljs.core.truth_(inst_37135__$1)){
var statearr_37176_37202 = state_37171__$1;
(statearr_37176_37202[(1)] = (5));

} else {
var statearr_37177_37203 = state_37171__$1;
(statearr_37177_37203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (15))){
var inst_37152 = (state_37171[(8)]);
var inst_37149 = (state_37171[(9)]);
var inst_37154 = inst_37152.call(null,inst_37149);
var state_37171__$1 = state_37171;
var statearr_37178_37204 = state_37171__$1;
(statearr_37178_37204[(2)] = inst_37154);

(statearr_37178_37204[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (13))){
var inst_37161 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
var statearr_37179_37205 = state_37171__$1;
(statearr_37179_37205[(2)] = inst_37161);

(statearr_37179_37205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (6))){
var state_37171__$1 = state_37171;
var statearr_37180_37206 = state_37171__$1;
(statearr_37180_37206[(2)] = null);

(statearr_37180_37206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (17))){
var inst_37158 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
var statearr_37181_37207 = state_37171__$1;
(statearr_37181_37207[(2)] = inst_37158);

(statearr_37181_37207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (3))){
var inst_37169 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37171__$1,inst_37169);
} else {
if((state_val_37172 === (12))){
var state_37171__$1 = state_37171;
var statearr_37182_37208 = state_37171__$1;
(statearr_37182_37208[(2)] = null);

(statearr_37182_37208[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (2))){
var state_37171__$1 = state_37171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37171__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37172 === (11))){
var inst_37140 = (state_37171[(10)]);
var inst_37147 = figwheel.client.file_reloading.blocking_load.call(null,inst_37140);
var state_37171__$1 = state_37171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37171__$1,(14),inst_37147);
} else {
if((state_val_37172 === (9))){
var inst_37140 = (state_37171[(10)]);
var state_37171__$1 = state_37171;
if(cljs.core.truth_(inst_37140)){
var statearr_37183_37209 = state_37171__$1;
(statearr_37183_37209[(1)] = (11));

} else {
var statearr_37184_37210 = state_37171__$1;
(statearr_37184_37210[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (5))){
var inst_37135 = (state_37171[(7)]);
var inst_37141 = (state_37171[(11)]);
var inst_37140 = cljs.core.nth.call(null,inst_37135,(0),null);
var inst_37141__$1 = cljs.core.nth.call(null,inst_37135,(1),null);
var state_37171__$1 = (function (){var statearr_37185 = state_37171;
(statearr_37185[(10)] = inst_37140);

(statearr_37185[(11)] = inst_37141__$1);

return statearr_37185;
})();
if(cljs.core.truth_(inst_37141__$1)){
var statearr_37186_37211 = state_37171__$1;
(statearr_37186_37211[(1)] = (8));

} else {
var statearr_37187_37212 = state_37171__$1;
(statearr_37187_37212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (14))){
var inst_37152 = (state_37171[(8)]);
var inst_37140 = (state_37171[(10)]);
var inst_37149 = (state_37171[(2)]);
var inst_37150 = console.log("Loading!",inst_37140);
var inst_37151 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37152__$1 = cljs.core.get.call(null,inst_37151,inst_37140);
var state_37171__$1 = (function (){var statearr_37188 = state_37171;
(statearr_37188[(8)] = inst_37152__$1);

(statearr_37188[(12)] = inst_37150);

(statearr_37188[(9)] = inst_37149);

return statearr_37188;
})();
if(cljs.core.truth_(inst_37152__$1)){
var statearr_37189_37213 = state_37171__$1;
(statearr_37189_37213[(1)] = (15));

} else {
var statearr_37190_37214 = state_37171__$1;
(statearr_37190_37214[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (16))){
var inst_37149 = (state_37171[(9)]);
var inst_37156 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37149);
var state_37171__$1 = state_37171;
var statearr_37191_37215 = state_37171__$1;
(statearr_37191_37215[(2)] = inst_37156);

(statearr_37191_37215[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (10))){
var inst_37163 = (state_37171[(2)]);
var state_37171__$1 = (function (){var statearr_37192 = state_37171;
(statearr_37192[(13)] = inst_37163);

return statearr_37192;
})();
var statearr_37193_37216 = state_37171__$1;
(statearr_37193_37216[(2)] = null);

(statearr_37193_37216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (8))){
var inst_37141 = (state_37171[(11)]);
var inst_37143 = console.log("Evaling!",inst_37141);
var inst_37144 = eval(inst_37141);
var state_37171__$1 = (function (){var statearr_37194 = state_37171;
(statearr_37194[(14)] = inst_37143);

return statearr_37194;
})();
var statearr_37195_37217 = state_37171__$1;
(statearr_37195_37217[(2)] = inst_37144);

(statearr_37195_37217[(1)] = (10));


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
});})(c__33181__auto__))
;
return ((function (switch__33091__auto__,c__33181__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33092__auto__ = null;
var figwheel$client$file_reloading$state_machine__33092__auto____0 = (function (){
var statearr_37196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37196[(0)] = figwheel$client$file_reloading$state_machine__33092__auto__);

(statearr_37196[(1)] = (1));

return statearr_37196;
});
var figwheel$client$file_reloading$state_machine__33092__auto____1 = (function (state_37171){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_37171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e37197){if((e37197 instanceof Object)){
var ex__33095__auto__ = e37197;
var statearr_37198_37218 = state_37171;
(statearr_37198_37218[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37219 = state_37171;
state_37171 = G__37219;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33092__auto__ = function(state_37171){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33092__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33092__auto____1.call(this,state_37171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33092__auto____0;
figwheel$client$file_reloading$state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33092__auto____1;
return figwheel$client$file_reloading$state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto__))
})();
var state__33183__auto__ = (function (){var statearr_37199 = f__33182__auto__.call(null);
(statearr_37199[(6)] = c__33181__auto__);

return statearr_37199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto__))
);

return c__33181__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37221 = arguments.length;
switch (G__37221) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37223,callback){
var map__37224 = p__37223;
var map__37224__$1 = ((((!((map__37224 == null)))?((((map__37224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37224):map__37224);
var file_msg = map__37224__$1;
var namespace = cljs.core.get.call(null,map__37224__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37224,map__37224__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37224,map__37224__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37226){
var map__37227 = p__37226;
var map__37227__$1 = ((((!((map__37227 == null)))?((((map__37227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37227):map__37227);
var file_msg = map__37227__$1;
var namespace = cljs.core.get.call(null,map__37227__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37229){
var map__37230 = p__37229;
var map__37230__$1 = ((((!((map__37230 == null)))?((((map__37230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37230):map__37230);
var file_msg = map__37230__$1;
var namespace = cljs.core.get.call(null,map__37230__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30084__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30084__auto__){
var or__30096__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
var or__30096__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30096__auto____$1)){
return or__30096__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30084__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37232,callback){
var map__37233 = p__37232;
var map__37233__$1 = ((((!((map__37233 == null)))?((((map__37233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37233):map__37233);
var file_msg = map__37233__$1;
var request_url = cljs.core.get.call(null,map__37233__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37233__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33181__auto___37283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto___37283,out){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto___37283,out){
return (function (state_37268){
var state_val_37269 = (state_37268[(1)]);
if((state_val_37269 === (1))){
var inst_37242 = cljs.core.seq.call(null,files);
var inst_37243 = cljs.core.first.call(null,inst_37242);
var inst_37244 = cljs.core.next.call(null,inst_37242);
var inst_37245 = files;
var state_37268__$1 = (function (){var statearr_37270 = state_37268;
(statearr_37270[(7)] = inst_37244);

(statearr_37270[(8)] = inst_37243);

(statearr_37270[(9)] = inst_37245);

return statearr_37270;
})();
var statearr_37271_37284 = state_37268__$1;
(statearr_37271_37284[(2)] = null);

(statearr_37271_37284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (2))){
var inst_37251 = (state_37268[(10)]);
var inst_37245 = (state_37268[(9)]);
var inst_37250 = cljs.core.seq.call(null,inst_37245);
var inst_37251__$1 = cljs.core.first.call(null,inst_37250);
var inst_37252 = cljs.core.next.call(null,inst_37250);
var inst_37253 = (inst_37251__$1 == null);
var inst_37254 = cljs.core.not.call(null,inst_37253);
var state_37268__$1 = (function (){var statearr_37272 = state_37268;
(statearr_37272[(11)] = inst_37252);

(statearr_37272[(10)] = inst_37251__$1);

return statearr_37272;
})();
if(inst_37254){
var statearr_37273_37285 = state_37268__$1;
(statearr_37273_37285[(1)] = (4));

} else {
var statearr_37274_37286 = state_37268__$1;
(statearr_37274_37286[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (3))){
var inst_37266 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37268__$1,inst_37266);
} else {
if((state_val_37269 === (4))){
var inst_37251 = (state_37268[(10)]);
var inst_37256 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37251);
var state_37268__$1 = state_37268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37268__$1,(7),inst_37256);
} else {
if((state_val_37269 === (5))){
var inst_37262 = cljs.core.async.close_BANG_.call(null,out);
var state_37268__$1 = state_37268;
var statearr_37275_37287 = state_37268__$1;
(statearr_37275_37287[(2)] = inst_37262);

(statearr_37275_37287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (6))){
var inst_37264 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
var statearr_37276_37288 = state_37268__$1;
(statearr_37276_37288[(2)] = inst_37264);

(statearr_37276_37288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (7))){
var inst_37252 = (state_37268[(11)]);
var inst_37258 = (state_37268[(2)]);
var inst_37259 = cljs.core.async.put_BANG_.call(null,out,inst_37258);
var inst_37245 = inst_37252;
var state_37268__$1 = (function (){var statearr_37277 = state_37268;
(statearr_37277[(9)] = inst_37245);

(statearr_37277[(12)] = inst_37259);

return statearr_37277;
})();
var statearr_37278_37289 = state_37268__$1;
(statearr_37278_37289[(2)] = null);

(statearr_37278_37289[(1)] = (2));


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
});})(c__33181__auto___37283,out))
;
return ((function (switch__33091__auto__,c__33181__auto___37283,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33092__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33092__auto____0 = (function (){
var statearr_37279 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37279[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33092__auto__);

(statearr_37279[(1)] = (1));

return statearr_37279;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33092__auto____1 = (function (state_37268){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_37268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e37280){if((e37280 instanceof Object)){
var ex__33095__auto__ = e37280;
var statearr_37281_37290 = state_37268;
(statearr_37281_37290[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37291 = state_37268;
state_37268 = G__37291;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33092__auto__ = function(state_37268){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33092__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33092__auto____1.call(this,state_37268);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33092__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33092__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto___37283,out))
})();
var state__33183__auto__ = (function (){var statearr_37282 = f__33182__auto__.call(null);
(statearr_37282[(6)] = c__33181__auto___37283);

return statearr_37282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto___37283,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37292,opts){
var map__37293 = p__37292;
var map__37293__$1 = ((((!((map__37293 == null)))?((((map__37293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37293):map__37293);
var eval_body = cljs.core.get.call(null,map__37293__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37293__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30084__auto__ = eval_body;
if(cljs.core.truth_(and__30084__auto__)){
return typeof eval_body === 'string';
} else {
return and__30084__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37295){var e = e37295;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37296_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37296_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37297){
var vec__37298 = p__37297;
var k = cljs.core.nth.call(null,vec__37298,(0),null);
var v = cljs.core.nth.call(null,vec__37298,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37301){
var vec__37302 = p__37301;
var k = cljs.core.nth.call(null,vec__37302,(0),null);
var v = cljs.core.nth.call(null,vec__37302,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37308,p__37309){
var map__37310 = p__37308;
var map__37310__$1 = ((((!((map__37310 == null)))?((((map__37310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37310):map__37310);
var opts = map__37310__$1;
var before_jsload = cljs.core.get.call(null,map__37310__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37310__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37310__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37311 = p__37309;
var map__37311__$1 = ((((!((map__37311 == null)))?((((map__37311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37311):map__37311);
var msg = map__37311__$1;
var files = cljs.core.get.call(null,map__37311__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37311__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37311__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33182__auto__ = (function (){var switch__33091__auto__ = ((function (c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37465){
var state_val_37466 = (state_37465[(1)]);
if((state_val_37466 === (7))){
var inst_37327 = (state_37465[(7)]);
var inst_37325 = (state_37465[(8)]);
var inst_37326 = (state_37465[(9)]);
var inst_37328 = (state_37465[(10)]);
var inst_37333 = cljs.core._nth.call(null,inst_37326,inst_37328);
var inst_37334 = figwheel.client.file_reloading.eval_body.call(null,inst_37333,opts);
var inst_37335 = (inst_37328 + (1));
var tmp37467 = inst_37327;
var tmp37468 = inst_37325;
var tmp37469 = inst_37326;
var inst_37325__$1 = tmp37468;
var inst_37326__$1 = tmp37469;
var inst_37327__$1 = tmp37467;
var inst_37328__$1 = inst_37335;
var state_37465__$1 = (function (){var statearr_37470 = state_37465;
(statearr_37470[(7)] = inst_37327__$1);

(statearr_37470[(8)] = inst_37325__$1);

(statearr_37470[(11)] = inst_37334);

(statearr_37470[(9)] = inst_37326__$1);

(statearr_37470[(10)] = inst_37328__$1);

return statearr_37470;
})();
var statearr_37471_37554 = state_37465__$1;
(statearr_37471_37554[(2)] = null);

(statearr_37471_37554[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (20))){
var inst_37368 = (state_37465[(12)]);
var inst_37376 = figwheel.client.file_reloading.sort_files.call(null,inst_37368);
var state_37465__$1 = state_37465;
var statearr_37472_37555 = state_37465__$1;
(statearr_37472_37555[(2)] = inst_37376);

(statearr_37472_37555[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (27))){
var state_37465__$1 = state_37465;
var statearr_37473_37556 = state_37465__$1;
(statearr_37473_37556[(2)] = null);

(statearr_37473_37556[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (1))){
var inst_37317 = (state_37465[(13)]);
var inst_37314 = before_jsload.call(null,files);
var inst_37315 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37316 = (function (){return ((function (inst_37317,inst_37314,inst_37315,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37305_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37305_SHARP_);
});
;})(inst_37317,inst_37314,inst_37315,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37317__$1 = cljs.core.filter.call(null,inst_37316,files);
var inst_37318 = cljs.core.not_empty.call(null,inst_37317__$1);
var state_37465__$1 = (function (){var statearr_37474 = state_37465;
(statearr_37474[(14)] = inst_37315);

(statearr_37474[(13)] = inst_37317__$1);

(statearr_37474[(15)] = inst_37314);

return statearr_37474;
})();
if(cljs.core.truth_(inst_37318)){
var statearr_37475_37557 = state_37465__$1;
(statearr_37475_37557[(1)] = (2));

} else {
var statearr_37476_37558 = state_37465__$1;
(statearr_37476_37558[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (24))){
var state_37465__$1 = state_37465;
var statearr_37477_37559 = state_37465__$1;
(statearr_37477_37559[(2)] = null);

(statearr_37477_37559[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (39))){
var inst_37418 = (state_37465[(16)]);
var state_37465__$1 = state_37465;
var statearr_37478_37560 = state_37465__$1;
(statearr_37478_37560[(2)] = inst_37418);

(statearr_37478_37560[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (46))){
var inst_37460 = (state_37465[(2)]);
var state_37465__$1 = state_37465;
var statearr_37479_37561 = state_37465__$1;
(statearr_37479_37561[(2)] = inst_37460);

(statearr_37479_37561[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (4))){
var inst_37362 = (state_37465[(2)]);
var inst_37363 = cljs.core.List.EMPTY;
var inst_37364 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37363);
var inst_37365 = (function (){return ((function (inst_37362,inst_37363,inst_37364,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37306_SHARP_){
var and__30084__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37306_SHARP_);
if(cljs.core.truth_(and__30084__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37306_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37306_SHARP_)));
} else {
return and__30084__auto__;
}
});
;})(inst_37362,inst_37363,inst_37364,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37366 = cljs.core.filter.call(null,inst_37365,files);
var inst_37367 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37368 = cljs.core.concat.call(null,inst_37366,inst_37367);
var state_37465__$1 = (function (){var statearr_37480 = state_37465;
(statearr_37480[(17)] = inst_37362);

(statearr_37480[(18)] = inst_37364);

(statearr_37480[(12)] = inst_37368);

return statearr_37480;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37481_37562 = state_37465__$1;
(statearr_37481_37562[(1)] = (16));

} else {
var statearr_37482_37563 = state_37465__$1;
(statearr_37482_37563[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (15))){
var inst_37352 = (state_37465[(2)]);
var state_37465__$1 = state_37465;
var statearr_37483_37564 = state_37465__$1;
(statearr_37483_37564[(2)] = inst_37352);

(statearr_37483_37564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (21))){
var inst_37378 = (state_37465[(19)]);
var inst_37378__$1 = (state_37465[(2)]);
var inst_37379 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37378__$1);
var state_37465__$1 = (function (){var statearr_37484 = state_37465;
(statearr_37484[(19)] = inst_37378__$1);

return statearr_37484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37465__$1,(22),inst_37379);
} else {
if((state_val_37466 === (31))){
var inst_37463 = (state_37465[(2)]);
var state_37465__$1 = state_37465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37465__$1,inst_37463);
} else {
if((state_val_37466 === (32))){
var inst_37418 = (state_37465[(16)]);
var inst_37423 = inst_37418.cljs$lang$protocol_mask$partition0$;
var inst_37424 = (inst_37423 & (64));
var inst_37425 = inst_37418.cljs$core$ISeq$;
var inst_37426 = (cljs.core.PROTOCOL_SENTINEL === inst_37425);
var inst_37427 = (inst_37424) || (inst_37426);
var state_37465__$1 = state_37465;
if(cljs.core.truth_(inst_37427)){
var statearr_37485_37565 = state_37465__$1;
(statearr_37485_37565[(1)] = (35));

} else {
var statearr_37486_37566 = state_37465__$1;
(statearr_37486_37566[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (40))){
var inst_37440 = (state_37465[(20)]);
var inst_37439 = (state_37465[(2)]);
var inst_37440__$1 = cljs.core.get.call(null,inst_37439,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37441 = cljs.core.get.call(null,inst_37439,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37442 = cljs.core.not_empty.call(null,inst_37440__$1);
var state_37465__$1 = (function (){var statearr_37487 = state_37465;
(statearr_37487[(21)] = inst_37441);

(statearr_37487[(20)] = inst_37440__$1);

return statearr_37487;
})();
if(cljs.core.truth_(inst_37442)){
var statearr_37488_37567 = state_37465__$1;
(statearr_37488_37567[(1)] = (41));

} else {
var statearr_37489_37568 = state_37465__$1;
(statearr_37489_37568[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (33))){
var state_37465__$1 = state_37465;
var statearr_37490_37569 = state_37465__$1;
(statearr_37490_37569[(2)] = false);

(statearr_37490_37569[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (13))){
var inst_37338 = (state_37465[(22)]);
var inst_37342 = cljs.core.chunk_first.call(null,inst_37338);
var inst_37343 = cljs.core.chunk_rest.call(null,inst_37338);
var inst_37344 = cljs.core.count.call(null,inst_37342);
var inst_37325 = inst_37343;
var inst_37326 = inst_37342;
var inst_37327 = inst_37344;
var inst_37328 = (0);
var state_37465__$1 = (function (){var statearr_37491 = state_37465;
(statearr_37491[(7)] = inst_37327);

(statearr_37491[(8)] = inst_37325);

(statearr_37491[(9)] = inst_37326);

(statearr_37491[(10)] = inst_37328);

return statearr_37491;
})();
var statearr_37492_37570 = state_37465__$1;
(statearr_37492_37570[(2)] = null);

(statearr_37492_37570[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (22))){
var inst_37378 = (state_37465[(19)]);
var inst_37386 = (state_37465[(23)]);
var inst_37381 = (state_37465[(24)]);
var inst_37382 = (state_37465[(25)]);
var inst_37381__$1 = (state_37465[(2)]);
var inst_37382__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37381__$1);
var inst_37383 = (function (){var all_files = inst_37378;
var res_SINGLEQUOTE_ = inst_37381__$1;
var res = inst_37382__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37378,inst_37386,inst_37381,inst_37382,inst_37381__$1,inst_37382__$1,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37307_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37307_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37378,inst_37386,inst_37381,inst_37382,inst_37381__$1,inst_37382__$1,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37384 = cljs.core.filter.call(null,inst_37383,inst_37381__$1);
var inst_37385 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37386__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37385);
var inst_37387 = cljs.core.not_empty.call(null,inst_37386__$1);
var state_37465__$1 = (function (){var statearr_37493 = state_37465;
(statearr_37493[(23)] = inst_37386__$1);

(statearr_37493[(24)] = inst_37381__$1);

(statearr_37493[(25)] = inst_37382__$1);

(statearr_37493[(26)] = inst_37384);

return statearr_37493;
})();
if(cljs.core.truth_(inst_37387)){
var statearr_37494_37571 = state_37465__$1;
(statearr_37494_37571[(1)] = (23));

} else {
var statearr_37495_37572 = state_37465__$1;
(statearr_37495_37572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (36))){
var state_37465__$1 = state_37465;
var statearr_37496_37573 = state_37465__$1;
(statearr_37496_37573[(2)] = false);

(statearr_37496_37573[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (41))){
var inst_37440 = (state_37465[(20)]);
var inst_37444 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37445 = cljs.core.map.call(null,inst_37444,inst_37440);
var inst_37446 = cljs.core.pr_str.call(null,inst_37445);
var inst_37447 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37446)].join('');
var inst_37448 = figwheel.client.utils.log.call(null,inst_37447);
var state_37465__$1 = state_37465;
var statearr_37497_37574 = state_37465__$1;
(statearr_37497_37574[(2)] = inst_37448);

(statearr_37497_37574[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (43))){
var inst_37441 = (state_37465[(21)]);
var inst_37451 = (state_37465[(2)]);
var inst_37452 = cljs.core.not_empty.call(null,inst_37441);
var state_37465__$1 = (function (){var statearr_37498 = state_37465;
(statearr_37498[(27)] = inst_37451);

return statearr_37498;
})();
if(cljs.core.truth_(inst_37452)){
var statearr_37499_37575 = state_37465__$1;
(statearr_37499_37575[(1)] = (44));

} else {
var statearr_37500_37576 = state_37465__$1;
(statearr_37500_37576[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (29))){
var inst_37378 = (state_37465[(19)]);
var inst_37386 = (state_37465[(23)]);
var inst_37418 = (state_37465[(16)]);
var inst_37381 = (state_37465[(24)]);
var inst_37382 = (state_37465[(25)]);
var inst_37384 = (state_37465[(26)]);
var inst_37414 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37417 = (function (){var all_files = inst_37378;
var res_SINGLEQUOTE_ = inst_37381;
var res = inst_37382;
var files_not_loaded = inst_37384;
var dependencies_that_loaded = inst_37386;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37378,inst_37386,inst_37418,inst_37381,inst_37382,inst_37384,inst_37414,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37416){
var map__37501 = p__37416;
var map__37501__$1 = ((((!((map__37501 == null)))?((((map__37501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37501):map__37501);
var namespace = cljs.core.get.call(null,map__37501__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37378,inst_37386,inst_37418,inst_37381,inst_37382,inst_37384,inst_37414,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37418__$1 = cljs.core.group_by.call(null,inst_37417,inst_37384);
var inst_37420 = (inst_37418__$1 == null);
var inst_37421 = cljs.core.not.call(null,inst_37420);
var state_37465__$1 = (function (){var statearr_37503 = state_37465;
(statearr_37503[(28)] = inst_37414);

(statearr_37503[(16)] = inst_37418__$1);

return statearr_37503;
})();
if(inst_37421){
var statearr_37504_37577 = state_37465__$1;
(statearr_37504_37577[(1)] = (32));

} else {
var statearr_37505_37578 = state_37465__$1;
(statearr_37505_37578[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (44))){
var inst_37441 = (state_37465[(21)]);
var inst_37454 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37441);
var inst_37455 = cljs.core.pr_str.call(null,inst_37454);
var inst_37456 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37455)].join('');
var inst_37457 = figwheel.client.utils.log.call(null,inst_37456);
var state_37465__$1 = state_37465;
var statearr_37506_37579 = state_37465__$1;
(statearr_37506_37579[(2)] = inst_37457);

(statearr_37506_37579[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (6))){
var inst_37359 = (state_37465[(2)]);
var state_37465__$1 = state_37465;
var statearr_37507_37580 = state_37465__$1;
(statearr_37507_37580[(2)] = inst_37359);

(statearr_37507_37580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (28))){
var inst_37384 = (state_37465[(26)]);
var inst_37411 = (state_37465[(2)]);
var inst_37412 = cljs.core.not_empty.call(null,inst_37384);
var state_37465__$1 = (function (){var statearr_37508 = state_37465;
(statearr_37508[(29)] = inst_37411);

return statearr_37508;
})();
if(cljs.core.truth_(inst_37412)){
var statearr_37509_37581 = state_37465__$1;
(statearr_37509_37581[(1)] = (29));

} else {
var statearr_37510_37582 = state_37465__$1;
(statearr_37510_37582[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (25))){
var inst_37382 = (state_37465[(25)]);
var inst_37398 = (state_37465[(2)]);
var inst_37399 = cljs.core.not_empty.call(null,inst_37382);
var state_37465__$1 = (function (){var statearr_37511 = state_37465;
(statearr_37511[(30)] = inst_37398);

return statearr_37511;
})();
if(cljs.core.truth_(inst_37399)){
var statearr_37512_37583 = state_37465__$1;
(statearr_37512_37583[(1)] = (26));

} else {
var statearr_37513_37584 = state_37465__$1;
(statearr_37513_37584[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (34))){
var inst_37434 = (state_37465[(2)]);
var state_37465__$1 = state_37465;
if(cljs.core.truth_(inst_37434)){
var statearr_37514_37585 = state_37465__$1;
(statearr_37514_37585[(1)] = (38));

} else {
var statearr_37515_37586 = state_37465__$1;
(statearr_37515_37586[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (17))){
var state_37465__$1 = state_37465;
var statearr_37516_37587 = state_37465__$1;
(statearr_37516_37587[(2)] = recompile_dependents);

(statearr_37516_37587[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (3))){
var state_37465__$1 = state_37465;
var statearr_37517_37588 = state_37465__$1;
(statearr_37517_37588[(2)] = null);

(statearr_37517_37588[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (12))){
var inst_37355 = (state_37465[(2)]);
var state_37465__$1 = state_37465;
var statearr_37518_37589 = state_37465__$1;
(statearr_37518_37589[(2)] = inst_37355);

(statearr_37518_37589[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (2))){
var inst_37317 = (state_37465[(13)]);
var inst_37324 = cljs.core.seq.call(null,inst_37317);
var inst_37325 = inst_37324;
var inst_37326 = null;
var inst_37327 = (0);
var inst_37328 = (0);
var state_37465__$1 = (function (){var statearr_37519 = state_37465;
(statearr_37519[(7)] = inst_37327);

(statearr_37519[(8)] = inst_37325);

(statearr_37519[(9)] = inst_37326);

(statearr_37519[(10)] = inst_37328);

return statearr_37519;
})();
var statearr_37520_37590 = state_37465__$1;
(statearr_37520_37590[(2)] = null);

(statearr_37520_37590[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (23))){
var inst_37378 = (state_37465[(19)]);
var inst_37386 = (state_37465[(23)]);
var inst_37381 = (state_37465[(24)]);
var inst_37382 = (state_37465[(25)]);
var inst_37384 = (state_37465[(26)]);
var inst_37389 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37391 = (function (){var all_files = inst_37378;
var res_SINGLEQUOTE_ = inst_37381;
var res = inst_37382;
var files_not_loaded = inst_37384;
var dependencies_that_loaded = inst_37386;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37378,inst_37386,inst_37381,inst_37382,inst_37384,inst_37389,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37390){
var map__37521 = p__37390;
var map__37521__$1 = ((((!((map__37521 == null)))?((((map__37521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37521):map__37521);
var request_url = cljs.core.get.call(null,map__37521__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37378,inst_37386,inst_37381,inst_37382,inst_37384,inst_37389,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37392 = cljs.core.reverse.call(null,inst_37386);
var inst_37393 = cljs.core.map.call(null,inst_37391,inst_37392);
var inst_37394 = cljs.core.pr_str.call(null,inst_37393);
var inst_37395 = figwheel.client.utils.log.call(null,inst_37394);
var state_37465__$1 = (function (){var statearr_37523 = state_37465;
(statearr_37523[(31)] = inst_37389);

return statearr_37523;
})();
var statearr_37524_37591 = state_37465__$1;
(statearr_37524_37591[(2)] = inst_37395);

(statearr_37524_37591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (35))){
var state_37465__$1 = state_37465;
var statearr_37525_37592 = state_37465__$1;
(statearr_37525_37592[(2)] = true);

(statearr_37525_37592[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (19))){
var inst_37368 = (state_37465[(12)]);
var inst_37374 = figwheel.client.file_reloading.expand_files.call(null,inst_37368);
var state_37465__$1 = state_37465;
var statearr_37526_37593 = state_37465__$1;
(statearr_37526_37593[(2)] = inst_37374);

(statearr_37526_37593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (11))){
var state_37465__$1 = state_37465;
var statearr_37527_37594 = state_37465__$1;
(statearr_37527_37594[(2)] = null);

(statearr_37527_37594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (9))){
var inst_37357 = (state_37465[(2)]);
var state_37465__$1 = state_37465;
var statearr_37528_37595 = state_37465__$1;
(statearr_37528_37595[(2)] = inst_37357);

(statearr_37528_37595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (5))){
var inst_37327 = (state_37465[(7)]);
var inst_37328 = (state_37465[(10)]);
var inst_37330 = (inst_37328 < inst_37327);
var inst_37331 = inst_37330;
var state_37465__$1 = state_37465;
if(cljs.core.truth_(inst_37331)){
var statearr_37529_37596 = state_37465__$1;
(statearr_37529_37596[(1)] = (7));

} else {
var statearr_37530_37597 = state_37465__$1;
(statearr_37530_37597[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (14))){
var inst_37338 = (state_37465[(22)]);
var inst_37347 = cljs.core.first.call(null,inst_37338);
var inst_37348 = figwheel.client.file_reloading.eval_body.call(null,inst_37347,opts);
var inst_37349 = cljs.core.next.call(null,inst_37338);
var inst_37325 = inst_37349;
var inst_37326 = null;
var inst_37327 = (0);
var inst_37328 = (0);
var state_37465__$1 = (function (){var statearr_37531 = state_37465;
(statearr_37531[(7)] = inst_37327);

(statearr_37531[(8)] = inst_37325);

(statearr_37531[(9)] = inst_37326);

(statearr_37531[(10)] = inst_37328);

(statearr_37531[(32)] = inst_37348);

return statearr_37531;
})();
var statearr_37532_37598 = state_37465__$1;
(statearr_37532_37598[(2)] = null);

(statearr_37532_37598[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (45))){
var state_37465__$1 = state_37465;
var statearr_37533_37599 = state_37465__$1;
(statearr_37533_37599[(2)] = null);

(statearr_37533_37599[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (26))){
var inst_37378 = (state_37465[(19)]);
var inst_37386 = (state_37465[(23)]);
var inst_37381 = (state_37465[(24)]);
var inst_37382 = (state_37465[(25)]);
var inst_37384 = (state_37465[(26)]);
var inst_37401 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37403 = (function (){var all_files = inst_37378;
var res_SINGLEQUOTE_ = inst_37381;
var res = inst_37382;
var files_not_loaded = inst_37384;
var dependencies_that_loaded = inst_37386;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37378,inst_37386,inst_37381,inst_37382,inst_37384,inst_37401,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37402){
var map__37534 = p__37402;
var map__37534__$1 = ((((!((map__37534 == null)))?((((map__37534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37534):map__37534);
var namespace = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37378,inst_37386,inst_37381,inst_37382,inst_37384,inst_37401,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37404 = cljs.core.map.call(null,inst_37403,inst_37382);
var inst_37405 = cljs.core.pr_str.call(null,inst_37404);
var inst_37406 = figwheel.client.utils.log.call(null,inst_37405);
var inst_37407 = (function (){var all_files = inst_37378;
var res_SINGLEQUOTE_ = inst_37381;
var res = inst_37382;
var files_not_loaded = inst_37384;
var dependencies_that_loaded = inst_37386;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37378,inst_37386,inst_37381,inst_37382,inst_37384,inst_37401,inst_37403,inst_37404,inst_37405,inst_37406,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37378,inst_37386,inst_37381,inst_37382,inst_37384,inst_37401,inst_37403,inst_37404,inst_37405,inst_37406,state_val_37466,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37408 = setTimeout(inst_37407,(10));
var state_37465__$1 = (function (){var statearr_37536 = state_37465;
(statearr_37536[(33)] = inst_37406);

(statearr_37536[(34)] = inst_37401);

return statearr_37536;
})();
var statearr_37537_37600 = state_37465__$1;
(statearr_37537_37600[(2)] = inst_37408);

(statearr_37537_37600[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (16))){
var state_37465__$1 = state_37465;
var statearr_37538_37601 = state_37465__$1;
(statearr_37538_37601[(2)] = reload_dependents);

(statearr_37538_37601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (38))){
var inst_37418 = (state_37465[(16)]);
var inst_37436 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37418);
var state_37465__$1 = state_37465;
var statearr_37539_37602 = state_37465__$1;
(statearr_37539_37602[(2)] = inst_37436);

(statearr_37539_37602[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (30))){
var state_37465__$1 = state_37465;
var statearr_37540_37603 = state_37465__$1;
(statearr_37540_37603[(2)] = null);

(statearr_37540_37603[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (10))){
var inst_37338 = (state_37465[(22)]);
var inst_37340 = cljs.core.chunked_seq_QMARK_.call(null,inst_37338);
var state_37465__$1 = state_37465;
if(inst_37340){
var statearr_37541_37604 = state_37465__$1;
(statearr_37541_37604[(1)] = (13));

} else {
var statearr_37542_37605 = state_37465__$1;
(statearr_37542_37605[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (18))){
var inst_37372 = (state_37465[(2)]);
var state_37465__$1 = state_37465;
if(cljs.core.truth_(inst_37372)){
var statearr_37543_37606 = state_37465__$1;
(statearr_37543_37606[(1)] = (19));

} else {
var statearr_37544_37607 = state_37465__$1;
(statearr_37544_37607[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (42))){
var state_37465__$1 = state_37465;
var statearr_37545_37608 = state_37465__$1;
(statearr_37545_37608[(2)] = null);

(statearr_37545_37608[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (37))){
var inst_37431 = (state_37465[(2)]);
var state_37465__$1 = state_37465;
var statearr_37546_37609 = state_37465__$1;
(statearr_37546_37609[(2)] = inst_37431);

(statearr_37546_37609[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37466 === (8))){
var inst_37325 = (state_37465[(8)]);
var inst_37338 = (state_37465[(22)]);
var inst_37338__$1 = cljs.core.seq.call(null,inst_37325);
var state_37465__$1 = (function (){var statearr_37547 = state_37465;
(statearr_37547[(22)] = inst_37338__$1);

return statearr_37547;
})();
if(inst_37338__$1){
var statearr_37548_37610 = state_37465__$1;
(statearr_37548_37610[(1)] = (10));

} else {
var statearr_37549_37611 = state_37465__$1;
(statearr_37549_37611[(1)] = (11));

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
}
});})(c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33091__auto__,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33092__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33092__auto____0 = (function (){
var statearr_37550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37550[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33092__auto__);

(statearr_37550[(1)] = (1));

return statearr_37550;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33092__auto____1 = (function (state_37465){
while(true){
var ret_value__33093__auto__ = (function (){try{while(true){
var result__33094__auto__ = switch__33091__auto__.call(null,state_37465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33094__auto__;
}
break;
}
}catch (e37551){if((e37551 instanceof Object)){
var ex__33095__auto__ = e37551;
var statearr_37552_37612 = state_37465;
(statearr_37552_37612[(5)] = ex__33095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37613 = state_37465;
state_37465 = G__37613;
continue;
} else {
return ret_value__33093__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33092__auto__ = function(state_37465){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33092__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33092__auto____1.call(this,state_37465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33092__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33092__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33092__auto__;
})()
;})(switch__33091__auto__,c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33183__auto__ = (function (){var statearr_37553 = f__33182__auto__.call(null);
(statearr_37553[(6)] = c__33181__auto__);

return statearr_37553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33183__auto__);
});})(c__33181__auto__,map__37310,map__37310__$1,opts,before_jsload,on_jsload,reload_dependents,map__37311,map__37311__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33181__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37616,link){
var map__37617 = p__37616;
var map__37617__$1 = ((((!((map__37617 == null)))?((((map__37617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37617):map__37617);
var file = cljs.core.get.call(null,map__37617__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__37617,map__37617__$1,file){
return (function (p1__37614_SHARP_,p2__37615_SHARP_){
if(cljs.core._EQ_.call(null,p1__37614_SHARP_,p2__37615_SHARP_)){
return p1__37614_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__37617,map__37617__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37620){
var map__37621 = p__37620;
var map__37621__$1 = ((((!((map__37621 == null)))?((((map__37621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37621):map__37621);
var match_length = cljs.core.get.call(null,map__37621__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37621__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37619_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37619_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37623_SHARP_,p2__37624_SHARP_){
return cljs.core.assoc.call(null,p1__37623_SHARP_,cljs.core.get.call(null,p2__37624_SHARP_,key),p2__37624_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37625 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37625);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37625);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37626,p__37627){
var map__37628 = p__37626;
var map__37628__$1 = ((((!((map__37628 == null)))?((((map__37628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37628):map__37628);
var on_cssload = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37629 = p__37627;
var map__37629__$1 = ((((!((map__37629 == null)))?((((map__37629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37629):map__37629);
var files_msg = map__37629__$1;
var files = cljs.core.get.call(null,map__37629__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1510806282697
