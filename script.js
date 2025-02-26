document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Particle effect
const particleContainer = document.getElementById('particle-container');
const particles = [];

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    particle.style.animationDuration = Math.random() * 3 + 2 + 's';
    particleContainer.appendChild(particle);
    particles.push(particle);

    setTimeout(() => {
        particle.remove();
        particles.splice(particles.indexOf(particle), 1);
    }, 5000);
}

setInterval(createParticle, 100);
