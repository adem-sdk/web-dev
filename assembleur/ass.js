
tb1=document.getElementById("tab1");
tb2=document.getElementById("tab2");
n=6;
g=[]


for (y=0;y<=399;y++){
g[100+y]=y+1;

}

function repadd (z) {

if (m[800]!==undefined) {
	z[15].innerHTML=m[800]
}
if (m[801]!==undefined) {
	z[16].innerHTML=m[801]
}
if (m[802]!==undefined) {
	z[17].innerHTML=m[802]
}
if (m[803]!==undefined) {
	z[18].innerHTML=m[803]
}
if (m[804]!==undefined) {
	z[19].innerHTML=m[804]
}
}


function repxr (z) {

	if (rx[1]!==undefined) {
		z[11].innerHTML=rx[1]
	}
	if (rx[2]!==undefined) {
		z[12].innerHTML=rx[2]
	}
	if (rx[3]!==undefined) {
		z[13].innerHTML=rx[3]
	}
	if (rx[4]!==undefined) {
		z[14].innerHTML=rx[4]
	}
	
	}


function ajt(){
	tb1=document.getElementById("tab1");
    tb2=document.getElementById("tab2");
	nadda=100+n;

	n=n+1;
	
	 l = tb1.insertRow(-1);
	c1 = l.insertCell(0);
	c2 = l.insertCell(1);
	c3 = l.insertCell(2);
    c4 = l.insertCell(3);
	c1.innerHTML = nadda;
	c2.innerHTML = `<input type="text"  id="c${n}2"/>`;
	c3.innerHTML = `<input type="text"  id="c${n}3"/>`;
	c4.innerHTML = `<input type="text"  id="c${n}4"/>`;
	
	}
	
	acc=0;
	let m=[];
	let rx=[];	
	nadd=100;
