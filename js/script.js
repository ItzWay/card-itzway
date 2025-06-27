var cursor = document.querySelector('.blob');

document.addEventListener('mousemove', function(e) {
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener('touchmove', function(e) {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    cursor.style.transform = `translate3d(calc(${touch.clientX}px - 50%), calc(${touch.clientY}px - 50%), 0)`;
  }
});

window.addEventListener('mouseout', function() {
  const centerX = window.innerWidth / 2;
  const bottomY = window.innerHeight / 2;
  cursor.style.transform = `translate3d(calc(${centerX}px - 50%), calc(${bottomY}px - 50%), 0)`;
});

const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");
const addFriendBtn = document.getElementById("addFriendBtn");
const friendBtn = document.getElementById("friendBtn");

addFriendBtn.addEventListener("click", function () {
  // Simulate "add friend" action
  addFriendBtn.style.display = "none";
  friendBtn.style.display = "inline-flex"; // or "block" if needed
});

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
  card.classList.add("is-active") :
  card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});
