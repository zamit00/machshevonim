
window.onload = function() { 
    
    const select=document.getElementById('selectTkofa');
    const dmn=document.getElementById('dmn');
    const simul=document.getElementById('simul');
    
    for (let i = 1; i <= 30; i++) {
        let option = document.createElement('option');
        option.value = i;  // הערך של האופציה
        option.textContent = i;  // התצוגה של האופציה
        select.appendChild(option);  // מוסיף את האופציה ל-select
      }
      select.value=5;
    for (let i = 0; i <= 1.1; i+=0.05) {
        let option = document.createElement('option');
        option.value = Math.round(i*100)/100;  
        option.textContent = Math.round(i*100)/100;  
        dmn.appendChild(option);  // מוסיף את האופציה ל-select
      }
    
    sumsum();
    }
   
function back() {
  window.location.href = "https://zamit00.github.io/machshevonim/";
}


function sumsum() {
            
    // Retrieve values from input fields
    const hp=document.getElementById("schomHadPeami");
    const tash=document.getElementById("schomHodshi");
    let x1 = parseInt(hp.value);
    let x2 = parseInt(tash.value);
    let dn =document.getElementById("dmn").value;
     
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

       var table; var td; var tr;let par;let selectsim;
       const tablediv= document.getElementById("tozaot");
       tablediv.innerHTML=""; 
       par= document.createElement("p"); 
       par.innerText="חישוב לפי ריבית של 4 אחוזים:";
       tablediv.appendChild(par);
       table= document.createElement("table");
       tablediv.appendChild(table);
       
        
        
        if(x1>0){
                tr=document.createElement("tr");
                table.appendChild(tr);
                td=document.createElement("td");
                td.style.border="1px solid blue";
                td.innerText="סכום חד פעמי";
                tr.appendChild(td);
                td=document.createElement("td");
                td.style.border="1px solid blue";
                td.innerText= x1.toLocaleString()+shach;
                tr.appendChild(td);
            }
        if(x2>0){
                tr=document.createElement("tr");
                table.appendChild(tr);
                td=document.createElement("td");
                td.style.border="1px solid blue";
                td.innerText="סך הפקדות בתשלומים";
                tr.appendChild(td);
                td=document.createElement("td");
                td.style.border="1px solid blue";
                td.innerText=(x2*x3*12).toLocaleString() + shach;
                tr.appendChild(td);
            }
                tr=document.createElement("tr");
                table.appendChild(tr);
                td=document.createElement("td");
                td.style.border="1px solid blue";
                td.innerText="סך השקעה";
                tr.appendChild(td);
                td=document.createElement("td");
                td.style.border="1px solid blue";
                td.innerText=Number(x1+(x2*x3*12)).toLocaleString()+shach;
                tr.appendChild(td);
                
                tr=document.createElement("tr");
                table.appendChild(tr);
                td=document.createElement("td");
                td.style.border="1px solid blue";
                td.style.backgroundColor="blue";
                td.style.color="white";
                td.innerHTML="שווי השקעה עתידי ב - "+x3+textshanim;
                tr.appendChild(td);
                td=document.createElement("td");
                td.style.border="1px solid blue";
                td.style.backgroundColor="blue";
                td.style.color="white";
                td.innerText=parseInt(sum).toLocaleString() + shach;
                tr.appendChild(td);


            if(x3<10){
            tr=document.createElement("tr");
            table.appendChild(tr);
            td=document.createElement("td");
            td.style.border="1px solid blue";
             td.innerHTML="שווי השקעה ל - 10 שנים";
            tr.appendChild(td);
            td=document.createElement("td");
            td.style.border="1px solid blue";
            td.innerText=parseInt(sum10).toLocaleString() + shach;
            tr.appendChild(td);
            }
   
            if(x3<20){
            tr=document.createElement("tr");
            table.appendChild(tr);
            td=document.createElement("td");
            td.style.border="1px solid blue";
            td.innerHTML="שווי השקעה ל - 20 שנים";
            tr.appendChild(td);
            td=document.createElement("td");
            td.style.border="1px solid blue";
            td.innerText=parseInt(sum20).toLocaleString() + shach;
            tr.appendChild(td);
            }
    
            if(x3<30){
            tr=document.createElement("tr");
            table.appendChild(tr);
            td=document.createElement("td");
            td.style.border="1px solid blue";
            td.innerHTML="שווי השקעה ל - 30 שנים";
            tr.appendChild(td);
            td=document.createElement("td");
            td.style.border="1px solid blue";
            td.innerText=parseInt(sum30).toLocaleString() + shach;
            tr.appendChild(td);
            }
    
       par= document.createElement("p"); 
       par.innerText="בחר ריבית אחרת לסימולציה";
       tablediv.appendChild(par);
        
       selectsim =document.createElement("select");
        select.id="selsim";
        selectsim.style.marginRight="80px";
        tablediv.appendChild(selectsim);
        for (let i = 1; i <= 20; i++) {
        let option = document.createElement('option');
        option.value = i;  // הערך של האופציה
        option.textContent = i + "%";  // התצוגה של האופציה
        selectsim.appendChild(option);  // מוסיף את האופציה ל-select
        selectsim.onchange="sumsum()" 

        let element=document.getElementById('selsim');
        let sumsim;let rsim;
         
        if(element){
            rsim=(element.value-dn)/100;
            sumsim=hishuv(x1,x2,rsim,x3);
            tr=document.createElement("tr");
            table.appendChild(tr);
            td=document.createElement("td");
            td.style.border="1px solid blue";
            td.style.backgroundColor="green";
            td.style.color="yellow";
            td.innerHTML="שווי השקעה ריבית סימולציה";
            tr.appendChild(td);
            td=document.createElement("td");
            td.style.border="1px solid blue";
            td.innerText=parseInt(sumsim).toLocaleString() + shach;
            tr.appendChild(td);
            td.style.backgroundColor="green";
            td.style.color="yellow";
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

