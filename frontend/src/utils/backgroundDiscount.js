/**
 * Muda a cor de fundo do indicador de desconto de acordo com a porcentagem informada
 * @param discount numero inteiro para desconto no produto
 * @returns uma cor hexadecima sem "#"
 */
export const backgroundDiscount = (discount) => {
  let color = {
    biggestDiscount: "FF705A",
    bigDiscount: "FF834E",
    normalDiscount: "FFBE17",
  };
  let background =
    discount >= 45
      ? color.biggestDiscount
      : discount >= 35
      ? color.bigDiscount
      : color.normalDiscount;
  return background;
};
