const calculateFactorial = () => {
    let userInput;

    while (true) {
        userInput = parseInt(prompt("Enter a number from 1 to 50:"));

        if (userInput >= 1 && userInput <= 50 && !isNaN(userInput)) {
            break;
        }

        console.log("Please enter a valid number within the range of 1 to 50.");
    }

    let factorial = 1;

    for (let i = 1; i <= userInput; i++) {
        factorial *= i;
    }

    alert(`The factorial of ${userInput} is: ${factorial}`);
};

calculateFactorial();