import React from "react";
import { Outlet } from "react-router-dom";
const Projects = () => {
  return (
    <div>
      Projects
      <Outlet />
    </div>
  );
};

export default Projects;
