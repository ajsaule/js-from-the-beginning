# Console.log

```js
console.log({ a: 1, b: 2})
```
This would be logging out an object literal to the console


```js
console.table({ a: 1, b: 2 })
```
Prints the object out as a table

```js
console.error('This is an error)
```
Logs out an error to the console, highlighted in red

```js
console.time('Hello')
console.log('Hello world')
console.log('Hello world')
console.log('Hello world')
console.log('Hello world')
console.log('Hello world')
console.timeEnd('Hello')
```
console.time and console.timeEnd will output how long it has taken for your code to run in between the time and timeEnd. 

# Varibales

Let and const have a big advantage when it comes to block scoping. 

You can initialise a variable by just declaring it with a name, it’s initial value is undefined.
```js
var greeting
```

The only characters that can be inside of a variable are letters, numbers, _, $, but they cannot start with a number.

You can use $ to declare a variable, usually we will be declaring variables with _ or $ in more advanced patterns, such as declaring private variables. 

Multi word variables 
```js
var firstName = 'John'; // camel case 
var first_name = 'John'; // snake case 
var FirstName = 'Jon'; // pascal case 
```

When we get into OOP, constructor functions should start with an uppercase (pascal case), ES6 classes should be declared in pascalcase.

Let and const are identical on the global scope, block level scoping is where the advantages come into play for let. 
```js
const person = {
  name: 'John',
  age: 30
}

person.name = 'Sarah'
person.age = 32

const numbers = [1, 2, 3, 4, 5]
numbers.puh(6)

console.log(numbers) // output: [1, 2, 3, 4, 5, 6]
```

If a const is assigned to an array or an object or another reference type we can actually mutate or assign new values to the data in that structure, we just can’t re-assign the const - aka. It can’t be assigned as a new primitive value.
- This makes our code more robust, more secure, and ultimately more readable 



# Data types
#### In JavaScript we have two types of data: 

##### Primitive data types 
- Stored directly in the location the variable accesses 
- Stored on the stack 
  - When we access primitive data we access it by its actual value 
##### Reference data types 
- Accessed by reference
  - Data isn’t actually stored in the variable 
- Objects that are stored on the heap 
  - It’s stored on what’s called the heap, which has to do with dynamically allocated memory.
- A pointer to a location in memory 

##### Primitive data types include:
- String 
- Number 
  - Integers, decimals, floats are all considered numbers in JS. Some other languages there’s decimal types, float types and - they’re treated as separate types.
- Boolean 
- Null 
  - Intentional empty value 
- Undefined 
  - Variable which has not been assigned a value 
- Symbols (ES6) 

##### Reference data types (considered objects)
- Arrays 
- Object literals
- Functions 
- Dates 
- Anything else.. That you can store.

##### JS is a dynamically typed language: 
- Data types are associated with values not variables 
- The same variable can hold multiple data types
  - Whereas in most languages which are statically typed like Java, C#, this isn’t allowed. 
  - In fact in many languages you actually have to define what type of value is going to be in that variable (There are technologies that can turn JS into a statically typed language, TS is most popular, being a superset of JS - meaning it is everything that JS offers plus more on top of that. There are also other modules and addons like Flow or Flow.js which can give us typing in JS. 
  - But at it’s core JavaScript is very dynamic in nature

###### Primitive types: The actual data is being accessed in that variable.

In JS this is kindof a mistake or bug, null has 0 as a type tag, hence the bogus `typeof` return value (reference) object. 
```js
const car = null

console.log(typeof car) // output: 'object'
```

###### Reference types: The variable is simply referencing a place in memory where that data is located. 

```js
// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music']
// Object literal 
const address = {
  city: 'Boston',
  state: 'MA'
}
// Date generator
const today = new Date()
```


#### Type conversion 

Forms return strings by default so we have to parse the input to e.g. do some calculations on it. 

![type-conversion.png](./type-conversion.png)

Nan => Not a number: Will get output when a value is attempted to get parsed as a number but cannot. E.g. When we do something like below: 

```js
let value = Number('hello')

console.log(value) // Output: NaN
```

```js
let value = Number([1, 2, 3])

console.log(value) // Output: NaN
```

```js
parseInt('100.30') // Output: 100
parseFloat('100.30') // Output: 100.3
```

###### Type Coercion: JS does the type conversion for us instead of us typing it out 

```js
const value1 = '5'
const value2 = 6

const sum = value1 + value2 

console.log(sum) // output: '56'
```

This is an example of type coercion as JS automatically converts value2 to a string and concatenates the two values to make the string ‘56’. 


# OOP

