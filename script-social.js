const toggleSwitch = document.getElementById('switch');
const themeLink = document.getElementById('theme-link');
const tiktubeImage = document.querySelector('.tiktube');

// Funzione per applicare il tema
function applyTheme(theme) {
    if (theme === 'light') {
        themeLink.setAttribute('href', 'style-social-bianco.css');
        toggleSwitch.checked = true;
        tiktubeImage.setAttribute('src', 'images-social/Senza titolo-1-chiara.jpg');
    } else {
        themeLink.setAttribute('href', 'style-social-nero.css');
        toggleSwitch.checked = false;
        tiktubeImage.setAttribute('src', 'images-social/Senza titolo-1.jpg');
    }
}

// Controlla se un tema è già salvato nel localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
}

// Ascolta il cambiamento di stato del toggle
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    } else {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
});
