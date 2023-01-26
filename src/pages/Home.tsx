import React from "react";
import { INTERESTS, NAME, Skill, SKILLS } from "../StaticValues";

function Home() {
  return (
    <div>
      <div style={{ padding: "1%" }}>
        <h3>Hello, My Name is {NAME}</h3>
        {INTERESTS.map((interest: string, index: number) => (
          <span className="badge bg-dark mx-2" key={index}>
            {interest}
          </span>
        ))}
        {/* <LinkedInIcon />
          <EmailIcon />
          <GithubIcon /> */}
      </div>
      <div className="text-black" style={{ padding: "1%" }}>
        <h1> Skills </h1>
        <ul
          style={{
            listStyleType: "circle",
          }}
        >
          <h4>
            {SKILLS.map((skillObj: Skill, index: number) => (
              <li key={index}>
                <span style={{ display: "block" }}>{skillObj.skillTitle}</span>
                {skillObj.skill.map((currentSkill: string, id: number) => (
                  <span
                    className="badge bg-white text-black-50 mx-2"
                    style={{ fontSize: "small" }}
                    key={id}
                  >
                    {currentSkill}
                  </span>
                ))}
              </li>
            ))}
          </h4>
        </ul>
      </div>
    </div>
  );
}

export default Home;
