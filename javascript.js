var start = document.getElementsByClassName("start")[0];
var settings = document.getElementsByClassName("settings")[0];
var sec = document.getElementById("sec");
var min = document.getElementById("min");
var timer;


console.log(start.innerHTML);
start.addEventListener("click", function() {
    console.log(start.innerHTML);
    if (start.innerHTML == "pause") {
        console.log("in if statement");
        start.innerHTML = "start";
        clearInterval(timer);


    } else {
        start.innerHTML = "pause";

        timer = setInterval(function() {
            if (sec.value == 00 && min.value != 00) {
                sec.value = 59;
                min.value--;
                if (min.value >= 0 && min.value < 10) {
                    min.value = "0" + min.value;
                }
            } else if (sec.value > 0) {
                sec.value--;
                if (sec.value >= 0 && sec.value < 10) {
                    sec.value = "0" + sec.value;
                }

            } else if (sec.value == 00 && min.value == 00) {
                clearInterval(timer);
                document.getElementById("circle").style.stroke = "#900A0A";
                setTimeout(function() { //Alert Box would appear before changing circle color so set it in a setTimout
                    alert("Time's Up!");
                    min.value = 15;
                    start.innerHTML = "start";
                    document.getElementById("circle").style.stroke = "#09A65A";
                }, 1000);




            }

        }, 1000)



    }
});

settings.addEventListener("click", function() {
    min.disabled = false;
    sec.disabled = false;
    if (sec.value >= 0 && sec.value < 10) {
        sec.value = "0" + sec.value;
    }
    if (min.value >= 0 && min.value < 10) {
        min.value = "0" + min.value;
    }
});