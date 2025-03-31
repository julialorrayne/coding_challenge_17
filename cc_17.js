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

//Task 4:
const cust1 = new Customer('Julia Nascimento', 'julia@gmail.com');
cust1.addPurchase(100);
cust1.addPurchase(200);

const cust2 = new Customer ('Juliana Guimaraes', 'juliana.guimaraes@gmail.com');
cust2.addPurchase(140);
cust2.addPurchase(300);

const vip1 = new VIPCustomer('Mathew Smith', 'mathew.smith@gmail.com', 'Platinum');
vip1.addPurchase(1000)
vip1.addPurchase(2000);

const vip2 = new VIPCustomer('Maria Hernandez', 'maria@gmail.com', 'Platinum');
vip1.addPurchase(2000)
vip1.addPurchase(500);

const rep = new SalesRep('Jordan Benett');
rep.addClient(cust1);
rep.addClient(cust2);
rep.addClient(vip1);
rep.addClient(vip2);

const totalRevenue = rep.clients.reduce((total,client) => {
    return total + client.getTotalSpent();
}, 0);

const bigSpenders = rep.clients.filter(client => client.getTotalSpent() > 1000);

const clientSummaries = rep.clients.map(client => {
    return {
        name: client.name,
        totalSpent: client.getTotalSpent(),
    };
});

//logging the results
console.log(`Total Revenue: $${totalRevenue}`);
console.log('High-Spending Customers:', bigSpenders.map(client => client.name));
console.log('Client Summaries:', clientSummaries);