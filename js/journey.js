const info = {

    "Uruguay":
        "Aquí irá una descripción completa de las investigaciones realizadas en Uruguay. Después podés reemplazar este texto por el definitivo.",

    "Antártida":
        "Aquí podrás contar la experiencia de investigación en la Base Artigas y los proyectos desarrollados.",

    "Panamá":
        "Descripción del trabajo realizado en la Estación Científica Coiba y las investigaciones marinas.",

    "Río de la Plata":
        "Explicación sobre monitoreo ambiental, indicadores ecológicos y publicaciones científicas."

};

const cards = document.querySelectorAll(".journey__card");

const modal = document.querySelector(".journey-modal");

const modalTitle = document.getElementById("modalTitle");

const modalText = document.getElementById("modalText");

const closeModal = document.querySelector(".closeModal");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        const title = card.querySelector("h3").textContent;

        modalTitle.textContent = title;

        modalText.textContent = info[title];

        modal.classList.add("active");

    });

});

closeModal.onclick=()=>{

    modal.classList.remove("active");

}

window.onclick=(e)=>{

    if(e.target==modal){

        modal.classList.remove("active");

    }

}