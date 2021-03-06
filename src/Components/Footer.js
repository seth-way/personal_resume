import { listLanguages } from 'highlight.js';
import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>
           <ul className="tech-used">
               <li className="tech-used-row">
                  <div>
                     <h3 style={{color: "white"}}>
                        Hosted on
                     </h3>
                  </div>
                  <div>
                     <img className="tech-icon" src={"/images/icons/azure.png"} alt="azure logo" />
                  </div>
               </li>
               <li className="tech-used-row">
                  <div>
                     <h3 style={{color: "white"}}>
                        Deployed using 
                     </h3>
                  </div>
                  <div>
                     <img className="tech-icon" src={"/images/icons/docker.png"} alt="docker logo" />
                  </div>
               </li>
          </ul>
           <ul className="copyright">
              <li>&copy; Copyright 2020 SWay</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
