// function sum () {
//   let args = Array.from(arguments)
//   let sum = 0
//   args.forEach( (el)=> {
//     sum += el 
//   })
//   return sum 
// }

function sum (...args) {
  let sum = 0
  args.forEach( (el)=> {
    sum += el
  })

  return sum 
}

// sum(1, 2, 3, 4) === 10;
// sum(1, 2, 3, 4, 5) === 15;

// Function.prototype.myBind = function (ctx) {
//   let args = Array.from(arguments).slice(1);

//   return () => {
//     this.apply(ctx, args);
//   }
// }

Function.prototype.myBind = function (ctx, ...bindArgs) {
  return (...args) => {
    let allArgs = bindArgs.concat(args);
    this.apply(ctx, allArgs);
  }
}

// let randFunc = function () { this.a = "a" }; 
// // randFunc.a === "a"
// let randFunc2 = function () {this.a = "AAA"}; 
// let boundFunc = randFunc.myBind(randFunc2); // this = randFunc2
// // boundFunc.a === "AAA"

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// let boundSay = markov.says.myBind(pavlov, "meow");
// boundSay("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true


function curriedSum(numArgs) {
  let numbers = [] 

  return function _curriedSum(num) {
    numbers.push(num)
    if (numArgs === numbers.length) {
      let sum = 0
      numbers.forEach((el) => {
        sum += el
      });
      return sum ;
    } else {
      return _curriedSum;
    }
  }
}

// const sum = curriedSum(4);
// sums(5)(30)(20)(1);

Function.prototype.curry = function (numArgs) {
  const fn = this;
  let args = [];

  return function _curry(arg) {
    args.push(arg);
    if (numArgs === args.length) {
      return fn.apply(fn, args);
    } else {
      return _curry;
    }
  }
}

// let fn = function (...nums) {
//   let product = 1
//   nums.forEach((el) => {
//     product *= el
//   });
//   return product;
// };

// let fnCurry = fn.curry(3);
// console.log(fnCurry(1)(2)(3));

function inherits(child, parent) {
  child.prototype = {
    prototype: parent.prototype,
    constructor: child
  };

  return child;
}

function child() {
  this.name = "child";
}

function parent() {}
parent.prototype.pname = () => "parent";

child.prototype = {
  __proto__: parent.prototype,
  constructor: child
};

// function surg () {};
// surg.prototype = parent.prototype;
// let s1 = new surg();
// console.log(s1);

let ch1 = new child();
console.log(ch1.pname())
console.log(ch1.name)
// console.log(inherits(child, parent).pname);