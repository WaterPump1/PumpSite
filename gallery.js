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
      container.innerHTML =
        '<p class="gallery-empty">No photos yet. Add images to <code>images/gallery/</code> and list them in <code>gallery-data.js</code>.</p>';
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

  function renderCarousel(container, photos) {
    container.innerHTML = "";

    if (!photos.length) {
      container.innerHTML =
        '<p class="gallery-empty">No photos yet. Add images to <code>images/gallery/</code> and list them in <code>gallery-data.js</code>.</p>';
      return;
    }

    var current = 0;

    var viewport = document.createElement("div");
    viewport.className = "carousel-viewport";

    var track = document.createElement("ul");
    track.className = "carousel-track";
    track.setAttribute("role", "list");

    photos.forEach(function (photo, index) {
      var slide = document.createElement("li");
      slide.className = "carousel-slide";
      slide.setAttribute("role", "listitem");
      slide.setAttribute("aria-hidden", index === 0 ? "false" : "true");

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gallery-item carousel-slide-btn";
      btn.setAttribute("data-caption", photo.caption || "Photo");

      var img = document.createElement("img");
      img.src = photo.url;
      img.alt = photo.caption || "Gallery photo";
      img.loading = index === 0 ? "eager" : "lazy";
      img.draggable = false;

      btn.appendChild(img);
      slide.appendChild(btn);
      track.appendChild(slide);
    });

    viewport.appendChild(track);

    var prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = "carousel-btn carousel-btn--prev";
    prevBtn.setAttribute("aria-label", "Previous photo");
    prevBtn.innerHTML = "&#8249;";

    var nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "carousel-btn carousel-btn--next";
    nextBtn.setAttribute("aria-label", "Next photo");
    nextBtn.innerHTML = "&#8250;";

    var controls = document.createElement("div");
    controls.className = "carousel-controls";

    var counter = document.createElement("span");
    counter.className = "carousel-counter";
    counter.setAttribute("aria-live", "polite");

    controls.appendChild(prevBtn);
    controls.appendChild(counter);
    controls.appendChild(nextBtn);

    var dots = document.createElement("div");
    dots.className = "carousel-dots";
    dots.setAttribute("role", "tablist");
    dots.setAttribute("aria-label", "Choose photo");

    var dotButtons = photos.map(function (photo, index) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", "Photo " + (index + 1));
      dot.setAttribute("aria-selected", index === 0 ? "true" : "false");
      dots.appendChild(dot);
      return dot;
    });

    var caption = document.createElement("p");
    caption.className = "carousel-caption";

    container.appendChild(viewport);
    container.appendChild(controls);
    container.appendChild(dots);
    container.appendChild(caption);

    function updateCarousel() {
      track.style.transform = "translateX(-" + current * 100 + "%)";

      track.querySelectorAll(".carousel-slide").forEach(function (slide, index) {
        slide.setAttribute("aria-hidden", index === current ? "false" : "true");
      });

      counter.textContent = current + 1 + " / " + photos.length;
      caption.textContent = photos[current].caption || "";

      dotButtons.forEach(function (dot, index) {
        dot.classList.toggle("is-active", index === current);
        dot.setAttribute("aria-selected", index === current ? "true" : "false");
      });

      prevBtn.disabled = photos.length <= 1;
      nextBtn.disabled = photos.length <= 1;
    }

    function goTo(index) {
      if (!photos.length) return;
      current = (index + photos.length) % photos.length;
      updateCarousel();
    }

    prevBtn.addEventListener("click", function () {
      goTo(current - 1);
    });

    nextBtn.addEventListener("click", function () {
      goTo(current + 1);
    });

    dotButtons.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        goTo(index);
      });
    });

    container.addEventListener("keydown", function (e) {
      if (lightbox && !lightbox.hidden) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(current - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(current + 1);
      }
    });

    var touchStartX = 0;
    var touchDeltaX = 0;

    viewport.addEventListener(
      "touchstart",
      function (e) {
        if (e.touches.length !== 1) return;
        touchStartX = e.touches[0].clientX;
        touchDeltaX = 0;
      },
      { passive: true }
    );

    viewport.addEventListener(
      "touchmove",
      function (e) {
        if (e.touches.length !== 1) return;
        touchDeltaX = e.touches[0].clientX - touchStartX;
      },
      { passive: true }
    );

    viewport.addEventListener("touchend", function () {
      if (Math.abs(touchDeltaX) < 48) return;
      if (touchDeltaX < 0) goTo(current + 1);
      else goTo(current - 1);
    });

    container.tabIndex = 0;
    updateCarousel();
    bindLightbox();
  }

  function normalizePhotos(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.photos)) return data.photos;
    return [];
  }

  function renderAllGalleries(photos) {
    document.querySelectorAll("[data-gallery]").forEach(function (container) {
      var limit = container.getAttribute("data-limit");
      var slice = limit ? photos.slice(0, parseInt(limit, 10)) : photos;
      var mode = container.getAttribute("data-gallery-mode") || "grid";

      if (mode === "carousel") {
        renderCarousel(container, slice);
      } else {
        renderGallery(container, slice);
      }
    });
  }

  function loadGalleries() {
    var photos = normalizePhotos(window.GALLERY_PHOTOS);

    if (photos.length) {
      renderAllGalleries(photos);
      return;
    }

    if (location.protocol === "file:") {
      document.querySelectorAll("[data-gallery]").forEach(function (container) {
        container.innerHTML =
          '<p class="gallery-empty">No photos listed. Add images to <code>images/gallery/</code> and list them in <code>gallery-data.js</code>.</p>';
      });
      return;
    }

    fetch("data/gallery.json")
      .then(function (res) {
        if (!res.ok) throw new Error("Gallery manifest not found");
        return res.json();
      })
      .then(function (data) {
        renderAllGalleries(normalizePhotos(data));
      })
      .catch(function () {
        document.querySelectorAll("[data-gallery]").forEach(function (container) {
          container.innerHTML =
            '<p class="gallery-empty">Could not load gallery. Add photos in <code>gallery-data.js</code> or <code>data/gallery.json</code>.</p>';
        });
      });
  }

  bindLightbox();
  loadGalleries();
})();
