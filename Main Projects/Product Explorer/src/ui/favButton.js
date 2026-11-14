function syncFavButton(button, isFav) {
    button.setAttribute("aria-pressed", String(isFav));
    button.setAttribute("aria-label", isFav ? "Remove from favourites" : "Add to favourites");
    button.textContent = isFav ? "❤️" : "🤍";
}

export { syncFavButton };