(function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var name;
  function main$lambda(req, res) {
    res.type('text/plain');
    return res.send(name);
  }
  function main$lambda_0() {
    println('Listening on port 3000');
  }
  function main(args) {
    println('Hello JavaScript!');
    var express = require('express');
    var app = express();
    app.get('/', main$lambda);
    app.listen(3000, main$lambda_0);
  }
  Object.defineProperty(_, 'name', {
    get: function () {
      return name;
    },
    set: function (value) {
      name = value;
    }
  });
  _.main_kand9s$ = main;
  name = 'popo';
  Kotlin.defineModule('index', _);
  main([]);
  return _;
}(module.exports, require('kotlin')));
