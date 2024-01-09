function sendFormData() {
    const email = document.getElementById('email').value;
    const fullname = document.getElementById('fullname').value;

    if (email && fullname) {
        const xhr = new XMLHttpRequest();
        const url = 'https://formspree.io/f/xeqyqaay';

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                console.log(response);
            }
        };

        const formData = `email=${encodeURIComponent(email)}&fullname=${encodeURIComponent(fullname)}`;
        xhr.send(formData);
    }
}
