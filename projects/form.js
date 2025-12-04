document.getElementById('trainingForm').addEventListener('submit', function(e){
  e.preventDefault(); // prevent default form submission

  // Collect form data into an object
  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    age: parseInt(document.getElementById('age').value),
    experience: document.getElementById('experience').value,
    message: document.getElementById('message').value.trim()
  };

  console.log(formData); // log object

  // Simple validation
  if(!formData.name || !formData.email || !formData.age){
    alert('Please fill out Name, Email, and Age fields.');
    return;
  }

  if(formData.age < 10 || formData.age > 100){
    alert('Age must be between 10 and 100.');
    return;
  }

  // AJAX request to mock JSON file
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'response.json', true);
  xhr.onload = function() {
    if(xhr.status === 200){
      const response = JSON.parse(xhr.responseText);
      const responseDiv = document.getElementById('responseMessage');
      responseDiv.textContent = response.message;
      responseDiv.style.display = 'block';
      document.getElementById('trainingForm').reset();
    }
  };
  xhr.send();
});
