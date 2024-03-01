const fashionFilms = [
    {id:1 , nombre:"SILLÓN FREY",artista:"ESTUDIO TE",img:"../imagenesFashionFilms/5-estudiote.jpg",alt:"Portada del Fashion Film Sillón Frey para Estudio Té",title:"Hace click para ver el vídeo del fashion film Sillón Frey para Estudio Té", video:"../videos/SillonFrey.mp4"},
    {id:2  , nombre:"AMARRE",artista:"RICA",img:"../imagenesFashionFilms/ElFilmRicaAmarre.webp",alt:"Portada del Fashion Film Amarre para Rica",title:"Hace click para ver el vídeo del fashion film Amarre para Rica",video:"../videos/TotoBakanEncanto.mp4"},
]


const imagenesContainer = document.getElementById("imagenes__container"),
cuerpo = document.querySelector(".cuerpo"),
navBar = document.querySelector(".navBar"),
worksContainer = document.querySelector(".works__container"),
redesMobileImg = document.querySelector(".logo__insatagramMobile__footer"),
workRedesContainer = document.querySelector(".works__redesMobile__container"),
nombresDeArtistasContainer = document.querySelector(".works__nombresDeArtistas__container");

let div = document.createElement("div");

function cerrarVideo() {
    div.innerHTML = "";
    navBar.classList.remove("desaparecer");
    nombresDeArtistasContainer.classList.remove("desaparecer");
    worksContainer.classList.remove("noMargin");
    worksContainer.classList.remove("desaparecer");
    redesMobileImg.classList.remove("desaparecer");
    mostrarMaterial();
    
}

function abrirVideo(id){
    imagenesContainer.innerHTML = "";
    
    navBar.classList.add("desaparecer");
    worksContainer.classList.add("desaparecer");
    worksContainer.classList.add("noMargin");
    nombresDeArtistasContainer.classList.add("desaparecer");
    workRedesContainer.classList.add("desaparecer");
    redesMobileImg.classList.add("desaparecer");
    const video = fashionFilms.find (r => r.id == id);
    div.innerHTML = `<div class="video__container">
                        <video src="${video.video} " controls autoplay></video>
                        <button type="button" id="btnCerrar" onclick="cerrarVideo()" class="btnCerrar" value="Cerrar">< Volver</button>
                    </div>
                    `
    document.body.appendChild(div)      
    
}




function mostrarMaterial(){
    for (const imagen of fashionFilms) {
        const { id , nombre , img , alt , title, artista } = imagen
        const imagenesHtml = `
        <div class="card__container"  onclick="abrirVideo(${id})">
            <div class="imagen__container">
                <img src="${img}" alt="${ alt }" title="${ title }">
            </div>
            <div class="card__info">
                <h3>${ artista }</h3>
                <h4>${ nombre }</h4>
            </div>
        </div>`

    imagenesContainer.innerHTML += imagenesHtml
    }
}

mostrarMaterial();

