const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// Product data
const products = [
  {
    id: 1,
    title: "AIR FORCE",
    price: 9999,
    colors: [
      { code: "black", img: "./img/air.png" },
      { code: "darkblue", img: "./img/air2.png" },
    ],
  },
  {
    id: 2,
    title: "AIR JORDON",
    price: 12465,
    colors: [
      { code: "lightgray", img: "./img/jordan.png" },
      { code: "green", img: "./img/jordan2.png" },
    ],
  },
  {
    id: 3,
    title: "NIKE",
    price: 9200,
    colors: [
      { code: "lightgray", img: "./img/blazer.png" },
      { code: "green", img: "./img/blazer2.png" },
    ],
  },
  {
    id: 4,
    title: "PUMA",
    price: 10799,
    colors: [
      { code: "black", img: "./img/crater.png" },
      { code: "lightgray", img: "./img/crater2.png" },
    ],
  },
  {
    id: 5,
    title: "HRX",
    price: 8299,
    colors: [
      { code: "gray", img: "./img/hippie.png" },
      { code: "black", img: "./img/hippie2.png" },
    ],
  },
];

let chosenProduct = products[0];

// DOM Elements for the current product display
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Function to update the displayed product details
const updateProductDetails = (product) => {
  currentProductTitle.textContent = product.title;
  currentProductPrice.textContent = "₹" + product.price;
  currentProductImg.src = product.colors[0].img;

  currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = product.colors[index].code;
  });
};

// Event listeners for menu items to change the product slide and details
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Update the chosen product
    chosenProduct = products[index];

    // Update the displayed product details
    updateProductDetails(chosenProduct);
  });
});

// Event listeners for color options to change the product image
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

// Event listeners for size options to highlight the selected size
currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// DOM elements for the payment modal
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Event listener to show the payment modal
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

// Event listener to hide the payment modal
close.addEventListener("click", () => {
  payment.style.display = "none";
});
