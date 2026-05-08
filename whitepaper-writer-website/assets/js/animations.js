// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        gsap.from('.hero-content > *', {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });

        gsap.from('.reveal', {
            scrollTrigger: {
                trigger: '.reveal',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: 'power3.out'
        });
    }
});
