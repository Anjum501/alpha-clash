function hidden(ytr){
    const element = document.getElementById(ytr)
    element.classList.add('hidden');
}

function show(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')

}

function addBg(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-300');

}
function removeBg(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-300')
}
function textById(elementId){
    const element = document.getElementById(elementId)
    const text = element.innerText;
    const value = parseInt(text)
    return value
}

function setTextById(elementId,value){
    const element = document.getElementById(elementId)
    element.innerText = value;
    
     }

function alpha(){
    const alphas =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const al = alphas[index];
    
    return al
    
}

