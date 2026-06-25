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
    '<div class="doodle doodle-3 doodle-tree doodle-drift-c" style="--size: 84px; top: 38%; left: 4%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-4 doodle-bolt doodle-drift-d" style="--size: 56px; top: 52%; right: 6%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-bolt"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-nut doodle-5 doodle-drift-e" style="--size: 64px; bottom: 18%; left: 12%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-nut"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-tire doodle-6 doodle-drift-f" style="--size: 76px; bottom: 10%; right: 14%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tire"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-7 doodle-tree doodle-drift-b" style="--size: 92px; top: 22%; left: 38%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-8 doodle-bolt doodle-drift-a" style="--size: 44px; top: 62%; left: 28%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-bolt"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-tire doodle-9 doodle-drift-c" style="--size: 58px; top: 72%; right: 32%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tire"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-10 doodle-tree doodle-drift-d" style="--size: 68px; top: 6%; right: 34%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-nut doodle-11 doodle-drift-f" style="--size: 40px; bottom: 32%; left: 72%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-nut"/></svg>' +
    "</div>" +
    '<div class="doodle doodle-12 doodle-bolt doodle-drift-e" style="--size: 52px; top: 44%; right: 22%;">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-bolt"/></svg>' +
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
        '<g id="sketch-tire" stroke-linecap="round" stroke-linejoin="round">' +
          '<circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" stroke-width="2.2"/>' +
          '<circle cx="32" cy="32" r="15.8" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".5"/>' +
          '<g fill="currentColor" fill-opacity=".2" stroke="currentColor" stroke-width="1.4">' +
            '<path d="M28 10.5h8l1.2 7.2H26.8Z"/>' +
            '<path d="M28 10.5h8l1.2 7.2H26.8Z" transform="rotate(30 32 32)"/>' +
            '<path d="M28 10.5h8l1.2 7.2H26.8Z" transform="rotate(60 32 32)"/>' +
            '<path d="M28 10.5h8l1.2 7.2H26.8Z" transform="rotate(90 32 32)"/>' +
            '<path d="M28 10.5h8l1.2 7.2H26.8Z" transform="rotate(120 32 32)"/>' +
            '<path d="M28 10.5h8l1.2 7.2H26.8Z" transform="rotate(150 32 32)"/>' +
            '<path d="M28 10.5h8l1.2 7.2H26.8Z" transform="rotate(180 32 32)"/>' +
            '<path d="M28 10.5h8l1.2 7.2H26.8Z" transform="rotate(210 32 32)"/>' +
            '<path d="M28 10.5h8l1.2 7.2H26.8Z" transform="rotate(240 32 32)"/>' +
            '<path d="M28 10.5h8l1.2 7.2H26.8Z" transform="rotate(270 32 32)"/>' +
            '<path d="M28 10.5h8l1.2 7.2H26.8Z" transform="rotate(300 32 32)"/>' +
            '<path d="M28 10.5h8l1.2 7.2H26.8Z" transform="rotate(330 32 32)"/>' +
          "</g>" +
          '<g fill="none" stroke="currentColor" stroke-width="1.6" opacity=".7">' +
            '<path d="M29.5 12.5h5l.6 3.8h-6.2Z"/>' +
            '<path d="M29.5 12.5h5l.6 3.8h-6.2Z" transform="rotate(60 32 32)"/>' +
            '<path d="M29.5 12.5h5l.6 3.8h-6.2Z" transform="rotate(120 32 32)"/>' +
            '<path d="M29.5 12.5h5l.6 3.8h-6.2Z" transform="rotate(180 32 32)"/>' +
            '<path d="M29.5 12.5h5l.6 3.8h-6.2Z" transform="rotate(240 32 32)"/>' +
            '<path d="M29.5 12.5h5l.6 3.8h-6.2Z" transform="rotate(300 32 32)"/>' +
          "</g>" +
          '<circle cx="32" cy="32" r="12.2" fill="none" stroke="currentColor" stroke-width="2"/>' +
          '<circle cx="32" cy="32" r="9.2" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".45"/>' +
          '<g fill="currentColor" stroke="none">' +
            '<circle cx="32" cy="25" r="2"/>' +
            '<circle cx="38.66" cy="29.84" r="2"/>' +
            '<circle cx="36.13" cy="37.67" r="2"/>' +
            '<circle cx="27.87" cy="37.67" r="2"/>' +
            '<circle cx="25.34" cy="34.16" r="2"/>' +
          "</g>" +
          '<circle cx="32" cy="32" r="3.6" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
          '<circle cx="32" cy="32" r="1.4" fill="currentColor" stroke="none" opacity=".35"/>' +
        "</g>" +
        '<g id="sketch-nut" stroke-linecap="round" stroke-linejoin="round">' +
          '<path fill="#b8bdc4" stroke="#6f757d" stroke-width="2" d="M32 9 L48.5 18.5 V35.5 L32 45 L15.5 35.5 V18.5 Z"/>' +
          '<path fill="none" stroke="#8f959d" stroke-width="1.4" d="M32 9 L32 17 M48.5 18.5 L41 22.5 M48.5 35.5 L41 31.5 M32 45 L32 37 M15.5 35.5 L23 31.5 M15.5 18.5 L23 22.5" opacity=".55"/>' +
          '<circle cx="32" cy="27" r="9" fill="none" stroke="#6f757d" stroke-width="2.2"/>' +
          '<circle cx="32" cy="27" r="5.5" fill="none" stroke="#9aa0a8" stroke-width="1.1" opacity=".45"/>' +
          '<path fill="none" stroke="#dfe2e6" stroke-width="1.2" d="M24 15 L28 17" opacity=".7"/>' +
        "</g>" +
        '<g id="sketch-bolt" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M24 14h16l-2 8H26z"/>' +
          '<path d="M26 22h12"/>' +
          '<path d="M28 22v28"/>' +
          '<path d="M36 22v28"/>' +
          '<path d="M29 28h6M29 34h6M29 40h6M29 46h6"/>' +
          '<path d="M25 16l2 1" opacity=".5"/>' +
        "</g>" +
        '<g id="sketch-tree" stroke-linecap="round" stroke-linejoin="round">' +
          '<g fill="none" stroke="#8b5e3c" stroke-width="2.1">' +
            '<path d="M32 56V42"/>' +
            '<path d="M29 56h6"/>' +
          "</g>" +
          '<g fill="none" stroke="#5a8f6e" stroke-width="2.1">' +
            '<path d="M13 42 L32 26 L51 42"/>' +
            '<path d="M17 34 L32 20 L47 34"/>' +
            '<path d="M21 26 L32 14 L43 26"/>' +
            '<path d="M26 18 L32 10 L38 18"/>' +
          "</g>" +
        "</g>" +
      "</defs>" +
    "</svg>";

  if (frame && frame.parentNode) {
    frame.parentNode.insertBefore(wrap, frame.nextSibling);
  } else {
    document.body.insertBefore(wrap, document.body.firstChild);
  }

  var mountain = document.querySelector(".mountain-scape");
  if (mountain) {
    var trees = document.createElement("div");
    trees.className = "mountain-trees";
    trees.setAttribute("aria-hidden", "true");
    trees.innerHTML =
      '<div class="mountain-tree" style="--size: 52px; left: 7%; bottom: 6%; --rot: -4deg;">' +
        '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
      "</div>" +
      '<div class="mountain-tree" style="--size: 68px; left: 16%; bottom: 14%; --rot: 3deg;">' +
        '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
      "</div>" +
      '<div class="mountain-tree" style="--size: 84px; left: 26%; bottom: 4%; --rot: -6deg;">' +
        '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
      "</div>" +
      '<div class="mountain-tree" style="--size: 56px; left: 36%; bottom: 11%; --rot: 5deg;">' +
        '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
      "</div>" +
      '<div class="mountain-tree" style="--size: 92px; left: 47%; bottom: 5%; --rot: -2deg;">' +
        '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
      "</div>" +
      '<div class="mountain-tree" style="--size: 64px; left: 58%; bottom: 13%; --rot: 7deg;">' +
        '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
      "</div>" +
      '<div class="mountain-tree" style="--size: 44px; left: 67%; bottom: 7%; --rot: -5deg;">' +
        '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
      "</div>" +
      '<div class="mountain-tree" style="--size: 80px; left: 76%; bottom: 10%; --rot: 2deg;">' +
        '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
      "</div>" +
      '<div class="mountain-tree" style="--size: 72px; left: 86%; bottom: 3%; --rot: -3deg;">' +
        '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
      "</div>" +
      '<div class="mountain-tree" style="--size: 48px; left: 94%; bottom: 12%; --rot: 6deg;">' +
        '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#sketch-tree"/></svg>' +
      "</div>";
    mountain.appendChild(trees);
  }
})();
