/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


    /*==================== sticky navbar ====================*/
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .skill-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['an Engineering Student', 'a Programmer', 'a Web Develeoper', 'a Photo Editor'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});




/********* read more  ************/
const parentContainer =  document.querySelector('.skill-container');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less" : "Read More";

});

const parentContainer2 =  document.querySelector('.skillc2');

parentContainer2.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less" : "Read More";

});