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




  document.getElementById("ajouter-participant").addEventListener("click",()=>{
    document.getElementById("ajouter").classList.remove("hidden")
  })

  document.getElementById("close-ajourte").addEventListener("click",()=>{
    document.getElementById("ajouter").classList.add("hidden")
  })

   const perferormance = document.getElementById("performance")
  for (let j=1 ;j<=100 ;j++){perferormance .innerHTML += `<option value="${j}">${j}</option>`}



//ajouter des participants

function ajouterparticipants(){
       document.getElementById("button-ajouter").addEventListener("click",(event)=>{
  event.preventDefault()
let nom = document.getElementById("name").value
let user_name=document.getElementById("pseudo").value
let performancee = document.getElementById("performance").value


let new_paricipant ={
                 name : nom,
                 pseudo: user_name ,               
                 Image: "assets/spider-man-marvel-6000x4000-11025.jpg",
                 perferormance:performancee 
                 
 }


 participantes.push(new_paricipant)
 document.getElementById("ajouter").classList.add("hidden")
 cards()
 
  



 })
}
  ajouterparticipants( )





function suprimerparticipants(){
    
  document.querySelectorAll(".button-suprimer").forEach(button=>{
    button.addEventListener("click",(e)=>{
        if(window.confirm("Supprimer participant!")){
            ID = Number(button.dataset.id)
            let indexparticip= participantes.findIndex(part=>part.id == ID)
            participantes.splice(indexparticip,1)
            cards()
            suprimerparticipants()
            activerBoutonsmodifier()
        }


        
    })
  })
} suprimerparticipants()
