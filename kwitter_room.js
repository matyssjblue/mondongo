
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
const firebaseConfig = {
      apiKey: "AIzaSyBPQXsGUQgG6y9H-5yGPitNZtE4_WdnoCI",
      authDomain: "clase-100-10a2c.firebaseapp.com",
      projectId: "clase-100-10a2c",
      storageBucket: "clase-100-10a2c.appspot.com",
      messagingSenderId: "573937589995",
      appId: "1:573937589995:web:9095600b5bc5157c1b68ae",
      measurementId: "G-G1HJ5L8Z9S"
    };
    
    // Initialize Firebase

    const app = firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";
    
    function addRoom() {
          room_name = document.getElementById("room_name").value;
    
          firebase.database().ref("/").child(room_name).update({
                purpose: "agregando el nombre de la sala"
          });
    
          localStorage.setItem("room_name", room_name);
    
          window.location = "kwitter_page.html";
    }
    
    function getData() {
          firebase.database().ref("/").on('value', function (snapshot) {
                document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                      childKey = childSnapshot.key;
                      Room_names = childKey;
                      //Inicia el código
                      console.log("Nombre de la sala: " + Room_names);
                      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                      document.getElementById("output").innerHTML += row;
                      //Finaliza el código
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
        window.location = "index.html";
    }
    
