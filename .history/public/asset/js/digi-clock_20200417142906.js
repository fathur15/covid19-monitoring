function showTime(){
    var date = new Date();
    var offset = date.getTimezoneOffset();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

function showTimer(time = '10 minutes', tipe = 'show', position = 'navbar', style = 'simple time'){
    var countDownDate;
    var timer;
    if(time == '10 minutes'){
        var countDownDate = new Date().getTime();
        countDownDate += 1000 * 60 *10;
    }
    var x = setInterval(function() {
    var now = new Date().getTime();        
    var distance = countDownDate - now;        
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(tipe == "show"){
        timer = 'Days :' + days + 'Hours :' + hours + 'Minutes :' + minutes + 'Seconds :' + seconds;
        if(position == 'navbar' && style == 'simple time'){
            timer =  hours + ":" + minutes + ":" + seconds;
        }
        if (distance < 0)
            timer = '-';

        document.getElementById("MyTimerDisplay").innerText = timer;
        document.getElementById("MyTimerDisplay").textContent = timer;

        if (distance < 0)
            clearInterval(x);

        //     showTimer();
        
    }
    // if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("demo").innerHTML = "EXPIRED";
    // }
    }, 1000);
}