import { useLinkedIn } from 'react-linkedin-login-oauth2';

const useAuthLinkedin = () => {
  const { linkedInLogin: handleLinkedInLogin } = useLinkedIn({
    clientId: '86vhj2q7ukf83q',
    redirectUri: `${window.location.origin}/linkedin`,
    onSuccess: (code) => {
      console.log(code);
    },
    closePopupMessage: 'true',
    onError: (error) => {
      console.log(error);
    },
  });

  return { handleLinkedInLogin }
};

export default useAuthLinkedin;