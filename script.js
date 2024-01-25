// script.js

async function sendFormData() {
    try {
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;

        if (email && address) {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('address', address);

            const response = await fetch('https://formspree.io/f/meqbwbna', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
            } else {
                console.error('Error submitting the form:', response.statusText);
            }
        } else {
            console.error('Email or address is missing');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
