var Emitter = require("./emitter");

var config = require("./config")

var em = new Emitter();

em.on(config.events.LOGIN, function(){
    console.log("LOGIN");
});

em.on(config.events.LOGOUT, function(){
    console.log("LOGOUT");
});

em.emit(config.events.LOGIN);
em.emit(config.events.LOGOUT);
