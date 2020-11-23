var url=window.location.search;
var name=url.replace('?name=','');
var itemNames=name.replace(/%20/g, " ");
var cartItem = JSON.parse(localStorage.getItem("list"));   

if(itemNames==""){
    url = localStorage.getItem("lastUrl");
    if(itemNames!=""){
        var name=url.replace('?name=','');
        var itemNames=name.replace(/%20/g, " ");
    }
    else{
        alert("Invalid Request");
        location.replace("./index.html");
    }
}



window.onload = () =>{
    var nameToDisplay = document.querySelector("h3#userName");
    var storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));   
    nameToDisplay.innerHTML = "Welcome  " + storedUserDetails[0];
    localStorage.setItem("lastUrl", url);

    var cartItemCount = document.querySelector("span#cartCount");
    cartItemCount.innerHTML= cartItem.length;
    
    var items = JSON.parse(localStorage.getItem("names"));
    items.forEach(element => {
        if(element.name==itemNames)
        {
            
            var node = document.createElement("div");
            node.className="item-detail-div";

            var leftDiv = document.createElement("div");
            leftDiv.className="left-div";
            var imgDiv = document.createElement("div");
            imgDiv.className="img-div";
            var itemImage = document.createElement("img");
            itemImage.className ="item-image"
            itemImage.src = "../Images/"+element.imgName;
            imgDiv.appendChild(itemImage);


            var buttonDiv = document.createElement("div");
            buttonDiv.className="button-div";

            var quantityDiv = document.createElement("div");
            quantityDiv.className="quantity-div";

            var quantityLabel = document.createElement("label");
            quantityLabel.className = "quantity-label";
            quantityLabel.textContent = "Select Qty.";

            quantityDiv.appendChild(quantityLabel);

            var quantitySelect = document.createElement("select");
            quantitySelect.className = "quantity-select";
            quantitySelect.name = "quantitySelect";
            quantitySelect.id = "quantitySelect";
            
            for(var i=1;i<=5;i++){
                var option = document.createElement("option");
                option.className = "quantity-options";
                option.value = i;
                option.textContent = i;
                quantitySelect.appendChild(option);
            }
            
            quantityDiv.appendChild(quantitySelect);

            buttonDiv.appendChild(quantityDiv);

            var addToCart = document.createElement("button");
            addToCart.className="add-to-cart"
            addToCart.textContent="Add To Cart";
            addToCart.onclick = function() { addToCartClickFunction(); };
            var buyNow = document.createElement("button");
            buyNow.className="buy-now";
            buyNow.textContent="Buy Now";
            buyNow.onclick = function() { buyNowClickFunction(); };

            buttonDiv.appendChild(addToCart);
            buttonDiv.appendChild(buyNow);

            leftDiv.appendChild(imgDiv);
            leftDiv.appendChild(buttonDiv);
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


            var details=element.highlights;
            var highlightDiv = document.createElement("div");
            highlightDiv.className="highlight-div";

            highlightText = document.createElement("h2");
            highlightText.className="highlight-text";
            highlightText.textContent="Hilight";

            highlightDiv.appendChild(highlightText)

            var highlightsList = document.createElement("ul");
            highlightsList.className="highlights-list";
            var listItem ;
            details.forEach(ele => {
                listItem=document.createElement("li");
                listItem.textContent=ele;
                listItem.className="list-items"
                highlightsList.appendChild(listItem);
            });

            highlightDiv.appendChild(highlightsList);

            rightDiv.appendChild(highlightDiv);

            var descriptionDiv=document.createElement("div");
            descriptionDiv.className="description-div";

            var descriptionText=document.createElement("p");
            descriptionText.className="description-text";
            descriptionText.textContent=element.description;

            var descriptionHeading = document.createElement("h2");
            descriptionHeading.className = "description-heading";
            descriptionHeading.textContent = "Description";
            descriptionDiv.appendChild(descriptionHeading);
            descriptionDiv.append(descriptionText);
            rightDiv.appendChild(descriptionDiv);

            node.appendChild(rightDiv);
           
            document.getElementById("container").appendChild(node);
        }
    });

}


addToCartClickFunction = () =>{
    var quantity=document.getElementById("quantitySelect").value;
    var flag=0;
    var items={
        name : "",
        qty : 0
    }
    
    cartItem.forEach(element =>{
        if(element.name==itemNames){
            element.qty = quantity;
            flag=1;
        }
    });
    if(flag==0){
        items.name=itemNames;
        items.qty=quantity;   
        cartItem.push(items);    
    }
    localStorage.setItem("list", JSON.stringify(cartItem));
    alert(itemNames+ " Added to Your Cart");
    var cartItemCount = document.querySelector("span#cartCount");
    cartItemCount.innerHTML= cartItem.length;
}

buyNowClickFunction = () => {
    var quantity=document.getElementById("quantitySelect").value;
    var flag=0;
    var items={
        name : "",
        qty : 0
    }
    
    cartItem.forEach(element =>{
        if(element.name==itemNames){
            element.qty = quantity;
            flag=1;
        }
    });
    if(flag==0){
        items.name=itemNames;
        items.qty=quantity;   
        cartItem.push(items);    
    }
    localStorage.setItem("list", JSON.stringify(cartItem));
    var cartItemCount = document.querySelector("span#cartCount");
    cartItemCount.innerHTML= cartItem.length;
    location.replace("./buyNow.html")
}