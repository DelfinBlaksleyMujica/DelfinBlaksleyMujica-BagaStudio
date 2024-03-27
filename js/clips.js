const musicVideos = [
    {id:1  , nombre:"ABISMO",artista:"SUEÑO AZUL",img:"../imagenesClips/SuenioAzulAbismo.jpg",alt:"Portada de la canción Abismo del artista Sueño Azul",title:"Hace click para ver el vídeo de la canción Abismo del artista Sueño Azul",video:"https://www.youtube.com/embed/zHXOWyp7HLU?si=j48H37o7e1Sv9wIW"},
    {id:2  , nombre:"CUANDO SEA GRANDE",artista:"MORA NAVARRO",img:"../imagenesClips/MoraNavarroCuandoSeaGrande.jpg",alt:"Portada de la canción Cuando Sea Grande de la artista Mora Navarro",title:"Hace click para ver el vídeo de la canción Cuando Sea Grande de la artista Mora Navarro",video:"https://www.youtube.com/embed/DjG-is23KTA?si=0B57b49r9oAyFz_x"},
    {id:3  , nombre:"CAMARÓN REMIX",artista:"JUKU ARES FT. COTI",img:"../imagenesClips/JukuFtCotiCamaron.webp",alt:"Portada de la canción Camarón de los artistas Juku Ares y Coti",title:"Hace click para ver el vídeo de la canción Camarón de los artistas Juku Ares y Coti",video:"https://www.youtube.com/embed/TXqQoIfnayY?si=Rgqej3mKY19oS6W7"},
    {id:4  , nombre:"POR VENIR",artista:"JUKU ARES FT MORA NAVARRO",img:"../imagenesIndex/PorVenir-JukuAres.jpg",alt:"Portada de la canción Por Venir del artista Juku Ares",title:"Hace click para ver el vídeo de la canción Por Venir del artista Juku Ares",video:"https://www.youtube.com/embed/eQFW96jc3ns?si=f2KLEvWxHIrXny_7"},
    {id:5   , nombre:"EN UNA",artista:"CAMILA BUCH FT MORA NAVARRO",img:"../imagenesClips/1camibuch.jpg",alt:"Portada de la canción En Una de la artista Cami Buch",title:"Hace click para ver el vídeo de la canción En Una de la artista Cami Buch",video:"https://www.youtube.com/embed/KEqDeH7_SM8?si=kX-OEs_1ilUjNbfH"},
    {id:6  , nombre:"COLORA",artista:"NIÑO ETC",img:"../imagenesClips/13-Colora.jpg",alt:"Portada de la canción Colora del artista Niño Etc",title:"Hace click para ver el vídeo de la canción Colora del artista Niño Etc",video:"https://www.youtube.com/embed/ss9YcQhItq0?si=q_cjvVlCfrq9pd4i"},
    {id:7 , nombre:"617",artista:"MUJER CEBRA",img:"../imagenesClips/4-mujercebra.jpg",alt:"Portada de la canción 617 de la banda musical Mujer Cebra",title:"Hace click para ver el vídeo de la canción 617 de la banda musical Mujer Cebra",video:"https://www.youtube.com/embed/HnkX_A2GRa4?si=HyG_imhizjZMP83C"},
    {id:8  , nombre:"CHICO BUARQUE",artista:"JUKU ARES",img:"../imagenesIndex/3-juku.jpg",alt:"Portada de la canción Chico Buarque del artista Juku Ares",title:"Hace click para ver el vídeo de la canción Chico Buarque del artista Juku Ares",video:"https://www.youtube.com/embed/ax38QCm5vUs?si=pRXPOrLvWRi_Wm8M"},
    {id:9   , nombre:"AGUJAS",artista:"PACO",img:"../imagenesClips/7- agujas.jpg",alt:"Portada de la canción Agujas del artista Paco",title:"Hace click para ver el vídeo de la canción Agujas del artista Paco",video:"https://www.youtube.com/embed/PkYvsP6wPb0?si=28bzzfEaMrCnUu6x"},
    {id:10 , nombre:"VAN AL CIELO",artista:"MARINA WIL",img:"../imagenesClips/10-marinawill.jpg",alt:"Portada de la canción Van al cielo de la artista Marina Wil",title:"Hace click para ver el vídeo de la canción Van Al Cielo del artista Marina Wil",video:"https://www.youtube.com/embed/2NFHwfrFJmA?si=QVxrC0PniKysg1Br"},
    {id:11  , nombre:"NO SÉ SOLTAR",artista:"NIÑO ETC",img:"../imagenesClips/2-ninoetc.jpg",alt:"Portada de la canción No sé soltar del artista Niño Etc", title:"Hace click para ver el vídeo de la canción No Sé Soltar del artista Niño Etc",video:"https://www.youtube.com/embed/azlnPFPKSMs?si=IV6uy4_qohZJ0y3x"}, 
    {id:12, nombre:"LA BRISA",artista:"PRADKIN",img:"../imagenesClips/9-brisa.jpg",alt:"Portada de la canción Brisa del artista Pradkin",title:"Hace click para ver el vídeo de la canción Brisa del artista Pradkin",video:"https://www.youtube.com/embed/msaC2cjKbxY?si=kMr6bxhCuzh1tE2v"},
    {id:13   , nombre:"PEDRO RAUL",artista:"JERO JONES",img:"../imagenesClips/8-jerojones.jpg",alt:"Portada de la canción Pedro Raul del artista Jero Jones",title:"Hace click para ver el vídeo de la canción Pedro Raúl del artista Jero Jones",video:"https://www.youtube.com/embed/jRNG6nhRSNw?si=TQ5p6uwKhNDr5rVi"},
    {id:14 , nombre:"ENCANTO" , artista:"TOTO BAKAN" , img:"../imagenesClips/12-Encanto.jpg" ,alt:"Portada de la canción Encanto del artista Toto Bakan",title:"Hace click para ver el vídeo de la canción Encanto del artista Toto Bakan",video:"https://www.youtube.com/embed/5wL31aHPtyw?si=5h5-RyA0xO9Lr2HS"},
    // {id:15  , nombre:"ALBEDRIO",artista:"PACO",img:"../imagenesClips/11-albedrio.jpg",alt:"Portada de la canción Albedrío del artista Paco",title:"Hace click para ver el vídeo de la canción Albedrío del artista Paco",video:"https://www.youtube.com/embed/agkb7l7c-OA?si=pohadMzdgm16P-4D"},
];


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
    const video = musicVideos.find (r => r.id == id);
    div.innerHTML = `<div class="video__container">
                        <iframe src="${ video.video }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <button type="button" id="btnCerrar" onclick="cerrarVideo()" class="btnCerrar" value="Cerrar">< Volver</button>
                    </div>
                    `
    document.body.appendChild(div)      
    
}




function mostrarMaterial(){
    for (const imagen of musicVideos) {
        const { id , nombre , img , alt , title , artista } = imagen
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

