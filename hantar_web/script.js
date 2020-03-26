var arr = ["amos", "ilan", "shira"]


function choose() {
  var hantar = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("new_hantar").innerHTML = hantar
}


function start(){
    var countDownDate = new Date().getTime() + 10000;
    var x = setInterval(function(){
        
        console.log("here")
        var hantar = arr[Math.floor(Math.random() * arr.length)];
        document.getElementById("new_hantar").innerHTML = hantar

        var now = new Date().getTime();
    
        var distance = countDownDate - now;
 
        if (distance < 0) {
            clearInterval(x);
        }
    }, 100);
}

