function onClickMenuButton(): void {
    const menuButton = document.querySelector<HTMLElement>('.navbar > .menu-button');
    const nav = document.querySelector<HTMLElement>('.navbar > nav');

    if (menuButton) menuButton.classList.toggle('active');
    if (nav) nav.classList.toggle('active');
}

function onClickReadMoreButton(): void {
    const hiddenElement = document.querySelector<HTMLElement>('.hidden');
    const readMoreButton = document.querySelector<HTMLElement>('.read-more-button');

    if (hiddenElement) hiddenElement.classList.add('active');
    if (readMoreButton) readMoreButton.style.display = 'none';
}

const menuButton = document.querySelector<HTMLElement>('.navbar > .menu-button');
if (menuButton) menuButton.addEventListener('click', onClickMenuButton);

const readMoreButton = document.querySelector<HTMLElement>('.read-more-button');
if (readMoreButton) readMoreButton.addEventListener('click', onClickReadMoreButton);

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

photos.forEach((photo) => {
    photoGalleryObserver.observe(photo);
});
