var firebaseConfig = {
  apiKey: "AIzaSyAjBfmM1G-Fy9hkUgTOvcoVIdLT-X_7h30",
  authDomain: "testing-auth236.firebaseapp.com",
  databaseURL: "https://testing-auth236.firebaseio.com",
  projectId: "testing-auth236",
  storageBucket: "testing-auth236.appspot.com",
  messagingSenderId: "112041743062",
  appId: "1:112041743062:web:108035d518dcd55634af77",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const signIn = () => {
  var provider = new firebase.auth.FacebookAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log(token);
      console.log(user);
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorMessage = error.message;
      console.log(error);
      console.log(errorMessage);
    });
};

const signOut = () => {
  firebase.auth().signOut().then(()=> console.log('Signed out'));
};
