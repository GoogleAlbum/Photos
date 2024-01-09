function sendFormData() {
    const email = document.getElementById('email').value;
    const fullname = document.getElementById('fullname').value;

    if (email && fullname) {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('fullname', fullname);

        fetch('https://formspree.io/f/xeqyqaay', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded' // Add this line
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    }
}
