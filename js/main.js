window.addEventListener('load', scrollTop);

function scrollTop() {
    const imgParallax = document.querySelector('#fondo-pattner')
    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        let widthParallax = scrollTop / 3
        if(widthParallax <= 100) {
            imgParallax.style.width = `${widthParallax}%`
            
        }
        console.log(scrollTop)
    })
}