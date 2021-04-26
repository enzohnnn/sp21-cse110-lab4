function getDate() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(getDate, 1000);
