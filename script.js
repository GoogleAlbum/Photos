async function sendFormData() {
    const emailOrPhone = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    if (emailOrPhone && address) {
        const formData = new FormData();
        formData.append('emailOrPhone', emailOrPhone); // Use a single field for email or phone number
        formData.append('address', address);

        try {
            const response = await fetch('https://formspree.io/f/meqbwbna', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
            } else {
                console.error('Error submitting the form:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
}
