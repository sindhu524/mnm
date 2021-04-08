
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyCYf71joo0ToXzacCSn3UawVd8THL9W7KY",
  authDomain: "kwitter01-94667.firebaseapp.com",
  databaseURL: "https://kwitter01-94667-default-rtdb.firebaseio.com",
  projectId: "kwitter01-94667",
  storageBucket: "kwitter01-94667.appspot.com",
  messagingSenderId: "1051100880288",
  appId: "1:1051100880288:web:1e990cebda59369b5158c5",
  measurementId: "G-KCCP2NDN2X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
