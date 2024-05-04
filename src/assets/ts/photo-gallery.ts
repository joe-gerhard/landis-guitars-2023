const photoGalleryCallback: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
): void => {
    entries.forEach(({ isIntersecting, target }: { isIntersecting: boolean; target: Element }) => {
        if (isIntersecting) {
            const images: HTMLElement[] = Array.from(
                document.querySelectorAll<HTMLElement>('.photo-gallery img')
            );

            const indicators: HTMLElement[] = Array.from(
                document.querySelectorAll<HTMLElement>('.indicators div')
            );

            for (let i = 0; i < images.length; i++) {
                indicators[i].classList.remove('active');

                if (target === images[i]) {
                    indicators[i].classList.add('active');
                }
            }
        }
    });
};

let photoGalleryOptions: IntersectionObserverInit = {
    root: document.querySelector('.photo-gallery .image-carousel'),
    rootMargin: '0px',
    threshold: 0.5,
};

const photoGalleryObserver = new IntersectionObserver(photoGalleryCallback, photoGalleryOptions);

const photos = document.querySelectorAll<HTMLElement>('.photo-gallery img');
('');
photos.forEach((photo) => {
    photoGalleryObserver.observe(photo);
});
