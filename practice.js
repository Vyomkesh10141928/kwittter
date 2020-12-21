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



function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}