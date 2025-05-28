const {
    calculateDiscount,
    filterProducts,
    sortInventory
} = require ('../sharing-task.js')

test("applies a valid discount rate", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
});

test("handles an invalid discount rate gracefully", () => {
    expect(calculateDiscount(100, -0.1)).toBe(null);
});

test("handles edge case with price of 0", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
});

let productArray = ['yarn', 'needles', 'hooks', 'marker']
describe('Filtering Products', () =>{

    test("should return any element greater than five characters", () => {
        expect(filterProducts(productArray,(product) => product.length > 5)).toEqual(["needles", "marker"]);
    });
    test("should return empty array if inventory is not an array", () => {
        expect(filterProducts('yarn', (product) => product.length > 5)).toEqual([]);
    });
    test("should return an empty array if inventory is an empty array", () => {
        expect(filterProducts([], (product) => product.length >5)).toEqual([]);
    })
});

let beers = {
    name: 'Budweiser', ABV: 5,
    name: 'Bud Light', ABV: 4.2,
    name: 'Schlafley', ABV: 5.2
}

describe('Sorting Products', () => {

    test('should return an empty array if')
})