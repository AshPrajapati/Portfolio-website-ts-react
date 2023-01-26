import React from 'react';

function Home() {
    return (
      <div style={{marginTop:"0px"}}>
        <div style={{backgroundColor:"GrayText"}}> 
          <h1 style={{height:"450px",padding:"100px",textAlign:"center"}}> Hi, My Name is Aayush</h1>
          <div>
            <h1 style={{textAlign:"center",fontFamily:"monospace"}}>A software developer which crafts the software.</h1>
            {/* <LinkedInIcon />
            <EmailIcon />
            <GithubIcon /> */}
          </div>
        </div>
        <div>
          <h1> Skills</h1>
          <ol >
            <li >
              <h2> Front-End</h2>
              <span>
                ReactJS, Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
              </span>
            </li>
            <li>
              <h2>Back-End</h2>
              <span>
                NodeJS, ExpressJS, GraphQL, ApolloServer,
                MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
              </span>
            </li>
            <li>
              <h2>Languages</h2>
              <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
            </li>
          </ol>
        </div>
      </div>
    );
  }
  
export default Home;