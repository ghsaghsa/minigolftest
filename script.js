document.getElementById('cta-button').addEventListener('click', function() {
    alert('Vielen Dank für Ihr Interesse! Bitte füllen Sie das Kontaktformular aus, um eine Buchung vorzunehmen.');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
});
