// Javascript Page //

//function replaceName() {
 //   let name = prompt("What is your name?", "");
   // document.getElementById("name").innerHTML = name + "!"
// }

//replaceName ()
function showSidebar (){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar () {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

function validateForm() {
  const name = document.forms["message-Form"]["name"].value;
  const birthday = document.forms["message-Form"]["birthDay"].value;
  const gender = document.forms["message-Form"]["gender"].value;
  const message = document.forms["message-Form"]["message"].value;

  if (name == '' || birthday == '' || gender == '' || message == ''){
      document.getElementById("error-message").innerHTML = 'Message cannot be empty';
      return false;
  }

  const currentTime = new Date();
  const date = currentTime.toLocaleDateString();
  const time = currentTime.toLocaleTimeString();

  document.getElementById("error-message").innerHTML = '';
  setSenderform(name, birthday, gender, message, date, time);

  return false;
  
}

function setSenderform(name, birthday, gender, message, date, time ){
    document.getElementById("current-date").innerHTML = date;
    document.getElementById("current-time").innerHTML = time;
    document.getElementById("output-name").innerHTML = name;
    document.getElementById("output-birthday").innerHTML = birthday;
    document.getElementById("output-gender").innerHTML = gender;
    document.getElementById("output-message").innerHTML = message;
}