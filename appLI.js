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





document.getElementById("church").onclick = function() {

    document.getElementById("churchMain").style.display = "block";
    document.getElementById("convenienceMain").style.display = "none";
    document.getElementById("parkMain").style.display = "none";
    document.getElementById("healthMain").style.display = "none";
    document.getElementById("petrolMain").style.display = "none";
    document.getElementById("policeMain").style.display = "none";
};

document.getElementById("convenience").onclick = function() {

    document.getElementById("convenienceMain").style.display = "block";
    document.getElementById("churchMain").style.display = "none";
    document.getElementById("parkMain").style.display = "none";
    document.getElementById("healthMain").style.display = "none";
    document.getElementById("petrolMain").style.display = "none";
    document.getElementById("policeMain").style.display = "none";
};

document.getElementById("park").onclick = function() {

    document.getElementById("parkMain").style.display = "block";
    document.getElementById("churchMain").style.display = "none";
    document.getElementById("convenienceMain").style.display = "none";
    document.getElementById("healthMain").style.display = "none";
    document.getElementById("petrolMain").style.display = "none";
    document.getElementById("policeMain").style.display = "none";
};

document.getElementById("health").onclick = function() {

    document.getElementById("healthMain").style.display = "block";
    document.getElementById("churchMain").style.display = "none";
    document.getElementById("convenienceMain").style.display = "none";
    document.getElementById("parkMain").style.display = "none";
    document.getElementById("petrolMain").style.display = "none";
    document.getElementById("policeMain").style.display = "none";
};

document.getElementById("petrol").onclick = function() {

    document.getElementById("petrolMain").style.display = "block";
    document.getElementById("churchMain").style.display = "none";
    document.getElementById("convenienceMain").style.display = "none";
    document.getElementById("parkMain").style.display = "none";
    document.getElementById("healthMain").style.display = "none";
    document.getElementById("policeMain").style.display = "none";
};

document.getElementById("police").onclick = function() {

    document.getElementById("policeMain").style.display = "block";
    document.getElementById("churchMain").style.display = "none";
    document.getElementById("convenienceMain").style.display = "none";
    document.getElementById("parkMain").style.display = "none";
    document.getElementById("healthMain").style.display = "none";
    document.getElementById("petrolMain").style.display = "none";
};