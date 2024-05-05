{
    //Access modifiers
    class Account{
      readonly  id: number;
        name: string;
      /*private*/protected  _balance:number //its the convention to write private property
        constructor(id: number, name: string, _balance: number){
            this.id = id;
            this.name = name;
            this._balance  = _balance;
        }
        makeDeposit(amount : number){
            this._balance = this._balance + amount
        }
    }

    class StudentAccount extends Account {
        test(){
           //this.
        }
    }

    const myAccount = new Account(123,'shahnewaj',34);
    myAccount.makeDeposit(400)
    console.log(myAccount)
    /**
     * NOTE:
     * difference between private and protected modifier:
     * private modifier resist that the values cant be accessed or changed outside the class evenif in its child class
     * whereas protected modifier resist it from outside but give access to the child class
    */









    //
}