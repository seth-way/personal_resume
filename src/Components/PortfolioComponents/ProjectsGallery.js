import React, { Component } from 'react';

const projectCardColorPicker = (idx) => {
    const colors = ['#E27D60', '#659DBD', '#E8a87C', '#C38D9E', '#AFD275'];
    return colors[idx % colors.length];
}

const renderProjectsByRow = (projects, ppr, cb1, cb2) => {
    const numRows = Math.ceil((projects.length + 1) / ppr);
    let projectsByRow = new Array(numRows);
    
    projects.forEach((project, idx) => {
        const targetIdx = Math.floor(idx / ppr);
        if (!projectsByRow[targetIdx]) {
            projectsByRow[targetIdx] = [];
        }
        projectsByRow[targetIdx].push(project);
    });
    
    const mapRow = (row) => (
        row.map((project) => {
            const { path, title, description, idx } = project;
            const projectImage = '/images/portfolio/images/' + path + '.jpg';
            return (                
                <div
                    className="portfolio-item"
                    style={{backgroundImage: `url(${projectImage})`}}
                    onClick={(e) => {cb1(e); cb2();}}
                    idx={idx}
                    id={`project_${idx}`}
                >
                    <div className="item-content" style={{backgroundColor: projectCardColorPicker(idx)}} idx={idx}>
                        <h2 idx={idx}>{title}</h2>
                        <h3 idx={idx}>{description}</h3>
                    </div>
                </div>
                
            );
        })
    );
    
    return (
        <div className="portfolio-items-all">
            {projectsByRow.map((row) => (
                <div className="portfolio-items-row">
                    {mapRow(row)}
                </div>      
            ))}
        </div>
    );
}

class ProjectsGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            windowWidth: false,
        }

        this.updateDimensions = this.updateDimensions.bind(this);
    }
    
    updateDimensions = () =>{
        this.setState({ windowWidth: window.innerWidth});
    }
  
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }
  
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        const { projects, updateProject, openProject } = this.props;
        const { windowWidth } = this.state;

        if (windowWidth && projects.length) { //once window size and projects have loaded
            const containerWidth = Math.floor( windowWidth * (windowWidth > 500 ? .9 : .95));
            const projectsPerRow = Math.max(Math.floor(containerWidth / 320), 1);
            return (
                <div className="portfolio-container" style={{width: `${containerWidth}px`}}>
                    <h1>Check Out a Few of My Most Recent Projects.</h1>
                    <div>
                        {renderProjectsByRow(projects, projectsPerRow, updateProject, openProject)}
                    </div>
                </div>
            );
        }
        return (
            <div></div>
        );
    }
}

export default ProjectsGallery;
