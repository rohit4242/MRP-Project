import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref,onValue} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

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



let var_temp = document.getElementById('var-temp');
let var_soil = document.getElementById('var-soil-moisture');
let var_hum  = document.getElementById('var-humidity');

let select_crops = document.getElementById('select-crop');

function AddNewOption(nameOfCrop){
    let option = document.createElement('option');
    option.innerHTML = nameOfCrop;
    select_crops.appendChild(option);
}

function AddAllItemToSelection(crops){
    select_crops.innerHTML = "";

    crops.forEach(element => {
        AddNewOption(element.name);
        // console.log(element.name);
    });
}

function GetAllDataRealtime(){
    let dbref = ref(db,"crops");

    onValue(dbref, (snapshot) => {

        let crops = [];
        snapshot.forEach((childSnapshot) => {
            crops.push(childSnapshot.val());
            console.log(crops);
          // ...
        });
        AddAllItemToSelection(crops);
    })
}

window.onload = GetAllDataRealtime();