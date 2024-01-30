const fingerNumber = prompt("Enter the finger number on your hand (1-5):");

if (!isNaN(fingerNumber) && fingerNumber >= 1 && fingerNumber <= 5) {
  if (fingerNumber == 1) {
    alert("Thumb.");
  } else if (fingerNumber == 2) {
    alert("Index finger.");
  } else if (fingerNumber == 3) {
    alert("Middle finger.");
  } else if (fingerNumber == 4) {
    alert("Ring finger.");
  } else {
    alert("Pinky finger.");
  }
} else {
  alert("Invalid finger number entered. Please enter a number from 1 to 5.");
}
