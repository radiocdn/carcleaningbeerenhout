/* Fotos.js | RadioCDN | Car Cleaning Beerenhout */
function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    modalImage.src = imageSrc;
    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
