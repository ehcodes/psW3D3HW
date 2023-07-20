class Person{
    constructor(name,state,politicalParty){
        this.name = name;
        this.state = state;
        this.politicalParty = politicalParty;
    }
}

class Governor extends Person{
    constructor(name,state,politicalParty){
        super(name,state, politicalParty);
    }
    static signedBills = 0;
    static clemencyCount = 0;
    static signBill(){
        signedBills+=1;
        console.log(`Governor ${this.name} has signed a new bill into law.`)
    }
    static totalBillsSigned(){
        console.log(`Governor ${this.name} has signed ${this.signedBills} bills.`)
    }
}

const jill = new Person('jill','ma','independent');
const jack = new Governor('jack','ma','democrat');

console.log(jill);
console.log(jack);
jack.signBill();
jack.totalBillsSigned();
