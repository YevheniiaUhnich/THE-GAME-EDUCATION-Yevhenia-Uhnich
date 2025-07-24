document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("btnAdd");
  const btnClear = document.getElementById("btnClear");
  const newBtn = document.getElementById("blockCounter");

  let blockCounter = 0;

  const randomColors = () => {
    const numberLetter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += numberLetter[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  function createBlock() {
    blockCounter++;

    const newBlock = document.createElement("div");
    newBlock.className = "event-block";
    newBlock.textContent = `Блок №${blockCounter}`;
    newBlock.dataset.index = blockCounter;

    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.textContent = `Ви на блоці №${blockCounter}`;
    tooltip.style.display = "none";

    newBlock.appendChild(tooltip);
    newBtn.appendChild(newBlock);

    newBlock.addEventListener("click", () => {
      newBlock.style.backgroundColor = randomColors();
    });

    newBlock.addEventListener("mouseover", () => {
      if (tooltip) tooltip.style.display = "block";
    });

    newBlock.addEventListener("mouseout", () => {
      if (tooltip) tooltip.style.display = "none";
    });
  }

  function clearBlocks() {
    newBtn.replaceChildren("");
    blockCounter = 0;

    const event = new CustomEvent("blocksCleared");
    newBtn.dispatchEvent(event);
  }

  addBtn.addEventListener("click", () => {
    createBlock();
  });
  btnClear.addEventListener("click", () => {
    clearBlocks();
  });
  newBtn.addEventListener("blocksCleared", () => {
    console.log("Усі блоки видалено");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      createBlock();
    }
    if (e.key === "Delete") {
      clearBlocks();
    }
  });
});

