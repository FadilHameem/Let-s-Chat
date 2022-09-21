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
  var user_name = localStorage.getItem("username");
  var room_name = localStorage.getItem("room_name");

  function send(){
    var msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name : user_name,
    message : msg,
    like : 0
    });
    document.getElementById("msg").value = "";
}

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}