// SMOOTH CARD PARALLAX
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 50;
  const y = (window.innerHeight / 2 - e.pageY) / 50;

  document.querySelectorAll(".card").forEach(card => {
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
});

// BUTTON FEEDBACK
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => btn.style.transform = "", 150);
  });
});

// NAV ACTIVE LINK
document.querySelectorAll("nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = "#ffb3a7";
  }
});