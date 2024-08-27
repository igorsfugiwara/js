// // ============================================
// // Callbacks
// const button = document.querySelector('button');
// function handleClick(event:PointerEvent) {
//     console.log(event);
// }
// button?.addEventListener('pointerdown', handleClick);
// function handleScroll(event: Event) {
//     console.log(event);
// }
// window.addEventListener('scroll', handleScroll);
// // ============================================
// // instanceof
// function ativarMenu(event:Event) {
//     if (event instanceof MouseEvent) {
//         console.log(event.pageX);
//     }
//     if (event instanceof TouchEvent) {
//         console.log(event.touches[0].pageX);
//     }
//     console.log(event);
// }
// document.documentElement.addEventListener('mousedown',ativarMenu);
// document.documentElement.addEventListener('touchstart',ativarMenu);
// window.addEventListener('keydown',ativarMenu);
// ============================================
// this
// const button = document.querySelector('button');
// function handleClick(this:HTMLButtonElement, event:MouseEvent) {
//     console.log(this);
// }
// button?.addEventListener('click',handleClick);
// ============================================
// target ou currentTarget
var button = document.querySelector('button');
function handleClick(event) {
    console.log(event.currentTarget); //instâncias do tipo EventTarget, não possui propriedades de elemetos HTMLButtonElement
    if (event.currentTarget instanceof HTMLButtonElement) {
        console.log(event.currentTarget.innerHTML);
    }
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', handleClick);
