describe("Payments Test", function() {
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 20;
    })

    it('should create billAmt, tipAmt, and tipPercent on createCurPayment', function() {
        expect(createCurPayment()).toEqual({billAmt: '50', tipAmt: '20', tipPercent: 40});

        billAmtInput.value = 50;
        tipAmtInput.value = 0;
        expect(createCurPayment()).toEqual({billAmt: '50', tipAmt: '0', tipPercent: 0});
    });

    it('should return undefined with missing bill or tipAmt on createCurPayment', function() {
        billAmtInput.value = '';
        tipAmtInput.value = 20;
        expect(createCurPayment()).toEqual(undefined);

        billAmtInput.value = 50;
        tipAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);  

        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);  

        billAmtInput.value = 0;
        tipAmtInput.value = 20;
        expect(createCurPayment()).toEqual(undefined);  
    });

    it('should add to Payment Table on appendPaymentTable()', function() {
        submitPaymentInfo();

        let table = document.querySelectorAll('#paymentTable tbody tr td');
        expect(table.length).toEqual(3);
        expect(table[0].innerText).toEqual('$50');
        expect(table[1].innerText).toEqual('$20');
        expect(table[2].innerText).toEqual('40%');
    });

    it('should correctly calculate tipPercentAvg on updateSummary()', function() {
        updateSummary();

    });

    it('should update the summary table on updateSummary()', function() {
        updateSummary();

        let summaryTable = document.querySelectorAll('#summaryTable tbody tr td');
        expect(summaryTable.length).toEqual(3);
        // expect(summaryTable[0].innerText).toEqual('$50');
        // expect(summaryTable[1].innerText).toEqual('$20');
        // expect(summaryTable[2].in 
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        allPayments = {};
        paymentTbody.innerHTML = '';
        tipPercentAvg = 0;
    });

})



// function updateSummary() {
//     let tipPercentAvg;
//     let paymentTotal = sumPaymentTotal('tipPercent');
//     let numberOfPayments = Object.keys(allPayments).length;
  
//     if (paymentTotal === 0 && numberOfPayments === 0) {
//       tipPercentAvg = 0;
//     } else {
//       tipPercentAvg = paymentTotal / Object.keys(allPayments).length;
//     }
  
//     summaryTds[0].innerHTML = '$' + sumPaymentTotal('billAmt');
//     summaryTds[1].innerHTML = '$' + sumPaymentTotal('tipAmt');
//     summaryTds[2].innerHTML =  Math.round(tipPercentAvg) + '%';
//   }








