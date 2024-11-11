const name = document.getElementById('name');
const owner = document.getElementById('ownerName');
const species = document.getElementById('species');
const breed = document.getElementById('breed');
const form = document.getElementById('form');

class Pet {
  constructor(_name, _owner, _species, _breed) {
    this.petName = _name;
    this.ownerName = _owner;
    this.species = _species;
    this.breed = _breed;
  }

  sameOwner(person) {
    if (this.ownerName === person.ownerName) {
      console.log(`Entrambi gli animali appartengono a ${this.ownerName}`);
    } else {
      console.log(
        `${this.petName} è il ${this.species} di ${this.ownerName}. ` +
        `${person.petName} è il ${person.species} di ${person.ownerName}`
      );
    }
  }
}


form.addEventListener('submit', function (e) {
  e.preventDefault(); // 

  const pet = new Pet(name.value, owner.value, species.value, breed.value);
  console.log("New pet created:", pet);
  
});


const p1 = new Pet('Giò', 'Serena', 'Cane', 'N/A');
const p2 = new Pet('Dinka', 'Serena', 'Gatto', 'N/A');
const p3 = new Pet('Eric', 'Raffaele', 'Gatto', 'N/A');
const p4 = new Pet('Hesher', 'Melania', 'Cane', 'N/A');

p1.sameOwner(p2); 
p2.sameOwner(p3); 