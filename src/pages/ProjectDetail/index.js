import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const project = useParams().project;

  return <span> {project}</span>;
};

export default ProjectDetails;

