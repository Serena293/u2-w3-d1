class User {
   constructor(_name, _lastName, _age, _location){
    this.firstName = _name
    this.lastName = _lastName
    this.age = _age
    this.location = _location
   }

   compareAge(user1)  {
if(this.age > user1.age) 
{console.log(`${this.firstName} è più grande di ${user1.firstName}`)}
else if(this.age<user1.age){
    console.log(`${user1.firstName} è più grande di ${this.firstName}`)
} else{console.log(`${this.firstName} e ${user1.firstName} hanno la stessa età`)}
   }
}

const p1 = new User('Enrica','Rossi', 100, 'Pescara')
const p2 = new User('Alice','Rossi', 50, 'Ferrara')
const p3 = new User('Serena','Rossi', 15, 'Napoli')
const p4 = new User('Emma','Rossi', 15, 'Verona')

p1.compareAge(p2)
p2.compareAge(p3)
p3.compareAge(p1)
p4.compareAge(p3)