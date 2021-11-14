let firstColor = document.querySelector('#firstColor')
let secondColor = document.querySelector('#secondColor')
let select = document.querySelector('#select')
let body = document.querySelector('body')
let colors = [firstColor, secondColor]


function changeColor(){
    body.style.backgroundImage = `linear-gradient(${select.value}, ${firstColor.value}, ${secondColor.value})`
}

colors.forEach((color)=>{
    color.addEventListener('input',(e)=>{
        e.preventDefault()
        changeColor()
    })
})

select.addEventListener('change',(e)=>{
    e.preventDefault()
    changeColor()
})






