let hr = document.getElementById("hours")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let AP = document.getElementById("AP")
function refer(){
    let date = new Date()
    hr.innerHTML = date.getHours()
    min.innerHTML = date.getMinutes()
    sec.innerHTML = date.getSeconds()
    if(hr.innerHTML>=12){
        AP.innerHTML ="PM"
    }else{
        AP.innerHTML ="AM"

    }
    return false
}

setInterval(refer,1)