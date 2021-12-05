const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const span = document.querySelector('span')

const colorFlipper = () => {
    let colorArr = ["yellow", "brown", "red", "rgba(0,124,15,0.1)"]
    body.style.backgroundColor = colorArr[Math.floor(Math.random() * colorArr.length)]
} 

