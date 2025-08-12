

//this refers to the current context
const user={
    username:"Hitesh",
    price:100,
    Welcomemessage:function()
    {
        console.log(`${this.username},Welcome to website`)
        console.log(this)
    }
    

}
// user.Welcomemessage()
// user.username="Sam"
// user.Welcomemessage()
// console.log(this)

// function chai()
// {
//     let user_name="Hitesh"
//     console.log(this)
//     console.log(this.username)
// }
// chai()

// const chai = () =>{
//     let username="Hitesh"
//     console.log(this)
// }
// chai();
//Explicit return 
// const addtwo=(num1,num2) =>
// {
//     return num1+num2
// }

//Implicit return 
// const addtwo=(num1,num2) => (num1+num2)
const addtwo=(num1,num2) => ({username:"shejuti"})

   


console.log(addtwo(4,5))


