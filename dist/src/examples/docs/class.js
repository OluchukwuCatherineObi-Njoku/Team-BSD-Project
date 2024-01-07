"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a person with a name and age.
 * @class
 */
class Person {
    /**
     * Constructs a new Person instance.
     * @param {string} name - The name of the person.
     * @param {number} age - The age of the person.
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     * Gets the name of the person.
     * @returns {string} The name of the person.
     */
    getName() {
        return this.name;
    }
    /**
     * Sets the name of the person.
     * @param {string} newName - The new name of the person.
     */
    setName(newName) {
        this.name = newName;
    }
    /**
     * Gets the age of the person.
     * @returns {number} The age of the person.
     */
    getAge() {
        return this.age;
    }
    /**
     * Sets the age of the person.
     * @param {number} newAge - The new age of the person.
     */
    setAge(newAge) {
        this.age = newAge;
    }
    /**
     * Returns a string representation of the person.
     * @returns {string} A string representation of the person.
     */
    toString() {
        return `Person[name=${this.name}, age=${this.age}]`;
    }
}
exports.default = Person;
//# sourceMappingURL=class.js.map