// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDQi63rJ26bTkXjtPlPeX2I_nDteSZe7Eg",
    authDomain: "letschatapp-part-1.firebaseapp.com",
    databaseURL: "https://letschatapp-part-1-default-rtdb.firebaseio.com",
    projectId: "letschatapp-part-1",
    storageBucket: "letschatapp-part-1.appspot.com",
    messagingSenderId: "570052042513",
    appId: "1:570052042513:web:5b4955036a033b22fff6b0",
    measurementId: "G-5SXW80B7FM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name1").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose = "adding user"
  });
  localStorage.setItem("room_name", room_name);

  window.location = "LetsChatApp_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("ROOM NAME - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row; 
      //End code
      });
    });
  }
getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);

 window.location = "LetsChatApp_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "LetsChatApp.html";
}