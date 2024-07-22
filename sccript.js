const div1 = document.querySelector(".inputs");
const image1 = document.createElement("img");
image1.src = "asserts/slightly-frowning-face.svg"
image1.style.width = "20%"; 
const image2 = document.createElement("img");
image2.src = "asserts/sports-medal.svg"
image2.style.width = "20%"; 

let chance = 0;

function restart() {
  document.getElementById("inp").value = "";
  document.getElementById("inp1").value = "";
  document.getElementById("p").innerHTML = "";
}

function guess() {
  console.warn("{please follow the instruction}");
  console.error("{dont Enter value greater than 10}");
  
  const random = Math.floor(Math.random() * 10) + 1;
  const getnumber = random;
  document.getElementById("inp1").value = getnumber;
  const input = document.getElementById("inp").value;
  const inpt1 = parseInt(input);

  if (chance === 2) {
    const div = document.createElement('div');
    const h1 = document.createElement("h1");
    div.setAttribute("id", "score");
    h1.setAttribute("id", "scoreheading");
    div1.appendChild(div);
    div.appendChild(h1);
    h1.appendChild(image1);
    return;
  }

  if (input === "") {
    alert("ERROR! INSERT VALUES");
    document.getElementById("inp1").value = "";
    return;
  } else if (getnumber === inpt1) {
    const div = document.createElement('div');
    const h1 = document.createElement("h1");
    div.setAttribute("id", "score");
    h1.setAttribute("id", "scoreheading");
    div1.appendChild(div);
    div.appendChild(h1);
   h1.appendChild(image2)
    chance += 1;
  } else if (getnumber > inpt1) {
    document.getElementById("p").innerHTML = "Your guess is smaller than the number";
    chance += 1;
  } else if (getnumber < inpt1) {
    document.getElementById("p").innerHTML = "Your guess is bigger than the number";
    chance += 1;
  }
}
