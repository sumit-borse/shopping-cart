window.onload = () =>{
    var nameToDisplay = document.querySelector("h3#userName");
    var storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));   
    nameToDisplay.innerHTML = "Welcome  " + storedUserDetails[0];

    var cartItem = JSON.parse(localStorage.getItem("list"));   
    var cartItemCount = document.querySelector("span#cartCount");
    cartItemCount.innerHTML= cartItem.length;

    

}
