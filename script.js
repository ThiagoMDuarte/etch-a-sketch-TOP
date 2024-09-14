const container = document.querySelector('.container');

let totalGrid = 8;

createGrid(totalGrid)

function createGrid(totalGrid) {
    let totalCells = (totalGrid * totalGrid)

    for (let i = 0; i < totalCells; i++) {
        let gridDiv = document.createElement('div');
        let containerHeight = container.clientHeight / totalGrid
        gridDiv.classList.add(`gridDiv`);
        // AS DUAS LINHAS MAIS IMPORTANTES
        // SEM ESSAS DUAS LINHAS (.flexBasis e .height) O GRID FICA COM ESPAÇOS OU ATRAVESSA O CONTAINER
        gridDiv.style.flexBasis = `${100/totalGrid}%`
        gridDiv.style.height = `${containerHeight}px`
        gridDiv.setAttribute('id',`gridId${i}`)
        container.appendChild(gridDiv);
    }}



const changeGrid = document.querySelectorAll('.gridDiv')
mouseEvent(changeGrid)

function mouseEvent(gridDivs) {
    gridDivs.forEach(grid => {
        grid.addEventListener('mouseover', function (event) {
          grid.setAttribute('id', 'blackId');
        });
      });
    }
