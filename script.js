// sequential logo animation
let logos=[
document.getElementById("logo1"),
document.getElementById("logo2"),
document.getElementById("logo3"),
document.getElementById("logo4")
];
let i=0;
function showNext(){
logos.forEach(l=>l.classList.remove("show"));
logos[i].classList.add("show");
i=(i+1)%logos.length;
}
showNext();
setInterval(showNext,1700);

// timer
let time=60;
let el=document.getElementById("timer");
setInterval(()=>{
time--;
let m=Math.floor(time/60);
let s=time%60;
el.innerHTML=`${m}:${String(s).padStart(2,'0')}`;
if(time<=0) time=60;
},1000);
