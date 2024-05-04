{
    //oop -> inheritance
    class Person {
        name:string;
        age:number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours : number){
            console.log(`${this.name} will sleep ${numberOfHours} hours daily`)
        }
    }

    class Student extends Person {
       
        constructor(name: string, age: number, address: string){
            super(name, age, address)
        }
        
    }

    class Teacher extends Person {
        designation: string;
        constructor(name: string, age: number, address: string,designation: string){
            super(name, age, address)
            this.designation = designation;
        }
        getClass(numberOfClasses : number){
            console.log(`${this.name} sir has to take ${numberOfClasses} classes`)
        }
    }

    const student1 = new Student('shahnewaj',22, 'akborsha')
    console.log(student1);
    student1.getSleep(7)
    const teacher1 = new Teacher('Emon sir',35,'alfalah goli','professor');
    // console.log(teacher1)
    teacher1.getClass(6)
    teacher1.getSleep(6)





    //
}