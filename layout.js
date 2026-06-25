(function () {
  var root = document.documentElement;

  function syncViewport() {
    var height = window.visualViewport
      ? window.visualViewport.height
      : window.innerHeight;
    root.style.setProperty("--app-height", height + "px");
  }

  syncViewport();
  window.addEventListener("resize", syncViewport, { passive: true });
  window.addEventListener("orientationchange", syncViewport, { passive: true });

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", syncViewport, { passive: true });
  }
})();
