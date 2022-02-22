var firebaseConfig = {
    apiKey: "AIzaSyCuLeS5CYUpkJfaBAe1tBZ1EEHN5On3ht4",
    authDomain: "classtestc93.firebaseapp.com",
    databaseURL: "https://classtestc93-default-rtdb.firebaseio.com",
    projectId: "classtestc93",
    storageBucket: "classtestc93.appspot.com",
    messagingSenderId: "246714829287",
    appId: "1:246714829287:web:18724624378d66c10e9542"
  };
  
  
   firebase.initializeApp(firebaseConfig);

  function addUser(){
    user_name = document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({ 
        purpose : "Adding User"
    });

  }
