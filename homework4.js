const year = parseInt(prompt("Enter the year"));

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  alert("The year " + year + " is a leap year.");
} else {
  alert("The year " + year + " is not a leap year.");
}
