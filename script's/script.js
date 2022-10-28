function acount_validation() {
    // var login = window.document.getElementById("user")
    // var senha = window.document.getElementById("password")

    // user = String(login.value)
    // password = String(senha.value)
    
    // if (user == 'mendes' && password == 'fox123') {
        redirecting_one()
    // }else {
        warning.innerHTML = (`Nome de usuário ou senha incorreto!`)
    // }
}

function redirecting_one() {
    window.location.replace("inicial_page.html");
}