//TUS ENLACES DE FIREBASE
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
    function send()
{msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    document.getElementById("msg").value=";"
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inicia código

//Termina código
      } });  }); }
getData();