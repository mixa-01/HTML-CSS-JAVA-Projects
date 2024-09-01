let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');
let newHour = new Date().getHours();
let h = newHour > 12 ? newHour - 12 : newHour;
let m = new Date().getMinutes();

if (h < 10) {
    h = "0" + h;
}
if (m < 10) {
    m = "0" + m;
}



function updateClock(){
hour.innerText= h;
min.innerText= m;
sec.innerText= new Date().getSeconds();
ampm.innerText= new Date().getHours() >= 12 ? 'PM' : 'AM';

}
setInterval(updateClock, 1000);