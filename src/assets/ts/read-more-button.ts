const readMoreButton = document.querySelector<HTMLElement>('.read-more-button');
if (readMoreButton) readMoreButton.addEventListener('click', onClickReadMoreButton);

function onClickReadMoreButton(): void {
    const hiddenElement = document.querySelector<HTMLElement>('.hidden');
    const readMoreButton = document.querySelector<HTMLElement>('.read-more-button');

    if (hiddenElement) hiddenElement.classList.add('active');
    if (readMoreButton) readMoreButton.style.display = 'none';
}
