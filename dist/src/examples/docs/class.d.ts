/**
 * Represents a person with a name and age.
 * @class
 */
declare class Person {
    /**
     * The person's name.
     * @private
     */
    private name;
    /**
     * The person's age.
     * @private
     */
    private age;
    /**
     * Constructs a new Person instance.
     * @param {string} name - The name of the person.
     * @param {number} age - The age of the person.
     */
    constructor(name: string, age: number);
    /**
     * Gets the name of the person.
     * @returns {string} The name of the person.
     */
    getName(): string;
    /**
     * Sets the name of the person.
     * @param {string} newName - The new name of the person.
     */
    setName(newName: string): void;
    /**
     * Gets the age of the person.
     * @returns {number} The age of the person.
     */
    getAge(): number;
    /**
     * Sets the age of the person.
     * @param {number} newAge - The new age of the person.
     */
    setAge(newAge: number): void;
    /**
     * Returns a string representation of the person.
     * @returns {string} A string representation of the person.
     */
    toString(): string;
}
export default Person;
//# sourceMappingURL=class.d.ts.map