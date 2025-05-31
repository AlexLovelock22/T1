document.addEventListener("DOMContentLoaded", () => {
    // === Side menu toggle ===
    const openBtn = document.querySelector('[aria-label="Filter"]');
    const closeBtn = document.getElementById("close-menu");
    const overlay = document.getElementById("menu-overlay");
    const menu = document.getElementById("side-menu");

    openBtn?.addEventListener("click", () => {
        overlay?.classList.remove("hidden");
        menu?.classList.remove("translate-x-full");
    });

    closeBtn?.addEventListener("click", () => {
        overlay?.classList.add("hidden");
        menu?.classList.add("translate-x-full");
    });

    overlay?.addEventListener("click", () => {
        overlay?.classList.add("hidden");
        menu?.classList.add("translate-x-full");
    });

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

    // === Initial icon render ===
    lucide.createIcons();
});
