// Generics
  // Exemplo 1
  function retorno<Tipo>(a: Tipo): Tipo {
    return a;
  }
  
  retorno('A Game').charAt(0);
  // retorno<string>(a: string): string
  
  retorno(200).toFixed();
  // retorno<number>(a: number): number
  
  // Exemplo 2
  function firstFive<Tipo>(lista: Tipo[]): Tipo[] {
    return lista.slice(0, 5);
  }
  
  const numeros = [1, 3, 4, 5, 3, 20, 3, 4, 5];
  const frutas = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão'];
  
  const five1 = firstFive<number>(numeros);
  const five2 = firstFive<string>(frutas);
  
  // Exemplo 3
  function notNull<Tipo>(arg: Tipo) {
    if (arg !== null) return arg;
    else return null;
  }
  
  notNull(200)?.toFixed();
  notNull('André')?.toLowerCase();
  
  // Exemplo 4
  function tipoDado<T>(a: T): { dado: T; tipo: string } {
    const resultado = {
      dado: a,
      tipo: typeof a,
    };
    console.log(resultado);
    return resultado;
  }
  
  tipoDado(true);


// ============================================
// Extends
// Exemplo 1
function extractText<Tipo extends HTMLElement>(el: Tipo){
  return {
    texto: el.innerText,
    el
  }
}

const link = document.querySelector('a');

if(link){
  console.log(extractText(link).el);
  //console.log(extractText('link').el); //erro no ts
}

// Exemplo 2 - recirando o jQuery
function $<Tipo extends Element>(selector:string): Tipo | null{
  return document.querySelector(selector);
}

const link2 = $<HTMLAnchorElement>('a')?.href


// ============================================
// Métodos
//Exemplo 1

const link3 = document.querySelector<HTMLAnchorElement>('.link');
link3?.href //menos seguro

const link4 = document.querySelector<HTMLVideoElement>('.link');
if(link4 instanceof HTMLVideoElement){
  link4?.volume //acesso ao elemento seguro
}

//Exemplo 2
async function getData<T>(url:string): Promise<T> {
  const response = await fetch(url);
  return await response.json(); 
}

interface Notebook {
  nome: string;
  preco: number;
}

async function handleData(){
  const notebook =  await getData<Notebook>('https://api.origamid.dev/json/notebook.json');
  console.log(notebook);
}

handleData();