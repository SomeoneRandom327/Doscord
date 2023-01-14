var firebaseConfig = {
      apiKey: "AIzaSyAb8RjJ8INWLqBKmuc4xJ8ePDODKWKiXN0",
      authDomain: "doscord-9c9b7.firebaseapp.com",
      databaseURL: "https://doscord-9c9b7-default-rtdb.firebaseio.com",
      projectId: "doscord-9c9b7",
      storageBucket: "doscord-9c9b7.appspot.com",
      messagingSenderId: "843994484030",
      appId: "1:843994484030:web:e23091926ec26d0713706f"
    };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id="+Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "doscord_page.html"
 }

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "doscord_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}