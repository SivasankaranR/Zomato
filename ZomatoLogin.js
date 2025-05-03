function myFunction() {
    document.getElementById("signin").style.color = "rgba(0, 0, 0, 0.5)";
    document.getElementById("signup").style.color = "#dd254b";
    var x = document.getElementById("contentbox");
    var y = document.getElementById("contentbox1");
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
    } 
    else
    {
        y.style.display = "block";
        x.style.display = "none";
    }
  }
function myFunction1() {
    document.getElementById("signup").style.color = "rgba(0, 0, 0, 0.5)";
    document.getElementById("signin").style.color = "#dd254b";
    var x = document.getElementById("contentbox1");
    var y = document.getElementById("contentbox");
    if (y.style.display === "none") 
    {
      x.style.display = "none";  
      y.style.display = "block";
    } 
    else
    {
      x.style.display = "none";
      y.style.display = "block";
      
    }
  }


//     function renderTime(){
//     var currentTime = new Date();
//     var diem = "AM";
//     var h = currentTime.getHours();
//     var m = currentTime.getMinutes();
//     var s = currentTime.getSeconds();


//     if(h == 0)
//     {
//         h = 12;
//     }
//     else if(h > 12)
//     {
//         h = h - 12;
//         diem = "PM";
//     }

//     if(h < 10)
//     {
//         h = h;
//     }
//     if(m < 10)
//     {
//         m = "0"+ m;
//     }
//     if(s < 10)
//     {
//         s = "0"+ s;  
//     }

//     var myClock = document.getElementsById('clockDisplay');
//     myClock.textContent = h + ":" + m + ":" + s + diem;
//     setTimeout('renderTime()',1000);
    
// }
// renderTime();

