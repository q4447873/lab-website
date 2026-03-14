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
        // Qclaw style settings
        this.particleCount = 100;  // 100 particles like Qclaw
        this.connectionDistance = 140;  // 140px connection distance
        this.mouseInfluenceRadius = 180;  // 180px mouse influence
        this.animationId = null;
        this.scrollY = 0;
        this.parallaxFactor = 0.3;

        this.init();
    }

    init() {
        // Create canvas
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'particles-canvas';
        this.canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000;pointer-events:none;';
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

        for (let i = 0; i < this.particleCount; i++) {
            // Qclaw style: 60% red particles, 40% purple particles
            const isRed = Math.random() > 0.4;
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.4,  // Qclaw speed: 0.4
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 1.8 + 0.5,  // Qclaw size: 0.5-2.3px
                alpha: Math.random() * 0.4 + 0.15,  // Qclaw alpha: 0.15-0.55
                hue: isRed ? 0 : 280,  // Red (0) or Purple (280)
                color: isRed ?
                    { r: 255, g: 59, b: 48 } :  // Red #FF3B30
                    { r: 180, g: 60, b: 200 },  // Purple
                z: Math.random() * 2 - 1,
                angle: Math.random() * Math.PI * 2,
                angularSpeed: (Math.random() - 0.5) * 0.02,
                pulsePhase: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.03 + 0.01
            });
        }
    }

    updateParticles() {
        this.particles.forEach(p => {
            // Qclaw style movement - gentle floating
            p.x += p.vx;
            p.y += p.vy;

            // Rotation
            p.angle += p.angularSpeed;

            // Pulse effect
            p.pulsePhase += p.pulseSpeed;

            // Mouse interaction - Qclaw style (gentle repulsion)
            const dx = this.mouseX - p.x;
            const dy = this.mouseY - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 180) {  // Qclaw mouse influence
                const force = (180 - distance) / 180;
                const angle = Math.atan2(dy, dx);
                p.vx += Math.cos(angle) * force * 0.015;
                p.vy += Math.sin(angle) * force * 0.015;
            }

            // Bounce off boundaries
            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            // Very light damping (Qclaw style)
            p.vx *= 0.999;
            p.vy *= 0.999;
        });
    }

    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw connections first (Qclaw style)
        this.drawConnections();

        // Draw particles (Qclaw style - simple dots)
        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            // Qclaw style: red or purple with alpha
            this.ctx.fillStyle = p.hue === 0
                ? `rgba(255, 59, 48, ${p.alpha})`  // Red
                : `rgba(180, 60, 200, ${p.alpha * 0.6})`;  // Purple (dimmed)
            this.ctx.fill();
        });
    }

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];

                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.connectionDistance) {
                    // Qclaw style: alpha 0.1, thin lines
                    const alpha = (1 - distance / this.connectionDistance) * 0.1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(255, 107, 94, ${alpha})`;
                    this.ctx.lineWidth = 0.5;
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
    const page = document.body.getAttribute('data-page');

    // 所有页面都启用粒子背景效果
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
