// weather time and date display
function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }

function display_ct() {
    var x = new Date()
    //date
    var day=x.getDate();
    var month=x.getMonth()+1;
    var year=x.getFullYear();
    //adding a zero(0) before single digits
    if (month <10 ){month='0' + month;}
    if (day <10 ){day='0' + day;}
    var date = day+'/'+month+'/'+year;

    //time 
    var hour=x.getHours();
    var minute=x.getMinutes();
    //adding a zero(0) before single digits
    if(hour <10 ){hour='0'+hour;}
    if(minute <10 ) {minute='0' + minute; }
    var time = hour+':'+minute;

    document.getElementById('ct').innerHTML = time;
    document.getElementById('cd').innerHTML = date;
    display_c()
    }

function weatherBalloon() {
    display_c();
    var key = 'e39fbe611d9b3fa682a9d1ff1913b0ee';
        fetch('https://api.openweathermap.org/data/2.5/weather?q=rabat,mt&appid=' + key)
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
          drawWeather(data);
        })
        .catch(function() {
          // catch any errors
        });
    }

window.onload = function() {
        weatherBalloon();
    }

function drawWeather( d ) {
        var celcius = Math.round(parseFloat(d.main.temp)-273.15);
        document.getElementById('temp').innerHTML = celcius + '&deg;'+'C';
    }


// hiding and showing different pages in the web page
document.getElementById("museum").onclick = function() {

    document.getElementById("Wignacourt-Museum").style.display = "none";
    document.getElementById("Saint-Pauls-Catacombs").style.display = "none";
    document.getElementById("Saint-Agathas-Catacombs").style.display = "none";
    document.getElementById("catacombsSelection").style.display = "none";
    document.getElementById("Domus-Romana").style.display = "none";
    document.getElementById("museumsSelection").style.display = "block";
    document.getElementById("Overview").style.display = "none";
};

document.getElementById("catacombs").onclick = function() {

    document.getElementById("Wignacourt-Museum").style.display = "none";
    document.getElementById("Saint-Pauls-Catacombs").style.display = "none";
    document.getElementById("Saint-Agathas-Catacombs").style.display = "none";
    document.getElementById("museumsSelection").style.display = "none";
    document.getElementById("Domus-Romana").style.display = "none";
    document.getElementById("catacombsSelection").style.display = "block";
    document.getElementById("Overview").style.display = "none";
};

document.getElementById("PaulsCatacombsClick").onclick = function() {

    document.getElementById("Wignacourt-Museum").style.display = "none";
    document.getElementById("catacombsSelection").style.display = "none";
    document.getElementById("Saint-Agathas-Catacombs").style.display = "none";
    document.getElementById("museumsSelection").style.display = "none";
    document.getElementById("Domus-Romana").style.display = "none";
    document.getElementById("Saint-Pauls-Catacombs").style.display = "block";
    document.getElementById("Overview").style.display = "none";
};

document.getElementById("AgathasCatacombsClick").onclick = function() {

    document.getElementById("Wignacourt-Museum").style.display = "none";
    document.getElementById("catacombsSelection").style.display = "none";
    document.getElementById("Saint-Pauls-Catacombs").style.display = "none";
    document.getElementById("museumsSelection").style.display = "none";
    document.getElementById("Domus-Romana").style.display = "none";
    document.getElementById("Saint-Agathas-Catacombs").style.display = "block";
    document.getElementById("Overview").style.display = "none";
};

document.getElementById("WignacourtMuseumClick").onclick = function() {

    document.getElementById("Wignacourt-Museum").style.display = "block";
    document.getElementById("catacombsSelection").style.display = "none";
    document.getElementById("Saint-Pauls-Catacombs").style.display = "none";
    document.getElementById("Saint-Agathas-Catacombs").style.display = "none";
    document.getElementById("museumsSelection").style.display = "none";
    document.getElementById("Domus-Romana").style.display = "none";
    document.getElementById("Overview").style.display = "none";
};

document.getElementById("DomusRomanaClick").onclick = function() {

    document.getElementById("Wignacourt-Museum").style.display = "none";
    document.getElementById("catacombsSelection").style.display = "none";
    document.getElementById("Saint-Pauls-Catacombs").style.display = "none";
    document.getElementById("Saint-Agathas-Catacombs").style.display = "none";
    document.getElementById("museumsSelection").style.display = "none";
    document.getElementById("Domus-Romana").style.display = "block";
    document.getElementById("Overview").style.display = "none";
};

document.getElementById("back").onclick = function() {

    document.getElementById("Wignacourt-Museum").style.display = "none";
    document.getElementById("catacombsSelection").style.display = "none";
    document.getElementById("Saint-Pauls-Catacombs").style.display = "none";
    document.getElementById("Saint-Agathas-Catacombs").style.display = "none";
    document.getElementById("museumsSelection").style.display = "none";
    document.getElementById("Domus-Romana").style.display = "none";
    document.getElementById("Overview").style.display = "block";
};

