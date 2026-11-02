let participants = document.querySelector("#partici")
cards()


function cards(){participantes.forEach(par=> participants.innerHTML += card(par))}




 function image(Image,name ,perferormance){


    return  `           
               
                    <div class="flex flex-col gap-5"><img src=${Image} alt="${name}"
                            class="w-10 h-10 rounded-full object-cover mt-2 ml-2">  
                            <p class="ml-5 font-bold" >${perferormance}</p>
                            
                            </div>
                
                 
                `
 }

 function content(name,pseudo){

    return `            <div>
                        <p class="font-bold">${name}</p>
                        <p>${pseudo}</p>
                    </div>
                    <div class="flex flex-col gap-2"><button id="mod-part" class=" btnparticipants-modifier bg-yellow-200 rounded-md cursor-pointer"><i
                                class="fa-solid fa-pen-to-square"></i></button><button
                            class="bg-red-500 rounded-md cursor-pointer"><i
                                class="fa-solid fa-trash"></i></button><button
                            class="bg-green-100 cursor-pointer rounded-md"><i class="fa-solid fa-eye"></i></button>
                    </div>
                `
 }

 function card(par){
    return `
            <div class="flex gap-15 justify-center items-center w-70 h-25 bg-green-600 rounded-md shadow-xl">
               ${image(par.Image,par.name,par.perferormance)}
               ${content(par.name,par.pseudo)}
                </div>
    
    `
 }


  const perferormanceselecter = document.getElementById("perfor")
  for (let i=1 ;i<=100 ;i++){perferormanceselecter.innerHTML += `<option value="${i}">${i}</option>`}





// <div class="flex gap-15 justify-center items-center w-90 h-25 bg-green-600 rounded-md shadow-xl">
//                     <div><img src="assets/marvels-spider-man-3840x2160-11990.jpeg" alt="otman"
//                             class="w-10 h-10 rounded-full object-cover mt-2 ml-2"></div>
//                     <div>
//                         <p class="font-bold">otman hannoun</p>
//                         <p>mrxma</p>
//                     </div>
//                     <div class="flex flex-col gap-2"><button class="bg-yellow-200 rounded-md cursor-pointer"><i
//                                 class="fa-solid fa-pen-to-square"></i></button><button
//                             class="bg-red-500 rounded-md cursor-pointer"><i
//                                 class="fa-solid fa-trash"></i></button><button
//                             class="bg-green-100 cursor-pointer rounded-md"><i class="fa-solid fa-eye"></i></button>
//                     </div>
//                 </div>

