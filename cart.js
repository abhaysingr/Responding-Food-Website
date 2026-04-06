let cartProduct = [];
const cartList = document.querySelector(".cart-list");
const cartTotal = document.querySelector(".cart-total");
const cartValue = document.querySelector(".cart-value");
const checkoutBtn = document.querySelector(".btn-container .btn:last-child");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");

const initCheckout = () => {
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cartProduct.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      alert("Thank you for your ordering from our website");
      cartProduct = [];
      cartList.innerHTML = "";
      updateTotals();
      cartTab.classList.remove("cart-tab-active");
    });
  }
};

const updateTotals = () => {
  let totalPrice = 0;
  let totalQuantity = 0;
  document.querySelectorAll(".item").forEach((item) => {
    const quantity = parseInt(
      item.querySelector(".quantity-value").textContent,
    );
    const price = parseFloat(
      item
        .querySelector(".item-total")
        .textContent.replace("₹", "")
        .replace(/,/g, ""),
    );
    totalPrice += price;
    totalQuantity += quantity;
  });
  cartTotal.textContent = `₹${totalPrice.toFixed(2)}`;
  cartValue.textContent = totalQuantity;
};

const addToCart = (product) => {
  const existingProduct = cartProduct.find((item) => item.id === product.id);
  if (existingProduct) {
    alert("item already exist");
    return;
  }
  cartProduct.push(product);
  let quantity = 1;

  let price = parseFloat(product.price.replace("₹", "").replace(/,/g, ""));

  const cartItem = document.createElement("div");
  cartItem.classList.add("item");
  cartItem.innerHTML = ` <div class="item-image">
                                    <img src="${product.image}" alt="">
                                </div>
                                <div class="detail">
                                <h4>${product.name}</h4>
                                <h4 class="item-total">${product.price}</h4>
                                </div>
                                <div class="flex">
                                    <button class="quantity-btn minus" aria-label="Decrease quantity">
                                        <i class="fa-solid fa-minus"></i>
                                    </button>
                                    <h4 class="quantity-value">${quantity}</h4>
                                     <button class="quantity-btn plus" aria-label="Increase quantity">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>`;
  cartList.appendChild(cartItem);
  updateTotals();

  const plusBtn = cartItem.querySelector(".plus");
  const minusBtn = cartItem.querySelector(".minus");
  const quantityValue = cartItem.querySelector(".quantity-value");
  const itemTotal = cartItem.querySelector(".item-total");
  plusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    quantity++;
    quantityValue.textContent = quantity;
    itemTotal.textContent = `₹${(price * quantity).toFixed(2)}`;
    updateTotals();
  });
  minusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
      itemTotal.textContent = `₹${(price * quantity).toFixed(2)}`;
      updateTotals();
    } else {
      cartItem.classList.add("slide-out");
      setTimeout(() => {
        cartItem.remove();
        cartProduct = cartProduct.filter((item) => item.id !== product.id);
        updateTotals();
      }, 300);
    }
  });
};

export { addToCart, updateTotals, initCheckout };
