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
    })
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

select_crops.onchange = function(){
    let sleectedvalue = this.value;
    console.log(sleectedvalue);
}
let z = document.getElementById('controls');
z.addEventListener('click',(e)=>{
    var x = document.getElementById('control');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
});
   
let addbtn = document.getElementById('demo');
addbtn.addEventListener('click',(e)=> {

    console.log('hello');
    let name = document.getElementById('Name').value;
    let temp = document.getElementById('temprature').value;
    let hum = document.getElementById('hum').value;
    let soil = document.getElementById('soil').value;

    if(validate_field(name,temp,hum,soil) == true){
        alert('Please Fill the all inputs');
        return
    }
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


function validate_field(f1,f2,f3,f4){
    if(f1 == null){
        return false;
    }
    if(f2 == null){
        return false;
    }
    if(f3 == null){
        return false;
    }
    if(f4 == null){
        return false;
    }
}

