(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function first(to_) {
	TweenLite.defaultEase = Power2.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	tl.from(".t1", .2, { opacity: 0 });

	var to = _extends({}, to_, { y: "-=60", rotation: 50, scale: .7, opacity: .2, ease: Back.easeOut });

	tl.add("hero2", "+=2");
	tl.to(".cal_1", 1.3, _extends({}, to), "hero2");
	tl.from(".hero2", .01, { opacity: 0 }, "hero2");

	tl.add("hero3", "+=2");
	tl.to(".cal_2", 1.3, _extends({}, to), "hero3");
	tl.from(".hero3", .01, { opacity: 0 }, "hero3");

	return tl;
}

function last() {
	var tl = new TimelineMax();

	tl.call(function () {
		document.getElementById("hero").className = "out";
	}, [], this, "+=1");

	tl.to(".frame1", .2, { opacity: 0 }, "+=.5");

	tl.to(".frame2", .1, { opacity: 1 });

	tl.from(".t2", .3, { opacity: 0 });
	tl.from([".cta"], .3, { opacity: 0 }, "+=.7");

	return tl;
}

exports.size = size;
exports.first = first;
exports.last = last;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function start(to_) {
	var tl = new TimelineMax();

	tl.add((0, _commonJsCommonJs.first)(to_));
	tl.to(".hero3", 2.5, { scale: .333333, x: 0, y: 0, ease: Power3.easeIn }, "hero3-=1.5");
	tl.add((0, _commonJsCommonJs.last)());

	// tl.gotoAndPlay("hero3")	
}

start({ x: "-=250" });

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
