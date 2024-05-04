{
  //type guards

  //typeof --> type guard

  type AlphaNeumeric = string | number;
  const add = (
    param1: AlphaNeumeric,
    param2: AlphaNeumeric
  ) :AlphaNeumeric => {
    if(typeof param1 === 'number' && typeof param2 ==='number'){
        return param1 + param2;
    }else{
        return param1.toString() + param2.toString();
    }
  };

//   console.log(add(2,"3"))
//   console.log(add("2",3))
//   console.log(add(2,3))


//in guard:
 type NormalUser = {
    name: string;
 }
 type AdminUser = {
     name: string;
     role: 'admin'
 }

 const getUser = (user: NormalUser |AdminUser)=>{
    if('role' in user){
        console.log(`My name is ${user.name} and my role is ${user.role}`)
    }else{
        console.log(`My name is ${user.name}`)
    }
 }

 const noramlUser: NormalUser = {
    name: 'md. sourov hossain'
 }

 const admin : AdminUser = {
    name: 'md shanweaj al hasan',
    role:'admin'
 }

 getUser(noramlUser)
 getUser(admin)




  //
}
