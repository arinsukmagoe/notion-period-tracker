const card = document.getElementById("card");
const overlay = document.getElementById("overlay");
const cancel = document.getElementById("cancel");

card.addEventListener("click", () => {
    overlay.style.display = "flex";
});

cancel.addEventListener("click", () => {
    overlay.style.display = "none";
});

// klik area gelap untuk menutup popup
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
});
