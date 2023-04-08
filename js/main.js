const material = [
    {id:2,nombre:"NO SÉ SOLTAR",artista:"NIÑO ETC",img:"./imagenesClips/2-ninoetc.jpg",video:"./videosEnBaja/NinioEtc.mp4"}, 
    {id:3,nombre:"CHICO BUARQUE",artista:"JUKU ARES",img:"./imagenesIndex/3-juku.jpg",video:"./videosEnBaja/JukuAresChicoBuarque.mp4"},
    {id:4 ,nombre:"617",artista:"MUJER CEBRA",img:"./imagenesClips/4-mujercebra.jpg",video:"./videosEnBaja/MujerCebra616.mp4"},
    {id:5 ,nombre:"SILLÓN FREY",artista:"ESTUDIO TÉ",img:"./imagenesClips/5-estudiote.jpg", video:"./videosEnBaja/SillonFrey.mp4"},
    {id:6,nombre:"CERTEZAS",artista:"MORA NAVARRO",img:"./imagenesClips/6-certezas.jpg",video:"./videosEnBaja/MoraNavarroCertezas.mp4"},
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
                        //<video src="${video.video} " controls autoplay></video>
                        <button type="button" id="btnCerrar" onclick="cerrarVideo()" class="btnCerrar" value="Cerrar">x</button>
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
        const { id , nombre , img , artista } = imagen    
        const imagenesHtml = `
        <div id="index__imagenCarrousel__container" class="carousel-item" >
                    <img id="index__imagen__carrousel" src="${img}"  alt="...">
                    <div class="index__caption__${id}" onclick="abrirVideo(${id})">
                        <h2 class="index__artista__titulo">${ artista }</h2>
                        <h3 class="index__cancion__titulo">${ nombre }</h3>
                    </div>
                </div>
        `


        cardsContainer.innerHTML += imagenesHtml;
    }
}

mostrarMaterial();


const carrouselItem__1 = document.getElementById("carrouselItem__1");

let div1 = document.createElement("div1");

