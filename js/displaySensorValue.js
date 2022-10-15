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

let dbref_1 = ref(db,"Average Value");
onValue(dbref_1, (snapshot) => {

    temp_live_data.innerHTML = snapshot.val().temp+"&#8451;";
    soil_live_data.innerHTML = snapshot.val().soil_moisture;
    hum_live_data.innerHTML = snapshot.val().hum+"%";

    for (let i = 1; i > 0; i--) {
        let option = `<option value="${snapshot.val().temp}" selected>Average: ${snapshot.val().temp}</option>`;
        selectSensor[0].lastElementChild.insertAdjacentHTML("afterend", option);
    }
    for (let i = 1; i > 0; i--) {
        let option = `<option value="${snapshot.val().soil_moisture}" selected>Average: ${snapshot.val().soil_moisture}</option>`;
        selectSensor[1].lastElementChild.insertAdjacentHTML("afterend", option);
    }
    for (let i = 1; i > 0; i--) {
        let option = `<option value="${snapshot.val().hum}" selected>Average: ${snapshot.val().hum}</option>`;
        selectSensor[2].lastElementChild.insertAdjacentHTML("afterend", option);
    }
});

let dbref_2 = ref(db,"Sensor data");
onValue(dbref_2, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
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
