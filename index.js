class Governor {
    constructor(firstname,lastName,governingState,registeredParty){
        this.firstname = firstname;
        this.lastName = lastName;
        this.governingState = governingState;
        this.registeredParty = registeredParty;
        this.signedBills = 0;
        this.clemencyCount = 0;
    }
    signBill(){
        this.signedBills+=1;
        console.log(`Governor ${this.lastName} has signed a new bill into law.`);
    }
    totalBillsSigned(){
        console.log(`Governor ${this.lastName} has signed ${this.signedBills} bills.`);
    }
    grantClemency(grantee){
        this.clemencyCount+=1
        console.log(`Governor ${this.lastName} has granted ${grantee.firstName} ${grantee.lastName} clemency.`);
    }
}
const jack = new Governor('jack','jenkins','ma','democrat');
jack.signBill();
jack.totalBillsSigned();
// jack.grantClemency(Person) - this function is invoked on the last line of this file, on a named instance of Person'.

console.log(Governor.firstname);
console.log(Governor.lastName);
console.log(Governor.governingState);
console.log(Governor.registeredParty);
console.log(Governor.signedBills);
console.log(Governor.clemencyCount);

class Person{
    constructor(firstName,lastName,homeCountry){
        this.firstName = firstName;
        this.lastName = lastName;
        this.homeCountry = homeCountry;
    }
    introduceSelf(){
        return `Hi, I'm ${this.firstName} ${this.lastName}.`;
    }
    respondToIntro(person){
        if(person instanceof Person){
            return `It's a pleasure to meet you, ${person.firstName}.`;
        }else{
            return `It's a pleasure to meet you.`;
        }
    }
    sayGoodbye(){
        return `It was great seeing you, enjoy the rest of your day!`
    }
}
console.log(Person);

class PostalWorker extends Person{
    constructor(headquarters,firstName,lastName,homeCountry){
        super(firstName,lastName,homeCountry);
        this.headquarters = headquarters;
        this.servicedZipcodes = new Array;
        this.letters = Number(Math.floor(Math.random()*89));
    }
    assignServiceZipCodes(){
        if(this.headquarters==='Dorchester'){
            this.servicedZipcodes = ['02122','02124','02125'];
        }else if(this.headquarters==='Brighton'){
            this.servicedZipcodes = ['02134', '02135', '02163'];
        }else if(this.headquarters==='Roxbury'){
            this.servicedZipcodes = ['02119','02120','02121'];
        }
        return `Postal Worker ${this.firstName} ${this.lastName} services the following zipcodes in ${this.headquarters} ${this.servicedZipcodes.join(', ')}.`
    }
    collectMail(count){
        this.letters+=count;
        return `Postal Worker ${this.firstName} ${this.lastName} picked up ${count} letters at this stop, bringing the total amount of letters collected to ${this.letters}`;
    }
}
console.log(PostalWorker);

const courtney = new PostalWorker('Roxbury','Courtney','Clocke', 'United States of America');

console.log(courtney);
console.log(courtney.introduceSelf());
console.log(courtney.respondToIntro('Anthony'));
console.log(courtney.sayGoodbye());
console.log(courtney.assignServiceZipCodes());
console.log(courtney.collectMail(15));

const david = new PostalWorker('Dorchester','David','Druid', 'United States of America');

console.log(david);
console.log(david.introduceSelf());
console.log(david.respondToIntro('Anthony'));
console.log(david.sayGoodbye());
console.log(david.assignServiceZipCodes());
console.log(david.collectMail(7));

class Chef extends Person{
    constructor(firstName,lastName,homeCountry,restaurant, resLocation){
        super(firstName,lastName,homeCountry);
        this.restaurant=restaurant;
        this.resLocation = resLocation;
        this.title = 'Chef'
    }
    cookMeal(mealName){
        return `${this.title} ${this.lastName} is cooking ${mealName}.`
    }
    identifyRestuarant(){
        return `${this.title} works at the ${this.restaurant} restuarant in ${this.resLocation}.`
    }
}

console.log(Chef)

const jill = new Chef('Jill', 'Jones','United States of America','Mangiamo','Florence');

const jake = new Chef('Jake', 'Jones','United States of America','Mangiamo','Florence');

console.log(jill);
console.log(jill.introduceSelf());
console.log(jill.respondToIntro(jack));
console.log(jill.sayGoodbye());
console.log(jill.cookMeal('Bolognese'));
console.log(jill.identifyRestuarant());

console.log(jake);
console.log(jake.introduceSelf());
console.log(jake.respondToIntro(jill));
console.log(jake.sayGoodbye());
console.log(jake.cookMeal('Bolognese'));
console.log(jake.identifyRestuarant());

jack.grantClemency(jake);