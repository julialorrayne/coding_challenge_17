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

//task 2:
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
        console.log(`SalesRep created: ${this.name}`);
    }
    addClient(customer) {
        this.clients.push(customer);
        console.log(`${customer.name} added to ${this.name}'s client list.`);
    }

    getClientTotal(name) {
        const client = this.clients.find(c => c.name === name);
        if (client) {
            return client.getTotalSpent();
        }else {
             console.log(`Client ${name} not found.`);
             return 0;
            }
    }
}

//Task 3:
class VIPCustomer extends Customer {
    constructor(name,email,viplevel) {
        super(name,email);
        this.viplevel = viplevel;
        console.log(`VIP Customer created: ${this.name} (${this.viplevel})`);
    }

    getTotalSpent() {
        const baseTotal = super.getTotalSpent();
        const bonusTotal = baseTotal * 1.1;
        return bonusTotal;
    }
}