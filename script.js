let myButtons = document.querySelectorAll(".btn");

myButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    let currentContainer = element.parentNode;
    console.log(element);
    let currentInput = currentContainer.getElementsByTagName("input")[0];
    console.log(currentInput);
    // da nestane se pojavi
    if (currentInput.style.display === "none") {
      currentInput.style.display = "block";
    } else {
      currentInput.style.display = "none";
    }
  });
});
