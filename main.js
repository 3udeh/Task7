
 
 const numbers = [1, 2, 3, 4, 5];

 
 document.getElementById("originalArray").textContent = "Original Array: " + numbers.join(", ");


 const doubledNumbers = numbers.map(num => num * 2);

 document.getElementById("doubledArray").textContent = "Doubled Array: " + doubledNumbers.join(", ");
