{
    //getter and setter:
    class Account{
        readonly  id: number;
          name: string;
        /*private*/protected  _balance:number //its the convention to write private property
          constructor(id: number, name: string, _balance: number){
              this.id = id;
              this.name = name;
              this._balance  = _balance;
          }
        //   makeDeposit(amount : number){
        //      return this._balance = this._balance + amount
        //   }
          //doing this with set 
          set deposit (amount: number){
             this._balance = this._balance + amount;
          }



        //   getBalance(){
        //     return this._balance;
        //   }

        //doing this with get
        get balance(){
            return this._balance
        }
      }


      const myAccount = new Account(123,'shahnewaj',34);
    myAccount.deposit = 40;
    // console.log(myAccount)
    const myBalance = myAccount.balance;
    console.log(myBalance)
    




    //
}