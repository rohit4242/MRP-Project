import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { getDatabase, ref, set,update} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDCuiG5lLgqhBZrmn4gJgA6ULGCiV4n8_g",
    authDomain: "mrp-project-cbee3.firebaseapp.com",
    projectId: "mrp-project-cbee3",
    storageBucket: "mrp-project-cbee3.appspot.com",
    messagingSenderId: "319350992561",
    appId: "1:319350992561:web:cc873bb3961a5c7c9f7c90",
    databaseURL: "https://mrp-project-cbee3-default-rtdb.firebaseio.com/"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

let sing_in = document.getElementById('login');

sing_in.addEventListener('click',function (e){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
  
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 

        const user = userCredential.user;
        console.log(user);
        alert('sign-in successfully');
        const reference = ref(db, 'users/' + user.uid);
        update(reference, {
          last_login: Date.now()
        });
        location.replace("admin_page.html");

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
});
let back_btn = document.getElementById("back_btn");
back_btn.addEventListener("click",(e)=>{
  location.replace("main.html");
})