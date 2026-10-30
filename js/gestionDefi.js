let config = {
    id : 0
}

let containerDefi = document.querySelector(".conatinerDefi")
affichageDefi()


function divDefi(defi) {
    let dateFin = new Date(defi.datefine)
    let now = new Date()
    let status = 'en cour'
    if (dateFin < now) {
        status = 'terminer'
    }
    return `
        <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4" data-id-defi="${defi.id}">
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
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button 
                    class="deleteDefi bg-gray-200 rounded-full px-3 py-1 text-md text-red-700 mt-4 cursor-pointer">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <button
                    class="inscririPartc bg-gray-200 rounded-full px-3 py-1 text-md text-green-700 mt-4 cursor-pointer">
                    Inscrir
                    <i class="fa-solid fa-person-circle-plus"></i>
                </button>
                <span id="status" class=" ${status == "en cour" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"} rounded-full px-3 py-1 text-md mt-4 ">
                    ${status}
                </span>
            </div>
        </div>
    `
}


function affichageDefi() {
    containerDefi.innerHTML = ''
    let div = ''
    defis.forEach(ele => {
        div += divDefi(ele)
    })


    containerDefi.innerHTML = div
}




// Ajouter Defi

let form = document.forms.formDefi
let statusDeForm = document.querySelector(".statusDeForm")
let defiAjout;

function validation() {
    let nom = form.defi.value
    let sport = form.sport.value
    let objectif = form.objectif.value
    let dateFin = form.dateFin.value
    let description = form.description.value
    let image = form.image.value

    if(nom == "" || sport == "" || objectif == "" || dateFin == "" || description == ""|| image ==""){
        document.querySelector(".statusDeForm").classList.add("bg-red-300") 
        document.querySelector(".statusDeForm").textContent= "invalid Input"
        return false
    }
    else {
        statusDeForm.classList.remove("bg-red-300")
        document.querySelector(".statusDeForm").textContent= ""
        defiAjout = {
            id: config.id++,
            nom : nom,
            sport: sport,
            descreption: description,
            image:image,
            target: objectif,
            datefine: dateFin
        }
        config.id +=1
        return true
    }
}
// console.log(validation())

let btn = document.querySelector(".btn")
function ajouterDefi(){
    
        document.querySelector(".btnAjout").addEventListener('click',e=>{
            e.preventDefault()
            
                if(validation() == true){
                    defis.push(defiAjout)
                    affichageDefi()
                    console.log(defis)
                }

                form.reset()
        })
    
}
ajouterDefi()