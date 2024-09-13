const container = document.querySelector('.container');

let totalDivs = 16;
createDivs(totalDivs)

function createDivs (totalDivs) {

for (let i = 0; i < totalDivs; i++) {
    let colunaDiv = document.createElement('div');
    colunaDiv.classList.add('colunaDiv');
    colunaDiv.textContent = `${i + 1}`;
    container.appendChild(colunaDiv);

    for (let j = 0; j < totalDivs; j++) {
        let linhaDiv = document.createElement('div');
        linhaDiv.classList.add('linhaDiv');
        linhaDiv.textContent = `${j + 1}`;
        colunaDiv.appendChild(linhaDiv);
    }
}}

