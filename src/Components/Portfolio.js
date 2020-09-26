import React, { Component } from 'react';
import { scroller } from 'react-scroll'
import ProjectsGallery from './PortfolioComponents/ProjectsGallery'
import ProjectCard from './PortfolioComponents/ProjectCard'

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeProject: 0,
      showActiveProject: false,
      projects: [],
      loaded: false,
    }

    this.updateProject = this.updateProject.bind(this);
    this.openProject = this.openProject.bind(this);
    this.closeProject = this.closeProject.bind(this);
  }

  componentDidUpdate() {
      const { loaded } = this.state;
      if (!loaded && this.props.data) {
        const { data } = this.props;
        const { projects } = data;

        projects.forEach((project, index) => {
            project.idx = index;
        });

        this.setState({ 
            loaded: true,
            projects: projects,
        });
      }
  }

  updateProject({ target }) {
    const index = target.getAttribute('idx');
    this.setState({ activeProject: index });
  }

  openProject() {
    this.setState({ showActiveProject: true });
    setTimeout(scroller.scrollTo('activeProject',
      {
        duration: 750,
        delay: 75,
        smooth: true,
        offset: 50,
      }), 200);

  }

  closeProject() {
    const { activeProject } = this.state;
    scroller.scrollTo(`project_${activeProject}`, {
      duration: 750,
      delay: 75,
      smooth: true,
      offset: -100,
    });
    setTimeout(() => this.setState({ showActiveProject: false }), 900);
  }

  render() {
    const { projects, activeProject, showActiveProject } = this.state;

    if (!projects.length) {
      return (
        <section id="portfolio">
          loading projects...
        </section>
      )
    }
    return (
      <section id="portfolio">
        <ProjectsGallery
          projects={projects}
          updateProject={this.updateProject}
          openProject={this.openProject}
        />
        <div id="activeProject">
        {showActiveProject
          ? <ProjectCard
              project={projects[activeProject]}
              closeProject={this.closeProject}
            />
          : <div />}
        </div>
      </section>
    );
  }
}

export default Portfolio;
