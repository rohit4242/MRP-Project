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

function mode(){
    var x = document.getElementById("card-cp");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";

  }
}