/* SKILLS */
const scroller = document.getElementById("scroller");

// if reduced motion hasn't be opted in for, add animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scroller.setAttribute("data-animated", "true");

  // clone all '.scroller_inner' content
  const scrollerInner = scroller.querySelector(".scroller__inner");
  const originalContent = scrollerInner.innerHTML;

  // append the cloned content back
  scrollerInner.innerHTML += originalContent;

  // add aria-hidden to each original item
  const originalItems = scrollerInner.children;
  for (let i = 0; i < originalItems.length; i++) {
    originalItems[i].setAttribute("aria-hidden", "true");
  }
}