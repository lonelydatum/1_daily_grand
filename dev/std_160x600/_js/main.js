import {first, last} from '../../_common/js/common.js'


function start(to_){
	const tl = new TimelineMax()

	tl.add( first(to_) )
	// tl.to(".hero3", 3, {scale:.333333, x:0, y:0, ease:Power1.easeIn}, "hero3-=1")
	tl.to(".hero3", 2.5, {scale:.333333, x:0, y:0, ease:Power3.easeIn}, "hero3-=1.5")
	tl.add( last() )
	
	// tl.gotoAndPlay("hero3")	

}

start({x:"-=250"})


module.exports = {};

