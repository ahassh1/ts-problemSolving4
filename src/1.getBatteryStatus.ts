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
const percentage = 50
console.log(getBatteryStatus(percentage));