//singleton
//Object.create

//object literals
const mysym1=Symbol("key1")
const JsUser={
    name:"Shejuti",
    [mysym1]:"mykey1",
    age:"18",
    email:"Shejuti@google.com"


}
// console.log(JsUser["email"])
// console.log(typeof JsUser[mysym1])
// console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email="shejuti@chatgpt.com"
JsUser.greetings=function()
{
    console.log(`hello everyone ${this.age}`);
}
console.log(JsUser.greetings())