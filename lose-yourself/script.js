var audio = new Audio('audio.mp3');

setInterval(function(){
var ms   = Date.parse(new Date())/1000;
var ems  = Date.parse("Jan 01 2019 0:00:00")/1000
var until= (ems-ms);
console.log(until)
if(until==59){
audio.play()
}
  
    var m = Math.floor(until/60)
    var h = Math.floor(m/60)
    var d = Math.floor(h/24)
    document.getElementById('dy').innerHTML=d
    document.getElementById('hr').innerHTML=h
    document.getElementById('mn').innerHTML=m
    document.getElementById('sc').innerHTML=s
},1);
