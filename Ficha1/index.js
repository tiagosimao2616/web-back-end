function calculateFinalGrade(np, nt){
    var nf = np * 0.6 + nt * 0.4
    return nf
}
var FinalGrade = calculateFinalGrade(14,12)
console.log(FinalGrade)