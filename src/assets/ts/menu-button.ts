// Define Elements
const nav = document.querySelector<HTMLElement>('.navbar > nav');
const menuButton = document.querySelector<HTMLElement>('.navbar > .menu-button');
const navItems = document.querySelectorAll<HTMLAnchorElement>('nav > ul > li > a');

// Add Event Listeners
if (menuButton) menuButton.addEventListener('click', onClickMenuButton);
navItems.forEach((navItem) => {
    navItem.addEventListener('click', onClickNavItem);
});

// Define Functions
function onClickMenuButton(e: MouseEvent): void {
    ToggleMenu();
}

function onClickNavItem(e: MouseEvent): void {
    e.preventDefault();
    let navItem = e.target;
    if (navItem instanceof HTMLAnchorElement) {
        let targetId = navItem.getAttribute('href');
        if (!targetId) return;
        let targetElement = document.querySelector(targetId);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
    }

    ToggleMenu();
}

function ToggleMenu() {
    if (menuButton) menuButton.classList.toggle('active');
    if (nav) nav.classList.toggle('active');
}
