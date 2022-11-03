function redirecting_back() {
    if (window.confirm('Tem certeza de que deseja sair?')) {
        window.open(window.location.replace("index.html"))
    }
}

const btn = document.getElementById("btn-top")
btn.addEventListener("click", function () {
    window.scrollTo(0, 0)
})

document.addEventListener('scroll', ocult)

function ocult() {
    if (window.scrollY > 100) {
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}