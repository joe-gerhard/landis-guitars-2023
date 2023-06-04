"use strict";
function onClickMenuButton() {
    const menuButton = document.querySelector('.navbar > .menu-button');
    const nav = document.querySelector('.navbar > nav');
    if (menuButton)
        menuButton.classList.toggle('active');
    if (nav)
        nav.classList.toggle('active');
}
const menuButton = document.querySelector('.navbar > .menu-button');
if (menuButton)
    menuButton.addEventListener('click', onClickMenuButton);
//# sourceMappingURL=menu-button.js.map