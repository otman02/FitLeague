document.getElementById("new-defis").addEventListener('click',e=>{
    document.getElementById("nvdefi").classList.remove("hidden")
})

document.getElementById("closeDefi").addEventListener('click',e=>{
    document.getElementById("nvdefi").classList.add("hidden")
})



document.getElementById("closeMdf").addEventListener('click',e=>{
    document.querySelector(".modifoerDefi").classList.add("hidden")
})



let btnsShowTop = document.querySelectorAll(".btn-show-top3")

btnsShowTop.forEach(ele=>{
    ele.addEventListener('click',e=>{
        document.getElementById("top3-container").classList.remove("hidden")
    })
})

document.getElementById("close-top3").addEventListener('click',e=>{
    document.getElementById("top3-container").classList.add("hidden")
})

 const btnparticipantmdf= document.querySelectorAll(".btnparticipants-modifier")

 btnparticipantmdf.forEach(bt=>{bt.addEventListener("click",()=>{ document.getElementById("Mdfprti").classList.remove("hidden")})})



document.getElementById("closeMdfp").addEventListener("click",()=>{
    document.getElementById("Mdfprti").classList.add("hidden")
})



// les liens


document.querySelector('.headerLiens').addEventListener('click',event=>{
    if(event.target.classList.contains("lienTableauBord")) {
        document.querySelector(".mainTableauBord").classList.remove("hidden")
        document.querySelector(".mainDefi").classList.add("hidden")
        document.querySelector(".mainParticepent").classList.add("hidden")
    }
    
    if(event.target.classList.contains("lienDefi")){
        document.querySelector(".mainTableauBord").classList.add("hidden")
        document.querySelector(".mainDefi").classList.remove("hidden")
        document.querySelector(".mainParticepent").classList.add("hidden")
    }
    if(event.target.classList.contains("lienParticipantent")){
        document.querySelector(".mainTableauBord").classList.add("hidden")
        document.querySelector(".mainDefi").classList.add("hidden")
        document.querySelector(".mainParticepent").classList.remove("hidden")
    }
})