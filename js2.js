let seconds=0;
let tans=0;
let minute=0;
let appendtan=document.querySelector("#tan");
let appendmin=document.querySelector("#min");
let appendsec=document.querySelector("#sec");
let startbtn=document.querySelector("#start");
let stopbtn=document.querySelector("#stop");
let resetbtn=document.querySelector("#reset");
let interval=0
console.dir(appendtan);
let startTimer=()=>{
    tans++;
    if(tans<9){
        appendtan.innerHTML="0"+tans;
       
    }
    if(tans>9){
        appendtan.innerHTML=tans;
        
    }
    if(tans>=99){
        tans=0;
        seconds++;
        appendsec.innerHTML="0"+seconds;
        if(seconds>9){
            appendsec.innerHTML=seconds;
        }
        if(seconds>=59){
            seconds=0;
            minute++;
            if(minute<=9){
                appendmin.innerHTML="0"+minute;

            }
            if(minute>9){
                appendtan.innerHTML=minute;
            }
            if(minute==59){
                clearInterval(interval);
            }
           

        }
        
    }
    
}
startbtn.addEventListener("click",()=>{
    clearInterval(interval);
    interval=setInterval(startTimer, 10);

});
stopbtn.addEventListener("click",()=>{
    clearInterval(interval);

});
resetbtn.addEventListener("click",()=>{
    clearInterval(interval);
    tans=00;
    seconds=00;
    minute=00;
    appendsec.innerHTML="0"+seconds;
    appendtan.innerHTML="0"+tans;
    appendmin.innerHTML="0"+minute;

});





