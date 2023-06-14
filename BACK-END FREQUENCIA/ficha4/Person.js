function Person(firstName, lastName,gender){
    this.gender = gender;
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function(){
    console.log("hello "+this.firstName+" "+this.lastName+" "+ (this.age == null ? "idade não especificada" : "tem " +this.age+" anos"));
}
Person.prototype.setAge = function(age){
    this.age = age;
}

var Antonio = new Person("antonio","silva","Avião de combate");
var Maria = new Person("maria","silva","Female");

Antonio.setAge(12);
Maria.setAge(16);

Antonio.greet();
Maria.greet();

console.log(Antonio.__proto__);
console.log(Maria.__proto__);

var lista = [];


lista[0] = function(number){ console.log("Hellow world "+number)}
lista[1] = function(number){ console.log("Hellow world "+number)}
lista[2] = function(number){ console.log("Hellow world "+number)}


for(x in lista)
    lista[x]();

console.log("com for each")
lista.forEach(element => {
    element();
});