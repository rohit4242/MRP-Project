
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref,onValue,push,set,update} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

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

let z = document.getElementById('controls');
z.addEventListener('click',(e)=>{
    var x = document.getElementById('control');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
});
   
let addbtn = document.getElementById('demo');
addbtn.addEventListener('click',(e)=> {

    console.log('hello');
    let name = document.getElementById('Name').value;
    let temp = document.getElementById('temprature').value;
    let hum = document.getElementById('hum').value;
    let soil = document.getElementById('soil').value;

    const reference = ref(db, 'crops/'+name);
    set(reference, {
        name: name,
        temp: temp,
        hum: hum,
        soil:soil
    });
    alert('Your Crop is Added');
    let rm = document.getElementById('modal_body');
    rm.reset();
});



