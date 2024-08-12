  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  import { getAuth,
     onAuthStateChanged,
     createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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






let name = document.getElementById('name');
let fatherName = document.getElementById('father');
let email = document.getElementById('email');
let date = document.getElementById('date');
let pass = document.getElementById('Password');
let btn = document.getElementById('buton');



onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('user is Logged in');
        
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
            // console.log('user is not Logged in');
            // User is signed out
            
            // ...
        }
    });
    
    
    btn.addEventListener('click',function () {

    
        createUserWithEmailAndPassword(auth, email.value, pass.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          console.log('user==>' , user);
          window.location.href ="login.html"
          // ...

          // Clear input fields 

           name.value ='';
           fatherName.value = '';
           email.value = '';
           pass.value = '';
           date.value = '';
          //  gender.forEach(g => g.checked = false); 
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
          // ..
        });

 

    if (name.value == '' || fatherName.value == '' || email.value == '' || date.value == '' ||  pass.value == '') {
            
    alert('Please enter your Detail')
    }
    else{
        console.log(name.value);
        console.log(fatherName.value);
        console.log(email.value);
        console.log(date.value);
        console.log(pass.value);

        const gender = document.getElementsByName('gender');
        
        for (let i = 0; i < gender.length; i++) {
          if (gender[i].checked) {
              console.log('Gender:', gender[i].value);
              break;
          }
      

        }

    }
     

    if (name.value  && fatherName.value && email.value && date.value  && pass.value) {

    //  localStorage.setItem('name1', name.value)
    //  localStorage.setItem('fname1', fatherName.value)
    //  localStorage.setItem('email1', email.value)
    //  localStorage.setItem('pass1' , pass.value)
    //  localStorage.setItem('gender1', radio[i].value)



        alert('Thanks for Sign-up')
        
    }

    });


    // Password show work

    
    let image = document.getElementById('image');
    
    image.addEventListener('click', function () {
      if (pass.type == 'password') {
        pass.type = 'text'
        image.src = 'img/png-2.png'

      }else{
        pass.type = 'password'
        image.src = 'img/png-1.png'

      }
      
    })

    