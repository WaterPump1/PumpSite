(function () {
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxCaption = document.getElementById("lightbox-caption");
  var lightboxClose = document.getElementById("lightbox-close");

  function bindLightbox() {
    document.querySelectorAll(".gallery-item:not(.gallery-item--bound)").forEach(function (item) {
      item.classList.add("gallery-item--bound");
      var img = item.querySelector("img");
      if (!img) return;

      img.addEventListener("error", function () {
        item.classList.add("gallery-item--empty");
      });

      item.addEventListener("click", function () {
        if (item.classList.contains("gallery-item--empty")) return;
        if (!lightbox || !lightboxImg) return;

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        if (lightboxCaption) {
          lightboxCaption.textContent = item.getAttribute("data-caption") || img.alt;
        }

        lightbox.hidden = false;
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      });
    });
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox && !lightbox.hidden) {
      closeLightbox();
    }
  });

  function renderGallery(container, photos) {
    container.innerHTML = "";

    if (!photos.length) {
      container.innerHTML = '<p class="gallery-empty">No photos yet. Add images to <code>images/gallery/</code> and list them in <code>data/gallery.json</code>.</p>';
      return;
    }

    photos.forEach(function (photo) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gallery-item";
      btn.setAttribute("data-caption", photo.caption || "Photo");

      var img = document.createElement("img");
      img.src = photo.url;
      img.alt = photo.caption || "Gallery photo";
      img.loading = "lazy";

      btn.appendChild(img);
      container.appendChild(btn);
    });

    bindLightbox();
  }

  function loadGalleries() {
    fetch("data/gallery.json")
      .then(function (res) {
        if (!res.ok) throw new Error("Gallery manifest not found");
        return res.json();
      })
      .then(function (data) {
        var photos = Array.isArray(data) ? data : data.photos || [];

        document.querySelectorAll("[data-gallery]").forEach(function (container) {
          var limit = container.getAttribute("data-limit");
          var slice = limit ? photos.slice(0, parseInt(limit, 10)) : photos;
          renderGallery(container, slice);
        });
      })
      .catch(function () {
        document.querySelectorAll("[data-gallery]").forEach(function (container) {
          container.innerHTML =
            '<p class="gallery-empty">Could not load gallery. Use a local server and add photos in <code>data/gallery.json</code>.</p>';
        });
      });
  }

  bindLightbox();
  loadGalleries();
})();
