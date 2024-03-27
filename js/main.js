const material = [
    { id:2  , nombre:"AMARRE",artista:"RICA",img:"./imagenesFashionFilms/ElFilmRicaAmarre.webp",alt:"Portada del Fashion Film Amarre para Rica",title:"Hace click para ver el vídeo del fashion film Amarre para Rica",video:"https://www.youtube.com/embed/7eZV1UyNCXM?si=T7z0n8ucv8gw72Cx"},
    { id:3 , nombre:"CUANDO SEA GRANDE",artista:"MORA NAVARRO",img:"./imagenesClips/MoraNavarroCuandoSeaGrande.webp",alt:"Portada de la canción Cuando Sea Grande de la artista Mora Navarro",title:"Hace click para ver el vídeo de la canción Cuando Sea Grande de la artista Mora Navarro",video:"https://www.youtube.com/embed/DjG-is23KTA?si=0B57b49r9oAyFz_x"},
    { id:4  , nombre:"SUEÑO AZUL",artista:"ABISMO",img:"./imagenesClips/SuenioAzulAbismo.jpg",alt:"Portada de la canción Sueño Azul de la banda musical Abismo",title:"Hace click para ver el vídeo de la canción Sueño Azul de la banda musical Abismo",video:"https://www.youtube.com/embed/zHXOWyp7HLU?si=j48H37o7e1Sv9wIW"},
];


const cardsContainer = document.getElementById("index__cards__container"),
carouselContainer = document.getElementById("carouselExampleControls"),
containerGeneral = document.getElementById("index__container__general"),
navBar = document.querySelector(".navBar");

let div = document.createElement("div");

function abrirVideo(id){
    carouselContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    const video = material.find (r => r.id == id);
    div.innerHTML = `<div class="video__index__container">
                        <iframe src="${ video.video }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay=1 ></iframe>
                        <button type="button" id="btnCerrar" onclick="cerrarVideo()" class="btnCerrar" value="Cerrar">< Volver</button>
                    </div>
                    `
    document.body.appendChild(div)      
    
}

function cerrarVideo() {
    div.innerHTML= "";
    carouselContainer.classList.remove("desaparecer");
    navBar.classList.remove("desaparecer");
}


function mostrarMaterial() {
    for (const imagen of material) {
        const { id , nombre , img , alt, title, artista } = imagen    
        const imagenesHtml = `
        <div id="index__imagenCarrousel__container" class="carousel-item" onclick="abrirVideo(${id})">
                    <img id="index__imagen__carrousel" src="${img}"  alt="${ alt }" title="${ title }">
                    <div class="index__caption__${id}">
                        <h2 class="index__artista__titulo">${ artista }</h2>
                        <h3 class="index__cancion__titulo">${ nombre }</h3>
                    </div>
                </div>
        `


        cardsContainer.innerHTML += imagenesHtml;
    }
}

mostrarMaterial();


const carrouselItem__1 = document.querySelector(".index__carousel__container1");

let div1 = document.createElement("div1");

function abrirVideo1() {
    carouselContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    div1.innerHTML = `   <div class="video1__index__container">
                            <iframe src="https://www.youtube.com/embed/TXqQoIfnayY?si=Rgqej3mKY19oS6W7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <button type="button" id="btnCerrar" onclick="cerrarVideo1()" class="btnCerrar" value="Cerrar">< Volver</button>
                        </div>`
    document.body.appendChild(div1)
}

function cerrarVideo1() {
    div1.innerHTML = "";
    carouselContainer.classList.remove("desaparecer");
    navBar.classList.remove("desaparecer");
}

carrouselItem__1.addEventListener("click", () => {
    abrirVideo1();
})

