const useAuthLinkedin = () => {
  function handleFacebookLoginSuccess(response: any) {
    console.log(response.status);
  }

  function handleFacebookLoginError(error: any) {
    console.log(error);
  }

  return { handleFacebookLoginSuccess, handleFacebookLoginError }
};

export default useAuthLinkedin;