function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    for (const key of keys) {
        if (!(key in obj)) {
            return false;
        }
    }
    return true;
}

// Example usage:
const person1 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person1, ["name", "age"])); 
console.log(validateKeys(person1, ["name", "address"])); 
