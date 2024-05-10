const material = [
    {id:1  , nombre:"CAMARÓN REMIX",artista:"JUKU ARES FT. COTI",img:"./imagenesClips/JukuFtCotiCamaron.webp",alt:"Portada de la canción Camarón de los artistas Juku Ares y Coti",title:"Hace click para ver el vídeo de la canción Camarón de los artistas Juku Ares y Coti",video:"https://www.youtube.com/embed/TXqQoIfnayY?si=Rgqej3mKY19oS6W7"},
    { id:2  , nombre:"AMARRE",artista:"RICA",img:"./imagenesFashionFilms/ElFilmRicaAmarre.webp",alt:"Portada del Fashion Film Amarre para Rica",title:"Hace click para ver el vídeo del fashion film Amarre para Rica",video:"https://www.youtube.com/embed/2PolrMkvN8Q?si=dlmS6EngSXCf-KEo" },
    { id:3 , nombre:"CUANDO SEA GRANDE",artista:"MORA NAVARRO",img:"./imagenesClips/MoraNavarroCuandoSeaGrande.jpg",alt:"Portada de la canción Cuando Sea Grande de la artista Mora Navarro",title:"Hace click para ver el vídeo de la canción Cuando Sea Grande de la artista Mora Navarro",video:"https://www.youtube.com/embed/DjG-is23KTA?si=0B57b49r9oAyFz_x"},
    { id:4  , nombre:"SUEÑO AZUL",artista:"ABISMO",img:"./imagenesClips/SuenioAzulAbismo.jpg",alt:"Portada de la canción Sueño Azul de la banda musical Abismo",title:"Hace click para ver el vídeo de la canción Sueño Azul de la banda musical Abismo",video:"https://www.youtube.com/embed/zHXOWyp7HLU?si=j48H37o7e1Sv9wIW" },
];


const cardsContainer = document.getElementById("index__cards__container"),
cardsContainerResponsive = document.querySelector(".index__responsiveCardsContainer__section"),
cardsResponsiveContainer = document.querySelector(".index__responsiveImg__section"),
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

function abrirVideoResponsive(id){
    cardsResponsiveContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    const video = material.find (r => r.id == id);
    div.innerHTML = `<div class="video__index__container">
                        <iframe src="${ video.video }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay=1 ></iframe>
                        <button type="button" id="btnCerrar" onclick="cerrarVideoResponsive()" class="btnCerrar" value="Cerrar">< Volver</button>
                    </div>
                    `
    document.body.appendChild(div)      
}

function cerrarVideoResponsive() {
    div.innerHTML= "";
    cardsResponsiveContainer.classList.remove("desaparecer");
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
});

function mostrarMaterialResponsive() {
    for (const cancion of material) {
        const { id , nombre , img , alt, title, artista } = cancion    
        const imagenesHtml = `
                <div class="index__responsiveElementContainer__${ id }" onclick="abrirVideoResponsive(${id})">
                    <img id="index__imagenIndex__mobile" src="${ img }"  title="${ title }"  alt="${ alt }">
                    <div class="index__responsiveCaption__${ id } animate__animated animate__fadeIn">
                        <h2 class="index__artista__responsiveTitulo">${ nombre }</h2>
                        <h3 class="index__cancion__responsiveTitulo">${ artista }</h3>
                    </div>
                </div>
        `

        cardsContainerResponsive.innerHTML += imagenesHtml;
    }
}

mostrarMaterialResponsive();


const carrouselResponsiveItem__1 = document.querySelector(".index__responsiveElementContainer__1");

let div1Responsive = document.createElement("div1Responsive");

function abrirVideo1Responsive() {
    cardsResponsiveContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    div1Responsive.innerHTML = `<div class="video1__index__container">
                                    <iframe src="https://www.youtube.com/embed/G6MyWa1yqFU?si=b3EZtqlkJ5qO8A6b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <button type="button" id="btnCerrar" onclick="cerrarVideo1Responsive()" class="btnCerrar" value="Cerrar">< Volver</button>
                                </div>`
    document.body.appendChild( div1Responsive )
}

function cerrarVideo1Responsive() {
    div1Responsive.innerHTML = "";
    cardsResponsiveContainer.classList.remove("desaparecer");
    navBar.classList.remove("desaparecer");
}

carrouselResponsiveItem__1.addEventListener("click", () => {
    abrirVideo1Responsive();
});