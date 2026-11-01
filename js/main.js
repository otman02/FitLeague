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