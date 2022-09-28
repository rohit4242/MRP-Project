import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref,set,update,onValue} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

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

const currentTime = document.getElementById("current_time"),
content = document.querySelector(".content"),
selectMenu = document.getElementsByClassName("select_time"),
setAlarmBtn = document.querySelector("button");

let alarmTime, isAlarmSet,temp;

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 10; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[3].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime === `${h}:${m} ${ampm}`) {
        let status = document.getElementById('motor-status');
        status.innerHTML = "ON";
        status.style = "color:#009933";
    }

    if (temp == `${h}:${m} ${ampm}`) {
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Timer";
        let status = document.getElementById('motor-status');
        status.innerHTML = "OFF";
        status.style = "color:#ff0000";
    }
},1000);

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Timer";
        let status = document.getElementById('motor-status');
        status.innerHTML = "OFF";
        status.style = "color:#ff0000";
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Timer!");
    }
    alarmTime = time;
    let time_limits = selectMenu[3].value;
    let minute = (parseInt(selectMenu[1].value)+parseInt(time_limits));
    let hour = (parseInt(selectMenu[0].value));
    minute = minute < 10 ? "0" + minute : minute;
    hour = hour < 10 ? "0" + hour : hour;
    if(minute >=60){
       minute = minute - 60;
       minute = minute < 10 ? "0" + minute : minute;
       if(hour == 12){
            hour = 1;
            hour = hour < 10 ? "0" + hour : hour;
       }
       else{
        hour++;
       }
    }
    console.log(typeof(hour));
    let trigger_1 = minute.toString();
    let trigger_2 = hour.toString();
    temp = `${trigger_2}:${trigger_1} ${selectMenu[2].value}`;
    console.log(temp);
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Timer";
    var date = new Date();
	var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	var date_time = current_date+" "+current_time;
    const reference = ref(db, 'Motor Status/'+date_time);
    update(reference, {
       Starting_Time:alarmTime,
       Ending_Time:temp
    });
    console.log("Your Record is added");

}

setAlarmBtn.addEventListener("click", setAlarm);

// const reference = ref(db, 'Motor Status/');
// onValue(reference, (snapshot) => {
//     const data = snapshot.val();
//     console.log(data.isTimeSeted);
    
//     if(data.isTimeSeted == true){
//         return
//     }
//     else{
//         setAlarmBtn.addEventListener("click", setAlarm);
//     }
// })
