var counter = 1;

function printCounter(){
    console.clear();
    console.log(counter);
    counter ++ ;
}

setInterval(printCounter, 1000);
