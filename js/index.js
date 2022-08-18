document.getElementById('btn-discount').addEventListener('click', function () {

    const priceField = document.getElementById('price-field');
    const priceString = priceField.value;
    const price = parseFloat(priceString);
    priceField.value = '';


    const discountField = document.getElementById('discount-percent');
    const discountParcentString = discountField.value;
    const discountParcent = parseFloat(discountParcentString);
    discountField.value = '';

    const couponField = document.getElementById('coupon-field');
    const value = couponField.value;
    if (price != 'number' && price < 0) {
        couponField.value = '';
        return alert('Enter a Valid Amount');

    }
    if (discountParcent != 'number' && price < 0) {
        couponField.value = '';
        return alert('Enter a Valid Percentage');
    }
    if (value === 'DOM') {
        const discountedPriceTotal = (discountParcent * price) / 100;
        const discountedPrice = price - discountedPriceTotal;

        const discountedField = document.getElementById('discounted-price');
        const discountedString = discountedField.innerText;
        discountedField.innerText = discountedPrice;
        couponField.value = '';

    } else {
        return alert('You must have a coupon to get discount');
    }



})