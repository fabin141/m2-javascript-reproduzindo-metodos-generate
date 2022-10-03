// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

let numbers1 = [6,8,18,54,16];
function testMapCall(array){
    let count = [];
    for(let index = 0; index< array.length; index++){
        count.push(array[index] * array[index]);
    }
    return count
}

function testMap(array, callback){
    let percor = callback(array);
    return percor;
}
testMap(numbers1, testMapCall)
console.table(testMap(numbers1, testMapCall))

// ----------------------------------------------------^---------------------------------------------------------
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

let numbers2 = [6,8,18,54,16];
function testFIlterCall(array, value){
    let count = [];
    for(let index = 0; index < array.length; index++){
        if(array[index] >= value){
            count.push(array[index])
        }
    }
    return `Os valores que passaram no teste foram ${count}`;
}

function testFilter(array, callback, element){
   let vazio = callback(array, element);
    return vazio
    
}
testFilter(numbers2, testFIlterCall, 10)
console.table(testFilter(numbers2, testFIlterCall, 10))
// // // ----------------------------------------------------^---------------------------------------------------------
// // // O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

const array1 = [5, 12, 8, 130, 44];
    function testFindCall(array, element){
        for(let index = 0; index < array.length; index ++){
            if(array[index] === element){
                return `O primeiro valor encontrado foi: ${array[index]}`;
            }
        }
    }

    function testFind(array, callback, element){
        let findoso = callback(array, element);
        return findoso;
    }
    testFind(array1, testFindCall, 44)
console.table(testFind(array1, testFindCall, 44))

// // ----------------------------------------------------^---------------------------------------------------------
// // O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

const array2 = [1, 2, 3, 4];

function testReduceCall(array){
    let count = 0;
    for(let index = 0; index < array.length; index++){
        count += array[index];
    }
    return `O valor dos itens somados deste array ${array} é: ${count}`;
}

function testReduce(array, callback){
    let fundos = callback(array);
    return fundos;
}
testReduce(array2, testReduceCall)

console.table(testReduce(array2, testReduceCall));

// //---------------------------------------------------------^-----------------------------------------------------------------
// //O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.

const array3 = [1,2,3,4,5,6]

function testIncludesCall(array, element){
    for(let index = 0; index < array.length; index++){
        if(array[index] === element){
            return true
        }
        return false
    }
}

function testInclude(array,callback,element){
    let ggeasy = callback(array, element);
    return ggeasy;
}
testInclude(array3, testIncludesCall, 10)
console.table(testInclude(array3, testIncludesCall, 10))

// //---------------------------------------------------------^-----------------------------------------------------------------
// //O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

const array4 = [1,1,1,2,3,4,5,6]

function testIndexCall(array, element){
    for(let index = 0; index < array.length; index++){
        if(array[index] === element){
            return index
        }
        if(array[index] !== element){
            return -1
        }
    }
}

function testIndex(array,callback, element){
    let final = callback(array, element);
    return final;
}

console.table(testIndex(array4,testIndexCall, 2));