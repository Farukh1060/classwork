<<<<<<< HEAD
let slider = document.getElementsByClassName("slider");
for(let j= 1;j<slider.length;j++){

    slider[j].style.cssText ="display: none;"
}
let  i =1;
setInterval(function(){
    if(i>3){
        i =0;
        slider[i].style.cssText ="display: block;"
        i++;
    }else if(i<0){
        i=3;
        slider[i].style.cssText ="display: block;"

    }
    
=======
let slider = document.getElementsByClassName("slider");
for(let j= 1;j<slider.length;j++){

    slider[j].style.cssText ="display: none;"
}
let  i =1;
setInterval(function(){
    if(i>3){
        i =0;
        slider[i].style.cssText ="display: block;"
        i++;
    }else if(i<0){
        i=3;
        slider[i].style.cssText ="display: block;"

    }
    
>>>>>>> origin/main
},2000)