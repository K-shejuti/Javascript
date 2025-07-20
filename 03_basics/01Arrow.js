const User={
    userName:"Hitesh",
    price:"99",
    WelcomeMessage:function()
    {
        console.log(`${this.userName},Welcome to the course`)
        console.log(this)
    }

}
//  User.WelcomeMessage()
//  User.userName="SAM"
// console.log(User.WelcomeMessage())
// console.log(this)

// function chai()
// {
//     let userName="shejuti"
//     console.log(this.userName)
// }
// chai()

// const chai= () =>
// {
//     let userName="hitesh"
//     console.log(userName)
// }
// chai()

// const addTwo= (num1,num2) =>{
//     return num1+num2
// }
const addTwo = (num1,num2) =>(num1 +num2)
console.log(addTwo(5,6))
