(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {
	TweenLite.defaultEase = Power2.easeOut;
	var tl = new TimelineMax({ onComplete: function onComplete() {} });
	tl.set(".frame1", { opacity: 1 });

	// tl.to(".hero3", 2, {webkitClipPath: "polygon(300px 0px, 300px 0px, 300px 250px, 300px 250px)" }, "+=1")
	// tl.to(".hero", 2, {webkitClipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }, "+=1")

	tl.from(".t1", .2, { opacity: 0 });

	tl.from(".cal_1", .5, { x: "+=150", rotation: 50, opacity: 0, scale: .3, ease: Back.easeOut }, "+=.2");
	tl.add("hero2", "+=2");

	tl.to(".cal_1", .6, { x: "-=150", y: "-=30", rotation: 50, scale: .7, opacity: .2, ease: Back.easeOut }, "hero2");
	tl.from(".cal_2", .6, { x: "+=150", rotation: 50, opacity: 0, scale: .3, ease: Back.easeOut }, "hero2");
	tl.from(".hero2", .01, { opacity: 0 }, "hero2");

	tl.add("hero3", "+=2");
	tl.to(".cal_2", .6, { x: "-=150", y: "-=30", rotation: 50, scale: .7, opacity: .2, ease: Back.easeOut }, "hero3");
	tl.from(".cal_3", .6, { x: "+=150", rotation: 50, opacity: 0, scale: .3, ease: Back.easeOut }, "hero3");
	tl.from(".hero3", .01, { opacity: 0 }, "hero3");

	tl.to(".hero3", 1, { scale: .333333, x: 0, y: 0 }, "+=1");

	tl.set([".hero1", ".hero2"], { opacity: 0 }, "+=2");

	tl.call(function () {
		var hero = document.getElementById("hero");
		hero.className = "out";
		void 0;
	});

	tl.to(".frame1", .3, { opacity: 0 }, "+=1");

	tl.to(".frame2", .3, { opacity: 1 });

	tl.from(".t2", .3, { opacity: 0 });
	tl.from(".cta", .3, { opacity: 0 }, "+=.7");

	// tl.to(".hero", 1, {clipPath: "polygon(300px 0px, 300px 0px, 300px 250px, 300px 250px)" }, "+=1")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
