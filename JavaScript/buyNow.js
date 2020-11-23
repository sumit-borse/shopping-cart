var cartItem = JSON.parse(localStorage.getItem("list"));   

window.onload = () =>{
    var nameToDisplay = document.querySelector("h3#userName");
    var storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));   
    nameToDisplay.innerHTML = "Welcome  " + storedUserDetails[0];

    var cartItemCount = document.querySelector("span#cartCount");
    cartItemCount.innerHTML= cartItem.length;

    var items = JSON.parse(localStorage.getItem("names"));
    var cartItemNames = JSON.parse(localStorage.getItem("list"));
    if(cartItemNames.length==0){
        alert("Nothing in Cart..");
        location.replace("./dashboard.html");
    }
    var totalMrp=0, totalPrice=0, totalDiscount=0;
    items.forEach(element => {
        let row, column, reacord;
        cartItemNames.forEach(cart => {
            if(element.name==cart.name)
            {
                reacord = document.querySelector("table tbody#invoiceReacord");
                row = document.createElement("tr");
                column = document.createElement("td"), column.textContent = element.name, row.appendChild(column);
                column = document.createElement("td"), column.textContent = cart.qty, row.appendChild(column);
                column = document.createElement("td"), column.textContent = element.price, row.appendChild(column);
                column = document.createElement("td"), column.textContent = element.discount+"%", row.appendChild(column);
                var price=element.price.replace(',','');
                var newPrice=parseFloat(price);
                var discount=element.discount;
                var priceAfterDiscount =newPrice-((newPrice*discount)/100).toPrecision(2);
                totalMrp+=newPrice*cart.qty;
                totalPrice+=priceAfterDiscount*cart.qty;
                totalDiscount+=parseInt(element.discount);
                column = document.createElement("td"), column.textContent = priceAfterDiscount, row.appendChild(column);
                reacord.appendChild(row);
            }
        });
    });
    totalDiscount=totalDiscount/cartItemNames.length;
    reacord = document.querySelector("table tbody#invoiceReacord");
    row = document.createElement("tr");
    column = document.createElement("td"), column.textContent = "Total", row.appendChild(column), column.className="total", column.colSpan="2";
    column = document.createElement("td"), column.textContent = totalMrp, row.appendChild(column), column.className="mrp";
    column = document.createElement("td"), column.textContent = totalDiscount+"%", row.appendChild(column), column.className="discount";
    column = document.createElement("td"), column.textContent = totalPrice, row.appendChild(column), column.className="final-total";
    reacord.appendChild(row);
}

placeOrder = () => {
    alert("Your Order Has Been Placed");
    var cartItemNames = JSON.parse(localStorage.getItem("list"));
    while(cartItemNames.length > 0) {
        cartItemNames.pop();
    }
    localStorage.setItem("list", JSON.stringify(cartItemNames));
}