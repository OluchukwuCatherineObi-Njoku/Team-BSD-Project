import { IPERSON } from './interfaces/TEAM_A';

export default function printuser(person: IPERSON) {
  if (!person) return false;

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
