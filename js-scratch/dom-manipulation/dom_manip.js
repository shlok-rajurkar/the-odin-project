const container = document.querySelector("#container");

const paragraph = document.createElement("p");

paragraph.textContent = "Hey I'm red!";

paragraph.style.color = "red";

container.appendChild(paragraph);

const blueHeading = document.createElement("h3");

blueHeading.textContent = "I'm a blue h3!"

blueHeading.style.color = "blue";

container.appendChild(blueHeading);

const container2 = document.createElement("div");

container2.style.border = "black 1px solid";

container2.style.backgroundColor = "pink";

const nestedHeading = document.createElement("h1");

nestedHeading.textContent = "I'm in a div";

const nestedP = document.createElement("p");

nestedP.textContent = "ME TOO!";

container2.appendChild(nestedHeading);

container2.appendChild(nestedP);

container.appendChild(container2);

const btn = document.getElementById("button");

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});