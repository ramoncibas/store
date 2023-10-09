import { FacebookProvider, LoginButton } from 'react-facebook';
import useAuthFacebook from "./useAuthFacebook.hook";
import FacebookCircleIcon from "../assets/FacebookCircleIcon.svg";

const AuthFacebook = () => {
  const { handleFacebookLoginError, handleFacebookLoginSuccess } = useAuthFacebook();

  return (
    <FacebookProvider appId="123456789">
      <LoginButton
        scope="email"
        onSuccess={handleFacebookLoginSuccess}
        onError={handleFacebookLoginError}
      >
        <img src={FacebookCircleIcon} alt="Sign in with Facebook" />
      </LoginButton>
    </FacebookProvider>
  )
}

export default AuthFacebook;