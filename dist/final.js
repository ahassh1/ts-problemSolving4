"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Problem-01: Battery Level Status
function getBatteryStatus(percentage) {
    if (percentage >= 0 && percentage <= 20) {
        return "Low";
    }
    else if (percentage >= 21 && percentage <= 50) {
        return "Medium";
    }
    else if (percentage >= 51 && percentage <= 90) {
        return "High";
    }
    return "Full";
}
function formatBookingConfirmation(booking) {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}
//Problem-03: Weekly Expense Tracker
function calculateWeeklyTotal(expenses) {
    const totalExpenses = expenses.reduce((acc, cvalue) => {
        return acc + cvalue;
    }, 0);
    return totalExpenses;
}
function getTrafficAction(light) {
    if (light === "red")
        return "Stop";
    else if (light === "yellow")
        return "Slow Down";
    return "Go";
}
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
//# sourceMappingURL=final.js.map