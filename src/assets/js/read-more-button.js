"use strict";
const readMoreButton = document.querySelector('.read-more-button');
if (readMoreButton)
    readMoreButton.addEventListener('click', onClickReadMoreButton);
function onClickReadMoreButton() {
    const hiddenElement = document.querySelector('.hidden');
    const readMoreButton = document.querySelector('.read-more-button');
    if (hiddenElement)
        hiddenElement.classList.add('active');
    if (readMoreButton)
        readMoreButton.style.display = 'none';
}
//# sourceMappingURL=read-more-button.js.map