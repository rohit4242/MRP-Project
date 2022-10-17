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

const selectSensor = document.getElementsByClassName("select_sensor"),
    displayTempSensor = document.getElementById("display_temp_sensor"),
    displaySoilMoistureSensor = document.getElementById("display-soilMoisture-sensor"),
    displayHumiditySensor = document.getElementById("display-humidity-sensor"),
    temp_live_data = document.getElementById("temp_live_data"),
    soil_live_data = document.getElementById("soil_live_data"),
    hum_live_data = document.getElementById("hum_live_data");

// let dbref_1 = ref(db,"Average Value");
// onValue(dbref_1, (snapshot) => {

//     selectSensor[0].lastChild.remove(0);
//     selectSensor[1].lastChild.remove(0);
//     selectSensor[2].lastChild.remove(0);

//     for (let i = 1; i > 0; i--) {
//         let option = `<option value="${snapshot.val().temp}" selected>Average: ${snapshot.val().temp}</option>`;
//         selectSensor[0].lastElementChild.insertAdjacentHTML("afterend", option);
//     }
//     for (let i = 1; i > 0; i--) {
//         let option = `<option value="${snapshot.val().soil_moisture}" selected>Average: ${snapshot.val().soil_moisture}</option>`;
//         selectSensor[1].lastElementChild.insertAdjacentHTML("afterend", option);
//     }
//     for (let i = 1; i > 0; i--) {
//         let option = `<option value="${snapshot.val().hum}" selected>Average: ${snapshot.val().hum}</option>`;
//         selectSensor[2].lastElementChild.insertAdjacentHTML("afterend", option);
//     }
// });

let dbref_1 = ref(db,"Sensor data");
let temp_avg,hum_avg,soil_avg,
temp_avg_array = [],
hum_avg_array = [],
soil_avg_array = [];
onValue(dbref_1,(snapshot) =>{
    snapshot.forEach((childSnapshot) =>{
        
        temp_avg_array.push(childSnapshot.val().temp);
        hum_avg_array.push(childSnapshot.val().hum);
        soil_avg_array.push(childSnapshot.val().soil_moisture);
        // console.log(hum_avg_array);
        temp_avg = Average(temp_avg_array);
        hum_avg = Average(hum_avg_array);
        soil_avg = Average(soil_avg_array);

        temp_live_data.innerHTML = temp_avg+"&#8451;";
        soil_live_data.innerHTML = soil_avg;
        hum_live_data.innerHTML = hum_avg+"%";

        console.log("Average Values");
        console.log(temp_avg);
        console.log(hum_avg);
        console.log(soil_avg);

        // selectSensor[0].innerHTML = "";
        // selectSensor[1].innerHTML = "";
        // selectSensor[2].innerHTML = "";
        selectSensor[0].options.length = 0;
        selectSensor[1].options.length = 0;
        selectSensor[2].options.length = 0;

        selectSensor[0].options[selectSensor[0].options.length] = new Option(`Average: ${temp_avg}`,`${temp_avg}`);
        selectSensor[1].options[selectSensor[1].options.length] = new Option(`Average: ${soil_avg}`,`${soil_avg}`);
        selectSensor[2].options[selectSensor[2].options.length] = new Option(`Average: ${hum_avg}`,`${hum_avg}`);

        // for (let i = 1; i > 0; i--) {
        //     let option = `<option value="${temp_avg}" selected>Average: ${temp_avg}</option>`;
        //     selectSensor[0].append(option);
        // }
        // for (let i = 1; i > 0; i--) {
        //     let option = `<option value="${soil_avg}" selected>Average: ${soil_avg}</option>`;
        //     selectSensor[1].firstChild.insertAdjacentHTML("afterend", option);
        // }
        // for (let i = 1; i > 0; i--) {
        //     let option = `<option value="${hum_avg}" selected>Average: ${hum_avg}</option>`;
        //     selectSensor[2].firstChild.insertAdjacentHTML("afterend", option);
        // }
    });
});

let dbref_2 = ref(db,"Sensor data");
onValue(dbref_2, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        console.log(childSnapshot.val());

        for (let i = 1; i > 0; i--) {
            let option = `<option value="${childSnapshot.val().temp}">${childSnapshot.val().name}: ${childSnapshot.val().temp}&#8451;</option>`;
            selectSensor[0].lastElementChild.insertAdjacentHTML("afterend", option);
        }
        for (let i = 1; i > 0; i--) {
            let option = `<option value="${childSnapshot.val().soil_moisture}">${childSnapshot.val().name}: ${childSnapshot.val().soil_moisture}</option>`;
            selectSensor[1].lastElementChild.insertAdjacentHTML("afterend", option);
        }
        for (let i = 1; i > 0; i--) {
            let option = `<option value="${childSnapshot.val().hum}">${childSnapshot.val().name}: ${childSnapshot.val().hum}&#37;</option>`;
            selectSensor[2].lastElementChild.insertAdjacentHTML("afterend", option);
        }
    });
});


displayTempSensor.addEventListener('change',()=>{
    console.log(displayTempSensor.value);
    temp_live_data.innerHTML = displayTempSensor.value+"&#8451;";
});
displaySoilMoistureSensor.addEventListener('change',()=>{
    console.log(displaySoilMoistureSensor.value);
    soil_live_data.innerHTML = displaySoilMoistureSensor.value;
});
displayHumiditySensor.addEventListener('change',()=>{
    console.log(displayHumiditySensor.value);
    hum_live_data.innerHTML = displayHumiditySensor.value+"%";
});

function Average(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return Math.floor(sum / numbers.length);
}