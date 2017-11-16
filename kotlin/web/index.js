if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'index'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'index'.");
}
var index = function (_, Kotlin) {
  'use strict';
  var throwNPE = Kotlin.throwNPE;
  var Unit = Kotlin.kotlin.Unit;
  function main$lambda(it) {
    var tmp$;
    var tmp$_0 = (tmp$ = document.body) != null ? tmp$ : throwNPE();
    var $receiver = document.createElement('div');
    $receiver.textContent = 'Hello, world!';
    tmp$_0.append($receiver);
    return Unit;
  }
  function main(args) {
    window.onload = main$lambda;
  }
  var package$org = _.org || (_.org = {});
  var package$sample = package$org.sample || (package$org.sample = {});
  package$sample.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('index', _);
  return _;
}(typeof index === 'undefined' ? {} : index, kotlin);

//# sourceMappingURL=index.js.map
