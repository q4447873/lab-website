/**
 * Particles Effect System
 * Creates beautiful floating particles with mouse interaction and 3D depth
 */

class ParticleSystem {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.particleCount = 80;
        this.connectionDistance = 150;
        this.mouseInfluenceRadius = 200;
        this.animationId = null;
        this.scrollY = 0;
        this.parallaxFactor = 0.3;

        this.init();
    }

    init() {
        // Create canvas
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'particles-canvas';
        document.body.insertBefore(this.canvas, document.body.firstChild);

        this.ctx = this.canvas.getContext('2d');

        // Set canvas size
        this.resize();
        window.addEventListener('resize', () => this.resize());

        // Mouse interaction
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        document.addEventListener('mouseleave', () => this.handleMouseLeave());

        // Scroll parallax effect
        window.addEventListener('scroll', () => {
            this.scrollY = window.pageYOffset;
        });

        // Create particles
        this.createParticles();

        // Start animation
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }

    handleMouseLeave() {
        this.mouseX = -1000;
        this.mouseY = -1000;
    }

    createParticles() {
        this.particles = [];
        const isDarkMode = document.body.classList.contains('dark-mode');

        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                size: Math.random() * 3 + 1,
                color: this.getRandomColor(),
                alpha: Math.random() * 0.5 + 0.2,
                z: Math.random() * 2 - 1, // 3D depth
                angle: Math.random() * Math.PI * 2,
                angularSpeed: (Math.random() - 0.5) * 0.02,
                pulsePhase: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.03 + 0.01
            });
        }
    }

    getRandomColor() {
        const colors = [
            { r: 74, g: 144, b: 217 },   // Blue
            { r: 44, g: 90, b: 160 },    // Dark Blue
            { r: 155, g: 89, b: 182 },   // Purple
            { r: 231, g: 76, b: 60 },    // Red
            { r: 46, g: 204, b: 113 },   // Green
            { r: 241, g: 196, b: 15 }    // Yellow
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    updateParticles() {
        this.particles.forEach(p => {
            // Base movement
            p.x += p.vx;
            // Particles float upward slowly
            p.y += p.vy - 0.3;

            // Rotation
            p.angle += p.angularSpeed;

            // Pulse effect
            p.pulsePhase += p.pulseSpeed;

            // Mouse interaction
            const dx = this.mouseX - p.x;
            const dy = this.mouseY - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.mouseInfluenceRadius) {
                const force = (this.mouseInfluenceRadius - distance) / this.mouseInfluenceRadius;
                const angle = Math.atan2(dy, dx);
                p.vx -= Math.cos(angle) * force * 0.5;
                p.vy -= Math.sin(angle) * force * 0.5;
            }

            // Boundary wrap
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < -200) p.y = this.canvas.height + 200;
            if (p.y > this.canvas.height + 200) p.y = -200;

            // Damping
            p.vx *= 0.99;
            p.vy *= 0.99;

            // Keep minimum velocity
            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (speed < 0.3) {
                p.vx += (Math.random() - 0.5) * 0.2;
                p.vy += (Math.random() - 0.5) * 0.2;
            }
        });
    }

    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Calculate parallax offset
        const parallaxOffset = this.scrollY * this.parallaxFactor;

        // Draw connections first
        this.drawConnections(parallaxOffset);

        // Draw particles
        this.particles.forEach(p => {
            // Apply parallax to y position
            const parallaxY = p.y + parallaxOffset;

            const pulse = Math.sin(p.pulsePhase) * 0.3 + 1;
            const size = p.size * pulse * (p.z + 1.5);
            const alpha = p.alpha * (p.z + 1.5) / 2;

            this.ctx.beginPath();
            this.ctx.arc(p.x, parallaxY, size, 0, Math.PI * 2);

            // Create gradient for each particle
            const gradient = this.ctx.createRadialGradient(
                p.x, parallaxY, 0,
                p.x, parallaxY, size * 2
            );
            gradient.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`);
            gradient.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`);

            this.ctx.fillStyle = gradient;
            this.ctx.fill();

            // Draw glow
            this.ctx.beginPath();
            this.ctx.arc(p.x, parallaxY, size * 3, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.2})`;
            this.ctx.fill();
        });
    }

    drawConnections(parallaxOffset = 0) {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];

                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.connectionDistance) {
                    const alpha = (1 - distance / this.connectionDistance) * 0.3;
                    const avgColor = {
                        r: (p1.color.r + p2.color.r) / 2,
                        g: (p1.color.g + p2.color.g) / 2,
                        b: (p1.color.b + p2.color.b) / 2
                    };

                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y + parallaxOffset);
                    this.ctx.lineTo(p2.x, p2.y + parallaxOffset);
                    this.ctx.strokeStyle = `rgba(${avgColor.r}, ${avgColor.g}, ${avgColor.b}, ${alpha})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        this.updateParticles();
        this.drawParticles();
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    // Method to update particle colors for dark mode
    updateColors() {
        this.particles.forEach(p => {
            p.color = this.getRandomColor();
        });
    }

    // Cleanup
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas) {
            this.canvas.remove();
        }
        document.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('resize', this.resize);
    }
}

