let main = document.querySelector("main")
let turn = true

main.addEventListener("click",()=>{
    if(turn){
        main.classList.add("green")
        turn = false
    }else{
        main.classList.remove("green")
        turn = true
    }
})