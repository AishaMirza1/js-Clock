var buttons = document.querySelectorAll('.format button');
let format
document.querySelector(".btn2").classList.add("active-color")
function showTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes= date.getMinutes();
    let seconds = date.getSeconds();

    let day = date.getDay();
    var session = "AM"

    format= document.querySelector(".clock").getAttribute("data-format")
    
    // -----------------------------------------------------------------------
    if (hours<10){
        hours = "0"+hours
    }
    if (minutes<10){
        minutes = "0"+minutes
    }
    if (seconds<10){
        seconds = "0"+seconds
    }


    
     // active day color change---------------------------------------
    if(day===0){
        document.getElementById("sunday").classList.add("active-color")
        document.getElementById("sunday").style.display = 'block'
    }
    if(day===1){
        document.getElementById("monday").classList.add("active-color")
        document.getElementById("monday").style.display = 'block'
    }

    if(day===2){
        document.getElementById("tuesday").classList.add("active-color")
        document.getElementById("tuesday").style.display = 'block'
    }
    if(day===3){
        document.getElementById("wednesday").classList.add("active-color")
        document.getElementById("wednesday").style.display = 'block'
    }
    if(day===4){
        document.getElementById("thursday").classList.add("active-color")
        document.getElementById("thursday").style.display = 'block'
    }
    if(day===5){
        document.getElementById("friday").classList.add("active-color")
        document.getElementById("friday").style.display = 'block'
    }
    if(day===6){
        document.getElementById("saturday").classList.add("active-color")
        document.getElementById("saturday").style.display = 'block'
    }
   

    if(format ==='12'){
       hours = (hours>12)? hours%12 : hours;
      
    }
    



    var time = `${hours}:${minutes}:${seconds}`
    document.querySelector("h1").innerText = time
   
    setTimeout(showTime,1000)
    
}



buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        format = button.getAttribute('data-format')
        document.querySelector(".clock").setAttribute('data-format', format)
        document.querySelector(".btn1").classList.toggle("active-color")
        document.querySelector(".btn2").classList.toggle("active-color")
        // setTimeout(showTime)
        showTime()
    })
})


