import React, { Component } from 'react';
/*
import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.birds.min'
*/

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
        this.vantaRef = React.createRef();

        this.state = {
            width: 1400,
        };

        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
        /*
        this.vantaEffect = BIRDS({
            el: this.vantaRef.current,
            THREE: THREE // use a custom THREE when initializing
        });

        this.vantaEffect.setOptions({
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: "#556b2f",
            color1: '0x#688c98',
            color2: '0x#ffcc32',
            colorMode: "lerp"
          })
          */
    }

    componentWillUnmount() {
        // if (this.vantaEffect) this.vantaEffect.destroy();
        window.removeEventListener('resize', this.updateDimensions);
    }

    render () {
        const { width } = this.state;
        const { project, closeProject } = this.props;
        const { image, title, blurb, url } = project;
        const projectGIF = '/images/portfolio/' + image + '.gif';
        const smallScreen = width < 500;

        const [
            cardMarginLR,
            cardMarginTop,
            cardMarginBottom,
            fontSize
            ] = dynamicStyles(smallScreen);

        const gifWidth = smallScreen ? 225 : Math.min(Math.floor( 3 * width / 4), 600);
        const gifHeight = gifWidth / 16 * 9;
        
        const overlayStyleObj = {
            marginTop: cardMarginTop,
            marginBottom: cardMarginBottom,
            marginLeft: cardMarginLR,
            marginRight: cardMarginLR,
            padding: `${cardMarginLR} ${cardMarginBottom}`
        }



        return (
            <div className="project-card" id="activeProject" name="#activeProject" /*ref={this.vantaRef}*/>
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
                    <div className="project-card-gif" style={{backgroundImage: `url(${projectGIF})`, width:`${gifWidth}px`, height: `${gifHeight}px`}}>

                    </div>
                    <div className="project-description" style={{fontSize: fontSize}}>
                        {blurb.split('\n').map((paragraph, idx) => (<p>{paragraph}</p>))}
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
