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
// console.log("hello");

// let general = {
//     temp:50,
//     hum:20,
//     soil:100
// }

// let cotton = {
//     temp:20,
//     hum:30,
//     soil:200
// }
// let Ground_Nut = {
//     temp:30,
//     hum:40,
//     soil:300
// }

// let Pearl_Millet = {
//     temp:40,
//     hum:50,
//     soil:400
// }

// // store the crops data on to localStorage 
// function saveCropsValue(){
//     localStorage.setItem("general",JSON.stringify(general));
//     localStorage.setItem("cotton",JSON.stringify(cotton));
//     localStorage.setItem("Ground_Nut",JSON.stringify(Ground_Nut));
//     localStorage.setItem("Pearl_Millet",JSON.stringify(Pearl_Millet));

// }

// function display_crops(){
//     let s = document.getElementById('select-crop');
//     console.log(s.value);
//     if(s.value =="General")
//     {
//         var_temp.innerHTML = general.temp;
//         var_soil.innerHTML = general.soil;
//         var_hum.innerHTML = general.hum;
//     }
//     else if(s.value =="Cotton")
//     {
//         var_temp.innerHTML = cotton.temp;
//         var_soil.innerHTML = cotton.soil;
//         var_hum.innerHTML = cotton.hum;
//     }
//     else if(s.value =="Ground Nut")
//     {
//         var_temp.innerHTML = Ground_Nut.temp;
//         var_soil.innerHTML = Ground_Nut.soil;
//         var_hum.innerHTML = Ground_Nut.hum;
//     }    
//     else if(s.value =="Pearl Millet")
//     {
//         var_temp.innerHTML = Pearl_Millet.temp;
//         var_soil.innerHTML = Pearl_Millet.soil;
//         var_hum.innerHTML = Pearl_Millet.hum;
//     }    
//     else{
//         console.log("Please select the crops");
//     }
// }
// saveCropsValue();
// getCropValue()
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
    });
}

function GetAllDataRealtime(){
    let dbref = ref(db,"crops");

    onValue(dbref, (snapshot) => {

        let crops = [];
        snapshot.forEach((childSnapshot) => {
            crops.push(childSnapshot.val());
            console.log(crops);
            crops.forEach((c) =>{
                select_crops.onclick = (event) =>{
                    event.preventDefault();
                    let index = select_crops.selectedIndex;
                    console.log(index);
                }
                
            })
          // ...
        });
        AddAllItemToSelection(crops);
    })
}

window.onload = GetAllDataRealtime();