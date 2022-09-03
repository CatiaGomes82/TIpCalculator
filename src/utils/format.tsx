/**
* Get a number formatted to local currency.
* @param {number} amount - A number to be formatted.
* @returns {string} - Formatted number in local currency as string.
*/
export const formatCurrency: any = (amount: number) => {
  if (!amount || isNaN(amount) || typeof amount === "object" || typeof amount == "boolean") {
    return "";
  }

  const formattedtString = amount.toLocaleString("en-GB", { style: "currency", currency: "GBP" });
  const splitNumberString = formattedtString.split(".");
  let wholeNumber = splitNumberString[0];

  if (Number(splitNumberString[1]) === 0) {
    return wholeNumber;
  }

  return formattedtString;
};