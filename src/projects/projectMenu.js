import React, { Component } from "react";
import classNames from "classnames";
import projects from "./projectData";
import "../styles/projectMenu.css";

export default class ProjectMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 1,
    };
  }

  handleProjectClick = (project) => {
    this.setState({
      activeProject: project,
    });
  };

  renderContent = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <img src={project.image} alt={project.title}></img>
        <div>{project.description}</div>
        <div className="link-container">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
        </div>
      </div>
    ));
  };

  render() {
    const { activeProject } = this.state;

    // Dynamically generate project titles from the projects object
    const projectItems = Object.keys(projects).map((key) => projects[key].title);

    return (
      <div className="project-menu">
        <div className="project-items-container">
          {projectItems.map((title, index) => (
            <div
              key={index}
              className={classNames("project-item", {
                activeProject: activeProject === index + 1,
              })}
              onClick={() => this.handleProjectClick(index + 1)}
            >
              <h2 className="title">{title}</h2>
            </div>
          ))}
        </div>
        <div className="project-sub-container">
          {this.renderContent([projects[activeProject]])}
        </div>
      </div>
    );
  }
}