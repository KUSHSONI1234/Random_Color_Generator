// console.log("hello world")
// // // document.body.style.backgroundColor="red"

// // let boxes=document.getElementsByClassName("box")
// // console.log(boxes)

// // boxes[2].style.backgroundColor="red"

// // document.getElementById("red").style.backgroundColor="red"
// // document.querySelectorAll(".box").style.backgroundColor="green"
// document.querySelectorAll(".box").forEach(e =>{
//     // console.log(e)
//     e.style.backgroundColor="green";
//     e.style.color="white"
// })

// let e=document.getElementsByTagName("div")
// console.log(e)
// // e.matches
// e[2].matches("box")
// console.log(e)

// document.getElementsByClassName()
// let boxes=document.getElementsByClassName("box")
// console.log(boxes)
let boxes=document.querySelector(".container").children
function getRandomColor()
{
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 = Math.ceil(0+Math.random()*255);
    let val3 = Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}


Array.from(boxes).forEach(e =>{
    // console.log(e)
    e.style.backgroundColor=getRandomColor()
    e.style.color=getRandomColor()
})