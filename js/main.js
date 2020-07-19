function height() {
    "use strict"
    // select vaiables
    const slider = document.querySelectorAll(".carousel-item"), // imgs of slider
        slide = document.querySelector(".slide"),
        upBHight = document.querySelector(".upper-bar").offsetHeight, // upeer bar height
        navbarHeight = document.querySelector(".navbar").offsetHeight; // navbar height

    let windowHeight = window.innerHeight, // height of window
    heightr = windowHeight - (upBHight + navbarHeight); // height of slider img
    
    // give the elemnt of slide width
    slider.forEach( e => {
        e.style.height = '' + (heightr) +'px'; 
    })
    slide.style.height = ''+ (heightr) + 'px';
}
height();
/* filter shiffle img */
// select variables
const controls = document.querySelectorAll(".works ul li"),
    workImg = document.querySelectorAll(".shuffle-img img");

// add class active on img when load page
window.addEventListener("load", () => {
    for (let i = 0; i < workImg.length; i++) {
        workImg[i].classList.add("active")
    }
})


// filter img and li controls
controls.forEach( e => {
    // setAttribute for el with name in value
    e.setAttribute("data-filter", e.textContent)
    // filter and add class active for any element
    e.addEventListener("click", el => {
        // remove class active from sibling
        controls.forEach(e => {
            e.classList.remove("active");
        })
        // add class active on el.target
        el.target.classList.add("active");
        // filter img
        for (let i = 0; i < workImg.length; i++) {
            // check if img alt equal dataset of li control
            if (el.target.dataset.filter === workImg[i].alt) {
                // add active on img contains alt - dataset of li
                workImg[i].classList.add("active");
            } else {
                // remove class activ e from img havnt alt equal li conrols dataset
                workImg[i].classList.remove("active");
            }
            // check li control contains alt all 
            if (el.target.dataset.filter === "all") {
                // loop for img
                workImg.forEach(img => {
                    // add class active on imgs
                    workImg[i].classList.add("active");
                })
            } else {
                false;
            }
        }
        
    })
})

// popu box
workImg.forEach(img => {
    img.addEventListener("click", item => {
        // add the templete pop-box
        let templetpop = `
        <div class="pop-box">
            <i class="fa fa-times pop-icon" aria-hidden="true"></i>
            <img src="${item.target.src}" class="pop-img">
        </div>
        `
        // add the templete in pop created in html
        document.querySelector(".pop").innerHTML = templetpop;
    })
})


// remove pop-box
document.documentElement.addEventListener("click", e => {
    // check if elements has class we want it
    if(e.target.classList.contains("pop-icon") || e.target.classList.contains("pop-box")) {
        // remove pop-box
        document.querySelector(".pop-box").remove();
    }
})

window.addEventListener("scroll", () => {
    let windowscroll = window.scrollY;
    let top = document.querySelector(".overview .overview-content").offsetTop;
    let eltop = document.querySelector(".overview .overview-content").offsetHeight;
    if(windowscroll >  top - eltop ) {
        document.querySelector(".overview .overview-content").style.left = "0"
        
    }
    /* second anmi */ 
    let featTop = document.querySelector(".features").offsetTop;
    let featheight = document.querySelector(".features").offsetHeight;
    let elm = document.querySelectorAll(".features .left");
    if(windowscroll > featTop - featheight) {
        for(let i = 0; i < elm.length; i++) {
            elm[i].classList.add("op")
            
        }
    }
    let anmis = document.querySelectorAll(".anmi");
    anmis.forEach(el  => {
        let topel = el.offsetTop;
        if(windowscroll > topel -100) {
            el.classList.add("hh") 
        }
    })
    let pricing = document.querySelectorAll(".pricing");
    pricing.forEach(el  => {
        let topel = el.offsetTop;
        if(windowscroll > topel-200) {
            el.classList.add("hov") 
        }
    })
})
/* scroll on item header */
let headItem = document.querySelectorAll(".nav-item");
headItem.forEach( it => {
    it.addEventListener("click", ite => {
        document.querySelector(ite.target.dataset.scroll).scrollIntoView({behavior: "smooth"})
    })
} )

/* remove landingpage */
const loader = document.querySelector(".load-page");
window.addEventListener("load", () => {
    loader.classList.add("disapper");
    document.body.style.overflow = "auto"
})
