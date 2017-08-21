 
 var items = [
	 {name: "Cat Food", price: 17.50},
     {name: "Catnip", price: 4.99},
	 {name: "Toilet Paper", price: 6.49},
	 {name: "Paper Towels", price: 1.79},
     {name: "Star Trek Pizza Cutter", price: 20.00},
	 ];
	
var total = 0;
var orderedList = document.getElementById("Grocery List");

for (var i = 0; i < items.length; i++) {
  console.log(items[i].name, items[i].price);


  total = total + items[i].price;

var listItem = document.createElement("li");
  listItem.innerHTML = items[i].name + " $ " + items[i].price;
  parent.orderedList.appendChild(listItem);

}


 console.log("Your total is" + total + ".");

 document.getElementById("total").innerHTML = total;

 num.toFixed(2);