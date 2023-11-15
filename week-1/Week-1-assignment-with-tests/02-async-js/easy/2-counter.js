var counter = 1;

function interval(){
    console.clear();
    console.log(counter);
    counter ++;
    setTimeout(interval,1000); // used to delay the passed function by provided millisec i.e 1000ms -> 1sec 
}

interval();
