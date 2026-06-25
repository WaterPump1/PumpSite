(function () {
// GALLERY_PHOTOS_START
var GALLERY_PHOTOS_EMBEDDED = [
  {
    "url": "images/gallery/70028244843__AD8BD5C1-57B9-4D0F-976F-ED7B63A2BF79.fullsizerender.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/dsc00032.JPG",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/DSC00212.JPG",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/DSC00381.JPG",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_0310.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_0424.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_0469.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_0522.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_0782.JPG",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_0783.JPG",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_0786.JPG",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_1160.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_1193.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_1204.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_1231.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_1554.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_1566.JPG",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_2198.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_2201.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_3603.JPEG",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_6636.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_6641.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_7628.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_7918.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_8903.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_9200.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_9216.PNG",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_9499.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_9527.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/IMG_9660.jpg",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/jepppp.JPG",
    "caption": "Gallery"
  },
  {
    "url": "images/gallery/photo for print V.2.PNG",
    "caption": "Gallery"
  }
];
// GALLERY_PHOTOS_END

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

  function shufflePhotos(photos) {
    var shuffled = photos.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    return shuffled;
  }

  function normalizePhotos(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.photos)) return data.photos;
    return [];
  }

  function renderAllGalleries(photos) {
    var randomized = shufflePhotos(photos);
    var countEl = document.getElementById("gallery-count");

    if (countEl) {
      countEl.textContent = randomized.length + " photos";
    }

    document.querySelectorAll("[data-gallery]").forEach(function (container) {
      var limit = container.getAttribute("data-limit");
      var slice = limit ? randomized.slice(0, parseInt(limit, 10)) : randomized;
      var mode = container.getAttribute("data-gallery-mode") || "grid";

      if (mode === "carousel") {
        renderCarousel(container, slice);
      } else {
        renderGallery(container, slice);
      }
    });
  }

  function getGalleryPhotos() {
    var fromWindow = normalizePhotos(window.GALLERY_PHOTOS);
    var fromEmbedded = normalizePhotos(
      typeof GALLERY_PHOTOS_EMBEDDED !== "undefined" ? GALLERY_PHOTOS_EMBEDDED : []
    );

    if (fromEmbedded.length >= fromWindow.length) return fromEmbedded;
    return fromWindow;
  }

  function loadGalleries() {
    var photos = getGalleryPhotos();

    if (photos.length) {
      renderAllGalleries(photos);
      return;
    }

    if (location.protocol === "file:") {
      document.querySelectorAll("[data-gallery]").forEach(function (container) {
        container.innerHTML =
          '<p class="gallery-empty">No photos listed. Add images to <code>images/gallery/</code> and run <code>npm run build:gallery</code>.</p>';
      });
      return;
    }

    fetch("data/gallery.json")
      .then(function (res) {
        if (!res.ok) throw new Error("Gallery manifest not found");
        return res.json();
      })
      .then(function (data) {
        var fetched = normalizePhotos(data);
        var best = fetched.length > photos.length ? fetched : photos;
        if (best.length) {
          renderAllGalleries(best);
        } else {
          throw new Error("No photos");
        }
      })
      .catch(function () {
        document.querySelectorAll("[data-gallery]").forEach(function (container) {
          container.innerHTML =
            '<p class="gallery-empty">Could not load gallery. Run <code>npm run build:gallery</code> after adding photos.</p>';
        });
      });
  }

  bindLightbox();
  loadGalleries();
})();
