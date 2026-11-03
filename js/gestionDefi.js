if (localStorage.getItem('defi') === null) {
    localStorage.setItem('defi', JSON.stringify(defis))
}
let items = JSON.parse(localStorage.getItem("defi"))
items.sort((firstDate, secondDate)=> new Date(secondDate.datefine) - new Date(firstDate.datefine) )
console.log(items)
let config = {
    id: items.length
}

let containerDefi = document.querySelector(".conatinerDefi")
let btn = document.querySelector(".btn")
let form = document.forms.formDefi
let MdfFrom = document.forms.modifierDefi
let statusDeForm = document.querySelector(".statusDeForm")
let defiAjout;

affichageDefi()
document.querySelector(".btnAjout").addEventListener('click', e => {
    e.preventDefault()
    if (validation() == true) {
        items.push(defiAjout)
        localStorage.setItem('defi',JSON.stringify(items))
        affichageDefi()
        window.alert("Le defi cree avec succee!")
        document.getElementById("nvdefi").classList.add("hidden")
        form.reset()
    }else{
        window.alert("Valider votre information!")
    }
})


function divDefi(defi) {
    let dateFin = new Date(defi.datefine)
    let now = new Date()
    let status = 'en cours'
    if (dateFin < now) {
        status = 'terminer'
    }
    return `
        <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4 defi" data-id-defi="${defi.id}">
            <img class="w-md h-56 object-cover" src="${defi.image}" alt="${defi.sport}">
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Nom:<span class="text-orange-600">${defi.nom}</span></div>
                <div class="font-bold text-md mb-2">${defi.sport}</div>
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2">Objectif
                    ${defi.target}</span>
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2">fin
                    date: ${defi.datefine}</span>
                <p class="text-gray-700 text-base">
                    ${defi.descreption}
                </p>
                <button
                    class="editDefi bg-gray-200 rounded-full px-3 py-1 text-md text-blue-700 mt-4 cursor-pointer">
                    <i class="editDefi fa-solid fa-pen-to-square"></i>
                </button>
                <button 
                    class="deleteDefi bg-gray-200 rounded-full px-3 py-1 text-md text-red-700 mt-4 cursor-pointer">
                    <i class="deleteDefi fa-solid fa-trash"></i>
                </button>
                <button
                    class="inscririPartc bg-gray-200 rounded-full px-3 py-1 text-md text-green-700 mt-4 cursor-pointer">
                    Inscrir
                    <i class="fa-solid fa-person-circle-plus"></i>
                </button>
                <span id="status" class=" ${status == "en cours" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"} rounded-full px-3 py-1 text-md mt-4 ">
                    ${status}
                </span>
            </div>
        </div>
    `
}


function affichageDefi() {
    containerDefi.innerHTML = ''
    let div = ''
    items.forEach(ele => {
        div += divDefi(ele)
    })
    containerDefi.innerHTML = div
    fDefi()
    // select()
}




// Ajouter Defi



function validation() {
    let nom = form.defi.value
    let sport = form.sport.value
    let objectif = form.objectif.value
    let dateFin = form.dateFin.value
    let description = form.description.value
    let image = form.image.value

    if (nom == "" || sport == "" || objectif == "" || dateFin == "" || description == "" || image == "") {
        document.querySelector(".statusDeForm").classList.add("bg-red-300")
        document.querySelector(".statusDeForm").textContent = "invalid Input"
        return false
    }
    else {
        statusDeForm.classList.remove("bg-red-300")
        document.querySelector(".statusDeForm").textContent = ""
        defiAjout = {
            id: config.id,
            nom: nom,
            sport: sport,
            descreption: description,
            image: form.image.src,
            target: objectif,
            datefine: dateFin
        }
        config.id += 1
        return true
    }
}





function fDefi() {
    document.querySelectorAll(".defi").forEach((ele) => {
        ele.addEventListener('click', e => {
            supprimerDefi(e)
            modifierDefi(e) 
        })
    })
}

function supprimerDefi(e) {
    if (e.target.classList.contains('deleteDefi')) {
        if (window.confirm("Supprimer le defi!")) {
            let idDefi = Number(e.currentTarget.dataset.idDefi)
            let index = items.findIndex(ele => ele.id == idDefi)
            if (index !== -1) {
                items.splice(index, 1)
                localStorage.setItem('defi',JSON.stringify(items))
                affichageDefi()
            }
        }
    }
    
}


function modifierDefi(e) {
    if(e.target.classList.contains("editDefi")){
        document.querySelector('.modifoerDefi').classList.remove("hidden")
        let idDefi = Number(e.currentTarget.dataset.idDefi)
        let index = items.findIndex(ele=> ele.id == idDefi)
        let defi = items.find(ele=>ele.id == idDefi)
        MdfFrom.defi.value = defi.nom
        MdfFrom.sport.value = defi.sport
        MdfFrom.objectif.value = defi.target
        MdfFrom.dateFin.value = defi.datefine
        MdfFrom.description.value = defi.descreption
        
        document.querySelector(".btnMdf").addEventListener('click',e=>{
            e.preventDefault()
            if(index !== -1){
                items[index].nom = MdfFrom.defi.value
                items[index].sport = MdfFrom.sport.value
                items[index].target = MdfFrom.objectif.value
                items[index].datefine = MdfFrom.dateFin.value
                items[index].descreption = MdfFrom.description.value
                localStorage.setItem('defi',JSON.stringify(items))
                document.querySelector('.modifoerDefi').classList.add("hidden")
                affichageDefi()
            }
        })
    }
}




// RecherCher defi

document.getElementById("searchDefi").addEventListener("input",e=>{
    let containerNotFound = document.querySelector(".notFound")
    let inputValue = e.currentTarget.value.toLowerCase()
    let defi = items.filter(ele=> ele.nom.toLowerCase() == inputValue)
    if(defi.length > 0 ){
        containerDefi.innerHTML = ''
        defi.forEach(ele=>{
            containerDefi.innerHTML += divDefi(ele)
        })
        containerNotFound.textContent  = ""
    }else if(inputValue == ""){
        containerNotFound.textContent  = ""
        affichageDefi()
    }else{
        containerDefi.innerHTML = ''
        containerNotFound.textContent = "Il n'y a aucun resultat 😢"
    }
    fDefi()
})
