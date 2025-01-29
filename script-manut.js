const toggleSwitch = document.getElementById('switch');
const themeLink = document.getElementById('theme-link');

function applyTheme(theme) {
    if (theme === 'light') {
        themeLink.setAttribute('href', 'manut-bianco.css');
        toggleSwitch.checked = true;
    } else {
        themeLink.setAttribute('href', 'manut-nero.css');
        toggleSwitch.checked = false;
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
}

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    } else {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
});
