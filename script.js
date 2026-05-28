document.addEventListener('DOMContentLoaded', function () {

    var navbar  = document.getElementById('navbar');
    var backTop = document.getElementById('backTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
            backTop.classList.add('show');
        } else {
            navbar.classList.remove('scrolled');
            backTop.classList.remove('show');
        }
    });

    backTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    var hamburger = document.getElementById('hamburger');
    var navLinks  = document.getElementById('navLinks');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
        // Prevent body scroll when menu is open
        document.body.style.overflow =
            navLinks.classList.contains('open') ? 'hidden' : '';
    });

    var allLinks = navLinks.querySelectorAll('.nav-link');
    allLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

});