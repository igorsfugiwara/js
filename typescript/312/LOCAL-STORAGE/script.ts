// 1 - Crie uma interface UserData para o formulário abaixo
interface UserData {
    name?: string;
    email?: string;
    cpf?: string;
}

// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
interface Window{
    UserData: UserData;
}
window.UserData = {}

// 3 - Adicione um evento de keyup ao formulário
function handleInput({target}: KeyboardEvent) {
    if (target instanceof HTMLInputElement) {

        // 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
        window.UserData[target.id] = target.value;

        // 5 - Salve UserData no localStorage
        localStorage.setItem('UserData', JSON.stringify(window.UserData));
    }
}
const form = document.querySelector<HTMLFormElement>('#form');
form?.addEventListener('keyup', handleInput);

// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
function isUserData(obj:unknown): obj is UserData {
    if (obj && typeof obj === 'object' && ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
        return true;
    }
    else return false;
}

// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
function loadLocalStorage() {
    const localUserData = localStorage.getItem('UserData');
    if (localUserData && validJson(localUserData)) {
        const UserData = JSON.parse(localUserData);
        if (isUserData(UserData)){
            Object.entries(UserData).forEach(([key, value]) =>{
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement){
                    input.value = value;
                    window.UserData[key] = value
                }
            });

        } 
    }
}

function validJson(str:string){
    try{
        JSON.parse(str);
    }catch(e){
        return false;
    }
    return true;
}

loadLocalStorage();