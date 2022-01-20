//display_c() is used to refresh the time and date every second as to not keep time static
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


function busselection() {
  
    document.getElementById("route50").style.display = "none";
    document.getElementById("route51").style.display = "none";
    document.getElementById("route52").style.display = "none";
    document.getElementById("route53").style.display = "none";
    document.getElementById("route56").style.display = "none";
    document.getElementById("route181").style.display = "none";
    document.getElementById("route182").style.display = "none";
    document.getElementById("busSelection").style.display = "block";
    document.getElementById("transpOverview").style.display = "none";
    document.getElementById("siteSelection").style.display = "none";
    document.getElementById("wcm").style.display = "none";
    document.getElementById("dr").style.display = "none";
    document.getElementById("spc").style.display = "none";
    document.getElementById("sac").style.display = "none";
};

function choice1() {
  
    document.getElementById("route50").style.display = "block";
    document.getElementById("route51").style.display = "none";
    document.getElementById("route52").style.display = "none";
    document.getElementById("route53").style.display = "none";
    document.getElementById("route56").style.display = "none";
    document.getElementById("route181").style.display = "none";
    document.getElementById("route182").style.display = "none";
    document.getElementById("busSelection").style.display = "none";
    document.getElementById("transpOverview").style.display = "none";
    document.getElementById("siteSelection").style.display = "none";
    document.getElementById("wcm").style.display = "none";
    document.getElementById("dr").style.display = "none";
    document.getElementById("spc").style.display = "none";
    document.getElementById("sac").style.display = "none";
};

function choice2() {
  
    document.getElementById("route50").style.display = "none";
    document.getElementById("route51").style.display = "block";
    document.getElementById("route52").style.display = "none";
    document.getElementById("route53").style.display = "none";
    document.getElementById("route56").style.display = "none";
    document.getElementById("route181").style.display = "none";
    document.getElementById("route182").style.display = "none";
    document.getElementById("busSelection").style.display = "none";
    document.getElementById("transpOverview").style.display = "none";
    document.getElementById("siteSelection").style.display = "none";
    document.getElementById("wcm").style.display = "none";
    document.getElementById("dr").style.display = "none";
    document.getElementById("spc").style.display = "none";
    document.getElementById("sac").style.display = "none";
};

function choice3() {
  
    document.getElementById("route50").style.display = "none";
    document.getElementById("route51").style.display = "none";
    document.getElementById("route52").style.display = "block";
    document.getElementById("route53").style.display = "none";
    document.getElementById("route56").style.display = "none";
    document.getElementById("route181").style.display = "none";
    document.getElementById("route182").style.display = "none";
    document.getElementById("busSelection").style.display = "none";
    document.getElementById("transpOverview").style.display = "none";
    document.getElementById("siteSelection").style.display = "none";
    document.getElementById("wcm").style.display = "none";
    document.getElementById("dr").style.display = "none";
    document.getElementById("spc").style.display = "none";
    document.getElementById("sac").style.display = "none";
};

function choice4() {
  
    document.getElementById("route50").style.display = "none";
    document.getElementById("route51").style.display = "none";
    document.getElementById("route52").style.display = "none";
    document.getElementById("route53").style.display = "block";
    document.getElementById("route56").style.display = "none";
    document.getElementById("route181").style.display = "none";
    document.getElementById("route182").style.display = "none";
    document.getElementById("busSelection").style.display = "none";
    document.getElementById("transpOverview").style.display = "none";
    document.getElementById("siteSelection").style.display = "none";
    document.getElementById("wcm").style.display = "none";
    document.getElementById("dr").style.display = "none";
    document.getElementById("spc").style.display = "none";
    document.getElementById("sac").style.display = "none";
};
function choice5() {
  
    document.getElementById("route50").style.display = "none";
    document.getElementById("route51").style.display = "none";
    document.getElementById("route52").style.display = "none";
    document.getElementById("route53").style.display = "none";
    document.getElementById("route56").style.display = "block";
    document.getElementById("route181").style.display = "none";
    document.getElementById("route182").style.display = "none";
    document.getElementById("busSelection").style.display = "none";
    document.getElementById("transpOverview").style.display = "none";
    document.getElementById("siteSelection").style.display = "none";
    document.getElementById("wcm").style.display = "none";
    document.getElementById("dr").style.display = "none";
    document.getElementById("spc").style.display = "none";
    document.getElementById("sac").style.display = "none";
};
function choice6() {
  
    document.getElementById("route50").style.display = "none";
    document.getElementById("route51").style.display = "none";
    document.getElementById("route52").style.display = "none";
    document.getElementById("route53").style.display = "none";
    document.getElementById("route56").style.display = "none";
    document.getElementById("route181").style.display = "block";
    document.getElementById("route182").style.display = "none";
    document.getElementById("busSelection").style.display = "none";
    document.getElementById("transpOverview").style.display = "none";
    document.getElementById("siteSelection").style.display = "none";
    document.getElementById("wcm").style.display = "none";
    document.getElementById("dr").style.display = "none";
    document.getElementById("spc").style.display = "none";
    document.getElementById("sac").style.display = "none";
};
function choice7() {
  
    document.getElementById("route50").style.display = "none";
    document.getElementById("route51").style.display = "none";
    document.getElementById("route52").style.display = "none";
    document.getElementById("route53").style.display = "none";
    document.getElementById("route56").style.display = "none";
    document.getElementById("route181").style.display = "none";
    document.getElementById("route182").style.display = "block";
    document.getElementById("busSelection").style.display = "none";
    document.getElementById("transpOverview").style.display = "none";
    document.getElementById("siteSelection").style.display = "none";
    document.getElementById("wcm").style.display = "none";
    document.getElementById("dr").style.display = "none";
    document.getElementById("spc").style.display = "none";
    document.getElementById("sac").style.display = "none";
};

