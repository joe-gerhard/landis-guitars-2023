"use strict";
const callback = (entries, observer) => {
    entries.forEach(({ isIntersecting, target: { classList } }) => {
        if (isIntersecting) {
            classList.add('active');
        }
    });
};
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};
const observer = new IntersectionObserver(callback, options);
const testimonials = document.querySelectorAll('.testimonial');
testimonials.forEach((testimonial) => {
    observer.observe(testimonial);
});
//# sourceMappingURL=testimonials.js.map