import useAuthLinkedin from "./useAuthLinkedin.hook";
import LinkedInCircleIcon from "../assets/LinkedInCircleIcon.svg";

const AuthLinkedin = () => {
  const { handleLinkedInLogin } = useAuthLinkedin();

  return (
    <button onClick={handleLinkedInLogin}>
      <img
        src={LinkedInCircleIcon}
        alt="Sign in with Linked In"
      />
    </button>

  )
}

export default AuthLinkedin;