function siteselection() {
  
    document.getElementById("route50").style.display = "none";
    document.getElementById("route51").style.display = "none";
    document.getElementById("route52").style.display = "none";
    document.getElementById("route53").style.display = "none";
    document.getElementById("route56").style.display = "none";
    document.getElementById("route181").style.display = "none";
    document.getElementById("route182").style.display = "none";
    document.getElementById("busSelection").style.display = "none";
    document.getElementById("transpOverview").style.display = "none";
    document.getElementById("siteSelection").style.display = "block";
    document.getElementById("wcm").style.display = "none";
    document.getElementById("dr").style.display = "none";
    document.getElementById("spc").style.display = "none";
    document.getElementById("sac").style.display = "none";
};

function site1() {
  
    document.getElementById("route50").style.display = "none";
    document.getElementById("route51").style.display = "none";
    document.getElementById("route52").style.display = "none";
    document.getElementById("route53").style.display = "none";
    document.getElementById("route56").style.display = "none";
    document.getElementById("route181").style.display = "none";
    document.getElementById("route182").style.display = "none";
    document.getElementById("busSelection").style.display = "none";
    document.getElementById("transpOverview").style.display = "none";
    document.getElementById("siteSelection").style.display = "none";
    document.getElementById("wcm").style.display = "block";
    document.getElementById("dr").style.display = "none";
    document.getElementById("spc").style.display = "none";
    document.getElementById("sac").style.display = "none";
};

function site2() {
  
    document.getElementById("route50").style.display = "none";
    document.getElementById("route51").style.display = "none";
    document.getElementById("route52").style.display = "none";
    document.getElementById("route53").style.display = "none";
    document.getElementById("route56").style.display = "none";
    document.getElementById("route181").style.display = "none";
    document.getElementById("route182").style.display = "none";
    document.getElementById("busSelection").style.display = "none";
    document.getElementById("transpOverview").style.display = "none";
    document.getElementById("siteSelection").style.display = "none";
    document.getElementById("wcm").style.display = "none";
    document.getElementById("dr").style.display = "block";
    document.getElementById("spc").style.display = "none";
    document.getElementById("sac").style.display = "none";
};

function site3() {
  
    document.getElementById("route50").style.display = "none";
    document.getElementById("route51").style.display = "none";
    document.getElementById("route52").style.display = "none";
    document.getElementById("route53").style.display = "none";
    document.getElementById("route56").style.display = "none";
    document.getElementById("route181").style.display = "none";
    document.getElementById("route182").style.display = "none";
    document.getElementById("busSelection").style.display = "none";
    document.getElementById("transpOverview").style.display = "none";
    document.getElementById("siteSelection").style.display = "none";
    document.getElementById("wcm").style.display = "none";
    document.getElementById("dr").style.display = "none";
    document.getElementById("spc").style.display = "block";
    document.getElementById("sac").style.display = "none";
};

function site4() {
  
    document.getElementById("route50").style.display = "none";
    document.getElementById("route51").style.display = "none";
    document.getElementById("route52").style.display = "none";
    document.getElementById("route53").style.display = "none";
    document.getElementById("route56").style.display = "none";
    document.getElementById("route181").style.display = "none";
    document.getElementById("route182").style.display = "none";
    document.getElementById("busSelection").style.display = "none";
    document.getElementById("transpOverview").style.display = "none";
    document.getElementById("siteSelection").style.display = "none";
    document.getElementById("wcm").style.display = "none";
    document.getElementById("dr").style.display = "none";
    document.getElementById("spc").style.display = "none";
    document.getElementById("sac").style.display = "block";
};


// function frontPage(){
//     window.location.replace("frontPage.html");
// }

// setInterval(frontPage, 1000);
