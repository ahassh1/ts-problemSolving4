"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getQuizSummary(scores) {
    const scoreLength = scores.length;
    if (scoreLength === 0)
        return { total: 0, average: 0 };
    const totalScore = scores.reduce((sum, value) => {
        return sum + value;
    }, 0);
    const averageScore = totalScore / scoreLength;
    return { total: totalScore, average: averageScore };
}
const quizScore = [];
console.log(getQuizSummary(quizScore));
// input  [8, 9, 7, 10]
// expected output  { total: 0, average: 0 }
//# sourceMappingURL=5.getQuizSummary.js.map