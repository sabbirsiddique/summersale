let total = 0;


function handleClick(target) {
    const selectedItemsContainer = document.getElementById("selected-items");
    const kitchenWareItems = target.childNodes[5].childNodes[1].innerText;

    const li = document.createElement('li');
    li.innerText = kitchenWareItems;

    selectedItemsContainer.appendChild(li);

    const price = target.childNodes[5].childNodes[3].innerText.split(" ")[0]

    total = (parseFloat(total) + parseFloat(price)).toFixed(2);
    document.getElementById("totalPrice").innerText = total + "TK";

    if (total >= 200) {
        const discount = (parseFloat(total) * 0.2).toFixed(2);
        document.getElementById("discount").innerText = discount + "TK";
    }
    const newTotal = total - discount;
    document.getElementById("totalAfterDiscount").innerText = parseFloat(newTotal) + "TK";

}

