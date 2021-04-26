export const CurrenciesType = {
  Dollar: "$",
  Euro: "€",
};
export default function (value, currency = CurrenciesType.Dollar) {
  if (!value) return "";
  value = value.toString();
  return `${value} ${currency}`;
}
