const urlParams = new URLSearchParams(window.location.search);
let to = urlParams.get("to");

// Jika tidak ada parameter "to", gunakan default
if (!to || to.trim() === "") {
    to = "Tamu Undangan";
}

// Tempelkan nama tamu
document.querySelectorAll(".nama-tamu").forEach((el) => {
    el.textContent = to;
});
