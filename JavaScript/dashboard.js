window.onload = () =>{
    var nameToDisplay = document.querySelector("h3#userName");
    var storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));   
    nameToDisplay.innerHTML = "Welcome  " + storedUserDetails[0];


    var items = JSON.parse(localStorage.getItem("names"));

    for(i=0;i<items.length;i++){
        var node = document.createElement("div");
        node.className="item-detail-div";

        var leftDiv = document.createElement("div");
        leftDiv.className="left-div";
        var itemImage = document.createElement("img");
        itemImage.className ="item-image"
        itemImage.src = "../Images/"+items[i].imgName;
        leftDiv.appendChild(itemImage);
        node.appendChild(leftDiv);


        var middleDiv = document.createElement("div");
        middleDiv.className="middle-div";

        var itemName = document.createElement("a");
        itemName.href="itemDetails.html?name="+items[i].name+"";
        itemName.textContent= items[i].name;
        itemName.className="item-name";

        var details=items[i].highlights;

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


        var rightDiv = document.createElement("div");
        rightDiv.className = "right-div";

        var mrp = document.createElement("h3");
        mrp.className="mrp";
        var actualPrice = document.createElement("h2");
        actualPrice.className="actual-price"

        var priceDiv = document.createElement('div');
        priceDiv.className="mrp-discount";

        var price=items[i].price;
        var newPrice=price.replace(',','');
        var discount=items[i].discount;
        var priceAfterDiscount =newPrice-((newPrice*discount)/100).toPrecision(2);
        var disc= document.createElement("h2");
        disc.className="discount";
        disc.textContent=discount+"%";
        mrp.innerHTML="&#8377;";
        actualPrice.innerHTML="&#8377;";
        mrp.textContent+=newPrice;
        actualPrice.textContent+=priceAfterDiscount;

        rightDiv.appendChild(actualPrice);
        priceDiv.appendChild(mrp);
        priceDiv.appendChild(disc);
        rightDiv.appendChild(priceDiv);
        node.appendChild(rightDiv);

        document.getElementById("container").appendChild(node);
    }
}