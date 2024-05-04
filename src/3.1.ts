{
    //oop -> class
    class Animal {
        // name:string;
        // species: string;
        // sound:string;

        constructor(public name: string, public species: string, public sound: string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }
        makeSound(){
            console.log(`${this.name} says ${this.sound}`)
            //*********** */
            //****arrow function e this kaj kore na
        }
    }
    const dog = new Animal('German sheperd',"doggo","barking");
    const cat = new Animal ('bangladeshi','cats','meau meau');

    dog.makeSound();
    cat.makeSound()




    //
}