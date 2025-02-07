
function toggleDarkMode() {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
    }
}
