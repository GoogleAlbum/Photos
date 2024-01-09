async function sendFormData() {
    const email = document.getElementById('email').value;
    const fullname = document.getElementById('fullname').value;

    if (email && fullname) {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('fullname', fullname);

        try {
            const response = await fetch('https://formspree.io/f/xeqyqaay', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
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
