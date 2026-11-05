const formInscrir = document.forms.formInscrir
let divParticipantFound =  document.querySelector(".participantFound")
console.log(formInscrir)

function divParticipant(participant){
    return `
                    <div data-idp=${participant.id} class="flex gap-15 justify-center items-center w-70 h-25 bg-green-600 rounded-md shadow-xl divInscrirParticipant">
              
                    <div class="flex flex-col gap-5"><img src=${participant.Image} alt="${participant.name}"
                            class="w-10 h-10 rounded-full object-cover mt-2 ml-2" id="profile">   
                            </div>
                            <div>
                        <p class="font-bold">${participant.name}</p>
                        <p>${participant.pseudo}</p>
                    </div>
                    <div class="flex flex-col gap-2"><button type="button"  class=" divInscrirParticipant bg-yellow-200 rounded-md cursor-pointer">
                        <i class="divInscrirParticipant fa-solid fa-person-circle-plus"></i>
                    </button>
                    </div>
                </div>
    `
}

if(localStorage.getItem('dataPerferormances')==null){
    localStorage.setItem('dataPerferormances',JSON.stringify(dataPerferormances))
}
dataPerferormances = JSON.parse(localStorage.getItem('dataPerferormances'))


function divInscrirParticipant(){
    document.querySelector(".divInscrirParticipant").addEventListener('click',event=>{
    if(event.target.classList.contains("divInscrirParticipant")){
        inscririPartc(event)
    }
})
}



function afficherLesParticipantFound(){
    formInscrir.nomp.addEventListener('input',event=>{
        let userName = event.target.value.toLowerCase()
        console.log(userName)
        let found = participantes.find(ele=>ele.pseudo.toLowerCase() === userName)
        console.log(found)
         divParticipantFound.innerHTML = divParticipant(found)
        divInscrirParticipant()
    })
} 

function inscririPartc(event){
    let idParti  = Number(event.currentTarget.dataset.idp)
    console.log("idParti=>",idParti)
    let participantFound = participantes.find(ele=>ele.id === idParti)
    console.log("participant found=>",participantFound)
    let defi = items.find(item=> item.id == idDefiInscrir)
    let newParticipant = {
        id:Date.now(),
        idDefi:defi.id,
        idParticipant: participantFound.id,
        pseudo: participantFound.pseudo
    }
    console.log(newParticipant)
    let checkIfFound = perferormances.find(ele => ele.idParticipant === idParti && ele.idDefi == defi.id)

    if (!checkIfFound) {
        perferormances.push(newParticipant)
        console.log(perferormances)
    }
    divParticipantFound.innerHTML = ''
    formInscrir.reset()

}