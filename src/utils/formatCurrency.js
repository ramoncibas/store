/**
 * Formata um valor inteiro para a moeda brasileira "Real $"
 * @param value inteiro
 * @returns valor formatado, ex: R$ 0.00
 */
function formatCurrency(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default formatCurrency;