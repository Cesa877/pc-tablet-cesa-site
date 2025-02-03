const toggleSwitch = document.getElementById('switch');
const themeLink = document.getElementById('theme-link');

function applyTheme(theme) {
    if (theme === 'light') {
        themeLink.setAttribute('href', 'style-app-bianco.css');
        toggleSwitch.checked = true;
    } else {
        themeLink.setAttribute('href', 'style-app-nero.css');
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

document.getElementById('download-button').addEventListener('click', function() {
    console.log('Download button clicked');

    // Mostra l'alert direttamente
    alert('Grazie per aver scaricato la nostra applicazione. Il file è sicuro e non contiene virus o malware.\nConsigli Utili:\n- Sorgenti Affidabili: Scarica il file solo dal nostro sito ufficiale.\n- Verifica Antivirus: Scansiona il file con il tuo antivirus per ulteriore sicurezza.');
    
    // Fai partire il download del file .exe
    const fileUrl = 'https://drive.google.com/uc?export=download&id=1PWDDpSh-NfZWvXT57p1Q7ech26o9bqst';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
