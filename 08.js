function multiplicationTable(multiplier){

for(let num = 1; num <= 10; num++){
    let result = multiplier * num
    console.log(`${multiplier} X ${num} = ${result}`)
}

}
multiplicationTable(5)