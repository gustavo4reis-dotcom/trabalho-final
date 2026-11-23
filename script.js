js = r ''
'const cart = [];

const money = value => value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
});

const cartPanel = document.getElementById("cartPanel");
const scrim = document.getElementById("scrim");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartSubtotal = document.getElementById("cartSubtotal");

function openCart() {
    cartPanel.classList.add("open");
    scrim.classList.add("open");
    cartPanel.setAttribute("aria-hidden", "false");
}

function closeCart() {
    cartPanel.classList.remove("open");