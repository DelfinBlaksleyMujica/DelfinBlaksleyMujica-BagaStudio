const material = [
    {id:1,nombre:"EN UNA",artista:"CAMILA BUCH",img:"../imagenesClips/1camibuch.jpg"/*,video:"../videosEnBaja/CamiBuch&MoraNavarroEnUna.mp4"*/},
    {id:2,nombre:"NO SÉ",artista:"NIÑO ETC",img:"../imagenesClips/2-ninoetc.jpg"/*,video:"../videosEnBaja/NinioEtc.mp4"*/}, 
    {id:4 ,nombre:"617",artista:"MUJER CEBRA",img:"../imagenesClips/4-mujercebra.jpg"/*,video:"../videosEnBaja/MujerCebra616.mp4"*/},
    {id:5 ,nombre:"SILLÓN FREY",artista:"ESTUDIO TÉ",img:"../imagenesClips/5-estudiote.jpg"/*, video:"../videosEnBaja/SillonFrey.mp4"*/},
    {id:6,nombre:"CERTEZAS",artista:"MORA NAVARRO",img:"../imagenesClips/6-certezas.jpg"/*,video:"../videosEnBaja/MoraNavarroCertezas.mp4"*/},
    {id:7,nombre:"AGUJAS",artista:"PACO X WEREN",img:"../imagenesClips/7- agujas.jpg"/*,video:"../videos/PacoWerenAgujas.mp4"*/},
    {id:8,nombre:"PEDRO RAUL",artista:"JERO JONES",img:"../imagenesClips/8-jerojones.jpg"/*,video:"../videos/JeroJonesPedroRaul.mp4"*/},
    {id:9 ,nombre:"LA BRISA",artista:"PRADKIN",img:"../imagenesClips/9-brisa.jpg"/*,video:"../videos/PradkinLaBrisa.mp4"*/},
    {id:10 ,nombre:"VAN AL CIELO",artista:"MARINA WILL",img:"../imagenesClips/10-marinawill.jpg"/*,video:"../videos/MarinaWilVanAlCielo.mp4"*/},
    {id:11,nombre:"ALBEDRIO",artista:"PACO",img:"../imagenesClips/11-albedrio.jpg"/*,video:"../videos/PacoAlbedrio.mp4"*/},
    ];


const imagenesContainer = document.getElementById("imagenes__container"),
cuerpo = document.querySelector(".cuerpo"),
navBar = document.querySelector(".navBar"),
worksContainer = document.querySelector(".works__container"),
redesMobileImg = document.querySelector(".logo__insatagramMobile__footer"),
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
    redesMobileImg.classList.add("desaparecer");
    const video = material.find (r => r.id == id);
    div.innerHTML = `<div class="video__container">
                        <video src="${video.video} " controls autoplay></video>
                        <button type="button" id="btnCerrar" onclick="cerrarVideo()" class="btnCerrar" value="Cerrar">x</button>
                    </div>
                    `
    document.body.appendChild(div)      
    
}




function mostrarMaterial(){
    for (const imagen of material) {
        const { id , nombre , img , artista } = imagen
        const imagenesHtml = `
        <div class="card__container"  onclick="abrirVideo(${id})">
            <div class="imagen__container">
                <img src="${img}">
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

