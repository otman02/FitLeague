// kat9alb ila makanch chi defi f localstorage ila makanch kat3amro
if (localStorage.getItem('defi') === null) {
    localStorage.setItem('defi', JSON.stringify(defis))
}
// kanjibo les defi 
let items = JSON.parse(localStorage.getItem("defi"))
// kantrbohm 3la hsab date jdid howa lewl
const trieDefi = () => { items.sort((firstDate, secondDate) => new Date(secondDate.datefine) - new Date(firstDate.datefine)) }
console.log(items)
// kanjibo id li kbir howa li kanbdaq bih bach maykonch id m3awd
let config = {
    id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 0
}


let containerDefi = document.querySelector(".conatinerDefi")
let ajouterForm = document.forms.formDefi
let MdfFrom = document.forms.modifierDefi
let statusDeForm = document.querySelector(".statusDeForm")
let defiAjout;
let idDefi;


// kat9ad status ta3 defi 3la hsab date
function verifierStatus(defi) {
    let dateFin = new Date(defi.datefine)
    let now = new Date()
    let status = 'en cours'
    if (dateFin < now) {
        status = 'terminer'
    }
    return status
}

// hna kandiro push ldik status li l9ina fi tableau ta3 defi li kaync f localstorage
function modifierItemsStatus() {
    items.forEach(item => {
        if (verifierStatus(item) === "en cours") {
            item.status = "en cours"
        }
        if (verifierStatus(item) === "terminer") {
            item.status = "terminer"
        }
    })
    localStorage.setItem('defi', JSON.stringify(items))
    items = JSON.parse(localStorage.getItem("defi"))
    console.log("modifier status=>", items)
    
}
affichageDefi()
modifierItemsStatus()


// __________________Ajouter Defi_________________________________
document.querySelector(".btnAjout").addEventListener('click', event => {
    event.preventDefault()
    if (validation() == true) {
        items.push(defiAjout)
        config.id += 1
        localStorage.setItem('defi', JSON.stringify(items))
        affichageDefi()
        window.alert("Le defi cree avec succee!")
        document.getElementById("nvdefi").classList.add("hidden")
        ajouterForm.reset()
    } else {
        window.alert("Valider votre information!")
    }
})



function divDefi(defi) {

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
                    class="inscririPartc bg-gray-200 rounded-full px-3 py-1 text-md text-green-700 mt-4 cursor-pointer" ${defi.status === 'terminer' ? 'disabled ':''} data-id-defi="${defi.id}">
                    Inscrir
                    <i class="fa-solid fa-person-circle-plus"></i>
                </button>
                <span id="status" class=" ${defi.status == "en cours" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"} rounded-full px-3 py-1 text-md mt-4 ">
                    ${defi.status}
                </span>
            </div>
        </div>
    `
}


function affichageDefi() {
    trieDefi()
    modifierItemsStatus()
    containerDefi.innerHTML = ''
    let div = ''
    items.forEach(item => {
        div += divDefi(item)
    })
    
    containerDefi.innerHTML = div
    
}

function containerDefiEvent(conatiner) {
    conatiner.addEventListener('click', event => {
        supprimerDefi(event);
        modifierDefi(event);
        afficherFormAjoutPart(event)
    })
}
containerDefiEvent(containerDefi)

// Ajouter Defi
function validation() {
    let path = "C:\\Users\\Youcode\\Desktop\\FitLeague\\public\\"
    console.log("path=>", path)
    let nom = ajouterForm.defi.value
    let sport = ajouterForm.sport.value
    let objectif = ajouterForm.objectif.value
    let dateFin = ajouterForm.dateFin.value
    let description = ajouterForm.description.value
    let image = ajouterForm.image.value.replace("C:\\fakepath\\", path)
    console.log("image=>", image);


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
            image: image,
            target: objectif,
            datefine: dateFin
        }
        console.log("defi ajouter=>", defiAjout)
        return true
    }
}



function supprimerDefi(event) {
    if (event.target.classList.contains('deleteDefi')) {
        if (window.confirm("Supprimer le defi!")) {
            let card = event.target.closest('.defi')
            idDefi = Number(card.dataset.idDefi)
            let index = items.findIndex(item => item.id == idDefi)
            if (index !== -1) {
                items.splice(index, 1)
                localStorage.setItem('defi', JSON.stringify(items))
                affichageDefi()
                defiDeBord()
            }
        }
    }

}


let index;
function modifierDefi(event) {

    if (event.target.classList.contains("editDefi")) {
        document.querySelector('.modifoerDefi').classList.remove("hidden")
        let card = event.target.closest('.defi')
        let idDefi = Number(card.dataset.idDefi)
        index = items.findIndex(item => item.id == idDefi)
        let defi = items.find(item => item.id == idDefi)

        console.log("modifier", defi)
        MdfFrom.defi.value = defi.nom
        MdfFrom.sport.value = defi.sport
        MdfFrom.objectif.value = defi.target
        MdfFrom.dateFin.value = defi.datefine
        MdfFrom.description.value = defi.descreption
    }
}

document.querySelector(".btnMdf").addEventListener('click', event => {
    event.preventDefault()
    if (index !== -1) {
        items[index].nom = MdfFrom.defi.value
        items[index].sport = MdfFrom.sport.value
        items[index].target = MdfFrom.objectif.value
        items[index].datefine = MdfFrom.dateFin.value
        items[index].descreption = MdfFrom.description.value
        localStorage.setItem('defi', JSON.stringify(items))
        document.querySelector('.modifoerDefi').classList.add("hidden")
        modifierItemsStatus()
        affichageDefi()
        defiDeBord()

    }
})



// RecherCher defi

document.getElementById("searchDefi").addEventListener("input", event => {
    let containerNotFound = document.querySelector(".notFound")
    let inputValue = event.currentTarget.value.toLowerCase()
    let defisFound = items.filter(item => item.nom.toLowerCase() == inputValue)
    if (defisFound.length > 0) {
        containerDefi.innerHTML = ''
        defisFound.forEach(defi => {
            containerDefi.innerHTML += divDefi(defi)
        })
        containerNotFound.textContent = ""
    } else if (inputValue == "") {
        containerNotFound.textContent = ""
        affichageDefi()
    } else {
        containerDefi.innerHTML = ''
        containerNotFound.textContent = "Il n'y a aucun resultat 😢"
    }

})




// Ajouter participant sur le defi

let idDefiInscrir;
function afficherFormAjoutPart(event) {
    // btnInsciptionParticipant.addEventListener('click',event=>{
    //     document.querySelector(".formAjouterPArticiapnt").classList.remove('hidden')
    // })

    // document.getElementById("closeAjoutePart").addEventListener('click',event=>{
    //     document.querySelector(".formAjouterPArticiapnt").classList.add('hidden')
    // })
    if (event.target.classList.contains('inscririPartc')) {
        idDefiInscrir = Number(event.target.dataset.idDefi)
        document.querySelector(".formAjouterPArticiapnt").classList.remove('hidden')
        afficherLesParticipantFound()
    }
}