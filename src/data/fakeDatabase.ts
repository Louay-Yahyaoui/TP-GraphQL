// fakeDatabase.ts
import {v4 as uuidv4} from 'uuid';

type Role = 'ADMIN' | 'USER';

// export interface Skill {
//     id: string;
//     designation: string;
// }

// export interface Cv {
//     id: string;
//     name: string;
//     age: number;
//     job: string;
//     skills: Skill[];
// }
export interface SkillInput {
    designation: string;
    id: string;
}

export interface CvInput {
    name: string;
    age: number;
    job: string;
    id: string;
    skills: SkillInput[];
}

export interface Cv extends CvInput {
    id: string;
}

export interface Skill extends SkillInput {
    id: string;
}


export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
    cvs: Cv[];
}

const randomDesignations = ['Web Developer', 'Data Analyst', 'Software Engineer', 'Cloud'];
const randomJobs = ['Full Stack Developer', 'Devops Engineer', 'Data Engineer' , 'Data Scientist'];
const randomNames = ['Louay Yahyaoui','Hachem Saihi','Med Ali Zoghlami','Mehdi Ben Salha','Zakaria Soussi']

const generateRandomSkill = (): Skill => ({
    id: uuidv4(),
    designation: randomDesignations[Math.floor(Math.random() * randomDesignations.length)],
});

let index=0

const generateRandomCv = (): Cv => ({
    id: uuidv4(),
    name: randomNames[index-1],
    age: Math.floor(Math.random() * (65 - 18 + 1)) + 18,
    job: randomJobs[Math.floor(Math.random() * randomJobs.length)],
    skills: Array.from({length: Math.floor(Math.random() * 2) + 1}, generateRandomSkill),
});

const generateRandomUser = (): User => ({
    id: uuidv4(),
    name: randomNames[index],
    email: `${randomNames[index++].replace(/\s/g, '')}.${Math.floor(Math.random() * 100)}@example.com`,
    role: Math.random() < 0.2 ? 'ADMIN' : 'USER',
    cvs: Array.from({length: Math.floor(Math.random() * 2) + 1}, generateRandomCv),
});

export const fakeDatabase: User[] = Array.from({length: 5}, generateRandomUser);
