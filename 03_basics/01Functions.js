// function addtwonumbers( number1,number2)
// {
//     //number1,number2 are parameters
//   let result=number1+number2
//     return result;
// }
//4,5 are arguements

function loginUser(username)
{
    if(!username)
    {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// const result=addtwonumbers(4,5)
// console.log(result)
console.log(loginUser())
console.log(loginUser("Shejuti"))