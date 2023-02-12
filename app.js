const revealEl = document.getElementsByClassName("reveal");
const animateEl = document.getElementsByClassName("block-revealer__element");

const animate = (elem) => {
  elem.classList.add("animate", "visible");
};
const listener = (event) => {
  switch (event.type) {
    case "animationstart":
      break;
    case "animationend":
      "block-expand" === event.animationName
        ? (event.target.classList.remove("animate"),
          event.target.classList.add("switch"),
          (event.target.previousElementSibling.style.opacity = 1))
        : "block-collapse" === event.animationName &&
          event.target.classList.remove("visible", "switch");
  }
};

for (revealEl, animateEl, i = 0; i < animateEl.length; i++) {
  animateEl[i].style.backgroundColor = "#000";
  animateEl[i].addEventListener("animationstart", listener, !1);
  animateEl[i].addEventListener("animationend", listener, !1);
  setTimeout(animate, 250, revealEl[0]);
  setTimeout(animate, 900, animateEl[0]);
  setTimeout(animate, 1600, animateEl[1]);
}
