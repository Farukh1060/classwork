let color = document.getElementById("color")
color.addEventListener("change",function(){
    console.log(color.value)
    let x = document.getElementById("dis").style = `background-color:${color.value}`
    console.log(x)

})