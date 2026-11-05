// Afficher les defis en cours
let containerBordDefiEncours = document.querySelector(".conatinerBordDefiEncours")


function defiDeBord(){
    containerBordDefiEncours.innerHTML = ''
    let defisEncour = items.filter(item=> item.status == "en cours")
    let div = ''
    defisEncour.forEach(defi => {
        div += divDefi(defi)
    })
    containerBordDefiEncours.innerHTML = div
}
defiDeBord()
containerDefiEvent(containerBordDefiEncours)

