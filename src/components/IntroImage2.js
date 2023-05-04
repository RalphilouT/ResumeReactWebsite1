import "./IntroImageStyle2.css";

import React, { Component } from "react";

class IntroImage2 extends Component {
  render() {
    return (<div className="introimg2">
      <div className="introIMAGE2">
        
      </div>
      <div className="header">
        <h1>{this.props.header}</h1>
        <p>{this.props.paragraph}</p>
      </div>
    </div>);
  }
}

export default IntroImage2;
