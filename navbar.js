document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector('[aria-label="Filter"]');
    const closeBtn = document.getElementById("close-menu");
    const overlay = document.getElementById("menu-overlay");
    const menu = document.getElementById("side-menu");

    openBtn.addEventListener("click", () => {
        overlay.classList.remove("hidden");
        menu.classList.remove("translate-x-full");
    });

    closeBtn.addEventListener("click", () => {
        overlay.classList.add("hidden");
        menu.classList.add("translate-x-full");
    });

    overlay.addEventListener("click", () => {
        overlay.classList.add("hidden");
        menu.classList.add("translate-x-full");
    });
});