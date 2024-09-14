const container = document.querySelector('.container');

let totalGrid = 16;

createGrid(totalGrid)

function createGrid(totalGrid) {
    let totalCells = (totalGrid * totalGrid)

    for (let i = 0; i < totalCells; i++) {
        let gridDiv = document.createElement('div');
        let containerHeight = container.clientHeight / totalGrid
        gridDiv.classList.add('gridDiv');
        // AS DUAS LINHAS MAIS IMPORTANTES
        // SEM ESSAS DUAS LINHAS (.flexBasis e .height) O GRID FICA COM ESPAÇOS OU ATRAVESSA O CONTAINER
        gridDiv.style.flexBasis = `${100/totalGrid}%`
        gridDiv.style.height = `${containerHeight}px`
        container.appendChild(gridDiv);
    }}


/* 
const changeDivs = document.querySelector('.gridDiv')
changeDivs.addEventListener('mouseover',mudarCor)

function mudarCor(e) {
    changeDivs.style.backgroundColor = "rgb("+e.offsetX+","
    +e.offsetY+","
    +((e.offsetX/e.offsetY)*10)+")";
}
// selecionar todas as divs
// adicionar um evento de mousehover para cada div
// acionar o evento mudar a cor */