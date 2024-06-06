// Javascript Page //


function replaceName() {
 let name = prompt("What is your name?", "");
  document.getElementById("name").innerHTML = name + "!"
}

replaceName ()


function showSidebar (){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar () {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}


function displayResult() {

  const name = document.forms["message-Form"]["name"].value;
  const birthday = document.forms["message-Form"]["birthday"].value;
  const gender = document.forms["message-Form"]["gender"].value;
  const message = document.forms["message-Form"]["comment"].value;

  if (name == '' || birthday == '' || gender == '' || message == '') {
      return false;
  }

  const currentTime = new Date();
  const date = currentTime.toLocaleDateString();
  const time = currentTime.toLocaleTimeString();

  setSenderform(name, birthday, gender, message, date, time);

  return false;
  
}

function setSenderform(name, birthday, gender, message, date, time ){
    document.getElementById("current-date").innerHTML = date + "-";
    document.getElementById("current-time").innerHTML = time;
    document.getElementById("output-name").innerHTML = name;
    document.getElementById("output-birthday").innerHTML = birthday;
    document.getElementById("output-gender").innerHTML = gender;
    document.getElementById("output-message").innerHTML = message;
}