function initNavbar() {
    const toggle = document.querySelector("#toggle-search");
    const box = document.querySelector("#search-box");
    const overlay = document.getElementById("menu-overlay");
    const menu = document.getElementById("side-menu");
    const openMenuBtn = document.querySelector('[aria-label="Filter"]');
    const closeMenuBtn = document.getElementById("close-menu");

    // === Side menu toggle ===
    if (openMenuBtn && closeMenuBtn && overlay && menu) {
        openMenuBtn.addEventListener("click", () => {
            menu.classList.remove("translate-x-full");
            overlay.classList.remove("hidden");
        });

        closeMenuBtn.addEventListener("click", () => {
            menu.classList.add("translate-x-full");
            overlay.classList.add("hidden");
        });

        overlay.addEventListener("click", () => {
            menu.classList.add("translate-x-full");
            overlay.classList.add("hidden");
        });
    }

    // === Search pill logic ===
    const searchToggle = document.getElementById("toggle-search");
    const searchBox = document.getElementById("search-box");
    const searchButton = searchBox?.querySelector("button");

    let isSearchOpen = false;
    let searchHideTimeout = null;

    function openSearch() {
        isSearchOpen = true;
        searchBox?.classList.add("scale-x-100", "opacity-100");
        searchBox?.classList.remove("scale-x-0", "opacity-0");
        lucide.createIcons();
    }

    function closeSearch() {
        isSearchOpen = false;
        searchBox?.classList.add("scale-x-0", "opacity-0");
        searchBox?.classList.remove("scale-x-100", "opacity-100");
    }

    searchToggle?.addEventListener("click", () => {
        if (!isSearchOpen) openSearch();
    });

    searchBox?.addEventListener("mouseenter", () => {
        clearTimeout(searchHideTimeout);
    });

    searchBox?.addEventListener("mouseleave", () => {
        searchHideTimeout = setTimeout(() => {
            if (isSearchOpen) closeSearch();
        }, 2000);
    });

    searchButton?.addEventListener("click", () => {
        closeSearch();
        window.location.href = "/Stock/View";
    });

    // === CTA load-in animation ===
    const cta = document.getElementById("cta-wrapper");
    if (cta) {
        cta.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-1000");
        setTimeout(() => {
            cta.classList.remove("opacity-0", "translate-y-6");
            cta.classList.add("opacity-100", "translate-y-0");
        }, 100);
    }

    // === Initial icon render ===
    lucide.createIcons();
}
