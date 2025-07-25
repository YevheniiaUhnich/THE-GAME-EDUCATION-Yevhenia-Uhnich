document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("btnAdd");
  const btnClear = document.getElementById("btnClear");
  const container = document.getElementById("blockCounter");

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
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";

    newBlock.appendChild(tooltip);
    container.appendChild(newBlock);
  }

  function clearBlocks() {
    container.replaceChildren("");
    blockCounter = 0;

    const event = new CustomEvent("blocksCleared");
    container.dispatchEvent(event);
  }

  container.addEventListener("click", (e) => {
    const block = e.target.closest(".event-block");
    if (!block || !container.contains(block)) return;

    block.style.backgroundColor = randomColors();
  });

  container.addEventListener("mouseover", (e) => {
    const block = e.target.closest(".event-block");
    if (!block || !container.contains(block)) return;

    const related = e.relatedTarget;
    if (related && block.contains(related)) return;

    const tooltip = block.querySelector(".tooltip");
    if (tooltip) {
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "1";
    }
  });

  container.addEventListener("mouseout", (e) => {
    const block = e.target.closest(".event-block");
    if (!block || !container.contains(block)) return;

    const related = e.relatedTarget;
    if (related && block.contains(related)) return;

    const tooltip = block.querySelector(".tooltip");
    if (tooltip) {
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = "0";
    }
  });

  addBtn.addEventListener("click", () => {
    createBlock();
  });

  btnClear.addEventListener("click", () => {
    clearBlocks();
  });

  container.addEventListener("blocksCleared", () => {
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
