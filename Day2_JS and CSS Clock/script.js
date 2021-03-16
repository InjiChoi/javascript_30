const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    // 현재 시각
    const now = new Date();

    // 초
    const seconds = now.getSeconds();
    const secondsDegrees =  ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log('sec:', seconds) // 현재 시간(초) 출력

    // 분
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    console.log('min:', mins);

    // 시
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log('hour:', hours);
}

setInterval(setDate, 1000);