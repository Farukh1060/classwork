$(document).ready(function(){
    let i = 0;
   let slider =  $(".slider") 
function chang() {
  for (let j = 0; j < slider.length; j++) {
    if (i == j) {
      slider[j].style.cssText = 'display: block;'
      // i++;
    } else {
      slider[j].style.cssText = 'display: none;'
    }
  }
}
chang()

$("#rgt").click(function(){
  if (i >= 3) {
    i = 0
  } else {
    i++
  }
  chang()
})

$("#lft").click(function(){
  if (i <= 0) {
    i = 3
  } else {
    i--
  }
  chang()

})

function start() {
  let clr_int = setInterval(function () {
    if (i >= 3) {
      i = 0
    } else {
      i++
    }
    chang()
  }, 1000)

  $("#rgt").mouseenter(function(){
    clearInterval(clr_int)
  })

 $("#lft").mouseenter(function(){
    clearInterval(clr_int)
  })
  
}
start() ;

$("#rgt").mouseleave(function(){
  start();
})


$("#lft").mouseleave(function(){
  start();
})







})