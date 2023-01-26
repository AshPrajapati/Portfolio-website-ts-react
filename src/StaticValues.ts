export interface Skill {
    skillTitle: string,
    skill: string[],
}

export const NAME = "Jaypal";
export const INTERESTS = [
    "Software Craftsperson",
    "Problem Solver",
    "Traveller",
]

export const SKILLS: Skill[] = [
    {
        skillTitle: "Front-End",
        skill: ["ReactJS", "Redux", "HTML", "CSS", "NPM", "BootStrap", "MaterialUI", "Yarn", "TailwindCSS", "StyledComponents"]
    },
    {
        skillTitle: "Back-End",
        skill: ["NodeJS", "ExpressJS", "GraphQL", "ApolloServer", "MySQL", "MongoDB", "DynamoDB", "DigitalOcean", "AWS S3", "MS SQL"]
    },
    {
        skillTitle: "Languages",
        skill: ["JavaScript", "Java", "Python", "C#", "C", "C++", "TypeScript", "Go"]
    }
]

export const AUTHORS = "Jaypal Mudaliyar & Aayush Prajapati";

