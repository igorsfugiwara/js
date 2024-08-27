window.UserData = {};
// 3 - Adicione um evento de keyup ao formulário
function handleInput(_a) {
    var target = _a.target;
    if (target instanceof HTMLInputElement) {
        // 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
        window.UserData[target.id] = target.value;
        // 5 - Salve UserData no localStorage
        localStorage.setItem('UserData', JSON.stringify(window.UserData));
    }
}
var form = document.querySelector('#form');
form === null || form === void 0 ? void 0 : form.addEventListener('keyup', handleInput);
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
function isUserData(obj) {
    if (obj && typeof obj === 'object' && ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
        return true;
    }
    else
        return false;
}
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
function loadLocalStorage() {
    var localUserData = localStorage.getItem('UserData');
    if (localUserData && validJson(localUserData)) {
        var UserData = JSON.parse(localUserData);
        if (isUserData(UserData)) {
            Object.entries(UserData).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                var input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
function validJson(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
loadLocalStorage();
