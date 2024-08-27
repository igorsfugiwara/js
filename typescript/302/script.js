// querySelector - retorna Element
document.querySelector('video'); //HTMLVideoElement
document.querySelector('img'); //HTMLImageElement
var link1 = document.querySelector('a'); // HTMLAnchorElement
var link2 = document.querySelector('#origamid'); // Element
link1 === null || link1 === void 0 ? void 0 : link1.href;
link2 === null || link2 === void 0 ? void 0 : link2.href; // erro no ts
// exemplo
var video = document.querySelector('video');
video === null || video === void 0 ? void 0 : video.volume;
var videoId = document.querySelector('#videoPrincipal');
videoId === null || videoId === void 0 ? void 0 : videoId.volume; // erro no ts, pois querySelector retorna Element, não HTMLVideoElement
// validação com instanceOf
if (videoId instanceof HTMLVideoElement) {
    console.log(videoId.volume);
}
// ============================================
// querySelectorAll - retorna NodeList<Element>
var linksquery = document.querySelectorAll('.link');
if (linksquery instanceof NodeList) {
    linksquery.forEach(function (link) {
        if (link instanceof HTMLAnchorElement) {
            console.log(link.href);
        }
    });
}
// transformar NodeList em Array
var arrayLinks = Array.from(linksquery);
var anchorLinks = arrayLinks.filter(function (link) { return link instanceof HTMLAnchorElement; });
console.log(anchorLinks);
