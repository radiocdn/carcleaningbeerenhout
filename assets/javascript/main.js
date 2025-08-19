document.addEventListener('DOMContentLoaded', function () {
  const afbeeldingen = document.querySelectorAll('img');

  // Blokkeer alleen contextmenu bij IMG
  document.addEventListener('contextmenu', function (event) {
    if (event.target.tagName === 'IMG') {
      event.preventDefault();
      alert('❌ U mag geen afbeeldingen van onze website kopiëren of stelen!');
    }
  });

  afbeeldingen.forEach((img) => {
    // Voorkom slepen en opslaan
    img.setAttribute('draggable', 'false');
    img.addEventListener('dragstart', (e) => e.preventDefault());

    // Blokkeer rechter muisknop (maar laat links/rechts klikken op links wel werken)
    img.addEventListener('mousedown', (e) => {
      if (e.button === 2) { // rechter muisknop
        e.preventDefault();
      }
    });

    // Geen overlay → normaal klikken blijft werken
  });
});
