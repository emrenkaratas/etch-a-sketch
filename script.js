const container = document.querySelector(".container");

function createGrid(size) {
  container.innerHTML = "";
  container.style.width = "600px";
  container.style.height = "600px";
  const square_number = 600 / size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${square_number}px`;
    square.style.height = `${square_number}px`;
    square.style.opacity = "0"; // Initial opacity set to 0
    square.dataset.opacityLevel = 0; // Data attribute to track opacity level

    square.addEventListener("mouseenter", () => {
      if (square.style.opacity === "0") {
        // First interaction: Set a random RGB color
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                 ${Math.floor(Math.random() * 256)}, 
                                 ${Math.floor(Math.random() * 256)})`;
        square.style.backgroundColor = randomColor;
      }
      // Increase the opacity on each interaction
      let currentOpacity = parseFloat(square.style.opacity);
      if (currentOpacity < 1) {
        currentOpacity += 0.1; // Increase opacity by 10%
        square.style.opacity = currentOpacity.toString();
      }
    });
    container.appendChild(square);
  }
}

createGrid(16);
const resizebutton = document.querySelector(".resizebutton");
resizebutton.addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (maximum 100):");
  newSize = parseInt(newSize);
  if (newSize && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});
