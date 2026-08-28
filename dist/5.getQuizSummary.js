"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
total = number;
average = number;
function getQuizSummary(scores) {
    const totalScore = scores.reduce((sum, value) => {
        return sum + value;
    }, 0);
    const averageScore = totalScore / scores.length;
    return { total: totalScore, average: averageScore };
}
const quizScore = [8, 9, 7, 10];
console.log(getQuizSummary(quizScore));
// input  [8, 9, 7, 10]
//  output
//# sourceMappingURL=5.getQuizSummary.js.map