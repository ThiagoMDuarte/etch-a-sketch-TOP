const desenho = document.querySelector('.desenho');
const botoes = document.querySelector('.botoes')
let totalGrid = 8;
createGrid(totalGrid)

const changeGrid = document.querySelectorAll('.gridDiv')
//mudarCor(changeGrid)


const botaoPreto = botoes.querySelector('#preto')
botaoPreto.addEventListener('click', function () {
    let cor = 'preto'
    mudarCor(changeGrid,cor)
})

const botaoVermelho = botoes.querySelector('#vermelho')
botaoVermelho.addEventListener('click',function () {
    let cor = 'vermelho'
    mudarCor(changeGrid,cor)
})

const botaoAzul = botoes.querySelector('#azul')
botaoAzul.addEventListener('click',function () {
    let cor = 'azul'
    mudarCor(changeGrid,cor)
})

function createGrid(totalGrid) {
    let totalCells = (totalGrid * totalGrid)

    for (let i = 0; i < totalCells; i++) {
        let gridDiv = document.createElement('div');
        let desenhoHeight = desenho.clientHeight / totalGrid
        gridDiv.classList.add(`gridDiv`);
        // AS DUAS LINHAS MAIS IMPORTANTES
        // SEM ESSAS DUAS LINHAS (.flexBasis e .height) O GRID FICA COM ESPAÇOS OU ATRAVESSA O COINTERDER DELE
        gridDiv.style.flexBasis = `${100/totalGrid}%`
        gridDiv.style.height = `${desenhoHeight}px`
        desenho.appendChild(gridDiv);
    }}

function mudarCor(gridDivs, cor ='preto') {
    gridDivs.forEach(grid => {
        grid.addEventListener('mouseover', function (event) {
            grid.setAttribute('id', 'newColorId');
            let opacity = getOpacity()
            if (cor === 'vermelho') {
            grid.style.backgroundColor = 'rgba(' + [255,0,0,opacity].join(',') + ')';
            } else if (cor == 'azul') {
                grid.style.backgroundColor = 'rgba(' + [0,0,255,opacity].join(',') + ')';
            } else {
                grid.style.backgroundColor = 'rgba(' + [0,0,0,opacity].join(',') + ')';
            }
        });
      });
    }
function getOpacity(){
    let length = document.querySelectorAll('#newColorId').length
    length = ((length / 10) + 0.1)
    return length
    }
