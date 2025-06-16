function time(){
    let newtime = document.querySelector("#time");
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    newtime.innerText = `${hours}:${minutes}:${seconds}`;
    

}
// time(setInterval(time,1000))
function set(){
setInterval(time,1000)
}
console.log(time)
