(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function start() {
	TweenLite.defaultEase = Power2.easeOut;
	var tl = new TimelineMax({ onComplete: function onComplete() {} });
	tl.set(".frame1", { opacity: 1 });

	tl.from(".t1", .2, { opacity: 0 });

	var from = { x: "+=150", rotation: 50, opacity: 0, scale: .3, ease: Back.easeOut };
	var to = { x: "-=150", y: "-=30", rotation: 50, scale: .7, opacity: .2, ease: Back.easeOut };

	tl.from(".cal_1", .3, _extends({}, from), "+=1");
	tl.add("hero2", "+=2");

	tl.to(".cal_1", .6, _extends({}, to), "hero2");
	tl.from(".cal_2", .6, _extends({}, from), "hero2");
	tl.from(".hero2", .01, { opacity: 0 }, "hero2");

	tl.add("hero3", "+=2");
	tl.to(".cal_2", .6, _extends({}, to), "hero3");
	tl.from(".cal_3", .6, _extends({}, from), "hero3");
	tl.from(".hero3", .01, { opacity: 0 }, "hero3");

	tl.to(".hero3", .6, { scale: .333333, x: 0, y: 0, ease: Power3.easeOut }, "+=1");

	tl.set([".hero1", ".hero2"], { opacity: 0 }, "+=2");

	tl.call(function () {
		document.getElementById("hero").className = "out";
	});

	tl.to(".frame1", .3, { opacity: 0 }, "+=.2");

	tl.to(".frame2", .3, { opacity: 1 });

	tl.from(".t2", .3, { opacity: 0 });
	tl.from([".cta", ".logo2"], .3, { opacity: 0 }, "+=.7");
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
