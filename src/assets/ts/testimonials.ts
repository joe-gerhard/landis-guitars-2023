const callback: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
): void => {
    entries.forEach(({ isIntersecting, target: { classList } }) => {
        if (isIntersecting) {
            classList.add('active');
        }
    });
};

let options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};

const observer = new IntersectionObserver(callback, options);

const testimonials = document.querySelectorAll<HTMLElement>('.testimonial');

testimonials.forEach((testimonial) => {
    observer.observe(testimonial);
});
