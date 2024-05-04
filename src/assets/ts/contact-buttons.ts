const arrows = document.querySelectorAll('#contact-buttons .arrow');

const arrowCallback: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
): void => {
    entries.forEach(({ isIntersecting, target: { classList } }) => {
        if (isIntersecting) {
            arrows.forEach((arrow) => {
                arrow.classList.add('active');
            });
        } else {
            arrows.forEach((arrow) => {
                arrow.classList.remove('active');
            });
        }
    });
};

const arrowObserver = new IntersectionObserver(arrowCallback, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
});

const contactSection = document.getElementById('contact');

if (contactSection) arrowObserver.observe(contactSection);
