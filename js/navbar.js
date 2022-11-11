const primaryNav = document.querySelector('.menu-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => { // We listen if there is a click on the button.
    const visibility = primaryNav.getAttribute('data-visible'); // We listen the attribute of the menu-navigation.

    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }   
    else{
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
}); 