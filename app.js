// === 1. THEME TOGGLE ===
const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("lightmode");
  toggleBtn.textContent = body.classList.contains("lightmode")
    ? "Dark Mode"
    : "Light Mode";
});

// === 2. TYPEWRITER EFFECT ===
const titles = [
  "Future Web Developer",
  "Cybersecurity Enthusiast",
  "Creative Coder",
];
let typeIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typewriterEl = document.getElementById("typewriter");

function type() {
  currentText = titles[typeIndex];
  let displayText = currentText.substring(0, charIndex);
  typewriterEl.textContent = displayText;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) typeIndex = (typeIndex + 1) % titles.length;
    setTimeout(type, 1000);
  }
}

type();

// === 3. REVEAL ON SCROLL ===
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Trigger reveal on page load
revealOnScroll();
