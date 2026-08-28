function calculateWeeklyTotal(expenses:number[]):number {
   const totalExpenses = expenses.reduce((acc, cvalue)=>{
    return acc + cvalue
   },0)
   return totalExpenses
}
const expensetraker = [456,4654,46,446.5]
console.log(calculateWeeklyTotal(expensetraker));

// [200, 450, 100]
// 750