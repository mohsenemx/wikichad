
    var rand = Math.floor(Math.random() * qoutes.length + 0);
    document.getElementById("q").innerHTML = qoutes[rand].text + '<br /> - ' + qoutes[rand].name;
    document.getElementById("q2").setAttribute("src", qoutes[rand].picture);
    
