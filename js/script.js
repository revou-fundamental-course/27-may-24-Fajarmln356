// Javascript Page //

//function replaceName() {
 //   let name = prompt("What is your name?", "");
   // document.getElementById("name").innerHTML = name + "!"
// }

//replaceName ()

document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Get current time
  let currentTime = new Date().tolocaleString();

  // Get form values
  let name = document.getElementById('name').value;
  let dob = document.getElementById('birthDay').value;
  //let gender = document.querySelector('input[name="gender"]:checked').value;
  let message = document.getElementById('message').value;

  // Display values
  document.getElementById('currentTime').textContent = currentTime;
  document.getElementById('outputName').textContent = name;
  document.getElementById('outputDob').textContent = dob;
  //document.getElementById('outputGender').textContent = gender;
  document.getElementById('outputMessage').textContent = message;
});
