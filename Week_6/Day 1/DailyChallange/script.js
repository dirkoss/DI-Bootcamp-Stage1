let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let displayGroceries = (arr) => { arr.forEach(function(n){console.log(n)});}

displayGroceries(groceries["fruits"])

const cloneGroceries = () => {
    let user = client
    client = "Betty"
    console.log(client)
    console.log(user)

    let shopping = groceries
    shopping.totalPrice = "35$"
    shopping.other.paid = false
    console.log(shopping)
    console.log(groceries)
}
cloneGroceries()