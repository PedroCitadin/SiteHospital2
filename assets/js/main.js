document.addEventListener('DOMContentLoaded', function () {
    var anoSpan = document.getElementById('anoAtual');
    if (anoSpan) {
        anoSpan.textContent = new Date().getFullYear();
    }
});
