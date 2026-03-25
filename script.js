// Product class to represent a product in the store
class Product {
    constructor(name, price, quantity) {
        // Initialize product properties: name, price, and quantity
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        // Calculate total value of the product based on price and quantity
        return this.price * this.quantity;
    }

    toString() {
        // Return a string representation of the product with formatted price
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    //Adding discount method to Product Class
    static applyDiscount(products, discount) {
        for (let product of products) {
            product.price = product.price * (1 - discount);
        }
    }
}

// PerishableProduct class that extends Product and adds expiration date
class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        // Call the parent constructor to initialize name, price, and quantity
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        // Return a string representation of the perishable product, including expiration date
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

// Store class to manage inventory and calculate total value
class Store {
    constructor() {
        // Initialize an empty inventory array to hold products
        this.inventory = [];
    }

    addProduct(product) {
        // Add a product to the store inventory
        this.inventory.push(product);
    }

    getInventoryValue() {
        let total = 0;

        for (let product of this.inventory) {
            // Calculate total inventory value by summing the total value of each product
            total += product.getTotalValue();
        }

        return total;
    }

    findProductByName(name) {
        for (let product of this.inventory) {
            // Search for a product by name and return it if found
            if (product.name === name) {
                return product;
            }
        }

        return null;
    }
}

// New Full Testing Area for every Class/Method

// Create instances of Product and PerishableProduct
const apple = new Product("Apple", 2.5, 50);
const bread = new Product("Bread", 3.0, 10);
const eggs = new Product("Eggs", 4.25, 40);
const milk = new PerishableProduct("Milk", 3.5, 20, "2026-07-01");
const yogurt = new PerishableProduct("Yogurt", 1.5, 30, "2026-07-10");

// Create a store instance
const store = new Store();

// Add products to the store inventory
store.addProduct(apple);
store.addProduct(bread);
store.addProduct(eggs);
store.addProduct(milk);
store.addProduct(yogurt);

// Display inventory and total value before applying discount
console.log("----- BEFORE DISCOUNT -----");
for (let product of store.inventory) {
    console.log(product.toString());
}
console.log("Total Inventory Value:", store.getInventoryValue().toFixed(2));

// Apply a 15% discount to all products in the inventory
Product.applyDiscount(store.inventory, 0.15);

// Display inventory and total value after applying discount
console.log("----- AFTER DISCOUNT -----");
for (let product of store.inventory) {
    console.log(product.toString());
}
console.log("Total Inventory Value:", store.getInventoryValue().toFixed(2));

// Search for a product by name
const foundProduct = store.findProductByName("Milk");

console.log("----- SEARCH RESULT -----");
if (foundProduct) {
    console.log(foundProduct.toString());
} else {
    console.log("Product not found.");
}

// Search for a product that does not exist in the inventory
const missing = store.findProductByName("Banana");

console.log("----- NOT FOUND TEST -----");
if (missing) {
    console.log(missing.toString());
} else {
    console.log("Product not found.");
}