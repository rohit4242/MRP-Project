
function startStop()
{
    let btn = document.getElementById('start-stop');
    let status = document.getElementById('motor-status');

    if(btn.innerHTML === "Force Start"){
        btn.innerHTML = "Force Stop";
        status.innerHTML = "ON";
        status.style = "color: #00cc99;";
    }
    else{
        btn.innerHTML = "Force Start";
        status.innerHTML = "OFF";
        status.style = "color: red;";
    }
}

function switchMode(){
  let btn = document.getElementById('switch-mode');
  let range1 = document.getElementById("range1");
  let range2 = document.getElementById("range2");
  let range3 = document.getElementById("range3");
  let cp = document.getElementById('cp');
  if(btn.innerHTML === "Switch To Manual Mode")
  {
    btn.innerHTML = "Switch To Automatic Mode";
    document.getElementById('current-preset').innerHTML = "Recommended Preset";
    range1.disabled = true;
    range2.disabled = true;
    range3.disabled = true;
    range1.style.display = 'none';
    range2.style.display = 'none';
    range3.style.display = 'none';
    cp.style.paddingTop = '30px';
  }
  else{
    btn.innerHTML = "Switch To Manual Mode";
    document.getElementById('current-preset').innerHTML = "Current Preset";
    range1.disabled = false;
    range2.disabled = false;
    range3.disabled = false;
    range1.style.display = 'block';
    range2.style.display = 'block';
    range3.style.display = 'block';
    cp.style.paddingTop = '0';


  }
}

function temp_rs(value) {
  document.getElementById('var-temp').innerHTML = value;
}
function soil_Moisture_rs(value) {
  document.getElementById('var-soil-moisture').innerHTML = value;
}
function humidity_rs(value) {
  document.getElementById('var-humidity').innerHTML = value;
}

let temp_live_data = document.getElementById("temp_live_data");
let hum_live_data = document.getElementById("hum_live_data");
let soil_live_data = document.getElementById("soil_live_data");

function field1()
{
  fetch('https://api.thingspeak.com/channels/1833491/fields/field1/last.txt?api_key=7D92ULX6128DMIYA')
  .then((response) => response.json())
  .then((data) => temp_live_data.innerHTML = ' '+data+' C');
}

function field2()
{
  fetch('https://api.thingspeak.com/channels/1833491/fields/field2/last.txt?api_key=7D92ULX6128DMIYA')
  .then((response) => response.json())
  .then((data) => hum_live_data.innerHTML = ' '+data+'%');
}

function field3()
{
  fetch('https://api.thingspeak.com/channels/1833491/fields/field3/last.txt?api_key=7D92ULX6128DMIYA')
  .then((response) => response.json())
  .then((data) => soil_live_data.innerHTML = ' '+data);
}
field1();
field2();
field3();
