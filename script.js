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

class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

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

// Testing Product Class/Constructor
const apple = new Product("Apple", 2.5, 50);

console.log(apple.toString());
console.log(apple.getTotalValue());

//Testing PerishableProduct Subclass
const milk = new PerishableProduct("Milk", 1.5, 10, "2024-12-31");
const yogurt = new PerishableProduct("Yogurt", 3.25, 15, "2024-11-20");

console.log(milk.toString());
console.log(yogurt.toString());
console.log(milk.getTotalValue());
console.log(yogurt.getTotalValue());

//Testing Static Method for Discount
const products = [apple, milk, yogurt];

console.log("Before Discount:");
for (let p of products) {
    console.log(p.toString());
}

Product.applyDiscount(products, 0.15);

console.log("After discount:");
for (let p of products) {
    console.log(p.toString());
}