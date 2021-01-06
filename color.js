let scorered = 0;
let scoregreen = 0;
let scoreblue = 0;

function add1(){
    scorered += 10;
    document.getElementById("scorered").innerHTML = scorered;
    if (scorered < 0) {
        document.getElementById("rouge").value = scorered;
        document.getElementById("scorered").innerHTML = "Veuillez rentrer un nombre positif";
    } else if (scorered > 255) {
        document.getElementById("rouge").value = scorered;
        document.getElementById("scorered").innerHTML = "Veuillez rentrer un nombre inférieur à 255";
    } else  {
        document.getElementById("rouge").value = scorered;
    }
    return(scorered)
 }

 function add2(){
    scoregreen += 10;
    document.getElementById("scoregreen").innerHTML = scoregreen;
    if (scoregreen < 0) {
        document.getElementById("vert").value = scoregreen;
        document.getElementById("scoregreen").innerHTML = "Veuillez rentrer un nombre positif";
    } else if (scoregreen > 255) {
        document.getElementById("vert").value = scoregreen;
        document.getElementById("scoregreen").innerHTML = "Veuillez rentrer un nombre inférieur à 255";
    } else  {
        document.getElementById("vert").value = scoregreen;
    }
    return(scoregreen)
 }

 function add3(){
    scoreblue += 10;
    document.getElementById("scoreblue").innerHTML = scoreblue;
    if (scoreblue < 0) {
        document.getElementById("bleu").value = scoreblue;
        document.getElementById("scoreblue").innerHTML = "Veuillez rentrer un nombre positif";
    } else if (scoreblue > 255) {
        document.getElementById("bleu").value = scoreblue;
        document.getElementById("scoreblue").innerHTML = "Veuillez rentrer un nombre inférieur à 255";
    } else  {
        document.getElementById("bleu").value = scoreblue;
    }
    return(scoreblue)
 }


 function supp1(){
    scorered -= 10;
    document.getElementById("scorered").innerHTML = scorered;
    if (scorered < 0) {
        document.getElementById("rouge").value = scorered;
        document.getElementById("scorered").innerHTML = "Veuillez rentrer un nombre positif";
    } else if (scorered > 255) {
        document.getElementById("rouge").value = scorered;
        document.getElementById("scorered").innerHTML = "Veuillez rentrer un nombre inférieur à 255";
    } else  {
        document.getElementById("rouge").value = scorered;
    }
    return(scorered)
 }

 function supp2(){
    scoregreen -= 10;
    document.getElementById("scoregreen").innerHTML = scoregreen;
    if (scoregreen < 0) {
        document.getElementById("vert").value = scoregreen;
        document.getElementById("scoregreen").innerHTML = "Veuillez rentrer un nombre positif";
    } else if (scoregreen > 255) {
        document.getElementById("vert").value = scoregreen;
        document.getElementById("scoregreen").innerHTML = "Veuillez rentrer un nombre inférieur à 255";
    } else  {
        document.getElementById("vert").value = scoregreen;
    }
    return(scoregreen)
 }

 function supp3(){
    scoreblue -= 10;
    document.getElementById("scoreblue").innerHTML = scoreblue;
    if (scoreblue < 0) {
        document.getElementById("bleu").value = scoreblue;
        document.getElementById("scoreblue").innerHTML = "Veuillez rentrer un nombre positif";
    } else if (scoreblue > 255) {
        document.getElementById("bleu").value = scoreblue;
        document.getElementById("scoreblue").innerHTML = "Veuillez rentrer un nombre inférieur à 255";
    } else  {
        document.getElementById("bleu").value = scoreblue;
    }
    return(scoreblue)
 }


 /////////////////////////////////////////////////////////////////////



 function commun1(){
    let zoneTexte = document.getElementById("rouge").value;
    a = parseInt(zoneTexte)
    if (a < 0) {
        document.getElementById("scorered").innerHTML = "Veuillez rentrer un nombre positif";
    } else {
    document.getElementById("scorered").innerHTML = zoneTexte;
    scorered = a
 }}


 function commun2(){
    let zoneTexte = document.getElementById("vert").value;
    a = parseInt(zoneTexte)
    document.getElementById("scoregreen").innerHTML = zoneTexte;
    scoregreen = a
 }

 function commun3(){
    let zoneTexte = document.getElementById("bleu").value;
    a = parseInt(zoneTexte)
    document.getElementById("scoreblue").innerHTML = zoneTexte;
    scoreblue = a
 }


 /////////////////////////////////////////////////////////////////////

 
 function hexared(){

    if (scorered > 255 || scorered < 0) {
        let hexa = document.getElementById("hexa");
        hexa.innerHTML = "Erreur, veuillez rentrer une valeur correcte !";
        document.getElementById("color").style.background = 'black'
    } else if (scoregreen > 255 || scoregreen < 0) {
        let hexa = document.getElementById("hexa");
        hexa.innerHTML = "Erreur, veuillez rentrer une valeur correcte !";
        document.getElementById("color").style.background = 'black'
    } else if (scoreblue > 255 || scoreblue < 0) {
        let hexa = document.getElementById("hexa");
        hexa.innerHTML = "Erreur, veuillez rentrer une valeur correcte !";
        document.getElementById("color").style.background = 'black'
    } else {
    if (scorered < 15) {
        convert = '0' + scorered.toString(16);
    } else {
        convert = scorered.toString(16);
    }
    if (scoregreen < 15) {
        convert2 = '0' + scoregreen.toString(16);
    } else {
        convert2 = scoregreen.toString(16);
    }
    if (scoreblue < 15) {
        convert3 = '0' + scoreblue.toString(16);
    } else {
        convert3 = scoreblue.toString(16);
    }
   
    let hugo = convert + convert2 + convert3;

    couleurhexa = "#" + hugo

    document.getElementById("hexa10").value = couleurhexa;
    
    console.log(couleurhexa)
    let color = document.getElementById("color")
    color.style.background = String(couleurhexa);
 }
 }
 


