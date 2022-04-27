// NavBar On Scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > 120) {
        document.getElementById('navbar').classList.add('sticky');
        document.getElementById('logo').src = "images/logo3.png";
    } else {
        document.getElementById('navbar').classList.remove('sticky');
        document.getElementById('logo').src = "images/logo.png";
    }
});

$('.single-item').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
});