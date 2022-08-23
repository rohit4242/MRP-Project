let temp_value = document.getElementById('var-temp');

function temp_rs(value) {
    temp_value.innerHTML = value;
    console.log(temp_value.innerText);
  }
  function soil_Moisture_rs(value) {
    document.getElementById('var-soil-moisture').innerHTML = value;
  }
  function humidity_rs(value) {
    document.getElementById('var-humidity').innerHTML = value;
  }
  