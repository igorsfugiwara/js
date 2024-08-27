// querySelector - retorna Element
document.querySelector('video'); //HTMLVideoElement
document.querySelector('img'); //HTMLImageElement

const link1 = document.querySelector('a'); // HTMLAnchorElement
const link2 = document.querySelector('#origamid'); // Element

link1?.href;
link2?.href; // erro no ts

// exemplo
const video = document.querySelector('video');

video?.volume

const videoId = document.querySelector('#videoPrincipal');

videoId?.volume  // erro no ts, pois querySelector retorna Element, não HTMLVideoElement

// validação com instanceOf
if(videoId  instanceof HTMLVideoElement){
    console.log(videoId.volume);
}


// ============================================
// querySelectorAll - retorna NodeList<Element>

const linksquery = document.querySelectorAll('.link');
if (linksquery instanceof NodeList){
    linksquery.forEach( (link) => {
        if(link instanceof HTMLAnchorElement){
            console.log(link.href);
        }
    });
}

// transformar NodeList em Array
const arrayLinks = Array.from(linksquery);
const anchorLinks = arrayLinks.filter(
    (link) => link instanceof HTMLAnchorElement
);
console.log(anchorLinks);
