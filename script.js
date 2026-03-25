// Product class to represent a product in the store
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
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
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

// Store class to manage inventory and calculate total value
class Store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
    }

    getInventoryValue() {
        let total = 0;

        for (let product of this.inventory) {
            total += product.getTotalValue();
        }

        return total;
    }

    findProductByName(name) {
        for (let product of this.inventory) {
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

const store = new Store();

// Add products to the store inventory
store.addProduct(apple);
store.addProduct(bread);
store.addProduct(eggs);
store.addProduct(milk);
store.addProduct(yogurt);

// Display inventory value before applying discount
console.log("Inventory Value Before Discount:", store.getInventoryValue().toFixed(2));

Product.applyDiscount(store.inventory, 0.15);

// Display inventory value after applying discount
console.log("Inventory Value After Discount:", store.getInventoryValue().toFixed(2));

// Find a product by name and display its details
const foundProduct = store.findProductByName("Milk");

if (foundProduct) {
    console.log("Found Product:", foundProduct.toString());
} else {
    console.log("Product not found.");
}