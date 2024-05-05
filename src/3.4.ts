{
  //Instanceof( type guard of oop)
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound(){
        console.log('i am making sound')
    }
  }

  class Cat extends Animal{
    weight:string;
    constructor(name: string, species: string, weight: string){
        super(name, species);
        this.weight = weight;

    }
    makeMewaw(){
        console.log('I am making meaw')
    }
  }

  class Dog extends Animal{
    isBull:boolean;
    constructor(name: string, species: string, isBull: boolean){
        super(name,species);
        this.isBull = isBull;
    }
    makeBark(){
        console.log('i am barking')
    }
  }

  const isDog = (animal:Animal): animal is Dog => animal instanceof Dog;
  const isCat = (animal:Animal): animal is Cat => animal instanceof Cat;

const getAnimal =(animal: Animal) =>{
    if(isDog(animal)){
        animal.makeBark()
    }else if(isCat(animal)){
        animal.makeMewaw()
    }else{
        animal.makeSound()
    }
}



  const dog = new Dog("tiger","dog",true);
  const cat = new Cat('mishu',"cat","3kg");
     getAnimal(cat)
  //
}
