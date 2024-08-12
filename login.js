    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
    import { getAuth,
       onAuthStateChanged,
       createUserWithEmailAndPassword,
      signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDY3zwoBy9HfpsugbaS8BJbE4c-wf5BAl4",
      authDomain: "batch-11-3191d.firebaseapp.com",
      projectId: "batch-11-3191d",
      storageBucket: "batch-11-3191d.appspot.com",
      messagingSenderId: "1087219169012",
      appId: "1:1087219169012:web:5b0babdb382fa5bddb90a1",
      measurementId: "G-P1PS3T51ZB"
    };
  
    // Initialize Firebase
   const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
   const auth = getAuth(app);
  

   

   
onAuthStateChanged(auth, (user) => {
  if (user) {
      console.log('user is Logged in');
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
          console.log('user is not Logged in');
          // User is signed out
          
          // ...
      }
  });
  




let email = document.getElementById('Email');
let password = document.getElementById('Password');
let btn = document.getElementById('btn-login');

// let user1 = localStorage.getItem('email1')
// let user2 = localStorage.getItem('pass1')


btn.addEventListener('click' , function () {
    
    console.log("email" ,  email.value);
    console.log("password" ,  password.value);
    
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('User');
    window.location.href = 'dashboard.html'

    // Clear input feilds
       email.value = '';
       password.value = '';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    
  });







if (email.value && password.value ) {
    

  //   if (email.value == user1 && password.value == user2) {
  //      alert('Your Account ha been logend')
  //      console.log(email.value);
  //      console.log(password.value);
       
       


  //  }else{
  //      alert('incorrect email and password')
  //  }


}else{
    alert('Please fill in all fields to login.')
}


    
});



let image = document.getElementById('image');
    
    image.addEventListener('click', function () {
      if (password.type == 'password') {
        password.type = 'text'
        image.src = 'img/png-2.png'

      }else{
        password.type = 'password'
        image.src = 'img/png-1.png'

      }
      
    })

    