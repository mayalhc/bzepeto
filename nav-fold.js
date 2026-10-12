// Fold the side menu into its products (BZepeto, MZepeto): click a heading to open or close it.
// The product holding the page you are on starts open; the others start closed.
document.addEventListener("DOMContentLoaded", function () {
  var captions = document.querySelectorAll(".wy-menu-vertical p.caption");
  captions.forEach(function (caption) {
    var list = caption.nextElementSibling;
    if (!list || list.tagName !== "UL") {
      return;
    }
    var open = !!list.querySelector("li.current");
    function show() {
      list.style.display = open ? "" : "none";
      caption.classList.toggle("nav-open", open);
      caption.setAttribute("aria-expanded", open ? "true" : "false");
    }
    caption.setAttribute("role", "button");
    caption.setAttribute("tabindex", "0");
    caption.addEventListener("click", function () {
      open = !open;
      show();
    });
    caption.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open = !open;
        show();
      }
    });
    show();
  });
});
