describe("Helpers Test", function() {
    it ('should correctly calculate the tip percent', function() {
        expect(calculateTipPercent(50, 20)).toEqual(40);
        expect(calculateTipPercent(50, 0)).toEqual(0);

    });

    it ('should correctly round when calculating tip percent', function() {
        expect(calculateTipPercent(52, 18)).toEqual(35);
    });

    it ('should correctly calculate tip percent with tip larger than bill', function() {
        expect(calculateTipPercent(50, 100)).toEqual(200);
    });


})

