 
 var items = [
	 {name: "Cat Food", price: 17.50},
     {name: "Catnip", price: 4.99},
	 {name: "Toilet Paper", price: 6.49},
	 {name: "Paper Towels", price: 1.79},
     {name: "Star Trek Pizza Cutter", price: 20.00},
	 ];
	
var total = 0;

for (var i = 0; i < items.length; i++) {
  console.log(items[i].name, items[i].price);
  total = total + items[i].price;
}


console.log("Your total is" + total + ".");

 document.getElementById("total").innerHTML = total;


 var orderedList = document.getElementById("Grocery List");

 var listItem = document.createElement("li");
 
 listItem.innerHTML = "Cat Food, price: $17.50";
 parent.orderedList.appendChild(listItem);

 var listItem = document.createElement("li");

 listItem.innerHTML = "Catnip, price: $4.99";
 parent.orderedList.appendChild(listItem);

 var listItem = document.createElement("li");

 listItem.innerHTML = "Toilet Paper, price: $6.49";
 parent.orderedList.appendChild(listItem);

 var listItem = document.createElement("li");

 listItem.innerHTML = "Tissues, price: $1.79";
 parent.orderedList.appendChild(listItem);

 var listItem = document.createElement("li");

 listItem.innerHTML = "Star Trek Pizza Cutter, price: $20.00";
 parent.orderedList.appendChild(listItem);





 