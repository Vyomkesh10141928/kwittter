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
//YOUR FIREBASE LINKS

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";

}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function logOut() {
      localStorage.removeItem("user");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

function updateLike(message_id) {
      console.log("Clicked on like button -" + message_id );
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            Like: updated_likes
      });
}