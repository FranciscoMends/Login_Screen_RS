function redirecting_back() {
    if (window.confirm('Tem certeza de que deseja sair?')) {
        window.open(window.location.replace("index.html"))
    }
}