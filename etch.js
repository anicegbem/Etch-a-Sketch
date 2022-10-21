let container = document.getElementById("container");
let main = document.getElementById("main");
let button = document.getElementById("button");


for(let i = 1; i <= 16; i++) {
    let box = document.createElement('div');
    container.appendChild(box);
    for(let i = 1; i <= 16; i++) {
        let inner = document.createElement('div');
        inner.setAttribute('class', 'inner');
        box.appendChild(inner);
    }
};

let cells = document.getElementsByClassName("inner");
let content = Array.from(cells);

content.forEach(cell => {
    cell.addEventListener('mouseover', function putPaint() {
        cell.style.backgroundColor = "red";
    });
    /*cell.addEventListener('mouseout', function removePaint() {
        cell.style.backgroundColor = "transparent";
    })*/
});


