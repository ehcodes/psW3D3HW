[](#practice-what-you-learned)Practice What You Learned
=======================================================

Create a `JavaScript` `REPL` from [repl.it](https://repl.it) -- you can name it `"JavaScript Classes HW 2"`.\`

[](#complete-all-work-in-your-replit)Complete all work in your REPL.it
----------------------------------------------------------------------

[](#then-submit-the-link-to-your-replit-in-canvas)Then Submit The Link To Your REPL.it in Canvas
------------------------------------------------------------------------------------------------

[](#static-methods-and-properties)Static Methods and Properties
===============================================================

    class Governor {
    
    }

*   There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
*   log the properties and test the methods (don't instantiate)

### [](#inheritance)Inheritance

Your base class

    Person{
        constructor(){
    
        }
    }

*   Think of three properties all people share, set them with the constructor
*   Think of three methods all people share
*   Create a PostalWorker class that inherits from person, add some methods
*   Create a Chef class that inherits from person, add some methods
*   Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

[](#hungry-for-more)Hungry for More
-----------------------------------

[](#hungry-for-more-only-do-this-if-all-your-hw-above-is-done)Hungry For More (Only do this if all your hw above is done)
-------------------------------------------------------------------------------------------------------------------------

### [](#bank-accounts-take-it-a-step-further)Bank Accounts take it a step further

**`BankAccount`** class:

Derived From: n/a

Properties: `ownerName`, `balance`, `acctNum` (generated in constructor - not passed in)

Methods: `deposit`, `withdraw`

**`CheckingAccount`** class:

Derived From: `BankAccount`

Additional Properties: `overdraftEnabled`

Additional Methods: Override `withdraw` to implement overdraft feature

**`SavingsAccount`** class:

Derived From: `BankAccount`

Additional Properties: None

Additional Methods: Override `withdraw` to disallow withdrawals completely :)
