import React, { Component } from 'react';

class Buttons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grad: false,
      business: false,
      content: {}

    }
  }

  clickGrad = () => {
    this.setState({
      grad: true,
      business: false
    })
  }

  clickLFGrad = () => {
    this.setState({
      grad: false,
      business: true
    })
  }

  render() {

    this.state.content =
      <div className="content-placeholder">
        ^^ Please click a button above! ^^
      </div>

    if (this.state.grad) {

      this.state.content =
        <div className="grad-form">
          <p>Sign-up using the form below:</p>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSecx7Wj8uoSoA3FJ4oYm0lkJkhYkb6Zykrwv6vbaiHj3ufXpQ/viewform?embedded=true" width="640" height="1315" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </div>

    }

    if (this.state.business) {

      this.state.content =
        <div className="access-link">
          <a href="mailto:business@techgrads.co.uk?subject=Request access to TechGrad list&amp;body=Hi TechGrads.co.uk, I'd like access to the list of TechGrads">
            Get in touch so that we may put you in contact with a TechGrad!
          </a>
        </div>

    }

    return(
      <div className="main-content">
        ARE YOU:
        <div className="inner">
          <button onClick={this.clickGrad}>A TECHGRAD</button><button onClick={this.clickLFGrad}>LOOKING FOR A TECHGRAD</button>
        </div>
        <div className="expanded-content">
          {this.state.content}
        </div>
      </div>
    )
  }
}

export default Buttons;
