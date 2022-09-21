var welcomename = localStorage.getItem("username");
var completename = "<h2 style='color:black'> Welcome " + completename + "</h2>";
document.getElementById("putname").innerHTML =  completename ;
var firebaseConfig = {
    apiKey: "AIzaSyBm_GzdIfknmUAm5oNJY5ZBIFITOX-Os8k",
    authDomain: "let-s-chat-official-database.firebaseapp.com",
    databaseURL: "https://let-s-chat-official-database-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-official-database",
    storageBucket: "let-s-chat-official-database.appspot.com",
    messagingSenderId: "827949754343",
    appId: "1:827949754343:web:7d550e9ab0a58f9b42bf42",
    measurementId: "G-0D95QJJXLB"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row;
//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}