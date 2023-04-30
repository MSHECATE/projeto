
const firebaseConfig = {
    apiKey: "AIzaSyAknomBL1vQg9z0Mijw2dr1lxVrIyw4SYw",
    authDomain: "kwiter-c03e7.firebaseapp.com",
    databaseURL: "https://projetecs93-naosei-default-rtdb.firebaseio.com",
    projectId: "kwiter-c03e7",
    storageBucket: "kwiter-c03e7.appspot.com",
    messagingSenderId: "158379937739",
    appId: "1:158379937739:web:2e3fc13ef359ed35c0704e"
  };
  
    firebase.initializeApp(firebaseConfig);
  
    userName = localStorage.getItem("userName");
    roomName = localStorage.getItem("roomName");

    function sed()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(roomName).push({name:userName,message:msg,like:0});
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     childData = childSnapshot.val(); if(childKey != "purpose") 
     {
       firebaseMessageId = childKey;
       messageData = childData;

//Início do código

//Fim do código
    } });  }); }
getData();
