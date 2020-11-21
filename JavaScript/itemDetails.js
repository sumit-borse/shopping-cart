window.onload = () =>{
    var nameToDisplay = document.querySelector("h3#userName");
    var storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));   
    nameToDisplay.innerHTML = "Welcome  " + storedUserDetails[0];
    var url=window.location.search;
    var name=url.replace('?name=','');
    var itemNames=name.replace(/%20/g, " ");

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

            var addToCart = document.createElement("button");
            addToCart.className="add-to-cart"
            addToCart.textContent="Add To Cart";
            var buyNow = document.createElement("button");
            buyNow.className="buy-now";
            buyNow.textContent="Buy Now";

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
            node.appendChild(rightDiv);
           
            document.getElementById("container").appendChild(node);
        }
    });

}



/*var middleDiv = document.createElement("div");
            middleDiv.className="middle-div";

            var itemName = document.createElement("a");
            itemName.href="itemDetails.html?name="+element[i].name+"";
            itemName.textContent= element[i].name;
            itemName.className="item-name";

            var details=element[i].highlights;

            var highlightsList = document.createElement("ul");
            highlightsList.className="highlights-list";
            var listItem ;
            details.forEach(element => {
                listItem=document.createElement("li");
                listItem.textContent=element;
                listItem.className="list-items"
                highlightsList.appendChild(listItem);
            });

            middleDiv.appendChild(itemName);
            middleDiv.appendChild(highlightsList);
            node.appendChild(middleDiv);
*/