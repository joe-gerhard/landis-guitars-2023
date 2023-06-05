"use strict";
function onClickMenuButton() {
    const menuButton = document.querySelector('.navbar > .menu-button');
    const nav = document.querySelector('.navbar > nav');
    if (menuButton)
        menuButton.classList.toggle('active');
    if (nav)
        nav.classList.toggle('active');
}
function onClickReadMoreButton() {
    const hiddenElement = document.querySelector('.hidden');
    const readMoreButton = document.querySelector('.read-more-button');
    if (hiddenElement)
        hiddenElement.classList.add('active');
    if (readMoreButton)
        readMoreButton.style.display = 'none';
}
const menuButton = document.querySelector('.navbar > .menu-button');
if (menuButton)
    menuButton.addEventListener('click', onClickMenuButton);
const readMoreButton = document.querySelector('.read-more-button');
if (readMoreButton)
    readMoreButton.addEventListener('click', onClickReadMoreButton);
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
const photoGalleryCallback = (entries) => {
    entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
            const images = Array.from(document.querySelectorAll('.photo-gallery img'));
            const captions = Array.from(document.querySelectorAll('.captions div'));
            const indicators = Array.from(document.querySelectorAll('.indicators div'));
            for (let i = 0; i < images.length; i++) {
                indicators[i].classList.remove('active');
                captions[i].classList.remove('active');
                if (target === images[i]) {
                    indicators[i].classList.add('active');
                    captions[i].classList.add('active');
                }
            }
        }
    });
};
let photoGalleryOptions = {
    root: document.querySelector('.photo-gallery .image-carousel'),
    rootMargin: '0px',
    threshold: 0.5,
};
const photoGalleryObserver = new IntersectionObserver(photoGalleryCallback, photoGalleryOptions);
const photos = document.querySelectorAll('.photo-gallery img');
photos.forEach((photo) => {
    photoGalleryObserver.observe(photo);
});
//# sourceMappingURL=script.js.map