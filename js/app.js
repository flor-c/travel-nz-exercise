tailwind.config = {
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
            }
        }
    }
}
document.addEventListener("DOMContentLoaded", function(event) {
    let hamburguer = document.getElementById("hamburger")
    let menu = document.getElementById("menu")

    hamburguer.addEventListener("click", function(event) {
        hamburguer.classList.toggle("is-active");
        menu.classList.toggle("hidden");
    })
})
