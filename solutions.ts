//Problem 1:
function formatValue(value: string | number | boolean) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {

        return !value;
    }
}


//Problem 2:
function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length;
    }

    if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}

//Problem 3:
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`
    }
    }

//Problem 4:
type Item = {
    title: string;
    rating: number;
};

function filterByRating(items: Item[]): Item[] {
    return items.filter(item => item.rating >= 4);
}
const books: Item[] = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

//Problem 5:
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  if (!Array.isArray(users)) {
    throw new Error("Invalid input: expected an array of users");
  }
  return users.filter(user => user.isActive === true);
}

const users: User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

//Problem 6:
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availabilityStatus = book.isAvailable ? 'Yes' : 'No';
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availabilityStatus}`);
}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};
//Problem 7:

function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
    const result: (string | number)[] = [];


    function isInArray(value: string | number, array: (string | number)[]): boolean {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!isInArray(arr1[i], result)) {
            result[result.length] = arr1[i];
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!isInArray(arr2[i], result)) {
            result[result.length] = arr2[i]; 
        }
    }

    return result;
};
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];




//Problem 8:
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
}
function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map(product => {
      const total = product.price * product.quantity;
      if (product.discount) {
        return total * (1 - product.discount / 100);
      }
      return total;
    })
    .reduce((sum, price) => sum + price, 0);
}
const products: Product[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];




