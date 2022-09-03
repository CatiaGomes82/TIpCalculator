/**
* Get the total amount of tip based percentage of bill.
* @param {number} totalBill
* @param {number} tipPercentage
* @returns {number} - total amount of tip.
*/
export const getTotalTip = (totalBill: number, tipPercentage: number) => {
    const totalBillIsNaN = !totalBill || isNaN(totalBill) || typeof totalBill === 'object' || typeof totalBill == "boolean";
    const tipPercentageIsNaN = !tipPercentage || isNaN(tipPercentage) || typeof tipPercentage === 'object' || typeof tipPercentage == "boolean";

    if (totalBillIsNaN || tipPercentageIsNaN) {
        return 0;
    }

    return totalBill * (tipPercentage / 100);
};

export const getTotalSplit = (totalBill: number, numberOfPeople: number) => {
    return totalBill / numberOfPeople;
};

export const getSplitTip = (totalSplit: number, tipPercentage: number) => {
    return totalSplit * (tipPercentage / 100);
};