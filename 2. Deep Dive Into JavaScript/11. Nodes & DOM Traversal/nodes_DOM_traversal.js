document.addEventListener("DOMContentLoaded", () => {
  const navList = document.querySelector(".nav-list");
  const secondSubItem = document.querySelectorAll(".sub-item")[1];
  const articleFirst = document.querySelector("article[data-id='1']");
  console.log(articleFirst);
  const articles = document.querySelectorAll(".article");
  const articleContainer = document.querySelector(".articles");

  if (!navList) {
    console.log("Елемент .nav-list не знайдено!");
    return;
  }

  const navItems = navList.children;
  console.log("Кількість прямих <li> елементів:", navList.children.length);

  const navItemsFirst = navList.firstElementChild;
  const navItemsLast = navList.lastElementChild;

  const parent = navItemsFirst.parentNode;

  navItemsFirst.classList.add("highlight");
  navItemsLast.classList.add("highlight");

  navItemsFirst.style.backgroundColor = "pink";
  navItemsLast.style.backgroundColor = "violet";

  const parentNaveItem = secondSubItem.closest(".nav-item");

  parentNaveItem.style.backgroundColor = "#eef";

  const secondArticle = articleFirst.nextElementSibling;
  const h2 = secondArticle.querySelector("h2");

  h2.style.fontStyle = "italic";

  articles.forEach((article) => {
    const id = article.getAttribute("data-id");

    if (parseInt(id) % 2 !== 0) {
      article.style.display = "none";
    }
  });

  articleContainer.childNodes.forEach((node) => {
    if (node.nodeType !== 3) {
      console.log("Тип вузла:", node.nodeType, "Назва вузла:", node.nodeName);
    }
  });
});
