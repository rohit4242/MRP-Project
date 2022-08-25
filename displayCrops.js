let var_temp = document.getElementById('var-temp');
let var_soil = document.getElementById('var-soil-moisture');
let var_hum  = document.getElementById('var-humidity');
console.log("hello");

let general = {
    temp:50,
    hum:20,
    soil:100
}

let cotton = {
    temp:20,
    hum:30,
    soil:200
}
let Ground_Nut = {
    temp:30,
    hum:40,
    soil:300
}

let Pearl_Millet = {
    temp:40,
    hum:50,
    soil:400
}

// store the crops data on to localStorage 
function saveCropsValue(){
    localStorage.setItem("general",JSON.stringify(general));
    localStorage.setItem("cotton",JSON.stringify(cotton));
    localStorage.setItem("Ground_Nut",JSON.stringify(Ground_Nut));
    localStorage.setItem("Pearl_Millet",JSON.stringify(Pearl_Millet));

}
// display the crops data onto the localstorage

// function getCropValue(){
//     let general = localStorage.getItem("general");
//     let cotton = localStorage.getItem("cotton");
//     let Ground_Nut = localStorage.getItem("Ground_Nut");
//     let Pearl_Millet = localStorage.getItem("Pearl_Millet");

//     console.log(general,cotton,Ground_Nut,Pearl_Millet);
// }


function display_crops(){
    let s = document.getElementById('select-crop');
    console.log(s.value);
    if(s.value =="General")
    {
        var_temp.innerHTML = general.temp;
        var_soil.innerHTML = general.soil;
        var_hum.innerHTML = general.hum;
    }
    else if(s.value =="Cotton")
    {
        var_temp.innerHTML = cotton.temp;
        var_soil.innerHTML = cotton.soil;
        var_hum.innerHTML = cotton.hum;
    }
    else if(s.value =="Ground Nut")
    {
        var_temp.innerHTML = Ground_Nut.temp;
        var_soil.innerHTML = Ground_Nut.soil;
        var_hum.innerHTML = Ground_Nut.hum;
    }    
    else if(s.value =="Pearl Millet")
    {
        var_temp.innerHTML = Pearl_Millet.temp;
        var_soil.innerHTML = Pearl_Millet.soil;
        var_hum.innerHTML = Pearl_Millet.hum;
    }    
    else{
        console.log("Please select the crops");
    }
}
saveCropsValue();
// getCropValue()