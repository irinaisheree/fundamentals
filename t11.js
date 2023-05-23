function sumOfOddNumbers(end){

    let sum = 0
    let curNum = 1
    let counter = 1
   

    while(counter <= end){

        if(curNum % 2 !== 0){
            console.log(curNum)
            sum += curNum
            counter++
            
        } 
        curNum++
    
        
    }
    console.log(`Sum: ${sum}`)
    
    
}

sumOfOddNumbers("5")