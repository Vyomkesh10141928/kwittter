var firebaseConfig = {
      apiKey: "AIzaSyCDs_sMmr5HZbuYYK5q0mYKmg5oo_tH25w",
      authDomain: "kwitter1-f2749.firebaseapp.com",
      databaseURL: "https://kwitter1-f2749-default-rtdb.firebaseio.com",
      projectId: "kwitter1-f2749",
      storageBucket: "kwitter1-f2749.appspot.com",
      messagingSenderId: "449196534102",
      appId: "1:449196534102:web:078345e93b2ad8cbe7cef7",
      measurementId: "G-ME7BC5YGXD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logOut() {
      localStorage.removeItem("user");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}