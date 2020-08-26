const container = document.querySelector('#container');
const button = document.querySelector('#clear');
const gridWidth = 400;
let numSq =prompt("How many squares should a site of your grid have?","100");

setUpGrid(numSq);
fillGrid(numSq);

button.addEventListener('click', ()=>{
    const ls = document.querySelectorAll('.item');
    for(let i = 0; i< ls.length; i++){
        ls[i].setAttribute('style', 'background-color: white;');
    }
    numSq = prompt("How many squares should a side of your grid have?", "100");
    setUpGrid(numSq)
    fillGrid(numSq);
});

function setUpGrid(numSq){
    container.style.display = 'grid';
    container.style.gridTemplateRows = 'repeat('+ numSq +',' + gridWidth/numSq+ 'px)';
    container.style.gridTemplateColumns = 'repeat('+ numSq +', ' + gridWidth/numSq + 'px)';
}

function fillGrid(numSq){
    for(let i = 0; i<numSq*numSq;i++){
        const div = document.createElement('div');
        div.classList.add('item');
        div.addEventListener('mouseenter', e => {
            div.setAttribute('style', 'background-color: black;');
        });
        container.appendChild(div);   
    }
}
