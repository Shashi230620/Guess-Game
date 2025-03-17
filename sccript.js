const div1 = document.querySelector(".inputs");
const image1 = createImage("asserts/slightly-frowning-face.svg");
const image2 = createImage("asserts/sports-medal.svg");

let chance = 0;

function createImage(src) {
  const img = document.createElement("img");
  img.src = src;
  img.style.width = "20%";
  return img;
}

function restart() {
  document.getElementById("inp").value = "";
  document.getElementById("inp1").value = "";
  document.getElementById("p").innerHTML = "";
}

function guess() {
  console.warn("{please follow the instruction}");
  console.error("{dont Enter value greater than 10}");
  
  const random = Math.floor(Math.random() * 10) + 1;
  document.getElementById("inp1").value = random;  // Set the random number in inp1
  
  const input = document.getElementById("inp").value;
  const inpt1 = parseInt(input);

  if (chance === 2) {
    displayResult(image1);
    return;
  }

  if (!input) {
    alert("ERROR! INSERT VALUES");
    document.getElementById("inp1").value = "";
    return;
  }

  if (inpt1 === random) {
    displayResult(image2);
    chance += 1;
  } else {
    document.getElementById("p").innerHTML = inpt1 < random ? "Your guess is smaller than the number" : "Your guess is bigger than the number";
    chance += 1;
  }
}

function displayResult(image) {
  const div = document.createElement('div');
  const h1 = document.createElement("h1");
  div.setAttribute("id", "score");
  h1.setAttribute("id", "scoreheading");
  div1.appendChild(div);
  div.appendChild(h1);
  h1.appendChild(image);
}
