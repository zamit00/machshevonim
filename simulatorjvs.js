
window.onload = function() { 
    
    const select=document.getElementById('selectTkofa')
    for (let i = 1; i <= 30; i++) {
        let option = document.createElement('option');
        option.value = i;  // הערך של האופציה
        option.textContent = i;  // התצוגה של האופציה
        select.appendChild(option);  // מוסיף את האופציה ל-select
      }
      select.value=5;
    sumsum();
    }

function gotohome(){
    window.location.href = 'index.html';
   
}


function sumsum() {
            
    // Retrieve values from input fields
    const hp=document.getElementById("schomHadPeami");
    const tash=document.getElementById("schomHodshi");
    let x1 = parseInt(hp.value);
    let x2 = parseInt(tash.value);
    //let dn = parseFloat(document.getElementsByName("dmeynihul")[0].value);
    let dn=0;
    //let ribitchoose=document.getElementById("selectribit");
    //let ribit=ribitchoose.value;
    
    let z=0.04-dn/100;

    if(x1<0||x2<0){alert('סכומים לא תקינים');hp.value=1000;tash.value=200;return;}
    let selectElement = document.getElementById("selectTkofa");
    let x3 = selectElement.value; // Gets the selected value
    
   const textopen="סכום השקעה עתידי לתקופה של - ";
   const textshanim=" שנים:       ";
   const shach = " ש\"ח"; 
   
   
  // if (document.getElementById("rd11").checked){z1=0.09-dn/100;}
  //  if (document.getElementById("rd22").checked){z1=0.05-dn/100;}
  //  if (document.getElementById("rd33").checked){z1=0.02-dn/100;}
  //  if (document.getElementById("rd44").checked){z1=ribit-dn/100;}

    
   
    
   let sum;let sum10;let sum20;let sum30;
   sum=hishuv(x1,x2,z,x3);
   sum10=hishuv(x1,x2,z,10);
   sum20=hishuv(x1,x2,z,20);
   sum30=hishuv(x1,x2,z,30);
    if (isNaN(sum) ) {alert('סכומים לא תקינים');hp.value=1000;tash.value=200;;return;}
        //let integerPart=part(sum);
       console.log(sum.toLocaleString());
       console.log(sum10.toLocaleString());
       console.log(sum20.toLocaleString());
       console.log(sum30.toLocaleString());


       const toz= document.getElementById("toz");
       const toz10= document.getElementById("toz10");
       const toz20= document.getElementById("toz20");
       const toz30= document.getElementById("toz30");
       const kerenhadp= document.getElementById("kerenhadp");
       const kerentash= document.getElementById("kerentash");
       const kerensach= document.getElementById("kerensach");
       const shuvy= document.getElementById("shuvy");

       kerenhadp.innerText=x1.toLocaleString()+shach;
       kerentash.innerText=(x2*x3*12).toLocaleString() + shach;
       kerensach.innerText=Number(x1+(x2*x3*12)).toLocaleString()+shach;
       shuvy.innerHTML="שווי השקעה עתידי ב - "+x3+textshanim;
       toz.innerText= parseInt(sum).toLocaleString() + shach;
       if(x3<10){toz10.innerText= parseInt(sum10).toLocaleString()+ shach;}
       if(x3<20){toz20.innerText= parseInt(sum20).toLocaleString()+ shach;}
       if(x3<30){toz30.innerText= parseInt(sum30).toLocaleString()+ shach;}
       // document.getElementById("lblfirst0").style.display = "block";

        //sum=hishuv(x1,x2,z1,x3);
        //integerPart=part(sum);
   
       // document.getElementById("lblfirst00").textContent=textopen + x3 + textnext + integerPart + shach;
       // document.getElementById("lblfirst00").style.display = "block";
  

    if(x3<10){
        /*document.getElementById("lblfirst10").style.display = "block";
        document.getElementById("lblfirst100").style.display = "block";
        sum=hishuv(x1,x2,z,10);
        integerPart=part(sum);
        document.getElementById("lblfirst10").textContent=textopen + "10" + textnext + integerPart + shach;
        
        sum=hishuv(x1,x2,z1,10);
        integerPart=part(sum);
        document.getElementById("lblfirst100").textContent=textopen + "10" + textnext + integerPart + shach;

    }
    else {document.getElementById("lblfirst10").style.display = "none";
          document.getElementById("lblfirst100").style.display = "none";*/
    }

    if(x3<20){
        /*document.getElementById("lblfirst20").style.display = "block";
        document.getElementById("lblfirst200").style.display = "block";
        sum=hishuv(x1,x2,z,20);
        integerPart=part(sum);
        document.getElementById("lblfirst20").textContent=textopen + "20" + textnext + integerPart + shach;
        
        sum=hishuv(x1,x2,z1,20);
        integerPart=part(sum);
        document.getElementById("lblfirst200").textContent=textopen + "20" + textnext + integerPart + shach;

            }
    else {document.getElementById("lblfirst20").style.display = "none";
        document.getElementById("lblfirst200").style.display = "none";*/
    }

    if(x3<30){/*
        document.getElementById("lblfirst30").style.display = "block";
        document.getElementById("lblfirst300").style.display = "block";
        sum=hishuv(x1,x2,z,30);
        integerPart=part(sum);
        document.getElementById("lblfirst30").textContent=textopen + "30" + textnext + integerPart + shach;
        
        sum=hishuv(x1,x2,z1,30);
        integerPart=part(sum);
        document.getElementById("lblfirst300").textContent=textopen + "30" + textnext + integerPart + shach;
    
    }
    else {document.getElementById("lblfirst30").style.display = "none";
        document.getElementById("lblfirst300").style.display = "none";*/
    }


}

