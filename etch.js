let container = document.getElementById("container");
let main = document.getElementById("main");
let button = document.querySelector("button");
let clear = document.getElementById("clear");
let rgb = document.getElementById("rgb");
let size = 0;
let cells = document.getElementsByClassName("inner");
let color = document.querySelector("input");



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
    getRGB();
    getNewGrid();
    applyColor();
    removeColor();
    changeColor();
    
    

    

    

};


function getNewGrid() {
    button.addEventListener('click', function createGrid() {
        let input = prompt("ENTER A NUMBER LESS THAN OR EQUAL TO 100");
        size = input;
        let width = 32 / size;
        let height = 32 / size;
        if (size <= 100 && size) {
            main.innerHTML = '';
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
            alert("PLEASE ENTER A NUMBER LESS THAN OR EQUAL TO 100");
        }
        
        
        applyNewColor();
        getRGB();     
        
    });
    
    
};



function applyColor() {
    for (let cell of cells) {
        cell.addEventListener('mouseover', function putPaint() {
            cell.style.backgroundColor = "black";
        });
    }
    

};

function removeColor() {
    clear.addEventListener('click', function takeColor() {
        for(let cell of cells) {
            cell.style.backgroundColor = "";
        }

    })
};

function getRGB() {
    
    rgb.addEventListener('click', function selectColor() {
        for (let item of cells) {
            let i, j, k = 0;
            i = Math.floor(Math.random() * 255);
            j = Math.floor(Math.random() * 255);
            k = Math.floor(Math.random() * 255);
            item.addEventListener('mouseover', function getRainbow(){
                item.style.backgroundColor = `rgb(${i}, ${j}, ${k})`;
            });
        }
    });
    

};

function changeColor() {
    color.addEventListener('input', function getChanges() {
        let newcolor = document.getElementById('change').value;
        for(let cell of cells) {
            cell.addEventListener('mouseover', function getNewChanges() {
                cell.style.backgroundColor = newcolor;
            });
        }

        

    });
};

function applyNewColor() {
    let choice = document.getElementById('change').value;
    for(let cell of cells) {
        cell.addEventListener('mouseover', function applyChoice(){
            cell.style.backgroundColor = choice;
        })

    }
};

getGrid();



