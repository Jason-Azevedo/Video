let prevX = 0;
let prevY = 0;

function scrollEvent() {
  window.scrollTo(prevX, prevY);
}

export function enable() {
  window.removeEventListener("scroll", scrollEvent);
}

export function disable() {
  prevX = window.scrollX;
  prevY = window.scrollY;

  window.addEventListener("scroll", scrollEvent);
}

export function resetPos() {
  window.scrollTo(0, 0);
}

export default { resetPos, enable, disable };
