(function () {
  var nav = document.querySelector(".site-nav");
  if (!nav) return;

  var links = nav.querySelectorAll(".site-nav-link");
  var scrollRoot = document.getElementById("page-scroll");
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
      if (section === "main" && (href.indexOf("#top") !== -1 || href === "index.html")) {
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

  function scrollWithinRoot(target) {
    if (!scrollRoot || !target) return;

    var rootRect = scrollRoot.getBoundingClientRect();
    var targetRect = target.getBoundingClientRect();
    var top = scrollRoot.scrollTop + (targetRect.top - rootRect.top);

    scrollRoot.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth"
    });
  }

  if (isGalleryPage) {
    setActive("gallery");
    return;
  }

  if (window.location.pathname.includes("contact")) {
    setActive("contact");
    return;
  }

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (!href || href.charAt(0) !== "#") return;

      e.preventDefault();

      if (href === "#top") {
        if (scrollRoot) {
          scrollRoot.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        history.pushState(null, "", href);
        return;
      }

      var target = document.querySelector(href);
      if (href === "#contact") {
        var linksPanel = document.querySelector(".links-panel");
        if (linksPanel) target = linksPanel;
      }

      if (target) {
        scrollWithinRoot(target);
        history.pushState(null, "", href);
      }
    });
  });

  if (!isIndexPage || !scrollRoot) return;

  function onScroll() {
    var linksPanel = document.querySelector(".links-panel");
    if (!linksPanel) {
      setActive("main");
      return;
    }

    var rootRect = scrollRoot.getBoundingClientRect();
    var panelRect = linksPanel.getBoundingClientRect();
    var visibleTop = Math.max(panelRect.top, rootRect.top);
    var visibleBottom = Math.min(panelRect.bottom, rootRect.bottom);
    var visibleHeight = Math.max(0, visibleBottom - visibleTop);
    var visibleRatio = visibleHeight / rootRect.height;

    setActive(visibleRatio >= 0.5 ? "contact" : "main");
  }

  scrollRoot.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (location.hash) {
    var hashTarget = document.querySelector(location.hash);
    if (location.hash === "#contact") {
      var linksPanel = document.querySelector(".links-panel");
      if (linksPanel) hashTarget = linksPanel;
    }
    if (hashTarget) {
      requestAnimationFrame(function () {
        scrollWithinRoot(hashTarget);
        onScroll();
      });
    }
  }
})();
