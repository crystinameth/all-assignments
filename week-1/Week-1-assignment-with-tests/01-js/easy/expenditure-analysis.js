/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  /* object to store total amount spent by category 
     iterate through transactions
     if category exists => add price 
     else add category and price
     convert object to array of objects for result
  */

     const categoryTotal = {};

     transactions.forEach(transaction => {     //transactions -> array , transaction -> element
      const {category , price} = transaction;

      if(categoryTotal.hasOwnProperty(category)){
        categoryTotal[category] += price;
      }
      else{
        categoryTotal[category] = price;  // category : price -> like [key : value] pair
      }
     });

     //object to array of objects
     const result = Object.keys(categoryTotal).map(category => ({
      category,
      totalSpent: categoryTotal[category]
     }));
  return result;
}

module.exports = calculateTotalSpentByCategory;
