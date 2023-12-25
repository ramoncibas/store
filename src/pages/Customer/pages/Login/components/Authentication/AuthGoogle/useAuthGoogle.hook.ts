import { useGoogleLogin } from 'react-google-login'
import { useGoogleLogout } from 'react-google-login'

const useAuthGoogle = () => {
  const { signIn, loaded: loginLoaded } = useGoogleLogin({
    clientId: '86vhj2q7ukf83q',
    redirectUri: `${window.location.origin}/google`,
    onSuccess: (code) => {
      console.log(code);
    },
    onFailure: (error) => {
      console.log(error);
    },
  })

  const { signOut, loaded: logoutLoaded } = useGoogleLogout({
    clientId: '86vhj2q7ukf83q',
    redirectUri: `${window.location.origin}/`,
  })

  const handleGoogleLoginSuccess = (response: any) => {
    // Aqui você pode lidar com a resposta bem-sucedida do login com o Google
    console.log('Login com Google bem-sucedido', response);
  };

  const handleGoogleLoginFailure = (response: any) => {
    // Aqui você pode lidar com a resposta de falha do login com o Google
    console.log('Falha no login com Google', response);
  };

  return {
    signIn,
    signOut,
    loginLoaded,
    logoutLoaded,
    handleGoogleLoginSuccess,
    handleGoogleLoginFailure
  }
};

export default useAuthGoogle;