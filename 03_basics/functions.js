// function addTwoNumbers(number1,number2)
// {
//     //number1,number2 are parameters
//     //console.log(number1+number2)
//     return number1+number2
// }
// //3,4 are arguements
// const result=addTwoNumbers(3,4)
// console.log(result)

function loginUserMessage(username)
{
    if(!username)
    {
        console.log("please enter a valid username")
        return 
    }
    else{
        console.log(`${username} just logged in`)
    }
}

loginUserMessage()