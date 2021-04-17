
function add_user(){
    username = document.getElementById("user_name").value;
    localStorage.setItem("username", username);
    window.location = "kwitter_hub.html";
}