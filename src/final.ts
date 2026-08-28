//Problem-01: Battery Level Status
function getBatteryStatus(percentage: number): string {
    if( percentage >= 0 && percentage <= 20){
        return "Low"
    } else if(percentage >= 21 && percentage <=50){
       return "Medium"
    }  else if(percentage >= 51 && percentage <=90){
       return "High"
    } 
     return "Full"
}

//Problem-02: Table Booking Confirmation
interface Booking{
    name: string
    guests: number
    time: string
}
function formatBookingConfirmation(booking:Booking):string {
  return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
}

//Problem-03: Weekly Expense Tracker
function calculateWeeklyTotal(expenses:number[]):number {
   const totalExpenses = expenses.reduce((acc, cvalue)=>{
    return acc + cvalue
   },0)
   return totalExpenses
}

//Problem-04: Traffic Light Action
type Light = "red" | "yellow" | "green"
function getTrafficAction(light:Light):string {
   if(light === "red") return "Stop"
   else if(light === "yellow") return "Slow Down"
   return "Go" 
}

//Problem-05: Quiz Score Summary
interface Quiz{
    total: number
    average: number
}
function getQuizSummary(scores: number[]):Quiz {
      const scoreLength = scores.length
    if(scoreLength === 0)return {total: 0, average: 0}
    const totalScore = scores.reduce((sum, value)=>{
     return sum + value
    },0)
    const averageScore = totalScore / scoreLength
    return  { total: totalScore, average: averageScore }
}

