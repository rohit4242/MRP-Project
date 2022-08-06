function startStop()
{
    let btn = document.getElementById('start-stop');
    let status = document.getElementById('motor-status');

    if(btn.innerHTML === "START"){
        btn.innerHTML = "STOP";
        status.innerHTML = "ON";
        status.style = "color: green;";
    }
    else{
        btn.innerHTML = "START";
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