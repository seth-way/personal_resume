import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';


const dynamicStyles = (small) => {
    const marginLR = small ? "15px" : "50px";
    const marginTop = small ? "45px" : "100px";
    const marginBottom = small ? "45px" : "50px";
    const fontSz =  small ? "12px" : "16px";

    return [marginLR, marginTop, marginBottom, fontSz];
}

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 1400,
            text: "still loading project info.....",
        };
        this.updateMarkDown = this.updateMarkDown.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateMarkDown() {
        const { project } = this.props;
        const { path } = project;
        const mdPath = '/markdowns/' + path + '.md';
        fetch(mdPath)
            .then(response => {
                return response.text()
            })
            .then(text => {
                this.setState({
                    text,
                })
            })
            .catch(err => console.log);
    }

    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
        console.log('projectCard componentDidMount()');
        this.updateDimensions();
        this.updateMarkDown();
        window.addEventListener('resize', this.updateDimensions);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.project.title !== this.props.project.title) {
            this.updateMarkDown();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render () {
        console.log('projectCard render()')
        const { width, text } = this.state;
        const { project, closeProject } = this.props;
        const { title, url } = project;
        const smallScreen = width < 500;

        const [
            cardMarginLR,
            cardMarginTop,
            cardMarginBottom,
            fontSize
            ] = dynamicStyles(smallScreen);
        
        const overlayStyleObj = {
            marginTop: cardMarginTop,
            marginBottom: cardMarginBottom,
            marginLeft: cardMarginLR,
            marginRight: cardMarginLR,
            padding: `${cardMarginLR} ${cardMarginBottom}`
        }



        return (
            <div className="project-card" id="activeProject" name="#activeProject">
                <div className="project-card-overlay" style={overlayStyleObj}>
                    <div
                        id="close-project"
                        onClick={() => { closeProject()}}
                    >
                        <a><i className="icon-plus"></i></a>
                    </div>
                    <div className="project-card-overlay-header">
                        <h1>{title}</h1>
                    </div>
                    <div className="project-description" style={{fontSize: fontSize}}>
                        <ReactMarkdown
                            source={text}
                            escapeHtml={false}
                            className="project-description"
                        />
                    </div>
                    <div className="projectButtons" >
                    <span
                        onClick={
                            () => { closeProject()}}
                    >
                        <a  
                            className="button btn close-btn"
                            style={{fontSize: fontSize}}
                        >Close</a>
                    </span>
                    <span>
                        <a
                            href={url} rel="noopener noreferrer"
                            target="_blank"
                            className="button btn leetcode-btn"
                            style={{fontSize: fontSize}}
                        >Visit Repo
                        </a>
                    </span>
                </div>
                </div>
           </div>
        );
    }
};

export default ProjectCard;
