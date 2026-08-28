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
   const quizScore = [] 
   console.log(getQuizSummary(quizScore));
// input  [8, 9, 7, 10]
// expected output  { total: 0, average: 0 }
