function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('temp').value);
    const fromunit = document.getElementById('fromunit').value;
    const tounit = document.getElementById('tounit').value;

    let result = 0;

    if (fromunit === 'fahrenheit' && tounit === 'celsius') {
        result = ((tempInput - 32) * 5) / 9;
    } else if (fromunit === 'fahrenheit' && tounit === 'kelvin') {
        result = ((tempInput - 32) * 5) / 9 + 273.15;
    } else if (fromunit === 'celsius' && tounit === 'fahrenheit') {
        result = (tempInput * 9) / 5 + 32;
    } else if (fromunit === 'celsius' && tounit === 'kelvin') {
        result = tempInput + 273.15;
    } else if (fromunit === 'kelvin' && tounit === 'fahrenheit') {
        result = ((tempInput - 273.15) * 9) / 5 + 32;
    } else if (fromunit === 'kelvin' && tounit === 'celsius') {
        result = tempInput - 273.15;
    } else {
        result = tempInput;
    }

    document.getElementById('result').textContent = `${result.toFixed(2)} ${tounit}`;
}
