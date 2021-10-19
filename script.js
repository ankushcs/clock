const secondHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/ 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes/ 60) * 360 + 90);
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours/ 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

}

setInterval(setDate, 1000); 