/**
 * Scroll Animation System
 * Handles fade-in animations on scroll
 */
class ScrollAnimation {
    constructor() {
        this.elements = document.querySelectorAll('.animate-on-scroll');
        this.init();
    }

    init() {
        this.checkScroll();
        window.addEventListener('scroll', () => this.checkScroll());
    }

    checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        this.elements.forEach(el => {
            const box = el.getBoundingClientRect();
            if (box.top < triggerBottom) {
                el.classList.add('animated');
            }
        });
    }
}

/**
 * 3D Tilt Effect
 * Adds perspective tilt on mouse move
 */
class TiltEffect {
    constructor(element) {
        this.element = element;
        this.boundingRect = null;
        this.centerX = 0;
        this.centerY = 0;

        this.init();
    }

    init() {
        this.updateBoundingRect();
        window.addEventListener('resize', () => this.updateBoundingRect());
        this.element.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.element.addEventListener('mouseleave', () => this.handleMouseLeave());
    }

    updateBoundingRect() {
        this.boundingRect = this.element.getBoundingClientRect();
        this.centerX = this.boundingRect.left + this.boundingRect.width / 2;
        this.centerY = this.boundingRect.top + this.boundingRect.height / 2;
    }

    handleMouseMove(e) {
        const x = e.clientX - this.centerX;
        const y = e.clientY - this.centerY;

        const rotateX = (y / this.boundingRect.height) * 10;
        const rotateY = -(x / this.boundingRect.width) * 10;

        this.element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    }

    handleMouseLeave() {
        this.element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    }
}

/**
 * Initialize all effects
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particle system
    window.particleSystem = new ParticleSystem();

    // Initialize scroll animations
    window.scrollAnimation = new ScrollAnimation();

    // Add stagger animations to cards
    const cards = document.querySelectorAll('.feature-card, .news-item, .research-item, .team-member');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = 'fadeInUp 0.6s ease forwards';
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Apply 3D tilt to feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.classList.add('tilt-container');
        const tiltCard = document.createElement('div');
        tiltCard.className = 'tilt-card';
        card.parentNode.insertBefore(tiltCard, card);
        tiltCard.appendChild(card);
        new TiltEffect(card);
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    const nav = document.querySelector('nav .container');
    if (nav) {
        const existingBtn = nav.querySelector('.mobile-menu-btn');
        if (!existingBtn) {
            nav.insertBefore(mobileMenuBtn, nav.lastElementChild);
        }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero, .page-header');
        if (hero) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });

    // Add loading animation
    document.body.classList.add('loaded');
});

// Export for use in other scripts
window.ParticleSystem = ParticleSystem;
window.ScrollAnimation = ScrollAnimation;
window.TiltEffect = TiltEffect;
