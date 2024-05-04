"use strict";
const photoGalleryCallback = (entries) => {
    entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
            const images = Array.from(document.querySelectorAll('.photo-gallery img'));
            const indicators = Array.from(document.querySelectorAll('.indicators div'));
            for (let i = 0; i < images.length; i++) {
                indicators[i].classList.remove('active');
                if (target === images[i]) {
                    indicators[i].classList.add('active');
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
('');
photos.forEach((photo) => {
    photoGalleryObserver.observe(photo);
});
//# sourceMappingURL=photo-gallery.js.map