// toggle class active

const navbarLink = document.querySelector('.navbar-link');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarLink.classList.toggle('active');
};