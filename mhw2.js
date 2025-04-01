function onOpenSearch(event) {
    const container = event.currentTarget;
    container.classList.add("search-open");
    document.addEventListener("click", onCloseSearchOutside);
}

function onCloseSearch(event) {
    event.stopPropagation();
    let container = document.querySelector("#search-bar-container");
    container.classList.remove("search-open");

    document.removeEventListener("click", onCloseSearchOutside);
}

function onCloseSearchOutside(event) {
    let container = document.querySelector("#search-bar-container");
    if (!container.contains(event.target)) {
        onCloseSearch(event);
    }
}

let searchBarContainer = document.querySelector("#search-bar-container");
searchBarContainer.addEventListener("click", onOpenSearch);

let closeSearch = document.querySelector(".close-search-btn");
closeSearch.addEventListener("click", onCloseSearch);
