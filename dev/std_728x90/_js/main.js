import {first, last} from '../../_common/js/common.js'


function start(to_){
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.from(".t1", .4, {opacity:0, ease:Power3.easeOut}, "+=.2")
	tl.to(".t1", .3, {opacity:0}, "+=4")

	tl.from(".t2", .3, {opacity:0})
	tl.from(".cta", .3, {opacity:0, y:"+=50"}, "+=.3")
	
	// tl.gotoAndPlay("hero3")	

}

start()


module.exports = {};

