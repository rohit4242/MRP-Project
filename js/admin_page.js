
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref, onValue, push, set, update } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

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

let name = document.getElementById('Name');
let temp = document.getElementById('temprature');
let hum = document.getElementById('hum');
let soil = document.getElementById('soil');
// let select_tag = document.getElementById('select-crop');
let update_btn = document.getElementById('update');


let z = document.getElementById('controls');
z.addEventListener('click', (e) => {
  var x = document.getElementById('control');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
});

let addbtn = document.getElementById('addNew');
addbtn.addEventListener('click', (e) => {

  console.log('hello');
  const reference = ref(db, 'crops/' + name.value);
  set(reference, {
    name: name.value,
    temp: temp.value,
    hum: hum.value,
    soil: soil.value
  });
  alert('Your Crop is Added');
  let rm = document.getElementById('modal_body');
  rm.reset();
});
update_btn.addEventListener('click', (e) => {
  let var_temp = document.getElementById('var-temp');
  let var_soil = document.getElementById('var-soil-moisture');
  let var_hum = document.getElementById('var-humidity');
  let crop_name = document.getElementById('select-crop').value;
  console.log(crop_name);
  printValueOnInput(crop_name,var_temp.innerText, var_hum.innerText, var_soil.innerText);

});

function printValueOnInput(name1, temp1, hum1, soil1) {
  name.value = name1;
  temp.value = temp1;
  hum.value = hum1;
  soil.value = soil1;
}