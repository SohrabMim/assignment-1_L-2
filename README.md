1. What are the differences between Interface and Type in TypeScript?
Ans: interface → Can extend multiple interfaces or even types using the extends keyword.

type → Uses intersection (&) to combine or extend other types.
Example:-
Using - Interface
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}

2. What is the use of the keyof keyword in TypeScript? Provide an example.
Ans:
The keyof keyword in TypeScript is used to extract all the keys of an object type and create a union of those keys.

It allows developers to write type-safe code, especially when accessing object properties dynamically.

 Why is keyof useful?

Ensures only valid property names are used.

Helps in building generic, type-safe utility functions.

Prevents runtime errors by catching invalid keys during compile time.

Example:
type User = {
  id: number;
  name: string;
  age: number;
};

type UserKeys = keyof User;
 Example:
 (Type-Safe Property Access)
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  id: 1,
  name: "Farjana",
  age: 22,
};

getValue(user, "name"); 
getValue(user, "level2");

3.Explain the difference between any, unknown, and never types in TypeScript.
Ans:
The any type disables TypeScript’s type checking.
A variable declared with any can hold any value, and you can perform any operation on it.

Characteristics:

Most flexible but least safe.

Allows all operations without errors.

Can lead to runtime bugs.

Example:
let value: any = 10;
value = "hello";
value.toUpperCase();
2. unknown Type

The unknown type is safer than any.
A variable can hold any value, but you cannot use it without type checking.

Characteristics:

More type-safe than any.

Forces you to check the type before using the value.

Example:
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}


If you try to use data without checking:

data.toUpperCase();

 never Type

The never type represents values that never occur.

Characteristics:

Used for functions that never return (e.g., infinite loop, error throwing).

Indicates unreachable code paths.

Cannot assign any value to never.

Example:
function throwError(message: string): never {
  throw new Error(message);
}


Another example:

function loopForever(): never {
  while (true) {}
}

4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Ans: 
Enums in TypeScript are used to define a set of named constants.
They make code more readable, organized, and easier to maintain—especially when dealing with fixed sets like roles, status codes, or categories.

Example:
enum UserRoles{
    Admin ='Admin',
    Editor ='Editor',
    Viewer ='Viewer',
}
const canEidtor =(role:UserRoles)=>{
    if(role ===UserRoles.Admin || role ===UserRoles.Editor){
        return true
}
else return false;
};
const isEditPromision = canEidtor(UserRoles.Admin);
    
5. Provide an example of using union and intersection types in TypeScript.
Ans:
Union Type (|)

A union type allows a variable to hold one of several possible types.

type ID = string | number;

 Intersection Type (&)

An intersection type combines multiple types into one, requiring all properties.

type User = { name: string };
type Info = { age: number };

type Person = User & Info;    

