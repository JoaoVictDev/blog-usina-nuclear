const navFixed = () => {
	const nav = document.querySelector('nav')

	if(document.documentElement.scrollTop <= 200){
		nav.classList.remove('nav-fixed')
		nav.classList.add('nav-top')
	}else{
		nav.classList.remove('nav-top')
		nav.classList.add('nav-fixed')
	}

}
