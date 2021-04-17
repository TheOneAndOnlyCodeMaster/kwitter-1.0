
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDy9zoP60HEUXFkW-Yl_MOuQF0ecR_D7IA",
      authDomain: "kwitter-72c5d.firebaseapp.com",
      databaseURL: "https://kwitter-72c5d-default-rtdb.firebaseio.com",
      projectId: "kwitter-72c5d",
      storageBucket: "kwitter-72c5d.appspot.com",
      messagingSenderId: "1063806479057",
      appId: "1:1063806479057:web:d47f276ebf664e5679b3f0"
    };

    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names"+Room_names);
      row = "<div class='room_name' id='"+Room_names+"' onclick='next_page(this.id)'> #"+Room_names +" </div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
user_name = localStorage.getItem("username");
console.log(user_name);
document.getElementById("user_name").innerHTML = "Welcome "+ user_name+"!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function next_page(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
window.location =  "index.html";
localStorage.removeItem("username");
localStorage.removeItem("room_name");
}

