// Efeito de rolagem na Navbar (Glassmorphism effect)
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer para animações de rolagem Reveal On Scroll
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

// INSTAGRAM SLIDER LOGIC
const slider = document.getElementById('instaSlider');
const nextBtn = document.getElementById('iNext');
const prevBtn = document.getElementById('iPrev');

if (slider && nextBtn && prevBtn) {
    const getScrollAmount = () => {
        const firstSlide = slider.querySelector('.insta-slide');
        return firstSlide ? firstSlide.offsetWidth + 40 : 400;
    };

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    // INFINITE LOOP (CLONING FOR SMOOTH SCROLL)
    const slidesClone = slider.innerHTML;
    slider.insertAdjacentHTML('beforeend', slidesClone);
    slider.insertAdjacentHTML('afterbegin', slidesClone);
    
    // Initial position to middle set
    const initialScroll = slider.scrollWidth / 3;
    slider.scrollLeft = initialScroll;

    // Handle seamless jump
    slider.addEventListener('scroll', () => {
        if (slider.scrollLeft <= 5) {
            slider.scrollLeft = slider.scrollWidth / 3;
        } else if (slider.scrollLeft >= (slider.scrollWidth * 2 / 3)) {
            slider.scrollLeft = slider.scrollWidth / 3;
        }
    });
}

// PARALLAX WATERMARK
const watermark = document.querySelector('.bg-watermark');
if (watermark) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        watermark.style.transform = `translateY(${scrolled * 0.15}px)`;
    });
}
