let youVoteFor = document.querySelector('.d-1-1 span');
let office =  document.querySelector('.d-1-2 span');
let descrition = document.querySelector('d-1-4');
let Warning = document.querySelector('.d-2');
let side = document.querySelector('.d-1-right');
let numbers = document.querySelector('d-1-3');

let currentStep = 0;
let number = '';

function startStage() {
    let stage = stage[startStage];

    let numberHtml = '';

    for (let i=0; i<stage.numbers;i++) {
        numberHtml += '<div class="number"></div>';
    }

    youVoteFor.style.display = 'none';
    office.innerHTML = stage.title;
    descrition.innerHTML = '';
    Warning.display = 'none';
    side.innerHTML = '';
    numbers.innerHTML = numberHtml;
}


function clicou(n) {
    alert(`clicou em ${n}`)
}

function clicou(white) {
    alert(`clicou em ${white}`)
}

function clicou(corrects) {
    alert(`clicou em ${corrects}`)
}

function clicou(CONFIRMS) {
    alert(`clicou em ${CONFIRMS}`)
}

startStage();
