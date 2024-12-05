const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const colors = ['#FFC0CB', '#FFD700', '#ADFF2F', '#00FFFF', '#FF69B4'];

function createParticle() {
  const x = Math.random() * canvas.width;
  const y = -10;
  const size = Math.random() * 10 + 5;
  const color = colors[Math.floor(Math.random() * colors.length)];
  const speed = Math.random() * 3 + 2;

  particles.push({ x, y, size, color, speed });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle, index) => {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();

    particle.y += particle.speed;

    if (particle.y > canvas.height) {
      particles.splice(index, 1);
    }
  });
}

function loop() {
  drawParticles();
  requestAnimationFrame(loop);
}

setInterval(createParticle, 100);
loop();

