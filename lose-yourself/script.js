var audio = new Audio('audio.mp3');

setInterval(function(){
var d = new Date();
var ms   = d.now();
var ems  = new Date.parse("Tue Jan 01 2019 0:00:00")
var until= (ems-ms)/1000;
if(until==58){
audio.play()
}
},1);
