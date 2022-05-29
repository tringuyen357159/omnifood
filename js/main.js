const btnMobile = document.querySelector(".btn-mobile");
const headerNavMobile = document.querySelector(".header-nav-mobile");
const headerNavMobileIcon = document.querySelector(".header-nav-mobile__icon");

btnMobile.addEventListener("click", function () {
  headerNavMobile.style.transform = "translateX(0)";
});

headerNavMobileIcon.addEventListener("click", function () {
  headerNavMobile.style.transform = "translateX(-100%)";
});

headerNavMobile.addEventListener("click", function () {
  headerNavMobile.style.transform = "translateX(-100%)";
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".hero");
const obs = new IntersectionObserver(
  function (entries) {
    console.log("entries", entries);
    const ent = entries[0];
    console.log("ent", ent);

    if (ent.isIntersecting === false) {
      document.querySelector(".header").classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.querySelector(".header").classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px"
  }
);
console.log("obs", obs);
obs.observe(sectionHeroEl);

console.log("obs.observe(sectionHeroEl)", obs.observe(sectionHeroEl));
