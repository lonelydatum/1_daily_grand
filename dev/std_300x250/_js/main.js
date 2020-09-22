
function start(){
	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax({onComplete:()=>{
		
	}})
	tl.set(".frame1", {opacity:1})


	tl.from(".t1", .2, {opacity:0})

	const from = {x:"+=150", rotation:50, opacity:0, scale:.3, ease:Back.easeOut}
	const to = {x:"-=150", y:"-=30", rotation:50, scale:.7, opacity:.2, ease:Back.easeOut}

	// tl.from(".cal_1", .3, {...from} , "+=1")
	tl.add("hero2", "+=2")

	

	tl.to(".cal_1", .6, {...to}, "hero2")
	// tl.from(".cal_2", .001, {opacity:0}, "hero2")
	tl.from(".hero2", .01, {opacity:0}, "hero2")

	tl.add("hero3", "+=2")
	tl.to(".cal_2", .6, {...to}, "hero3")
	// tl.from(".cal_3", .001, {opacity:0}, "hero2-=.1")
	tl.from(".hero3", .01, {opacity:0}, "hero3")

	tl.to(".hero3", 3, {scale:.333333, x:0, y:0, ease:Power4.easeIn}, "hero3")

	tl.set([".hero1", ".hero2"], {opacity:0}, "+=2")

	
	tl.call(()=>{		
		document.getElementById("hero")	.className = "out"
	})

	tl.to(".frame1", .3, {opacity:0}, "+=.2")

	tl.to(".frame2", .3, {opacity:1})

	tl.from(".t2", .3, {opacity:0})
	tl.from([".cta"], .3, {opacity:0}, "+=.7")
	
}

start()


module.exports = {};

