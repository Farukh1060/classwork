<<<<<<< HEAD
let inp = document.getElementById('inp')
let ent = document.getElementById('ent')
let list = document.getElementById('list')
let val = document.getElementById('val')
// debugger
ent.addEventListener('click', function () {
  if (inp.value != '') {
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let li = document.createElement('li')
    div1.appendChild(li)
    div1.className = 'to_do_container'
    list.appendChild(div1)
    li.innerHTML += inp.value
    inp.value = " "
    div1.appendChild(div2)
    div2.className = 'icon'
    let i = document.createElement('i')
    let j = document.createElement('i')
    div2.appendChild(i)
    i.className = 'fa-regular fa-circle-check'
    div2.appendChild(j)
    j.className = 'fa-regular fa-trash-can'

    // let tik = document.querySelectorAll('.fa-circle-check')
    // let del = document.querySelectorAll('.fa-trash-can')
    // let par = document.querySelectorAll('to_do_container')
   
    i.addEventListener('click', function () {
      i.classList.toggle('done')
    })

    j.addEventListener('click', function () {
      list.removeChild(div1)
    })
  }
})




















// let to_do = document.getElementById('to_do')
// to_do.setAttribute('style', 'display:none')
// ent.addEventListener('click', function () {
//   to_do.setAttribute('style', 'display:block')
//   list.appendChild(to_do)
//   val.innerText  = inp.value
// console.log(list.appendChild(to_do))
// })
=======
let inp = document.getElementById('inp')
let ent = document.getElementById('ent')
let list = document.getElementById('list')
let val = document.getElementById('val')
// debugger
ent.addEventListener('click', function () {
  if (inp.value != '') {
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let li = document.createElement('li')
    div1.appendChild(li)
    div1.className = 'to_do_container'
    list.appendChild(div1)
    li.innerHTML += inp.value
    inp.value = " "
    div1.appendChild(div2)
    div2.className = 'icon'
    let i = document.createElement('i')
    let j = document.createElement('i')
    div2.appendChild(i)
    i.className = 'fa-regular fa-circle-check'
    div2.appendChild(j)
    j.className = 'fa-regular fa-trash-can'

    // let tik = document.querySelectorAll('.fa-circle-check')
    // let del = document.querySelectorAll('.fa-trash-can')
    // let par = document.querySelectorAll('to_do_container')
   
    i.addEventListener('click', function () {
      i.classList.toggle('done')
    })

    j.addEventListener('click', function () {
      list.removeChild(div1)
    })
  }
})




















// let to_do = document.getElementById('to_do')
// to_do.setAttribute('style', 'display:none')
// ent.addEventListener('click', function () {
//   to_do.setAttribute('style', 'display:block')
//   list.appendChild(to_do)
//   val.innerText  = inp.value
// console.log(list.appendChild(to_do))
// })
>>>>>>> origin/main
