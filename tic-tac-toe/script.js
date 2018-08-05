var flag,counter,block,x,blockArr,flagArr,rowcolArr,rowcol;
counter = 0;
rowcol = [];
flag = false;
rowcolArr = [];
flagArr = [true, true, true, true, true, true, true, true, true];
blockArr = [];

init();

function init(){
    for(rowcol[0] = 0; rowcol[0]<=2; rowcol[0]++){
        for(rowcol[1] = 0; rowcol[1]<=2; rowcol[1]++){
            rowcolArr[counter] = document.querySelector('.block-'+rowcol[0]+'-'+rowcol[1]);
            counter++;
        }
    }
    counter = 0;
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
        x = rowcolArr[counter];
        flag = true;
        result(x);
    }
    else{
        console.log(counter);
        rowcolArr[counter].textContent = 'O';
        x = rowcolArr[counter];
        flag = false;
        result(x);
    }
    
}

function result(block){
    blockArr[counter] = block.className;
    console.log(blockArr[counter]);
    for(var i=0; i<blockArr.length; i++){
        
    }
    counter++;
}