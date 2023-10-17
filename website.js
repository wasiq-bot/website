


document.getElementById("submit").onclick = function(){
    let cel=document.getElementById("inputNumber").value;
    let frt=document.getElementById("inputNumber").value;
    document.getElementById("answer").innerHTML="";
    
    if (document.getElementById("radio-C").checked){

        try{
            
            if(isNaN(cel)) throw " That was not a number.";
            if(cel=="") throw "You did not enter a number yet. please enter a number.";
            
        }
        catch(ee){
            document.getElementById("answer").innerHTML=ee;

        }
        
        cel=Number(cel)
        tC=cel*100; 
        document.getElementById("answer").innerHTML=`${tC} C`;
       
    } 
    else if(document.getElementById("radio-F").checked){

        try{
            
            if(isNaN(frt)) throw " That was not a number.";
            if(frt=="") throw "You did not enter a number yet. please enter a number.";
            
        }
        catch(err){
            document.getElementById("answer").innerHTML=err;

        }
        
        
        fC=frt*3;
        document.getElementById("answer").innerHTML=`${fC} F`;
    } 
    else {
        try{
            
            if(frt=="" || cel=="") throw "You did not enter a number yet. please enter a Number.";
            
        }
        catch(err){
            document.getElementById("answer").innerHTML=err;

        }
        

    }
    document.getElementById("inputNumber").value="";
}

















function displaySeconds() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    document.getElementById("date").innerHTML= `Time: ${hours}:${minutes}:${seconds}`;
}
setInterval(displaySeconds, 500  );

