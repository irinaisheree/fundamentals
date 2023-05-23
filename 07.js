function triangleOfNumbers(number){


    for(let rows = 1; rows <= number; rows++){
        let result = "";
        for(let cols = 1; cols <= rows; cols++){
        result += `${rows} `;
    }

    console.log(result)

    }

}
triangleOfNumbers(3)