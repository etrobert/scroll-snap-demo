const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById('leftButton')
const scroller = document.getElementById("scroller");
const sectionWidth = document.querySelector("section").clientWidth;

console.log(sectionWidth);

const scroll = (offset) => () =>
  scroller.scrollBy({ left: offset, behavior: "smooth" });

rightButton.onclick = scroll(sectionWidth);
leftButton.onclick = scroll(-sectionWidth)
