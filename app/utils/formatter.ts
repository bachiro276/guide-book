export const formatNumber = (input: any): any  => {
  const numeric = input.toString().replace(/,/g, "");

  return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}