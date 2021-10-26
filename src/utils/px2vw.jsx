// Conversor de Pixel para Viewport width
const px2vw = (size, width = 1280) => `${(size / width) * 100}vw`;

export default px2vw;
