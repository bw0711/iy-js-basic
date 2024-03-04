const ConstructPerson = (name, age, gender, occupation) => {
    return {
        name,
        age,
        gender,
        occupation
    };
};

const person1 = ConstructPerson("John Doe", 30, "Male", "Engineer");
const person2 = ConstructPerson("Jane Smith", 25, "Female", "Doctor");

console.log(person1);
console.log(person2);
