let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let displayGroceries = (obj) => obj.fruits.forEach(element => console.log(element));

let cloneGroceries = () => {
    let user = client;
    client = "Betty"; // will make client "Betty" and user "John" because simple variables are passed by value (as opposed to object) 
    let shopping = groceries;
    shopping.totalPrice = "$35";       // both of these changes will be seen in both objects because when one object was set to the other it was passed by reference, so both variables point to the same object
    shopping.other.payed = "false";
}

cloneGroceries();
