//function openPopup(id) {
//  document.getElementById(id).style.display = 'block';
//}

//function closePopup(id) {
//  document.getElementById(id).style.display = 'none';
//}
  
// Öffnet ein beliebiges Element per ID
function openPopup(id) {
  document.getElementById(id).style.display = 'block';
}

// Allgemeine Funktion zum Schließen eines Elements per ID
function hideElementById(id) {
  document.getElementById(id).style.display = 'none';
}

// Sobald die Seite geladen ist
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("thankYouPopup");
  const closeBtn = document.getElementById("closeButton");

  // Formular absenden
  if (form && popup) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Seite nicht neu laden

      form.style.display = "none";
      popup.style.display = "block";
    });
  }

  // Danke-Popup schließen
  if (closeBtn && form && popup) {
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
      form.reset();
      form.style.display = "block";
    });
  }

  // Alle Close-Buttons für Popups (mit data-popup-Attribut)
  const popupCloseButtons = document.querySelectorAll(".closePopupBtn");

  popupCloseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const popupId = button.getAttribute("data-popup");
      const popupToClose = document.getElementById(popupId);
      if (popupToClose) {
        popupToClose.style.display = "none";
      }
    });
  });
});

// Text kopieren (z. B. aus Textarea)
function copyText(textareaId) {
  const textarea = document.getElementById(textareaId);
  if (!textarea) return;

  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Text copied to clipboard!");
}
