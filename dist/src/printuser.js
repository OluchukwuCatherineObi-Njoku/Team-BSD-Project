"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printuser(person) {
    if (!person)
        return false;
    console.log('Name: ', person.name);
    console.log('Age: ', person.age);
    if (person.jobs) {
        console.log('Jobs: ');
        for (let i = 0; i < person.jobs.length; ++i) {
            console.log('Job [', i + 1, ']: ', person.jobs[i]);
        }
    }
    return true;
}
exports.default = printuser;
//# sourceMappingURL=printuser.js.map