// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

function pageLoad() { 
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
  
  // Try setting two variables – die1 and die2
  // Also set a third variable - total, which sums the two die values
  // Start by hard-coding the values (1-6), then attempt to use the 
  // getRandomInt() function to randomize the values
  let die1 = getRandomInt(6)
  let die2 = getRandomInt(6)
  let total = die1 + die2

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
  
  // Leave this alone
  document.querySelector('.die1').setAttribute('src', `../images/dice/${die1}.png`)
  document.querySelector('.die2').setAttribute('src', `../images/dice/${die2}.png`)
  document.querySelector('.total').innerHTML = total
}