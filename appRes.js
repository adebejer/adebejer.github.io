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
document.getElementById("PadroneFishHouse").onclick = function() {

    document.getElementById("Padrone-Fish-House").style.display = "block";
    document.getElementById("InfoPagePFH").style.display = "block";
    document.getElementById("Veduta").style.display = "none";
    document.getElementById("Serkin").style.display = "none";
    document.getElementById("Point-De-Vue").style.display = "none";
    document.getElementById("menuPadron").style.display = "none";
};

document.getElementById("VedutaRestaurant").onclick = function() {

    document.getElementById("Padrone-Fish-House").style.display = "none";
    document.getElementById("Veduta").style.display = "block";
    document.getElementById("InfoPageVR").style.display = "block";
    document.getElementById("Serkin").style.display = "none";
    document.getElementById("Point-De-Vue").style.display = "none";
    document.getElementById("menuVeduta").style.display = "none";
};

document.getElementById("IsSerkin").onclick = function() {

    document.getElementById("InfoPageSR").style.display = "block";
    document.getElementById("Serkin").style.display = "block";
    document.getElementById("Padrone-Fish-House").style.display = "none";
    document.getElementById("Veduta").style.display = "none";
    document.getElementById("Point-De-Vue").style.display = "none";
    document.getElementById("menuSerkin").style.display = "none";
};

document.getElementById("PointDeVue").onclick = function() {

    document.getElementById("Point-De-Vue").style.display = "block";
    document.getElementById("InfoPagePDV").style.display = "block";
    document.getElementById("Padrone-Fish-House").style.display = "none";
    document.getElementById("Veduta").style.display = "none";
    document.getElementById("Serkin").style.display = "none";
    document.getElementById("menuPoint").style.display = "none";
};



document.getElementById("PadronMenuClick").onclick = function() {

    document.getElementById("InfoPagePFH").style.display = "none";
    document.getElementById("Veduta").style.display = "none";
    document.getElementById("Serkin").style.display = "none";
    document.getElementById("Point-De-Vue").style.display = "none";
    document.getElementById("menuPadron").style.display = "block";
};

document.getElementById("PadronMenuClickHide").onclick = function() {

    document.getElementById("InfoPagePFH").style.display = "block";
    document.getElementById("Veduta").style.display = "none";
    document.getElementById("Serkin").style.display = "none";
    document.getElementById("Point-De-Vue").style.display = "none";
    document.getElementById("menuPadron").style.display = "none";
};


document.getElementById("VedutaMenuClick").onclick = function() {

    document.getElementById("InfoPageVR").style.display = "none";
    document.getElementById("Padrone-Fish-House").style.display = "none";
    document.getElementById("Serkin").style.display = "none";
    document.getElementById("Point-De-Vue").style.display = "none";
    document.getElementById("menuVeduta").style.display = "block";
};

document.getElementById("VedutaMenuClickHide").onclick = function() {

    document.getElementById("InfoPageVR").style.display = "block";
    document.getElementById("Padrone-Fish-House").style.display = "none";
    document.getElementById("Serkin").style.display = "none";
    document.getElementById("Point-De-Vue").style.display = "none";
    document.getElementById("menuVeduta").style.display = "none";
};


document.getElementById("SerkinMenuClick").onclick = function() {

    document.getElementById("InfoPageSR").style.display = "none";
    document.getElementById("Veduta").style.display = "none";
    document.getElementById("Padrone-Fish-House").style.display = "none";
    document.getElementById("Point-De-Vue").style.display = "none";
    document.getElementById("menuSerkin").style.display = "block";
};

document.getElementById("SerkinMenuClickHide").onclick = function() {

    document.getElementById("InfoPageSR").style.display = "block";
    document.getElementById("Veduta").style.display = "none";
    document.getElementById("Padrone-Fish-House").style.display = "none";
    document.getElementById("Point-De-Vue").style.display = "none";
    document.getElementById("menuSerkin").style.display = "none";
};


document.getElementById("PointDeVeuMenuClick").onclick = function() {

    document.getElementById("InfoPagePDV").style.display = "none";
    document.getElementById("Veduta").style.display = "none";
    document.getElementById("Padrone-Fish-House").style.display = "none";
    document.getElementById("Serkin").style.display = "none";
    document.getElementById("menuPoint").style.display = "block";
};

document.getElementById("PointMenuClickHide").onclick = function() {

    document.getElementById("InfoPagePDV").style.display = "block";
    document.getElementById("Veduta").style.display = "none";
    document.getElementById("Padrone-Fish-House").style.display = "none";
    document.getElementById("Serkin").style.display = "none";
    document.getElementById("menuPoint").style.display = "none";
};

