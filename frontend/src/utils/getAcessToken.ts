const getAcessToken = (): string =>
  document.cookie.replace(
    /(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

export default getAcessToken;
