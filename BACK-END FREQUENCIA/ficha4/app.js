// var Person = {
//     name: "Antonio",
//     age: 13,
//     gender: "Male",
// }
// var jsonData = JSON.stringify(Person);
// console.log(jsonData);

// var jsonObj = JSON.parse(jsonData);
// console.log(jsonObj)

var Emmiter = require("./emitter");
var Config = require("./config");

emmiter = new Emmiter();

emmiter.on(Config.events.LOGIN,function(){
    console.log("LOGIN");
});

emmiter.on(Config.events.LOGOUT,function(){
    console.log("LOGOUT");
});


emmiter.emit(Config.events.LOGIN);
emmiter.emit(Config.events.LOGOUT);



