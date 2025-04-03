let btn = document.querySelector("button");
let input = document.querySelector("textarea");
let section = document.querySelector(".rcmGroup");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (input.value.trim() !== "") {
    alert("Thank you for submitting a recommendation!");
    let newDiv = document.createElement("div");
    newDiv.innerText = input.value;
    newDiv.classList.add("rcmPara");
    section.appendChild(newDiv);
    input.value = "";
  } else {
    alert("Please enter a recommendation.");
  }
});
