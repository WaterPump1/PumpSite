(function () {
  var nav = document.querySelector(".site-nav");
  if (!nav) return;

  var links = nav.querySelectorAll(".site-nav-link");
  var isGalleryPage = window.location.pathname.indexOf("gallery") !== -1;
  var isIndexPage = !isGalleryPage && !window.location.pathname.includes("contact");

  function clearActive() {
    links.forEach(function (link) {
      link.classList.remove("is-active");
    });
  }

  function setActive(section) {
    clearActive();
    links.forEach(function (link) {
      var href = link.getAttribute("href") || "";
      if (section === "socials" && href.indexOf("#socials") !== -1) {
        link.classList.add("is-active");
      }
      if (section === "gallery" && href.indexOf("gallery") !== -1) {
        link.classList.add("is-active");
      }
      if (section === "contact" && href.indexOf("#contact") !== -1) {
        link.classList.add("is-active");
      }
    });
  }

  if (isGalleryPage) {
    setActive("gallery");
    return;
  }

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (href && href.charAt(0) === "#") {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          history.pushState(null, "", href);
        }
      }
    });
  });

  if (!isIndexPage) return;

  function onScroll() {
    var scrollY = window.scrollY + nav.offsetHeight + 100;
    var current = "socials";
    var sections = ["socials", "contact"];

    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    });

    setActive(current);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
