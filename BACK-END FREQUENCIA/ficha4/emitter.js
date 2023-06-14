class Emmiter{
    constructor(){
        this.events = {
            
        };
    }
};

Emmiter.prototype.on = function(type,listener){
    if(this.events[type] == undefined)
        this.events[type] = [];
    
    this.events[type].push(listener);
}

Emmiter.prototype.emit = function(type){
    if(this.events[type] != undefined){
        this.events[type].forEach(element => {
        element(); 
        });
    }
}

module.exports = Emmiter; 


