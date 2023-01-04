// module.exports = function(){
//     console.log("Test 1")
// }

// module.exports = function(){
//     console.log("test 2")
// }

// module.exports.test1 = function(){
//     console.log("Test 1")
// }

// module.exports.test2 = function(){
//     console.log("test 2")
// }


// module.exports = {
//     name:"baris",
//     test1: function(){
//         console.log("test1")
//     },
//     person: {
//     name: "sedef",
//     mail: "sedef@gmail.com"
//     }
// }


// es6 modulleri kullanma 


export const name = "baris"
export function test(){
    console.log("es6 syntech")
}
export class Person{
  static Test(){
    console.log("perosn | test ")
  }

}

export const employess ={
    name:"sedef",
    mail: "sedef@gmail.com"

}

// export default  class Deneme{
//     static test(){
//         console.log("deneme | default ")
//     }
// }


const denemeValues =  "denme degeri "

export default denemeValues;

