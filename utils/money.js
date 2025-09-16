export function convertCurrency(price) {
    return (price / 100).toFixed(2);
}

console.log(convertCurrency(1014));