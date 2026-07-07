const toggle =
document.querySelector('.menu-toggle');

const menu =
document.querySelector('.mobile-menu');

toggle.addEventListener('click', () => {

    toggle.classList.toggle('active');

    menu.classList.toggle('active');

});

/* CLOSE MENU ON LINK CLICK */

document.querySelectorAll(
'.mobile-menu a'
).forEach(link => {

    link.addEventListener('click', () => {

        toggle.classList.remove('active');

        menu.classList.remove('active');

    });

});



/* INITIAL CHECK */

revealSections();


window.addEventListener("scroll", () => {

    const header =
    document.querySelector("header");

    if(window.scrollY > 50){

        header.classList.add(
        "show-header"
        );

    }else{

        header.classList.remove(
        "show-header"
        );

    }

});
