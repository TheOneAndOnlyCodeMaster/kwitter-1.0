//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDy9zoP60HEUXFkW-Yl_MOuQF0ecR_D7IA",
      authDomain: "kwitter-72c5d.firebaseapp.com",
      databaseURL: "https://kwitter-72c5d-default-rtdb.firebaseio.com",
      projectId: "kwitter-72c5d",
      storageBucket: "kwitter-72c5d.appspot.com",
      messagingSenderId: "1063806479057",
      appId: "1:1063806479057:web:d47f276ebf664e5679b3f0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    room_Name = localStorage.getItem("room_name");
    user_Name = localStorage.getItem("username");
function getData() { firebase.database().ref("/"+room_Name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(message_data);
console.log(firebase_message_id);
name_u = message_data['name'];
message = message_data['message'];
likes = message_data['likes'];

name_tag = "<h4>"+name_u+"<img class='user_tick' src='tick.png'> </h4>";
message_tag = "<h4 class='message_h4'>"+message+"</h4>";
likes_button = "<button class='btn btn-warning' id='"+ firebase_message_id+"' value='"+likes+"' onclick='updatelike(this.id)'>"
span_tag = "<span class='glyphicon glyphicon-thumbs-up'> Likes:"+likes+"</span></button><hr>";
row = name_tag+message_tag+likes_button+span_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_Name).push({
      name: user_Name,
      message: msg,
      likes: 0
})
document.getElementById("msg").value = "";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location = "index.html";
}
      getData();
function updatelike(message_id){
console.log("clicked on the like button"+message_id);
button_id = message_id;
like = document.getElementById(button_id).value;
console.log("number of likes= "+like);
updated_likes = Number(like)+1;
console.log(updated_likes);
firebase.database().ref(room_Name).child(message_id).update({
      likes: updated_likes
})
}
