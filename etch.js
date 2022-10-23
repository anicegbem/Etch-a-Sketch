let container = document.getElementById("container");
let main = document.getElementById("main");
let button = document.querySelector("button");
let size = 0;

function getGrid() {
    for(let i = 1; i <= 16; i++) {
        let box = document.createElement('div');
        box.setAttribute('class', 'outer');
        main.appendChild(box);
        for(let i = 1; i <= 16; i++) {
            let inner = document.createElement('div');
            inner.setAttribute('class', 'inner');
            box.appendChild(inner);
            
            
        }
        
        
    };
    getNewGrid();
    

    

    

}

let outer = document.getElementsByClassName('outer');
let inner = document.getElementsByClassName('inner');


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

function getNewGrid() {
    button.addEventListener('click', function createGrid() {
        main.innerHTML = '';
        let input = prompt("Enter a number from 1 - 64");
        size = input;
        let width = 512 / size;
        let height = 512 / size;
        for(let i = 1; i <= size; i++) {
            let newbox = document.createElement('div');    
            newbox.setAttribute('class', 'newouter');
            // main.replaceChildren(newbox);
            /*for(let item of oldbox) {
                main.removeChild(item);

            }*/
            let i = size;
            while(i <= size) {
                main.appendChild(newbox);
                i++;
            }
            
            for(let i = 1; i <= size; i++) {
                let newinner = document.createElement('div');
                newinner.setAttribute('class', 'newinner')
                newinner.style.width = `${width}px`;
                newinner.style.height = `${height}px`;
                newbox.appendChild(newinner);
            } 
            
                

            
            
            

        }   
        
            
        
    });
    
}
getGrid();



