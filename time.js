// setInterval(currentTime,1000);

function currentTime() {
    let d = new Date();
    let Time = d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();

    return Time;
}

export default currentTime();