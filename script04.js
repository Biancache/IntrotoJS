function testCondition(value) {
  if (typeof value === 'number') {
    alert("The argument is a number.");
  } else if (typeof value === 'string') {
    alert("The argument is a string.");
  } else {
    alert("The argument is neither a number nor a string.");
  }
}

testCondition(42); 
testCondition("Hello"); 
testCondition(true); 