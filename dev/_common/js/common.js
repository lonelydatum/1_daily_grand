const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut

function first(to_){
	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.from(".t1", .2, {opacity:0})

	
	const to = {...to_, y:"-=60", rotation:50, scale:.7, opacity:.2, ease:Back.easeOut}

	
	tl.add("hero2", "+=2")
	tl.to(".cal_1", 1.3, {...to}, "hero2")	
	tl.from(".hero2", .01, {opacity:0}, "hero2")

	tl.add("hero3", "+=2")
	tl.to(".cal_2", 1.3, {...to}, "hero3")	
	tl.from(".hero3", .01, {opacity:0}, "hero3")

	return tl
}

function last(){
	const tl = new TimelineMax()

	tl.call(()=>{		
		document.getElementById("hero").className = "out"
	}, [], this, "+=1")

	tl.to(".frame1", .2, {opacity:0}, "+=.5")

	tl.to(".frame2", .1, {opacity:1})

	tl.from(".t2", .3, {opacity:0})
	tl.from([".cta"], .3, {opacity:0}, "+=.7")

	return tl
}



export {size, first, last}