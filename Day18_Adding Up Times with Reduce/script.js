const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
// Array.from 붙이지 않으면 아래 map에서 오류 발생!
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(":").map(parseFloat);
        // parseFloat 하지 않으면 str로 인식되어서 Video 1 의 경우 '300'+'43' = '30043'으로 나와버림
        return (mins * 60) + secs;
        })
        .reduce((total, vidSeconds) => total + vidSeconds)

        let secondsLeft = seconds;
        const hours = Math.floor(secondsLeft / 3600); // 몫
        secondsLeft = secondsLeft % 3600; // 나머지

        const mins = Math.floor(secondsLeft / 60);
        secondsLeft = secondsLeft % 60;

        console.log(hours, mins, secondsLeft);