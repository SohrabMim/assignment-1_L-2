# TypeScript Interview Q&A

## 1. What are the differences between Interface and Type in TypeScript?

**Answer:**

* **interface** → Can extend multiple interfaces or types using the `extends` keyword.
* **type** → Uses intersection (`&`) to combine or extend types.

### Example (Interface)

```ts
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}
```

---

## 2. What is the use of the `keyof` keyword in TypeScript?

**Answer:**
The `keyof` keyword extracts all the keys of an object type and creates a union of those keys.

### Why is `keyof` useful?

* Ensures only valid property names are used.
* Helps build type-safe generic functions.
* Prevents runtime errors by catching invalid keys at compile time.

### Example

```ts
type User = {
  id: number;
  name: string;
  age: number;
};

type UserKeys = keyof User; // "id" | "name" | "age"
```

### Type-safe property access example

```ts
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  id: 1,
  name: "Farjana",
  age: 22,
};

getValue(user, "name");   // valid
getValue(user, "level2"); // error
```

---

## 3. Explain the difference between `any`, `unknown`, and `never` types.

### **any**

* Disables TypeScript type checking.
* Most flexible but least safe.
* Allows any operations, may cause runtime bugs.

```ts
let value: any = 10;
value = "hello";
value.toUpperCase();
```

### **unknown**

* Safer alternative to `any`.
* Can hold any value but cannot be used without type checking.

```ts
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}

// data.toUpperCase(); // Error
```

### **never**

* Represents values that never occur.
* Used for functions that never return.

```ts
function throwError(message: string): never {
  throw new Error(message);
}

function loopForever(): never {
  while (true) {}
}
```

---

## 4. What is the use of Enums in TypeScript?

**Answer:**
Enums define a set of named constants, making code more readable and organized.

### String Enum Example

```ts
enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEditor = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  }
  return false;
};

const hasEditPermission = canEditor(UserRoles.Admin);
```

### Numeric Enum Example

```ts
enum Status {
  Pending = 0,
  Success = 1,
  Failed = 2,
}
```

---

## 5. Provide an example of union and intersection types.

### **Union Type (|)**

Allows a value to be one of several types.

```ts
type ID = string | number;
```

### **Intersection Type (&)**

Combines multiple types into one.

```ts
type User = { name: string };
type Info = { age: number };

type Person = User & Info;
```
