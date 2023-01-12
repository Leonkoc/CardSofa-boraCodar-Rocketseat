let isStatic = true;

let vetorBtn = document.getElementsByClassName('vetor')[0];
vetorBtn.addEventListener('click', rodar);

function rodar() {
let sofa = document.getElementsByClassName('sofa')[0];
if(isStatic){
    sofa.setAttribute('src', "./img/sofa-gif.gif");
    isStatic = false;
    sofa.setAttribute('class', 'sofa active-gif');
}else{
    sofa.setAttribute('src', "./img/sofa-png.png");
    isStatic = true;
}
}