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
    items.forEach(element => {
        cartItemNames.forEach(cart => {
            if(element.name==cart.name)
            {
                var node = document.createElement("div");
                node.className="item-detail-div";
    
                var leftDiv = document.createElement("div");
                leftDiv.className="left-div";
                var imgDiv = document.createElement("div");
                imgDiv.className="img-div";
                var itemImage = document.createElement("img");
                itemImage.className ="item-image"
                itemImage.src = "../Images/"+element.cartImgName;
                imgDiv.appendChild(itemImage);
               
                leftDiv.appendChild(imgDiv);
                node.appendChild(leftDiv);
    
                var rightDiv = document.createElement("div");
                rightDiv.className="right-div";
    
                var itemName = document.createElement("h2");
                itemName.textContent= element.name;
                itemName.className="item-name";
                itemName.id = "itemName";
                rightDiv.appendChild(itemName);
    
                var reatingDiv= document.createElement("div");
                reatingDiv.className="reating-div";
                reatingDiv.textContent=element.reating;
                rightDiv.appendChild(reatingDiv);
    
    
                
                var priceDiv = document.createElement('div');
                priceDiv.className="price-div";
    
                var mrp = document.createElement("h2");
                mrp.className="mrp";
                var actualPrice = document.createElement("h2");
                actualPrice.className="actual-price";
    
                var price=element.price;
                var newPrice=price.replace(',','');
                var discount=element.discount;
                var priceAfterDiscount =newPrice-((newPrice*discount)/100).toPrecision(2);
                
                var disc= document.createElement("h2");
                disc.className="discount";
                disc.textContent=discount+"% off";
                mrp.innerHTML="&#8377;";
                actualPrice.innerHTML="&#8377;";
                mrp.textContent+=newPrice;
                actualPrice.textContent+=priceAfterDiscount;
    
                rightDiv.appendChild(actualPrice);
                priceDiv.appendChild(mrp);
                priceDiv.appendChild(disc);
                rightDiv.appendChild(priceDiv);
                
                var quantityDiv = document.createElement("div");
                quantityDiv.className="quantity-div";

                var quantityLabel = document.createElement("label");
                quantityLabel.className = "quantity-label";
                quantityLabel.textContent = "Qty. "+cart.qty;

                quantityDiv.appendChild(quantityLabel);
                rightDiv.appendChild(quantityDiv);

                node.appendChild(rightDiv);
               
                document.getElementById("container").appendChild(node);
            }
        });

    });
    var invoiceDiv = document.createElement("div");
    invoiceDiv.className = "buy-now-div ";

    var generateInvoiceButton = document.createElement("a");
    generateInvoiceButton.href = "./buyNow.html";
    generateInvoiceButton.className = "buy-now-button btn";
    generateInvoiceButton.textContent = " Buy Now";

    invoiceDiv.appendChild(generateInvoiceButton);
    document.getElementById("container").appendChild(invoiceDiv);
}
