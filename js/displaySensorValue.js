const selectSensor = document.getElementsByClassName("select_sensor"),
    displayTempSensor = document.getElementById("display_temp_sensor"),
    displaySoilMoistureSensor = document.getElementById("display-soilMoisture-sensor"),
    displayHumiditySensor = document.getElementById("display-humidity-sensor");

for (let i = 4; i > 0; i--) {
    let option = `<option value="sensor${i}">Sensor ${i}: ${i+30}&#8451;</option>`;
    selectSensor[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 4; i > 0; i--) {
    let option = `<option value="sensor${i}">Sensor ${i}: ${i+40}</option>`;
    selectSensor[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 4; i > 0; i--) {
    let option = `<option value="sensor${i}">Sensor ${i}: ${i+800}</option>`;
    selectSensor[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

displayTempSensor.addEventListener('change',()=>{
    let selectedValue = displayTempSensor.option[displayTempSensor.selectedIndex].text;
    console.log(selectedValue);
});
// .addEventListener('onchange',()=>{
//     let selectedValue = displayTempSensor.option[displayTempSensor.selectedIndex].innerText;
//     console.log(selectedValue);
// })

// function getSoilMoistureValue(){
//     let selectedValue = displaySoilMoistureSensor.value;
//     console.log(selectedValue);
// }


// function getHumidityValue(){
//     let selectedValue = displayHumiditySensor.value;
//     console.log(selectedValue);
// }