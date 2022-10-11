




/* 
var inputs = document.querySelectorAll("input")
console.log(inputs)

console.log(inputs)

 for (let input of inputs) 
console.log(input) 

inputs.forEach(input => {
    console.log(input)
}) */

document.querySelectorAll("input").forEach(input => {
  
    if (input.required) {

    document.querySelector(`#${input.id}-label`).innerHTML += '<span class="required"> * </span>'

    switch(input.type) {
        case "text" :
            console.log("validera texten")
            break;
            case "email" :
                console.log("validera email")
                break;
            case "password" :
                console.log("validera password")
                break;
            case "checkbox" :
                console.log("är rado")
                break;
    

        }
    }
})

document.querySelectorAll("input").forEach(input => {

   
})


/* document.getElementById("btn").addEventListener("mouseover", function() {
    console.log("klickade på knappen")
}) */




