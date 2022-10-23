let container = document.getElementById("container");
let main = document.getElementById("main");
let button = document.querySelector("button");
let size = 0;
let cells = document.getElementsByClassName("inner");


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
    applyColor();
    

    

    

}

let outer = document.getElementsByClassName('outer');
let inner = document.getElementsByClassName('inner');


function getNewGrid() {
    button.addEventListener('click', function createGrid() {
        main.innerHTML = '';
        let input = prompt("ENTER A NUMBER LESS THAN OR EQUAL TO 100");
        size = input;
        let width = 32 / size;
        let height = 32 / size;
        if (size <= 100) {
            for(let i = 1; i <= size; i++) {
                let newbox = document.createElement('div');    
                newbox.setAttribute('class', 'newouter');
                let i = 1;
                while(i <= size) {
                    main.appendChild(newbox);
                    i++;
                }
                
                for(let i = 1; i <= size; i++) {
                    let inner = document.createElement('div');
                    inner.setAttribute('class', 'inner')
                    inner.style.width = `${width}em`;
                    inner.style.height = `${height}em`;
                    newbox.appendChild(inner);
                } 
    
            }   

        }
        else {
            main.innerText = "Please, enter a number less than or equal to 100"
        }
        
        
        applyColor();      
        
    });
    
    
};



function applyColor() {
    for (let cell of cells) {
        cell.addEventListener('mouseover', function putPaint() {
            cell.style.backgroundColor = "red";
        })
    }
    

};

getGrid();



