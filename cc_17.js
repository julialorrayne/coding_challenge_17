//task 1:
class Customer {
    constructor(name,email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
        console.log(`New Customer created: ${this.name}, ${this.email}`);
    }

    addPurchase(amount) {
        this.purchaseHistory.push(amount);
        console.log(`Customer ${this.name} made a purchase of $${amount}`);
    }

    getTotalSpent() {
        const total = this.purchaseHistory.reduce((sum, purchase) => sum + purchase, 0);
        return total;
    }
}
