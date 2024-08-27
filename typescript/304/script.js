var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b, _c;
// Generics
// Exemplo 1
function retorno(a) {
    return a;
}
retorno('A Game').charAt(0);
// retorno<string>(a: string): string
retorno(200).toFixed();
// retorno<number>(a: number): number
// Exemplo 2
function firstFive(lista) {
    return lista.slice(0, 5);
}
var numeros = [1, 3, 4, 5, 3, 20, 3, 4, 5];
var frutas = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão'];
var five1 = firstFive(numeros);
var five2 = firstFive(frutas);
// Exemplo 3
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
(_a = notNull(200)) === null || _a === void 0 ? void 0 : _a.toFixed();
(_b = notNull('André')) === null || _b === void 0 ? void 0 : _b.toLowerCase();
// Exemplo 4
function tipoDado(a) {
    var resultado = {
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
function extractText(el) {
    return {
        texto: el.innerText,
        el: el
    };
}
var link = document.querySelector('a');
if (link) {
    console.log(extractText(link).el);
    //console.log(extractText('link').el); //erro no ts
}
// Exemplo 2 - recirando o jQuery
function $(selector) {
    return document.querySelector(selector);
}
var link2 = (_c = $('a')) === null || _c === void 0 ? void 0 : _c.href;
// ============================================
// Métodos
//Exemplo 1
var link3 = document.querySelector('.link');
link3 === null || link3 === void 0 ? void 0 : link3.href; //menos seguro
var link4 = document.querySelector('.link');
if (link4 instanceof HTMLVideoElement) {
    link4 === null || link4 === void 0 ? void 0 : link4.volume; //acesso ao elemento seguro
}
//Exemplo 2
function getData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function handleData() {
    return __awaiter(this, void 0, void 0, function () {
        var notebook;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getData('https://api.origamid.dev/json/notebook.json')];
                case 1:
                    notebook = _a.sent();
                    console.log(notebook);
                    return [2 /*return*/];
            }
        });
    });
}
handleData();
