// ============================================
// Functions
function somar(a:number, b:number, c?:number):number{
  return a + b + (c ? c : 0);
}
somar(3,4,4)

const subitrair = (a:number, b:number) => a-b;
subitrair(3,4)

// ============================================
// Void
function pintarTela(cor:string):void {
  document.body.style.background = cor
}

pintarTela('black');
console.log(pintarTela('black'));


const btn = document.querySelector('button');
btn?.click();

function isString(value:string){
  if( typeof value === 'string'){
    return true
  }
}
isString('teste');
// isString(200); // erro no ts

// ============================================
// Never
function abortar(mensagem:string):never{
  throw new Error(mensagem)
}
// comentar se nao o thown error para a excecução
// abortar('Ocorreu um erro 666')
console.log("tente novamente");


// ============================================
// Método
interface Quadrado{
  lado:number;
  perimetro(lado:number):number
}

function calcular(forma:Quadrado){
  forma.perimetro(3)
}

// ============================================
// Overload
function normalizar(valor: string):string;
function normalizar(valor: string[]):string[];
function normalizar(valor: string | string[]): string | string[]{
  if(typeof valor == 'string'){
    return valor.trim().toLocaleLowerCase();
  }else{
    return valor.map((item) => item.trim().toLocaleLowerCase());
  }
}

console.log(normalizar("    Produto  "));
console.log(normalizar(["Banana", "UVA    ", " maÇã"]));


// Exemplo 2
function $(seletor: "video"): HTMLVideoElement | null;
function $(seletor: "div"): HTMLDivElement | null;
function $(seletor: "a"): HTMLAnchorElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

$("a")?.href;
$("video")?.volume;
$(".teste")?.innerHTML;
