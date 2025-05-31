export const formattedDate = (date) => {
  // console.log(date)
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${padTwoZero(month)}-${padTwoZero(day)}`;
};

export const padTwoZero = (data) => {
  return String(data).padStart(2, "0");
};
