/*=========================================
    STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(13,17,23,.97)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }

    else{

        header.style.background = "rgba(13,17,23,.90)";
        header.style.boxShadow = "none";

    }

});


/*=========================================
    ACTIVE MENU
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.clientHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


/*=========================================
    SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))

        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*=========================================
    TYPING ANIMATION
=========================================*/

const titles=[

"IT Infrastructure Engineer",

"AWS Cloud Engineer",

"System Administrator",

"DevOps Enthusiast"

];

let titleIndex=0;

let charIndex=0;

const heroTitle=document.querySelector(".hero h3");

function typeEffect(){

    if(charIndex<titles[titleIndex].length){

        heroTitle.textContent += titles[titleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,90);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex>0){

        heroTitle.textContent=titles[titleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        titleIndex++;

        if(titleIndex>=titles.length){

            titleIndex=0;

        }

        setTimeout(typeEffect,400);

    }

}

heroTitle.textContent="";

typeEffect();


/*=========================================
    SCROLL REVEAL
=========================================*/

const reveal=document.querySelectorAll(

".about-container,.skill-card,.timeline-item,.project-card,.certificate-card,form"

);

function revealSection(){

    const trigger=window.innerHeight*0.85;

    reveal.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<trigger){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

reveal.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition=".8s";

});

window.addEventListener("scroll",revealSection);

revealSection();


/*=========================================
    SKILL CARD EFFECT
=========================================*/

const cards=document.querySelectorAll(".skill-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        card.style.transform="rotateY(8deg) rotateX(8deg)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="rotateY(0) rotateX(0)";

    });

});


/*=========================================
    BACK TO TOP BUTTON
=========================================*/

const topBtn=document.createElement("div");

topBtn.className="top-btn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.classList.add("active");

    }

    else{

        topBtn.classList.remove("active");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
    CONTACT FORM
=========================================*/

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const inputs=form.querySelectorAll("input,textarea");

    let valid=true;

    inputs.forEach(input=>{

        if(input.value.trim()===""){

            input.style.border="2px solid red";

            valid=false;

        }

        else{

            input.style.border="1px solid #00d9ff";

        }

    });

    if(valid){

        alert("Thank you! Your message has been submitted.");

        form.reset();

    }

});


/*=========================================
    HERO IMAGE PARALLAX
=========================================*/

const image=document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.pageX)/60;

    const y=(window.innerHeight/2-e.pageY)/60;

    image.style.transform=`translate(${x}px,${y}px)`;

});


/*=========================================
    CONSOLE MESSAGE
=========================================*/

console.log(

"%cWelcome to Arunkumar's Portfolio",

"color:#00d9ff;font-size:20px;font-weight:bold;"

);