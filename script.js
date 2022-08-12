
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
  let cp = Array.from(document.getElementById('cp')) 
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