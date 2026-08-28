"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateWeeklyTotal(expenses) {
    const totalExpenses = expenses.reduce((acc, cvalue) => {
        return acc + cvalue;
    }, 0);
    return totalExpenses;
}
const expensetraker = [200, 450, 100];
console.log(calculateWeeklyTotal(expensetraker));
// [200, 450, 100]
// 750
//# sourceMappingURL=3.calculateWeeklyTotal.js.map