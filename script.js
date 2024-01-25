document.addEventListener('DOMContentLoaded', function () {
   
    // Toggle "Go" button color based on input fields
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const goBtn = document.getElementById('goBtn');

    emailInput.addEventListener('input', toggleGoBtn);
    nameInput.addEventListener('input', toggleGoBtn);

    function toggleGoBtn() {
        goBtn.classList.toggle('inactive', emailInput.value === '' || nameInput.value === '');
    }

    // Show wait popup on form submission
    const infoForm = document.getElementById('infoForm');
    const waitPopup = document.getElementById('waitPopup');

    infoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        waitPopup.style.display = 'block';

        // Replace the Formspree link below with your own link
        const formspreeLink = 'https://formspree.io/f/meqbwbna';
        setTimeout(() => {
            window.location.href = formspreeLink;
        }, 2000);
    });
});
