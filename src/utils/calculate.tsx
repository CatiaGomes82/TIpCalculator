/**
* Get the total amount of tip based percentage of bill.
* @param {number} totalBill
* @param {number} tipPercentage
* @returns {number} - total amount of tip.
*/
export const getTotalTip = (currentBill: number, tipPercentage: number) => {
    const totalBillIsNaN = !currentBill || isNaN(currentBill) || typeof currentBill === "object" || typeof currentBill == "boolean";
    const tipPercentageIsNaN = !tipPercentage || isNaN(tipPercentage) || typeof tipPercentage === "object" || typeof tipPercentage == "boolean";

    if (totalBillIsNaN || tipPercentageIsNaN) {
        return 0;
    }

    return currentBill * (tipPercentage / 100);
};

export const getTotalBill = (totalBill: number, tipPercentage: number) => {
    return totalBill + (totalBill * (tipPercentage / 100));
};

export const getTotalSplit = (totalBill: number, numberOfPeople: number) => {
    return totalBill / numberOfPeople;
};

export const getSplitTip = (totalTip: number, numberOfPeople: number) => {
    return totalTip / numberOfPeople;
};