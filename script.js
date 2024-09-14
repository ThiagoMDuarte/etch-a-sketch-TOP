const container = document.querySelector('.container');

let totalGrid = 8;
createGrid(totalGrid)

const changeGrid = document.querySelectorAll('.gridDiv')
mudarCor(changeGrid)

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
        container.appendChild(gridDiv);
    }}

function mudarCor(gridDivs) {
    gridDivs.forEach(grid => {
        grid.addEventListener('mouseover', function (event) {
            grid.setAttribute('id', 'newColorId');
            let opacity = getOpacity()
            grid.style.backgroundColor = 'rgba(' + [255,0,0,opacity].join(',') + ')';
        });
      });
    }
function getOpacity(){
    let length = document.querySelectorAll('#newColorId').length
    length = ((length / 10) + 0.1)
    return length
    }