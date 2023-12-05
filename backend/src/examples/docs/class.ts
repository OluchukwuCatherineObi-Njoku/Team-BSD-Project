/**
 * Represents a person with a name and age.
 * @class
 */
class Person {
  /**
   * The person's name.
   * @private
   */
  private name: string;

  /**
   * The person's age.
   * @private
   */
  private age: number;

  /**
   * Constructs a new Person instance.
   * @param {string} name - The name of the person.
   * @param {number} age - The age of the person.
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   * Gets the name of the person.
   * @returns {string} The name of the person.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Sets the name of the person.
   * @param {string} newName - The new name of the person.
   */
  setName(newName: string): void {
    this.name = newName;
  }

  /**
   * Gets the age of the person.
   * @returns {number} The age of the person.
   */
  getAge(): number {
    return this.age;
  }

  /**
   * Sets the age of the person.
   * @param {number} newAge - The new age of the person.
   */
  setAge(newAge: number): void {
    this.age = newAge;
  }

  /**
   * Returns a string representation of the person.
   * @returns {string} A string representation of the person.
   */
  toString(): string {
    return `Person[name=${this.name}, age=${this.age}]`;
  }
}

export default Person;
