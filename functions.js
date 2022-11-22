const findTheNumberOfOddNumbers = (pArray) => {
  const odds = pArray.filter((num) => num % 2 == 1);
console.log(odds.length); 
};
findTheNumberOfOddNumbers([3, 6, 7, 8, 4, 2]);

const getIndexOfFalseItem = (pArray) => {
  const falseItem = pArray.findIndex(item => item == false);
  console.log(falseItem)
};
getIndexOfFalseItem([45, 'Hi', false, true, 23, 'Coders']);


const filterNumbers = (pArray) => {
  const result = pArray.filter(item => typeof (item) === 'number');
  console.log(result[0])
};
filterNumbers([false, 'Hi', true, 23, 'false', 55])

const generateEmailAddress = (pArray) => {
  const result = pArray.map(item => item.toLowerCase()+"@gmail.com");
  console.log(result[0])
}
generateEmailAddress(["Huseyin", "Ahmet", "Mehmet"])

export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};
