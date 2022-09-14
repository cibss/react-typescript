// Primitives: Number, String, Boolean
// Actually we dont need to define the type, because it's redundant (Type Inference)
// Once we assign the value (e.g: with a string a value)
// The typescript will protect the type to not be changed
let age: number = 12;
let userName: string = "Max";
let isInstructor: boolean = true;

// More complex types: Arrays, Objects
let hobbies: string[] = ["Sports", "Cooking"];

// Alias
type Person = {
  name: string;
  age: number;
};

let person: Person;
person = {
  name: "Max",
  age: 32,
};

let people: Person[];

// Union type
let course: string | number = 'React - The Complete Guide';
course = 1234;

// Function & types
function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
};

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
