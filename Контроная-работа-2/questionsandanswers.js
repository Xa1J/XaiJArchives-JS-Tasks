document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach(function (item) {
      const button = item.querySelector(".accordion-button");
      const content = item.querySelector(".accordion-content");
  
      button.addEventListener("click", function () {
        const isOpen= content.style.display === "block";
  
        accordionItems.forEach(function (otherItem) {
          otherItem.querySelector(".accordion-content").style.display = "none";
        });
  
        content.style.display = isOpen ? "none" : "block";
      });
    });
  });