function updateProductNumber(product, price, inc){
    const productInput = document.getElementById(product + '-input');
    let productInputStr = productInput.value;
    // console.log(typeof(productInputStr));
    const productTotalPrice = document.getElementById(product + '-total-price');

    if(inc){
        productInputStr = parseInt(productInputStr)+1;
    }
    else if(productInputStr>0){
        productInputStr = parseInt(productInputStr)-1;
    }
    productInput.value= productInputStr;
    productTotalPrice.innerText = price*productInput.value;

    calculation();
    
};

function countOfProduct(product){
    const productCount = document.getElementById(product + '-input');
    const count = parseInt(productCount.value);
    return count;
}

function calculation(){
    const totalPhone = countOfProduct('phone')*1400;
    const totalCase = countOfProduct('case')*59;
    const subTotal = totalPhone + totalCase;
    const tax = subTotal/10;
    const total = subTotal+ tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total').innerText = total;
}

document.getElementById('phone-plus-btn').addEventListener('click', function(){
    updateProductNumber('phone', 1400, true);
});

document.getElementById('phone-minus-btn').addEventListener('click', function(){
    updateProductNumber('phone', 1400, false);
});

document.getElementById('case-plus-btn').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-input');
    // const caseInputStr = caseInput.value;
    // const valueNow = parseInt(caseInputStr)+1;
    // caseInput.value= valueNow;
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus-btn').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-input');
    // const caseInputStr = caseInput.value;
    // const valueNow = parseInt(caseInputStr)-1;
    // caseInput.value= valueNow;
    updateProductNumber('case', 59, false);
});

