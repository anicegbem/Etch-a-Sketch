let container = document.getElementById("container");
for(let i = 1; i <= 16; i++) {
    let box = document.createElement('div');
    container.appendChild(box);
    for(let i = 1; i <= 16; i++) {
        let inner = document.createElement('div');
        inner.setAttribute('class', 'inner');
        box.appendChild(inner);
    }
}
