function sendFormData() {
    const email = document.getElementById('email').value;
    const fullname = document.getElementById('fullname').value;

    if (email && fullname) {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('fullname', fullname);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://formspree.io/f/xeqyqaay', true);
        xhr.setRequestHeader('Accept', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                } else {
                    console.error('Error submitting the form:', xhr.statusText);
                }
            }
        };

        xhr.send(formData);
    }
}
