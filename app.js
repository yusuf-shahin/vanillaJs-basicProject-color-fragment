// Bismillahir Rahmanir Rahim

const upSide = document.getElementById(`up-side`) ;
const downSide = document.getElementById(`down-side`) ;
const btn = document.getElementById(`btn`) ;

const hex = `123456789ABCDEF` ;

btn.addEventListener(`click`, () => {
    let hexColorUp = `#` ;
    for (let i = 0 ; i < 6 ; i++) {
        hexColorUp += hex[Math.floor(Math.random() * hex.length )] 
    }
    upSide.style.backgroundColor = hexColorUp ;
    
    let hexColorBottom = `#` ;
    for (let i = 0 ; i < 6 ; i++){
        hexColorBottom += hex[Math.floor(Math.random() * hex.length)]
    }

    downSide.style.backgroundColor = hexColorBottom  ;
   
})