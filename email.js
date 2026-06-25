(function () {
  var EMAIL = "Kelownaphotograph@gmail.com";
  var SUBJECT = "Website message";

  function gmailComposeUrl() {
    return (
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      encodeURIComponent(EMAIL) +
      "&su=" +
      encodeURIComponent(SUBJECT)
    );
  }

  document.querySelectorAll("[data-email-compose]").forEach(function (el) {
    el.setAttribute("href", gmailComposeUrl());
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  document.querySelectorAll("[data-email-copy]").forEach(function (btn) {
    var meta = btn.querySelector("[data-email-meta]");
    var defaultText = meta ? meta.getAttribute("data-default") || meta.textContent : EMAIL;

    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(EMAIL).then(function () {
        if (!meta) return;
        meta.textContent = "Copied!";
        setTimeout(function () {
          meta.textContent = defaultText;
        }, 1800);
      }).catch(function () {});
    });
  });
})();
