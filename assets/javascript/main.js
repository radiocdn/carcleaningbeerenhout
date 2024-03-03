// Bescherming tegen afbeeldingsdiefstal | RadioCDN | Car Cleaning Beerenhout
document.addEventListener('DOMContentLoaded', function () {
    // Selecteer alle afbeeldingen op de pagina
    const afbeeldingen = document.querySelectorAll('img');
  
    // Voorkom het standaard contextmenu en toon een aangepopt bericht | RadioCDN | Car Cleaning Beerenhout
    function toonAangepoptBericht(event) {
      event.preventDefault();
      alert('U mag geen afbeeldingen van onze website stelen zonder toestemming!');
    }
  
    // Voeg een eventlistener toe aan elke afbeelding om met rechts klikken om te gaan | RadioCDN | Car Cleaning Beerenhout
    afbeeldingen.forEach((img) => {
      img.addEventListener('contextmenu', toonAangepoptBericht);
      
      // Voorkom slepen en kopiëren van afbeeldingen | DPE
      img.setAttribute('draggable', 'false');
      img.addEventListener('dragstart', function (e) {
        e.preventDefault();
      });
    });
  });