function deroule(){
	
	
	
	for (i=1;i<=n;i++){
			
			command=document.getElementById(`c${i}2`).value;
			adressage=document.getElementById(`c${i}3`).value;
			op=document.getElementById(`c${i}4`).value;
		
		
/*----------------------------------------------------JMP---------------------------------------*/
if (command=="JMP" && adressage=="D" ){
	tb2=document.getElementById("tab2");
	var l2 = tb2.insertRow(-1);
	var c=[];
	for (j=0;j<20;j++){
		
		 c[j] = l2.insertCell(j);
		
			}
		
		
		tem=m[op]
		tem1=g[tem]
		i=tem1
		c[0].innerHTML=nadd;
		repadd (c);
		repxr (c); 
		c[1].innerHTML = command;
		c[2].innerHTML = adressage;
		c[3].innerHTML = op;
		c[4].innerHTML=tem;
		c[5].innerHTML =command+","+op;
		c[6].innerHTML =op;
		c[7].innerHTML =acc;
		c[8].innerHTML =acc;
		
		nadd=tem;
		nadd=parseFloat(nadd);
	
	}
	if (command=="JMP" && adressage=="IMM" ){
		tb2=document.getElementById("tab2");
		var l2 = tb2.insertRow(-1);
		var c=[];
		for (j=0;j<20;j++){
			
			 c[j] = l2.insertCell(j);
			
				}
			
			
			
			tem1=g[op]
			i=tem1
			c[0].innerHTML=nadd;
			repadd (c);
			repxr (c); 
			c[1].innerHTML = command;
			c[2].innerHTML = adressage;
			c[3].innerHTML = op;
			c[4].innerHTML=op;
			c[5].innerHTML =command+","+op;
			c[6].innerHTML =op;
			c[7].innerHTML =acc;
			c[8].innerHTML =acc;
			nadd=op;
			nadd=parseFloat(op);
	}
	
	
	
	if (command=="JMP" && adressage=="IND" ){
	tb2=document.getElementById("tab2");
	var l2 = tb2.insertRow(-1);
	var c=[];
	for (j=0;j<20;j++){
		
		 c[j] = l2.insertCell(j);
		
			}
		
			inver=m[op]
			tem=m[inver]
			tem1=g[tem]
			i=tem1
		c[0].innerHTML=nadd;
		repadd (c);
		repxr (c); 
		c[1].innerHTML = command;
		c[2].innerHTML = adressage;
		c[3].innerHTML = op;
		c[4].innerHTML=tem;
		c[5].innerHTML =command+","+op;
		c[6].innerHTML =p;
		c[7].innerHTML =m[p];
		c[8].innerHTML =acc;
		
		nadd=tem;
		nadd=parseFloat(nadd);
	
	}
	
	for (k=1;k<=4;k++){
		xr="XR"+k;
		if (command=="JMP" && adressage==xr ){
	tb2=document.getElementById("tab2");
	var l2 = tb2.insertRow(-1);
	var c=[];
	for (j=0;j<20;j++){
		
		 c[j] = l2.insertCell(j);
		
			}
		
		po=parseFloat(op)
		poo=parseFloat(rx[k])
		xa=poo+po;
		pa=m[xa]
		tem=m[pa]
		tem1=g[tem]
		i=tem1
		
		
		repadd (c);
		repxr (c); 
		c[0].innerHTML=nadd;
		c[1].innerHTML = command;
		c[2].innerHTML = adressage;
		c[3].innerHTML = op;
		c[4].innerHTML=tem;
		c[5].innerHTML =command+","+op;
		c[6].innerHTML =xa;
		c[7].innerHTML =m[xa];
		c[8].innerHTML =acc;
		
	nadd=tem;
	nadd=parseFloat(nadd);
	
	   } 
	   
	   }







	   command=document.getElementById(`c${i}2`).value;
			adressage=document.getElementById(`c${i}3`).value;
			op=document.getElementById(`c${i}4`).value;


	/*----------------------------------------------------store---------------------------------------*/
		if (command=="STORE" && adressage=="D" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				m[op]=acc
				c[0].innerHTML=nadd;
				repadd (c);
				repxr (c); 
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =op;
				c[7].innerHTML =acc;
				c[8].innerHTML =acc;
				
			
			
			}
			if (command=="STORE" && adressage=="IMM" ){
			alert("impossi")
			
			}
			
			
			
			if (command=="STORE" && adressage=="IND" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				p=m[op]
				
				m[p]=acc
				c[0].innerHTML=nadd;
				repadd (c);
				repxr (c); 
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =p;
				c[7].innerHTML =m[p];
				c[8].innerHTML =acc;
				
			
			
			}
			
			for (k=1;k<=4;k++){
				xr="XR"+k;
				if (command=="STORE" && adressage==xr ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				po=parseFloat(op)
				poo=parseFloat(rx[k])
				xa=poo+po;
				m[xa]=acc
				
				
				
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =xa;
				c[7].innerHTML =m[xa];
				c[8].innerHTML =acc;
				
			
			
			   } 
			   
			   }
			   
			   
			   
	/*----------------------------------------------------LOAD---------------------------------------*/
		if (command=="LOAD" && adressage=="D" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				acc=m[op];
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =op;
				c[7].innerHTML =acc;
				c[8].innerHTML =acc;
				
			
			
			}
			if (command=="LOAD" && adressage=="IMM" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				acc=op;
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				
				c[8].innerHTML =acc;
				
			
			}
			
			
			
			if (command=="LOAD" && adressage=="IND" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				p=m[op]
				
				acc=m[p];
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =p;
				c[7].innerHTML =m[p];
				c[8].innerHTML =acc;
				
			
			
			}
			
			for (k=1;k<=4;k++){
				xr="XR"+k;
				if (command=="LOAD" && adressage==xr ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				po=parseFloat(op)
				poo=parseFloat(rx[k])
				xa=poo+po;
				acc=m[xa];
				
				
				
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =xa;
				c[7].innerHTML =m[xa];
				c[8].innerHTML =acc;
				
			
			
			   } 
			   
			   }
			
			
			
			
			
			
		
	/*-------------------------------read----------------------------------------------------------------------------*/
			
        if (command=="READ"  ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
				}
				vread=prompt("donner");
				acc=vread;
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = "READ";
				c[9].innerHTML =`<input type="text" readonly="readonly" value="${vread}" />`
			    c[5].innerHTML =command+","+op;
				c[4].innerHTML=nadd+1;
			    
				c[8].innerHTML =acc;
			}
			
			
			
			
	/*-----------------------------------------WRITE-----------------------------------------------------------------------*/
	
	   if (command=="WRITE"  ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
				}
				
				vread=acc;
				repadd (c);
				repxr (c); 
				c[1].innerHTML = command;
				c[0].innerHTML=nadd;
				c[10].innerHTML =`<input type="text" readonly="readonly" value="${vread}" />`;
			    c[5].innerHTML =command+","+op;
				c[4].innerHTML=nadd+1;
			    c[7].innerHTML =acc;
				c[8].innerHTML =acc;
			}
	
	
	
	
	/*------------------------------add---------------------------------------------------------------------------*/
			
			if (command=="ADD" && adressage=="D" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				
				acc=parseFloat(acc)+parseFloat(m[op])
				repadd (c);
				repxr (c); 
				c[1].innerHTML = command;
				c[0].innerHTML=nadd;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[5].innerHTML =command+","+op;
				c[4].innerHTML=nadd+1;
				c[6].innerHTML =op;
				c[7].innerHTML =m[op];
				c[8].innerHTML =acc;
				
			
			
			}
		if (command=="ADD" && adressage=="IND" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
			
				
				inver=m[op]
				acc=parseFloat(acc)+parseFloat(m[inver])
				
				repadd (c);
				repxr (c); 
				c[1].innerHTML = command;
				c[0].innerHTML=nadd;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =inver;
				c[7].innerHTML =m[inver];
				c[8].innerHTML =acc;
				
			
			
			}
		
		if (command=="ADD" && adressage=="IMM" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
			
				
				acc=parseFloat(acc)+parseFloat(op)
				
				repadd (c);
				repxr (c); 
				c[1].innerHTML = command;
				c[0].innerHTML=nadd;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[5].innerHTML =command+","+op;
				c[4].innerHTML=nadd+1;
				
				c[8].innerHTML =acc;
				
			
			
			}
			
			for (k=1;k<=4;k++){
				xr="XR"+k;
				if (command=="ADD" && adressage==xr ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				po=parseFloat(op)
				poo=parseFloat(rx[k])
				xa=poo+po;
				
				
				
				acc=parseFloat(acc)+parseFloat(m[xa])
				
				repadd (c);
				repxr (c); 
				c[1].innerHTML = command;
				c[0].innerHTML=nadd;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =xa;
				c[7].innerHTML =m[xa];
				c[8].innerHTML =acc;
				
			
			
			}
			
				
				
				
				
				}
				
	/*-----------------------------------------sub----------------------------------------------------------------*/
	
	if (command=="SUB" && adressage=="D" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				
				acc=parseFloat(acc) - parseFloat(m[op])
				
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =op;
				c[7].innerHTML =m[op];
				c[8].innerHTML =acc;
				
			
			
			}
		if (command=="SUB" && adressage=="IND" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				
				inver=m[op]
				acc=parseFloat(acc) - parseFloat(m[inver])

				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =inver;
				c[7].innerHTML =m[inver];
				c[8].innerHTML =acc;
				
			
			
			}
		
		if (command=="SUB" && adressage=="IMM" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
			
				
				acc=parseFloat(acc) - parseFloat(op)
				
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;  
				c[8].innerHTML =acc;
				
			
			
			}
			
			for (k=1;k<=4;k++){
				xr="XR"+k;
				if (command=="SUB" && adressage==xr ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				po=parseFloat(op)
				poo=parseFloat(rx[k])
				xa=poo+po;
				
				
				
				acc=parseFloat(acc) - parseFloat(m[xa])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =xa;
				c[7].innerHTML =m[xa];
				c[8].innerHTML =acc;
				
			
			
			}
			
				
				
				
				
				}
				
	/*------------------------------------------MUL-----------------------------------------------------------------------*/
				
				if (command=="MUL" && adressage=="D" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				
				acc=parseFloat(acc) * parseFloat(m[op])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =op;
				c[7].innerHTML =m[op];
				c[8].innerHTML =acc;
				
			
			
			}
		if (command=="MUL" && adressage=="IND" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
			
				
				inver=m[op]
				acc=parseFloat(acc) * parseFloat(m[inver])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =inver;
				c[7].innerHTML =m[inver];
				c[8].innerHTML =acc;
				
			
			
			}
		
		if (command=="MUL" && adressage=="IMM" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
			
				
				acc=parseFloat(acc) * parseFloat(op)
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[5].innerHTML =command+","+op;
				c[4].innerHTML=nadd+1;
				c[8].innerHTML =acc;
				
			
			
			}
			
			for (k=1;k<=4;k++){
				xr="XR"+k;
				if (command=="MUL" && adressage==xr ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				po=parseFloat(op)
				poo=parseFloat(rx[k])
				xa=poo+po;
				
				
				
				acc=parseFloat(acc) * parseFloat(m[xa])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =xa;
				c[7].innerHTML =m[xa];
				c[8].innerHTML =acc;
				
			
			
			}
			
				
				
				
				
				}
				
				
	
	/*-------------------------------------------------div-----------------------------------------------------------------*/
				
				
				if (command=="DIV" && adressage=="D" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
			
				
				acc=parseFloat(acc) / parseFloat(m[op])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =op;
				c[7].innerHTML =m[op];
				c[8].innerHTML =acc;
				
			
			
			}
		if (command=="DIV" && adressage=="IND" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				
				inver=m[op]
				acc=parseFloat(acc) / parseFloat(m[inver])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =inver;
				c[7].innerHTML =m[inver];
				c[8].innerHTML =acc;
				
			
			
			}
		
		if (command=="DIV" && adressage=="IMM" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
			
				
				acc=parseFloat(acc) / parseFloat(op)
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				
				c[8].innerHTML =acc;
				
			
			
			}
			
			for (k=1;k<=4;k++){
				xr="XR"+k;
				if (command=="DIV" && adressage==xr ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				po=parseFloat(op)
				poo=parseFloat(rx[k])
				xa=poo+po;
				
				
				
				acc=parseFloat(acc) / parseFloat(m[xa])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =xa;
				c[7].innerHTML =m[xa];
				c[8].innerHTML =acc;
				
			
			
			}
			
				
				
				
				
				}
				
				
				
				
	/*---------------------------------move xr-----------------------------------------------------------------------------*/
				for (k=1;k<=4;k++){
					cxr="MOVE XR"+k;
			 if (command==cxr ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
				}
				
				rx[k]=acc;
				
				
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[5].innerHTML =command+","+op;
				c[4].innerHTML=nadd+1;
				c[1].innerHTML = command;
				
			
			
			}
				}
		/*-----------------------and-------------------------------------------------------------------------*/
				
			if (command=="AND" && adressage=="D" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				
				acc=parseFloat(acc) & parseFloat(m[op])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =op;
				c[7].innerHTML =m[op];
				c[8].innerHTML =acc;
				
			
			
			}
			
		if (command=="AND" && adressage=="IND" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				
				inver=m[op]
				acc=parseFloat(acc) & parseFloat(m[inver])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =inver;
				c[7].innerHTML =m[inver];
				c[8].innerHTML =acc;
				
			
			
			}
			
		if (command=="AND" && adressage=="IMM" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
			
				
				acc=parseFloat(acc) & parseFloat(op)
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[5].innerHTML =command+","+op;
				c[4].innerHTML=nadd+1;
				c[8].innerHTML =acc;
				
			
			
			}
			
		for (k=1;k<=4;k++){
				xr="XR"+k;
				if (command=="AND" && adressage==xr ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				po=parseFloat(op)
				poo=parseFloat(rx[k])
				xa=poo+po;
				
				
				
				acc=parseFloat(acc) & parseFloat(m[xa])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =xa;
				c[7].innerHTML =m[xa];
				c[8].innerHTML =acc;
				
			
			
			}
			
				
				
				
				
				}
				
			/*---------------------or------------------------------------------------------------------------------------------------------*/
			
			if (command=="OR" && adressage=="D" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				
				acc=parseFloat(acc) | parseFloat(m[op])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =op;
				c[7].innerHTML =m[op];
				c[8].innerHTML =acc;
				
			
			
			}
			
		if (command=="OR" && adressage=="IND" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				
				inver=m[op]
				acc=parseFloat(acc) | parseFloat(m[inver])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =inver;
				c[7].innerHTML =m[inver];
				c[8].innerHTML =acc;
				
			
			
			}
			
		if (command=="OR" && adressage=="IMM" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
			
				
				acc=parseFloat(acc) | parseFloat(op)
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[8].innerHTML =acc;
				
			
			
			}
			
		for (k=1;k<=4;k++){
				xr="XR"+k;
				if (command=="OR" && adressage==xr ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				po=parseFloat(op)
				poo=parseFloat(rx[k])
				xa=poo+po;
				
				
				
				acc=parseFloat(acc) | parseFloat(m[xa])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =xa;
				c[7].innerHTML =m[xa];
				c[8].innerHTML =acc;
				
			
			
			}
			
				
				
				
				
				}
				
	/* --------------------not -------------------------------------------------------------------------------*/
			
			if (command=="NOT" && adressage=="D" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				
				acc= ~ parseFloat(m[op])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =op;
				c[7].innerHTML =m[op];
				c[8].innerHTML =acc;
				
			
			
			}
			
			if (command=="NOT" && adressage=="IND" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
				
				inver=m[op]
				acc= ~ parseFloat(m[inver])
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =inver;
				c[7].innerHTML =m[inver];
				c[8].innerHTML =acc;
				
			
			
			}
			
		if (command=="NOT" && adressage=="IMM" ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				
				
			
				
				acc= ~ parseFloat(op)
				repadd (c);
				repxr (c); 
				c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				
				c[8].innerHTML =acc;
				
			
			
			}
			
		for (k=1;k<=4;k++){
				xr="XR"+k;
				if (command=="NOT" && adressage==xr ){
			tb2=document.getElementById("tab2");
			var l2 = tb2.insertRow(-1);
			var c=[];
			for (j=0;j<20;j++){
				
				 c[j] = l2.insertCell(j);
				
					}
				po=parseFloat(op)
				poo=parseFloat(rx[k])
				xa=poo+po;
			
				
				
				acc= ~ parseFloat(m[xa])
				repadd (c);
				repxr (c); 
			    c[0].innerHTML=nadd;
				c[1].innerHTML = command;
				c[2].innerHTML = adressage;
				c[3].innerHTML = op;
				c[4].innerHTML=nadd+1;
				c[5].innerHTML =command+","+op;
				c[6].innerHTML =xa;
				c[7].innerHTML =m[xa];
				c[8].innerHTML =acc;
				
			
			
			}
			
				
				
				
				
				}



			if (i>n) {
				acc=0;
	            let m=[];
	             let rx=[];
				
			}
			/*-------------------------------JE----------------------------------------------------------------------------*/
			
			if (command=="JE" && acc==0  ){
				tb2=document.getElementById("tab2");
				var l2 = tb2.insertRow(-1);
				var c=[];
				for (j=0;j<20;j++){
					
					 c[j] = l2.insertCell(j);
					
					}
					
					
					repadd (c);
					repxr (c); 
					c[0].innerHTML=nadd;
					c[1].innerHTML = command;
					c[5].innerHTML =command+","+op;
					c[4].innerHTML=nadd+2;
					
					c[8].innerHTML =acc;
					i=i+1;
					nadd=nadd+1;
				}

			/*-------------------------------JG----------------------------------------------------------------------------*/
			
			if (command=="JG" && acc>0  ){
				tb2=document.getElementById("tab2");
				var l2 = tb2.insertRow(-1);
				var c=[];
				for (j=0;j<20;j++){
					
					 c[j] = l2.insertCell(j);
					
					}
					
					
					repadd (c);
					repxr (c); 
					c[0].innerHTML=nadd;
					c[1].innerHTML = command;
					c[5].innerHTML =command+","+op;
					c[4].innerHTML=nadd+2;
					
					c[8].innerHTML =acc;
					i=i+1;
					nadd=nadd+1;
				}


			/*-------------------------------JL----------------------------------------------------------------------------*/
			
			if (command=="JL" && acc<0  ){
				tb2=document.getElementById("tab2");
				var l2 = tb2.insertRow(-1);
				var c=[];
				for (j=0;j<20;j++){
					
					 c[j] = l2.insertCell(j);
					
					}
					
					
					repadd (c);
					repxr (c); 
					c[0].innerHTML=nadd;
					c[1].innerHTML = command;
					c[5].innerHTML =command+","+op;
					c[4].innerHTML=nadd+2;
					
					c[8].innerHTML =acc;
					i=i+1;
					nadd=nadd+1;
				}


			
		


				
			
			
                ham=parseFloat(nadd);
		         nadd=ham+1;
		}
	

	
}