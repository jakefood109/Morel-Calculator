function calculatePortion() {
    const dollars = parseFloat(document.getElementById('dollars').value);
    const stashprice = parseFloat(document.getElementById('stashprice').value);
    const stashamount = parseFloat(document.getElementById('stashamount').value);
    const expectedProfit = parseFloat(document.getElementById('profit').value) || 0;

    let mushroomWeight = (stashamount / stashprice) * dollars - (expectedProfit * (stashamount / stashprice));
    let resultElement = document.getElementById('result');

    if (mushroomWeight > stashamount || isNaN(mushroomWeight)) {
        resultElement.innerHTML = 'Error';
    } else if (mushroomWeight > 0) {
        resultElement.innerHTML = `${dollars} dollars will buy you ${mushroomWeight.toFixed(2)} grams.`;
    } else {
        resultElement.innerHTML = 'Error';
    }
}
