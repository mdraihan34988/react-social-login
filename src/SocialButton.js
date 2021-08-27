import React, { Component } from 'react'
import SocialLogin from "react-social-login";

export class SocialButton extends Component {
    render() {
        const { children, triggerLogin, ...props } = this.props;
        return (
          <button onClick={triggerLogin} {...props}>
            {children}
          </button>
        );
      }
}

export default SocialLogin(SocialButton);
