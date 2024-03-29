import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import { Fade } from "react-awesome-reveal";

import WorkItems from "./WorkItems";
const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category.toLowerCase() === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleFilter = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <div>
      <Fade direction="down" duration={2000}>
        <div className="work_filters">
          {projectsNav.map((item, index) => {
            return (
              <span
                onClick={(e) => {
                  handleFilter(e, index);
                }}
                className={`${active === index ? "active-work" : ""} work_item`}
                key={index}>
                {item.name}
              </span>
            );
          })}
        </div>
      </Fade>

      <div className="work_container container grid">
        {projects.map((item) => {
          return (
            <Fade>
              <WorkItems item={item} key={item.id} />
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
