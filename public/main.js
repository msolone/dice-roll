// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

 const addSixSidedDiceRollToList = () => {
   const newRoll = document.createElement('li')
   newRoll.textContent = Math.ceil(Math.random() * 6)
   document.querySelector('.six-sided-dice-roll-result').appendChild(newRoll)
 } 

 document.querySelector('.six-sided-roll-dice').addEventListener('click', addSixSidedDiceRollToList)

 const addTwoSixSidedDiceRollToList = () => {
  const newRoll = document.createElement('li')
  newRoll.textContent = Math.ceil(Math.random() * 6)
  document.querySelector('.two-six-sided-dice-roll-result').appendChild(newRoll)
} 

document.querySelector('.two-six-sided-roll-dice').addEventListener('click', addTwoSixSidedDiceRollToList)

 const addTwelveSidedDiceRollToList = () => {
  const newRoll = document.createElement('li')
  newRoll.textContent = Math.ceil(Math.random() * 12)
  document.querySelector('.twelve-sided-dice-roll-result').appendChild(newRoll)
} 


document.querySelector('.twelve-sided-roll-dice').addEventListener('click', addTwelveSidedDiceRollToList)

const addTwentySidedDiceRollToList = () => {
  const newRoll = document.createElement('li')
  newRoll.textContent = Math.ceil(Math.random() * 20)
  document.querySelector('.twenty-sided-dice-roll-result').appendChild(newRoll)
} 


document.querySelector('.twenty-sided-roll-dice').addEventListener('click', addTwentySidedDiceRollToList)