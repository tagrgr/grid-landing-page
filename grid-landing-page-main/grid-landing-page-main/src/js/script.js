const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('primary-menu');
const overlay = document.querySelector('.overlay');

// ONE FUNCTION FOR BOTH DIRECTIONS SO THE BUTTON, THE PANEL AND THE OVERLAY CAN NEVER DISAGREE
function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    overlay.hidden = !open;
}

toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') === 'false');
});

overlay.addEventListener('click', function () {
    setMenu(false);
});

// ESCAPE IS THE EXPECTED WAY OUT OF AN OVERLAY MENU, AND FOCUS GOES BACK TO THE BUTTON
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
    }
});

// A LINK CLOSES THE MENU: THE LINKS ARE PLACEHOLDERS, SO NOTHING ELSE WOULD SIGNAL THE CHANGE
menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
        setMenu(false);
    }
});
