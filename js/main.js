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

// top scroll button
const showOnPx = 300;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};
const goToTop = () => {
    document.body.scrollIntoView(); document.body.scrollIntoView({
        behavior: "smooth",
      });
  };

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
});
backToTopButton.addEventListener("click", goToTop);
