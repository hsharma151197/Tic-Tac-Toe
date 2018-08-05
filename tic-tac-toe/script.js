var flag,counter;
counter = 0;
var rowcol = [];
flag = false;
var rowcolArr = [];
var flagArr = [true, true, true, true, true, true, true, true, true];

init();

function init(){
    for(rowcol[0] = 0; rowcol[0]<=2; rowcol[0]++){
        for(rowcol[1] = 0; rowcol[1]<=2; rowcol[1]++){
            rowcolArr[counter] = document.querySelector('.block-'+rowcol[0]+'-'+rowcol[1]);
            counter++;
        }
    }
    listeners();
}

function listeners(){
    for(let i=0; i<rowcolArr.length; i++){
        rowcolArr[i].addEventListener('click', function(){
            if(flagArr[i]){
                view(i);
                flagArr[i] = false;
            }
        });
    }
}

function view(counter){
    if(flag===false){
        console.log(counter);
        rowcolArr[counter].textContent = 'X';
        flag = true;
        result();
    }
    else{
        console.log(counter);
        rowcolArr[counter].textContent = 'O';
        flag = false;
        result();
    }
    
}

function result(){
       
}