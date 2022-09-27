import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref,set,} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDCuiG5lLgqhBZrmn4gJgA6ULGCiV4n8_g",
    authDomain: "mrp-project-cbee3.firebaseapp.com",
    databaseURL: "https://mrp-project-cbee3-default-rtdb.firebaseio.com",
    projectId: "mrp-project-cbee3",
    storageBucket: "mrp-project-cbee3.appspot.com",
    messagingSenderId: "319350992561",
    appId: "1:319350992561:web:cc873bb3961a5c7c9f7c90",
    databaseURL: "https://mrp-project-cbee3-default-rtdb.firebaseio.com"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
let btn = document.getElementById('start-stop');
let status = document.getElementById('motor-status');

btn.addEventListener('click',()=>{
    if(btn.innerHTML === "Force Start"){
        btn.innerHTML = "Force Stop";
        status.innerHTML = "ON";
        status.style = "color:#009933";
        const reference = ref(db, 'Motor Status/');
        set(reference, {
           motor_status:true
        });
        console.log("Your Motor is ON");
    }
    else{
        btn.innerHTML = "Force Start";
        status.innerHTML = "OFF";
        status.style = "color: #ff0000";
        const reference = ref(db, 'Motor Status/');
        set(reference, {
           motor_status:false
        });
        console.log("Your Motor is OFF");
    }
});

setInterval(() => {
    if(status.innerText == 'ON')
    {
        const reference = ref(db, 'Motor Status/');
        set(reference, {
            motor_status:true
        });
    }
    else{
        const reference = ref(db, 'Motor Status/');
        set(reference, {
            motor_status:false
        });
    }
}, 1000);

let login = document.getElementById("login-btn");

login.addEventListener('click',function(e){

  location.replace('login.html');
});