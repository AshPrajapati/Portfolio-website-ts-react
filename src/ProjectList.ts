export interface Project {
  id: number,
  name: string,
  image: string, 
  skills: string[],
}

export const ProjectList: Project[] = [
  {
    id: 1,
    name: "Dijkstra Algorithm Visualizer",
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`,
    skills: ["JavaScript" ,"HTML", "CSS"]
  },
  {
    id: 2,
    name: "Ecommerce Website",
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`,
    skills: ["React","Node.js","MongoDB"]
  },
  {
    id: 3,
    name: "Spotify Clone",
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png`,
    skills: ["React","Node.js","MongoDB","SpotifyAPI"]
  },
  {
    id: 4,
    name: "Social Media Website",
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png`,
    skills: ["React","Node.js","MySQL","GraphQL"]
  },
  {
    id: 5,
    name: "Dashboard Visualizer",
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png`,
    skills: ["JavaScript","HTML","CSS"]
  },
  {
    id: 6,
    name: "Mobile Game",
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png`,
    skills: ["React Native","JavaScript","HTML","CSS"]
  },
];