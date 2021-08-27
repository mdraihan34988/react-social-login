import logo from './logo.svg';
import './App.css';
import SocialButton from "./SocialButton";


const handleSocialLogin = (user) => {
  console.log(user);
};

const handleSocialLoginFailure = (err) => {
  console.error(err);
};

function App() {
  return (
    <div className="App">
      <SocialButton
      provider="facebook"
      appId="491966911812476"
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Facebook
    </SocialButton><br/>
    <SocialButton
      provider="google"
      appId="647312901722-gq5mn5btm5ndtsjq80b12b8rn7sc016r.apps.googleusercontent.com"
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Google
    </SocialButton><br/>
    <SocialButton
      provider="instagram"
      appId="258916439222433"
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Instagram
    </SocialButton><br/>

    <SocialButton
      provider="github"
      appId="3c4a983b93d55b8306bb"
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Github
    </SocialButton><br/>
    
    </div>
  );
}

export default App;
