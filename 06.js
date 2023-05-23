function printAndSum(start, end){

    let sum = 0
    let numbersRow = ""

    for( let num = start; num <= end; num++){
        sum += num
        numbersRow += `${num} `
    }

    console.log(numbersRow)
    console.log(`Sum: ${sum}`)

}
printAndSum(5, 10)