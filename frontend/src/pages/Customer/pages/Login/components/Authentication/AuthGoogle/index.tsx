import GoogleLogin from "react-google-login";
import useAuthGoogle from "./useAuthGoogle.hook";
import GoogleCircleIcon from "../assets/GoogleCircleIcon.svg";

const AuthGoogle = () => {
  const { handleGoogleLoginSuccess, handleGoogleLoginFailure } = useAuthGoogle();

  return (
    <button onClick={() => {}}>
      <img src={GoogleCircleIcon} alt="Sign in with Google" />
    </button>
  )
}

export default AuthGoogle;