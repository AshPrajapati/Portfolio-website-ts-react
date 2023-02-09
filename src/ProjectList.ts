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
    image: `https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg`,
    skills: ["JavaScript" ,"HTML", "CSS"]
  },
  {
    id: 2,
    name: "Ecommerce Website",
    image: `https://www.criticalmissioncomputing.co.uk/wp-content/uploads/2020/02/e-commerce-background-img.png`,
    skills: ["React","Node.js","MongoDB"]
  },
  {
    id: 3,
    name: "Spotify Clone",
    image: `https://i.pcmag.com/imagery/articles/07x3Qi118xyGJz8uN8v6tHm-1..v1616686921.jpg`,
    skills: ["React","Node.js","MongoDB","SpotifyAPI"]
  },
  {
    id: 4,
    name: "Social Media Website",
    image: `https://smashballoon.com/wp-content/uploads/2020/10/How-to-Integrate-a-Social-Media-Into-Your-Website.png`,
    skills: ["React","Node.js","MySQL","GraphQL"]
  },
  {
    id: 5,
    name: "Dashboard Visualizer",
    image: `https://topflightapps.com/wp-content/uploads/2020/08/example-of-a-custom-build-dashboard-.png`,
    skills: ["JavaScript","HTML","CSS"]
  },
  {
    id: 6,
    name: "Mobile Game",
    image: `https://www.coolmathgames.com/sites/default/files/Snake%20OG%20Image.png`,
    skills: ["React Native","JavaScript","HTML","CSS"]
  },
];