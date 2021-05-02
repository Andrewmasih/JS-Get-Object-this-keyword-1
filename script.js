/*'this' keyword is used to access data from the current object, try in dev tool f12, it refereneces the current object */

let person = {
  firstName: "judy",
  lastName: "smith",    
    hello: function() {
    /* it is the same as writting 'personfirstName' and 'person.lastName' but what if someone changes the name of the object and forgets to update the code in the 'hello' function?*/
    console.log (`my name is:${this.firstName}${this.lastName}`);
    /*notice the 'template literal and 'string interpolation'*/

    /*the 'this' keyword makes sure that the correct data is shown even in that senario*/

  }
   
};

person.hello();

/*if we want to refernce data from the same object, how can we get to it? if there is no 'this' keyword, we will get a 'RefrenceError'   */