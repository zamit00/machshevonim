function mdd(){
	 window.location.href = "https://zamit00.github.io/machshevonim/madad.html";
}
function derib(){
	 window.location.href = "https://zamit00.github.io/machshevonim/simulator.html";
}

function radiochange(){
	let i ;
	i=1;
	let x = document.getElementById("radio-cont");
	const y= x.querySelectorAll('input[type="radio"].rd');
	let hp = document.getElementById("hadp");
	let tsh= document.getElementById("tash");
	y.forEach(rd => {
			
			if (rd.checked && i===1){
				hp.disabled=false;
				hp.value=0;
				tsh.disabled=true;
				tsh.value=0;
			}
			else if(rd.checked && i===2){
				hp.disabled=true;
				hp.value=0;
				tsh.disabled=false;
				tsh.value=0;
			}
			else if(rd.checked && i===3){
				
				hp.disabled=false;
				hp.value=0;
				tsh.disabled=false;
				tsh.value=0;
			}
			i++;
	});
	
}

function dosum(){
	let hadpeami = parseInt(document.getElementById("hadp").value);
	let tshlumim = parseInt(document.getElementById("tash").value);
	let tkf = parseInt(document.getElementById("tkofa").value);
	let dmn = document.getElementById("dmeyn").value;
	let atidi = document.getElementById("schomatidi")
	const ribit = (0.04-dmn/100)/12;
	let sumx=hadpeami;
	if(parseInt(hadpeami)===0 && parseInt(tshlumim)===0){
		alert("נדרש למלא סכומים") ;return;
		
	}
	else{
		let atd=hashev(hadpeami,tshlumim,tkf,ribit); console.log(atd);
		atidi.innerHTML= "סכום עתידי של ההשקעה: " + "<span style='color:green;'>" + atd + " "+ "שח" + "</span>" ;
		document.getElementById("hazhara").innerHTML="הסכום מחושב לפי ריבית שנתית בשיעור של 4%";
	}
	 if (tkf<10){atd=hashev(hadpeami,tshlumim,10,ribit);console.log(atd);} 
	 if (tkf<20){atd=hashev(hadpeami,tshlumim,20,ribit); console.log(atd)}
	 if (tkf<30){atd=hashev(hadpeami,tshlumim,30,ribit); console.log(atd)}
	 
	
	
	
}

function hashev(hp,ts,tk,rb){
	let sumx=hp;
	
	for(let i =1; i<=parseInt(tk)*12;i++){
			sumx=(ts +sumx)*(1+rb);
		}
		sumx = sumx.toFixed(0);
		sumx = parseFloat(sumx).toLocaleString();
		return sumx;
		
}
function toggle(x){
	if (x==="deribit"){
		document.getElementById("deribit").style.display="flex";
	
	document.getElementById("body").style.alignItems="center";
	}
	else if (x!=="deribit"){
		document.getElementById("deribit").style.display="none";
	        document.getElementById("body").style.alignItems="flex-start";
	}
	else if (x!=="deribit"){
		 document.getElementById("deribit").style.display="none";
	         document.getElementById("body").style.alignItems="flex-start";
	}
	else if (x!=="deribit"){
		document.getElementById("deribit").style.display="none";
	        document.getElementById("body").style.alignItems="flex-start";
	}
	
}
	