function toggleTextboxes() {
const text1 = document.getElementById("schomHadPeami");
const text2 = document.getElementById("schomHodshi");

if (document.getElementById("hadPeami").checked) {
text1.disabled = false;
text2.disabled = true;
text1.value=1000;text2.value=0;

} else if (document.getElementById("beTashlumim").checked) {
   
text1.disabled = false;
text2.disabled = true;
text1.value=0;text2.value=200;



} else if (document.getElementById("hadpeamiVeTashlumim").checked) {
text1.disabled = false;
text2.disabled = false;
text1.value=1000;text2.value=200;
}
sumsum();
}


function hishuv(x,y,z,t){
    let hishuv = x + y;
    hishuv=hishuv * (1+z/12);
    for (let i = 1; i < t*12; i++) {
        hishuv = (hishuv+y) * (1+z/12);
    }
    //hishuv= part(hishuv)
    return hishuv;
}

function part(partx){
    let part = partx.toString().split(".");
    let integerPart = part[0]; // "123"
    integerPart=integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    part=integerPart;
    return part;

}
function gotosheelon(){
   
    localStorage.removeItem('savedMessage');
    document.getElementById("opn").style.display = "none";
    document.getElementById("cls").style.display = "block";
    document.getElementById("alltozaa").style.display = "none";
    document.getElementById("iframe").style.display = "block";

    const iframe = document.getElementById('myIframe');

    iframe.contentWindow.postMessage('clearAnswers', '*');
    iframe.style.display = 'block';
}
function backfromsheelon(){
    let touser="";
    document.getElementById("opn").style.display = "block";
    document.getElementById("cls").style.display = "none";
    document.getElementById("iframe").style.display = "none";
    document.getElementById("alltozaa").style.display = "block";
    document.getElementById("sikonnimdad").style.display = "none";
    const savedMessage = localStorage.getItem('savedMessage');
    if (savedMessage) {touser=savedMessage;
         document.getElementById("sikonnimdad").style.height="110px";
        document.getElementById("sikonnimdad").innerText='סיכון ' + touser;
    } else {
       document.getElementById("sikonnimdad").style.height="110px";
        touser="לא בוצע שאלון";
        document.getElementById("sikonnimdad").innerText=touser;
    }
    
    document.getElementById("sikonnimdad").style.display = "block";
    localStorage.removeItem('savedMessage');
    return;
       
}
function gotomaslul() {
    
   //const targetWindow = window.open('https://zamit00.github.io/HZgemel/', '_blank');
   //const message = document.getElementById("sikonnimdad").innerText;
   //if (message !== ''){
  // targetWindow.postMessage(message, 'https://zamit00.github.io/HZgemel/');}
   window.location.href = 'netunim.html';
   
}
