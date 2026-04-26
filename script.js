
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

function scrollCarrusel(direction) {
    let left = null
    if (direction === "right")  {
        left = 420
    } else {
        left = -420
    }
    const carrusel = document.getElementById("carrusel");
    carrusel.scrollBy({
        behavior: "smooth",
        left: left
    })
}