function abrirVideo1() {
    carouselContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    div1.innerHTML = `   <div class="video1__index__container">
                            <video src="./videosEnBaja/CamiBuch&MoraNavarroEnUna.mp4" controls autoplay ></video>
                            <button type="button" id="btnCerrar" onclick="cerrarVideo1()" class="btnCerrar" value="Cerrar">x</button>
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


/*const carrouselItem__1 = document.getElementById("carrouselItem__1"),
carrouselItem__2 = document.getElementById("carrouselItem__2"),
carrouselItem__3 = document.getElementById("carrouselItem__3"),
carrouselItem__4 = document.getElementById("carrouselItem__4"),
carrouselItem__5 = document.getElementById("carrouselItem__5"),
carrouselItem__6 = document.getElementById("carrouselItem__6"),
carrouselItem__7 = document.getElementById("carrouselItem__7"),
navBar = document.querySelector(".navbar"),
cuerpoIndex = document.querySelector(".cuerpo"),
cardsContainer = document.getElementById("carouselExampleControls");

*/
/*Video pop up en la pimer imagen del carrousel*/

/*
let div1 = document.createElement("div1");

function abrirVideo1() {
    cardsContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    cuerpoIndex.classList.remove("cuerpo");
    div1.innerHTML = `   <div class="video__container__index">
                            <video src="./videos/Cami Buch & Mora Navarro - En Una.mp4" controls autoplay ></video>
                            <button type="button" id="btnCerrar" onclick="cerrarVideo1()" class="btnCerrar" value="Cerrar">x</button>
                        </div>`
    document.body.appendChild(div1)
}

function cerrarVideo1() {
    div1.innerHTML = "";
    navBar.classList.remove("desaparecer");
    cardsContainer.classList.remove("desaparecer");
    cuerpoIndex.classList.add("cuerpo");
}

carrouselItem__1.addEventListener("click", () => {
    abrirVideo1();
})
*/

/*Video pop up en la segunda imagen del carrousel*/
/*
let div2 = document.createElement("div2");

function abrirVideo2() {
    cardsContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    cuerpoIndex.classList.remove("cuerpo");
    div2.innerHTML = `   <div class="video__container__index">
                            <video src="./videos/Niño Etc. - No Se Soltar.mp4" controls autoplay ></video>
                            <button type="button" id="btnCerrar" onclick="cerrarVideo2()" class="btnCerrar" value="Cerrar">x</button>
                        </div>`
    document.body.appendChild(div2)
}

function cerrarVideo2() {
    div2.innerHTML = "";
    navBar.classList.remove("desaparecer");
    cardsContainer.classList.remove("desaparecer");
    cuerpoIndex.classList.add("cuerpo");
}

carrouselItem__2.addEventListener("click", () => {
    abrirVideo2();
})
*/
/*Video pop up en la tercera imagen del carrousel*/
/*
let div3 = document.createElement("div3");

function abrirVideo3() {
    cardsContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    cuerpoIndex.classList.remove("cuerpo");
    div3.innerHTML = `   <div class="video__container__index">
                            <video src="./videos/video3.mp4" controls autoplay ></video>
                            <button type="button" id="btnCerrar" onclick="cerrarVideo3()" class="btnCerrar" value="Cerrar">x</button>
                        </div>`
    document.body.appendChild(div3)
}

function cerrarVideo3() {
    div3.innerHTML = "";
    navBar.classList.remove("desaparecer");
    cardsContainer.classList.remove("desaparecer");
    cuerpoIndex.classList.add("cuerpo");
}

carrouselItem__3.addEventListener("click", () => {
    abrirVideo3();
})
*/


/*Video pop up en la cuarta imagen del carrousel*/
/*
let div4 = document.createElement("div4");

function abrirVideo4() {
    cardsContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    cuerpoIndex.classList.remove("cuerpo");
    div4.innerHTML = `   <div class="video__container__index">
                            <video src="./videos/Juku Ares - Chico Buarque V5.mp4" controls autoplay ></video>
                            <button type="button" id="btnCerrar" onclick="cerrarVideo4()" class="btnCerrar" value="Cerrar">x</button>
                        </div>`
    document.body.appendChild(div4)
}

function cerrarVideo4() {
    div4.innerHTML = "";
    navBar.classList.remove("desaparecer");
    cardsContainer.classList.remove("desaparecer");
    cuerpoIndex.classList.add("cuerpo");
}

carrouselItem__4.addEventListener("click", () => {
    abrirVideo4();
})

*/
/*Video pop up en la cuarta imagen del carrousel*/
/*
let div5 = document.createElement("div5");

function abrirVideo5() {
    cardsContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    cuerpoIndex.classList.remove("cuerpo");
    div5.innerHTML = `   <div class="video__container__index">
                            <video src="./videos/Mujer Cebra - 617 (Videoclip).mp4" controls autoplay ></video>
                            <button type="button" id="btnCerrar" onclick="cerrarVideo5()" class="btnCerrar" value="Cerrar">x</button>
                        </div>`
    document.body.appendChild(div5)
}

function cerrarVideo5() {
    div5.innerHTML = "";
    navBar.classList.remove("desaparecer");
    cardsContainer.classList.remove("desaparecer");
    cuerpoIndex.classList.add("cuerpo");
}

carrouselItem__5.addEventListener("click", () => {
    abrirVideo5();
})

*/
/*Video pop up en la cuarta imagen del carrousel*/
/*
let div6 = document.createElement("div6");

function abrirVideo6() {
    cardsContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    cuerpoIndex.classList.remove("cuerpo");
    div6.innerHTML = `   <div class="video__container__index">
                            <video src="./videos/Sillon Frey Final.3.mp4" controls autoplay ></video>
                            <button type="button" id="btnCerrar" onclick="cerrarVideo6()" class="btnCerrar" value="Cerrar">x</button>
                        </div>`
    document.body.appendChild(div6)
}

function cerrarVideo6() {
    div6.innerHTML = "";
    navBar.classList.remove("desaparecer");
    cardsContainer.classList.remove("desaparecer");
    cuerpoIndex.classList.add("cuerpo");
}

carrouselItem__6.addEventListener("click", () => {
    abrirVideo6();
})
*/
/*Video pop up en la cuarta imagen del carrousel*/
/*
let div7 = document.createElement("div6");

function abrirVideo7() {
    cardsContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    cuerpoIndex.classList.remove("cuerpo");
    div7.innerHTML = `   <div class="video__container__index">
                            <video src="./videos/Mora Navarro - Certezas.mp4" controls autoplay ></video>
                            <button type="button" id="btnCerrar" onclick="cerrarVideo7()" class="btnCerrar" value="Cerrar">x</button>
                        </div>`
    document.body.appendChild(div7)
}

function cerrarVideo7() {
    div7.innerHTML = "";
    navBar.classList.remove("desaparecer");
    cardsContainer.classList.remove("desaparecer");
    cuerpoIndex.classList.add("cuerpo");
}

carrouselItem__7.addEventListener("click", () => {
    abrirVideo7();
})*/