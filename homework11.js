function ConstructPerson(name, age, gender, occupation) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.occupation = occupation;
}

const person1 = new ConstructPerson("John Doe", 30, "Male", "Engineer");
const person2 = new ConstructPerson("Jane Smith", 25, "Female", "Doctor");

console.log(person1);
console.log(person2);
