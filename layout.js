(function () {
  var root = document.documentElement;
  var resizeTimer;

  function syncViewport() {
    root.style.setProperty("--app-height", window.innerHeight + "px");
  }

  syncViewport();

  window.addEventListener("orientationchange", function () {
    setTimeout(syncViewport, 150);
  });

  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(syncViewport, 200);
  });
})();
