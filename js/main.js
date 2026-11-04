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




function activerBoutonsmodifier(){
        document.querySelectorAll(".btnparticipants-modifier").forEach(bt=>{
            bt.addEventListener("click",()=>{
                document.getElementById("Mdfprti").classList.remove("hidden")
    


    curentID= Number(bt.dataset.id)
    const par = participantes.find(p=> p.id===curentID);

    document.getElementById("name-mdf").value =par.name
    document.getElementById("pseudo-mdf").value =par.pseudo
    document.getElementById("performance-mdf").value =par.perferormance
   

 });
})
} 
activerBoutonsmodifier()




document.getElementById("btnmdpart").addEventListener("click",(e)=>{
    e.preventDefault()
     const par = participantes.find(p=> p.id===curentID);
     par.name=document.getElementById("name-mdf").value
     par.pseudo = document.getElementById("pseudo-mdf").value
     par.perferormance=Number(document.getElementById("performance-mdf").value)
    

     document.getElementById("Mdfprti").classList.add("hidden")
     cards()
     activerBoutonsmodifier()

})



    document.getElementById("closeMdfp").addEventListener("click",()=>{
    document.getElementById("Mdfprti").classList.add("hidden")
})

  const perferormanceselecter = document.getElementById("performance-mdf")
  for (let i=1 ;i<=100 ;i++){perferormanceselecter.innerHTML += `<option value="${i}">${i}</option>`}