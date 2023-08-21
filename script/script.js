const couponCodeInput = document.getElementById("couponCodeInput");
const applyCouponButton = document.getElementById("applyCouponButton");
const makePurchaseButton = document.getElementById("makePurchaseButton");
const totalAfterDiscountElement = document.getElementById("totalAfterDiscount");

let total = 0;
let discount = 0;

applyCouponButton.disabled = true;
applyCouponButton.style.backgroundColor = "gray";
makePurchaseButton.disabled = true;
makePurchaseButton.style.backgroundColor = "gray";

couponCodeInput.addEventListener("input", () => {
    const couponValue = couponCodeInput.value.trim();
    applyCouponButton.disabled = couponValue !== "SELL200";
    applyCouponButton.style.backgroundColor = couponValue === "SELL200" ? "#E527B2" : "gray";
});

applyCouponButton.addEventListener("click", () => {
    if (couponCodeInput.value.trim() === "SELL200") {
        applyCouponButton.style.backgroundColor = "#E527B2";
        if (total >= 200) {
            discount = parseFloat(total) * 0.2;
            totalAfterDiscountElement.innerText = (total - discount).toFixed(2) + "TK";
            document.getElementById("discount").innerText = discount.toFixed(2) + "TK";
        }
    }
});


function handleClick(target) {
    const selectedItemsContainer = document.getElementById("selected-items");
    const allItems = target.childNodes[5].childNodes[1].innerText;

    const li = document.createElement('li');
    li.innerText = allItems;

    selectedItemsContainer.appendChild(li);

    const price = target.childNodes[5].childNodes[3].innerText.split(" ")[0]

    total = (parseFloat(total) + parseFloat(price)).toFixed(2);
    document.getElementById("totalPrice").innerText = total + "TK";

    if (total > 0) {
        makePurchaseButton.disabled = false;
        makePurchaseButton.style.backgroundColor = "#E527B2";
    } else {
        makePurchaseButton.disabled = true;
        makePurchaseButton.style.backgroundColor = "gray";
    }
}

function homePage() {
    window.location.assign("index.html")
  }