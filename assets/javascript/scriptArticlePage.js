
const navFixed = () => {
	const nav = document.querySelector('nav')

	if(document.documentElement.scrollTop <= 200){
		nav.classList.remove('nav-fixed')
	}else{
		nav.classList.add('nav-fixed')
	}
}
