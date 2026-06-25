(function () {
  if (document.querySelector(".backdrop-doodles")) return;

  var frame = document.querySelector(".page-frame");
  var wrap = document.createElement("div");
  wrap.className = "backdrop-doodles";
  wrap.setAttribute("aria-hidden", "true");
  wrap.innerHTML =
    '<div class="doodle doodle-tire doodle-1 doodle-drift-a" style="--size: 72px; top: 8%; left: 6%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tire"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-nut doodle-2 doodle-drift-b" style="--size: 48px; top: 14%; right: 10%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-nut"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-3 doodle-drift-c" style="--size: 84px; top: 38%; left: 4%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-4 doodle-drift-d" style="--size: 56px; top: 52%; right: 6%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-bolt"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-nut doodle-5 doodle-drift-e" style="--size: 64px; bottom: 18%; left: 12%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-nut"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-tire doodle-6 doodle-drift-f" style="--size: 76px; bottom: 10%; right: 14%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tire"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-7 doodle-drift-b" style="--size: 92px; top: 22%; left: 38%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-8 doodle-drift-a" style="--size: 44px; top: 62%; left: 28%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-bolt"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-tire doodle-9 doodle-drift-c" style="--size: 58px; top: 72%; right: 32%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tire"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-10 doodle-drift-d" style="--size: 68px; top: 6%; right: 34%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-nut doodle-11 doodle-drift-f" style="--size: 40px; bottom: 32%; left: 72%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-nut"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-12 doodle-drift-e" style="--size: 52px; top: 44%; right: 22%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-bolt"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-13 doodle-drift-a" style="--size: 80px; bottom: 4%; left: 42%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-nut doodle-14 doodle-drift-c" style="--size: 46px; top: 84%; left: 8%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-nut"/></svg>' +
    "</div>" +
    '<svg class="doodle-sprite" xmlns="http://www.w3.org/2000/svg">' +
      "<defs>" +
        '<filter id="sketch-wobble" x="-8%" y="-8%" width="116%" height="116%">' +
          '<feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="3" result="noise"/>' +
          '<feDisplacementMap in="SourceGraphic" in2="noise" scale="1.4" xChannelSelector="R" yChannelSelector="G"/>' +
        "</filter>" +
        '<g id="sketch-tire" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">' +
          '<circle cx="32" cy="32" r="21"/>' +
          '<circle cx="32" cy="32" r="14"/>' +
          '<circle cx="32" cy="32" r="5" opacity=".55"/>' +
          '<path d="M32 11 L32 18 M32 46 L32 53 M11 32 L18 32 M46 32 L53 32"/>' +
          '<path d="M17 17 L22 22 M43 43 L48 48 M43 17 L48 22 M17 43 L22 48"/>' +
          '<path d="M20 44 C24 48 28 50 32 50 C36 50 40 48 44 44" opacity=".45"/>' +
          '<path d="M24 12 L28 14 M36 14 L40 12" opacity=".4"/>' +
        "</g>" +
        '<g id="sketch-nut" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M32 10l14 8v16l-14 8-14-8V18z"/>' +
          '<path d="M32 10l-2 1 2 2 2-2z" opacity=".45"/>' +
          '<circle cx="32" cy="32" r="7"/>' +
          '<path d="M28 32h8" opacity=".55"/>' +
          '<path d="M32 28v8" opacity=".35"/>' +
        "</g>" +
        '<g id="sketch-bolt" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M24 14h16l-2 8H26z"/>' +
          '<path d="M26 22h12"/>' +
          '<path d="M28 22v28"/>' +
          '<path d="M36 22v28"/>' +
          '<path d="M29 28h6M29 34h6M29 40h6M29 46h6"/>' +
          '<path d="M25 16l2 1" opacity=".5"/>' +
        "</g>" +
        '<g id="sketch-tree" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M32 56V42"/>' +
          '<path d="M29 56h6"/>' +
          '<path d="M13 42 L32 26 L51 42"/>' +
          '<path d="M17 34 L32 20 L47 34"/>' +
          '<path d="M21 26 L32 14 L43 26"/>' +
          '<path d="M26 18 L32 10 L38 18"/>' +
        "</g>" +
      "</defs>" +
    "</svg>";

  if (frame && frame.parentNode) {
    frame.parentNode.insertBefore(wrap, frame.nextSibling);
  } else {
    document.body.insertBefore(wrap, document.body.firstChild);
  }
})();