var clicke = false;

  function theme() {
    let color0 = document.getElementById("h")
    let color = document.getElementById("hh")
    let color1 = document.getElementById("hhh")
    let color2 = document.getElementById("hhhh")
    let color3 = document.getElementById("hhhh")
    let color4 = document.getElementById("bas")
    let color5 = document.getElementById("bas2")
    let color6 = document.getElementById("body")
    let color7 = document.getElementById("fontcolor")
    let color8 = document.getElementById("rouge")
    let color9 = document.getElementById("vert")
    let color10 = document.getElementById("bleu")
    let color11 = document.getElementById("-button")
    let color12 = document.getElementById("-button2")
    let color13 = document.getElementById("-button3")
    let color14 = document.getElementById("+button")
    let color15 = document.getElementById("+button2")
    let color16 = document.getElementById("+button3")
    let color17 = document.getElementById("copie")
    let color18 = document.getElementById("coucou")
    let color19 = document.getElementById("coucou2")
    let color20 = document.getElementById("coucou3")
    let color21 = document.getElementById("coucou4")
    let color22 = document.getElementById("hexa10")
    

    if(!clicke) {
    color0.style.background = '#28293e'
    color.style.background = '#28293e'
    color1.style.color = '#de9898'
    color2.style.background = '#de9898'
    color3.style.color = '#28293e'
    color4.style.background = '#de9898'
    color5.style.color = '#28293e'
    color6.style.background = '#1E1F2E'
    color7.style.color = '#de9898'
    color8.style.color = '#de9898'
    color8.style.background = "#28293e"
    color8.style.borderColor = '#de9898'
    color9.style.color = '#de9898'
    color9.style.background = "#28293e"
    color9.style.borderColor = '#de9898'
    color10.style.color = '#de9898'
    color10.style.background = "#28293e"
    color10.style.borderColor = '#de9898'
    color11.style.background = "#de9898"
    color11.style.color = "#28293e"
    color12.style.background = "#de9898"
    color12.style.color = "#28293e"
    color13.style.background = "#de9898"
    color13.style.color = "#28293e"
    color14.style.background = "#de9898"
    color14.style.color = "#28293e"
    color15.style.background = "#de9898"
    color15.style.color = "#28293e"
    color16.style.background = "#de9898"
    color16.style.color = "#28293e"
    color17.style.background = "#de9898"
    color17.style.color = "#28293e"
    color18.style.background = "#1E1F2E"
    color19.style.color = "#28293e"
    color19.style.background = '#de9898'
    color20.style.color = "#de9898"
    color21.style.color = "#de9898"
    color22.style.background = '#28293e'
    color22.style.color = "#de9898"
    

    this.clicke = true

    } else {
    
        color0.style.background = '#1F1F1F'
        color.style.background = '#1F1F1F'
        color1.style.color = '#e8a72f'
        color2.style.background = '#e8a72f'
        color3.style.color = '#1F1F1F'
        color4.style.background = '#e8a72f'
        color5.style.color = '#1F1F1F'
        color6.style.background = '#1A1A1A'
        color7.style.color = '#e8a72f'
        color8.style.color = '#e8a72f'
        color8.style.background = "#1F1F1F"
        color8.style.borderColor = '#e8a72f'
        color9.style.color = '#e8a72f'
        color9.style.background = "#1F1F1F"
        color9.style.borderColor = '#e8a72f'
        color10.style.color = '#e8a72f'
        color10.style.background = "#1F1F1F"
        color10.style.borderColor = '#e8a72f'
        color11.style.background = "#e8a72f"
        color11.style.color = "#1F1F1F"
        color12.style.background = "#e8a72f"
        color12.style.color = "#1F1F1F"
        color13.style.background = "#e8a72f"
        color13.style.color = "#1F1F1F"
        color14.style.background = "#e8a72f"
        color14.style.color = "#1F1F1F"
        color15.style.background = "#e8a72f"
        color15.style.color = "#1F1F1F"
        color16.style.background = "#e8a72f"
        color16.style.color = "#1F1F1F"
        color17.style.background = "#e8a72f"
        color17.style.color = "#1F1F1F"
        color18.style.background = "#1A1A1A"
        color19.style.color = "#1F1F1F"
        color19.style.background = '#e8a72f'
        color20.style.color = "#e8a72f"
        color21.style.color = "#e8a72f"
        color22.style.background = '#1F1F1F'
        color22.style.color = "#e8a72f"

        this.clicke = false
    }


  }

function test() {
    a = 10
    b = a.toString(16)
    console.log(b)
}

function myFunction() {
  var copyText = document.getElementById("hexa10");
  copyText.focus();
  copyText.select();
  document.execCommand("copy");
  alert("Le code haxadécimale " + copyText.value + " a été copier.")
    
  }