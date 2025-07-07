<<<<<<< HEAD
let slider = document.getElementsByClassName('slider')
let rbtn = document.getElementById('rgt')
let lft = document.getElementById('lft')
console.log(slider)
// debugger
let i = 0
function chang() {
  for (let j = 0; j < slider.length; j++) {
    if (i == j) {
      slider[j].style.cssText = 'display: block;transform: translateX(-50%)'
      // i++;
    } else {
      slider[j].style.cssText = 'opacity:0;transform: translateX(0%)'
    }
  }
}
chang()

rbtn.addEventListener('click', function () {
  if (i >= 3) {
    i = 0
  } else {
    i++
  }
  chang()
})

lft.addEventListener('click', function () {
  if (i <= 0) {
    i = 3
  } else {
    i--
  }
  chang()
})
// function start() {
//   let clr_int = setInterval(function () {
//     if (i >= 3) {
//       i = 0
//     } else {
//       i++
//     }
//     chang()
//   }, 1000)
//   rbtn.addEventListener('mouseenter', function () {
//     clearInterval(clr_int)
//   })
//   lft.addEventListener('mouseenter', function () {
//     clearInterval(clr_int)
//   })
// }
start() ;
rbtn.addEventListener('mouseleave', function () {
  start();
})
lft.addEventListener('mouseleave', function () {
  start();
})
=======
let slider = document.getElementsByClassName('slider')
let rbtn = document.getElementById('rgt')
let lft = document.getElementById('lft')
console.log(slider)
// debugger
let i = 0
function chang() {
  for (let j = 0; j < slider.length; j++) {
    if (i == j) {
      slider[j].style.cssText = 'display: block;transform: translateX(-50%)'
      // i++;
    } else {
      slider[j].style.cssText = 'opacity:0;transform: translateX(0%)'
    }
  }
}
chang()

rbtn.addEventListener('click', function () {
  if (i >= 3) {
    i = 0
  } else {
    i++
  }
  chang()
})

lft.addEventListener('click', function () {
  if (i <= 0) {
    i = 3
  } else {
    i--
  }
  chang()
})
// function start() {
//   let clr_int = setInterval(function () {
//     if (i >= 3) {
//       i = 0
//     } else {
//       i++
//     }
//     chang()
//   }, 1000)
//   rbtn.addEventListener('mouseenter', function () {
//     clearInterval(clr_int)
//   })
//   lft.addEventListener('mouseenter', function () {
//     clearInterval(clr_int)
//   })
// }
start() ;
rbtn.addEventListener('mouseleave', function () {
  start();
})
lft.addEventListener('mouseleave', function () {
  start();
})
>>>>>>> origin/main
