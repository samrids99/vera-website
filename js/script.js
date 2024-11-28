// replace text in header

const checkReplace = document.querySelector('.replace-me');

if(checkReplace) {
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animated fadeIn',
        speed: 2000,
        separator: ',',
        loopCount: 'infinite',
        autoRun: true
    });
}

function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-sticky');
        }
    })
}

document.addEventListener('DOMContentLoaded', userScroll);