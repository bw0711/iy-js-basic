const user = {
    name: prompt("Please enter your name:"),
    age: parseInt(prompt("Please enter your age:")),
    email: prompt("Please enter your email:")
  };
  
  for (let element in user) {
    console.log(`${element}: ${user[element]}`);
  }
  

