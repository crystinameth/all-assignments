function updateClock(){
    console.clear();

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedTime24 = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    const formattedTime12 = `${padZero(hours % 12 || 12)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;

    console.log(`24HourFormat: ${formattedTime24}`);
    console.log(`12HourFormat: ${formattedTime12}`);

    setTimeout(updateClock,1000);
}

function padZero(num){
    return num < 10 ? `0${num}` : num ;
}

updateClock();