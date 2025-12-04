document.getElementById('trainingForm').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        age: document.getElementById('age').value,
        experience: document.getElementById('experience').value,
        message: document.getElementById('message').value.trim()
    };

    console.log(formData);

    if (!formData.name || !formData.email || !formData.age) {
        alert("Please fill out Name, Email, and Age.");
        return;
    }

    const age = parseInt(formData.age);
    if (isNaN(age) || age < 10 || age > 100) {
        alert("Age must be between 10 and 100.");
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "form3.json", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const responseDiv = document.getElementById('responseMessage');
            responseDiv.innerText = response.message;
            responseDiv.style.display = 'block';
            document.getElementById('trainingForm').reset();
            Array.from(document.getElementById('trainingForm').elements).forEach(el => el.disabled = false);
        } else {
            alert("There was an error submitting the form.");
        }
    };
    xhr.send(JSON.stringify(formData));
}
