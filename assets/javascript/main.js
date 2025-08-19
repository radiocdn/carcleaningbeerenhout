document.addEventListener('DOMContentLoaded', function () {
  const afbeeldingen = document.querySelectorAll('img');

  // Voorkom contextmenu op de hele pagina (niet alleen op afbeeldingen)
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

    // Extra: blokkeer rechter muisknop ook via mousedown
    img.addEventListener('mousedown', (e) => {
      if (e.button === 2) { // rechter muisknop
        e.preventDefault();
        alert('❌ Afbeeldingen downloaden is niet toegestaan.');
      }
    });

    // Extra: Voorkom dat afbeelding in een nieuwe tab kan worden gesleept
    img.addEventListener('click', (e) => {
      if (e.ctrlKey || e.metaKey) { // Ctrl+klik of Cmd+klik
        e.preventDefault();
      }
    });

    // Extra laag beveiliging: disable "pointer-events" overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.pointerEvents = 'auto';
    overlay.style.background = 'transparent';
    overlay.style.zIndex = 9999;
    img.style.position = 'relative';
    img.parentNode.style.position = 'relative';
    img.parentNode.appendChild(overlay);
  });
});
