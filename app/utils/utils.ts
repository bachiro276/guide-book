export const formatNumber = (input: any): any  => {
  const numeric = input.toString().replace(/,/g, "");

  return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getVietnamTime = (): string => {
  return new Date().toLocaleTimeString("en-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  });
};