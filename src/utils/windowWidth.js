// Verifica se o tamanho da tela é menor que o tamanho dos pixels passado como parametro
const windowWidth = (size) => window.innerWidth <= size ? true : false;

export default windowWidth;
