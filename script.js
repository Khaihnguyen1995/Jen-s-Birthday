// Floating cherry blossoms diagonally
function createBlossom() {
  const blossom = document.createElement("div");
  blossom.className = "floating-blossom";
  blossom.style.left = Math.random() * window.innerWidth + "px";
  blossom.style.top = "-30px"; // start above the top
  blossom.textContent = "🌸";
  document.body.appendChild(blossom);

  let driftX = Math.random() * 2 - 1; // drift left/right
  let speedY = 1 + Math.random() * 2; // vertical speed

  function move() {
    const top = parseFloat(blossom.style.top);
    const left = parseFloat(blossom.style.left);
    blossom.style.top = top + speedY + "px";
    blossom.style.left = left + driftX + "px";

    if (top < window.innerHeight) {
      requestAnimationFrame(move);
    } else {
      blossom.remove();
    }
  }

  move();
}

// Create a new blossom every 0.5 seconds
setInterval(createBlossom, 500);

// Surprise button: show Milky Mew Cow text + Drone Show image
function showSurprise() {
  const surprise = document.getElementById("surprise");
  surprise.innerHTML = ""; // clear previous content

  // Milky Mew Cow message
  const text = document.createElement("span");
  text.innerHTML = "You are my one and only Milky Mew Cow in the whole world! 🐱🐄🌍💞";
  text.className = "glow-purple";
  text.style.display = "block";
  text.style.marginBottom = "10px";
  surprise.appendChild(text);

  // Drone Show image
  const img = document.createElement("img");
  img.src = "Pictures/jenpics/DroneShow.jpeg";
  img.alt = "Drone Show";
  img.style.width = "150px";
  img.style.display = "block";
  img.style.margin = "0 auto";
  surprise.appendChild(img);
}

// WHY I LOVE YOU list
function showLove() {
  const loveList = document.getElementById("loveReasons");
  loveList.classList.toggle("hidden");

  const items = loveList.querySelectorAll("li");
  items.forEach((li, index) => {
    li.style.animationDelay = `${index * 0.3}s`;
    li.style.opacity = 1;
  });
}
