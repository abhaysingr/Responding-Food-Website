import { productDataFetch } from "./products.js";
import { initUI } from "./ui.js";
import { initCheckout } from "./cart.js";

const initNewsletter = () => {
  const form = document.querySelector(".input-container");
  const emailInput = document.querySelector("#email");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (emailInput.value.trim() === "") {
        alert("Please enter your email address");
        return;
      }

      alert("Thank you for subscribing to our newsletter");
      emailInput.value = "";
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  productDataFetch();
  initUI();
  initCheckout();
  initNewsletter();
});
