
let chance=0;
  document.getElementById("inp").value="";
  document.getElementById("inp1").value="";
  document.getElementById("p").innerHTML="";

  function restart(){
    document.getElementById("inp").value="";
    document.getElementById("inp1").value="";
    document.getElementById("p").innerHTML="";
  }
  
function guess(){
  console.warn("{please follow the instruction}");
  console.error("{dont Enter value greater than 10}");
  const random=Math.floor(Math.random( )*10)+1;
  const getnumber=random;
  console.log(typeof getnumber);
  document.getElementById("inp1").value=getnumber;
  const input=document.getElementById("inp").value;
  const inpt1=parseInt(input);
 if(chance===2){
    alert("loss");
    return
 }
  if(input==""){
    alert("ERROR!  INSERT VALUES");
    document.getElementById("inp1").value="";
    return
  }
  else if(getnumber==inpt1){
    alert("CONGRATS!your guess is right");
    chance+=1
  }
  else if(getnumber>inpt1){
    document.getElementById("p").innerHTML="your guess is smaller than the number";
    chance+=1
  }
  else if(getnumber<inpt1){
    document.getElementById("p").innerHTML="your guess is bigger than the number";
    chance+=1
  }

}


