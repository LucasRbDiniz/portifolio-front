document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    var modeText = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Noturno';
    document.getElementById('theme-toggle').innerText = modeText;
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Verificar a preferência de modo noturno salva ao carregar a página
window.onload = function() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').innerText = 'Modo Claro';
    }
};
