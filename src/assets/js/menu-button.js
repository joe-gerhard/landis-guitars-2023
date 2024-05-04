"use strict";
const nav = document.querySelector('.navbar > nav');
const menuButton = document.querySelector('.navbar > .menu-button');
const navItems = document.querySelectorAll('nav > ul > li > a');
if (menuButton)
    menuButton.addEventListener('click', onClickMenuButton);
navItems.forEach((navItem) => {
    navItem.addEventListener('click', onClickNavItem);
});
function onClickMenuButton(e) {
    ToggleMenu();
}
function onClickNavItem(e) {
    e.preventDefault();
    let navItem = e.target;
    if (navItem instanceof HTMLAnchorElement) {
        let targetId = navItem.getAttribute('href');
        if (!targetId)
            return;
        let targetElement = document.querySelector(targetId);
        targetElement === null || targetElement === void 0 ? void 0 : targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    ToggleMenu();
}
function ToggleMenu() {
    if (menuButton)
        menuButton.classList.toggle('active');
    if (nav)
        nav.classList.toggle('active');
}
//# sourceMappingURL=menu-button.js.map