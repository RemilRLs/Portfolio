const navbar = document.querySelector(".navbar")

let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () =>{
    const currentScroll = window.pageXOffset;

    if(prevScrollPos < window.scrollY){
        console.log("We are going down");
        navbar.classList.add("nav--hiden");
    }
    else{
        console.log("We are going up");
        navbar.classList.remove("nav--hiden");
    }

    prevScrollPos = window.scrollY;
})
