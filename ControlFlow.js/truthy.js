const userEmail=[]

if(userEmail)
{
    console.log("GOT the user email")
}
else{
    console.log("Don't have user email")
}

//falsy value
//->false,0,-0,BigInt 0n,"",null,undefined,NaN


//truthy
//->"0",'false'" ",[],{},function(){}

const emptyObject={}

if(Object.keys(emptyObject).length==0)
{
    console.log("this is an empty object")
}

// let val1=5 ?? 10
// let val1=null??10
//let val1=undefined??15
let val1=undefined??15??20

console.log(val1)
